# AYUSH Bio-AI Evidence Demo Skill

Use this skill when implementing or reviewing the Mevreon AYUSH Bio-AI MVP (Phase 0). It enforces the
same behavior for Claude Code and Gemini CLI.

## When to use
- Building data contracts
- Fetching real ligand/target/AMR data
- Running docking jobs
- Generating evidence passport outputs
- Reviewing the demo for scientific overclaiming

## Authoritative references (read before acting)
- `AGENTS.md` (canonical instructions), `docs/01` (scope + gates)
- `contracts/vocabularies.md` (enums, evidence_level, provenance, scoring scales, run modes)
- `contracts/scientific_language.yaml` (allowed/forbidden wordlist — the only copy)
- `contracts/input_schemas.md`, `contracts/output_json_contracts.md`, `contracts/scenario_schema.md`
- `docs/10` (validate_contracts), `docs/11` (MVP vs Future), `docs/12` (fetchers), `docs/13` (env vars),
  `docs/16` (scenario selection)

## Procedure
1. Resolve the active `scenario_id` from `configs/scenarios/scenario_registry.yaml` (precedence:
   `SCENARIO_ID` env → registry `default_scenario`; default `primary_kuth_pseudomonas`). Use that
   scenario's `config_components`/`organism_key`/`target_a`/`target_b` — never a hardcoded
   Trikatu/Piperine/NorA case (that is the archived `archived_trikatu_prior`). See `docs/16` and
   `contracts/scenario_schema.md`.
2. Set and validate `RUN_MODE` (the ministry demo is `RUN_MODE=demo` over REAL artifacts).
3. Run `validate_contracts` (Gate 0) before any model step **and at every agent handoff**.
4. Validate input schemas against `contracts/input_schemas.md` before writing code.
5. Fetch real data where possible; stamp every row with an `evidence_level` from the five-label set.
6. Mark missing/synthetic fallback explicitly (`missing_real_data` / `synthetic_demo`); never put a
   synthetic value in an identity column.
7. Run or mock models only with clear labels; failures → `run_status=failed`/`structure_pending`,
   never fabricated scores.
8. Generate every output from the JSON contracts, with provenance pointers on numbers.
9. Ensure the UI reads output files (every UI number traces to a JSON output file), not hardcoded values.
10. Route work through the 10 named agents (`docs/06`); add the research-use-only disclaimer.

## Scope guard
Phase 0 only. Do NOT implement Phase 1–6 items (WGS, RNA-Seq, LC/GC-MS, MIC/FICI/biofilm,
GNINA/ESM-2/ChemBERTa/GNN, in-vivo, patient/host omics) — see `docs/11`.

## Quality bar
No hallucinated identifiers. No fabricated docking scores. No patient/clinical claims. Every UI number
traces to a JSON output file.
