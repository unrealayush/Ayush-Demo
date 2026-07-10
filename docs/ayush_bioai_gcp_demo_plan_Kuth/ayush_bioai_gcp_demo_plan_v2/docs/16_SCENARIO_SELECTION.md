# 16 — Scenario Selection

The MVP no longer routes off a single hardcoded `demo_case`. It routes off a **scenario_id**
resolved from the scenario registry. This doc explains selection; the field schema lives in
`contracts/scenario_schema.md` and the data in `configs/scenarios/scenario_registry.yaml`.

## Shipped default

**Scenario_1 `primary_kuth_pseudomonas` is the shipped default** (`default: true` in the registry,
and `default_scenario: primary_kuth_pseudomonas`). With no `SCENARIO_ID` set, the pipeline runs this
scenario.

## Available scenarios

| scenario_id | status | default | display_name | organism_key | target_a | target_b |
|---|---|---|---|---|---|---|
| `primary_kuth_pseudomonas` | active | **yes** | Primary MVP | Pseudomonas aeruginosa | LasR | PqsR / MvfR |
| `secondary_kuth_staphylococcus` | active | no | Secondary MVP | Staphylococcus aureus | AgrA | Sortase A / SrtA |
| `archived_trikatu_prior` | archived | no | Archived prior concept | MRSA / Staphylococcus aureus | NorA | Biofilm/efflux context |

`archived_trikatu_prior` (the former single-demo Trikatu/Piperine/NorA case) is **archived**: it is
preserved at `configs/archived_reference_scenarios/scenario_prior.yaml` for reference and is **not
selectable as the default**.

## How to select

```bash
# default (Scenario_1)
RUN_MODE=demo  # SCENARIO_ID unset -> primary_kuth_pseudomonas

# explicit active scenario
SCENARIO_ID=secondary_kuth_staphylococcus RUN_MODE=demo
```

Precedence: `SCENARIO_ID` env var → `default_scenario` in the registry. The resolved value is read by
`configs/model_run_config.yaml` (`scenario_id: ${SCENARIO_ID:-primary_kuth_pseudomonas}`) and stamped
into `outputs/run_manifest.json`. Selecting an `archived` scenario is rejected (archived scenarios are
reference-only).

## Curation note

Scenario rows are **manually curated** (see `contracts/scenario_schema.md`). Do not auto-generate
compound × target combinations, and do not add synergy/FICI/checkerboard as required fields.
`comparator_control` is nullable for active scenarios.
