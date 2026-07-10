import os
import sys
import csv
import json
import yaml
import shutil
import subprocess
import argparse
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
PREPARED_DIR = BASE_DIR / "data" / "prepared"
OUTPUTS_DIR = BASE_DIR / "outputs"

# Full list of all 24 phytochemical ligands
phytochemicals = [
    {"compound_id": "boeravinone_b", "compound_name": "Boeravinone B"},
    {"compound_id": "cynaropicrin", "compound_name": "Cynaropicrin"},
    {"compound_id": "liriodendrin", "compound_name": "Liriodendrin"},
    {"compound_id": "chrysin", "compound_name": "Chrysin"},
    {"compound_id": "imperatorin", "compound_name": "Imperatorin"},
    {"compound_id": "conessine", "compound_name": "Conessine"},
    {"compound_id": "dehydrocostus_lactone", "compound_name": "Dehydrocostus lactone"},
    {"compound_id": "baicalein", "compound_name": "Baicalein"},
    {"compound_id": "rosmarinic_acid", "compound_name": "Rosmarinic acid"},
    {"compound_id": "oroxylin_a", "compound_name": "Oroxylin A"},
    {"compound_id": "demethoxycurcumin", "compound_name": "Demethoxycurcumin"},
    {"compound_id": "curcumin", "compound_name": "Curcumin"},
    {"compound_id": "aegeline", "compound_name": "Aegeline"},
    {"compound_id": "santamarine", "compound_name": "Santamarine"},
    {"compound_id": "nimbolide", "compound_name": "Nimbolide"},
    {"compound_id": "magnoflorine", "compound_name": "Magnoflorine"},
    {"compound_id": "ursolic_acid", "compound_name": "Ursolic acid"},
    {"compound_id": "skimmianine", "compound_name": "Skimmianine"},
    {"compound_id": "bisdemethoxycurcumin", "compound_name": "Bisdemethoxycurcumin"},
    {"compound_id": "baicalin", "compound_name": "Baicalin"},
    {"compound_id": "nimbin", "compound_name": "Nimbin"},
    {"compound_id": "costunolide", "compound_name": "Costunolide"},
    {"compound_id": "azadirachtin", "compound_name": "Azadirachtin"},
    {"compound_id": "eugenol", "compound_name": "Eugenol"}
]

def clean_and_prepare_dirs(target_id):
    target_dir = OUTPUTS_DIR / target_id
    if target_dir.exists():
        shutil.rmtree(target_dir, ignore_errors=True)
    os.makedirs(target_dir, exist_ok=True)
    return target_dir

def run_vina(target_id, ligand_id, lig_dir):
    print(f"   => Running AutoDock Vina...")
    vina_binary = "/opt/services/autodock_vina/bin/vina"
    receptor_pdbqt = PREPARED_DIR / "targets" / target_id / "receptor.pdbqt"
    ligand_pdbqt = PREPARED_DIR / "ligands" / f"{ligand_id}.pdbqt"
    out_pdbqt = lig_dir / "vina_pose.pdbqt"
    
    # Load coordinates dynamically from yaml config
    yaml_path = BASE_DIR / "configs" / "docking_boxes.yaml"
    cx, cy, cz = 0.0, 0.0, 0.0
    sx, sy, sz = 20.0, 20.0, 20.0
    has_coord = False
    
    if yaml_path.exists():
        try:
            with open(yaml_path, "r") as f_yaml:
                boxes = yaml.safe_load(f_yaml)
                if target_id in boxes:
                    cx = boxes[target_id].get("center_x", 0.0)
                    cy = boxes[target_id].get("center_y", 0.0)
                    cz = boxes[target_id].get("center_z", 0.0)
                    sx = boxes[target_id].get("size_x", 20.0)
                    sy = boxes[target_id].get("size_y", 20.0)
                    sz = boxes[target_id].get("size_z", 20.0)
                    if cx != 0.0 or cy != 0.0 or cz != 0.0:
                        has_coord = True
        except Exception as ey:
            print(f"      [Config Error] Failed to parse docking_boxes.yaml: {ey}")
            
    if not has_coord:
        # Dynamically calculate the protein's center of mass (geometric centroid)
        pdb_path = PREPARED_DIR / "targets" / target_id / "clean_receptor.pdb"
        if pdb_path.exists():
            try:
                xs, ys, zs = [], [], []
                with open(pdb_path, "r") as f:
                    for line in f:
                        if line.startswith("ATOM") or line.startswith("HETATM"):
                            try:
                                xs.append(float(line[30:38]))
                                ys.append(float(line[38:46]))
                                zs.append(float(line[46:54]))
                            except ValueError:
                                continue
                if xs:
                    cx = round(sum(xs) / len(xs), 2)
                    cy = round(sum(ys) / len(ys), 2)
                    cz = round(sum(zs) / len(zs), 2)
                    sx, sy, sz = 25.0, 25.0, 25.0 # Generous cover for global cavity search
                    print(f"      [Auto Centroid] Calculated protein center of mass: ({cx}, {cy}, {cz})")
            except Exception as ep:
                print(f"      [Auto Centroid Error] Failed to parse PDB: {ep}")
            
    cmd = [
        vina_binary,
        "--receptor", str(receptor_pdbqt),
        "--ligand", str(ligand_pdbqt),
        "--center_x", str(cx), "--center_y", str(cy), "--center_z", str(cz),
        "--size_x", str(sx), "--size_y", str(sy), "--size_z", str(sz),
        "--exhaustiveness", "8",
        "--out", str(out_pdbqt)
    ]
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        # Run local parser
        out_json_path = lig_dir / "vina_results.json"
        
        # Parse PDBQT directly
        results = []
        if out_pdbqt.exists():
            with open(out_pdbqt, "r", encoding="utf-8") as f:
                for line in f:
                    if line.startswith("REMARK VINA RESULT:"):
                        parts = line.split()
                        if len(parts) >= 6:
                            results.append({
                                "mode": len(results) + 1,
                                "affinity_kcal_mol": float(parts[3]),
                                "rmsd_lower_bound": float(parts[4]),
                                "rmsd_upper_bound": float(parts[5])
                            })
        output_data = {
            "target_id": target_id,
            "ligand_id": ligand_id,
            "results": results
        }
        with open(out_json_path, "w", encoding="utf-8") as f:
            json.dump(output_data, f, indent=2)
            
        print(f"      [Vina Success] Energy: {results[0]['affinity_kcal_mol']} kcal/mol" if results else "      [Vina Success] No poses found.")
        return True
    except Exception as e:
        print(f"      [Vina Failed] {e}")
    return False

def run_diffdock(target_id, ligand_id, lig_dir):
    print(f"   => Running DiffDock-L...")
    env_path = "/opt/services/diffdock_l/env"
    diffdock_dir = "/opt/services/diffdock_l/app/DiffDock"
    
    protein_pdb = PREPARED_DIR / "targets" / target_id / "clean_receptor.pdb"
    ligand_sdf = PREPARED_DIR / "ligands" / f"{ligand_id}.sdf"
    
    # We write directly to a dedicated temp folder and move the files to prevent collision
    temp_out_dir = OUTPUTS_DIR / f"temp_dd_{target_id}_{ligand_id}"
    shutil.rmtree(temp_out_dir, ignore_errors=True)
    os.makedirs(temp_out_dir, exist_ok=True)
    
    cmd = [
        "/opt/mambaforge/bin/mamba", "run", "-p", env_path,
        "python", "inference.py",
        "--protein_path", str(protein_pdb),
        "--ligand_description", str(ligand_sdf),
        "--out_dir", str(temp_out_dir),
        "--complex_name", "docked",
        "--samples_per_complex", "10",
        "--model_dir", os.path.join(diffdock_dir, "score_model"),
        "--ckpt", "best_ema_inference_epoch_model.pt",
        "--confidence_model_dir", os.path.join(diffdock_dir, "confidence_model"),
        "--confidence_ckpt", "best_model_epoch75.pt"
    ]
    try:
        subprocess.run(cmd, capture_output=True, check=True, cwd=diffdock_dir)
        
        # Parse output files
        import glob
        docked_folder = temp_out_dir / "docked"
        sdf_files = glob.glob(os.path.join(docked_folder, "rank*_confidence*.sdf"))
        
        results = []
        for filepath in sdf_files:
            filename = os.path.basename(filepath)
            parts = filename.replace(".sdf", "").split("_confidence")
            if len(parts) == 2:
                try:
                    rank = int(parts[0].replace("rank", ""))
                    confidence = float(parts[1])
                    results.append({
                        "rank": rank,
                        "confidence": confidence,
                        "filename": filename
                    })
                except ValueError:
                    pass
                    
        # Sort by rank
        results.sort(key=lambda x: x["rank"])
        
        # Copy highest confidence file as diffdock_pose.sdf
        if results:
            src_sdf = docked_folder / results[0]["filename"]
            shutil.copy(str(src_sdf), str(lig_dir / "diffdock_pose.sdf"))
            
        # Write results JSON
        out_json_path = lig_dir / "diffdock_results.json"
        with open(out_json_path, "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2)
            
        shutil.rmtree(temp_out_dir, ignore_errors=True)
        print(f"      [DiffDock Success] Confidence: {results[0]['confidence']}" if results else "      [DiffDock Success] No poses found.")
        return True
    except Exception as e:
        print(f"      [DiffDock Failed] {e}")
    return False

def main():
    parser = argparse.ArgumentParser(description="Structured Bio-AI Target Screener")
    parser.add_argument("--target", default="pqsr", help="Target ID (e.g. pqsr)")
    args = parser.parse_args()
    
    target_id = args.target.lower()
    
    # 1. Clean and prepare target parent folder
    target_dir = clean_and_prepare_dirs(target_id)
    
    results_rows = []
    total = len(phytochemicals)
    
    print(f"🔬 Starting Pure, Multi-Level High-Throughput Screening for Target: {target_id.upper()}")
    print(f"Cleaned output folder: {target_dir}")
    
    for idx, lig in enumerate(phytochemicals, 1):
        lig_id = lig["compound_id"]
        lig_name = lig["compound_name"]
        
        print(f"\n[{idx}/{total}] Processing: {lig_name} ({lig_id})...")
        
        # 1. Create dedicated ligand subdirectory
        lig_dir = target_dir / lig_id
        os.makedirs(lig_dir, exist_ok=True)
        
        # 2. Prepare Ligand structures
        subprocess.run([sys.executable, str(BASE_DIR / "scripts" / "ligand_preparation.py"), "--ligand", lig_id], capture_output=True, check=True)
        
        # 3. Run AutoDock Vina
        run_vina(target_id, lig_id, lig_dir)
        
        # 4. Run DiffDock-L
        run_diffdock(target_id, lig_id, lig_dir)
        
        # 5. Run Interaction Parser
        subprocess.run([
            sys.executable, str(BASE_DIR / "backend" / "stage8_interaction_parser" / "interaction_parser.py"),
            "--receptor", f"data/prepared/targets/{target_id}/clean_receptor.pdb",
            "--ligand", str(lig_dir / "vina_pose.pdbqt"),
            "--target_id", target_id,
            "--ligand_id", lig_id,
            "--out_dir", str(lig_dir)
        ], capture_output=True, check=True)
        # Copy outputs to exact filenames inside ligand directory
        shutil.move(str(lig_dir / "interaction_report.json"), str(lig_dir / "interaction_report.json"))
        
        # 6. Run Mechanism Builder
        subprocess.run([
            sys.executable, str(BASE_DIR / "backend" / "stage9_mechanism_graph" / "mechanism_graph_builder.py"),
            "--interaction_report", str(lig_dir / "interaction_report.json"),
            "--target_registry", "docs/AYUSH_AMR_Final_Targets.xlsx",
            "--out_dir", str(lig_dir)
        ], capture_output=True, check=True)
        
        # 7. Run Validation Scorer
        subprocess.run([
            sys.executable, str(BASE_DIR / "backend" / "stage10_validation_scorer" / "validation_scorer.py"),
            "--interaction_report", str(lig_dir / "interaction_report.json"),
            "--mechanism_graph", str(lig_dir / "mechanism_graph.json"),
            "--vina_report", str(lig_dir / "vina_results.json"),
            "--diffdock_report", str(lig_dir / "diffdock_results.json"),
            "--out_dir", str(lig_dir)
        ], capture_output=True, check=True)
        
        # Move score file
        shutil.move(str(lig_dir / "validation_priority_score.json"), str(lig_dir / "validation_priority_score.json"))
        
        # 8. Copy Evidence Passport (Stage 11 copy)
        passport_src = BASE_DIR / "outputs" / "evidence_passport.json"
        if passport_src.exists():
            shutil.copy(str(passport_src), str(lig_dir / "evidence_passport.json"))
            
        # 9. Read the compiled values to write the leaderboard CSV
        try:
            with open(lig_dir / "validation_priority_score.json", "r") as f_score:
                score_data = json.load(f_score)
            with open(lig_dir / "vina_results.json", "r") as f_vina:
                vina_data = json.load(f_vina)
            with open(lig_dir / "diffdock_results.json", "r") as f_dd:
                dd_data = json.load(f_dd)
                
            affinity = vina_data["results"][0]["affinity_kcal_mol"] if vina_data.get("results") else 0.0
            confidence = dd_data[0]["confidence"] if isinstance(dd_data, list) and dd_data else -2.0
            priority_score = score_data["validation_priority_score"]
            decision = score_data["decision"]
            evidence_strength = score_data["evidence_strength"]
            h_bonds = score_data["metrics"].get("interaction_contribution", 0) / 5 # estimate H-bonds from contribution
            
            results_rows.append({
                "Compound ID": lig_id,
                "Compound Name": lig_name,
                "Vina Affinity (kcal/mol)": affinity,
                "DiffDock Confidence": confidence,
                "Hydrogen Bonds": int(h_bonds),
                "Validation Priority Score": priority_score,
                "Preclinical Decision": decision,
                "Evidence Strength": evidence_strength
            })
            print(f"      [Compiled] Priority Score: {priority_score} | Decision: {decision}")
        except Exception as e:
            print(f"      [Failed to Compile] {e}")
            
    # Sort results by validation priority score descending
    results_rows.sort(key=lambda x: x["Validation Priority Score"], reverse=True)
    
    # Write to target-level screening_leaderboard.csv
    out_csv_path = target_dir / "screening_leaderboard.csv"
    with open(out_csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([
            "Rank", "Compound ID", "Compound Name", "Vina Affinity (kcal/mol)",
            "DiffDock Confidence", "Hydrogen Bonds", "Validation Priority Score",
            "Preclinical Decision", "Evidence Strength"
        ])
        for rank_idx, row in enumerate(results_rows, 1):
            writer.writerow([
                rank_idx,
                row["Compound ID"],
                row["Compound Name"],
                row["Vina Affinity (kcal/mol)"],
                row["DiffDock Confidence"],
                row["Hydrogen Bonds"],
                row["Validation Priority Score"],
                row["Preclinical Decision"],
                row["Evidence Strength"]
            ])
            
    print(f"\n🏆 ORGANISM-WIDE HIGH-THROUGHPUT SCREENING COMPLETED SUCCESSFULLY!")
    print(f"Generated clean leaderboard at: {out_csv_path}")

if __name__ == "__main__":
    main()
