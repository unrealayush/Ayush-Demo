#!/bin/bash
# ==============================================================================
# MEVREON BIO-AI PLATFORM: ONE-CLICK INVESTOR DEPLOYMENT
# ==============================================================================
# Usage:
#   git clone https://github.com/mevreonai/Ayush-Demo.git
#   cd Ayush-Demo
#   bash deploy.sh
#
# Prerequisites:
#   - Google Cloud SDK (gcloud) installed and authenticated
#   - A GCP project with billing enabled
#   - That's it. No Docker, no Node.js, no Python needed locally.
# ==============================================================================

set -euo pipefail

# ── Color Codes ──
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

print_banner() {
    echo ""
    echo -e "${CYAN}${BOLD}╔══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}${BOLD}║          MEVREON BIO-AI PLATFORM — INVESTOR DEPLOY          ║${NC}"
    echo -e "${CYAN}${BOLD}║    Molecular Docking & Evidence Passport Dashboard           ║${NC}"
    echo -e "${CYAN}${BOLD}╚══════════════════════════════════════════════════════════════╝${NC}"
    echo ""
}

print_step() {
    echo -e "${GREEN}${BOLD}▸ $1${NC}"
}

print_warn() {
    echo -e "${YELLOW}⚠  $1${NC}"
}

print_error() {
    echo -e "${RED}✖  $1${NC}"
}

# ── Configuration ──
REGION="${REGION:-us-central1}"
SERVICE_NAME="${SERVICE_NAME:-ayush-bioai-demo}"
ARTIFACT_REPO="${ARTIFACT_REPO:-ayush-bioai-repo}"
IMAGE_TAG="${IMAGE_TAG:-latest}"
DOCKERFILE="Dockerfile.investor"

# ══════════════════════════════════════════════════════════════
# STEP 0: Preflight Checks
# ══════════════════════════════════════════════════════════════
print_banner

print_step "Step 0: Running preflight checks..."

# Check gcloud is installed
if ! command -v gcloud &> /dev/null; then
    print_error "Google Cloud SDK (gcloud) is not installed."
    echo ""
    echo "  Install it from: https://cloud.google.com/sdk/docs/install"
    echo "  Then run: gcloud auth login"
    echo ""
    exit 1
fi

# Check gcloud is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" 2>/dev/null | head -1 | grep -q "@"; then
    print_error "gcloud is not authenticated. Please run:"
    echo ""
    echo "  gcloud auth login"
    echo ""
    exit 1
fi

# Get or prompt for Project ID
if [ -n "${PROJECT_ID:-}" ]; then
    echo "  Using PROJECT_ID from environment: ${PROJECT_ID}"
elif PROJECT_ID=$(gcloud config get-value project 2>/dev/null) && [ -n "$PROJECT_ID" ] && [ "$PROJECT_ID" != "(unset)" ]; then
    echo "  Auto-detected GCP Project: ${PROJECT_ID}"
else
    echo ""
    echo -e "${YELLOW}  No GCP project configured.${NC}"
    echo -n "  Enter your GCP Project ID: "
    read -r PROJECT_ID
    if [ -z "$PROJECT_ID" ]; then
        print_error "Project ID is required. Aborting."
        exit 1
    fi
    gcloud config set project "$PROJECT_ID"
fi

# Check the Dockerfile exists
if [ ! -f "$DOCKERFILE" ]; then
    print_error "Cannot find ${DOCKERFILE} in current directory."
    echo "  Make sure you're running this from the repository root."
    exit 1
fi

IMAGE="${REGION}-docker.pkg.dev/${PROJECT_ID}/${ARTIFACT_REPO}/${SERVICE_NAME}:${IMAGE_TAG}"

echo ""
echo -e "  ${BOLD}Project:${NC}  ${PROJECT_ID}"
echo -e "  ${BOLD}Region:${NC}   ${REGION}"
echo -e "  ${BOLD}Service:${NC}  ${SERVICE_NAME}"
echo -e "  ${BOLD}Image:${NC}    ${IMAGE}"
echo ""

# ══════════════════════════════════════════════════════════════
# STEP 1: Enable GCP APIs
# ══════════════════════════════════════════════════════════════
print_step "Step 1: Enabling required GCP APIs..."
gcloud services enable --project "${PROJECT_ID}" \
    run.googleapis.com \
    artifactregistry.googleapis.com \
    cloudbuild.googleapis.com \
    2>/dev/null || true
echo "  ✔ APIs enabled."

# ══════════════════════════════════════════════════════════════
# STEP 2: Create Artifact Registry (if needed)
# ══════════════════════════════════════════════════════════════
print_step "Step 2: Ensuring Artifact Registry exists..."
if gcloud artifacts repositories describe "${ARTIFACT_REPO}" \
    --location="${REGION}" \
    --project="${PROJECT_ID}" >/dev/null 2>&1; then
    echo "  ✔ Registry '${ARTIFACT_REPO}' already exists."
else
    gcloud artifacts repositories create "${ARTIFACT_REPO}" \
        --repository-format=docker \
        --location="${REGION}" \
        --project="${PROJECT_ID}" \
        --description="Mevreon Bio-AI container images"
    echo "  ✔ Registry '${ARTIFACT_REPO}' created."
fi

# ══════════════════════════════════════════════════════════════
# STEP 3: Build & Deploy Container via Cloud Build
# ══════════════════════════════════════════════════════════════
print_step "Step 3: Building & Deploying via Cloud Build..."
echo "  This compiles the React dashboard and packages all pre-computed"
echo "  docking results into a lightweight nginx container on Cloud Run."
echo "  (Estimated: 3-5 minutes)"
echo ""

gcloud builds submit \
    --project="${PROJECT_ID}" \
    --region="${REGION}" \
    --config=cloudbuild.yaml \
    --substitutions="_REGION=${REGION},_ARTIFACT_REPO=${ARTIFACT_REPO},_SERVICE_NAME=${SERVICE_NAME},_IMAGE_TAG=${IMAGE_TAG}" \
    --timeout=1800s \
    .

echo ""
echo "  ✔ Container built and deployed to Cloud Run successfully."

# ══════════════════════════════════════════════════════════════
# STEP 5: Get the Live URL
# ══════════════════════════════════════════════════════════════
SERVICE_URL=$(gcloud run services describe "${SERVICE_NAME}" \
    --region "${REGION}" \
    --project "${PROJECT_ID}" \
    --format='value(status.url)' 2>/dev/null || echo "URL not available")

echo ""
echo -e "${CYAN}${BOLD}╔══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}${BOLD}║                   🎉 DEPLOYMENT COMPLETE!                   ║${NC}"
echo -e "${CYAN}${BOLD}╚══════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "  ${GREEN}${BOLD}🌐 YOUR LIVE PLATFORM URL:${NC}"
echo ""
echo -e "     ${BOLD}${SERVICE_URL}${NC}"
echo ""
echo -e "  ${CYAN}Open this link in your browser to explore:${NC}"
echo -e "    • 12 pathogenic target proteins across 3 organisms"
echo -e "    • 24 Ayush phytochemical compounds screened per target"
echo -e "    • AutoDock Vina binding affinities (ΔG kcal/mol)"
echo -e "    • DiffDock-L deep learning confidence scores"
echo -e "    • 3D molecular structure viewers"
echo -e "    • Evidence Passports with validation scores"
echo -e "    • Mechanism of Action cascade graphs"
echo ""
echo -e "  ${YELLOW}Cost: This service scales to zero when idle (~\$0/month).${NC}"
echo -e "  ${YELLOW}To remove: gcloud run services delete ${SERVICE_NAME} --region ${REGION} --project ${PROJECT_ID}${NC}"
echo ""
echo "═══════════════════════════════════════════════════════════════"
