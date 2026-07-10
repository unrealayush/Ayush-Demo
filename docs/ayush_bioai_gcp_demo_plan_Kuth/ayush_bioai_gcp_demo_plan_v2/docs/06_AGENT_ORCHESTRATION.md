# 06 — Agent Orchestration

## Team model

**One coordinator and nine specialists (10 agents).** Each `.claude/agents/*.md` defines the eight
fields: role, inputs, outputs, tools, must-never-invent, handoff, acceptance, MVP-or-future. Gemini
CLI has no subagent mechanism; the same roles are mirrored as sequential responsibilities in
`GEMINI.md` and tagged in `.gemini/commands/implement_pipeline.md`.

## Roster (step ownership)

| agent | model-flow step(s) |
|---|---|
| `managed-mvp-coordinator` | orchestration + Gates 0–5 |
| `dataset-curator` | Step 1 (fetch all registries), Step 3 (target selection) |
| `ligand-prep-engineer` | Step 2 (RDKit/Open Babel) |
| `target-structure-resolver` | Step 4 (PDB→AlphaFold→ESMFold2) |
| `docking-pipeline-architect` | Step 6 Vina, Step 5 DiffDock-L |
| `interaction-analyst` | Step 7 interactions, Step 7.5 mechanism graph, Step 8 scorer |
| `evidence-passport-designer` | Step 9 passport |
| `qa-contracts-validator` | cross-cutting `validate_contracts` gate (Gate 0 + every handoff) |
| `scientific-validity-reviewer` | cross-cutting judgment review (Steps 8–9, Gate 5) |
| `gcp-deployment-architect` | Step 10 deploy |

## Handoff DAG (step → owner → artifact → next)

```
Step1 dataset-curator → registries + source_traceability.csv + run_manifest + input_validation_report
   └ <<qa-contracts-validator: Gate 0/1>>
Step3 dataset-curator → target_selection.json ─────────────┐
Step2 ligand-prep-engineer → prepared ligands ─────────────┤
Step4 target-structure-resolver → prepared targets ────────┤  (Gate 2)
        (ligands + targets converge)                        │
Step6 Vina ─┐                                               │
Step5 DiffDock-L ─┘ docking-pipeline-architect → diffdock/vina JSON + poses
   └ <<qa-contracts-validator: Gate 3>>
Step7/7.5/8 interaction-analyst → interaction_summary + mechanism_graph + combination_plausibility
   └ <<scientific-validity-reviewer: overclaim/interpretation>>
Step9 evidence-passport-designer → evidence_passport.{json,md}
   └ <<qa-contracts-validator + scientific-validity-reviewer: Gate 5>>
Step10 gcp-deployment-architect → deployed UI/API/jobs  (Gate 4: UI reads JSON, no hardcoded score)
```

## Quality-gate agents
- `qa-contracts-validator` = machine-checkable `validate_contracts` (`docs/10`); blocks Steps 5/6 and
  Step 10 on failure.
- `scientific-validity-reviewer` = judgment-based Gate 5 review.

## Rules
- Subagents return outputs **and** summaries; they must not silently change scientific assumptions
  without updating `memory/PROJECT_MEMORY.md`.
- The coordinator flips gate flags in `run_manifest.json` only from validator/reviewer reports.
- Nothing advances past a failed gate.
