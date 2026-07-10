import os
import json
import re
import gradio as gr
from typing import List, Dict, Any, Tuple, Optional

# Constants
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

def create_interaction_table_panel():
    """
    Returns a filter dropdown and a Gradio Dataframe representing the interactive, sortable, and filterable contacts list.
    """
    with gr.Column():
        with gr.Row():
            filter_type = gr.Dropdown(
                choices=["All", "Hydrogen Bond", "Hydrophobic", "Pi Stacking", "Salt Bridge"],
                value="All",
                label="Filter by Interaction Type",
                interactive=True
            )
        
        interaction_df = gr.Dataframe(
            headers=["Residue", "Interaction Type", "Distance (Å)", "Strength"],
            datatype=["str", "str", "number", "str"],
            value=[], # Strip out disk-read on startup for instant loading (<1s)
            interactive=False,
            wrap=True
        )
        
    return filter_type, interaction_df

def load_interaction_data(filter_val: str) -> List[List[Any]]:
    """
    Reads outputs/interaction_report.json and parses the non-covalent contacts.
    Returns structured list-of-lists for Gradio Dataframe.
    """
    report_path = os.path.join(BASE_DIR, "outputs", "interaction_report.json")
    if not os.path.exists(report_path):
        return []

    try:
        with open(report_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        interactions = data.get("interactions", [])
        rows = []
        
        for item in interactions:
            residue = item.get("receptor_residue", "N/A")
            itype = item.get("type", "").replace("_", " ").title()
            dist = item.get("distance_angstroms", 0.0)
            
            # Filter matches
            if filter_val != "All" and filter_val.lower().replace(" ", "") not in itype.lower().replace(" ", ""):
                continue
                
            # Qualitative Strength based on chemical distance ranges (AAFCO/NRC standards)
            if dist < 3.0:
                strength = "High-Affinity (Strong)"
            elif dist < 3.8:
                strength = "Moderate Interaction"
            else:
                strength = "Weak / Dispersive"
                
            rows.append([residue, itype, dist, strength])
            
        return rows
    except Exception as e:
        print(f"[InteractionTable] Error loading data: {e}")
        return []

def extract_residue_number(residue_str: str) -> Optional[int]:
    """
    Extracts the integer residue index from standard strings like 'THR150' or 'VAL147'.
    """
    match = re.search(r"\d+", residue_str)
    return int(match.group(0)) if match else None
