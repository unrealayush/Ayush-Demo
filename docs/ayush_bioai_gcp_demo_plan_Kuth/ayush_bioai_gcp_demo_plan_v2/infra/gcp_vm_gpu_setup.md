# GPU VM Setup for DiffDock-L / Optional ESMFold2

Architecture: **Option B — a fully-scripted Compute Engine GPU VM** (max control). This VM is the only
place DiffDock-L (and the optional ESMFold2 fallback) runs in real mode, so it is on the critical path
for the REAL ministry demo. All values come from env vars per `docs/13_ENV_VAR_CONFIG_CONTRACT.md`;
buckets use the derived `gs://${PROJECT_ID}-ayush-bioai-*` convention. No literals. End-to-end order is
in `docs/15_DEPLOYMENT_RUNBOOK.md`.

## GPU quota (do this first)
Request `NVIDIA L4` (or `T4`) GPU quota in `$REGION` before provisioning — the #1 first-run blocker.
One-time `gcloud`/console request, not per-deploy.

## Provision (scripted)
```bash
set -a; source .env; set +a
bash infra/provision_gpu_vm.sh
gcloud compute ssh "$VM_NAME" --zone "$ZONE" -- nvidia-smi   # verify driver
```
`infra/provision_gpu_vm.sh` runs `gcloud compute instances create` with the GPU family (L4 via
`g2-standard-8`, or T4 via `n1-standard-8` + `--accelerator`), `--maintenance-policy TERMINATE`, a
Deep Learning VM image (CUDA + Docker + nvidia-container-runtime preinstalled),
`--metadata install-nvidia-driver=True`, and the runtime `${SERVICE_ACCOUNT}`. Spec defaults
(overridable by env): `VM_MACHINE_TYPE`, `GPU_FLAGS`, `BOOT_DISK_GB=200`, `VM_IMAGE_FAMILY`,
`VM_IMAGE_PROJECT`, `VM_NAME=ayush-diffdock-gpu-vm`.

## Run DiffDock-L on the VM
```bash
gcloud compute ssh "$VM_NAME" --zone "$ZONE" --project "$PROJECT_ID"
# inside the VM:
git clone <repo> && cd <repo>
gsutil -m rsync -r "${MODEL_CACHE_BUCKET}/diffdock" model_cache/diffdock || true   # warm weights
docker build -t ayush-diffdock -f docker/Dockerfile.diffdock .
docker run --gpus all \
  -e RUN_MODE=real-docking \
  -e OUTPUTS_BUCKET="$OUTPUTS_BUCKET" \
  -e MODEL_CACHE_BUCKET="$MODEL_CACHE_BUCKET" \
  -v "$PWD/data:/workspace/data" -v "$PWD/outputs:/workspace/outputs" \
  ayush-diffdock python jobs/run_diffdock.py
gsutil -m rsync -r outputs "${OUTPUTS_BUCKET}/outputs"
```

## Lifecycle (the VM is only needed during real-docking)
```bash
gcloud compute instances stop   "$VM_NAME" --zone "$ZONE"   # pause compute billing
gcloud compute instances start  "$VM_NAME" --zone "$ZONE"   # resume
gcloud compute instances delete "$VM_NAME" --zone "$ZONE"   # teardown after artifacts are in OUTPUTS_BUCKET
```

## Rollback / failure
A failed DiffDock-L run writes `run_status=failed` (no fabricated confidence) and does not promote its
outputs; the demo continues to serve last-known-good artifacts in `${OUTPUTS_BUCKET}`.
