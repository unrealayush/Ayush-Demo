import os
import csv
import json
import gradio as gr

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

def create_comparative_screener_panel():
    with gr.Column(elem_classes="panel-card"):
        gr.HTML("""
            <div style="display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.75rem; margin-bottom: 1rem;">
                <span style="font-size: 1.1rem;">📊</span>
                <h2 style="margin: 0; font-size: 0.875rem; font-weight: 700; color: #1e293b;">High-Throughput Comparative Screening Matrix</h2>
            </div>
        """)
        
        # Comparative Analysis Table
        comparative_table = gr.HTML(value="""
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; text-align: center; color: #64748b; font-size: 0.8125rem;">
                Please select a target (e.g., LasR or PqsR) to load the genuine screening leaderboard and comparative 3D pocket views.
            </div>
        """)
        
        gr.HTML("<div style='height: 1rem;'></div>")
        
        # 3D Viewers for Top 3 Leads side-by-side
        with gr.Row():
            with gr.Column(scale=1):
                gr.HTML("<div style='text-align: center; font-weight: 700; color: #1e3a8a; font-size: 0.75rem; margin-bottom: 0.25rem;'>🥇 TOP 1 LEAD COMPONENT</div>")
                top1_viewer = gr.HTML(value="""
                    <div style="width: 100%; height: 200px; background-color: #0f172a; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: #475569; font-size: 0.75rem;">
                        No structure loaded
                    </div>
                """)
                top1_meta = gr.HTML(value="", visible=True)
                
            with gr.Column(scale=1):
                gr.HTML("<div style='text-align: center; font-weight: 700; color: #1e3a8a; font-size: 0.75rem; margin-bottom: 0.25rem;'>🥈 TOP 2 LEAD COMPONENT</div>")
                top2_viewer = gr.HTML(value="""
                    <div style="width: 100%; height: 200px; background-color: #0f172a; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: #475569; font-size: 0.75rem;">
                        No structure loaded
                    </div>
                """)
                top2_meta = gr.HTML(value="", visible=True)
                
            with gr.Column(scale=1):
                gr.HTML("<div style='text-align: center; font-weight: 700; color: #1e3a8a; font-size: 0.75rem; margin-bottom: 0.25rem;'>🥉 TOP 3 LEAD COMPONENT</div>")
                top3_viewer = gr.HTML(value="""
                    <div style="width: 100%; height: 200px; background-color: #0f172a; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: #475569; font-size: 0.75rem;">
                        No structure loaded
                    </div>
                """)
                top3_meta = gr.HTML(value="", visible=True)
                
    return comparative_table, top1_viewer, top1_meta, top2_viewer, top2_meta, top3_viewer, top3_meta

def load_comparative_data(target_id: str):
    target_id = target_id.lower()
    
    # Try finding correct screening file
    csv_filename = f"{target_id}_screening_leaderboard.csv"
    if target_id == "pqsr":
        csv_filename = "pqsr_screening_leaderboard.csv"
    elif target_id == "lasr":
        csv_filename = "lasr_screening_leaderboard.csv"
    else:
        # Fallback to combined
        csv_filename = "pseudomonas_aeruginosa_screening_leaderboard.csv"
        
    csv_path = os.path.join(BASE_DIR, "outputs", csv_filename)
    if not os.path.exists(csv_path):
        # Local fallback if VM path not found
        csv_path = os.path.join(BASE_DIR, "outputs", "pseudomonas_aeruginosa_screening_leaderboard.csv")
        
    if not os.path.exists(csv_path):
        return gr.update(), gr.update(), gr.update(), gr.update(), gr.update(), gr.update(), gr.update()
        
    # Read the top 3 rows
    leads = []
    with open(csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for idx, row in enumerate(reader):
            if target_id in ["lasr", "pqsr"] or row["Target Gene"].lower() == target_id:
                leads.append({
                    "rank": len(leads) + 1,
                    "id": row.get("Compound ID", row["Compound Name"].lower().replace(" ", "_")),
                    "name": row["Compound Name"],
                    "vina": float(row.get("Vina Affinity (kcal/mol)", 0.0)),
                    "diffdock": float(row.get("DiffDock Confidence", 0.0)),
                    "score": float(row.get("Validation Priority Score", 0.0)),
                    "decision": row.get("Preclinical Decision", "Review manually"),
                    "strength": row.get("Evidence Strength", "Low")
                })
            if len(leads) == 3:
                break
                
    if not leads:
        return gr.update(), gr.update(), gr.update(), gr.update(), gr.update(), gr.update(), gr.update()
        
    # Build comparative table HTML
    table_html = f"""
    <div style="overflow-x: auto; width: 100%;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; text-align: left;">
            <thead>
                <tr style="border-bottom: 2px solid #cbd5e1; color: #1e3a8a; font-weight: 700;">
                    <th style="padding: 0.5rem 0.25rem;">Rank</th>
                    <th style="padding: 0.5rem 0.25rem;">Compound Name</th>
                    <th style="padding: 0.5rem 0.25rem;">Vina Affinity</th>
                    <th style="padding: 0.5rem 0.25rem;">DiffDock Confidence</th>
                    <th style="padding: 0.5rem 0.25rem;">Priority Score</th>
                    <th style="padding: 0.5rem 0.25rem;">Validation Decision</th>
                </tr>
            </thead>
            <tbody>
    """
    for row in leads:
        color = "#10b981" if row["score"] >= 80.0 else ("#f59e0b" if row["score"] >= 60.0 else "#ef4444")
        table_html += f"""
                <tr style="border-bottom: 1px solid #e2e8f0; height: 2.2rem;">
                    <td style="padding: 0.5rem 0.25rem; font-weight: 700; color: {color};">#{row["rank"]}</td>
                    <td style="padding: 0.5rem 0.25rem; font-weight: 700; color: #1e293b;">{row["name"]}</td>
                    <td style="padding: 0.5rem 0.25rem; color: #475569;">{row["vina"]} kcal/mol</td>
                    <td style="padding: 0.5rem 0.25rem; color: #475569;">{row["diffdock"]}</td>
                    <td style="padding: 0.5rem 0.25rem; font-weight: 700; color: {color};">{row["score"]}/100</td>
                    <td style="padding: 0.5rem 0.25rem;"><span style="background-color: {color}22; color: {color}; padding: 0.15rem 0.5rem; border-radius: 9999px; font-weight: 700; font-size: 0.65rem;">{row["decision"]}</span></td>
                </tr>
        """
    table_html += "</tbody></table></div>"
    
    # Generate 3Dmol viewer script tag and HTML payloads for the Top 3
    viewers = []
    metas = []
    
    for rank_idx, row in enumerate(leads, 1):
        # Absolute paths for coordinate files
        rec_path = os.path.join(BASE_DIR, "data/prepared/targets", target_id, "clean_receptor.pdb")
        vina_path = os.path.join(BASE_DIR, "outputs/investor_delivery_pack", f"{target_id}_{row['id']}_vina_pose.pdbqt")
        diff_path = os.path.join(BASE_DIR, "outputs/investor_delivery_pack", f"{target_id}_{row['id']}_diffdock_pose.sdf")
        
        # Load Receptor data
        rec_data = ""
        if os.path.exists(rec_path):
            with open(rec_path, "r", encoding="utf-8") as f:
                rec_data = f.read().replace("\\", "\\\\").replace("`", "\\`").replace("\n", "\\n")
                
        # Load Vina pose
        vina_data = ""
        if os.path.exists(vina_path):
            with open(vina_path, "r", encoding="utf-8") as f:
                vina_data = f.read().replace("\\", "\\\\").replace("`", "\\`").replace("\n", "\\n")
                
        # Load DiffDock pose
        diff_data = ""
        if os.path.exists(diff_path):
            with open(diff_path, "r", encoding="utf-8") as f:
                diff_data = f.read().replace("\\", "\\\\").replace("`", "\\`").replace("\n", "\\n")
                
        # Construct isolated 3Dmol template for the side-by-side rows
        viewport_id = f"3dmol-top{rank_idx}-viewport"
        viewer_var = f"top{rank_idx}Viewer"
        
        viewer_html = f"""
        <div id="{viewport_id}" style="width: 100%; height: 200px; position: relative; background-color: #0f172a; border-radius: 0.5rem; border: 1px solid #1e293b;"></div>
        <script>
            (function() {{
                function renderModel() {{
                    var elem = document.getElementById("{viewport_id}");
                    if (elem && typeof $3Dmol !== 'undefined') {{
                        var viewer = $3Dmol.createViewer(elem, {{ defaultcolors: $3Dmol.rasmolElementColors }});
                        viewer.clear();
                        
                        var pdb = `{rec_data}`;
                        if (pdb) {{
                            viewer.addModel(pdb, "pdb");
                            viewer.setStyle({{}}, {{ cartoon: {{ color: "spectrum", opacity: 0.8 }} }});
                        }}
                        
                        var vina = `{vina_data}`;
                        if (vina) {{
                            viewer.addModel(vina, "pdbqt");
                            viewer.setStyle({{ model: -1 }}, {{ stick: {{ colorscheme: "greenCarbon", radius: 0.15 }} }});
                        }}
                        
                        var diff = `{diff_data}`;
                        if (diff) {{
                            viewer.addModel(diff, "sdf");
                            viewer.setStyle({{ model: -1 }}, {{ stick: {{ colorscheme: "purpleCarbon", radius: 0.15 }} }});
                        }}
                        
                        viewer.zoomTo();
                        viewer.render();
                    }} else {{
                        setTimeout(renderModel, 250);
                    }}
                }}
                renderModel();
            }})();
        </script>
        """
        
        meta_html = f"""
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.35rem; padding: 0.5rem; margin-top: 0.5rem; font-size: 0.65rem; line-height: 1.35;">
            <div style="font-weight: 700; color: #1e3a8a; margin-bottom: 0.15rem;">#{rank_idx} Lead: {row['name']}</div>
            <strong>Vina Affinity:</strong> {row['vina']} kcal/mol<br/>
            <strong>DiffDock Conf:</strong> {row['diffdock']}<br/>
            <strong>Priority Score:</strong> <span style="font-weight: 700; color: #2563eb;">{row['score']}/100</span>
        </div>
        """
        
        viewers.append(viewer_html)
        metas.append(meta_html)
        
    while len(viewers) < 3:
        viewers.append("""<div style="width: 100%; height: 200px; background-color: #0f172a; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: #475569; font-size: 0.75rem;">No structure loaded</div>""")
        metas.append("")
        
    return (
        table_html,
        viewers[0], metas[0],
        viewers[1], metas[1],
        viewers[2], metas[2]
    )
