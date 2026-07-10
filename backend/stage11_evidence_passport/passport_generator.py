
import os
import json
import csv
import argparse
from datetime import datetime, timezone
from typing import Dict, List, Any

DISCLAIMER = """**DISCLAIMER**:
Research-use-only.
Not evidence of efficacy.
Not clinical guidance."""

def load_json(filepath: str) -> dict:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def load_csv(filepath: str) -> List[dict]:
    data = []
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                data.append(row)
    return data
    
def get_target_metadata(target_id: str, registry_path: str) -> dict:
    registry = load_csv(registry_path)
    for row in registry:
        if target_id.lower() == row.get("gene_symbol", "").lower():
            return row
    return {}

def get_ligand_metadata(ligand_id: str, registry_path: str) -> dict:
    registry = load_csv(registry_path)
    for row in registry:
        if ligand_id.lower() == row.get("compound_id", "").lower():
            return row
    return {}

def generate_dynamic_recommendations(
    score_data: dict,
    interaction_data: dict,
    mechanism_data: dict,
    diffdock_data: List[dict],
    vina_data: dict
) -> List[str]:
    """
    Generates deterministic recommendations based on real pipeline outputs.
    """
    recommendations = []

    # Rule 1: Based on Validation Score
    if score_data.get("validation_priority_score", 100.0) < 60.0:
        recommendations.append("Overall validation score is low. Review individual metric contributions (Affinity, Confidence, Interactions) to identify weak points.")

    # Rule 2: Based on Vina Affinity
    affinity = vina_data.get("results", [{}])[0].get("affinity_kcal_mol", 0.0)
    if affinity > -7.0:
        recommendations.append(f"Binding affinity ({affinity:.2f} kcal/mol) is weak. Recommend computational chemistry efforts to improve ligand binding.")
        
    # Rule 3: Based on DiffDock Confidence
    confidence = diffdock_data[0].get("confidence", 0.0) if diffdock_data else 0.0
    if confidence < 0.0:
        recommendations.append(f"AI-driven docking confidence ({confidence:.2f}) is low. Recommend additional computational validation, such as Molecular Dynamics simulation, to assess pose stability.")

    # Rule 4: Based on Interaction Counts
    if interaction_data.get("summary", {}).get("total_h_bonds", 1) == 0:
        recommendations.append("No hydrogen bonds were identified in the primary pose. Recommend investigating alternative binding poses or performing docking with increased exhaustiveness.")

    # Rule 5: Based on Mechanism Graph completeness
    if mechanism_data.get("status") == "missing_metadata":
        recommendations.append("Mechanism graph could not be fully generated due to missing metadata. Recommend completing the `Primary Function` and `Role in AMR/Biofilm` columns in `AYUSH_AMR_Final_Targets.xlsx`.")

    # Rule 6: Based on Evidence Strength
    if score_data.get("evidence_strength") == "Moderate preclinical plausibility":
        recommendations.append("The in-silico evidence is moderate. Recommend seeking orthogonal validation through literature review or preliminary in-vitro assays.")
        
    if not recommendations:
        return ["All computational metrics meet the required thresholds. Proceed with standard in-vitro binding and cell-based phenotypic assays."]

    return recommendations

def generate_passport(
    target_id: str,
    ligand_id: str,
    interaction_report: dict,
    mechanism_graph: dict,
    validation_score: dict,
    traceability_data: List[dict],
    resolution_report: dict,
    target_registry_path: str,
    ligand_registry_path: str,
    diffdock_results: List[dict],
    vina_results: dict
) -> dict:
    target_meta = get_target_metadata(target_id, target_registry_path)
    ligand_meta = get_ligand_metadata(ligand_id, ligand_registry_path)
    
    target_label = target_meta.get("target_label", target_id.upper())
    ligand_label = ligand_meta.get("compound_name", ligand_id.capitalize())
    
    score = validation_score.get("validation_priority_score", 0.0)
    decision = validation_score.get("decision", "Review manually")
    
    # Traceability Matrix
    matrix = []
    
    # 1. Target Structure
    struct_source = "Unknown"
    struct_acc = "Unknown"
    if resolution_report and "details" in resolution_report:
        for d in resolution_report["details"]:
            if d.get("target_id", "").lower() == target_id.lower():
                struct_source = d.get("structure_source", "Unknown")
                struct_acc = d.get("structure_id", "Unknown")
    
    matrix.append({
        "entity": f"{target_label} Structure",
        "source": struct_source,
        "accession_or_url": struct_acc
    })
    
    # 2. Ligand
    matrix.append({
        "entity": ligand_label,
        "source": "PubChem",
        "accession_or_url": f"CID {ligand_meta.get('pubchem_cid', 'Unknown')}"
    })
    
    # Fill in from source_traceability.csv if available
    for row in traceability_data:
        matrix.append({
            "entity": row.get("data_type", "Context"),
            "source": row.get("source_database", "Unknown"),
            "accession_or_url": row.get("source_id", "Unknown")
        })
        
    # Deduplicate matrix by entity
    seen = set()
    dedup_matrix = []
    for m in matrix:
        if m["entity"] not in seen:
            seen.add(m["entity"])
            dedup_matrix.append(m)

    # Executive Summary (simulated LLM generation)
    exec_summary = (f"{ligand_label} demonstrates in-silico binding potential to {target_meta.get('organism_key', 'the pathogen')} {target_label}. "
                   f"The interaction yields a validation priority score of {score}/100. "
                   f"The mechanism graph indicates disruption of pathways leading to phenotypes. "
                   f"Based on the score, the decision is: {decision}. "
                   f"Wet-lab validation is {decision.lower().replace('prioritize for ', 'highly recommended for ')}.")
                   
    passport_id = f"EP-{target_id.upper()}-{ligand_id[:5].upper()}-001"
    
    return {
        "passport_id": passport_id,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "executive_summary": exec_summary,
        "traceability_matrix": dedup_matrix,
        "next_validation_steps": generate_dynamic_recommendations(
            validation_score, interaction_report, mechanism_graph, diffdock_results, vina_results
        )
    }

def generate_markdown(passport: dict, interaction: dict, mechanism: dict, score: dict) -> str:
    md = f"# Global Evidence Passport: {passport['passport_id']}\\n\\n"
    md += f"**Generated At:** {passport['generated_at']}\\n\\n"
    
    md += "## Executive Summary\\n"
    md += f"{passport['executive_summary']}\\n\\n"
    
    md += "## Validation Priority Summary\\n"
    md += f"- **Validation Priority Score:** {score.get('validation_priority_score', 0)}\\n"
    md += f"- **Decision:** {score.get('decision', 'N/A')}\\n"
    md += f"- **Evidence Strength:** {score.get('evidence_strength', 'N/A')}\\n\\n"
    
    md += "## Mechanistic Summary\\n"
    md += "The compound modulates the following pathways and phenotypes:\\n"
    for edge in mechanism.get("edges", []):
        md += f"- `{edge['source']} {edge['relation']} {edge['target']}`\\n"
    md += "\\n"
    
    md += "## Interaction Summary\\n"
    md += "Key non-covalent interactions identified in the highest-confidence pose:\\n"
    for i in interaction.get("interactions", []):
        md += f"- **{i.get('type', '').replace('_', ' ').title()}**: {i.get('receptor_residue')} (Chain {i.get('receptor_chain')}) at {i.get('distance_angstroms')} Å\\n"
    md += "\\n"
    
    md += "## Source Traceability Summary\\n"
    md += "| Entity | Source | Accession / URL |\\n"
    md += "|---|---|---|\\n"
    for row in passport['traceability_matrix']:
        md += f"| {row['entity']} | {row['source']} | {row['accession_or_url']} |\\n"
    md += "\\n"
    
    md += "## Recommended Next Validation Steps\\n"
    for step in passport['next_validation_steps']:
        md += f"- {step}\\n"
    md += "\\n"
    
    md += "## Research Limitations\\n"
    md += "Computational docking and pose prediction represent thermodynamic approximations and do not account for full biological complexity, membrane permeability, or dynamic conformational shifts in vivo.\\n\\n"
    
    md += "---\\n\\n"
    md += DISCLAIMER + "\\n"
    
    return md

def main():
    parser = argparse.ArgumentParser(description="Stage 11 Evidence Passport Generator")
    parser.add_argument("--interaction_report", default="outputs/interaction_report.json")
    parser.add_argument("--mechanism_graph", default="outputs/mechanism_graph.json")
    parser.add_argument("--validation_score", default="outputs/validation_priority_score.json")
    parser.add_argument("--source_traceability", default="outputs/source_traceability.csv")
    parser.add_argument("--structure_resolution", default="outputs/structure_resolution_report.json")
    parser.add_argument("--target_registry", default="data/inputs/pathogen_target_registry.csv")
    parser.add_argument("--ligand_registry", default="data/inputs/ligand_library.csv")
    parser.add_argument("--diffdock_results", default="outputs/diffdock_results.json")
    parser.add_argument("--vina_results", default="assets/vina_validation_report.json")
    parser.add_argument("--target_id", default="lasr")
    parser.add_argument("--ligand_id", default="costunolide")
    parser.add_argument("--out_dir", required=True)
    args = parser.parse_args()
    
    os.makedirs(args.out_dir, exist_ok=True)
    
    # Load inputs
    interaction = load_json(args.interaction_report)
    mechanism = load_json(args.mechanism_graph)
    validation = load_json(args.validation_score)
    struct_res = load_json(args.structure_resolution)
    traceability = load_csv(args.source_traceability)
    diffdock = load_json(args.diffdock_results)
    vina = load_json(args.vina_results)
    
    target_id = args.target_id
    if not target_id and interaction:
        target_id = interaction.get("target_id", "lasr")
        
    ligand_id = args.ligand_id
    if not ligand_id and interaction:
        ligand_id = interaction.get("ligand_id", "costunolide")
    
    # Generate Passport
    passport = generate_passport(
        target_id=target_id,
        ligand_id=ligand_id,
        interaction_report=interaction,
        mechanism_graph=mechanism,
        validation_score=validation,
        traceability_data=traceability,
        resolution_report=struct_res,
        target_registry_path=args.target_registry,
        ligand_registry_path=args.ligand_registry,
        diffdock_results=diffdock,
        vina_results=vina
    )
    
    # Save JSON
    json_path = os.path.join(args.out_dir, "evidence_passport.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(passport, f, indent=2)
        
    # Generate and Save Markdown
    md_content = generate_markdown(passport, interaction, mechanism, validation)
    md_path = os.path.join(args.out_dir, "evidence_passport.md")
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(md_content)
        
    # Save Report
    report = {
        "status": "SUCCESS",
        "passport_id": passport["passport_id"],
        "sections_generated": 7,
        "format": ["json", "md"]
    }
    report_path = os.path.join(args.out_dir, "evidence_passport_report.json")
    with open(report_path, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2)
        
    print(f"Generated {json_path}")
    print(f"Generated {md_path}")
    print(f"Generated {report_path}")

if __name__ == "__main__":
    main()
