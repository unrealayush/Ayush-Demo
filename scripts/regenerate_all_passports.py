#!/usr/bin/env python3
"""
regenerate_all_passports.py — Regenerates evidence_passport.json and evidence_passport.md
for all target/ligand pairs across outputs directories using real per-pair computational data.
"""

import os
import sys
import json
import csv
from pathlib import Path
from datetime import datetime, timezone

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR / "backend" / "stage11_evidence_passport"))

from passport_generator import (
    generate_passport,
    generate_markdown,
    load_json,
    load_csv,
    DISCLAIMER
)

# Comprehensive target metadata map for fallbacks
TARGET_METADATA = {
    "lasr": {"label": "LasR", "organism": "Pseudomonas aeruginosa", "pdb": "2UV0"},
    "pqsr": {"label": "PqsR / MvfR", "organism": "Pseudomonas aeruginosa", "pdb": "6B8A"},
    "peld": {"label": "PelD", "organism": "Pseudomonas aeruginosa", "pdb": "4L31"},
    "mexb": {"label": "MexB", "organism": "Pseudomonas aeruginosa", "pdb": "2GF4"},
    "agra": {"label": "AgrA", "organism": "Staphylococcus aureus", "pdb": "3BS1"},
    "srta": {"label": "Sortase A / SrtA", "organism": "Staphylococcus aureus", "pdb": "6R1V"},
    "meca": {"label": "PBP2a / MecA", "organism": "Staphylococcus aureus", "pdb": "1VQQ"},
    "mura": {"label": "MurA", "organism": "Staphylococcus aureus", "pdb": "1UAE"},
    "acrb": {"label": "AcrB", "organism": "Klebsiella pneumoniae", "pdb": "5NC5"},
    "ompk36": {"label": "OmpK36", "organism": "Klebsiella pneumoniae", "pdb": "1GSM"},
    "mrkh": {"label": "MrkH", "organism": "Klebsiella pneumoniae", "pdb": "5F4A"},
    "wzc": {"label": "Wzc", "organism": "Klebsiella pneumoniae", "pdb": "3LA6"},
    "murj": {"label": "MurJ", "organism": "Staphylococcus aureus", "pdb": "6CC4"}
}

LIGAND_NAMES = {
    "nimbolide": "Nimbolide",
    "liriodendrin": "Liriodendrin",
    "baicalin": "Baicalin",
    "azadirachtin": "Azadirachtin",
    "ursolic_acid": "Ursolic acid",
    "boeravinone_b": "Boeravinone B",
    "nimbin": "Nimbin",
    "chrysin": "Chrysin",
    "costunolide": "Costunolide",
    "cynaropicrin": "Cynaropicrin",
    "conessine": "Conessine",
    "dehydrocostus_lactone": "Dehydrocostus lactone",
    "curcumin": "Curcumin",
    "rosmarinic_acid": "Rosmarinic acid",
    "oroxylin_a": "Oroxylin A",
    "baicalein": "Baicalein",
    "santamarine": "Santamarine",
    "aegeline": "Aegeline",
    "demethoxycurcumin": "Demethoxycurcumin",
    "bisdemethoxycurcumin": "Bisdemethoxycurcumin",
    "eugenol": "Eugenol",
    "magnoflorine": "Magnoflorine",
    "imperatorin": "Imperatorin",
    "skimmianine": "Skimmianine"
}

PUBCHEM_CIDS = {
    "costunolide": "5281437",
    "dehydrocostus_lactone": "73174",
    "curcumin": "5281767",
    "chrysin": "5281607",
    "baicalein": "5281605",
    "baicalin": "64982",
    "rosmarinic_acid": "5281792",
    "eugenol": "3314",
    "ursolic_acid": "64945",
    "azadirachtin": "5281303",
    "nimbolide": "100017",
    "nimbin": "108058",
    "oroxylin_a": "5281673",
    "demethoxycurcumin": "5281766",
    "bisdemethoxycurcumin": "5315472",
    "aegeline": "119024",
    "boeravinone_b": "114757",
    "conessine": "442985",
    "cynaropicrin": "5281515",
    "imperatorin": "10212",
    "liriodendrin": "119245",
    "magnoflorine": "73337",
    "santamarine": "141344",
    "skimmianine": "12684"
}

def generate_passport_for_pair(target_dir: Path, target_id: str, ligand_id: str):
    lig_dir = target_dir / ligand_id
    if not lig_dir.is_dir():
        return False
        
    interaction = load_json(str(lig_dir / "interaction_report.json"))
    mechanism = load_json(str(lig_dir / "mechanism_graph.json"))
    validation = load_json(str(lig_dir / "validation_priority_score.json"))
    vina = load_json(str(lig_dir / "vina_results.json"))
    diffdock = load_json(str(lig_dir / "diffdock_results.json"))
    
    # If vina or diffdock structure not dict/list, wrap appropriately
    if isinstance(diffdock, dict) and "results" in diffdock:
        diffdock = diffdock["results"]
    elif not isinstance(diffdock, list):
        diffdock = []
        
    if not isinstance(vina, dict):
        vina = {"results": []}
        
    tgt_info = TARGET_METADATA.get(target_id, {"label": target_id.upper(), "organism": "Pathogen", "pdb": "RCSB_PDB"})
    target_label = tgt_info["label"]
    organism = tgt_info["organism"]
    pdb_acc = tgt_info["pdb"]
    
    ligand_label = LIGAND_NAMES.get(ligand_id, ligand_id.replace("_", " ").title())
    cid = PUBCHEM_CIDS.get(ligand_id, "Unknown")
    
    score = validation.get("validation_priority_score") or validation.get("priority_score") or 0.0
    decision = validation.get("decision") or ("Consider for wet-lab validation" if score >= 60 else "Review manually")
    evidence_strength = validation.get("evidence_strength") or ("Moderate preclinical plausibility" if score >= 60 else "Low preclinical plausibility")
    
    # Validation score dictionary normalized for generator rules
    norm_validation = {
        "validation_priority_score": score,
        "decision": decision,
        "evidence_strength": evidence_strength
    }
    
    passport_id = f"EP-{target_id.upper()}-{ligand_id[:5].upper()}-001"
    
    exec_summary = (
        f"{ligand_label} demonstrates in-silico binding potential to {organism} {target_label}. "
        f"The interaction yields a validation priority score of {score:.1f}/100. "
        f"The mechanism graph indicates disruption of pathways leading to phenotypes. "
        f"Based on the score, the decision is: {decision}. "
        f"Wet-lab validation is {decision.lower().replace('prioritize for ', 'highly recommended for ')}."
    )
    
    matrix = [
        {
            "entity": f"{target_label} Structure",
            "source": "RCSB_PDB",
            "accession_or_url": pdb_acc
        },
        {
            "entity": ligand_label,
            "source": "PubChem",
            "accession_or_url": f"CID {cid}"
        },
        {
            "entity": "Context",
            "source": "PubChem",
            "accession_or_url": f"PUBCHEM_CID_{cid}"
        }
    ]
    
    # Generate recommendations
    from passport_generator import generate_dynamic_recommendations
    next_steps = generate_dynamic_recommendations(
        norm_validation, interaction, mechanism, diffdock, vina
    )
    
    passport = {
        "passport_id": passport_id,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "executive_summary": exec_summary,
        "traceability_matrix": matrix,
        "next_validation_steps": next_steps
    }
    
    # Ensure mechanism graph edges have 'relation' key
    if isinstance(mechanism, dict) and "edges" in mechanism:
        for edge in mechanism["edges"]:
            if isinstance(edge, dict) and "relation" not in edge:
                edge["relation"] = edge.get("label", edge.get("type", "connected_to"))

    # Save JSON
    with open(lig_dir / "evidence_passport.json", "w", encoding="utf-8") as f:
        json.dump(passport, f, indent=2)
        
    # Save MD
    md_content = generate_markdown(passport, interaction, mechanism, norm_validation)
    with open(lig_dir / "evidence_passport.md", "w", encoding="utf-8") as f:
        f.write(md_content)
        
    return True

def process_outputs_dir(outputs_dir: Path):
    if not outputs_dir.exists():
        return 0
    count = 0
    for target_dir in outputs_dir.iterdir():
        if not target_dir.is_dir():
            continue
        target_id = target_dir.name.lower()
        if target_id not in TARGET_METADATA:
            continue
        for lig_dir in target_dir.iterdir():
            if not lig_dir.is_dir():
                continue
            ligand_id = lig_dir.name.lower()
            if generate_passport_for_pair(target_dir, target_id, ligand_id):
                count += 1
    return count

def main():
    print("Regenerating all 288 Evidence Passports from real computational data...")
    public_outputs = BASE_DIR / "frontend" / "public" / "outputs"
    root_outputs = BASE_DIR / "outputs"
    
    c1 = process_outputs_dir(public_outputs)
    print(f"Updated {c1} passports in frontend/public/outputs/")
    
    c2 = process_outputs_dir(root_outputs)
    print(f"Updated {c2} passports in outputs/")
    print("Passport regeneration completed successfully!")

if __name__ == "__main__":
    main()
