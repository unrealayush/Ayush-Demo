# Non-Hallucination Rules

## Hard stop rules

Stop execution and report clearly if:

- ligand SMILES/SDF cannot be fetched or curated
- target sequence/structure cannot be identified
- protein structure quality is insufficient
- DiffDock-L fails
- Vina fails
- output JSON is missing required fields
- source traceability is missing

## Data provenance labels

Every input row must carry one of:

- `real_public`
- `real_lab`
- `curated_public`
- `synthetic_demo`
- `missing_real_data`

## UI restriction

The UI must not contain hardcoded scientific scores. It can show placeholders only when the label "DEMO PLACEHOLDER" is displayed.

## Scientific language restriction

Use:

- "docking plausibility"
- "pose confidence"
- "validation-priority"
- "mechanism hypothesis"
- "wet-lab validation required"

Do not use:

- "proven synergy"
- "clinical efficacy"
- "treatment recommendation"
- "patient-ready"
- "regulatory-approved"
