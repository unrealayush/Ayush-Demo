import gradio as gr
from .scenario_manager import get_manager, set_selection

def create_sidebar():
    manager = get_manager()
    
    # 1. Fetch initial dynamic list from manager
    scenarios = list(manager.scenarios.keys())
    ligands = list(manager.ligands.keys())
    
    # Get targets for the active/first scenario
    default_scen = scenarios[0] if scenarios else ""
    targets = list(manager.scenarios[default_scen]["targets"].keys()) if default_scen else []

    with gr.Column(elem_classes="panel-card"):
        gr.HTML("""
            <div style="display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.75rem; margin-bottom: 1rem;">
                <span style="font-size: 1.1rem;">📋</span>
                <h2 style="margin: 0; font-size: 0.875rem; font-weight: 700; color: #1e293b;">Demo Inputs</h2>
            </div>
        """)
        
        # Scenario Selection Card
        with gr.Group():
            gr.HTML("""
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span style="width: 1.25rem; height: 1.25rem; background-color: #2563eb; color: #ffffff; border-radius: 9999px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;">1</span>
                    <h3 style="margin: 0; font-size: 0.8125rem; font-weight: 700; color: #1e3a8a;">Scenario Selection</h3>
                </div>
            """)
            scenario_dropdown = gr.Dropdown(
                choices=scenarios,
                value=default_scen,
                show_label=False,
                interactive=True
            )

        gr.HTML("<div style='height: 1rem;'></div>")

        # Ligand / Active Compound Card
        with gr.Group():
            gr.HTML("""
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span style="width: 1.25rem; height: 1.25rem; background-color: #2563eb; color: #ffffff; border-radius: 9999px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;">2</span>
                    <h3 style="margin: 0; font-size: 0.8125rem; font-weight: 700; color: #1e3a8a;">AYUSH Candidate</h3>
                </div>
            """)
            ligand_dropdown = gr.Dropdown(
                choices=ligands,
                value=ligands[0] if ligands else "",
                show_label=False,
                interactive=True
            )

        gr.HTML("<div style='height: 1rem;'></div>")

        # Pathogen Target Card
        with gr.Group():
            gr.HTML("""
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span style="width: 1.25rem; height: 1.25rem; background-color: #2563eb; color: #ffffff; border-radius: 9999px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;">3</span>
                    <h3 style="margin: 0; font-size: 0.8125rem; font-weight: 700; color: #1e3a8a;">Pathogen Target</h3>
                </div>
            """)
            target_dropdown = gr.Dropdown(
                choices=targets,
                value=targets[0] if targets else "",
                show_label=False,
                interactive=True
            )

        gr.HTML("<div style='height: 1rem;'></div>")

        # Dynamic Metadata Display
        with gr.Group():
            metadata_display = gr.HTML(value=f"""
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 0.75rem; font-size: 0.75rem; color: #334155; line-height: 1.4;">
                    <div style="font-weight: 700; color: #1e3a8a; margin-bottom: 0.25rem;">Live Context Matrix:</div>
                    <strong>Organism:</strong> {manager.scenarios[default_scen]["organism"] if default_scen else "N/A"}<br/>
                    <strong>Context:</strong> {manager.scenarios[default_scen]["study_context"] if default_scen else "N/A"}<br/>
                    <strong>Antibiotic:</strong> {manager.scenarios[default_scen]["antibiotic"] if default_scen else "N/A"}<br/>
                    <strong>Dataset Version:</strong> 1.0.0
                </div>
            """)

        gr.HTML("<div style='height: 1rem;'></div>")
        
        run_btn = gr.Button(
            value="▶️ Run Analysis Pipeline",
            variant="primary",
            elem_classes="primary-btn"
        )
        
        # 2. Add event listeners so inputs cascade dynamically
        def on_scenario_change(selected_scen):
            # Fetch target choices dynamically based on the newly selected scenario ID
            tgt_choices = list(manager.scenarios[selected_scen]["targets"].keys()) if selected_scen in manager.scenarios else []
            default_tgt = tgt_choices[0] if tgt_choices else ""
            
            # Re-generate the HTML metadata context block on-the-fly!
            organism = manager.scenarios[selected_scen]["organism"]
            context = manager.scenarios[selected_scen]["study_context"]
            antibiotic = manager.scenarios[selected_scen]["antibiotic"]
            
            meta_html = f"""
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 0.75rem; font-size: 0.75rem; color: #334155; line-height: 1.4;">
                    <div style="font-weight: 700; color: #1e3a8a; margin-bottom: 0.25rem;">Live Context Matrix:</div>
                    <strong>Organism:</strong> {organism}<br/>
                    <strong>Context:</strong> {context}<br/>
                    <strong>Antibiotic:</strong> {antibiotic}<br/>
                    <strong>Dataset Version:</strong> 1.0.0
                </div>
            """
            
            # Return updates to targets dropdown list, selection value, and metadata card
            return gr.update(choices=tgt_choices, value=default_tgt), meta_html

        scenario_dropdown.change(
            fn=on_scenario_change,
            inputs=[scenario_dropdown],
            outputs=[target_dropdown, metadata_display]
        )
        
        def update_global_manager(scen, lig, tgt):
            # Synchronize dropdown selects with Scenario Selection singleton
            set_selection(scen, lig, tgt)
            print(f"[ScenarioManager] Selection set: {scen} | {lig} | {tgt}")

        # Sync states when any value changes
        for component in [scenario_dropdown, ligand_dropdown, target_dropdown]:
            component.change(
                fn=update_global_manager,
                inputs=[scenario_dropdown, ligand_dropdown, target_dropdown],
                outputs=[]
            )

    return scenario_dropdown, ligand_dropdown, target_dropdown, run_btn
