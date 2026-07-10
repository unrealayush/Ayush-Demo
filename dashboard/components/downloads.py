import os
import time
import gradio as gr
from typing import Dict, Any, Tuple

# Constants
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

# File paths mapping
DOWNLOADS_MAP = {
    "passport_json": os.path.join(BASE_DIR, "outputs", "evidence_passport.json"),
    "passport_md": os.path.join(BASE_DIR, "outputs", "evidence_passport.md"),
    "interaction": os.path.join(BASE_DIR, "outputs", "interaction_report.json"),
    "graph": os.path.join(BASE_DIR, "outputs", "mechanism_graph.json"),
    "score": os.path.join(BASE_DIR, "outputs", "validation_priority_score.json"),
    "vina": os.path.join(BASE_DIR, "outputs", "vina_results.json"),
    "diffdock": os.path.join(BASE_DIR, "outputs", "diffdock_results.json")
}

def create_downloads_panel() -> Tuple[gr.DownloadButton, gr.DownloadButton, gr.DownloadButton, gr.DownloadButton, gr.DownloadButton, gr.DownloadButton, gr.DownloadButton, gr.HTML]:
    """
    Initializes 7 independent Gradio DownloadButton elements (hidden by default).
    Returns the elements as a tuple.
    This does NOT read any files during startup.
    """
    with gr.Column(elem_classes="panel-card"):
        gr.HTML("""
            <div style="display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.75rem; margin-bottom: 1rem;">
                <span style="font-size: 1.1rem;">📥</span>
                <h2 style="margin: 0; font-size: 0.875rem; font-weight: 700; color: #1e293b;">Downloads</h2>
            </div>
        """)

        dl_passport_json = gr.DownloadButton("📄 Download Evidence Passport (JSON)", visible=False, size="sm", variant="secondary")
        dl_passport_md = gr.DownloadButton("📝 Download Evidence Dossier (MD)", visible=False, size="sm", variant="secondary")
        dl_interaction = gr.DownloadButton("🔬 Download Interaction Report (JSON)", visible=False, size="sm", variant="secondary")
        dl_graph = gr.DownloadButton("🕸️ Download Mechanism Graph (JSON)", visible=False, size="sm", variant="secondary")
        dl_score = gr.DownloadButton("📈 Download Validation Score (JSON)", visible=False, size="sm", variant="secondary")
        dl_vina = gr.DownloadButton("🧬 Download Vina Results (JSON)", visible=False, size="sm", variant="secondary")
        dl_diffdock = gr.DownloadButton("🤖 Download DiffDock Results (JSON)", visible=False, size="sm", variant="secondary")
        
        fallback_text = gr.HTML(
            value=clear(),
            elem_id="downloads-fallback-notice"
        )
            
    return dl_passport_json, dl_passport_md, dl_interaction, dl_graph, dl_score, dl_vina, dl_diffdock, fallback_text

def clear() -> str:
    """
    Resets the component to its lightweight initial placeholder state (all buttons hidden).
    """
    return "<div style='color: #94a3b8; font-size: 0.75rem; font-style: italic; text-align: center; padding: 0.5rem;'>No execution yet. Run pipeline to un-hide download reports.</div>"

def load() -> Tuple[gr.update, gr.update, gr.update, gr.update, gr.update, gr.update, gr.update, gr.update, float]:
    """
    Lazy-loads/scans output folder file structures, gates visibility of downloads,
    and returns a tuple of (p_json_update, p_md_update, ..., fallback_text_update, elapsed_seconds).
    """
    start_time = time.time()
    updates = []
    any_visible = False
    
    keys = ["passport_json", "passport_md", "interaction", "graph", "score", "vina", "diffdock"]
    for key in keys:
        filepath = DOWNLOADS_MAP[key]
        if os.path.exists(filepath):
            updates.append(gr.update(visible=True, value=filepath))
            any_visible = True
        else:
            updates.append(gr.update(visible=False))
            
    # Fallback notice visibility update
    updates.append(gr.update(visible=not any_visible))
    
    elapsed = time.time() - start_time
    print(f"📥 [LazyLoad] Download gates loaded in {elapsed:.4f}s.")
    return (*updates, elapsed)

def refresh() -> Tuple[gr.update, gr.update, gr.update, gr.update, gr.update, gr.update, gr.update, gr.update, float]:
    """
    Scans the filesystem and refreshes download buttons.
    """
    return load()

def get_downloads_visibility_updates() -> Tuple[gr.update, ...]:
    """
    Backward-compatible helper function for pipeline runner callback interface.
    """
    res = load()
    return res[:-1] # Remove elapsed float for backward compatibility
