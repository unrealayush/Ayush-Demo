# Build Kickoff — How to start generating the pipeline code

Internal, non-commercial research reference. Answers: *how do we start generating code — step-by-step
prompts, or refer to an MD file?*

**Both.** Drive the build **in parts**, and each part's prompt **refers to the MD files** instead of
re-pasting specs. The repo is contract-first, so the specs already exist — a phase prompt just names
the agent, the MD/contract files to read, the artifacts to produce, and the gate to pass.

Source of order: `docs/04` (execution DAG + run modes) and `docs/06` (agent → step → artifact → gate).

---

## Principle

1. **Refer to MD files, don't paste specs.** Shorter prompts, no drift, single source of truth.
2. **One phase = one prompt = one agent (or one fan-out workflow) = one gate.**
3. **Never invent identifiers.** Every prompt restates it; `validate_contracts` enforces it.
4. **Resolve the active scenario** (`src/scenario_resolver.py`, default `primary_kuth_pseudomonas`) —
   never hardcode a case.

---

## Phase order + paste-ready prompts

Run modes are set via env (`RUN_MODE=...`, optional `SCENARIO_ID=...`). `make validate` (Gate 0) must
pass before any `make test-*` (`docs/04`).

### Phase 0 — Scaffold (`RUN_MODE=local-planning`, Solo)
> Read `docs/04`, `docs/10`, and `contracts/*`. Create `requirements.txt`, a `Makefile` with the
> `docs/04` targets, and `validate_contracts.py` implementing the `docs/10` check catalog (including
> `CHK-SCENARIO-*`). Add `tests/test_scenario_resolver.py`. Run `make validate` and `pytest`.

Produces: build tooling + tests → **Gate 0**.

### Phase 1 — Data (`RUN_MODE=real-data-fetch`, Dynamic workflow / fan-out)
> Act as `dataset-curator`, `ligand-prep-engineer`, and `target-structure-resolver`. Read `docs/02`,
> `docs/12`, `contracts/input_schemas.md`, and `contracts/scenario_schema.md`. For the active
> `scenario_id`, fetch all registries + `source_traceability.csv`, prep ligands (RDKit/Open Babel),
> and resolve structures (PDB → AlphaFold → ESMFold2). Mark unfetchable identity as
> `missing_real_data`; never invent SMILES/accessions/PDB IDs.

Produces: registries, prepared ligands/targets, `target_selection.json`,
`structure_resolution_report.json` → **Gates 1–2**.

### Phase 2 — Docking (`RUN_MODE=real-docking`, Agent / sequential)
> Act as `docking-pipeline-architect`. Read `docs/03` and `docs/04`. Run **Vina first, DiffDock-L
> second**. Honor `structure_pending` → docking `run_status=skipped`; on failure set
> `run_status=failed` with a diagnostic note and fabricate no scores.

Produces: `vina/vina_results.json`, `diffdock/diffdock_results.json` → **Gate 3**.

### Phase 3 — Analysis (Agent / linear chain)
> Act as `interaction-analyst`. Read `contracts/output_json_contracts.md` and
> `contracts/vocabularies.md`. Produce interaction summary → mechanism graph → combination
> plausibility, each with provenance pointers; `not_synergy: true`.

Produces: `interaction_summary.json`, `mechanism_graph.json`, `combination_plausibility.json`.

### Phase 4 — Passport (Agent)
> Act as `evidence-passport-designer`. Read `docs/07` and `contracts/scientific_language.yaml`.
> Generate `evidence_passport.{json,md}` with the canonical disclaimer and cautious language only;
> `validation_decision` from the allowed set.

Produces: `evidence_passport.{json,md}`.

### Phase 5 — Review (Agent team / recurring)
> Run `qa-contracts-validator` (deterministic `validate_contracts --strict-warn`) then
> `scientific-validity-reviewer` (judgment) per `docs/08` and `docs/10`. Nothing advances past a
> failed gate.

Produces: `validation_report.json`, `scientific_review.json` → **Gate 5**.

### Phase 6 — Deploy (`RUN_MODE=gcp-deployment` → `demo`, Solo/agent, human-in-loop)
> Act as `gcp-deployment-architect`. Read `docs/05`, `docs/15`, `docs/13`. Build images, deploy
> services/jobs, point the GPU VM, run acceptance. Env-var only (no literal project/region/SA);
> keep a human gate.

Produces: deployed UI/API/jobs → **Gate 4**; then `RUN_MODE=demo` over REAL artifacts.

---

## How quickly

- **Parallel accelerator:** Phase 1 (fan-out workflow authoring the independent data modules at once).
- **Sequential by dependency:** Phases 0, 2, 3, 4. **Human-gated:** Phase 6.
- **Critical path:** scaffold → data fan-out → docking chain → review → (deploy).
- **Bug control per phase:** every phase self-verifies against `validate_contracts` before handoff;
  see `.claude/docs/code-generation-flow.md` Part B for the `PostToolUse` hook that automates it, and
  `.claude/docs/internal-build-plan.md` for the mechanism rationale.

## Start here
Phase 0 — scaffold (`requirements.txt`, `Makefile`, `validate_contracts.py`) + `tests/test_scenario_resolver.py`, in `RUN_MODE=local-planning`. Then `make validate` and `pytest` must be green before Phase 1.
