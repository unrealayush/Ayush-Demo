import os
import sys
import csv

# --- Setup Output Directories ---
os.makedirs("data/prepared/diffdock", exist_ok=True)

CSV_PATH = "data/prepared/diffdock/diffdock_input.csv"

# Map out the curated 4 test rows
ROWS = [
    {
        "complex_name": "T1_costunolide_lasr",
        "target_id": "lasr",
        "protein_path": "data/prepared/targets/lasr/clean_receptor.pdb",
        "ligand_description": "data/prepared/ligands/costunolide.sdf"
    },
    {
        "complex_name": "T2_dehydrocostus_pqsr",
        "target_id": "pqsr",
        "protein_path": "data/prepared/targets/pqsr/clean_receptor.pdb",
        "ligand_description": "data/prepared/ligands/dehydrocostus_lactone.sdf"
    },
    {
        "complex_name": "T3_costunolide_agra",
        "target_id": "agra",
        "protein_path": "data/prepared/targets/agra/clean_receptor.pdb",
        "ligand_description": "data/prepared/ligands/costunolide.sdf"
    },
    {
        "complex_name": "T4_dehydrocostus_srta",
        "target_id": "srta",
        "protein_path": "data/prepared/targets/srta/clean_receptor.pdb",
        "ligand_description": "data/prepared/ligands/dehydrocostus_lactone.sdf"
    }
]

def read_sequence_from_fasta(fasta_path):
    if not os.path.exists(fasta_path):
        print(f"Warning: FASTA file '{fasta_path}' is missing.", file=sys.stderr)
        return "missing_real_data"
        
    try:
        sequence_lines = []
        with open(fasta_path, "r") as f:
            for line in f:
                if line.startswith(">"):
                    continue
                sequence_lines.append(line.strip())
        return "".join(sequence_lines).upper()
    except Exception as e:
        print(f"Error reading FASTA {fasta_path}: {e}", file=sys.stderr)
    return "missing_real_data"

def main():
    diffdock_rows = []
    
    for row in ROWS:
        target_id = row["target_id"]
        fasta_file = f"data/prepared/targets/{target_id}/sequence.fasta"
        
        # Read the actual full amino acid sequence
        sequence = read_sequence_from_fasta(fasta_file)
        
        diffdock_rows.append({
            "complex_name": row["complex_name"],
            "protein_path": row["protein_path"],
            "ligand_description": row["ligand_description"],
            "protein_sequence": sequence
        })

    # Save to data/prepared/diffdock/diffdock_input.csv
    with open(CSV_PATH, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["complex_name", "protein_path", "ligand_description", "protein_sequence"])
        writer.writeheader()
        writer.writerows(diffdock_rows)
    print(f"Generated: {CSV_PATH}")

if __name__ == "__main__":
    main()
