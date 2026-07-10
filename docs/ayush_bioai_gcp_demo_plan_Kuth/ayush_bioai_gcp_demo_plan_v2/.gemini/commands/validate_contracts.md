# Gemini CLI Command Template — Validate Contracts

Prompt:

Read `docs/10_VALIDATE_CONTRACTS_SPEC.md`, `contracts/input_schemas.md`,
`contracts/output_json_contracts.md`, `contracts/vocabularies.md`, and
`contracts/scientific_language.yaml`.

Run the `validate_contracts` gate for the current `RUN_MODE` and phase. Report each check
(`CHK-*`) with PASS/FAIL/WARN/SKIPPED, the offending artifact, and the overall exit code; write
`outputs/validation_report.json`. This is the Gemini-side mirror of the `qa-contracts-validator`
agent. Do not edit artifacts to make checks pass — report only.
