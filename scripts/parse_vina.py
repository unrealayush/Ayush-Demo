import json
import re
import os

log_path = "/opt/services/outputs/vina.log"
pdbqt_path = "/opt/services/outputs/vina_test_run_out.pdbqt"
out_json_path = "/opt/services/outputs/vina_results.json"

results = []

# Method 1: Try parsing output PDBQT directly (contains exact energies in REMARK)
if os.path.exists(pdbqt_path):
    with open(pdbqt_path, 'r', encoding='utf-8') as f:
        mode = 1
        for line in f:
            if line.startswith("REMARK VINA RESULT:"):
                # e.g. REMARK VINA RESULT:      -4.5      0.000      0.000
                parts = line.split()
                if len(parts) >= 6:
                    try:
                        affinity = float(parts[3])
                        rmsd_lb = float(parts[4])
                        rmsd_ub = float(parts[5])
                        results.append({
                            "mode": mode,
                            "affinity_kcal_mol": affinity,
                            "rmsd_lower_bound": rmsd_lb,
                            "rmsd_upper_bound": rmsd_ub
                        })
                        mode += 1
                    except ValueError:
                        pass

# Method 2: Fallback to log file if PDBQT parsing was empty
if not results and os.path.exists(log_path):
    with open(log_path, 'r', encoding='utf-8') as f:
        log_content = f.read()
    matches = re.findall(r"^\s*(\d+)\s+([-\d.]+)\s+([\d.]+)\s+([\d.]+)", log_content, re.M)
    results = [
        {
            "mode": int(m[0]),
            "affinity_kcal_mol": float(m[1]),
            "rmsd_lower_bound": float(m[2]),
            "rmsd_upper_bound": float(m[3])
        }
        for m in matches
    ]

output_data = {
    "target_id": "lasr",
    "ligand_id": "costunolide",
    "results": results
}

with open(out_json_path, 'w', encoding='utf-8') as f:
    json.dump(output_data, f, indent=2)

print(f"Successfully generated {out_json_path}")
