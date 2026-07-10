import os
import sys
import csv
import json
import subprocess
import argparse
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
INPUTS_DIR = BASE_DIR / "data" / "inputs"
OUTPUTS_DIR = BASE_DIR / "outputs"
PREPARED_DIR = BASE_DIR / "data" / "prepared"

# Hardcoded complete list of all 24 phytochemical ligands to guarantee full 24-compound screening
phytochemicals = [
    {"compound_id": "nimbolide", "compound_name": "Nimbolide"},
    {"compound_id": "liriodendrin", "compound_name": "Liriodendrin"},
    {"compound_id": "baicalin", "compound_name": "Baicalin"},
    {"compound_id": "azadirachtin", "compound_name": "Azadirachtin"},
    {"compound_id": "ursolic_acid", "compound_name": "Ursolic acid"},
    {"compound_id": "boeravinone_b", "compound_name": "Boeravinone B"},
    {"compound_id": "nimbin", "compound_name": "Nimbin"},
    {"compound_id": "chrysin", "compound_name": "Chrysin"},
    {"compound_id": "costunolide", "compound_name": "Costunolide"},
    {"compound_id": "cynaropicrin", "compound_name": "Cynaropicrin"},
    {"compound_id": "conessine", "compound_name": "Conessine"},
    {"compound_id": "dehydrocostus_lactone", "compound_name": "Dehydrocostus lactone"},
    {"compound_id": "curcumin", "compound_name": "Curcumin"},
    {"compound_id": "rosmarinic_acid", "compound_name": "Rosmarinic acid"},
    {"compound_id": "oroxylin_a", "compound_name": "Oroxylin A"},
    {"compound_id": "baicalein", "compound_name": "Baicalein"},
    {"compound_id": "santamarine", "compound_name": "Santamarine"},
    {"compound_id": "aegeline", "compound_name": "Aegeline"},
    {"compound_id": "demethoxycurcumin", "compound_name": "Demethoxycurcumin"},
    {"compound_id": "bisdemethoxycurcumin", "compound_name": "Bisdemethoxycurcumin"},
    {"compound_id": "eugenol", "compound_name": "Eugenol"},
    {"compound_id": "magnoflorine", "compound_name": "Magnoflorine"},
    {"compound_id": "imperatorin", "compound_name": "Imperatorin"},
    {"compound_id": "skimmianine", "compound_name": "Skimmianine"}
]

def run_vina(target_id, ligand_id):
    vina_binary = "/opt/services/autodock_vina/bin/vina"
    receptor_pdbqt = PREPARED_DIR / "targets" / target_id / "receptor.pdbqt"
    ligand_pdbqt = PREPARED_DIR / "ligands" / f"{ligand_id}.pdbqt"
    out_pdbqt = OUTPUTS_DIR / "vina_test_run_out.pdbqt"
    
    # Run Vina
    cmd = [
        vina_binary,
        "--receptor", str(receptor_pdbqt),
        "--ligand", str(ligand_pdbqt),
        "--center_x", "0.0", "--center_y", "0.0", "--center_z", "0.0",
        "--size_x", "20.0", "--size_y", "20.0", "--size_z", "20.0",
        "--exhaustiveness", "8",
        "--out", str(out_pdbqt)
    ]
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        # Parse output
        subprocess.run([sys.executable, str(BASE_DIR / "scripts" / "parse_vina.py")], check=True)
        return True
    except Exception as e:
        print(f"Error running Vina for {ligand_id}: {e}")
    return False

def run_diffdock(target_id, ligand_id):
    import shutil
    env_path = "/opt/services/diffdock_l/env"
    diffdock_dir = "/opt/services/diffdock_l/app/DiffDock"
    
    protein_pdb = PREPARED_DIR / "targets" / target_id / "clean_receptor.pdb"
    ligand_sdf = PREPARED_DIR / "ligands" / f"{ligand_id}.sdf"
    out_dir = OUTPUTS_DIR / "diffdock_test_run"
    
    # Forcefully clear and recreate output directories to prevent old glob accumulation
    shutil.rmtree(out_dir, ignore_errors=True)
    os.makedirs(out_dir, exist_ok=True)
    
    cmd = [
        "/opt/mambaforge/bin/mamba", "run", "-p", "/opt/services/diffdock_l/env",
        "python", "inference.py",
        "--protein_path", str(protein_pdb),
        "--ligand_description", str(ligand_sdf),
        "--out_dir", str(out_dir),
        "--complex_name", "docked",
        "--samples_per_complex", "10",
        "--model_dir", os.path.join(diffdock_dir, "score_model"),
        "--ckpt", "best_ema_inference_epoch_model.pt",
        "--confidence_model_dir", os.path.join(diffdock_dir, "confidence_model"),
        "--confidence_ckpt", "best_model_epoch75.pt"
    ]
    try:
        subprocess.run(cmd, capture_output=True, check=True, cwd=diffdock_dir)
        subprocess.run([sys.executable, str(BASE_DIR / "scripts" / "parse_diffdock.py")], check=True)
        return True
    except Exception as e:
        print(f"Error running DiffDock for {ligand_id}: {e}")
    return False

def main():
    parser = argparse.ArgumentParser(description="AYUSH Bio-AI High-Throughput Target Screener")
    parser.add_argument("--target", default="pqsr", help="Target ID to screen (e.g. pqsr)")
    parser.add_argument("--out_csv", default="outputs/pqsr_screening_leaderboard.csv", help="Output path for CSV")
    args = parser.parse_args()
    
    target_id = args.target.lower()
    results_rows = []
    
    print(f"🔬 Starting screening for Target: {target_id.upper()} against all {len(phytochemicals)} ligands...")
    
    for idx, lig in enumerate(phytochemicals):
        lig_id = lig["compound_id"]
        lig_name = lig["compound_name"]
        
        print(f"[{idx+1}/{len(phytochemicals)}] Processing Phytochemical: {lig_name} ({lig_id})...")
        
        # 1. Prepare Ligand (skip other ligands)
        subprocess.run([sys.executable, str(BASE_DIR / "scripts" / "ligand_preparation.py"), "--ligand", lig_id], check=True)
        
        # 2. Run Vina
        vina_ok = run_vina(target_id, lig_id)
        
        # 3. Run DiffDock
        diffdock_ok = run_diffdock(target_id, lig_id)
        
        # 4. Parse Interactions
        subprocess.run([
            sys.executable, str(BASE_DIR / "backend" / "stage8_interaction_parser" / "interaction_parser.py"),
            "--receptor", f"data/prepared/targets/{target_id}/clean_receptor.pdb",
            "--ligand", "outputs/vina_test_run_out.pdbqt",
            "--target_id", target_id,
            "--ligand_id", lig_id,
            "--out_dir", "outputs"
        ], check=True)
        
        # 5. Run Mechanism Builder
        subprocess.run([
            sys.executable, str(BASE_DIR / "backend" / "stage9_mechanism_graph" / "mechanism_graph_builder.py"),
            "--interaction_report", "outputs/interaction_report.json",
            "--target_registry", "docs/AYUSH_AMR_Final_Targets.xlsx",
            "--out_dir", "outputs"
        ], check=True)
        
        # 6. Run Validation Scorer
        subprocess.run([
            sys.executable, str(BASE_DIR / "backend" / "stage10_validation_scorer" / "validation_scorer.py"),
            "--interaction_report", "outputs/interaction_report.json",
            "--mechanism_graph", "outputs/mechanism_graph.json",
            "--vina_report", "outputs/vina_results.json",
            "--diffdock_report", "outputs/diffdock_results.json",
            "--out_dir", "outputs"
        ], check=True)
        
        # 7. Collect Results
        try:
            with open(OUTPUTS_DIR / "validation_priority_score.json", "r") as f_score:
                score_data = json.load(f_score)
            with open(OUTPUTS_DIR / "vina_results.json", "r") as f_vina:
                vina_data = json.load(f_vina)
            with open(OUTPUTS_DIR / "diffdock_results.json", "r") as f_dd:
                dd_data = json.load(f_dd)
                
            affinity = vina_data["results"][0]["affinity_kcal_mol"] if vina_data.get("results") else 0.0
            confidence = dd_data[0]["confidence"] if isinstance(dd_data, list) and dd_data else -2.0
            priority_score = score_data["validation_priority_score"]
            decision = score_data["decision"]
            evidence_strength = score_data["evidence_strength"]
            
            results_rows.append({
                "Rank": 0, # Will sort later
                "Compound ID": lig_id,
                "Compound Name": lig_name,
                "Vina Affinity (kcal/mol)": affinity,
                "DiffDock Confidence": confidence,
                "Validation Priority Score": priority_score,
                "Preclinical Decision": decision,
                "Evidence Strength": evidence_strength
            })
            print(f"   => Priority Score: {priority_score} | Decision: {decision}")
        except Exception as e:
            print(f"Error compiling results for {lig_id}: {e}")
            
    # Sort results by validation priority score descending
    results_rows.sort(key=lambda x: x["Validation Priority Score"], reverse=True)
    for idx, row in enumerate(results_rows):
        row["Rank"] = idx + 1
        
    # Write to CSV
    out_csv_path = BASE_DIR / args.out_csv
    with open(out_csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=[
            "Rank", "Compound ID", "Compound Name", "Vina Affinity (kcal/mol)",
            "DiffDock Confidence", "Validation Priority Score", "Preclinical Decision", "Evidence Strength"
        ])
        writer.writeheader()
        writer.writerows(results_rows)
        
    print(f"🏆 High-Throughput Screening completed successfully!")
    print(f"Generated screening leaderboard at {out_csv_path}")

if __name__ == "__main__":
    main()
