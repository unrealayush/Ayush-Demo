
import os
import json
import openpyxl
import argparse
from typing import Dict, List, Any, Optional

def load_xlsx_to_dict(file_path: str, key_field: str) -> Dict[str, Dict[str, Any]]:
    """Loads an XLSX sheet into a dictionary keyed by a specific column."""
    result = {}
    if not os.path.exists(file_path):
        return result
    workbook = openpyxl.load_workbook(file_path, data_only=True)
    sheet = workbook.active
    headers = [cell.value for cell in sheet[1]]
    
    key_field_index = -1
    if key_field in headers:
        key_field_index = headers.index(key_field)

    if key_field_index == -1:
        return result

    for row in sheet.iter_rows(min_row=2, values_only=True):
        key = str(row[key_field_index]).strip().lower()
        result[key] = {headers[i]: cell for i, cell in enumerate(row)}
        
    return result

def build_mechanism_graph(interaction_report: dict, target_registry_xlsx_path: str) -> dict:
    """
    Builds the mechanism graph by reading metadata directly from the master XLSX registry.
    """
    target_id = interaction_report.get("target_id", "unknown").lower()
    ligand_id = interaction_report.get("ligand_id", "unknown").lower()
    interactions = interaction_report.get("interactions", [])
    
    # Load the authoritative target registry
    target_registry = load_xlsx_to_dict(target_registry_xlsx_path, key_field='Gene')
    
    # Get metadata for the current target
    target_meta = target_registry.get(target_id, {})
    
    if not target_meta:
        return {
            "status": "missing_metadata",
            "message": f"Target ID '{target_id}' not found in the master registry.",
            "nodes": [],
            "edges": []
        }

    # Dynamically derive node labels from the registry columns
    ligand_label = ligand_id.capitalize()
    target_label = target_meta.get("Target Protein", target_id.upper())
    pathway_label = target_meta.get("Primary Function", "Unknown Function")
    phenotype_label = target_meta.get("Role in AMR/Biofilm", "Unknown Role")

    # Build Nodes
    nodes = [
        {"id": f"C_{ligand_id}", "label": ligand_label, "type": "compound"},
        {"id": f"T_{target_id}", "label": target_label, "type": "target"},
        {"id": f"P_{pathway_label.replace(' ', '_').lower()}", "label": pathway_label, "type": "pathway"},
        {"id": f"PH_{phenotype_label.replace(' ', '_').lower()}", "label": phenotype_label, "type": "phenotype"}
    ]
    
    # Format edge interaction relation
    binds_relation = "binds_to"
    if interactions:
        top_int = interactions[0]
        binds_relation = f"binds_to ({top_int.get('type', 'interaction').replace('_', ' ').capitalize()} {top_int.get('receptor_residue', '')})"

    # Build Edges programmatically
    edges = [
        {"source": f"C_{ligand_id}", "target": f"T_{target_id}", "relation": binds_relation},
        {"source": f"T_{target_id}", "target": f"P_{pathway_label.replace(' ', '_').lower()}", "relation": "has_function"},
        {"source": f"P_{pathway_label.replace(' ', '_').lower()}", "target": f"PH_{phenotype_label.replace(' ', '_').lower()}", "relation": "contributes_to"}
    ]
    
    return {
        "nodes": nodes,
        "edges": edges
    }

def main():
    parser = argparse.ArgumentParser(description="Stage 9: Registry-Driven Mechanism Graph Builder")
    parser.add_argument("--interaction_report", required=True, help="Path to outputs/interaction_report.json")
    parser.add_argument("--target_registry", required=True, help="Path to docs/AYUSH_AMR_Final_Targets.xlsx")
    parser.add_argument("--out_dir", required=True, help="Output directory")
    args = parser.parse_args()
    
    os.makedirs(args.out_dir, exist_ok=True)
    
    if not os.path.exists(args.interaction_report):
        print(f"Error: {args.interaction_report} does not exist.")
        return
        
    with open(args.interaction_report, 'r', encoding='utf-8') as f:
        interaction_report = json.load(f)
        
    graph = build_mechanism_graph(interaction_report, args.target_registry)
    
    out_graph = os.path.join(args.out_dir, "mechanism_graph.json")
    with open(out_graph, 'w', encoding='utf-8') as f:
        json.dump(graph, f, indent=2)
        
    report = {
        "status": "SUCCESS" if "status" not in graph else graph["status"],
        "nodes_generated": len(graph.get("nodes", [])),
        "edges_generated": len(graph.get("edges", [])),
        "target_mapped": interaction_report.get("target_id"),
        "ligand_mapped": interaction_report.get("ligand_id")
    }
    
    out_report = os.path.join(args.out_dir, "mechanism_graph_report.json")
    with open(out_report, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2)
        
    print(f"Generated {out_graph}")
    print(f"Generated {out_report}")

if __name__ == "__main__":
    main()
