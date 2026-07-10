# 08 — Quality Gates and Test Plan

## Unit tests

Required:

- CSV schema validation
- JSON schema validation
- source traceability completeness
- no hardcoded score detector
- model output parser tests
- API endpoint tests
- UI data-loading tests

## Integration tests

Run:

```bash
make test-contracts
make test-fetchers
make test-pipeline-mock
make test-ui
```

## Scientific integrity tests

Automated grep checks must fail build if UI or passport contains:

- "proven synergy"
- "clinical efficacy"
- "patient ready"
- "treatment recommendation"
- "cures MRSA"

## Source traceability test

Every ligand, target, structure, docking result, and passport statement must map to:

- source name
- URL or accession
- fetch method
- evidence level
- timestamp

## Mock-mode test

If `mock_mode=true`, UI must display:

> DEMO PLACEHOLDER — not a completed scientific model run

## Final demo readiness

Ready only when:

- real ligand structures are used
- real target structure or honest fallback is used
- Vina has executed or is clearly marked pending
- DiffDock-L has executed or is clearly marked pending/mock
- passport has limitations
- no patient data is shown
