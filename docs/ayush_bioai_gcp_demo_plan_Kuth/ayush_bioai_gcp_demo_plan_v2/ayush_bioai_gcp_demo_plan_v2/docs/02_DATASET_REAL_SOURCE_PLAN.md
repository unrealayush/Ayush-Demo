# 02 — Dataset Real Source Plan

## Dataset principle

Use real/public-curated data wherever possible. Use synthetic fallback only for optional context fields, never for ligand identity or docking output.

## Dataset A — AYUSH candidate and phytochemical metadata

### File

`data/inputs/candidate_registry.csv`

### Required columns

- candidate_id
- formulation_name
- ayush_system
- source_drug
- botanical_name
- plant_part
- active_marker
- evidence_source
- evidence_level

### Preferred source

- IMPPAT 2.0 for Indian medicinal plant–phytochemical associations
- AYUSH literature manually curated if IMPPAT row is incomplete

### Default row

- candidate_id: AYU-TRIKATU-001
- formulation_name: Trikatu / Pippali / Maricha
- source_drug: Piper longum / Piper nigrum
- active_marker: Piperine

### Fallback

If IMPPAT fetch is unavailable, manually curate from the professor-provided table and label as `curated_public_or_professor_input`, not as real database record.

---

## Dataset B — Ligand library

### File

`data/inputs/ligand_library.csv`

### Required columns

- ligand_id
- compound_name
- role
- smiles
- source_database
- source_accession
- sdf_path
- pdbqt_path
- evidence_level

### Compounds

- Piperine
- Ciprofloxacin

### Preferred source

- ChEMBL API / ChEMBL web services
- Optional PubChem if accessible
- IMPPAT 3D structure for phytochemicals when available

### Rule

Do not invent SMILES. If automated fetch fails, require manual curation with source URL/accession.

---

## Dataset C — Pathogen target registry

### File

`data/inputs/pathogen_target_registry.csv`

### Required columns

- target_id
- pathogen
- organism
- target_name
- gene_symbol
- mechanism_role
- sequence_source
- sequence_accession
- preferred_structure_source
- structure_path
- evidence_level
- caution_note

### Targets

Primary:

- NorA efflux pump, Staphylococcus aureus / MRSA context

Comparator:

- DNA gyrase / GyrA context for ciprofloxacin

### Preferred source

- UniProt / NCBI protein for sequence
- RCSB PDB for experimental structures
- AlphaFold DB for predicted structures
- ESMFold2 only if PDB/AlphaFold are unavailable or poor

### No-hallucination rule

Do not hardcode PDB IDs. The fetcher must query and record selected identifiers.

---

## Dataset D — AMR/resistance context

### File

`data/inputs/amr_context.csv`

### Required columns

- pathogen_context_id
- organism
- resistance_context
- gene_or_mechanism
- phenotype_context
- source
- evidence_level

### Preferred source

- NCBI AMRFinderPlus / Pathogen Detection for real AMR mechanism context
- Literature/manual curation for NorA/efflux and MRSA biofilm context

### MVP use

This file informs mechanism labels and evidence-passport language. It does not drive docking.

---

## Dataset E — Study context

### File

`data/inputs/study_context.csv`

### Required columns

- study_context_id
- infection_model
- isolate_context
- resistance_context
- biofilm_context
- mode
- evidence_level

### Default row

- study_context_id: STUDY-MRSA-BIOFILM-001
- infection_model: biofilm-high wound infection model
- isolate_context: MRSA
- resistance_context: efflux-associated
- biofilm_context: high
- mode: preclinical_discovery
- evidence_level: synthetic_demo_context

### Note

This is not patient data.

---

## Dataset F — Optional assay evidence

### File

`data/inputs/assay_results.csv`

### Required columns

- candidate_id
- ligand_id
- antibiotic_id
- pathogen_context_id
- assay_type
- result_value
- result_unit
- interpretation
- evidence_level
- source

### MVP rule

If Prof. Avishek provides real MIC/FICI/biofilm results, include them as `real_lab`. Otherwise, leave empty or synthetic-demo and clearly label.

---

## Dataset G — Source traceability

### File

`outputs/source_traceability.csv`

### Required columns

- artifact_type
- artifact_id
- source_name
- source_url
- accession_or_identifier
- fetch_method
- fetched_at
- evidence_level
- notes

This is mandatory for the demo.
