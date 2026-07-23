import csv
import os

REGISTRY_PATH = "data/inputs/pathogen_target_registry.csv"

# Existing rows
rows = []
if os.path.exists(REGISTRY_PATH):
    with open(REGISTRY_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Drop murj if it exists
            if row["gene_symbol"].lower() == "murj":
                continue
            # Drop existing acrb if it exists
            if row["gene_symbol"].lower() == "acrb":
                continue
            rows.append(row)

# Append Mura
mura = {
    "scenario_id": "secondary_kuth_staphylococcus",
    "organism_key": "Staphylococcus aureus",
    "target_label": "MurA",
    "gene_symbol": "mura",
    "target_aliases": "MURA",
    "uniprot_accession": "P84058",
    "ncbi_protein_accession": "missing_real_data",
    "protein_sequence_fasta_path": "data/prepared/targets/mura/sequence.fasta",
    "preferred_structure_source": "AlphaFold_DB",
    "structure_source_id": "structure_pending",
    "structure_source_url": "structure_pending",
    "evidence_level": "curated_literature",
    "source_traceability_id": "UNIPROT_ACC_P84058"
}
rows.append(mura)

# Append AcrB
acrb = {
    "scenario_id": "tertiary_kuth_klebsiella",
    "organism_key": "Klebsiella pneumoniae",
    "target_label": "AcrB",
    "gene_symbol": "acrb",
    "target_aliases": "ACRB",
    "uniprot_accession": "A6T5M4",
    "ncbi_protein_accession": "missing_real_data",
    "protein_sequence_fasta_path": "data/prepared/targets/acrb/sequence.fasta",
    "preferred_structure_source": "AlphaFold_DB",
    "structure_source_id": "structure_pending",
    "structure_source_url": "structure_pending",
    "evidence_level": "curated_literature",
    "source_traceability_id": "UNIPROT_ACC_A6T5M4"
}
rows.append(acrb)

os.makedirs("data/prepared/targets/mura", exist_ok=True)
with open("data/prepared/targets/mura/sequence.fasta", "w") as f:
    f.write(">mura_P84058 MurA | Staphylococcus aureus\n")

os.makedirs("data/prepared/targets/acrb", exist_ok=True)
with open("data/prepared/targets/acrb/sequence.fasta", "w") as f:
    f.write(">acrb_A6T5M4 AcrB | Klebsiella pneumoniae\n")

with open(REGISTRY_PATH, "w", newline="", encoding="utf-8") as f:
    fieldnames = [
        "scenario_id", "organism_key", "target_label", "gene_symbol", "target_aliases",
        "uniprot_accession", "ncbi_protein_accession", "protein_sequence_fasta_path",
        "preferred_structure_source", "structure_source_id", "structure_source_url",
        "evidence_level", "source_traceability_id"
    ]
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)

print("Patched target registry with MurA and AcrB successfully.")
