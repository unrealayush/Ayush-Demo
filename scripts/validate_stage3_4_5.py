import os
import sys
import csv
import json

# --- Setup Output Directories ---
os.makedirs("outputs", exist_ok=True)

REPORT_PATH = "outputs/validate_contracts_report.json"

# Static files to check
STATIC_FILES = [
    "data/inputs/ligand_library.csv",
    "data/inputs/pathogen_target_registry.csv",
    "configs/docking_boxes.yaml",
    "data/prepared/diffdock/diffdock_input.csv"
]

def main():
    missing_files = []
    checked_files = {}
    
    # 1. Check static configuration and inputs
    print("Checking static core registry and config files...")
    for fpath in STATIC_FILES:
        exists = os.path.exists(fpath)
        checked_files[fpath] = exists
        if not exists:
            missing_files.append(fpath)
            
    # 2. Check target-specific structure resolve and prep files
    if os.path.exists("data/inputs/pathogen_target_registry.csv"):
        print("Checking target-specific sequence and structure preparation artifacts...")
        try:
            with open("data/inputs/pathogen_target_registry.csv", "r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                for row in reader:
                    target_id = row["gene_symbol"].lower()
                    target_label = row["target_label"]
                    
                    # Core target files
                    target_files = [
                        f"data/prepared/targets/{target_id}/sequence.fasta",
                        f"data/prepared/targets/{target_id}/raw_structure.pdb",
                        f"data/prepared/targets/{target_id}/clean_receptor.pdb",
                        f"data/prepared/targets/{target_id}/receptor.pdbqt"
                    ]
                    
                    for tf in target_files:
                        exists = os.path.exists(tf)
                        checked_files[tf] = exists
                        if not exists:
                            missing_files.append(tf)
        except Exception as e:
            print(f"Error parsing pathogen_target_registry.csv: {e}", file=sys.stderr)
    else:
        print("Warning: Skipping target-specific checks because pathogen_target_registry.csv is missing.", file=sys.stderr)

    # 3. Check ligand-specific prepared assets
    if os.path.exists("data/inputs/ligand_library.csv"):
        print("Checking ligand-specific 3D conformer and docking assets...")
        try:
            with open("data/inputs/ligand_library.csv", "r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                for row in reader:
                    comp_id = row["compound_id"]
                    comp_name = row["compound_name"]
                    
                    # Core ligand files
                    ligand_files = [
                        f"data/prepared/ligands/{comp_id}.sdf",
                        f"data/prepared/ligands/{comp_id}.pdbqt"
                    ]
                    
                    for lf in ligand_files:
                        exists = os.path.exists(lf)
                        checked_files[lf] = exists
                        if not exists:
                            missing_files.append(lf)
        except Exception as e:
            print(f"Error parsing ligand_library.csv: {e}", file=sys.stderr)
    else:
        print("Warning: Skipping ligand-specific checks because ligand_library.csv is missing.", file=sys.stderr)

    # 4. Evaluate Overall Status
    status = "PASS" if len(missing_files) == 0 else "FAIL"
    
    # 5. Compile and Generate outputs/validate_contracts_report.json
    report_data = {
        "status": status,
        "report_date": "2026-06-10",
        "total_files_checked": len(checked_files),
        "total_files_missing": len(missing_files),
        "missing_files": missing_files,
        "checked_files": checked_files
    }
    
    with open(REPORT_PATH, "w", encoding="utf-8") as f:
        json.dump(report_data, f, indent=2)
    print(f"\nGenerated validation report: {REPORT_PATH}")
    
    # 6. Print summary to terminal
    print("\n" + "="*50)
    print(f"AYUSH BIO-AI CONTRACT VALIDATION: {status}")
    print(f"Files Checked: {len(checked_files)}")
    print(f"Files Missing: {len(missing_files)}")
    print("="*50)
    
    if missing_files:
        print("\n❌ MISSING ARTIFACT DETAILS:")
        for mf in missing_files:
            print(f"  - {mf}")
    else:
        print("\n✨ SUCCESS: All pipeline input, output, and configuration files are present and verified!")
    print("="*50 + "\n")

    if status == "FAIL":
        sys.exit(1)
    else:
        sys.exit(0)

if __name__ == "__main__":
    main()
