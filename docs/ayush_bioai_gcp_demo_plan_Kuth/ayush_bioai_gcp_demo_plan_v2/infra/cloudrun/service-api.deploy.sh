#!/usr/bin/env bash
set -euo pipefail

# Env-var-only deploy for the API service. See docs/13_ENV_VAR_CONFIG_CONTRACT.md.
# No hardcoded project/region/zone/SA. Buckets use the derived gs://$PROJECT_ID-ayush-bioai-* convention.
PROJECT_ID="${PROJECT_ID:?set PROJECT_ID}"
REGION="${REGION:?set REGION}"
SERVICE_ACCOUNT="${SERVICE_ACCOUNT:?set SERVICE_ACCOUNT}"
ARTIFACT_REPO="${ARTIFACT_REPO:?set ARTIFACT_REPO}"
IMAGE_TAG="${IMAGE_TAG:-latest}"
RUN_MODE="${RUN_MODE:?set RUN_MODE}"
INPUTS_BUCKET="${INPUTS_BUCKET:?set INPUTS_BUCKET}"
OUTPUTS_BUCKET="${OUTPUTS_BUCKET:?set OUTPUTS_BUCKET}"
MODEL_CACHE_BUCKET="${MODEL_CACHE_BUCKET:?set MODEL_CACHE_BUCKET}"

IMAGE="$REGION-docker.pkg.dev/$PROJECT_ID/$ARTIFACT_REPO/api:$IMAGE_TAG"

# Capture the current healthy revision so a failed deploy can be rolled back.
PRIOR_REV="$(gcloud run revisions list --service ayush-bioai-api --region "$REGION" \
  --format='value(name)' 2>/dev/null | head -1 || true)"
echo "Prior revision (rollback target): ${PRIOR_REV:-<none>}"

gcloud run deploy ayush-bioai-api \
  --image "$IMAGE" \
  --region "$REGION" \
  --service-account "$SERVICE_ACCOUNT" \
  --allow-unauthenticated \
  --set-env-vars "RUN_MODE=$RUN_MODE,INPUTS_BUCKET=$INPUTS_BUCKET,OUTPUTS_BUCKET=$OUTPUTS_BUCKET,MODEL_CACHE_BUCKET=$MODEL_CACHE_BUCKET"
# Secrets (if any) via Secret Manager, e.g.:
#   --set-secrets "CHEMBL_API_KEY=chembl-api-key:latest"

# Rollback on failed health check:
#   gcloud run services update-traffic ayush-bioai-api --region "$REGION" --to-revisions "$PRIOR_REV=100"
