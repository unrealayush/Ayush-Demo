# 07 — Evidence Passport Output Spec

## Artifacts
- `outputs/evidence_passport.json` — the structured dossier (full field schema in
  `contracts/output_json_contracts.md`).
- `outputs/evidence_passport.md` — the human render of the same content.

## Required top-level fields (schema authoritative in contracts/output_json_contracts.md)

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
  "mechanism_graph_ref": "outputs/mechanism_graph.json",
  "combination_plausibility": {},
  "validation_decision": "...",
  "wet_lab_plan": [],
  "limitations": [],
  "source_traceability": [],
  "provenance": {},
  "disclaimer": "Research-use-only prioritization demo. Not clinical guidance."
}
```

Every numeric/scientific field carries a provenance pointer (`contracts/vocabularies.md` §6). The
Validation Priority Score is displayed 0–100.

## Decision wording (single source)

`validation_decision` MUST be one of the strings in `contracts/scientific_language.yaml`
(`allowed_validation_decisions`) — currently: advance to Phase 1B wet-lab validation; hold pending
target-structure improvement; hold pending ligand/target source traceability; do not advance
(insufficient evidence).

Forbidden language is the `forbidden` list in `contracts/scientific_language.yaml` (no clinical
efficacy / proven synergy / patient-safety / "treats/cures MRSA" claims). Both lists are enforced by
`validate_contracts` (`CHK-DECISION-VALUESET`, `CHK-FORBIDDEN-LANG`). Do not duplicate the lists here.

## Wet-lab checklist (default)

- MIC assay
- checkerboard FICI
- ethidium bromide efflux assay
- biofilm inhibition / disruption assay
- qPCR for norA / icaA / icaD
- cytotoxicity or hemolysis safety screen
