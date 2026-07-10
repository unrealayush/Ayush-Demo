import gradio as gr

def create_pipeline_progress():
    with gr.Column(elem_classes="panel-card"):
        gr.HTML("""
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span style="font-size: 1.1rem;">⚙️</span>
                <h3 style="margin: 0; font-size: 0.8125rem; font-weight: 700; color: #1e293b;">Pipeline Progress</h3>
            </div>
        """)
        
        progress_slider = gr.Slider(
            minimum=0,
            maximum=100,
            value=0,
            step=1,
            label="Execution Progress (%)",
            interactive=False
        )
        
        status_msg = gr.Markdown(
            value="*Status: Ready to load. Press Run to begin pipeline.*",
            elem_id="pipeline-status-text"
        )
        
    return progress_slider, status_msg
