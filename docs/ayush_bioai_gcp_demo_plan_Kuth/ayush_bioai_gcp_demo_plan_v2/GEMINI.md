# Gemini CLI Project Memory — AYUSH Bio-AI Evidence Demo

Use `AGENTS.md` as the canonical instruction file. Do not contradict it.

## Scenario routing

Route off a `scenario_id` from `configs/scenarios/scenario_registry.yaml` (default
`primary_kuth_pseudomonas`; precedence: `SCENARIO_ID` env → registry `default_scenario`). Do **not**
assume the old single Trikatu/Piperine/NorA case — it is the archived scenario
`archived_trikatu_prior` (reference only). Schema: `contracts/scenario_schema.md`; guide: `docs/16`.

## Primary coding objective

Create a GCP-deployable MVP with:

- FastAPI backend
- Streamlit or React/Next.js frontend
- Cloud Run web service
- Cloud Run jobs for CPU docking baseline and data fetch
- Optional GPU VM for DiffDock-L and ESMFold2 fallback
- GCS for artifacts
- BigQuery or local SQLite for demo metadata

## Work style

Use phased execution:

1. Build data contracts
2. Build real-data fetchers
3. Build target/ligand preparation
4. Build Vina baseline first
5. Integrate DiffDock-L second
6. Build evidence passport last
7. Deploy to GCP
8. Validate with acceptance tests

## Important

Do not start with UI before data contracts and mock outputs exist. The UI must be generated from artifacts, not invented values.

## Agent roles (sequential responsibilities)

Gemini CLI has no subagent mechanism, so the 10 Claude agents (`docs/06`) are responsibilities a
Gemini run fulfills in sequence, against the same contracts:

1. dataset-curator — fetch all registries + `source_traceability.csv`; select target (Steps 1, 3)
2. ligand-prep-engineer — RDKit/Open Babel → SDF/PDBQT (Step 2)
3. target-structure-resolver — PDB→AlphaFold→ESMFold2 (Step 4)
4. docking-pipeline-architect — Vina then DiffDock-L (Steps 6, 5)
5. interaction-analyst — interactions + mechanism graph + plausibility score (Steps 7, 7.5, 8)
6. evidence-passport-designer — passport (Step 9)
7. gcp-deployment-architect — deploy (Step 10)
8. qa-contracts-validator — run `validate_contracts` at Gate 0 and every handoff
9. scientific-validity-reviewer — judgment review of Steps 8–9 (Gate 5)
0. managed-mvp-coordinator — sequence + enforce gates

## Canonical references
- Controlled values/enums/provenance: `contracts/vocabularies.md`.
- Allowed/forbidden language (single copy): `contracts/scientific_language.yaml`.
- Gate: `validate_contracts` (`docs/10`). Run modes + rollback: `docs/04`. Env vars: `docs/13`.
- Phase 0 only; Future Roadmap items are in `docs/11` (do not implement in MVP).
