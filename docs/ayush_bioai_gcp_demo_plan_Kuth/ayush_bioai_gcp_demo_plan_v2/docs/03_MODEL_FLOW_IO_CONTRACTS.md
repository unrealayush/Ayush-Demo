# 03 — Model Flow and Input/Output Contracts

Field-level JSON/CSV schemas are **not** duplicated here; they live in
`contracts/output_json_contracts.md` and `contracts/input_schemas.md`. This doc fixes the **step
sequence, the owning agent, the per-mode behavior, and the artifact dependencies**.

> **Step numbers are I/O-contract identifiers, not execution order.** Canonical execution order is
> **AutoDock Vina (Step 6) first, then DiffDock-L (Step 5)** — cheap CPU sanity check before paid GPU
> time. See the execution DAG in `docs/04` and `contracts/vocabularies.md` §9.

## Full sequence

| step | name | owner agent | output(s) |
|---|---|---|---|
| 1 | Data fetch & validation | dataset-curator + qa-contracts-validator | run_manifest.json, source_traceability.csv, input_validation_report.json |
| 2 | Ligand preparation | ligand-prep-engineer | prepared SDF/PDBQT, ligand_prep_report.json |
| 3 | Target selection | dataset-curator | target_selection.json |
| 4 | Target structure resolution | target-structure-resolver | prepared targets, structure_resolution_report.json |
| 5 | DiffDock-L AI docking | docking-pipeline-architect | diffdock/diffdock_results.json, top_pose.sdf |
| 6 | AutoDock Vina baseline | docking-pipeline-architect | vina/vina_results.json, vina_pose.pdbqt |
| 7 | Interaction parsing | interaction-analyst | interaction_summary.json |
| 7.5 | Mechanism graph | interaction-analyst | mechanism_graph.json |
| 8 | Combination plausibility scoring | interaction-analyst | combination_plausibility.json |
| 9 | Evidence Passport | evidence-passport-designer | evidence_passport.json, evidence_passport.md |
| 10 | UI rendering + deploy | gcp-deployment-architect | (reads outputs only) |

Cross-cutting: `qa-contracts-validator` runs `validate_contracts` at every handoff;
`scientific-validity-reviewer` reviews Steps 8–9 before Gate 5.

---

## Step 1 — Data fetch and validation
- **Input:** `data/inputs/*.csv` (all 6 registries).
- **Output:** `run_manifest.json`, `source_traceability.csv`, `input_validation_report.json`.
- **Mode behavior:** `real-data-fetch` queries live sources; `mock` seeds labeled synthetic;
  `demo` reuses validated real inputs.
- **Acceptance:** `valid_inputs=true` and no missing mandatory fields (per `input_schemas.md`).

## Step 2 — Ligand preparation
- **Tool:** RDKit / Open Babel.
- **Input:** Piperine + Ciprofloxacin SMILES/SDF from `ligand_library.csv`.
- **Output:** `data/prepared/ligands/{piperine,ciprofloxacin}.{sdf,pdbqt}`, `ligand_prep_report.json`.
- **Mode behavior:** `mock` emits a labeled stub report; real modes run the tools.
- **Acceptance:** molecule parse succeeds, 3D conformer generated, PDBQT generated; identity unchanged.

## Step 3 — Target selection
- **Input:** `pathogen_target_registry.csv`.
- **Output:** `target_selection.json`.
- **Acceptance:** selected target includes organism, gene symbol, mechanism role, and traceability.

## Step 4 — Target structure resolver
- **Tool priority:** RCSB PDB → AlphaFold DB → ESMFold2 fallback.
- **Output:** `data/prepared/targets/*.{pdb,cif}`, `structure_resolution_report.json`.
- **Mode behavior:** ESMFold2 fallback runs on the GPU VM (`real-docking`); `mock` emits a labeled
  stub.
- **Acceptance:** structure path exists **or** `structure_status=structure_pending`; source +
  quality metadata recorded; membrane-transporter caution recorded for NorA.

## Step 5 — DiffDock-L AI docking
- **Input:** prepared target + ligand, `configs/diffdock_input.csv`.
- **Output:** `outputs/diffdock/diffdock_results.json`, `top_pose.sdf`.
- **Mode behavior:** real run requires the GPU VM; `mock` emits `run_status=mock`; failure →
  `run_status=failed` (no fabricated confidence).
- **Interpretation:** DiffDock-L confidence is **pose confidence only**.

## Step 6 — AutoDock Vina baseline docking
- **Input:** target PDBQT, ligand PDBQT, Vina config box.
- **Output:** `outputs/vina/vina_results.json`, `vina_pose.pdbqt`.
- **Mode behavior:** runs as a Cloud Run CPU job in `real-docking`; `mock` emits `run_status=mock`.
- **Interpretation:** Vina score is a **docking energy estimate, not experimental affinity**.

## Step 7 — Interaction parser
- **Input:** DiffDock pose, Vina pose, target structure, ligand structure.
- **Output:** `interaction_summary.json` (fields per `output_json_contracts.md`).

## Step 7.5 — Mechanism graph
- **Input:** interaction summary + registries (candidate/ligand/target/amr_context).
- **Output:** `mechanism_graph.json` (nodes/edges; the dashboard's mechanism graph).
- **Acceptance:** every relationship edge carries provenance + evidence_level.

## Step 8 — Combination plausibility scorer
- **Input:** DiffDock result, Vina result, interaction summary, amr_context, study_context, optional
  assay_results.
- **Output:** `combination_plausibility.json`.
- **Score definition:** a **validation-priority score, not synergy** (`not_synergy:true`). Suggested
  v0.1 components (each 0–1): 30% docking confidence/consistency, 25% AMR target relevance, 20%
  mechanism clarity, 15% study-context fit, 10% existing assay/literature evidence, minus an
  uncertainty penalty. Displayed 0–100 (`vocabularies.md` §5).

## Step 9 — Evidence Passport
- **Input:** all model outputs + source traceability + validation-plan template (`docs/07`).
- **Output:** `evidence_passport.json`, `evidence_passport.md`.
- **Required sections:** selected AYUSH candidate; target/pathogen context; active marker; antibiotic
  comparator; mechanism hypothesis; docking summary; combination plausibility; validation-priority
  decision (from `scientific_language.yaml` allowed set); wet-lab checklist; uncertainty/limitations;
  research-use-only disclaimer.
