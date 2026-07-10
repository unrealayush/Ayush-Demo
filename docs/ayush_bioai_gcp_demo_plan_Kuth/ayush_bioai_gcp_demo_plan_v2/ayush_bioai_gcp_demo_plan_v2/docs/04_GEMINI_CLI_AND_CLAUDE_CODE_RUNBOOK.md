# 04 — Gemini CLI and Claude Code Runbook

## Shared start

From repo root:

```bash
git init
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Gemini CLI execution

Use Gemini CLI as implementation driver:

```bash
gemini
```

Recommended prompt:

```text
Read AGENTS.md, GEMINI.md, docs/01_MVP_SCOPE_AND_GO_NO_GO.md, docs/02_DATASET_REAL_SOURCE_PLAN.md, and docs/03_MODEL_FLOW_IO_CONTRACTS.md.

Create the repository structure and implement the MVP in phases. Do not build UI until data contracts and JSON mock outputs exist. Do not invent scientific identifiers. If a real source fetch fails, write a missing_real_data record and continue only with clearly labelled synthetic demo fallback.
```

## Claude Code execution

Use Claude Code for review and hardening:

```bash
claude
```

Recommended prompt:

```text
Read AGENTS.md, CLAUDE.md, docs/03_MODEL_FLOW_IO_CONTRACTS.md, and docs/08_QUALITY_GATES_AND_TEST_PLAN.md.

Review this repository for hallucinated scientific constants, hardcoded docking values, missing source traceability, and output JSON schema violations. Generate tests and fixes.
```

## Parallel mode

Run Gemini CLI on implementation branch:

```bash
git checkout -b gemini-implementation
```

Run Claude Code on review branch:

```bash
git checkout -b claude-review-hardening
```

Merge only after:

- JSON contracts pass
- source traceability exists
- UI has no hardcoded model scores
- all disclaimers are visible

## Execution order

1. `make init`
2. `make fetch-real-data`
3. `make validate-inputs`
4. `make prep-ligands`
5. `make resolve-structures`
6. `make run-vina`
7. `make run-diffdock`
8. `make parse-interactions`
9. `make score-combination`
10. `make generate-passport`
11. `make run-ui`
12. `make test`
13. `make deploy-gcp`

## Local mock mode

If DiffDock-L GPU is unavailable:

```bash
make run-diffdock MOCK_MODE=true
```

Rules:

- mock output must be labelled `mock_mode=true`
- UI must show `DEMO PLACEHOLDER`
- do not use mock mode in final scientific demo unless clearly disclosed
