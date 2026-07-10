# 06 — Agent Orchestration

## Common agent model

Use one coordinator and six specialist subagents.

## Coordinator

Name: `managed-mvp-coordinator`

Responsibilities:

- sequence work
- enforce go/no-go gates
- prevent premature UI work
- ensure JSON contracts exist
- ensure source traceability

## Subagents

### 1. `dataset-curator`

- Finds/fetches real public datasets
- Builds candidate/ligand/target registries
- Marks missing data honestly

### 2. `structure-resolver`

- Resolves PDB/AlphaFold/ESMFold2 target structures
- Writes structure readiness report
- Flags low-confidence targets

### 3. `docking-runner`

- Runs DiffDock-L and Vina
- Writes model output JSON
- Does not interpret beyond tool output

### 4. `interaction-analyst`

- Parses contacts/residues/interactions
- Creates mechanism summary
- Adds validation-needed statements

### 5. `evidence-passport-writer`

- Converts outputs into structured evidence passport
- Uses cautious scientific language
- Adds limitations and wet-lab checklist

### 6. `gcp-deployer`

- Builds containers
- Deploys Cloud Run services/jobs
- Sets GCS/Artifact Registry/VM plan

## Rule

Subagents must return outputs and summaries. They must not silently edit scientific assumptions without updating `memory/PROJECT_MEMORY.md`.
