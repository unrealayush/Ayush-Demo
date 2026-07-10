#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# AYUSH Bio-AI Evidence Demo — Cloud Run Deployment Script
# Deploys combined API + Frontend as a single Cloud Run service
# ============================================================
#
# Prerequisites:
#   1. gcloud CLI installed and authenticated
#   2. Docker installed (for local build) OR use Cloud Build
#   3. Set environment variables below or export them before running
#
# Usage:
#   export PROJECT_ID=your-gcp-project
#   export REGION=us-central1
#   bash deploy-cloudrun.sh
# ============================================================

# --- Required environment variables ---
PROJECT_ID="${PROJECT_ID:?❌ Set PROJECT_ID (e.g., export PROJECT_ID=my-gcp-project)}"
REGION="${REGION:-us-central1}"
SERVICE_NAME="${SERVICE_NAME:-ayush-bioai-demo}"
ARTIFACT_REPO="${ARTIFACT_REPO:-ayush-bioai-repo}"
IMAGE_TAG="${IMAGE_TAG:-latest}"

IMAGE="${REGION}-docker.pkg.dev/${PROJECT_ID}/${ARTIFACT_REPO}/${SERVICE_NAME}:${IMAGE_TAG}"

echo "============================================================"
echo "  AYUSH Bio-AI Evidence Demo — Cloud Run Deployment"
echo "============================================================"
echo "  Project:  ${PROJECT_ID}"
echo "  Region:   ${REGION}"
echo "  Service:  ${SERVICE_NAME}"
echo "  Image:    ${IMAGE}"
echo "============================================================"
echo ""

# Step 1: Enable required GCP APIs
echo "📡 Step 1: Enabling GCP APIs..."
gcloud services enable --project "${PROJECT_ID}" \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  2>/dev/null || true

# Step 2: Create Artifact Registry (if not exists)
echo "📦 Step 2: Ensuring Artifact Registry repo exists..."
gcloud artifacts repositories describe "${ARTIFACT_REPO}" \
  --location="${REGION}" \
  --project="${PROJECT_ID}" >/dev/null 2>&1 \
  || gcloud artifacts repositories create "${ARTIFACT_REPO}" \
    --repository-format=docker \
    --location="${REGION}" \
    --project="${PROJECT_ID}" \
    --description="AYUSH Bio-AI container images"

# Step 3: Configure Docker auth for Artifact Registry
echo "🔑 Step 3: Configuring Docker authentication..."
gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet 2>/dev/null || true

# Step 4: Build the container image using Cloud Build
echo "🏗️  Step 4: Building container image with Cloud Build..."
echo "   (This builds the multi-stage Dockerfile in the cloud)"
gcloud builds submit \
  --project="${PROJECT_ID}" \
  --region="${REGION}" \
  --tag="${IMAGE}" \
  --timeout=1200s \
  .

# Step 5: Deploy to Cloud Run
echo "🚀 Step 5: Deploying to Cloud Run..."

# Capture current healthy revision for rollback
PRIOR_REV="$(gcloud run revisions list \
  --service "${SERVICE_NAME}" \
  --region "${REGION}" \
  --project "${PROJECT_ID}" \
  --format='value(name)' 2>/dev/null | head -1 || true)"
echo "   Prior revision (rollback target): ${PRIOR_REV:-<none>}"

gcloud run deploy "${SERVICE_NAME}" \
  --image "${IMAGE}" \
  --region "${REGION}" \
  --project "${PROJECT_ID}" \
  --platform managed \
  --allow-unauthenticated \
  --port 8080 \
  --memory 1Gi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 3 \
  --timeout 300s \
  --set-env-vars "RUN_MODE=demo,PYTHONUNBUFFERED=1"

# Step 6: Get the deployed URL
echo ""
echo "============================================================"
echo "  ✅ Deployment Complete!"
echo "============================================================"
SERVICE_URL="$(gcloud run services describe "${SERVICE_NAME}" \
  --region "${REGION}" \
  --project "${PROJECT_ID}" \
  --format='value(status.url)' 2>/dev/null || echo 'URL not available')"
echo "  🌐 Live URL:  ${SERVICE_URL}"
echo ""
echo "  📊 Health check: ${SERVICE_URL}/api/healthz"
echo "  📋 Targets API:  ${SERVICE_URL}/api/targets"
echo "  🧪 Ligands API:  ${SERVICE_URL}/api/ligands"
echo ""
echo "  🔄 To rollback:  gcloud run services update-traffic ${SERVICE_NAME} --region ${REGION} --to-revisions ${PRIOR_REV:-<prev>}=100"
echo "============================================================"
