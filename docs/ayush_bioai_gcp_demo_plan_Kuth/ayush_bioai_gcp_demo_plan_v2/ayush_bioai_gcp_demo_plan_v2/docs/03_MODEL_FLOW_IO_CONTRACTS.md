# 03 — Model Flow and Input/Output Contracts

## Full sequence

1. Data fetch and validation
2. Ligand preparation
3. Target selection
4. Target structure resolution
5. DiffDock-L AI docking
6. AutoDock Vina baseline docking
7. Interaction parsing
8. Combination plausibility scoring
9. Evidence Passport generation
10. UI rendering

---

## Step 1 — Data fetch and validation

### Input

- `data/inputs/candidate_registry.csv`
- `data/inputs/ligand_library.csv`
- `data/inputs/pathogen_target_registry.csv`
- `data/inputs/study_context.csv`

### Output

- `outputs/run_manifest.json`
- `outputs/source_traceability.csv`
- `outputs/input_validation_report.json`

### Acceptance

`valid_inputs=true` and no missing mandatory fields.

---

## Step 2 — Ligand preparation

### Tool

RDKit / Open Babel

### Input

- Piperine SMILES/SDF
- Ciprofloxacin SMILES/SDF

### Output

- `data/prepared/ligands/piperine.sdf`
- `data/prepared/ligands/piperine.pdbqt`
- `data/prepared/ligands/ciprofloxacin.sdf`
- `data/prepared/ligands/ciprofloxacin.pdbqt`
- `outputs/ligand_prep_report.json`

### Acceptance

- molecule parse succeeds
- 3D conformer generated
- PDBQT generated for Vina

---

## Step 3 — Target selection

### Input

- `pathogen_target_registry.csv`

### Output

- `outputs/target_selection.json`

### Acceptance

The selected target must include organism, gene symbol, mechanism role, and source traceability.

---

## Step 4 — Target structure resolver

### Tool priority

1. RCSB PDB
2. AlphaFold DB
3. ESMFold2 fallback

### Input

- target accession / sequence
- structure source metadata

### Output

- `data/prepared/targets/nora_target.pdb` or `.cif`
- `data/prepared/targets/gyrA_or_comparator_target.pdb` or `.cif`
- `outputs/structure_resolution_report.json`

### Acceptance

- structure path exists
- source is recorded
- quality metadata is recorded
- caution for membrane-transporter docking is recorded

---

## Step 5 — DiffDock-L AI docking

### Input

- prepared target PDB/CIF
- ligand SDF or SMILES
- `configs/diffdock_input.csv`

### Output

- `outputs/diffdock/diffdock_results.json`
- `outputs/diffdock/top_pose.sdf`

### Required JSON fields

- run_id
- complex_name
- target_id
- ligand_id
- model_name
- model_version_or_git_commit
- top_pose_file
- confidence_score
- confidence_band
- run_status
- notes

### Interpretation

DiffDock-L confidence is pose confidence only.

---

## Step 6 — AutoDock Vina baseline docking

### Input

- target PDBQT
- ligand PDBQT
- Vina config box

### Output

- `outputs/vina/vina_results.json`
- `outputs/vina/vina_pose.pdbqt`

### Required JSON fields

- run_id
- target_id
- ligand_id
- best_affinity_kcal_mol
- exhaustiveness
- search_box
- run_status
- notes

### Interpretation

Vina score is a docking energy estimate, not experimental affinity.

---

## Step 7 — Interaction parser

### Input

- DiffDock pose
- Vina pose
- target structure
- ligand structure

### Output

- `outputs/interaction_summary.json`

### Required fields

- predicted_contacts
- interaction_types
- residue_summary
- pocket_quality
- target_mechanism
- validation_needed

---

## Step 8 — Combination plausibility scorer

### Input

- DiffDock result
- Vina result
- interaction summary
- AMR context
- study context
- optional assay results

### Output

- `outputs/combination_plausibility.json`

### Score definition

The score is a validation-priority score, not synergy.

Suggested v0.1 components:

- 30% docking confidence / consistency
- 25% AMR target relevance
- 20% mechanism clarity
- 15% study-context fit
- 10% existing assay/literature evidence
- uncertainty penalty

---

## Step 9 — Evidence Passport

### Input

- all model outputs
- source traceability
- validation plan template

### Output

- `outputs/evidence_passport.json`
- `outputs/evidence_passport.md`

### Required sections

- selected AYUSH candidate
- target/pathogen context
- active marker
- antibiotic comparator
- mechanism hypothesis
- docking summary
- combination plausibility
- validation-priority decision
- wet-lab checklist
- uncertainty / limitations
- research-use-only disclaimer
