import gradio as gr

def create_header():
    with gr.Row(elem_id="header-bar"):
        with gr.Column(scale=8):
            gr.HTML("""
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div style="width: 2.5rem; height: 2.5rem; background-color: #eef2ff; border: 1px solid #e0e7ff; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: #4f46e5; font-size: 1.25rem;">
                        🧠
                    </div>
                    <div>
                        <h1 style="margin: 0; font-size: 1.25rem; font-weight: 800; color: #0f172a; tracking-tight: -0.025em;">AYUSH Bio-AI Evidence Demo</h1>
                        <p style="margin: 0; font-size: 0.75rem; color: #64748b; font-weight: 500;">Mechanism-linked validation for AYUSH medicines against drug-resistant pathogens</p>
                    </div>
                </div>
            """)
        with gr.Column(scale=4):
            gr.HTML("""
                <div style="display: flex; align-items: center; justify-content: flex-end; gap: 1.5rem; height: 100%;">
                    <div style="font-size: 0.75rem; color: #64748b; font-weight: 500; display: flex; align-items: center; gap: 0.35rem;">
                        📅 <span>Data as on: Live Context</span>
                    </div>
                    <div style="width: 1px; height: 1.5rem; background-color: #e2e8f0;"></div>
                    <div style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; background-color: #f1f5f9; color: #475569; border: 1px solid #e2e8f0; display: flex; align-items: center; gap: 0.35rem;">
                        🛡️ Mode: Research-Use-Only
                    </div>
                    <div style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; letter-spacing: -0.05em; margin-left: 0.5rem;">
                        mevreon
                    </div>
                </div>
            """)
