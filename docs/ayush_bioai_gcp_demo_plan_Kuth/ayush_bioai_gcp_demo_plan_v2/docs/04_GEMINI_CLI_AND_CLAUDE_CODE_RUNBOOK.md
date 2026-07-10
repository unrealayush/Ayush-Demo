# 04 — Gemini CLI and Claude Code Runbook

## Shared start

```bash
git init
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run modes

`RUN_MODE` is a required env var read by `make`, every job entrypoint, and the API at boot. It is
validated against the enum below (unknown value → hard fail) and stamped into `run_manifest.json`.
The legacy `MOCK_MODE=true` flag is an internal detail of `mock` mode only and is **rejected** in any
other mode.

| mode | purpose | runs | data classes produced | key env vars | exit criteria |
|---|---|---|---|---|---|
| `local-planning` | author/validate docs + schemas; no network, no models | `init`, `validate-contracts` (schema/doc lint) | none | `RUN_MODE` | contracts parse; no scientific outputs written |
| `mock` | wire pipeline + UI with labeled synthetic outputs | full pipeline with `run_status=mock` | `synthetic_demo` only | `RUN_MODE` | all output JSON validate; every artifact labeled; UI shows DEMO PLACEHOLDER |
| `real-data-fetch` | fetch real ligand/target/AMR data + traceability; no docking | `fetch-real-data`→`validate-inputs`→`prep-ligands`→`resolve-structures` | `real_public`/`curated_public`/`real_lab`; `missing_real_data` on failure | `RUN_MODE`, network | traceability complete; no synthetic identity |
| `real-docking` | real Vina (Cloud Run CPU) + real DiffDock-L (GPU VM) | `run-vina`→`run-diffdock`→`parse-interactions`→`score-combination` | real model outputs; `structure_pending`/`failed` honestly | `RUN_MODE`,`PROJECT_ID`,`REGION`,`ZONE`,`OUTPUTS_BUCKET`,`MODEL_CACHE_BUCKET`,`SERVICE_ACCOUNT` | docking JSON with real `run_status`; no fabricated scores |
| `gcp-deployment` | build images, deploy services/jobs, point GPU VM | `build-images`→`deploy-*`→`deploy-acceptance` | infra only | full env set (`docs/13`) | `docs/05` acceptance green; `/healthz` OK |
| `demo` | live presentation over validated REAL artifacts | `run-ui` (read-only) + smoke | none new | `RUN_MODE`,`API_BASE_URL`,`OUTPUTS_BUCKET` | passport renders from artifacts; disclaimers visible; **no `run_status=mock`** |

The deliverable ministry demo uses `RUN_MODE=demo` over REAL artifacts (see `docs/01` demo bar).

## Mode-aware execution DAG

`validate_contracts` is the gate between phases (`docs/10`). A failed gate halts the DAG and triggers
the matching rollback rule below.

```
init → validate-contracts(schemas) → fetch-real-data → validate-inputs[gate]
   → prep-ligands ─┐
   → resolve-structures[gate] ─┤
        (converge) → run-vina → run-diffdock → parse-interactions
        → score-combination[gate] → generate-passport[gate]
        → run-ui            (local)  OR  build-images → deploy-*[gate] → run-ui (cloud)
   → test[gate]
```

**Canonical execution order: Vina first, DiffDock-L second** (cheap CPU sanity check before paid GPU
time; matches `GEMINI.md` and the infra split). `docs/03` step numbers are I/O identifiers only.

Per-mode node behavior: `fetch`/`resolve` are live in `real-data-fetch`, skipped/seeded in `mock`,
reused in `demo`; `run-vina`/`run-diffdock` are real in `real-docking`, mock-labeled in `mock`, not
run otherwise; `deploy-*` only in `gcp-deployment`.

## Rollback / failure behavior

Fail honestly; never fabricate; never silently substitute.

- **(i) Data-fetch failure** → write a `missing_real_data` traceability row. Ligand/target **identity**
  is mandatory → HARD STOP (Gate 1 No-Go). Optional **context** fields only → continue with clearly
  labeled `synthetic_demo`.
- **(ii) Structure resolution failure** → `structure_status=structure_pending`; **skip docking** for
  that target; downstream docking `run_status=skipped`; passport decision "Hold pending
  target-structure improvement".
- **(iii) Docking failure** → `run_status=failed`, `notes`=diagnostic; no fabricated scores; one retry
  allowed. If one engine succeeds, continue with it + uncertainty penalty; if both fail, Gate 3 No-Go.
- **(iv) GCP deploy failure** → never route traffic to an unhealthy revision; capture the prior
  revision before deploy and `gcloud run services update-traffic ... --to-revisions <PRIOR>=100`. A
  deploy failure must never cause the service to serve fabricated data.
- **(v) Gemini/Vertex failure** → fall back to a **local-mock passport** (template-filled from real
  upstream JSON), labeled `passport_generation=local_mock_fallback` + DEMO PLACEHOLDER; it never
  invents scores/identifiers. In `demo` mode this is allowed only if visibly labeled.

## Claude Code and Gemini CLI

- **Claude Code = primary build driver** (recommended single driver to avoid divergence). Uses the
  agent teams (`.claude/agents/`) + dynamic workflows for parallel/verify phases; read `AGENTS.md`,
  `CLAUDE.md`, `docs/01`–`docs/03`, `docs/08`, `docs/10`. Run `validate_contracts` at every gate.
- **Gemini CLI = supported fallback / second reviewer** via the shared `AGENTS.md` and
  `.gemini/commands/*` (which mirror the agent roles 1:1); read `GEMINI.md`, `docs/01`–`docs/03`.
  Do not invent identifiers; failed fetch → `missing_real_data`.
- Both read the same contracts, so an artifact produced by either is checkable by `qa-contracts-validator`.
- Runtime note: the Evidence Passport step uses Gemini on Vertex AI regardless of the build driver
  (local-mock fallback if unavailable).

## Execution order (make targets, mode-aware)

`make validate` (Gate 0) must pass before any `make test-*`. Each target reads `RUN_MODE`:
`init → fetch-real-data → validate-inputs → prep-ligands → resolve-structures → run-vina →
run-diffdock → parse-interactions → score-combination → generate-passport → run-ui → test →
deploy-gcp`.
