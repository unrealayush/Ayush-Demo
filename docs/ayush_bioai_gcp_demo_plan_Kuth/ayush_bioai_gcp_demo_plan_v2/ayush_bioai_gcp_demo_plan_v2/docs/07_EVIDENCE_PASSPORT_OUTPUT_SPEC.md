# 07 — Evidence Passport Output Spec

## JSON path

`outputs/evidence_passport.json`

## Required top-level fields

```json
{
  "run_id": "...",
  "created_at": "...",
  "demo_case": "...",
  "candidate": {},
  "pathogen_target": {},
  "antibiotic_comparator": {},
  "docking_summary": {},
  "interaction_summary": {},
  "combination_plausibility": {},
  "validation_decision": {},
  "wet_lab_plan": [],
  "limitations": [],
  "source_traceability": [],
  "disclaimer": "Research-use-only prioritization demo. Not clinical guidance."
}
```

## Decision wording

Allowed:

- "Advance to Phase 1B wet-lab validation"
- "Hold pending target-structure improvement"
- "Hold pending ligand/target source traceability"
- "Do not advance; insufficient evidence"

Not allowed:

- "clinically effective"
- "proven synergistic"
- "safe for patients"
- "treats MRSA"

## Wet-lab checklist

Default:

- MIC assay
- checkerboard FICI
- ethidium bromide efflux assay
- biofilm inhibition / disruption assay
- qPCR for norA / icaA / icaD
- cytotoxicity or hemolysis safety screen
