# AYUSH Bio-AI Evidence Demo Skill

Use this skill when implementing or reviewing the Mevreon AYUSH Bio-AI MVP.

## When to use

- Building data contracts
- Fetching real ligand/target data
- Running docking jobs
- Generating evidence passport outputs
- Reviewing the demo for scientific overclaiming

## Procedure

1. Read `AGENTS.md`.
2. Read `docs/01_MVP_SCOPE_AND_GO_NO_GO.md`.
3. Confirm the demo case: Piperine + MRSA/NorA + Ciprofloxacin.
4. Validate input schemas before writing code.
5. Fetch real data where possible.
6. Mark missing or synthetic fallback explicitly.
7. Run or mock models only with clear labels.
8. Generate outputs from JSON contracts.
9. Ensure the UI reads output files, not hardcoded values.
10. Add research-use-only disclaimer.

## Quality bar

No hallucinated identifiers. No fabricated docking scores. No patient claims.
