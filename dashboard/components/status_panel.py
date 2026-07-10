import gradio as gr

def create_status_panel():
    with gr.Column(elem_classes="panel-card"):
        gr.HTML("""
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.1rem;">📊</span>
                <h3 style="margin: 0; font-size: 0.8125rem; font-weight: 700; color: #1e293b;">Active Job Status</h3>
            </div>
        """)
        
        job_table = gr.HTML("""
            <table style="width: 100%; font-size: 0.75rem; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="border-bottom: 1px solid #e2e8f0; color: #64748b;">
                        <th style="padding: 0.5rem 0;">Model / Stage</th>
                        <th style="padding: 0.5rem 0;">Status</th>
                        <th style="padding: 0.5rem 0;">Progress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                        <td style="padding: 0.5rem 0; font-weight: 600;">ESMFold2</td>
                        <td style="padding: 0.5rem 0; color: #64748b;">Idle</td>
                        <td style="padding: 0.5rem 0;">0%</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                        <td style="padding: 0.5rem 0; font-weight: 600;">AutoDock Vina</td>
                        <td style="padding: 0.5rem 0; color: #64748b;">Idle</td>
                        <td style="padding: 0.5rem 0;">0%</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem 0; font-weight: 600;">DiffDock-L</td>
                        <td style="padding: 0.5rem 0; color: #64748b;">Idle</td>
                        <td style="padding: 0.5rem 0;">0%</td>
                    </tr>
                </tbody>
            </table>
        """)
        
    return job_table
