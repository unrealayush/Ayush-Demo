# Gemini CLI Command Template — Implement Pipeline

Prompt:

Read `AGENTS.md`, `contracts/vocabularies.md`, `contracts/input_schemas.md`,
`contracts/output_json_contracts.md`, and `docs/10`. Respect `RUN_MODE` (`docs/04`); never invent
identifiers/scores; stamp every row with an `evidence_level`.

Implement the MVP pipeline in this order (owning agent in brackets):

0. schema/contract validator `validate_contracts` (`docs/10`) — implement and run it before any module [qa-contracts-validator]
1. source traceability writer [dataset-curator]
2. ligand fetch module (ChEMBL/PubChem) [dataset-curator]
3. ligand prep (RDKit/Open Babel) [ligand-prep-engineer]
4. target registry + structure resolver (PDB→AlphaFold→ESMFold2) [dataset-curator + target-structure-resolver]
5. Vina runner (baseline first) [docking-pipeline-architect]
6. DiffDock-L runner wrapper (GPU VM) [docking-pipeline-architect]
7. interaction parser + mechanism graph [interaction-analyst]
8. plausibility scorer (validation-priority, not synergy) [interaction-analyst]
9. evidence passport generator [evidence-passport-designer]

Do not build UI until all output JSON files can be generated and pass `validate_contracts` in mock
mode. Do not implement any Phase 1–6 / future-roadmap item (`docs/11`).
