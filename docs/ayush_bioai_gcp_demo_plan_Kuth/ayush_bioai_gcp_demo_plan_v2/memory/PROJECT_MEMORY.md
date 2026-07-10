# Project Memory

## MVP decision log

- The first MVP is not a patient-data product.
- The fourth input is called Study Context, not Host/Patient Context.
- ESM-2 is excluded from the visible MVP (model clutter; older); GNINA is excluded and moved to Phase 4.
- ESMFold2 is allowed only as a fallback protein-structure resolver when no good PDB or AlphaFold DB
  structure exists.
- DiffDock-L + AutoDock Vina are the MVP docking stack.
- Gemini is used for evidence synthesis and scientific critique, not for scoring raw docking.
- All output values must be traceable to generated JSON/CSV files.

## Canonical decisions (2026-06-04 plan-pack hardening)

- **Single sources of truth:** `contracts/input_schemas.md` (input CSV columns),
  `contracts/output_json_contracts.md` (output JSON), `contracts/vocabularies.md` (enums, evidence_level,
  provenance, scoring scales, run modes), `contracts/scientific_language.yaml` (allowed/forbidden
  wordlist). No other file duplicates these.
- **validate_contracts (`docs/10`) is the mandatory gate** — Gate 0 plus every agent handoff.
- **Agent team = 10** (renamed to reviewer vocabulary + 3 new): managed-mvp-coordinator,
  dataset-curator, ligand-prep-engineer, target-structure-resolver, docking-pipeline-architect,
  interaction-analyst (owns Step 8 scorer), evidence-passport-designer, qa-contracts-validator,
  scientific-validity-reviewer, gcp-deployment-architect. (Old names structure-resolver / docking-runner
  / evidence-passport-writer / gcp-deployer are retired.)
- **Run modes:** `local-planning | mock | real-data-fetch | real-docking | gcp-deployment | demo`
  (`docs/04`). The ministry **demo bar = RUN_MODE=demo over REAL artifacts**; `run_status=mock`
  forbidden in the demo; GPU VM on the critical path.
- **Canonical execution order:** AutoDock Vina first, DiffDock-L second (step numbers in `docs/03` are
  I/O identifiers, not execution order).
- **GCP config:** env-var-only; bucket names use the derived `gs://${PROJECT_ID}-ayush-bioai-*`
  convention (`docs/13`); no literal project/region/zone/SA in any file.
- **Foreign keys:** `antibiotic_id` removed; the comparator is a `ligand_library` row with
  `role=comparator`, referenced by `comparator_ligand_id`.
- **Mechanism graph** is a first-class output (`mechanism_graph.json`).
- **Validation Priority Score** is displayed 0–100 (components 0–1 internally).
- **Future Roadmap** (Phase 1–6: WGS, RNA-Seq, LC/GC-MS, MIC/FICI/biofilm, multimodal AI, in-vivo,
  clinical readiness) lives in `docs/11` and is out of Phase 0 build scope.

## Scenario routing (replaces the single default demo route)

- Work routes off a `scenario_id` from `configs/scenarios/scenario_registry.yaml`; precedence is
  `SCENARIO_ID` env → registry `default_scenario`. Schema: `contracts/scenario_schema.md`; guide:
  `docs/16`. The resolved `scenario_id` is stamped into `run_manifest.json`.
- **Shipped default = Scenario_1 `primary_kuth_pseudomonas`** (Costunolide / Dehydrocostus lactone →
  *Pseudomonas aeruginosa*; LasR, PqsR/MvfR). Scenario_2 `secondary_kuth_staphylococcus`
  (→ *S. aureus*; AgrA, Sortase A/SrtA) is also active.
- The former single route **Trikatu/Piperine → MRSA/NorA → Ciprofloxacin** is now the archived
  scenario `archived_trikatu_prior`, preserved at
  `configs/archived_reference_scenarios/scenario_prior.yaml`; archived = never selectable as default.
- Scenario rows are **manually curated**: no automatic compound × target cross-products; no
  synergy/FICI/checkerboard required fields; `comparator_control` nullable for active scenarios.

Pipeline stages are unchanged per scenario: Vina baseline → DiffDock-L pose → interaction parser →
mechanism graph → validation-priority score → Global Evidence Passport.
