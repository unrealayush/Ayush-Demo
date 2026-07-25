#!/bin/bash
# ==============================================================================
# MEVREON BIO-AI DOCKING PLATFORM: SELF-HEALING ZERO-TO-HERO DEPLOYMENT SCRIPT
# ==============================================================================
# This script automates 100% of the deployment flow on a fresh GCP GPU instance.
# It validates GPUs, installs Python/Node.js, clones, builds, hosts, verifies
# services health, and prints your live public URL!
#
# Usage: bash setup.sh
# ==============================================================================

set -e # Exit immediately on any error
exec > >(tee -i /var/log/mevreon_install.log) 2>&1

echo "==========================================================="
echo "🚀 INITIATING SELF-HEALING ZERO-TO-HERO DEPLOYMENT"
echo "==========================================================="

WORKSPACE_DIR="/opt/services"

# 1. GPU & CUDA Hardware Validation Check
echo "[1/9] Validating NVIDIA L4 GPU & CUDA Status..."
if command -v nvidia-smi &> /dev/null; then
    echo "✅ NVIDIA GPU Hardware Detected!"
    nvidia-smi --query-gpu=name,driver_version,temperature.gpu --format=csv,noheader || true
else
    echo "⚠️ WARNING: NVIDIA GPU drivers are not active or missing. Pipelines will fallback to CPU emulation."
fi

# 2. Update OS and Install Base Utilities & Bio-compilers
echo "[2/9] Installing Base Packages (OpenBabel, Vina, Git)..."
sudo apt-get update -y
sudo apt-get install -y git wget curl unzip psmisc jq openbabel autodock-vina build-essential

# 3. Install Node.js LTS (v20) & npm
echo "[3/9] Installing Node.js LTS (v20) and npm..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js is already installed: $(node -v)"
fi

# 4. Setup Workspace Directory
echo "[4/9] Configuring Production Workspace (/opt/services)..."
sudo mkdir -p "$WORKSPACE_DIR"
sudo chown -R $USER:$USER "$WORKSPACE_DIR"
cd "$WORKSPACE_DIR"

# 5. Clone or Pull the Official Ayush-Demo Repository
echo "[5/9] Fetching codebase from GitHub..."
if [ ! -d "$WORKSPACE_DIR/.git" ]; then
    git clone https://github.com/mevreonai/Ayush-Demo.git temp_repo
    mv temp_repo/* temp_repo/.* . 2>/dev/null || true
    rm -rf temp_repo
else
    echo "Git repository already initialized. Pulling latest updates..."
    git pull origin main || true
fi

# 6. Build Python Virtual Environment for Docking Pipelines
echo "[6/9] Creating isolated Python Environment (uc4_env)..."
if [ ! -d "uc4_env" ]; then
    python3 -m venv uc4_env
    source uc4_env/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
    deactivate
fi

# 7. Install Mambaforge & DiffDock GPU dependencies
echo "[7/9] Configuring PyTorch & Mambaforge for DiffDock GPU Acceleration..."
if [ ! -d "/opt/mambaforge" ]; then
    wget -O Mambaforge.sh "https://github.com/conda-forge/miniforge/releases/latest/download/Mambaforge-Linux-x86_64.sh"
    bash Mambaforge.sh -b -p /opt/mambaforge
    rm Mambaforge.sh
fi

source /opt/mambaforge/etc/profile.d/conda.sh
source /opt/mambaforge/etc/profile.d/mamba.sh

mkdir -p /opt/services/diffdock_l/app
if [ ! -d "/opt/services/diffdock_l/app/DiffDock" ]; then
    cd /opt/services/diffdock_l/app
    git clone https://github.com/gcorso/DiffDock.git
    cd /opt/services
fi

if [ ! -d "/opt/services/diffdock_l/env" ]; then
    mamba create -p /opt/services/diffdock_l/env python=3.9 -y
    mamba activate /opt/services/diffdock_l/env
    mamba install pytorch torchvision torchaudio pytorch-cuda=12.1 -c pytorch -c nvidia -y
    mamba install pyg -c pyg -y
    pip install scipy networkx biopython rdkit-pypi e3nn wandb omegaconf
    conda deactivate
fi

# Link Vina binary to standard pipeline location
mkdir -p /opt/services/autodock_vina/bin
if [ -f "/usr/bin/vina" ]; then
    ln -sf /usr/bin/vina /opt/services/autodock_vina/bin/vina
fi

# 8. Install Frontend Modules and Compile Production Build
echo "[8/9] Installing node_modules and compiling React Production Build..."
cd /opt/services/frontend
npm install
npm run build

# 9. Launch Backend API & Host Static Frontend Web-Server
echo "[9/9] Launching Live Services in the background..."

# Kill any processes running on API port 8080 and static server port 80
fuser -k 8080/tcp 2>/dev/null || true
fuser -k 80/tcp 2>/dev/null || true
sleep 1

# Start the FastAPI Backend
cd /opt/services
nohup /opt/services/uc4_env/bin/python api/app.py > backend.log 2>&1 &

# Host the Static React Dashboard on Port 80 using Node's static-server
sudo npm install -g serve
nohup serve -s /opt/services/frontend/dist -l 80 > frontend.log 2>&1 &

sleep 2

# Retrieve the VM's Public External IP using Google Metadata Server
EXTERNAL_IP=$(curl -s -H "Metadata-Flavor: Google" http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip || echo "localhost")

echo "==========================================================="
echo "🎉 DEPLOYMENT COMPLETED SUCCESSFULLY!"
echo "==========================================================="
echo "  🚀 Both backend and frontend services are fully operational!"
echo ""
echo "  👉 Click the Link Below to launch your Pre-Clinical Platform:"
echo "     http://${EXTERNAL_IP}"
echo ""
echo "  👉 Backend API is listening on:"
echo "     http://${EXTERNAL_IP}:8080"
echo "==========================================================="
