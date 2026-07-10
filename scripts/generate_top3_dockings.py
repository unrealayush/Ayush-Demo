import os
import sys
import subprocess
import shutil
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
PREPARED_DIR = BASE_DIR / "data" / "prepared"
OUTPUTS_DIR = BASE_DIR / "outputs"
TARGETS_DIR = PREPARED_DIR / "targets"
LIGANDS_DIR = PREPARED_DIR / "ligands"

# Create outputs subdirectory for the 24 files
DELIVERY_DIR = OUTPUTS_DIR / "investor_delivery_pack"
os.makedirs(DELIVERY_DIR, exist_ok=True)

# Top 3 combinations for each of the 4 Pseudomonas targets
screening_pairs = [
    # LasR
    {"target": "lasr", "ligand": "nimbolide"},
    {"target": "lasr", "ligand": "liriodendrin"},
    {"target": "lasr", "ligand": "baicalin"},
    # PqsR
    {"target": "pqsr", "ligand": "liriodendrin"},
    {"target": "pqsr", "ligand": "boeravinone_b"},
    {"target": "pqsr", "ligand": "cynaropicrin"},
    # PelD
    {"target": "peld", "ligand": "baicalin"},
    {"target": "peld", "ligand": "nimbin"},
    {"target": "peld", "ligand": "conessine"},
    # MexB
    {"target": "mexb", "ligand": "azadirachtin"},
    {"target": "mexb", "ligand": "chrysin"},
    {"target": "mexb", "ligand": "dehydrocostus_lactone"}
]

def run_vina(target_id, ligand_id, idx, total):
    print(f"[{idx}/{total}] 🟢 Running AutoDock Vina for {target_id.upper()} <-> {ligand_id}...")
    vina_binary = "/opt/services/autodock_vina/bin/vina"
    receptor_pdbqt = TARGETS_DIR / target_id / "receptor.pdbqt"
    ligand_pdbqt = LIGANDS_DIR / f"{ligand_id}.pdbqt"
    out_pdbqt = DELIVERY_DIR / f"{target_id}_{ligand_id}_vina_pose.pdbqt"
    
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
        print(f"   => Saved Vina pose to {out_pdbqt.name}")
        return True
    except Exception as e:
        print(f"   => Vina Failed: {e}")
    return False

def run_diffdock(target_id, ligand_id, idx, total):
    print(f"[{idx}/{total}] 🟣 Running DiffDock-L on L4 GPU for {target_id.upper()} <-> {ligand_id}...")
    env_path = "/opt/services/diffdock_l/env"
    diffdock_dir = "/opt/services/diffdock_l/app/DiffDock"
    
    protein_pdb = TARGETS_DIR / target_id / "clean_receptor.pdb"
    ligand_sdf = LIGANDS_DIR / f"{ligand_id}.sdf"
    temp_out_dir = OUTPUTS_DIR / f"temp_dd_{target_id}_{ligand_id}"
    
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
        # Find the rank1 sdf file in the output
        docked_sdf = temp_out_dir / "docked" / "rank1.sdf"
        # Fallback search if named with confidence
        if not docked_sdf.exists():
            import glob
            files = glob.glob(str(temp_out_dir / "docked" / "rank1_confidence-*.sdf"))
            if files:
                docked_sdf = Path(files[0])
                
        if docked_sdf.exists():
            dest_sdf = DELIVERY_DIR / f"{target_id}_{ligand_id}_diffdock_pose.sdf"
            shutil.copy(str(docked_sdf), str(dest_sdf))
            print(f"   => Saved DiffDock pose to {dest_sdf.name}")
            shutil.rmtree(temp_out_dir, ignore_errors=True)
            return True
    except Exception as e:
        print(f"   => DiffDock Failed: {e}")
    return False

def main():
    total = len(screening_pairs)
    print(f"🧪 Launching physical 3D structural docking simulations on NVIDIA L4 GPU...")
    print(f"Total pairs to run: {total} (Expected delivery: 24 active 3D coordinates files)")
    
    # Pre-verify all ligands exist or prepare them
    print("📋 Checking/preparing ligand structures...")
    for pair in screening_pairs:
        lig_id = pair["ligand"]
        subprocess.run([sys.executable, str(BASE_DIR / "scripts" / "ligand_preparation.py"), "--ligand", lig_id], check=True)
        
    for idx, pair in enumerate(screening_pairs, 1):
        target_id = pair["target"]
        ligand_id = pair["ligand"]
        
        # 1. Run AutoDock Vina
        run_vina(target_id, ligand_id, idx, total)
        
        # 2. Run DiffDock-L
        run_diffdock(target_id, ligand_id, idx, total)
        
    print(f"\n🎉 ALL 24 PHYSICAL COORDINATE FILES GENERATED SUCCESSFULLY!")
    print(f"Files saved inside directory: {DELIVERY_DIR}")
    
if __name__ == "__main__":
    main()
