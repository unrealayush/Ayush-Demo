# 12 — Fetcher Module Specifications (specs only — no code)

These are the planned data-fetcher modules for the coding phase. **Spec only; do not implement now.**
Every fetcher: honors `RUN_MODE` (`mock` returns clearly-labeled fixtures, never real-looking
identifiers); stamps each row with an `evidence_level` (`contracts/vocabularies.md` §1); writes a
`source_traceability.csv` row; and on failure writes `missing_real_data` rather than inventing a
value. Output columns are defined in `contracts/input_schemas.md`. Checked by `validate_contracts`
(`CHK-TRACE-INPUTS`, `CHK-ID`, `CHK-MISSING-DATA`).

| module | input | source (family/endpoint — never an invented accession) | populates | reality | never invent |
|---|---|---|---|---|---|
| `fetch_chembl_ligands.py` | Piperine, Ciprofloxacin names | ChEMBL web services | ligand_library.csv (smiles, source_accession, source_database) | real_public (mandatory) | SMILES, ChEMBL IDs |
| `fetch_pubchem_ligands.py` | fallback when ChEMBL incomplete | PubChem PUG REST | ligand_library.csv | real_public | SMILES, CIDs |
| `fetch_imppat_candidate_metadata.py` | Trikatu / Piperine | IMPPAT 2.0 (curated fallback) | candidate_registry.csv | curated_public | botanical/active-marker mappings |
| `fetch_uniprot_targets.py` | NorA, comparator GyrA | UniProt / NCBI protein | pathogen_target_registry.csv (sequence_source, sequence_accession) | real_public (mandatory) | UniProt/NCBI accessions, gene symbols |
| `fetch_rcsb_structures.py` | target accession/sequence | RCSB PDB search/fetch | structure_path + resolved PDB id (→ structure_resolution_report.json) | real_public | PDB IDs (must query + record) |
| `fetch_alphafold_structures.py` | UniProt accession | AlphaFold DB | predicted structure + pLDDT | real_public | accessions, quality numbers |
| `prepare_esmfold2_fallback.md` | target sequence | ESMFold2 on the GPU VM (fallback only) | structure_path when PDB/AlphaFold unusable | real_public (generated) | structures (emit structure_pending if none) |
| `fetch_amr_context.py` | organism, mechanism | NCBI AMRFinderPlus / Pathogen Detection + literature | amr_context.csv | curated_public | resistance facts |
| `build_source_traceability.py` | all fetched/generated artifacts | — | outputs/source_traceability.csv | generated (mandatory) | sources/timestamps |
| `validate_contracts.py` | all inputs/outputs | — | outputs/validation_report.json | — | a pass it didn't run (see docs/10) |

## CSV reality designation (summary)
- `candidate_registry.csv` — curated_public (IMPPAT / professor input)
- `ligand_library.csv` — **real public mandatory** for the final demo
- `pathogen_target_registry.csv` — **real/curated public mandatory**
- `amr_context.csv` — curated_public
- `study_context.csv` — synthetic_demo acceptable
- `assay_results.csv` — real_lab if available, else empty or synthetic_demo (clearly labeled)
- docking outputs — generated, never fabricated
- `evidence_passport.json` — generated from traceable outputs only

## Shared rules
- All fetchers honor `RUN_MODE`; mock fixtures are labeled and never carry real-looking identifiers.
- Identity columns are never `synthetic_demo`; unfetchable identity → `missing_real_data` + hard stop
  (ligand/target identity is mandatory; see `memory/NO_HALLUCINATION_RULES.md`).
- No PDB ID is hardcoded; the resolver queries and records the selected id.
