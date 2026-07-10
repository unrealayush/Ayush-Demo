import gradio as gr

def create_downloads_panel():
    with gr.Column(elem_classes="panel-card"):
        gr.HTML("""
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span style="font-size: 1.1rem;">📥</span>
                <h3 style="margin: 0; font-size: 0.8125rem; font-weight: 700; color: #1e293b;">Downloads</h3>
            </div>
        """)
        
        with gr.Row():
            dl_json = gr.Button("📄 Download JSON Report", variant="secondary", size="sm")
            dl_md = gr.Button("📝 Download Dossier (MD)", variant="secondary", size="sm")
            
    return dl_json, dl_md
