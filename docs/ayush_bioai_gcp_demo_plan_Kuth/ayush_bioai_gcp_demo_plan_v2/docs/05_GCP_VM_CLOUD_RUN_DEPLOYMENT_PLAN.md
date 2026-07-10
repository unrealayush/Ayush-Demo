# 05 — GCP VM + Cloud Run Deployment Plan

Configuration is **env-var-only** — see `docs/13_ENV_VAR_CONFIG_CONTRACT.md`. There are zero literal
project IDs, regions, zones, or service-account emails anywhere; bucket names use the derived
`gs://${PROJECT_ID}-ayush-bioai-{inputs,outputs,model-cache}` convention. Enforced by
`validate_contracts` `CHK-ENV-ONLY`.

**Architecture decision: Option B — a fully-scripted Compute Engine GPU VM** runs DiffDock-L /
ESMFold2; everything else is Cloud Run. The canonical ordered flow is `docs/15_DEPLOYMENT_RUNBOOK.md`.
One-time setup (APIs, Artifact Registry, buckets, SA + IAM) is scripted in `infra/bootstrap_gcp.sh`;
the VM is created by `infra/provision_gpu_vm.sh`. No manual console steps.

## Architecture (hybrid)

- Cloud Run **Service**: UI + API backend
- Cloud Run **Jobs**: data fetch, Vina CPU job, evidence-passport generation
- Compute Engine **GPU VM**: DiffDock-L and optional ESMFold2 fallback (critical path for REAL demo)
- **GCS**: model artifacts, ligand/target files, output JSON
- **Artifact Registry**: container images
- **Secret Manager**: API keys / credentials (never literals; via `--set-secrets`)
- **BigQuery or SQLite**: demo metadata and source traceability

## Environment preamble (run before any gcloud call)

```bash
set -a; source .env; set +a      # values per docs/13
: "${PROJECT_ID:?}" "${REGION:?}" "${ZONE:?}" "${SERVICE_ACCOUNT:?}" \
  "${ARTIFACT_REPO:?}" "${IMAGE_TAG:?}" "${RUN_MODE:?}" \
  "${INPUTS_BUCKET:?}" "${OUTPUTS_BUCKET:?}" "${MODEL_CACHE_BUCKET:?}"
```

## Suggested GCP resources

- Cloud Run services: `ayush-bioai-ui`, `ayush-bioai-api`
- Cloud Run jobs: `ayush-fetch-real-data`, `ayush-prep-ligands`, `ayush-run-vina`, `ayush-generate-passport`
- Compute Engine VM: `ayush-diffdock-gpu-vm` (Ubuntu 22.04, L4/T4, 100–200 GB, Docker + NVIDIA runtime,
  SA `${SERVICE_ACCOUNT}`)
- Buckets (derived): `${INPUTS_BUCKET}`, `${OUTPUTS_BUCKET}`, `${MODEL_CACHE_BUCKET}`

## Build flow

```bash
gcloud config set project "$PROJECT_ID"
gcloud services enable run.googleapis.com artifactregistry.googleapis.com storage.googleapis.com \
  compute.googleapis.com secretmanager.googleapis.com aiplatform.googleapis.com

gcloud artifacts repositories create "$ARTIFACT_REPO" --repository-format=docker --location="$REGION"

for svc in api ui jobs; do
  gcloud builds submit --tag "$REGION-docker.pkg.dev/$PROJECT_ID/$ARTIFACT_REPO/$svc:$IMAGE_TAG" "./services/$svc" 2>/dev/null || \
  gcloud builds submit --tag "$REGION-docker.pkg.dev/$PROJECT_ID/$ARTIFACT_REPO/$svc:$IMAGE_TAG" "./$svc"
done
```

## Deploy

```bash
bash infra/cloudrun/service-api.deploy.sh      # API (env-driven, captures rollback revision)
bash infra/cloudrun/service-ui.deploy.sh       # UI

# Vina job: render the template with envsubst (Cloud Run YAML does not expand env at apply time)
envsubst < infra/cloudrun/job-vina.yaml > /tmp/job-vina.yaml
gcloud run jobs replace /tmp/job-vina.yaml --region "$REGION"
gcloud run jobs execute ayush-run-vina --region "$REGION" --wait
```

Each `gcloud run deploy`/`jobs` call passes `--service-account "$SERVICE_ACCOUNT"` and the full
`--set-env-vars` set (RUN_MODE + inputs/outputs/model-cache buckets; Vertex vars when the passport is
live). Secrets via `--set-secrets` referencing Secret Manager.

## GPU VM workflow

Provision with `bash infra/provision_gpu_vm.sh` (scripted `gcloud compute instances create`, GPU
family via env, driver auto-install). Run/sync details + lifecycle (stop/start/delete) are in
`infra/gcp_vm_gpu_setup.md` (pulls weights from `${MODEL_CACHE_BUCKET}`, syncs to `${OUTPUTS_BUCKET}`).
GPU quota (`NVIDIA L4`/`T4`) must be granted in `$REGION` first. The VM can be torn down after
artifacts are produced — the live demo serves static artifacts.

## Rollback

- Capture the prior healthy revision before deploy (the deploy scripts print it).
- On failed acceptance: `gcloud run services update-traffic <svc> --region "$REGION" --to-revisions <PRIOR_REV>=100`.
- Never route traffic to an unhealthy revision; never serve fabricated data.

## Deployment acceptance

- `/healthz` returns OK
- UI can load `evidence_passport.json`
- API exposes `/runs/latest`
- Vina job executes and writes output JSON
- GPU VM can generate or fetch DiffDock output
- all outputs have source traceability
- `validate_contracts` (gcp-deployment phase) is green and `CHK-ENV-ONLY` passes
