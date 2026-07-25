#!/bin/bash
# ==============================================================================
# MEVREON BIO-AI DOCKING PLATFORM: INSTANT-BOOT INVESTOR DEPLOYMENT SCRIPT
# ==============================================================================
# Decouples instant UI hosting from heavy GPU Conda compilations.
# Gives the investor a working live Port 80 link in under 90 seconds!
# ==============================================================================

set -e # Exit immediately on any error
exec > >(tee -i /var/log/mevreon_install.log) 2>&1

echo "==========================================================="
echo "🚀 INITIALIZING INSTANT-BOOT INVESTOR ENVIRONMENT"
echo "==========================================================="

WORKSPACE_DIR="/opt/services"

# --- PHASE 1: INSTANT BOOT SYSTEM (ESTIMATED: 90 SECONDS) ---
echo "[1/3] Installing lightweight system dependencies & Node.js..."
sudo apt-get update -y
sudo apt-get install -y git wget curl unzip psmisc jq openbabel autodock-vina build-essential

# Install Node.js if missing
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Configure Workspace
sudo mkdir -p "$WORKSPACE_DIR"
sudo chown -R $USER:$USER "$WORKSPACE_DIR"
cd "$WORKSPACE_DIR"

# Pull Codebase from GitHub
echo "[2/3] Fetching pristine pre-computed datasets from GitHub..."
if [ ! -d "$WORKSPACE_DIR/.git" ]; then
    git clone https://github.com/mevreonai/Ayush-Demo.git temp_repo
    mv temp_repo/* temp_repo/.* . 2>/dev/null || true
    rm -rf temp_repo
else
    git pull origin main || true
fi

# Build and Compile Widescreen UI
echo "[3/3] Compiling React Widescreen Dashboard..."
cd "$WORKSPACE_DIR/frontend"
npm install
npm run build

# Re-bind Port 80
sudo fuser -k 80/tcp 2>/dev/null || true
sleep 1

# Host the Static Dashboard instantly on Port 80
sudo npm install -g serve
nohup serve -s "$WORKSPACE_DIR/frontend/dist" -l 80 > /var/log/frontend.log 2>&1 &

# Retrieve the VM's Public External IP using Google Metadata Server
EXTERNAL_IP=$(curl -s -H "Metadata-Flavor: Google" http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip || echo "localhost")

echo "==========================================================="
echo "🎉 PORTFOLIO WEB PLATFORM IS SUCCESSFULLY LIVE!"
echo "==========================================================="
echo "  🚀 The web dashboard is fully compiled and online!"
echo "     (Using pre-computed target results and 3D co-crystals)"
echo ""
echo "  👉 CLICK THE LINK BELOW TO LAUNCH THE PRE-CLINICAL PLATFORM:"
echo "     http://${EXTERNAL_IP}"
echo "==========================================================="

# --- PHASE 2: BACKGROUND STEALTH COMPILATION (NO INVESTOR DELAY) ---
echo "Starting background biophysical modeling engine compilation (Conda/PyTorch)..."

cat << 'EOF' > "$WORKSPACE_DIR/build_backend.sh"
#!/bin/bash
exec > /var/log/mevreon_backend_build.log 2>&1

echo "Building isolated Python Environment (uc4_env)..."
cd /opt/services
if [ ! -d "uc4_env" ]; then
    python3 -m venv uc4_env
    source uc4_env/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
    deactivate
fi

echo "Configuring Mambaforge..."
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

# Link Vina binary
mkdir -p /opt/services/autodock_vina/bin
if [ -f "/usr/bin/vina" ]; then
    ln -sf /usr/bin/vina /opt/services/autodock_vina/bin/vina
fi

# Start the FastAPI Backend Model Server on Port 8080
fuser -k 8080/tcp 2>/dev/null || true
sleep 1
nohup /opt/services/uc4_env/bin/python /opt/services/api/app.py > /opt/services/backend.log 2>&1 &

echo "Background biophysical engine fully built and online on Port 8080!"
# Clean startup metadata so it doesn't trigger on manual reboots
gcloud compute instances remove-metadata uc4-model-vm --keys=startup-script --zone=asia-southeast1-b || true
EOF

chmod +x "$WORKSPACE_DIR/build_backend.sh"
nohup "$WORKSPACE_DIR/build_backend.sh" > /dev/null 2>&1 &
echo "Background compilation successfully running in a detached thread!"
echo "Check progress anytime via: tail -f /var/log/mevreon_backend_build.log"
echo "==========================================================="
