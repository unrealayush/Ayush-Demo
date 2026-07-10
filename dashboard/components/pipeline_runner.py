import os
import time
import gradio as gr
from typing import Generator, List, Tuple, Dict, Any, Optional

from dashboard.components.scenario_manager import get_manager
from dashboard.utils.pipeline_orchestrator import get_orchestrator, PipelineStageResult, PipelineExecutionResult
from dashboard.components.stage_progress import render_vertical_pipeline
from dashboard.components.interaction_table import load_interaction_data, extract_residue_number

# Standardized modular component imports
import dashboard.components.protein_viewer as protein_viewer_comp
import dashboard.components.docking_viewer as docking_viewer_comp
import dashboard.components.graph_panel as graph_panel_comp
import dashboard.components.validation_panel as validation_panel_comp
import dashboard.components.evidence_passport as evidence_passport_comp
import dashboard.components.downloads as downloads_comp
import dashboard.components.logs_panel as logs_panel_comp

# Event Bus import
from dashboard.utils.event_bus import get_event_bus

def create_runner_callbacks(
    scenario_dropdown: gr.Dropdown,
    ligand_dropdown: gr.Dropdown,
    target_dropdown: gr.Dropdown,
    run_btn: gr.Button,
    progress_slider: gr.Slider,
    status_msg: gr.Markdown,
    vertical_progress_html: gr.HTML,
    console_logs_html: gr.HTML,
    protein_viewer_html: gr.HTML,
    toggle_poses: gr.CheckboxGroup,
    docking_html: gr.HTML,
    filter_type: gr.Dropdown,
    interaction_df: gr.Dataframe,
    mechanism_graph_plot: gr.Plot,
    
    # Independent Download Buttons
    dl_passport_json: gr.DownloadButton,
    dl_passport_md: gr.DownloadButton,
    dl_interaction: gr.DownloadButton,
    dl_graph: gr.DownloadButton,
    dl_score: gr.DownloadButton,
    dl_vina: gr.DownloadButton,
    dl_diffdock: gr.DownloadButton,
    dl_fallback_text: gr.HTML,
    
    # Evidence Passport Collapsible Panels
    exec_summary_md: gr.Markdown,
    mechanistic_summary_md: gr.Markdown,
    validation_summary_html: gr.HTML,
    traceability_table_html: gr.HTML,
    next_steps_html: gr.HTML
):
    orchestrator = get_orchestrator()
    manager = get_manager()
    bus = get_event_bus()
    
    # 1. Register Event Bus Subscribers
    bus.clear_all()
    
    bus.subscribe("stage_2_completed", lambda receptor_path, selection: protein_viewer_comp.load(
        receptor_path, selection.target_name, "A", selection.target_id
    ))
    
    bus.subscribe("stage_4_completed", lambda receptor_path, vina_path, diffdock_path, toggles, selection: docking_viewer_comp.load(
        receptor_path, vina_path, diffdock_path,
        show_vina="AutoDock Vina (Green)" in toggles,
        show_diffdock="DiffDock-L (Purple)" in toggles,
        selection=selection
    ))
    
    bus.subscribe("stage_6_completed", lambda: load_interaction_data("All"))
    
    bus.subscribe("stage_7_completed", lambda graph_json: graph_panel_comp.load(graph_json))
    
    bus.subscribe("stage_8_completed", lambda score_json: validation_panel_comp.load(score_json))
    
    bus.subscribe("stage_9_completed", lambda: evidence_passport_comp.load())

    # Generator callback to yield live UI updates stage-by-stage
    def execute_pipeline(scen: str, lig: str, tgt: str, toggles: List[str]) -> Generator[Tuple[Any, ...], None, None]:
        try:
            manager.set_selection(scen, lig, tgt)
            selection = manager.get_current_selection()
        except Exception as e:
            yield (
                gr.update(interactive=True, value="▶️ Run Analysis Pipeline"),
                0,
                f"**Failed to set selection:** {e}",
                render_vertical_pipeline({}),
                f"<div class='custom-console' style='color: #ef4444;'>[Error] Selection failed: {e}</div>",
                protein_viewer_comp.clear(),
                docking_viewer_comp.clear(),
                gr.update(),
                [],
                graph_panel_comp.clear(),
                
                gr.update(), gr.update(), gr.update(), gr.update(), gr.update(), gr.update(), gr.update(), gr.update(),
                gr.update(), gr.update(), gr.update(), gr.update(), gr.update()
            )
            return

        # Reset UI logs and Event Bus trigger state
        cumulative_logs = [f"[{time.strftime('%H:%M:%S')}] starting orchestrated production pipeline for {selection.ligand_name} -> {selection.target_name}..."]
        
        triggered_events = {2: False, 4: False, 6: False, 7: False, 8: False, 9: False}
        timings_log = []

        # Hide download buttons during calculation to avoid downloading stale files
        hide_downloads = [gr.update(visible=False) for _ in range(7)] + [gr.update(visible=True)]

        # Initial yield: disable run button, reset progress and clear all visual elements cleanly
        yield (
            gr.update(interactive=False, value="⏳ Executing..."),
            0,
            f"**Initializing Pipeline Execution...**",
            render_vertical_pipeline({}),
            logs_panel_comp.load(cumulative_logs)[0],
            protein_viewer_comp.clear(),
            docking_viewer_comp.clear(),
            gr.update(),
            [], # Clear interaction table
            graph_panel_comp.clear(),
            
            # Hide downloads during runs
            *hide_downloads,
            
            # Clear collapsible dossier accordions
            "*No execution yet.*",
            "*No execution yet.*",
            "<div style='color: #64748b; font-size: 0.75rem; font-style: italic;'>No execution yet.</div>",
            "<div style='color: #64748b; font-size: 0.75rem; font-style: italic;'>No execution yet.</div>",
            "<div style='color: #64748b; font-size: 0.75rem; font-style: italic;'>No execution yet.</div>"
        )
        
        start_time = time.time()
        all_passed = True
        
        # Start running orchestrator as a generator
        run_gen = orchestrator.run(selection)
        try:
            while True:
                line = run_gen.__next__() 
                cumulative_logs.append(line)
                
                # Fetch active state from orchestrator
                status_info = orchestrator.get_status()
                curr_stage = status_info["current_stage"]
                prog_val = int(max(0, curr_stage) * 10)
                
                # Dynamic selective updates (Local updates via Event Bus, no global redraws!)
                active_protein = gr.update()
                active_docking = gr.update()
                active_table = gr.update()
                active_graph = gr.update()
                active_val_panel = gr.update()
                
                # Default passport elements (unchanged unless events trigger)
                active_exec = gr.update()
                active_mech = gr.update()
                active_trace = gr.update()
                active_steps = gr.update()

                # Event 2: Protein Structure Completed
                if curr_stage >= 3 and not triggered_events[2]:
                    receptor_path = f"/opt/services/data/prepared/targets/{selection.target_id}/clean_receptor.pdb"
                    if os.path.exists(receptor_path):
                        res = bus.publish("stage_2_completed", receptor_path, selection)
                        if res and res[0]:
                            active_protein, t_p = res[0]
                            timings_log.append(f"- Protein Viewer: {t_p*1000:.2f}ms")
                        triggered_events[2] = True

                # Event 4: Docking Overlay Completed
                if curr_stage >= 5 and not triggered_events[4]:
                    receptor_path = f"/opt/services/data/prepared/targets/{selection.target_id}/clean_receptor.pdb"
                    vina_path = "/opt/services/outputs/vina_test_run_out.pdbqt"
                    diffdock_path = "/opt/services/outputs/rank1.sdf"
                    if os.path.exists(receptor_path) and os.path.exists(vina_path):
                        res = bus.publish("stage_4_completed", receptor_path, vina_path, diffdock_path, toggles, selection)
                        if res and res[0]:
                            active_docking, t_d = res[0]
                            timings_log.append(f"- Docking Viewer: {t_d*1000:.2f}ms")
                        triggered_events[4] = True

                # Event 6: Interaction Table Completed
                if curr_stage >= 7 and not triggered_events[6]:
                    t0 = time.time()
                    res = bus.publish("stage_6_completed")
                    if res:
                        active_table = res[0]
                        timings_log.append(f"- Interaction Table: {(time.time()-t0)*1000:.2f}ms")
                    triggered_events[6] = True

                # Event 7: Mechanism Graph Completed
                if curr_stage >= 8 and not triggered_events[7]:
                    graph_json = "outputs/mechanism_graph.json"
                    if os.path.exists(graph_json):
                        res = bus.publish("stage_7_completed", graph_json)
                        if res and res[0]:
                            active_graph, t_g = res[0]
                            timings_log.append(f"- Mechanism Graph: {t_g*1000:.2f}ms")
                        triggered_events[7] = True

                # Event 8: Validation Panel HTML Completed (loads scoring panel HTML)
                if curr_stage >= 9 and not triggered_events[8]:
                    score_json = "outputs/validation_priority_score.json"
                    if os.path.exists(score_json):
                        res = bus.publish("stage_8_completed", score_json)
                        if res and res[0]:
                            active_val_panel, t_v = res[0]
                            timings_log.append(f"- Validation Panel: {t_v*1000:.2f}ms")
                        triggered_events[8] = True

                # Event 9: Evidence Passport Dossier Completed
                if curr_stage >= 10 and not triggered_events[9]:
                    res = bus.publish("stage_9_completed")
                    if res and res[0]:
                        p_exec, p_mech, p_val, p_trace, p_steps, t_pass = res[0]
                        active_exec = p_exec
                        active_mech = p_mech
                        active_val_panel = p_val # Updates validation accordion
                        active_trace = p_trace
                        active_steps = p_steps
                        timings_log.append(f"- Evidence Passport: {t_pass*1000:.2f}ms")
                    triggered_events[9] = True

                # Yield selective, localized HTML/widget state updates without redrawing other elements
                yield (
                    gr.update(interactive=False),
                    prog_val,
                    f"**Running Stage {curr_stage}: {status_info['status']} in progress...**",
                    render_vertical_pipeline(orchestrator.active_run.stages, active_stage=curr_stage),
                    logs_panel_comp.load(cumulative_logs)[0],
                    active_protein,
                    active_docking,
                    gr.update(),
                    active_table,
                    active_graph,
                    
                    gr.update(), gr.update(), gr.update(), gr.update(), gr.update(), gr.update(), gr.update(), gr.update(),
                    
                    active_exec,
                    active_mech,
                    active_val_panel,
                    active_trace,
                    active_steps
                )
        except StopIteration as e:
            result = e.value

        # Process final state
        all_passed = (result.status == "Completed")
        total_time = round(time.time() - start_time, 2)
        final_msg = f"🏆 **Pipeline Completed successfully!** Total runtime: {total_time}s." if all_passed else f"❌ **Pipeline Failed!** Fix exceptions in log console."
        
        # Pull final results if anything was missed (redundancy safety)
        final_protein = gr.update()
        final_docking = gr.update()
        final_interaction_table = gr.update()
        final_graph = gr.update()
        
        final_exec = gr.update()
        final_mech = gr.update()
        final_val = gr.update()
        final_trace = gr.update()
        final_steps = gr.update()
        final_downloads = [gr.update() for _ in range(8)]
        
        if all_passed:
            base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
            receptor_path = os.path.join(base_dir, f"data/prepared/targets/{selection.target_id}/clean_receptor.pdb")
            vina_path = os.path.join(base_dir, "outputs/vina_test_run_out.pdbqt")
            diffdock_path = os.path.join(base_dir, "outputs/rank1.sdf")
            graph_json = os.path.join(base_dir, "outputs/mechanism_graph.json")
            score_json = os.path.join(base_dir, "outputs/validation_priority_score.json")
            
            # Fetch final scientific visualizations
            if not triggered_events[2]:
                final_protein, t_p = protein_viewer_comp.load(receptor_path, selection.target_name, "A", selection.target_id)
                timings_log.append(f"- Protein Viewer: {t_p*1000:.2f}ms")
            if not triggered_events[4]:
                final_docking, t_d = docking_viewer_comp.load(receptor_path, vina_path, diffdock_path, "AutoDock Vina (Green)" in toggles, "DiffDock-L (Purple)" in toggles, selection=selection)
                timings_log.append(f"- Docking Viewer: {t_d*1000:.2f}ms")
            if not triggered_events[6]:
                t0 = time.time()
                final_interaction_table = load_interaction_data("All")
                timings_log.append(f"- Interaction Table: {(time.time()-t0)*1000:.2f}ms")
            if not triggered_events[7]:
                final_graph, t_g = graph_panel_comp.load(graph_json)
                timings_log.append(f"- Mechanism Graph: {t_g*1000:.2f}ms")
                
            # Evidence Dossier
            if not triggered_events[9]:
                p_exec, p_mech, p_val, p_trace, p_steps, t_pass = evidence_passport_comp.load()
                final_exec = p_exec
                final_mech = p_mech
                final_val = p_val
                final_trace = p_trace
                final_steps = p_steps
                timings_log.append(f"- Evidence Passport: {t_pass*1000:.2f}ms")
                
            # Update downloads un-hide
            dl_res = downloads_comp.load()
            final_downloads = dl_res[:-1]
            t_dl = dl_res[-1]
            timings_log.append(f"- Download Gates: {t_dl*1000:.2f}ms")

        # Format exact timing metrics inside console logs
        timings_header = [
            "",
            "⚡ [LAZY-LOAD EVENT-BUS TIMINGS]",
            *timings_log,
            ""
        ]
        logs_html, _ = logs_panel_comp.load(cumulative_logs + timings_header + [f"[{time.strftime('%H:%M:%S')}] Pipeline execution finished."])
        
        js_scroll = """
            <script>
                setTimeout(() => {
                    var elem = document.getElementById('pipeline-stdout-console-box');
                    if (elem) elem.scrollTop = elem.scrollHeight;
                }, 50);
            </script>
        """
        final_logs_html = f"""
            <div id="pipeline-stdout-console-box">
                {logs_html}
            </div>
            {js_scroll}
        """

        yield (
            gr.update(interactive=True, value="▶️ Run Analysis Pipeline"),
            100 if all_passed else int(len(result.stages) * 10),
            final_msg,
            render_vertical_pipeline(result.stages),
            final_logs_html,
            final_protein,
            final_docking,
            gr.update(), 
            final_interaction_table,
            final_graph,
            
            *final_downloads,
            
            final_exec,
            final_mech,
            final_val,
            final_trace,
            final_steps
        )

    # Click trigger registration
    run_btn.click(
        fn=execute_pipeline,
        inputs=[scenario_dropdown, ligand_dropdown, target_dropdown, toggle_poses],
        outputs=[
            run_btn,
            progress_slider,
            status_msg,
            vertical_progress_html,
            console_logs_html,
            protein_viewer_html,
            docking_html,
            filter_type,
            interaction_df,
            mechanism_graph_plot,
            
            # Pass 8 downloads targets
            dl_passport_json,
            dl_passport_md,
            dl_interaction,
            dl_graph,
            dl_score,
            dl_vina,
            dl_diffdock,
            dl_fallback_text,
            
            # Pass 5 Passport Accordions targets
            exec_summary_md,
            mechanistic_summary_md,
            validation_summary_html,
            traceability_table_html,
            next_steps_html
        ]
    )

    # Add reactive checkbox toggle event listener
    def on_toggle_change(toggles, scen, lig, tgt):
        manager.set_selection(scen, lig, tgt)
        selection = manager.get_current_selection()
        
        receptor_path = f"/opt/services/data/prepared/targets/{selection.target_id}/clean_receptor.pdb"
        vina_path = "/opt/services/outputs/vina_test_run_out.pdbqt"
        diffdock_path = "/opt/services/outputs/rank1.sdf"
        
        html_val, _ = docking_viewer_comp.load(
            receptor_path,
            vina_path,
            diffdock_path,
            show_vina="AutoDock Vina (Green)" in toggles,
            show_diffdock="DiffDock-L (Purple)" in toggles,
            selection=selection
        )
        return html_val
        
    toggle_poses.change(
        fn=on_toggle_change,
        inputs=[toggle_poses, scenario_dropdown, ligand_dropdown, target_dropdown],
        outputs=[docking_html]
    )

    # Dynamic dataframe filter event listener
    def on_filter_change(filter_val):
        return load_interaction_data(filter_val)

    filter_type.change(
        fn=on_filter_change,
        inputs=[filter_type],
        outputs=[interaction_df]
    )

    # Highlight clicked residues in 3D WebGL
    def on_row_select(event: gr.SelectData, scen: str, lig: str, tgt: str, toggles: List[str]):
        cell_val = event.value
        res_num = extract_residue_number(str(cell_val))
        
        manager.set_selection(scen, lig, tgt)
        selection = manager.get_current_selection()
        
        receptor_path = f"/opt/services/data/prepared/targets/{selection.target_id}/clean_receptor.pdb"
        vina_path = "/opt/services/outputs/vina_test_run_out.pdbqt"
        diffdock_path = "/opt/services/outputs/rank1.sdf"
        
        if res_num:
            print(f"[InteractionTable] Highlight row click detected. Highlighting residue {res_num} in 3D WebGL.")
            html_val, _ = docking_viewer_comp.load(
                receptor_path,
                vina_path,
                diffdock_path,
                show_vina="AutoDock Vina (Green)" in toggles,
                show_diffdock="DiffDock-L (Purple)" in toggles,
                highlight_resi=res_num,
                selection=selection
            )
            return html_val
        return gr.update()

    interaction_df.select(
        fn=on_row_select,
        inputs=[scenario_dropdown, ligand_dropdown, target_dropdown, toggle_poses],
        outputs=[docking_html]
    )
