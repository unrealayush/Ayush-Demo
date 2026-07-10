# 08 — Quality Gates and Test Plan

Every gate is a machine-checkable assertion delegated to a `validate_contracts` check (`docs/10`).
The forbidden/allowed wordlist is **not** embedded here; it lives in
`contracts/scientific_language.yaml`. `make validate` (Gate 0) must pass before any `make test-*`.

## Unit tests
- CSV schema validation, JSON schema validation, source-traceability completeness, no-hardcoded-score
  detector, model-output parser tests, API endpoint tests, UI data-loading tests.

## Integration tests
```bash
make validate            # Gate 0 — validate_contracts; build fails on exit 1/2/3
make test-contracts
make test-fetchers
make test-pipeline-mock
make test-ui
```

## Quality gates (assertion → artifact → check)

| assertion | artifact inspected | check_id |
|---|---|---|
| input CSVs match contract headers/types | `data/inputs/*.csv` | CHK-CSV-SCHEMA |
| evidence_level values ∈ the five labels | input CSVs + traceability + output JSON | CHK-EVL-VALUESET |
| identity columns are never synthetic | ligand/target/candidate identity cols | CHK-IDENTITY-NOSYNTH |
| every input row is traceable | `source_traceability.csv` | CHK-TRACE-INPUTS |
| every displayed/scored number is traceable | output JSON + UI binding manifest | CHK-TRACE-NUMBERS, CHK-UI-NUMBER-TRACE |
| no hardcoded scientific identifiers in code | `services/**`,`jobs/**`,UI,configs | CHK-NOHARDCODE-ID |
| no hardcoded scores in UI | UI source | CHK-SCORE-PROVENANCE |
| all output JSON validate | all output JSON | CHK-JSON-SCHEMA |
| mock signaling is consistent | RUN_MODE + run_status + UI | CHK-MOCK-CONSISTENCY, CHK-RUNSTATUS-RUNMODE |
| no forbidden language rendered | UI + passport + interaction JSON | CHK-FORBIDDEN-LANG |
| claims use allowed vocabulary | combination/interaction/passport | CHK-ALLOWED-CLAIM |
| validation_decision in allowed set | `evidence_passport.json` | CHK-DECISION-VALUESET |
| missing_real_data handled honestly | any missing-tagged artifact | CHK-MISSING-DATA |
| disclaimer present & visible | passport + UI footer | CHK-DISCLAIMER |
| deploy artifacts env-var only | `infra/**`, `docs/05` snippets | CHK-ENV-ONLY |
| RUN_MODE data-class legality | all evidence_level vs RUN_MODE | CHK-EVL-RUNMODE-LEGAL |

The docs/01 Go/No-Go gate → check mapping is authoritative in `docs/10`.

## Mock / demo-placeholder convention
One canonical convention (see `contracts/vocabularies.md` §7): `RUN_MODE`, `run_status=mock` (mock
mode only), `evidence_level=synthetic_demo`, and the exact UI string
`DEMO PLACEHOLDER — not a completed scientific model run`.

## Final demo readiness (REAL bar)
Ready only when:
- `RUN_MODE=demo` over REAL artifacts; Gate 5 run with `--strict-warn`; **no `run_status=mock`**.
- real ligand structures used; real target structure or honest `structure_pending` fallback.
- Vina + DiffDock-L have executed (or are honestly marked) on the GPU VM.
- passport has limitations + wet-lab checklist + the exact disclaimer; no patient data shown.
- no forbidden phrase; every UI number traces to a JSON output file.
- MVP excludes patient data, real in-vivo data, WGS/RNA-Seq/metabolomics, and full multimodal AI
  training (these are Future Roadmap, `docs/11`).
