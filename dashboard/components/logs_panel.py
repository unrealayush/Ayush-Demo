import time
import gradio as gr
from typing import List, Tuple

def create_logs_panel() -> gr.HTML:
    """
    Returns an HTML component representing the dynamic monospace live console logs viewport.
    This does NOT read any files during startup.
    """
    with gr.Column(elem_classes="panel-card"):
        gr.HTML("""
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span style="font-size: 1.1rem;">💻</span>
                <h3 style="margin: 0; font-size: 0.8125rem; font-weight: 700; color: #1e293b;">Execution Logs</h3>
            </div>
        """)
        
        console_logs = gr.HTML(
            value=clear(),
            elem_id="pipeline-stdout-console"
        )
        
    return console_logs

def clear() -> str:
    """
    Resets the component to its lightweight initial placeholder state.
    """
    return """
        <div class="custom-console" style="height: 10rem; overflow-y: auto;">
            [System] Console initialized... Ready for pipeline execution log streams.<br>
            [System] Waiting for Run action...
        </div>
    """

def load(logs: List[str]) -> Tuple[str, float]:
    """
    Lazy-formats list of stdout/stderr logs into standard scrolling terminal panels,
    and returns a tuple of (rendered_html_string, elapsed_seconds).
    """
    start_time = time.time()
    
    if not logs:
        return clear(), 0.0

    # Join the logs with breaklines and style them
    body = "<br>".join([f"<span style='color: #a78bfa;'>{line}</span>" if "[Stage" in line else line for line in logs])
    
    html = f"""
    <div class="custom-console" style="height: 10rem; overflow-y: auto; display: flex; flex-direction: column-reverse;">
        <div>
            {body}
        </div>
    </div>
    """
    
    elapsed = time.time() - start_time
    print(f"💻 [LazyLoad] Execution Logs formatted in {elapsed:.4f}s.")
    return html, elapsed

def refresh(logs: List[str]) -> Tuple[str, float]:
    """
    Refreshes the live console log buffer.
    """
    return load(logs)
