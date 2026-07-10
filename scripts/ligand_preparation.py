import os
import sys
import csv
import json
import subprocess
import argparse

# --- Setup Output Directories ---
os.makedirs("data/prepared/ligands", exist_ok=True)
os.makedirs("outputs", exist_ok=True)

REGISTRY_PATH = "data/inputs/ligand_library.csv"
REPORT_PATH = "outputs/ligand_prep_report.json"

def prepare_with_rdkit(smiles, name, sdf_path):
    print(f"RDKit: Loading molecule '{name}' from SMILES...")
    try:
        from rdkit import Chem
        from rdkit.Chem import AllChem
    except ImportError:
        print("Error: RDKit not found in active python environment.", file=sys.stderr)
        return False

    try:
        mol = Chem.MolFromSmiles(smiles)
        if not mol:
            print(f"Error: Invalid SMILES for {name}", file=sys.stderr)
            return False
            
        mol_h = Chem.AddHs(mol)
        
        params = AllChem.ETKDGv3()
        params.useBasicKnowledge = True
        params.randomSeed = 42
        
        if AllChem.EmbedMolecule(mol_h, params) == -1:
            if AllChem.EmbedMolecule(mol_h, randomSeed=42) == -1:
                print(f"Error: Conformer generation failed for {name}", file=sys.stderr)
                return False
            
        if AllChem.MMFFOptimizeMolecule(mol_h, mmffVariant='MMFF94') == -1:
            AllChem.UFFOptimizeMolecule(mol_h)
            
        with Chem.SDWriter(sdf_path) as writer:
            writer.SetKekulize(True)
            writer.write(mol_h)
        
        print(f"RDKit: Successfully saved 3D conformer to {sdf_path}")
        return True
    except Exception as e:
        print(f"RDKit Exception during {name} preparation: {e}", file=sys.stderr)
    return False

def convert_sdf_to_pdbqt(sdf_path, pdbqt_path, name):
    print(f"OpenBabel: Converting {sdf_path} to {pdbqt_path}...")
    try:
        cmd = ["obabel", sdf_path, "-isdf", "-opdbqt", "-O", pdbqt_path]
        subprocess.run(cmd, capture_output=True, text=True, check=True)
        print(f"OpenBabel (CLI Tool): Successfully saved to {pdbqt_path}")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"OpenBabel CLI failed or is not installed: {e}", file=sys.stderr)
    return False

def main():
    parser = argparse.ArgumentParser(description="Stage 1 Ligand Preparation")
    parser.add_argument("--ligand", help="Optional: Process only a single ligand by its ID.")
    args = parser.parse_args()

    if not os.path.exists(REGISTRY_PATH):
        sys.exit(f"Error: Library file '{REGISTRY_PATH}' not found.")
        
    prepared_records = []
    
    with open(REGISTRY_PATH, "r", encoding="utf-8") as f:
        library_rows = list(csv.DictReader(f))
        
    try:
        import rdkit
    except ImportError:
        sys.exit("ERROR: RDKit is missing.")

    for row in library_rows:
        comp_id = row["compound_id"]
        
        if args.ligand and comp_id != args.ligand:
            continue
            
        name = row["compound_name"]
        smiles = row["canonical_smiles"]
        
        if not smiles or smiles in ["None", "missing_real_data"]:
            continue
            
        sdf_file = f"data/prepared/ligands/{comp_id}.sdf"
        pdbqt_file = f"data/prepared/ligands/{comp_id}.pdbqt"
        
        rdkit_ok = prepare_with_rdkit(smiles, name, sdf_file)
        ob_ok = rdkit_ok and convert_sdf_to_pdbqt(sdf_file, pdbqt_file, name)
            
        prepared_records.append({
            "compound_id": comp_id, "compound_name": name,
            "rdkit_sdf_generated": rdkit_ok, "openbabel_pdbqt_generated": ob_ok,
            "status": "PASSED" if ob_ok else "FAILED"
        })

    with open(REPORT_PATH, "w", encoding="utf-8") as f:
        json.dump({
            "status": "PASSED" if all(r["status"] == "PASSED" for r in prepared_records) else "FAILED",
            "report_date": "2026-06-10",
            "compounds_prepared": sum(1 for r in prepared_records if r["status"] == "PASSED"),
            "details": prepared_records
        }, f, indent=2)
    print(f"Generated: {REPORT_PATH}")

if __name__ == "__main__":
    main()
