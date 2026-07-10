import os
import sys
import csv
import json
import subprocess

# --- Setup Output Directories ---
os.makedirs("outputs", exist_ok=True)

REGISTRY_PATH = "data/inputs/pathogen_target_registry.csv"
REPORT_PATH = "outputs/receptor_prep_report.json"

def clean_pdb_file(input_path, output_path):
    print(f"PDB Clean: Processing {input_path} -> {output_path}...")
    try:
        # Keep only standard protein ATOM coordinates, and structural markers
        # Skip HETATM records (waters, crystallographic ligands, heavy metals, crystallization additives)
        # If the PDB contains multiple NMR models, only keep the first one (MODEL 1) to prevent Vina parsing crashes
        in_other_model = False
        with open(input_path, "r") as f_in, open(output_path, "w") as f_out:
            for line in f_in:
                if line.startswith("MODEL"):
                    parts = line.split()
                    if len(parts) >= 2:
                        try:
                            model_num = int(parts[1])
                            if model_num > 1:
                                in_other_model = True
                        except ValueError:
                            pass
                elif line.startswith("ENDMDL"):
                    if in_other_model:
                        in_other_model = False
                        continue
                    else:
                        # Finished MODEL 1. Append terminator and break to truncate the rest of the ensemble
                        f_out.write(line)
                        f_out.write("END\n")
                        break
                
                if in_other_model:
                    continue
                    
                if line.startswith("ATOM") or line.startswith("TER") or line.startswith("MODEL"):
                    # Double-layer check to filter out any residual water molecules labeled as ATOM
                    if any(water in line for water in ["HOH", "WAT", "H2O"]):
                        continue
                    f_out.write(line)
            else:
                f_out.write("END\n")
        print(f"PDB Clean: Successfully filtered NMR ensemble to a single rigid MODEL in {output_path}")
        return True
    except Exception as e:
        print(f"PDB Clean Exception for {input_path}: {e}", file=sys.stderr)
    return False

def convert_pdb_to_pdbqt(pdb_path, pdbqt_path, name):
    print(f"OpenBabel: Converting receptor {pdb_path} to rigid {pdbqt_path}...")
    
    # 1. First approach: Try to use openbabel Python bindings
    try:
        from openbabel import openbabel as ob
        
        obConversion = ob.OBConversion()
        obConversion.SetInAndOutFormats("pdb", "pdbqt")
        # Add rigid receptor flag (preserve charges and do not assign rotatable bonds)
        obConversion.AddOption("r", ob.OBConversion.OUTOPTIONS)
        
        obMol = ob.OBMol()
        if obConversion.ReadFile(obMol, pdb_path):
            if obConversion.WriteFile(obMol, pdbqt_path):
                print(f"OpenBabel (Python Bindings): Successfully saved rigid receptor to {pdbqt_path}")
                return True
    except ImportError:
        pass # Fallback to CLI
        
    # 2. Second approach: Try to execute obabel command line tool via subprocess
    try:
        # obabel command layout with -xr (rigid receptor option)
        cmd = ["obabel", pdb_path, "-ipdb", "-opdbqt", "-O", pdbqt_path, "-xr"]
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        print(f"OpenBabel (CLI Tool): Successfully saved rigid receptor to {pdbqt_path}")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"OpenBabel CLI failed or is not installed: {e}", file=sys.stderr)
        
    return False

def main():
    if not os.path.exists(REGISTRY_PATH):
        print(f"Error: Target registry '{REGISTRY_PATH}' not found. Please run build_target_registry.py first.", file=sys.stderr)
        sys.exit(1)
        
    prepared_records = []
    
    # Read target registry CSV
    with open(REGISTRY_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        target_rows = list(reader)

    # Check if openbabel is available before starting, otherwise exit early with instructions
    # Note: openbabel is required on the machine executing this script
    try:
        from openbabel import openbabel
    except ImportError:
        # Check if obabel CLI is available
        try:
            subprocess.run(["obabel", "-V"], capture_output=True, check=True)
        except Exception:
            print("\n" + "="*70, file=sys.stderr)
            print("ERROR: OPEN BABEL IS MISSING IN THE SYSTEM PATH", file=sys.stderr)
            print("Please activate your Conda/Mamba environment containing Open Babel.", file=sys.stderr)
            print("Example: conda activate autodock_env", file=sys.stderr)
            print("="*70 + "\n", file=sys.stderr)
            sys.exit(1)

    for row in target_rows:
        target_id = row["gene_symbol"].lower() # Use gene symbol as consistent target identifier
        target_label = row["target_label"]
        
        target_dir = f"data/prepared/targets/{target_id}"
        raw_file = f"{target_dir}/raw_structure.pdb"
        clean_file = f"{target_dir}/clean_receptor.pdb"
        pdbqt_file = f"{target_dir}/receptor.pdbqt"
        
        if not os.path.exists(raw_file):
            print(f"Warning: Skipping {target_label} because raw file '{raw_file}' is missing.", file=sys.stderr)
            continue
            
        # 1. Clean raw experimental structure (pure-Python macromolecule filter)
        clean_ok = clean_pdb_file(raw_file, clean_file)
        
        # 2. Convert clean PDB to rigid receptor PDBQT via Open Babel
        ob_ok = False
        if clean_ok:
            ob_ok = convert_pdb_to_pdbqt(clean_file, pdbqt_file, target_label)
            
        status = "PASSED" if (clean_ok and ob_ok) else "FAILED"
        
        prepared_records.append({
            "target_id": target_id,
            "target_label": target_label,
            "clean_receptor_path": clean_file if clean_ok else None,
            "receptor_pdbqt_path": pdbqt_file if ob_ok else None,
            "status": status
        })

    # Save outputs/receptor_prep_report.json
    with open(REPORT_PATH, "w", encoding="utf-8") as f:
        json.dump({
            "status": "PASSED" if all(r["status"] == "PASSED" for r in prepared_records) else "FAILED",
            "report_date": "2026-06-10",
            "receptors_prepared": sum(1 for r in prepared_records if r["status"] == "PASSED"),
            "details": prepared_records
        }, f, indent=2)
    print(f"Generated: {REPORT_PATH}")

if __name__ == "__main__":
    main()
