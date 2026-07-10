#!/usr/bin/env bash
set -euo pipefail

PROJECT_ID="${PROJECT_ID:?set PROJECT_ID}"
REGION="${REGION:-us-central1}"
IMAGE="$REGION-docker.pkg.dev/$PROJECT_ID/ayush-bioai/api:latest"

gcloud run deploy ayush-bioai-api   --image "$IMAGE"   --region "$REGION"   --allow-unauthenticated   --set-env-vars "GCS_OUTPUT_BUCKET=gs://$PROJECT_ID-ayush-bioai-outputs"
