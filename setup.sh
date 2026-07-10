#!/bin/bash
# ==============================================================================
# AYUSH BIO-AI PLATFORM: END-TO-END GCP VM SETUP SCRIPT
# ==============================================================================
# This script configures a fresh Ubuntu/Debian Deep Learning VM on GCP with
# all required biophysical tools, Conda environments, neural network frameworks,
# and clones the codebase to run the high-throughput screening platform.
#
# RUN THIS SCRIPT AS A NORMAL USER (sudo privileges required)
# Usage: bash setup.sh
# ==============================================================================

set -e # Exit immediately if a command exits with a non-zero status.

echo "==========================================================="
echo "🚀 INITIATING MEVREON BIO-AI PLATFORM DEPLOYMENT"
echo "==========================================================="

# 1. Update system and install base dependencies
echo "[1/7] Installing System Dependencies (OpenBabel, Vina, Git)..."
sudo apt-get update -y
sudo apt-get install -y git wget curl unzip python3-venv python3-pip openbabel autodock-vina psmisc jq

# 2. Setup /opt/services directory structure
echo "[2/7] Configuring Workspace Directory (/opt/services)..."
sudo mkdir -p /opt/services
sudo chown -R $USER:$USER /opt/services
cd /opt/services

# 3. Clone the Repository
echo "[3/7] Cloning the Ayush-Demo Repository..."
if [ ! -d "/opt/services/.git" ]; then
    git clone https://github.com/mevreonai/Ayush-Demo.git temp_repo
    mv temp_repo/* temp_repo/.* . 2>/dev/null || true
    rm -rf temp_repo
else
    echo "Repository already exists, skipping clone."
fi

# 4. Setup Python Virtual Environment for Orchestration
echo "[4/7] Setting up Base Python Environment (uc4_env)..."
python3 -m venv uc4_env
source uc4_env/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
deactivate

# 5. Setup Mambaforge & DiffDock Deep Learning Environment
echo "[5/7] Installing Mambaforge and PyTorch CUDA Environment for DiffDock-L..."
if [ ! -d "/opt/mambaforge" ]; then
    wget -O Mambaforge.sh "https://github.com/conda-forge/miniforge/releases/latest/download/Mambaforge-Linux-x86_64.sh"
    bash Mambaforge.sh -b -p /opt/mambaforge
    rm Mambaforge.sh
fi

# Initialize conda/mamba in current shell
source /opt/mambaforge/etc/profile.d/conda.sh
source /opt/mambaforge/etc/profile.d/mamba.sh

# Clone DiffDock architecture
mkdir -p /opt/services/diffdock_l/app
if [ ! -d "/opt/services/diffdock_l/app/DiffDock" ]; then
    cd /opt/services/diffdock_l/app
    git clone https://github.com/gcorso/DiffDock.git
    cd /opt/services
fi

# Create isolated DiffDock Conda environment
echo "Creating Conda environment for DiffDock (this may take a few minutes)..."
if [ ! -d "/opt/services/diffdock_l/env" ]; then
    mamba create -p /opt/services/diffdock_l/env python=3.9 -y
    mamba activate /opt/services/diffdock_l/env
    
    # Install PyTorch with CUDA 12.1 (Matches L4 GPU images)
    mamba install pytorch torchvision torchaudio pytorch-cuda=12.1 -c pytorch -c nvidia -y
    mamba install pyg -c pyg -y
    pip install scipy networkx biopython rdkit-pypi e3nn wandb omegaconf
    conda deactivate
fi

# 6. Create Autodock Vina Symlink (if installed via apt)
echo "[6/7] Linking AutoDock Vina..."
mkdir -p /opt/services/autodock_vina/bin
if [ -f "/usr/bin/vina" ]; then
    ln -sf /usr/bin/vina /opt/services/autodock_vina/bin/vina
fi

# 7. Final Permissions and Initialization
echo "[7/7] Finalizing Setup..."
chmod +x /opt/services/scripts/*.sh
mkdir -p /opt/services/outputs

echo "==========================================================="
echo "✅ SETUP COMPLETE! "
echo "==========================================================="
echo "To run the High-Throughput Pipeline:"
echo "  cd /opt/services"
echo "  nohup /opt/services/scripts/run_all_remaining.sh > campaign.log 2>&1 &"
echo "==========================================================="
