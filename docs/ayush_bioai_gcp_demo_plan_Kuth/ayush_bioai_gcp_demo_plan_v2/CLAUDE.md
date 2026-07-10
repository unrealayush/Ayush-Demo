@AGENTS.md

## Claude Code-specific instruction

Use this project primarily for:

- code review
- data-contract hardening
- scientific boundary checks
- unit-test generation
- deployment script sanity checks
- removing hallucinated constants from code

When using Claude Code subagents, prefer the project subagents in `.claude/agents/`.

## Scenario routing

Work routes off a `scenario_id` from `configs/scenarios/scenario_registry.yaml` (default
`primary_kuth_pseudomonas`), not a hardcoded Trikatu/Piperine/NorA case. See `AGENTS.md` →
"Scenario routing", `contracts/scenario_schema.md`, and `docs/16`. Treat
`archived_trikatu_prior` as reference-only.
