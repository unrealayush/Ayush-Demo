# Canonical Vocabularies & Conventions

**This file is the single source of truth for every controlled value, enum, scoring scale, and the
provenance convention used across the AYUSH Bio-AI Evidence Demo MVP.** No other file may redefine
these; they must reference this file. Enforced by `validate_contracts` (see `docs/10`).

Scope: MVP / Phase 0 only. Forbidden scientific-language wordlists live in
`contracts/scientific_language.yaml` (a separate machine-readable file).

---

## 1. `evidence_level` — the canonical FIVE-label set

Every input CSV row, every `source_traceability.csv` row, and every scientific value in an output
JSON carries exactly one `evidence_level`. `data_class` is a **documentation synonym** used only to
classify columns as `identity` vs `context` (see §2); it is **not** a second column.

| value | meaning | allowed on identity columns? |
|---|---|---|
| `real_public` | Fetched/curated from a public database (ChEMBL, PubChem, UniProt, NCBI, RCSB PDB, AlphaFold DB) with accession recorded | Yes |
| `real_lab` | Wet-lab result supplied by the partner lab | Yes |
| `curated_public` | Manually transcribed from public literature / professor table because automated fetch was incomplete; URL/citation recorded | Yes |
| `synthetic_demo` | Fabricated for demo narrative only | **No — context columns only** |
| `missing_real_data` | A real value was required but could not be fetched/curated; row is a tombstone | Used in place of inventing an identifier |

**Drifted strings → canonical (apply globally):**

| drifted string (was) | canonical |
|---|---|
| `curated_public_or_professor_input` | `curated_public` |
| `synthetic_demo_context` | `synthetic_demo` |

Any value outside the five labels is a `validate_contracts` BLOCKER failure.

---

## 2. Identity vs context columns (the machine-enforceable no-hallucination rule)

- **Identity columns** — any `*_id`, `smiles`, `*_accession`, `structure_path`, selected `pdb_id`,
  and measured numeric results — MUST carry one of `{real_public, real_lab, curated_public, missing_real_data}`.
  They may **never** be `synthetic_demo`.
- **Context columns** — resistance/biofilm/phenotype/infection-model descriptors, narrative chips —
  MAY be `synthetic_demo`.
- A row whose identity column is populated while its `evidence_level=synthetic_demo` is a schema
  violation (BLOCKER).

---

## 3. `confidence_band` — one shared 5-band ordinal enum

Used by every band field (DiffDock pose confidence, combination plausibility, pocket quality).

```
confidence_band ∈ { very_low | low | moderate | moderate_high | high }
```

- snake_case only (`moderate_high`, never `moderate-high`).
- Numeric thresholds per band are **set by the science owner in the scorer/model config**, not
  invented in the contract. The contract only fixes the allowed label set.

---

## 4. `run_status` and `structure_status` (separate concepts)

```
run_status        ∈ { success | failed | mock | skipped }
structure_status  ∈ { resolved | structure_pending | failed }
```

- `success` — model executed, real output produced.
- `failed` — model executed and errored; **no fabricated scores**.
- `mock` — mock/dev output; legal **only** when `RUN_MODE=mock`; UI must show the demo placeholder.
- `skipped` — run intentionally not performed.
- `structure_pending` lives on `target_selection.json` / `structure_resolution_report.json` as a
  `structure_status`, **not** as a `run_status`.

**Linkage rule:** if a target has `structure_status=structure_pending`, every docking `run_status`
for that target MUST be `skipped` (no fabrication). Enforced by `validate_contracts`.

---

## 5. Scoring scales

| score | range | where shown | notes |
|---|---|---|---|
| `validation_priority_score` | **0–100** (display) | Global Evidence Passport, dashboard | UI-facing; matches the dashboard "84.2 / 100" |
| `ai_combination_plausibility` | 0.0–1.0 | passport/UI bar | prioritization signal, **not synergy** |
| `confidence_score` (DiffDock) | model-native float | docking card | **pose confidence only**, not affinity |
| `best_affinity_kcal_mol` (Vina) | float (kcal/mol) | docking card | docking energy estimate, **not** experimental affinity |
| `score_components.*` | 0.0–1.0 each | internal | docking, amr_relevance, mechanism_clarity, study_fit, assay_evidence, uncertainty_penalty |

`validation_priority_score` is computed internally on 0–1 from `score_components` then scaled ×100
for display; the contract records both the 0–1 component math and the 0–100 display value.
*(Open item to confirm with science owner: keep 0–100 display.)*

---

## 6. Provenance-pointer convention (makes "every UI number traces to a JSON file" checkable)

Every JSON object that contains a numeric or scientific field carries one sibling `provenance`
object whose keys mirror those field names:

```json
{
  "confidence_score": 0.42,
  "confidence_band": "moderate",
  "provenance": {
    "confidence_score": {
      "source_artifact": "outputs/diffdock/diffdock_results.json",
      "producer_module": "diffdock_runner",
      "artifact_id": "TGT-NORA__LIG-PIPERINE",
      "evidence_level": "real_public",
      "computed_at": "2026-06-04T12:00:00Z"
    }
  }
}
```

Required sub-fields of each `provenance.<field>`: `source_artifact` (path under `outputs/` or
`data/inputs/`), `producer_module`, `artifact_id`, `evidence_level` (§1), `computed_at` (ISO-8601).

Enforcement (by `validate_contracts`): (1) every field flagged "provenance" in
`output_json_contracts.md` must have a matching `provenance.<field>`; (2) `source_artifact` must
resolve to a file listed in `run_manifest.json`; (3) numbers whose `evidence_level=synthetic_demo`
or `run_status=mock` must be rendered with the demo placeholder badge.

---

## 7. Mock / demo-placeholder convention (one set of tokens, used everywhere)

| layer | canonical token | replaces |
|---|---|---|
| run-level switch | `RUN_MODE` ∈ `{ local-planning, mock, real-data-fetch, real-docking, gcp-deployment, demo }`; stamped into `run_manifest.json` as `run_mode` | `mock_mode_allowed`, `MOCK_MODE=true` |
| per-artifact status | `run_status: "mock"` (legal only when `RUN_MODE=mock`) | scattered `mock_mode=true` |
| per-value provenance | `evidence_level: "synthetic_demo"` | ad-hoc labels |
| UI placeholder string (exact) | `DEMO PLACEHOLDER — not a completed scientific model run` | bare `DEMO PLACEHOLDER` |

The deliverable ministry demo runs `RUN_MODE=demo` over **REAL** artifacts; `run_status=mock` is
**forbidden** in the demo (see `docs/04`, `docs/13`).

---

## 7b. Scenario routing (`scenario_id` / `status`)

The MVP routes off a `scenario_id` resolved from `configs/scenarios/scenario_registry.yaml`, not a
single hardcoded `demo_case`. Field schema and curation rules live in `contracts/scenario_schema.md`.

```
scenario_status ∈ { active | archived }
scenario_id     matches ^[a-z0-9]+(_[a-z0-9]+)*$ ; unique across active + archived
```

- Exactly one `active` scenario carries `default: true`; `archived` scenarios are never `default`.
- Selection precedence: `SCENARIO_ID` env var → registry `default_scenario`. The resolved
  `scenario_id` is stamped into `run_manifest.json`.
- Scenario rows are **manually curated**; no automatic compound × target cross-products; no
  synergy/FICI/checkerboard required fields; `comparator_control` nullable for active scenarios.

---

## 8. Canonical file/path layout

```
configs/scenarios/scenario_registry.yaml                    active scenario router (default = Scenario_1)
configs/archived_reference_scenarios/scenario_prior.yaml    archived scenario (archived_trikatu_prior)
data/inputs/      candidate_registry.csv ligand_library.csv pathogen_target_registry.csv
                  amr_context.csv study_context.csv assay_results.csv
data/prepared/ligands/   piperine.{sdf,pdbqt} ciprofloxacin.{sdf,pdbqt}
data/prepared/targets/   nora_target.{pdb,cif} comparator_target.{pdb,cif}
outputs/          run_manifest.json source_traceability.csv input_validation_report.json
                  ligand_prep_report.json target_selection.json structure_resolution_report.json
                  diffdock/diffdock_results.json diffdock/top_pose.sdf
                  vina/vina_results.json vina/vina_pose.pdbqt
                  interaction_summary.json mechanism_graph.json combination_plausibility.json
                  evidence_passport.json evidence_passport.md validation_report.json
```

`source_traceability.csv` is an **output** (`outputs/`), generated by the pipeline.

---

## 9. Canonical execution order

Step numbers in `docs/03` are I/O-contract identifiers, **not** execution order. Canonical
execution order is **Vina baseline first, DiffDock-L second** (cheap CPU sanity check before paid
GPU time; matches `GEMINI.md` and the infra split). See `docs/04` execution DAG.
