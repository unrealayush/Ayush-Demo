import os
import json
import glob
import shutil

docked_dir = "/opt/services/outputs/diffdock_test_run/docked"
out_json_path = "/opt/services/outputs/diffdock_results.json"
out_rank1_path = "/opt/services/outputs/rank1.sdf"

if not os.path.exists(docked_dir):
    print(f"Error: {docked_dir} not found.")
    exit(1)

# Find all files matching rank*_confidence-*.sdf
sdf_files = glob.glob(os.path.join(docked_dir, "rank*_confidence*.sdf"))

results = []
for filepath in sdf_files:
    filename = os.path.basename(filepath)
    # e.g., rank1_confidence-0.96.sdf
    parts = filename.replace(".sdf", "").split("_confidence")
    if len(parts) == 2:
        try:
            rank_str = parts[0].replace("rank", "")
            rank = int(rank_str)
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

# Write diffdock_results.json in expected format [ {"rank": 1, "confidence": -0.96}, ... ]
with open(out_json_path, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print(f"Successfully generated {out_json_path}")

# Copy rank1.sdf to outputs/rank1.sdf if it exists
rank1_source = os.path.join(docked_dir, "rank1.sdf")
if os.path.exists(rank1_source):
    shutil.copy(rank1_source, out_rank1_path)
    print(f"Copied {rank1_source} to {out_rank1_path}")
else:
    # Fallback to copy rank1_confidence-*.sdf as rank1.sdf
    rank1_files = glob.glob(os.path.join(docked_dir, "rank1_confidence-*.sdf"))
    if rank1_files:
        shutil.copy(rank1_files[0], out_rank1_path)
        print(f"Copied fallback {rank1_files[0]} to {out_rank1_path}")
