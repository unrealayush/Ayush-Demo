#!/usr/bin/env bash
set -euo pipefail

# Env-var-only deploy for the UI service. See docs/13_ENV_VAR_CONFIG_CONTRACT.md.
PROJECT_ID="${PROJECT_ID:?set PROJECT_ID}"
REGION="${REGION:?set REGION}"
SERVICE_ACCOUNT="${SERVICE_ACCOUNT:?set SERVICE_ACCOUNT}"
ARTIFACT_REPO="${ARTIFACT_REPO:?set ARTIFACT_REPO}"
IMAGE_TAG="${IMAGE_TAG:-latest}"
RUN_MODE="${RUN_MODE:?set RUN_MODE}"
API_BASE_URL="${API_BASE_URL:?set API_BASE_URL}"
OUTPUTS_BUCKET="${OUTPUTS_BUCKET:?set OUTPUTS_BUCKET}"

IMAGE="$REGION-docker.pkg.dev/$PROJECT_ID/$ARTIFACT_REPO/ui:$IMAGE_TAG"

PRIOR_REV="$(gcloud run revisions list --service ayush-bioai-ui --region "$REGION" \
  --format='value(name)' 2>/dev/null | head -1 || true)"
echo "Prior revision (rollback target): ${PRIOR_REV:-<none>}"

gcloud run deploy ayush-bioai-ui \
  --image "$IMAGE" \
  --region "$REGION" \
  --service-account "$SERVICE_ACCOUNT" \
  --allow-unauthenticated \
  --set-env-vars "RUN_MODE=$RUN_MODE,API_BASE_URL=$API_BASE_URL,OUTPUTS_BUCKET=$OUTPUTS_BUCKET"

# Rollback on failed health check:
#   gcloud run services update-traffic ayush-bioai-ui --region "$REGION" --to-revisions "$PRIOR_REV=100"
