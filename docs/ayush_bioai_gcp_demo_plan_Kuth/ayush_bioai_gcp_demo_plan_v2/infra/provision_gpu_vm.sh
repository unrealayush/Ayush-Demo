#!/usr/bin/env bash
set -euo pipefail

# Fully-scripted GPU VM provisioning for DiffDock-L / ESMFold2 fallback (Option B — max control).
# Env-var-only; no literals. See docs/13_ENV_VAR_CONFIG_CONTRACT.md and infra/gcp_vm_gpu_setup.md.
#
# Prerequisite: L4/T4 GPU quota must already be granted in $REGION (see docs/15 / docs/05).
# Run infra/bootstrap_gcp.sh first (APIs, Artifact Registry, buckets, service account).

PROJECT_ID="${PROJECT_ID:?set PROJECT_ID}"
ZONE="${ZONE:?set ZONE}"
SERVICE_ACCOUNT="${SERVICE_ACCOUNT:?set SERVICE_ACCOUNT}"

VM_NAME="${VM_NAME:-ayush-diffdock-gpu-vm}"
# Two supported GPU families (pick via env):
#   L4  : VM_MACHINE_TYPE=g2-standard-8   GPU_FLAGS=""                                   (GPU bundled in g2)
#   T4  : VM_MACHINE_TYPE=n1-standard-8   GPU_FLAGS="--accelerator=type=nvidia-tesla-t4,count=1"
VM_MACHINE_TYPE="${VM_MACHINE_TYPE:-g2-standard-8}"
GPU_FLAGS="${GPU_FLAGS:-}"
BOOT_DISK_GB="${BOOT_DISK_GB:-200}"
# Deep Learning VM image: CUDA + Docker + nvidia-container-runtime preinstalled.
VM_IMAGE_FAMILY="${VM_IMAGE_FAMILY:-common-cu123}"
VM_IMAGE_PROJECT="${VM_IMAGE_PROJECT:-deeplearning-platform-release}"

echo "Creating GPU VM '$VM_NAME' ($VM_MACHINE_TYPE) in $ZONE ..."

gcloud compute instances create "$VM_NAME" \
  --project "$PROJECT_ID" \
  --zone "$ZONE" \
  --machine-type "$VM_MACHINE_TYPE" \
  ${GPU_FLAGS} \
  --maintenance-policy TERMINATE \
  --image-family "$VM_IMAGE_FAMILY" \
  --image-project "$VM_IMAGE_PROJECT" \
  --boot-disk-size "${BOOT_DISK_GB}GB" \
  --service-account "$SERVICE_ACCOUNT" \
  --scopes cloud-platform \
  --metadata "install-nvidia-driver=True"

echo "VM created. Verify the driver after first boot:  gcloud compute ssh $VM_NAME --zone $ZONE -- nvidia-smi"

# Lifecycle helpers (run manually as needed — VM is only needed during real-docking, tear down after):
#   gcloud compute instances stop   "$VM_NAME" --zone "$ZONE"     # pause (stop billing for compute)
#   gcloud compute instances start  "$VM_NAME" --zone "$ZONE"     # resume
#   gcloud compute instances delete "$VM_NAME" --zone "$ZONE"     # teardown after artifacts are in OUTPUTS_BUCKET
