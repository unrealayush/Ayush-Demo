# Scenario Schema Contract

**Single source of truth for the scenario records** stored in
`configs/scenarios/scenario_registry.yaml` (active) and
`configs/archived_reference_scenarios/*.yaml` (archived). Replaces the former single `demo_case`
default. Controlled values otherwise live in `contracts/vocabularies.md`; the no-invention rules in
`memory/NO_HALLUCINATION_RULES.md` still apply per scenario.

## Why scenarios

The MVP previously routed off one hardcoded case (Trikatu/Piperine → MRSA/NorA → Ciprofloxacin).
That case is now `archived_trikatu_prior`. Active work routes off a `scenario_id` so multiple
curated investigation contexts can ship side by side, with exactly one shipped default.

## Field table

| field | type | req | allowed/notes |
|---|---|---|---|
| scenario_id | string (PK) | Y | `^[a-z0-9]+(_[a-z0-9]+)*$`; unique across active + archived |
| status | enum | Y | `active \| archived` |
| default | bool | Y | exactly one `active` scenario is `true`; `archived` is always `false` |
| display_name | string | Y | human label (e.g. `Primary MVP`) |
| reference_label | string | Y | provenance/lineage label (e.g. `Kuth variant A`) |
| config_components | array<string> | Y | manually curated active marker(s); not auto-expanded |
| organism_key | string | Y | organism context label (free; binomial where known) |
| target_a | string | Y | primary target label |
| target_b | string | N | secondary target label or context; may be a context phrase |
| investigation_focus | string | Y | free-text focus of the scenario |
| comparator_control | string \| null | Y (nullable) | nullable for active scenarios; no comparator logic implied |

## Curation rules (machine-enforced by review / validate_contracts extension)

1. **Manual curation only.** Scenario rows are hand-authored. Do **not** compute
   compound × target cross-products automatically — each row is an explicit curated entry.
2. **One default.** Exactly one `status: active` scenario has `default: true`.
3. **Archived ≠ default.** A `status: archived` scenario may never be `default: true` and is not
   selectable for routing; it is preserved under `configs/archived_reference_scenarios/`.
4. **comparator_control is nullable** for active scenarios. Absence of a comparator is valid and must
   not trigger any synthesized control-comparator logic.
5. **No required synergy fields.** `synergy`, `FICI`, and `checkerboard` are **not** scenario fields
   and must not be added as required keys here (Future Roadmap, `docs/11`).
6. **Identity values still never invented.** SMILES/accessions/PDB IDs for a scenario's components
   and targets follow `memory/NO_HALLUCINATION_RULES.md` — labels here are routing keys, not a license
   to fabricate identifiers downstream.

## Selection precedence

`SCENARIO_ID` env var (`docs/13`) → `default_scenario` in `scenario_registry.yaml`. The resolved
`scenario_id` is stamped into `outputs/run_manifest.json` (`contracts/output_json_contracts.md`).
