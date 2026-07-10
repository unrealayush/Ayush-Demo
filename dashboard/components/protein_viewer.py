import os
import sys
import time
import gradio as gr
from typing import Optional, Tuple

# Add workspace directories to sys.path
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.append(BASE_DIR)

def create_protein_viewer_panel() -> gr.HTML:
    """
    Returns the permanent, static DOM layout for the Protein structure viewer.
    The DOM is initialized once on startup and NEVER recreated.
    """
    return gr.HTML(
        value=f"""
        <div style="border: 1px solid var(--border-color-primary); border-radius: 0.75rem; overflow: hidden; background-color: #0f172a; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); position: relative; font-family: sans-serif;">
            <!-- Header Metadata Card -->
            <div style="background-color: #1e293b; padding: 0.65rem 1rem; font-size: 0.75rem; color: #cbd5e1; display: flex; justify-content: space-between; border-bottom: 1px solid #334155;">
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                    <span style="color: #60a5fa;">🧬</span> <strong>Protein:</strong> <span id="protein-viewer-header-title" style="color: #ffffff;">Target Receptor (A)</span>
                </div>
                <div id="protein-viewer-header-pdb" style="font-weight: bold; background-color: #334155; padding: 0.15rem 0.5rem; border-radius: 0.25rem;">
                    PDB: Pending
                </div>
            </div>
            
            <!-- 3Dmol HTML5 Canvas Container (Reused forever, never deleted) -->
            <div id="3dmol-protein-viewport" style="height: 250px; width: 100%; position: relative;">
                <div id="protein-viewer-placeholder-text" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #64748b; font-size: 0.75rem; font-style: italic; background-color: #0f172a; z-index: 10;">
                    (No execution yet. Run Stage 2 to load structure)
                </div>
            </div>
        </div>
        """,
        elem_id="3d-protein-viewer-canvas"
    )

def clear() -> str:
    """
    Returns an inline script that clears active models inside the reused WebGL instance,
    and un-hides the placeholder overlays.
    """
    return """
    <script>
        (function() {
            var ph = document.getElementById("protein-viewer-placeholder-text");
            if (ph) ph.style.display = "flex";
            var title = document.getElementById("protein-viewer-header-title");
            if (title) title.innerText = "Target Receptor (A)";
            var pdbBadge = document.getElementById("protein-viewer-header-pdb");
            if (pdbBadge) pdbBadge.innerText = "PDB: Pending";
            
            if (window.proteinViewer) {
                window.proteinViewer.clear();
                window.proteinViewer.render();
                console.log("🧬 [WebGL] Protein Viewer cleared successfully.");
            }
        })();
    </script>
    """

def load(pdb_path: Optional[str], protein_name: str = "Target Receptor", chain: str = "A", pdb_id: str = "Unknown") -> Tuple[str, float]:
    """
    Instead of recreating the viewport, reads the PDB file and returns an inline script
    that swaps model data inside the existing WebGL context instantly.
    """
    start_time = time.time()
    if not pdb_path or not os.path.exists(pdb_path):
        return clear(), 0.0

    try:
        # Read raw PDB atomic coordinates
        with open(pdb_path, "r", encoding="utf-8") as f:
            pdb_data = f.read()

        # Escape backticks and backslashes in PDB data for safe JS injection
        escaped_pdb = pdb_data.replace("\\", "\\\\").replace("`", "\\`").replace("\n", "\\n")

        # Returns a script block that performs model swapping inside the existing canvas
        script_trigger = f"""
        <script>
            (function() {{
                var viewer = window.proteinViewer;
                if (viewer) {{
                    // 1. Hide placeholder text
                    var ph = document.getElementById("protein-viewer-placeholder-text");
                    if (ph) ph.style.display = "none";
                    
                    // 2. Update Header metadata
                    var title = document.getElementById("protein-viewer-header-title");
                    if (title) title.innerText = "{protein_name} ({chain})";
                    var pdbBadge = document.getElementById("protein-viewer-header-pdb");
                    if (pdbBadge) pdbBadge.innerText = "PDB: {pdb_id}";
                    
                    // 3. Clear existing models and inject new coordinates (instant WebGL reuse)
                    viewer.clear();
                    var pdbData = `{escaped_pdb}`;
                    viewer.addModel(pdbData, "pdb");
                    
                    // 4. Style, zoom, and render
                    viewer.setStyle({{}}, {{ cartoon: {{ color: "spectrum" }} }});
                    viewer.zoomTo();
                    viewer.render();
                    viewer.spin(true);
                    console.log("🧬 [WebGL] Reused Protein Viewer canvas successfully!");
                }} else {{
                    console.error("🧬 [WebGL] window.proteinViewer is not instantiated yet!");
                }}
            }})();
        </script>
        """
        elapsed = time.time() - start_time
        print(f"🧬 [LazyLoad] Protein model swapped on-the-fly in {elapsed*1000:.2f}ms.")
        return script_trigger, elapsed
    except Exception as e:
        print(f"🧬 [LazyLoad] Error loading protein: {e}")
        return f"<div style='color: #ef4444; padding: 1rem;'>Failed to load protein: {e}</div>", time.time() - start_time

def refresh(pdb_path: Optional[str], protein_name: str = "Target Receptor", chain: str = "A", pdb_id: str = "Unknown") -> Tuple[str, float]:
    """
    Swaps/refreshes active structures.
    """
    return load(pdb_path, protein_name, chain, pdb_id)
