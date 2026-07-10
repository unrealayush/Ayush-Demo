import gradio as gr
from .protein_viewer import create_protein_viewer_panel
from .docking_viewer import create_docking_viewer_panel
from .interaction_table import create_interaction_table_panel

def create_viewer_panel():
    with gr.Column(elem_classes="panel-card"):
        gr.HTML("""
            <div style="display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.75rem; margin-bottom: 1rem;">
                <span style="font-size: 1.1rem;">🧬</span>
                <h2 style="margin: 0; font-size: 0.875rem; font-weight: 700; color: #1e293b;">Bio-AI Molecular Structure Viewer</h2>
            </div>
        """)
        
        with gr.Row():
            with gr.Column(scale=1):
                protein_viewer_html = create_protein_viewer_panel()
                
            with gr.Column(scale=1):
                # Interactive Docking Overlay Panel (Stage 4-5)
                toggle_poses, docking_html = create_docking_viewer_panel()

        gr.HTML("<div style='height: 1rem;'></div>")

        gr.HTML("""
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
                <h3 style="margin: 0; font-size: 0.8125rem; font-weight: 700; color: #1e293b;">Parsed Hydrogen Bonds & Interactions</h3>
            </div>
        """)
        
        # Interactive Sortable & Filterable Dataframe
        filter_type, interaction_df = create_interaction_table_panel()
        
    return protein_viewer_html, toggle_poses, docking_html, filter_type, interaction_df
