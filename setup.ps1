# MEVREON BIO-AI PLATFORM: ROCK-SOLID ONE-CLICK INVESTOR DEPLOYMENT (WINDOWS POWERSHELL)

Write-Host ""
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "     MEVREON BIO-AI PLATFORM - INVESTOR SPOT VM DEPLOY     " -ForegroundColor Cyan
Write-Host "   AutoDock Vina + DiffDock-L + Evidence Passport Platform " -ForegroundColor Cyan
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$Region = if ($env:REGION) { $env:REGION } else { "us-central1" }
$VmName = if ($env:VM_NAME) { $env:VM_NAME } else { "ayush-spot-vm" }
$ServiceName = if ($env:SERVICE_NAME) { $env:SERVICE_NAME } else { "ayush-bioai-demo" }
$ArtifactRepo = if ($env:ARTIFACT_REPO) { $env:ARTIFACT_REPO } else { "ayush-bioai-repo" }

# Step 0: Preflight Checks
Write-Host "[0/5] Running preflight environment checks..." -ForegroundColor Green

if (-not (Get-Command gcloud -ErrorAction SilentlyContinue)) {
    Write-Host "Google Cloud SDK (gcloud) is not installed on your system." -ForegroundColor Red
    Write-Host "Download and install gcloud from: https://cloud.google.com/sdk/docs/install"
    exit 1
}

$activeAccount = (gcloud auth list --filter="status:ACTIVE" --format="value(account)" 2>$null | Select-Object -First 1)
if (-not $activeAccount) {
    Write-Host "gcloud is not authenticated. Launching interactive authentication..." -ForegroundColor Yellow
    gcloud auth login
}

$ProjectId = if ($env:PROJECT_ID) { $env:PROJECT_ID } else { (gcloud config get-value project 2>$null) }
if (-not $ProjectId -or $ProjectId -eq "(unset)") {
    $ProjectId = Read-Host "Enter your GCP Project ID"
    if (-not $ProjectId) {
        Write-Host "Project ID is required. Aborting deployment." -ForegroundColor Red
        exit 1
    }
    gcloud config set project $ProjectId
}

Write-Host "  Project:      $ProjectId"
Write-Host "  Region:       $Region"
Write-Host "  Spot VM Name: $VmName"
Write-Host ""

# Step 1: Enable APIs
Write-Host "[1/5] Enabling required GCP APIs (Compute Engine, Cloud Run, Artifact Registry, Cloud Build)..." -ForegroundColor Green
gcloud services enable --project $ProjectId compute.googleapis.com run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
Write-Host "  GCP Service APIs enabled."

# Step 2: Configure Firewall Rules
Write-Host "[2/5] Configuring firewall rules for HTTP (80) and API (8080)..." -ForegroundColor Green
gcloud compute firewall-rules create allow-http-80 --project=$ProjectId --allow=tcp:80 --target-tags="http-server" 2>$null
gcloud compute firewall-rules create allow-api-8080 --project=$ProjectId --allow=tcp:8080 --target-tags="http-server" 2>$null
Write-Host "  Firewall rules verified."

# Step 3: Multi-Zone GPU / CPU Spot VM Provisioning
Write-Host "[3/5] Provisioning Spot VM ($VmName) with automatic multi-zone fallback..." -ForegroundColor Green

$startupScript = "vm_startup.sh"
if (-not (Test-Path $startupScript)) { $startupScript = "setup.sh" }

$gpuZones = @(
    "us-central1-a", "us-central1-b", "us-central1-c", "us-central1-f",
    "asia-southeast1-a", "asia-southeast1-b",
    "us-east4-a", "us-east4-c",
    "europe-west4-a", "europe-west4-b",
    "us-west1-a", "us-west1-b"
)

$vmCreated = $false
$selectedZone = "us-central1-a"

foreach ($tryZone in $gpuZones) {
    Write-Host "  Attempting to provision NVIDIA L4 GPU Spot capacity in zone: $tryZone..."
    $createRes = gcloud compute instances create $VmName --project=$ProjectId --zone=$tryZone --machine-type=g2-standard-8 --accelerator=count=1,type=nvidia-l4 --image-family=common-cu121-debian-11 --image-project=deeplearning-platform-release --provisioning-model=SPOT --instance-termination-action=STOP --tags="http-server,https-server" --metadata-from-file=startup-script=$startupScript --scopes=https://www.googleapis.com/auth/cloud-platform 2>$null

    if ($LASTEXITCODE -eq 0) {
        $selectedZone = $tryZone
        $vmCreated = $true
        Write-Host "  Successfully provisioned NVIDIA L4 GPU Spot VM in $tryZone!" -ForegroundColor Green
        break
    }
}

if (-not $vmCreated) {
    Write-Host "  GPU Spot capacity limited across all zones. Provisioning High-CPU Spot VM fallback..." -ForegroundColor Yellow
    $cpuZones = @("us-central1-a", "us-central1-b", "us-east1-b", "europe-west1-b")
    foreach ($tryZone in $cpuZones) {
        Write-Host "  Attempting CPU Spot capacity in zone: $tryZone..."
        $createRes = gcloud compute instances create $VmName --project=$ProjectId --zone=$tryZone --machine-type=e2-standard-8 --provisioning-model=SPOT --instance-termination-action=STOP --tags="http-server,https-server" --metadata-from-file=startup-script=$startupScript --scopes=https://www.googleapis.com/auth/cloud-platform 2>$null

        if ($LASTEXITCODE -eq 0) {
            $selectedZone = $tryZone
            $vmCreated = $true
            Write-Host "  Successfully provisioned High-CPU Spot VM in $tryZone!" -ForegroundColor Green
            break
        }
    }
}

$VmIp = (gcloud compute instances describe $VmName --zone=$selectedZone --project=$ProjectId --format="value(networkInterfaces[0].accessConfigs[0].natIP)" 2>$null)
Write-Host "  Spot VM IP: http://$VmIp"

# Step 4: Build and Deploy Cloud Run
Write-Host "[4/5] Building and Deploying Serverless Cloud Run platform..." -ForegroundColor Green
gcloud artifacts repositories create $ArtifactRepo --repository-format=docker --location=$Region --project=$ProjectId --description="Mevreon Bio-AI images" 2>$null

gcloud builds submit --project=$ProjectId --region=$Region --config=cloudbuild.yaml --substitutions="_REGION=${Region},_ARTIFACT_REPO=${ArtifactRepo},_SERVICE_NAME=${ServiceName}" --timeout=1800s .

$CloudRunUrl = (gcloud run services describe $ServiceName --region $Region --project $ProjectId --format="value(status.url)" 2>$null)

# Step 5: Summary
Write-Host ""
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "               ALL DEPLOYMENTS COMPLETE!                   " -ForegroundColor Cyan
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  1. SPOT VM DASHBOARD (Port 80):" -ForegroundColor Green
Write-Host "     http://$VmIp" -ForegroundColor Yellow
Write-Host "     (Cloned Repositories on VM: DiffDock-L, AutoDock Vina, Ayush Evidence Codebase)"
Write-Host ""
Write-Host "  2. SERVERLESS CLOUD RUN DASHBOARD:" -ForegroundColor Green
Write-Host "     $CloudRunUrl" -ForegroundColor Yellow
Write-Host ""
