# 13 — Environment Variable Configuration Contract

**Hard rule:** no literal project ID, region, zone, or service-account email may be hardcoded in any
doc, script, YAML, or config — all come from the env vars below. Bucket names use the **derived
convention** `gs://${PROJECT_ID}-ayush-bioai-{inputs,outputs,model-cache}` (the `-ayush-bioai-*`
suffix is the one allowed convention; the value still flows through `${INPUTS_BUCKET}` etc., never a
project literal). Infra YAML that cannot read env at apply time is templated and rendered with
`envsubst`. Secrets go through Secret Manager, never as literals. Enforced by `validate_contracts`
(`CHK-ENV-ONLY`).

## Required env vars

| name | meaning | required in modes | example-format-only (NO real values) |
|---|---|---|---|
| `RUN_MODE` | pipeline mode (validated against the enum) | all | `mock` / `real-docking` / `demo` |
| `SCENARIO_ID` | active scenario id; validated against active scenarios in `configs/scenarios/scenario_registry.yaml`; archived ids rejected. Unset → registry `default_scenario`. | all (optional) | `primary_kuth_pseudomonas` / `secondary_kuth_staphylococcus` |
| `PROJECT_ID` | GCP project id | real-docking, gcp-deployment | `<your-gcp-project-id>` |
| `REGION` | Cloud Run / Artifact Registry region | real-docking, gcp-deployment | `<region>` |
| `ZONE` | GPU VM zone | real-docking, gcp-deployment | `<region>-<zoneletter>` |
| `SERVICE_ACCOUNT` | runtime SA email for services/jobs/VM | real-docking, gcp-deployment | `<sa>@<project-id>.iam.gserviceaccount.com` |
| `INPUTS_BUCKET` | inputs bucket (derived) | real-data-fetch, real-docking, gcp-deployment, demo | `gs://${PROJECT_ID}-ayush-bioai-inputs` |
| `OUTPUTS_BUCKET` | outputs bucket (derived) | all writing modes, demo (read) | `gs://${PROJECT_ID}-ayush-bioai-outputs` |
| `MODEL_CACHE_BUCKET` | model weights/cache (derived) | real-docking, gcp-deployment | `gs://${PROJECT_ID}-ayush-bioai-model-cache` |
| `ARTIFACT_REPO` | Artifact Registry repo name | gcp-deployment | `ayush-bioai` |
| `IMAGE_TAG` | container image tag | gcp-deployment | `latest` / `<git-sha>` |
| `API_BASE_URL` | URL the UI calls | gcp-deployment, demo | `https://<api-host>` |
| `VERTEX_LOCATION` | Vertex AI region for Gemini | passport (real/demo) | `<vertex-region>` |
| `VERTEX_MODEL_ID` | Gemini model id on Vertex | passport (real/demo) | `<gemini-model-id>` |
| `GOOGLE_CLOUD_PROJECT` | Vertex auth project (may equal PROJECT_ID) | passport (real/demo) | `<your-gcp-project-id>` |
| `MOCK_MODE` | internal; forces mock outputs — allowed ONLY in `mock` | mock (optional) | `true` |

## GPU VM variables (Option B — scripted Compute Engine VM)

Used by `infra/provision_gpu_vm.sh` / `infra/gcp_vm_gpu_setup.md`. All have sensible defaults; override
via env.

| name | meaning | default |
|---|---|---|
| `VM_NAME` | GPU VM instance name | `ayush-diffdock-gpu-vm` |
| `VM_MACHINE_TYPE` | machine type | `g2-standard-8` (L4) |
| `GPU_FLAGS` | accelerator flags (empty for g2/L4; set for n1/T4) | `""` |
| `BOOT_DISK_GB` | boot disk size | `200` |
| `VM_IMAGE_FAMILY` | Deep Learning VM image family (CUDA + Docker preinstalled) | `common-cu123` |
| `VM_IMAGE_PROJECT` | image project | `deeplearning-platform-release` |

GPU quota (`NVIDIA L4`/`T4`) must be granted in `$REGION` before provisioning (`docs/15`).

## Secrets (Secret Manager)
- API keys/credentials are stored in Secret Manager, referenced with `--set-secrets`
  (e.g. `--set-secrets "CHEMBL_API_KEY=chembl-api-key:latest"`), never as literals or `--set-env-vars`.
- Vertex/GCP auth uses the runtime `SERVICE_ACCOUNT` (Workload Identity / ADC) — no key files in repo.
- Local dev: a git-ignored `.env`; the committed `.env.example` holds placeholders only.

## Validation
- Every script uses fail-fast `${VAR:?message}` for its required vars (no defaults for identifiers).
- `validate_contracts` `CHK-ENV-ONLY` fails the build if any deploy artifact contains a literal
  project id, region, zone, or SA email (the derived bucket suffix is the only allowed convention).

## Rollback
- gcp deploy failure → revert Cloud Run traffic to the prior healthy revision; never serve fabricated
  data (see `docs/04` rollback rules and `docs/05`).
