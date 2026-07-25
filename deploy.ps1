<#
==============================================================================
MEVREON BIO-AI PLATFORM: ONE-CLICK INVESTOR DEPLOYMENT (WINDOWS POWERSHELL)
==============================================================================
Usage (in PowerShell):
  git clone https://github.com/mevreonai/Ayush-Demo.git
  cd Ayush-Demo
  .\deploy.ps1

Prerequisites:
  - Google Cloud SDK (gcloud) installed and authenticated
  - A GCP project with billing enabled
==============================================================================
#>

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║          MEVREON BIO-AI PLATFORM — INVESTOR DEPLOY          ║" -ForegroundColor Cyan
Write-Host "║    Molecular Docking & Evidence Passport Dashboard           ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# ── Configuration ──
$Region = if ($env:REGION) { $env:REGION } else { "us-central1" }
$ServiceName = if ($env:SERVICE_NAME) { $env:SERVICE_NAME } else { "ayush-bioai-demo" }
$ArtifactRepo = if ($env:ARTIFACT_REPO) { $env:ARTIFACT_REPO } else { "ayush-bioai-repo" }
$ImageTag = if ($env:IMAGE_TAG) { $env:IMAGE_TAG } else { "latest" }
$Dockerfile = "Dockerfile.investor"

# Step 0: Preflight Checks
Write-Host "▸ Step 0: Running preflight checks..." -ForegroundColor Green

if (-not (Get-Command gcloud -ErrorAction SilentlyContinue)) {
    Write-Host "✖ Google Cloud SDK (gcloud) is not installed." -ForegroundColor Red
    Write-Host "  Install it from: https://cloud.google.com/sdk/docs/install"
    exit 1
}

$activeAccount = (gcloud auth list --filter="status:ACTIVE" --format="value(account)" 2>$null | Select-Object -First 1)
if (-not $activeAccount) {
    Write-Host "✖ gcloud is not authenticated. Please run: gcloud auth login" -ForegroundColor Red
    exit 1
}

$ProjectId = if ($env:PROJECT_ID) { $env:PROJECT_ID } else { (gcloud config get-value project 2>$null) }
if (-not $ProjectId -or $ProjectId -eq "(unset)") {
    $ProjectId = Read-Host "  Enter your GCP Project ID"
    if (-not $ProjectId) {
        Write-Host "✖ Project ID is required. Aborting." -ForegroundColor Red
        exit 1
    }
    gcloud config set project $ProjectId
}

if (-not (Test-Path $Dockerfile)) {
    Write-Host "✖ Cannot find $Dockerfile in current directory." -ForegroundColor Red
    exit 1
}

$Image = "${Region}-docker.pkg.dev/${ProjectId}/${ArtifactRepo}/${ServiceName}:${ImageTag}"

Write-Host "  Project:  $ProjectId"
Write-Host "  Region:   $Region"
Write-Host "  Service:  $ServiceName"
Write-Host "  Image:    $Image"
Write-Host ""

# Step 1: Enable GCP APIs
Write-Host "▸ Step 1: Enabling required GCP APIs..." -ForegroundColor Green
gcloud services enable --project $ProjectId run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
Write-Host "  ✔ APIs enabled."

# Step 2: Create Artifact Registry
Write-Host "▸ Step 2: Ensuring Artifact Registry exists..." -ForegroundColor Green
$repoExists = gcloud artifacts repositories describe $ArtifactRepo --location=$Region --project=$ProjectId 2>$null
if (-not $repoExists) {
    gcloud artifacts repositories create $ArtifactRepo --repository-format=docker --location=$Region --project=$ProjectId --description="Mevreon Bio-AI container images"
    Write-Host "  ✔ Registry '$ArtifactRepo' created."
} else {
    Write-Host "  ✔ Registry '$ArtifactRepo' already exists."
}

# Step 3: Build & Deploy Container via Cloud Build
Write-Host "▸ Step 3: Building & Deploying via Cloud Build..." -ForegroundColor Green
Write-Host "  Compiling React dashboard & pre-computed docking data into container on Cloud Run..."
Write-Host "  (Estimated: 3-5 minutes)"
Write-Host ""

gcloud builds submit --project=$ProjectId --region=$Region --config=cloudbuild.yaml --substitutions="_REGION=${Region},_ARTIFACT_REPO=${ArtifactRepo},_SERVICE_NAME=${ServiceName},_IMAGE_TAG=${ImageTag}" --timeout=1800s .

Write-Host "  ✔ Container built and deployed to Cloud Run successfully."

# Step 5: Get Live URL
$ServiceUrl = (gcloud run services describe $ServiceName --region $Region --project $ProjectId --format="value(status.url)" 2>$null)

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                   🎉 DEPLOYMENT COMPLETE!                   ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""
Write-Host "  🌐 YOUR LIVE PLATFORM URL:" -ForegroundColor Green
Write-Host ""
Write-Host "     $ServiceUrl" -ForegroundColor Yellow -NoNewline
Write-Host ""
Write-Host ""
