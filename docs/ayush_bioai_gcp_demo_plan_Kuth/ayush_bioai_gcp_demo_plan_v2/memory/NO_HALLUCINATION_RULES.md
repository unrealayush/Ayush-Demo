# Non-Hallucination Rules

**Enforcement:** all rules here are checked by `validate_contracts` (see `docs/10`). Controlled values
and the provenance convention live in `contracts/vocabularies.md`; the allowed/forbidden language
wordlist lives in `contracts/scientific_language.yaml` (the single source — do not duplicate it).

## Never invent

Never invent or hardcode any of these; they must come from a fetched/curated, traceable record:

- PDB IDs
- UniProt / NCBI accessions
- PubChem CIDs
- ChEMBL IDs
- SMILES
- docking scores / kcal-mol / pose confidence values
- residues / contacts
- assay values (MIC / FICI / biofilm / cytotoxicity)

## Hard-stop rules

Stop execution and report clearly if:

- a ligand SMILES/SDF cannot be fetched or curated
- a target sequence/structure cannot be identified
- protein structure quality is insufficient
- DiffDock-L fails
- Vina fails
- an output JSON is missing required fields
- source traceability is missing

## Scenario curation

Scenario routing records (`configs/scenarios/scenario_registry.yaml`,
`configs/archived_reference_scenarios/*.yaml`; schema `contracts/scenario_schema.md`) are **manually
curated**. Do not auto-generate compound × target cross-products and do not add synergy/FICI/
checkerboard as required fields. Scenario labels (`config_components`, `organism_key`, `target_a`,
`target_b`) are routing keys only — they do **not** license inventing SMILES, accessions, or PDB IDs
for those components downstream; identity values still follow the rules below.

## Data provenance labels

Every input row carries one `evidence_level` from the canonical five-label set (see
`contracts/vocabularies.md` §1): `real_public`, `real_lab`, `curated_public`, `synthetic_demo`,
`missing_real_data`. Identity columns may never be `synthetic_demo`.

## UI restriction

The UI must not contain hardcoded scientific scores; every displayed number traces to a JSON output
file (provenance pointer). Placeholders are shown only with the exact label:

> DEMO PLACEHOLDER — not a completed scientific model run

## Scientific language restriction

The canonical allowed/forbidden vocabulary and the allowed `validation_decision` strings live in
`contracts/scientific_language.yaml` and are enforced by `validate_contracts`
(`CHK-FORBIDDEN-LANG` / `CHK-ALLOWED-CLAIM` / `CHK-DECISION-VALUESET`). Do not embed copies of the
lists here. In short: use cautious language (docking plausibility, pose confidence,
validation-priority, mechanism hypothesis, wet-lab validation required); never claim proven synergy,
clinical efficacy, treatment recommendation, patient-ready, or regulatory approval.
