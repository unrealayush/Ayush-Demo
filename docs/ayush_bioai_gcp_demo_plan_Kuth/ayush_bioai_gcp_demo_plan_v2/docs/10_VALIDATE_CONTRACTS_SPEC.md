# 10 — validate_contracts Specification (machine-checkable no-hallucination gate)

`validate_contracts` is the single runnable authority for "is this run honest." It is a **spec** here;
implementation happens in the coding phase. It is owned by the `qa-contracts-validator` agent and is
run at **Gate 0** (before Gate 1) and at **every agent handoff**. Controlled values come from
`contracts/vocabularies.md`; the language wordlist from `contracts/scientific_language.yaml`; schemas
from `contracts/input_schemas.md` + `contracts/output_json_contracts.md`; scenario routing fields and
curation rules from `contracts/scenario_schema.md`.

## Invocation

```
validate_contracts --run-dir <path> --run-mode <MODE> --phase <PHASE> [--checks all|id,...] [--strict-warn]
```

- Reads `RUN_MODE` from the flag or `run_manifest.json`. Writes exactly one artifact:
  `outputs/validation_report.json` (shape in `contracts/output_json_contracts.md`). Otherwise read-only.
- Wrapped by `make validate` / `make validate-gate PHASE=gateN`.

## Exit codes

| exit | meaning | gate behavior |
|---|---|---|
| 0 | all applicable BLOCKER checks pass (WARNs may exist) | PASS (unless `--strict-warn` + WARNs) |
| 1 | ≥1 BLOCKER failed | FAIL — block build/handoff |
| 2 | WARNs only, `--strict-warn` set | FAIL in strict gates (Gate 5 / demo) |
| 3 | validator could not run (missing precondition / unreadable wordlist / malformed manifest) | FAIL — infra hard stop |

A missing artifact a check is *supposed* to inspect is exit 1 (content), not 3.

## Check catalog

`[check_id | inspects | pass condition | severity | run-modes]`

| check_id | inspects | pass condition | severity | modes |
|---|---|---|---|---|
| CHK-CSV-SCHEMA | `data/inputs/*.csv` | headers/types/required match `input_schemas.md`; ≥1 row; no empty mandatory cell | BLOCKER | all |
| CHK-EVL-VALUESET | every `evidence_level` field | value ∈ the five labels | BLOCKER | all |
| CHK-IDENTITY-NOSYNTH | identity columns | identity column never `synthetic_demo` | BLOCKER | real/demo (WARN in mock) |
| CHK-TRACE-INPUTS | `source_traceability.csv` vs input rows | every input row has a traceability entry (source + url/accession + method + time + level) | BLOCKER | all |
| CHK-TRACE-NUMBERS | numeric fields in output JSON | each has a resolvable `provenance` pointer to a file in `run_manifest` | BLOCKER | real/demo |
| CHK-NOHARDCODE-ID | `services/**`, `jobs/**`, UI, configs (NOT data/outputs) | no PDB/UniProt/CID/ChEMBL/SMILES literal unless it also exists in a traceable record | BLOCKER | all |
| CHK-SCORE-PROVENANCE | UI/non-output source | no score/affinity/confidence literal; scores loaded from `outputs/*.json` | BLOCKER | all |
| CHK-JSON-SCHEMA | each output JSON | required keys/types/enums per `output_json_contracts.md`; `not_synergy==true` | BLOCKER | all (per-file by phase) |
| CHK-MOCK-CONSISTENCY | RUN_MODE + `run_status` + UI placeholder | `run_status=mock` ⇒ `RUN_MODE=mock` ⇒ DEMO PLACEHOLDER shown; and converse | BLOCKER | all |
| CHK-RUNSTATUS-RUNMODE | `run_status` vs RUN_MODE | value legal for the mode (`mock` only in mock) | BLOCKER | all |
| CHK-EVL-RUNMODE-LEGAL | `evidence_level` vs RUN_MODE | identity/docking carry mode-legal levels | BLOCKER | real/demo (WARN mock) |
| CHK-FORBIDDEN-LANG | UI strings, passport, interaction JSON, demo script | no token from `scientific_language.yaml` `forbidden` (normalized) | BLOCKER | all |
| CHK-ALLOWED-CLAIM | combination/interaction/passport claims | claim/synergy language within `allowed_language`; `not_synergy:true` present | BLOCKER | all |
| CHK-DECISION-VALUESET | `evidence_passport.validation_decision` | ∈ `allowed_validation_decisions` | BLOCKER | all |
| CHK-MISSING-DATA | artifacts tagged `missing_real_data` | not consumed as a real score; UI honest; docking skipped where target missing | BLOCKER | all |
| CHK-DISCLAIMER | passport + UI footer | exact `canonical_disclaimer` present/visible | BLOCKER | all |
| CHK-UI-NUMBER-TRACE | UI binding manifest | every displayed scientific number binds to an existing `outputs/*.json` key | BLOCKER | all |
| CHK-STRUCT-PROVENANCE | `structure_resolution_report.json` | path exists, source + quality recorded, NorA membrane caution present | BLOCKER | real/demo (WARN mock) |
| CHK-ENV-ONLY | `infra/**`, `docs/05` snippets, Dockerfiles | no literal project/region/zone/SA; derived bucket suffix allowed; `${VAR}`/envsubst forms | BLOCKER (deploy) / WARN (earlier) | all |
| CHK-CONFIG-CONSISTENCY | `configs/model_run_config.yaml` | `prohibit_*`/`require_*` flags all true; no gate silently disabled | WARN | all |
| CHK-SCENARIO-REGISTRY | `configs/scenarios/scenario_registry.yaml`, `configs/archived_reference_scenarios/*.yaml` | parses; each record has required fields per `contracts/scenario_schema.md`; every `scenario_id` matches `^[a-z0-9]+(_[a-z0-9]+)*$` and is unique across active+archived; `status ∈ {active,archived}` | BLOCKER | all |
| CHK-SCENARIO-DEFAULT | registry `active_scenarios` + `default_scenario` | exactly one `active` scenario has `default: true`; no `archived` scenario is `default: true`; `default_scenario` resolves to that one active id | BLOCKER | all |
| CHK-SCENARIO-RESOLVED | `run_manifest.scenario_id` (+`evidence_passport.scenario_id`) vs registry | equals the resolved active id (`SCENARIO_ID` env → `default_scenario`); is an `active` id, never an `archived` id | BLOCKER | all |
| CHK-SCENARIO-NO-CROSSPRODUCT | each scenario record | `config_components` is an explicit curated list (no auto compound×target expansion); no `synergy`/`FICI`/`checkerboard` keys present | BLOCKER (forbidden keys) / WARN (auto-expand heuristic) | all |

Notes: `CHK-NOHARDCODE-ID` excludes `data/inputs/**` and `outputs/**` (those are supposed to hold
traceable identifiers). `CHK-ENV-ONLY` accepts `${VAR}` / `<PLACEHOLDER>` / the derived
`gs://${PROJECT_ID}-ayush-bioai-*` suffix; it flags resolved project/region/SA literals.

## Gate → check mapping

| gate | checks (all must exit 0) |
|---|---|
| Gate 0 | CHK-CSV-SCHEMA, CHK-EVL-VALUESET, CHK-CONFIG-CONSISTENCY, CHK-SCENARIO-REGISTRY, CHK-SCENARIO-DEFAULT, CHK-SCENARIO-NO-CROSSPRODUCT |
| Gate 1 | CHK-TRACE-INPUTS, CHK-IDENTITY-NOSYNTH, CHK-NOHARDCODE-ID, CHK-EVL-RUNMODE-LEGAL |
| Gate 2 | CHK-STRUCT-PROVENANCE, CHK-MISSING-DATA |
| Gate 3 | CHK-JSON-SCHEMA(diffdock,vina), CHK-SCORE-PROVENANCE, CHK-RUNSTATUS-RUNMODE, CHK-MOCK-CONSISTENCY |
| Gate 4 | CHK-UI-NUMBER-TRACE, CHK-SCORE-PROVENANCE, CHK-DISCLAIMER, CHK-TRACE-NUMBERS, CHK-SCENARIO-RESOLVED |
| Gate 5 | CHK-FORBIDDEN-LANG, CHK-ALLOWED-CLAIM, CHK-DECISION-VALUESET, CHK-JSON-SCHEMA(passport) — run with `--strict-warn` |

The ministry demo additionally requires `RUN_MODE=demo` and zero `run_status=mock` (CHK-MOCK-CONSISTENCY).

## Output
`outputs/validation_report.json` (per-check status/severity/findings + overall result + `go_no_go`
map). Schema in `contracts/output_json_contracts.md`.

> This document is a SPEC. No implementation is included here.
