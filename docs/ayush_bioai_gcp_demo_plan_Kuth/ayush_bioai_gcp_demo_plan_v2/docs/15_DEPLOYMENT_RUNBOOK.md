# 15 — Deployment Runbook (post code-build)

Canonical, ordered flow to take the built MVP from code → live GCP demo. **Architecture decision:
Option B — a fully-scripted Compute Engine GPU VM** runs DiffDock-L / ESMFold2; everything else is
Cloud Run. All values are env vars (`docs/13`); no literals. Two execution layers:

- **Artifact generation** (pre-demo, batch): Cloud Run jobs + the GPU VM compute and write JSON/poses
  to `${OUTPUTS_BUCKET}`.
- **Live serving** (demo): Cloud Run UI + API **read** those artifacts; no model runs at request time
  (`RUN_MODE=demo`).

## Step 0 — Prerequisites (one-time)
```bash
set -a; source .env; set +a            # exports all docs/13 vars
gcloud auth login && gcloud config set project "$PROJECT_ID"
bash infra/bootstrap_gcp.sh            # APIs, Artifact Registry, buckets, runtime SA + IAM
```
**GPU quota:** request `NVIDIA L4` (or `T4`) quota in `$REGION` before provisioning — this is the #1
blocker and is a one-time `gcloud`/console request, not per-deploy.

## Step 1 — Gate
`RUN_MODE=gcp-deployment`. Deploy is blocked unless `validate_contracts` (gcp phase, incl.
`CHK-ENV-ONLY`) and `make test-*` are green (`docs/08`, `docs/10`).

## Step 2 — Build images
```bash
for svc in api ui jobs; do
  gcloud builds submit --tag "$REGION-docker.pkg.dev/$PROJECT_ID/$ARTIFACT_REPO/$svc:$IMAGE_TAG" "./services/$svc"
done
# DiffDock GPU image (run on / pulled by the VM):
gcloud builds submit --tag "$REGION-docker.pkg.dev/$PROJECT_ID/$ARTIFACT_REPO/diffdock:$IMAGE_TAG" -f docker/Dockerfile.diffdock .
```

## Step 3 — Provision the GPU VM (scripted)
```bash
bash infra/provision_gpu_vm.sh         # gcloud compute instances create … (env-driven; driver auto-install)
gcloud compute ssh "$VM_NAME" --zone "$ZONE" -- nvidia-smi   # verify GPU
```
See `infra/gcp_vm_gpu_setup.md` for the VM run/sync details and lifecycle (stop/start/delete).

## Step 4 — Generate artifacts (real-data-fetch → real-docking)
```bash
RUN_MODE=real-data-fetch  make fetch-real-data validate-inputs prep-ligands resolve-structures
RUN_MODE=real-docking     make run-vina                 # Cloud Run CPU job
# DiffDock on the VM:
gcloud compute ssh "$VM_NAME" --zone "$ZONE"            # then docker run … (infra/gcp_vm_gpu_setup.md)
RUN_MODE=real-docking     make parse-interactions score-combination generate-passport
```
Outputs sync to `${OUTPUTS_BUCKET}/outputs`. `validate_contracts` runs between phases; failures →
`run_status=failed` / `structure_pending` (never fabricated).

## Step 5 — Deploy live services
```bash
bash infra/cloudrun/service-api.deploy.sh     # captures prior revision for rollback
bash infra/cloudrun/service-ui.deploy.sh
envsubst < infra/cloudrun/job-vina.yaml > /tmp/job-vina.yaml
gcloud run jobs replace /tmp/job-vina.yaml --region "$REGION"
```

## Step 6 — Acceptance / go-live (`RUN_MODE=demo`)
- `/healthz` OK · `/runs/latest` exposed · UI loads `evidence_passport.json` from `${OUTPUTS_BUCKET}`
- `validate_contracts` Gate 5 green with `--strict-warn`; **no `run_status=mock`**; disclaimers visible.

## Step 7 — Rollback
```bash
gcloud run services update-traffic <svc> --region "$REGION" --to-revisions "$PRIOR_REV=100"
```
Never route traffic to an unhealthy revision; never serve fabricated data.

## Step 8 — Cost teardown (optional)
The live demo serves static artifacts, so the GPU VM is **not** needed after Step 4:
```bash
gcloud compute instances stop "$VM_NAME"   --zone "$ZONE"   # or
gcloud compute instances delete "$VM_NAME" --zone "$ZONE"
```
Re-run `infra/provision_gpu_vm.sh` only to regenerate docking artifacts.

## Owner
`gcp-deployment-architect` agent (`docs/06`); deploy only after both validators pass.
