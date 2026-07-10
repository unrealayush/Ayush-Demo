#!/usr/bin/env bash
set -euo pipefail

# One-time GCP bootstrap (env-var-only; no literals). Run before any deploy/provision.
# See docs/13_ENV_VAR_CONFIG_CONTRACT.md and docs/15_DEPLOYMENT_RUNBOOK.md.
# The human/CI running this needs project Owner/Editor (or run.admin + iam + storage admin).

PROJECT_ID="${PROJECT_ID:?set PROJECT_ID}"
REGION="${REGION:?set REGION}"
SERVICE_ACCOUNT="${SERVICE_ACCOUNT:?set SERVICE_ACCOUNT}"   # full email
ARTIFACT_REPO="${ARTIFACT_REPO:?set ARTIFACT_REPO}"
INPUTS_BUCKET="${INPUTS_BUCKET:?set INPUTS_BUCKET}"
OUTPUTS_BUCKET="${OUTPUTS_BUCKET:?set OUTPUTS_BUCKET}"
MODEL_CACHE_BUCKET="${MODEL_CACHE_BUCKET:?set MODEL_CACHE_BUCKET}"

SA_ID="${SERVICE_ACCOUNT%%@*}"   # local part for create

echo "1) Enable APIs"
gcloud services enable --project "$PROJECT_ID" \
  run.googleapis.com artifactregistry.googleapis.com storage.googleapis.com \
  compute.googleapis.com secretmanager.googleapis.com aiplatform.googleapis.com

echo "2) Artifact Registry repo"
gcloud artifacts repositories describe "$ARTIFACT_REPO" --location "$REGION" --project "$PROJECT_ID" >/dev/null 2>&1 \
  || gcloud artifacts repositories create "$ARTIFACT_REPO" --repository-format=docker --location "$REGION" --project "$PROJECT_ID"

echo "3) GCS buckets (derived names)"
for B in "$INPUTS_BUCKET" "$OUTPUTS_BUCKET" "$MODEL_CACHE_BUCKET"; do
  gcloud storage buckets describe "$B" >/dev/null 2>&1 \
    || gcloud storage buckets create "$B" --project "$PROJECT_ID" --location "$REGION" --uniform-bucket-level-access
done

echo "4) Runtime service account"
gcloud iam service-accounts describe "$SERVICE_ACCOUNT" --project "$PROJECT_ID" >/dev/null 2>&1 \
  || gcloud iam service-accounts create "$SA_ID" --project "$PROJECT_ID" --display-name "AYUSH Bio-AI runtime SA"

echo "5) IAM for the runtime SA (least privilege)"
# Vertex (Gemini passport), Artifact Registry pull, logging.
for ROLE in roles/aiplatform.user roles/artifactregistry.reader roles/logging.logWriter; do
  gcloud projects add-iam-policy-binding "$PROJECT_ID" \
    --member "serviceAccount:$SERVICE_ACCOUNT" --role "$ROLE" --condition=None >/dev/null
done
# Bucket-scoped object read/write (least privilege vs project-wide storage admin).
for B in "$INPUTS_BUCKET" "$OUTPUTS_BUCKET" "$MODEL_CACHE_BUCKET"; do
  gcloud storage buckets add-iam-policy-binding "$B" \
    --member "serviceAccount:$SERVICE_ACCOUNT" --role roles/storage.objectAdmin >/dev/null
done

echo "Bootstrap complete. Next: request GPU quota (docs/15), then infra/provision_gpu_vm.sh."

# Secrets are OPTIONAL for the MVP (ChEMBL/PubChem/UniProt are public; Vertex uses the SA).
# If you add a keyed source, store it in Secret Manager and reference it at deploy with --set-secrets:
#   echo -n "<value>" | gcloud secrets create chembl-api-key --data-file=- --project "$PROJECT_ID"
#   gcloud secrets add-iam-policy-binding chembl-api-key \
#     --member "serviceAccount:$SERVICE_ACCOUNT" --role roles/secretmanager.secretAccessor
