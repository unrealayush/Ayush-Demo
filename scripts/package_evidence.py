import os
import sys
import zipfile
import json
import hashlib

# --- Files to Collect & Package ---
FILES_TO_PACKAGE = {
    "ligand_library.csv": {
        "path": "data/inputs/ligand_library.csv",
        "description": "Curated library of active components (Costunolide, Dehydrocostus lactone) with smiles and database cross-references."
    },
    "pathogen_target_registry.csv": {
        "path": "data/inputs/pathogen_target_registry.csv",
        "description": "Curated target database containing resolved experimental structures and sequences for MVP proteins (LasR, PqsR, AgrA, SrtA)."
    },
    "source_traceability.csv": {
        "path": "outputs/source_traceability.csv",
        "description": "Comprehensive audit trail documenting database source, version, date-stamp, and URL accessed for every asset."
    },
    "structure_resolution_report.json": {
        "path": "outputs/structure_resolution_report.json",
        "description": "Verification report capturing experimental PDB structure details resolved from RCSB."
    },
    "ligand_prep_report.json": {
        "path": "outputs/ligand_prep_report.json",
        "description": "Validation report capturing RDKit 3D conformer optimization and OpenBabel PDBQT generation success."
    },
    "receptor_prep_report.json": {
        "path": "outputs/receptor_prep_report.json",
        "description": "Validation report capturing macromolecule filtering and rigid PDBQT receptor generation success."
    },
    "docking_boxes.yaml": {
        "path": "configs/docking_boxes.yaml",
        "description": "Molecular docking grid parameters centered at computed centroids of co-crystallized structural ligands."
    },
    "diffdock_input.csv": {
        "path": "data/prepared/diffdock/diffdock_input.csv",
        "description": "Batch input mapping file for DiffDock-L containing clean receptors, optimized ligands, and raw target sequences."
    },
    "validate_contracts_report.json": {
        "path": "outputs/validate_contracts_report.json",
        "description": "Master data-contract validation report showing 100% presence and integrity audit across 24 files."
    }
}

ZIP_NAME = "evidence_pack.zip"
MANIFEST_NAME = "evidence_pack_manifest.json"

def calculate_sha256(filepath):
    sha256_hash = hashlib.sha256()
    try:
        with open(filepath, "rb") as f:
            for byte_block in iter(lambda: f.read(4096), b""):
                sha256_hash.update(byte_block)
        return sha256_hash.hexdigest()
    except Exception as e:
        print(f"Error hashing {filepath}: {e}", file=sys.stderr)
    return None

def main():
    packed_files = []
    missing_files = []
    
    # 1. Create ZIP Archive and calculate metadata
    print(f"Creating ZIP archive: {ZIP_NAME}...")
    try:
        with zipfile.ZipFile(ZIP_NAME, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for arcname, details in FILES_TO_PACKAGE.items():
                fpath = details["path"]
                
                if not os.path.exists(fpath):
                    print(f"Error: Required file '{fpath}' is missing! Packaging cancelled.", file=sys.stderr)
                    missing_files.append(fpath)
                    continue
                    
                # Compute SHA256 and Size
                sha_hash = calculate_sha256(fpath)
                size_bytes = os.path.getsize(fpath)
                
                # Write to ZIP (flat structure in root of the zip file for easy reading)
                zipf.write(fpath, arcname)
                
                packed_files.append({
                    "filename": arcname,
                    "original_path": fpath,
                    "size_bytes": size_bytes,
                    "sha256_hash": sha_hash,
                    "description": details["description"]
                })
        
        if missing_files:
            if os.path.exists(ZIP_NAME):
                os.remove(ZIP_NAME)
            print("\n" + "="*50, file=sys.stderr)
            print("ERROR: EVIDENCE PACKAGING FAILED", file=sys.stderr)
            print("The following required files are missing. Please run their scripts first:", file=sys.stderr)
            for mf in missing_files:
                print(f"  - {mf}", file=sys.stderr)
            print("="*50 + "\n", file=sys.stderr)
            sys.exit(1)
            
    except Exception as e:
        print(f"Exception during ZIP generation: {e}", file=sys.stderr)
        sys.exit(1)

    # 2. Generate evidence_pack_manifest.json
    print(f"Generating manifest: {MANIFEST_NAME}...")
    manifest_data = {
        "status": "COMPLETE",
        "packaging_date": "2026-06-10",
        "archive_name": ZIP_NAME,
        "total_files_packaged": len(packed_files),
        "files": packed_files
    }
    
    try:
        with open(MANIFEST_NAME, "w", encoding="utf-8") as f:
            json.dump(manifest_data, f, indent=2)
        print(f"Successfully generated: {MANIFEST_NAME}")
    except Exception as e:
        print(f"Error writing manifest: {e}", file=sys.stderr)
        sys.exit(1)

    print("\n" + "="*50)
    print("EVIDENCE PACKAGING COMPLETE!")
    print(f"ZIP File: {ZIP_NAME}")
    print(f"Manifest File: {MANIFEST_NAME}")
    print(f"Files Bundled: {len(packed_files)}")
    print("="*50 + "\n")
    sys.exit(0)

if __name__ == "__main__":
    main()
