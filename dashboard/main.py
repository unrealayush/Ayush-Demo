import os
import sys
import gradio as gr

# Add dashboard folder and current workspace root to sys.path to enable proper sub-package imports
sys.path.append(os.path.abspath(os.path.dirname(__file__)))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from components.styles import CSS
from components.header import create_header
from components.sidebar import create_sidebar
from components.pipeline_progress import create_pipeline_progress
from components.stage_progress import create_stage_progress_panel
from components.viewer_panel import create_viewer_panel
from components.graph_panel import create_mechanism_graph_panel
from components.passport_panel import create_passport_panel
from components.downloads import create_downloads_panel, get_downloads_visibility_updates
from components.logs_panel import create_logs_panel
from components.pipeline_runner import create_runner_callbacks

def build_dashboard():
    import time
    start_time = time.time()
    # Load gorgeous, modern soft scientific theme
    theme = gr.themes.Soft(
        primary_hue="indigo",
        secondary_hue="slate",
        neutral_hue="slate"
    )
    with gr.Blocks(theme=theme, title="AYUSH Bio-AI Evidence Platform", head='''
        <script src="https://cdnjs.cloudflare.com/ajax/libs/3Dmol/2.1.2/3Dmol-min.js"></script>
        <script>
            function initWebglViewers() {
                var pElem = document.getElementById("3dmol-protein-viewport");
                if (pElem && typeof $3Dmol !== 'undefined' && !window.proteinViewer) {
                    window.proteinViewer = $3Dmol.createViewer(pElem, { defaultcolors: $3Dmol.rasmolElementColors });
                    console.log("🧬 [WebGL] Global Protein Viewer instantiated!");
                }
                var dElem = document.getElementById("3dmol-docking-viewport");
                if (dElem && typeof $3Dmol !== 'undefined' && !window.dockingViewer) {
                    window.dockingViewer = $3Dmol.createViewer(dElem, { defaultcolors: $3Dmol.rasmolElementColors });
                    console.log("🌿 [WebGL] Global Docking Viewer instantiated!");
                }
            }
            setInterval(initWebglViewers, 500);
        </script>
    ''') as demo:
        # Top Header
        create_header()
        
        gr.HTML("<div style='height: 1.5rem;'></div>")
        
        # Main Three-Column Layout (25% / 50% / 25% maps to scale=3 / scale=6 / scale=3)
        with gr.Row():
            # LEFT COLUMN (25% scale)
            with gr.Column(scale=3):
                scen_drop, lig_drop, tgt_drop, run_btn = create_sidebar()
                gr.HTML("<div style='height: 1rem;'></div>")
                prog_slider, stat_msg = create_pipeline_progress()
                gr.HTML("<div style='height: 1rem;'></div>")
                vertical_progress = create_stage_progress_panel()
                
            # CENTER COLUMN (50% scale)
            with gr.Column(scale=6):
                protein_viewer, toggle_poses, docking_html, filter_type, interaction_df = create_viewer_panel()
                gr.HTML("<div style='height: 1.5rem;'></div>")
                mechanism_graph_plot = create_mechanism_graph_panel()
                
                # Dynamic HT screening comparative dashboard panel!
                from dashboard.components.comparative_screener import create_comparative_screener_panel
                gr.HTML("<div style='height: 1.5rem;'></div>")
                comp_table, t1_v, t1_m, t2_v, t2_m, t3_v, t3_m = create_comparative_screener_panel()
                
            # RIGHT COLUMN (25% scale)
            with gr.Column(scale=3):
                exec_summary, mech_summary, val_summary, trace_table, next_steps = create_passport_panel()
                gr.HTML("<div style='height: 1rem;'></div>")
                
                # Dynamic Download Buttons (Stage 1-9)
                dl_p_json, dl_p_md, dl_i, dl_g, dl_s, dl_v, dl_d, dl_fallback = create_downloads_panel()
                
                gr.HTML("<div style='height: 1rem;'></div>")
                console_logs = create_logs_panel()

        gr.HTML("<div style='height: 2rem;'></div>")
        
        # Bottom Footer
        with gr.Row(elem_classes="panel-card"):
            gr.HTML("""
                <div style="display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.5rem 0.25rem;">
                    <span style="font-size: 1.5rem; color: #f59e0b;">⚠️</span>
                    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                        <h4 style="margin: 0; font-size: 0.75rem; font-weight: 800; color: #d97706; text-transform: uppercase; tracking-wider: 0.05em;">Research-use-only Disclaimer</h4>
                        <p style="margin: 0; font-size: 0.75rem; color: #b45309; line-height: 1.4; max-width: 80rem;">
                            The computational predictions, Validation Priority Scores, and Evidence Passports generated by this platform represent thermodynamic approximations and in-silico pattern matching. They are strictly research-use-only and do not constitute evidence of biological efficacy, therapeutic benefit, or clinical guidance.
                        </p>
                    </div>
                </div>
            """)
            
        # Bind the live reactive callback runners
        create_runner_callbacks(
            scen_drop,
            lig_drop,
            tgt_drop,
            run_btn,
            prog_slider,
            stat_msg,
            vertical_progress,
            console_logs,
            protein_viewer,
            toggle_poses,
            docking_html,
            filter_type,
            interaction_df,
            mechanism_graph_plot,
            dl_p_json, dl_p_md, dl_i, dl_g, dl_s, dl_v, dl_d, dl_fallback,  # Pass Download outputs!
            exec_summary, mech_summary, val_summary, trace_table, next_steps # Pass Passport outputs!
        )
        
        # Bind target dropdown to re-load the comparative screener matrix instantly!
        from dashboard.components.comparative_screener import load_comparative_data
        tgt_drop.change(
            fn=load_comparative_data,
            inputs=[tgt_drop],
            outputs=[comp_table, t1_v, t1_m, t2_v, t2_m, t3_v, t3_m]
        )
        
        # Removed demo.load database checks on startup to guarantee instant loading (<1 second)
        # All scientific components (3D views, tables, graphs, downloads, passport) are lazy-loaded
        # and populates on-the-fly ONLY after the user triggers a pipeline run.
        
        elapsed = time.time() - start_time
        print(f"[Dashboard] Instantiated layout successfully in {elapsed:.4f} seconds.")
            
    return demo

if __name__ == "__main__":
    demo = build_dashboard()
    # Run locally or on GCP Cloud Run dynamically based on PORT env var
    port = int(os.environ.get("PORT", 7860))
    demo.launch(
        server_name="0.0.0.0", 
        server_port=port, 
        css=CSS,
        allowed_paths=["/opt/services/outputs", "/opt/services/data/prepared", "outputs", "data/prepared"]
    )
