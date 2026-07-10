# AYUSH Bio-AI MVP — Session Context for Claude Code After `/clear`

**Purpose:** This file preserves the current project context so a new Claude Code session can be restarted safely after `/clear` without losing the latest decisions.  
**Use:** Paste or reference this file at the start of a new Claude Code session before asking for plan updates or build work.  
**Project folder:** `ayush_bioai_gcp_demo_plan_v2`  
**Current build status:** Planning pack is hardened, but application build has **not** started yet.  
**Most important instruction:** Do **not** confuse the original Trikatu/Piperine/MRSA/NorA concept with the current MVP default. The current MVP default is now scenario-based and starts with **Kuth / Saussurea costus**.

---

## 1. Current Source of Truth

The active project is a **research-use-only AYUSH Bio-AI Evidence MVP** for internal/ministry/scientific demonstration. It is a software demo that converts a curated AYUSH scenario into:

1. structured scenario metadata,  
2. public/curated source traceability,  
3. structure and docking artifacts,  
4. interaction/mechanism summaries,  
5. validation-priority scoring, and  
6. a Global Evidence Passport.

The system must **not** claim clinical efficacy, proven synergy, treatment recommendation, regulatory approval, or patient-ready decision support.

Allowed framing:

- docking plausibility
- mechanism hypothesis
- validation-priority signal
- research-use-only prioritization
- wet-lab validation required
- evidence passport / research dossier

Forbidden framing:

- proven clinical efficacy
- confirmed synergy
- treatment recommendation
- cures infection
- patient-ready decision support
- regulatory approved

---

## 2. Current MVP Scenario Mapping

Use this table as the **current authoritative scenario mapping**.

| Scenario | Status | Default | AYUSH source | Components | Organism label | Target label 1 | Target label 2 | Function label | Comparator/control |
|---|---|---:|---|---|---|---|---|---|---|
| Scenario 1 / Primary MVP | active | yes | Kuth / Saussurea costus | Costunolide; Dehydrocostus lactone | Pseudomonas aeruginosa | LasR | PqsR / MvfR | Quorum sensing, virulence, biofilm maturation | null / TBD / optional future control |
| Scenario 2 / Secondary MVP | active | no | Kuth / Saussurea costus | Costunolide; Dehydrocostus lactone | Staphylococcus aureus | AgrA | Sortase A / SrtA | Quorum sensing, adhesion, biofilm initiation | null / TBD / optional future control |
| Scenario 3 / Archived prior concept | archived | no | Trikatu / Pippali / Maricha | Piperine | MRSA / Staphylococcus aureus | NorA | Biofilm/efflux context | Archived reference only | Ciprofloxacin archived reference only |

Recommended scenario IDs:

```yaml
primary_kuth_pseudomonas:
  status: active
  default: true

secondary_kuth_staphylococcus:
  status: active
  default: false

archived_trikatu_prior:
  status: archived
  default: false
```

Important clarification:

- “Target label 1” and “Target label 2” are two targets within each scenario.
- They are **not** primary vs secondary scenarios.
- The old Trikatu/Piperine/MRSA/NorA concept must be preserved only as an archived reference.
- Do not make Ciprofloxacin, FICI, checkerboard, or antibiotic-synergy logic mandatory for the active Kuth scenarios.
- Antibiotic comparator/control is an optional future field until explicitly selected.

---

## 3. Current Scope Boundary

### Build now: Phase 0 MVP

The current build should support:

- scenario-based routing/configuration
- active scenario selection
- archived scenario preservation
- data-driven registries/contracts
- public/curated source traceability
- ligand preparation
- target structure resolution
- Vina baseline docking
- DiffDock-L AI docking
- interaction parser
- mechanism graph
- validation-priority scorer
- Gemini Evidence Passport generation
- API/UI that read output artifacts
- GCP Cloud Run + GPU VM deployment path

### Future roadmap only, not current MVP build

Do not implement these now:

- full WGS repository
- RNA-Seq atlas
- LC/GC-MS metabolomics
- in-vivo mouse model
- host/patient omics
- patient stratification
- clinical decision support
- GNINA
- ESM-2 as separate model
- ChemBERTa / MolFormer
- GNN / GraphSAGE
- full multimodal AI training engine
- automatic large cross-product screening matrix

These may remain in `Future Roadmap / Not MVP Scope` documentation only.

---

## 4. Planning Pack Status From Prior Claude Code Session

A previous Claude Code plan-mode session hardened the planning pack. It produced or planned the following assets and decisions.

### Planning-pack hardening already completed / expected

- `docs/16_BUILD_EXECUTION_STRATEGY.md` created and indexed in `README.md`.
- Strategy locked: **phased + gated hybrid**.
- Approximate build style: one prompt per phase, not one prompt for everything and not one prompt per function.
- Agents/workflows are invoked on demand; they are not background daemons.
- Human approvals remain required between gates.

### Hardened planning assets expected

Contracts and vocabularies:

- `contracts/vocabularies.md`
- `contracts/scientific_language.yaml`
- expanded `contracts/input_schemas.md`
- expanded `contracts/output_json_contracts.md`

Quality and gates:

- `docs/10_VALIDATE_CONTRACTS_SPEC.md`
- `docs/08_QUALITY_GATES_AND_TEST_PLAN.md`
- canonical evidence-level vocabulary:
  - `real_public`
  - `real_lab`
  - `curated_public`
  - `synthetic_demo`
  - `missing_real_data`
- canonical `run_status`:
  - `success`
  - `failed`
  - `mock`
  - `skipped`
- canonical `structure_status`:
  - `resolved`
  - `structure_pending`
  - `failed`

Run modes:

- `local-planning`
- `mock`
- `real-data-fetch`
- `real-docking`
- `gcp-deployment`
- `demo`

GCP/env:

- no hardcoded project ID, region, zone, service account, or bucket names
- env-var-driven config
- derived bucket convention allowed:
  - `gs://${PROJECT_ID}-ayush-bioai-inputs`
  - `gs://${PROJECT_ID}-ayush-bioai-outputs`
  - `gs://${PROJECT_ID}-ayush-bioai-model-cache`

Build strategy:

- `docs/16_BUILD_EXECUTION_STRATEGY.md` documents the phase-by-phase code generation plan.
- Phase 1 should start with scaffold + `validate_contracts.py`.
- Every later phase must pass `validate_contracts`.

Important caveat:

The prior hardening plan may still contain older examples based on Trikatu/Piperine/MRSA/NorA. Treat those as historical/archived unless already migrated to the Kuth scenario-based model.

---

## 5. Ten-Agent Team Expected

The project should use a 10-agent structure:

1. `managed-mvp-coordinator`
2. `dataset-curator`
3. `ligand-prep-engineer`
4. `target-structure-resolver`
5. `docking-pipeline-architect`
6. `interaction-analyst`
7. `evidence-passport-designer`
8. `qa-contracts-validator`
9. `scientific-validity-reviewer`
10. `gcp-deployment-architect`

Each agent should specify:

- role
- inputs
- outputs
- tools allowed
- what it must never invent
- handoff artifact and next agent
- acceptance criteria
- whether it belongs to MVP or future roadmap

Every agent must be scenario-aware and should read `scenario_id` rather than assuming a hardcoded Trikatu/Piperine/NorA demo.

---

## 6. End-to-End Tool / Model Sequence

The core pipeline sequence remains the same, but it must be scenario-aware.

### High-level sequence

```text
public/curated data fetch
→ source traceability
→ ligand preparation
→ target structure resolution
→ Vina baseline docking
→ DiffDock-L AI pose prediction
→ interaction parser
→ mechanism graph
→ validation-priority scorer
→ Gemini Evidence Passport
→ FastAPI + UI
```

### Tools and models

| Step | Tool / model | Type | Notes |
|---|---|---|---|
| ligand data | ChEMBL / PubChem | public data APIs | fetch compound IDs, SMILES, metadata; do not invent |
| candidate context | Ayush.xlsx / curated source / public reference | context data | supporting reference only; if not parseable, do not guess |
| target metadata | UniProt / NCBI / curated source | public/curated data | fetch target metadata where available; do not invent accessions |
| structure search | RCSB PDB | public structure API | experimental structures where available |
| predicted structures | AlphaFold DB | public structure resource | use when experimental structure unavailable |
| fallback structure | ESMFold2 | optional ML fallback | not mandatory; only if needed |
| ligand prep | RDKit / Open Babel | cheminformatics tools | SMILES to 3D/SDF/PDBQT etc. |
| classical docking | AutoDock Vina | docking tool | baseline docking estimate |
| AI docking | DiffDock-L | GPU model | pose prediction/confidence |
| interaction parsing | deterministic parser | code | distance/contact/mechanism summary; no invented residues |
| scoring | deterministic formula | code | validation-priority score, not efficacy |
| passport | Gemini on Vertex AI | LLM synthesis | evidence wording from traceable outputs only |
| serving | FastAPI + UI | application | reads JSON/CSV artifacts |

Important interpretation:

- DiffDock confidence = pose confidence only.
- Vina kcal/mol = docking estimate only.
- Validation Priority Score = what to test next, not efficacy.
- Evidence Passport = research-use-only dossier, not regulatory approval.

---

## 7. Current Demo Execution Design

### Current default design: precomputed/batch artifacts

The current plan is **not** live GPU docking per UI click.

Current behavior:

| Stage | Where | When |
|---|---|---|
| fetch, ligand prep, Vina, interaction parse, mechanism graph, scorer | Cloud Run CPU jobs | before demo |
| ESMFold2 fallback + DiffDock-L | GPU VM | before demo |
| Evidence Passport | Vertex/Gemini or build job | before demo |
| UI + API | Cloud Run services | live, but reads pre-generated JSON/artifacts |

Demo-time behavior:

```text
user selects scenario
→ UI loads matching precomputed artifacts
→ dashboard reveals mechanism/docking/passport results
```

This is stable and preferred for the first live demo because it avoids GPU/network failures mid-demo.

### Optional future design: live on-demand GPU docking

Not currently selected.

To enable live on-demand docking, the architecture would need:

1. GPU VM changed from one-shot batch runner to persistent warm service.
2. `/dock` endpoint or GPU worker that keeps DiffDock-L loaded.
3. async API pattern:
   - submit run
   - return `run_id`
   - poll/websocket status
   - fetch result
4. queue/orchestrator:
   - Cloud Tasks or Pub/Sub
   - concurrency limits
   - retry/backpressure
5. UI progress states:
   - queued
   - fetching
   - preparing
   - docking
   - scoring
   - passport generation
   - done/failed
6. cache lookup:
   - if same scenario/compound-target already computed, return instantly
   - only compute genuinely new combinations
7. inline `validate_contracts` per request.

Realistic live latency for a new uncached combination: approximately minutes, assuming GPU service is already warm.

Recommended future middle path:

- Precompute curated demo scenarios for reliable demo.
- Add “Run New Combination” later as optional advanced mode.
- Use cache-first behavior.

No need to implement live-on-demand mode unless explicitly decided later.

---

## 8. UI Demo Flow

For the current scenario-based MVP, the UI should be data-driven.

### Left panel: scenario input controls

Expected live selectors:

1. Scenario selector  
   - default: `primary_kuth_pseudomonas`
   - available: `secondary_kuth_staphylococcus`
   - archived scenario visible only if explicitly enabled or shown under archive

2. AYUSH source  
   - Kuth / Saussurea costus

3. Component selector  
   - Costunolide
   - Dehydrocostus lactone

4. Organism label  
   - Pseudomonas aeruginosa for primary scenario
   - Staphylococcus aureus for secondary scenario

5. Target selector  
   - LasR and PqsR/MvfR for primary scenario
   - AgrA and SrtA for secondary scenario

6. Function / study context  
   - quorum sensing / virulence / biofilm maturation
   - quorum sensing / adhesion / biofilm initiation

7. Comparator/control  
   - optional / TBD for active Kuth scenarios

### Middle panel: mechanism layer

Show:

- scenario summary
- compound-target cards
- structure readiness status
- Vina card if available
- DiffDock-L card if available
- mechanism graph
- cautious mechanism hypothesis

### Right panel: Global Evidence Passport

Show:

- Validation Priority Score
- top scenario/compound-target pair(s)
- evidence strength and limitations
- traceability summary
- recommended next validation categories at high level
- disclaimer

Canonical disclaimer:

```text
Research-use-only prioritization demo. Not clinical guidance.
```

---

## 9. Data Flexibility / How to Change Compositions Later

The architecture should support changing combinations as **data**, not code.

Preferred behavior:

- Users manually curate valid rows.
- Do not auto-generate all compound-target cross-products.
- Add/edit scenario rows when deeper professor/scientific details are available.
- Use `scenario_id` as the routing key.
- UI dropdowns should be populated from registry/config data.
- The pipeline processes selected curated rows only.

Possible future addition:

- `run_matrix.csv` for batch/ranking mode.
- This should be added only if explicitly needed later.
- Current MVP can remain single active selected scenario at a time.

Data constraints:

- Ligand identifiers/SMILES must be real public or curated verified.
- Target identifiers/structures must be real public or curated verified.
- If a target structure cannot be resolved, mark `structure_pending`.
- Do not fabricate docking scores, residues, or assay values.

---

## 10. Background Documents

Background docs are context only, not direct MVP inputs unless explicitly curated.

Expected folder:

```text
background_docs/
  Ayush.xlsx
  ESKAPE_AYUSH_MultiOmics_Objectives_Deck.pptx
  AI_ML_AMR_WithEdits_clean (2).docx
  AYUSH_MEVREON_Presentation_with_Edits.pptx
  ayush_bio_ai_evidence_demo_dashboard.png
  mevreon_ayush_bio_ai_platform_roadmap.png
```

Rules:

- Use `background_docs/Ayush.xlsx` only as supporting reference for scenario labels and manually curated rows.
- If Excel cannot be parsed, do not guess.
- Use the source-of-truth scenario table in this file.
- Background docs should not expand MVP into the full grant/proposal.

---

## 11. Claude Code Policy-Safe Wording

To avoid false-positive blocks in Claude Code, frame scenario updates as:

- software-only configuration refactor
- metadata migration
- schema-default update
- scenario routing update
- static labels
- archived configuration preservation

Avoid phrasing such as:

- “optimize pathogen”
- “design combinations against pathogen”
- “acting against”
- “improve virulence”
- “wet-lab protocol”
- “experimental instructions”
- “efficacy”

Use this safe phrasing:

```text
Software-only configuration refactoring task.

This is a structural data migration for an existing demo application. Convert the current single-demo configuration into a scenario-based routing system with active scenarios and archived reference preservation.

Do not generate wet-lab protocols, experimental instructions, simulation logic, analysis workflows, efficacy claims, or biological optimization guidance. This task is limited to configuration files, schema definitions, README/docs, deployment defaults, agent routing rules, memory files, and skills.
```

---

## 12. Next Recommended Claude Code Prompt After `/clear`

Use this when starting a fresh Claude Code session:

```text
Please read `SESSION_CONTEXT_AYUSH_BIOAI_MVP.md` first and treat it as the current source-of-truth context.

Task: inspect the repo and report whether it is already migrated from the old single-demo Trikatu/Piperine configuration to the current scenario-based routing model.

Do not implement pipeline code yet.

First check:
1. Is `primary_kuth_pseudomonas` the active default?
2. Is `secondary_kuth_staphylococcus` available as active but not default?
3. Is `archived_trikatu_prior` archived and not default?
4. Do schemas/contracts include `scenario_id`, `status`, `default`, `display_name`, `reference_label`, `config_components`, `organism_key`, `target_a`, `target_b`, `investigation_focus`, and `comparator_control`?
5. Are agents/memory/skills reading `scenario_id` instead of assuming Trikatu/Piperine/NorA?
6. Is comparator/control optional for active Kuth scenarios?
7. Are cross-products, FICI/checkerboard, and synergy fields not required?

Before editing, show a concise patch plan. After editing, summarize files changed, default pointer status, archived concept status, and remaining ambiguity before code generation.
```

---

## 13. Next Build Strategy When Ready

When you are ready to actually build code, follow `docs/16_BUILD_EXECUTION_STRATEGY.md`.

General approach:

```text
Phase 1 prompt → scaffold + validate_contracts.py
review gate
Phase 2 prompt → fetchers + ligand prep + structure resolver
review gate
Phase 3 prompt → Vina + DiffDock wrappers
review gate
Phase 4 prompt → interaction parser + graph + scorer + passport
review gate
Phase 5 prompt → API + UI reading artifacts
review gate
Phase 6 prompt → GCP deployment scripts/runbook
```

Do not attempt fire-and-forget code generation for the full app.

Human-only checkpoints remain:

- GCP authentication
- GCP project and billing
- GPU quota
- service account permissions
- scoring formula sign-off
- mechanism wording sign-off
- REAL vs mock mode decision
- final demo-readiness approval

---

## 14. Open Decisions

Current open decisions:

1. Whether to stay with precomputed batch artifacts for demo, or later add live-on-demand GPU docking.
2. Whether active Kuth scenarios need explicit antibiotic comparator/control later.
3. Whether to add batch `run_matrix.csv` for many manually curated combinations.
4. Whether archived Trikatu/Piperine/NorA should be visible in UI archive mode or only stored in config.
5. Whether `Ayush.xlsx` should become a curated data source after parsing, or remain background-only.

Default decision for now:

- Stay batch/precomputed for demo.
- Keep active Kuth scenarios as default.
- Keep comparator/control optional.
- Do not auto-generate cross-products.
- Do not start build until user explicitly asks.
