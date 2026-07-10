import urllib.request
import urllib.parse
import json
import csv
import os
import sys

# --- Setup Output Directories ---
os.makedirs("data/inputs", exist_ok=True)
os.makedirs("outputs", exist_ok=True)

# Schema requirements
# Scenario targets mapping (curated non-invented accessions)
TARGETS = {
    "lasr": {
        "accession": "P25084",
        "target_label": "LasR",
        "gene_symbol": "lasR",
        "organism_key": "Pseudomonas aeruginosa",
        "scenario_id": "primary_kuth_pseudomonas"
    },
    "pqsr": {
        "accession": "Q9I4X0",
        "target_label": "PqsR / MvfR",
        "gene_symbol": "pqsR",
        "organism_key": "Pseudomonas aeruginosa",
        "scenario_id": "primary_kuth_pseudomonas"
    },
    "agra": {
        "accession": "P0A0I7",
        "target_label": "AgrA",
        "gene_symbol": "agrA",
        "organism_key": "Staphylococcus aureus",
        "scenario_id": "secondary_kuth_staphylococcus"
    },
    "srta": {
        "accession": "Q2FV99",
        "target_label": "Sortase A / SrtA",
        "gene_symbol": "srtA",
        "organism_key": "Staphylococcus aureus",
        "scenario_id": "secondary_kuth_staphylococcus"
    },
    "mrkh": {
        "accession": "A6T8Y1",
        "target_label": "MrkH",
        "gene_symbol": "mrkH",
        "organism_key": "Klebsiella pneumoniae",
        "scenario_id": "tertiary_kuth_klebsiella"
    },
    "wzc": {
        "accession": "A6T2A5",
        "target_label": "Wzc",
        "gene_symbol": "wzc",
        "organism_key": "Klebsiella pneumoniae",
        "scenario_id": "tertiary_kuth_klebsiella"
    }
}

def query_uniprot(accession):
    print(f"Querying UniProt API for accession '{accession}'...")
    url = f"https://rest.uniprot.org/uniprotkb/{accession}.json"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'BioinformaticsHub/1.0'})
        with urllib.request.urlopen(req, timeout=15) as response:
            data = json.loads(response.read().decode('utf-8'))
            
            # Extract sequence
            sequence = data.get("sequence", {}).get("value")
            
            # Extract NCBI protein cross references
            ncbi_accession = "missing_real_data"
            for ref in data.get("uniProtKBCrossReferences", []):
                if ref.get("database") == "RefSeq" or ref.get("database") == "GenBank":
                    properties = ref.get("properties", [])
                    # The NCBI accession is typically the first property value (e.g. NP_xxxx or YP_xxxx)
                    for prop in properties:
                        if prop.get("key") == "ProteinAccession":
                            ncbi_accession = prop.get("value")
                            break
                    if ncbi_accession != "missing_real_data":
                        break
            
            # Fallback if GenBank/RefSeq not matched, search for EMBL/Protein ID
            if ncbi_accession == "missing_real_data":
                for ref in data.get("uniProtKBCrossReferences", []):
                    if ref.get("database") == "EMBL":
                        properties = ref.get("properties", [])
                        for prop in properties:
                            if prop.get("key") == "ProteinId":
                                ncbi_accession = prop.get("value")
                                break
                        if ncbi_accession != "missing_real_data":
                            break

            return {
                "sequence": sequence,
                "ncbi_accession": ncbi_accession,
                "uniprot_url": f"https://www.uniprot.org/uniprotkb/{accession}"
            }
    except Exception as e:
        print(f"UniProt error for '{accession}': {e}", file=sys.stderr)
    return None

def main():
    registry_rows = []
    traceability_rows = []
    
    for target_id, info in TARGETS.items():
        accession = info["accession"]
        res = query_uniprot(accession)
        
        sequence = res.get("sequence") if res else None
        ncbi_acc = res.get("ncbi_accession") if res else "missing_real_data"
        uniprot_url = res.get("uniprot_url") if res else f"https://www.uniprot.org/uniprotkb/{accession}"
        
        # 1. Generate Target Directories and FASTA outputs
        target_dir = f"data/prepared/targets/{target_id}"
        os.makedirs(target_dir, exist_ok=True)
        fasta_path = f"{target_dir}/sequence.fasta"
        
        if sequence:
            with open(fasta_path, "w", encoding="utf-8") as f:
                f.write(f">{target_id}_{accession} {info['target_label']} | {info['organism_key']}\n")
                # Wrap fasta sequence by 60 chars per line (standards)
                for i in range(0, len(sequence), 60):
                    f.write(sequence[i:i+60] + "\n")
            print(f"Generated FASTA: {fasta_path}")
        else:
            sequence = "missing_real_data"
            fasta_path = "missing_real_data"

        # 2. Build pathogen_target_registry row
        row = {
            "scenario_id": info["scenario_id"],
            "organism_key": info["organism_key"],
            "target_label": info["target_label"],
            "gene_symbol": info["gene_symbol"],
            "target_aliases": target_id.upper(),
            "uniprot_accession": accession,
            "ncbi_protein_accession": ncbi_acc,
            "protein_sequence_fasta_path": fasta_path,
            "preferred_structure_source": "RCSB_PDB" if target_id != "agra" else "AlphaFold_DB", # Curated standard
            "structure_source_id": "structure_pending",
            "structure_source_url": "structure_pending",
            "evidence_level": "curated_literature",
            "source_traceability_id": f"UNIPROT_ACC_{accession}"
        }
        registry_rows.append(row)
        
        # 3. Create trace records
        traceability_rows.append({
            "source_id": f"UNIPROT_ACC_{accession}",
            "database_name": "UniProt",
            "compound_id": target_id,  # reused for target tracking cleanly
            "url": uniprot_url,
            "date_accessed": "2026-06-10"
        })
        if ncbi_acc and ncbi_acc != "missing_real_data":
            traceability_rows.append({
                "source_id": f"NCBI_PROT_{ncbi_acc}",
                "database_name": "NCBI Protein",
                "compound_id": target_id,
                "url": f"https://www.ncbi.nlm.nih.gov/protein/{ncbi_acc}",
                "date_accessed": "2026-06-10"
            })

    # Save target registry CSV
    csv_path = "data/inputs/pathogen_target_registry.csv"
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=[
            "scenario_id", "organism_key", "target_label", "gene_symbol", "target_aliases",
            "uniprot_accession", "ncbi_protein_accession", "protein_sequence_fasta_path",
            "preferred_structure_source", "structure_source_id", "structure_source_url",
            "evidence_level", "source_traceability_id"
        ])
        writer.writeheader()
        writer.writerows(registry_rows)
    print(f"Generated: {csv_path}")

    # Append to outputs/source_traceability.csv
    trace_path = "outputs/source_traceability.csv"
    file_exists = os.path.exists(trace_path)
    
    # Read existing traceability rows to prevent duplicate writes
    existing_source_ids = set()
    if file_exists:
        with open(trace_path, "r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            if reader.fieldnames:
                for r in reader:
                    existing_source_ids.add(r.get("source_id"))

    with open(trace_path, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["source_id", "database_name", "compound_id", "url", "date_accessed"])
        if not file_exists:
            writer.writeheader()
        for trow in traceability_rows:
            if trow["source_id"] not in existing_source_ids:
                writer.writerow(trow)
                existing_source_ids.add(trow["source_id"])
    print(f"Updated: {trace_path} with target traceability logs.")

if __name__ == "__main__":
    main()
