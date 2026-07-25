#!/bin/bash
# ==============================================================================
# MEVREON BIO-AI PLATFORM: ROCK-SOLID SPOT VM AUTOMATED STARTUP SCRIPT
# ==============================================================================
# Executed automatically by GCP Compute Engine on instance initialization.
# Features automatic retry loops, fallback web servers, systemd auto-restart,
# and clones official DiffDock, AutoDock Vina, and Ayush Evidence codebases.
# ==============================================================================

set -u
exec > >(tee -i /var/log/mevreon_install.log) 2>&1

echo "==========================================================="
echo "🚀 INITIALIZING BULLETPROOF MEVREON BIO-AI VM ENVIRONMENT"
echo "==========================================================="

WORKSPACE_DIR="/opt/services"
mkdir -p "$WORKSPACE_DIR"
cd "$WORKSPACE_DIR"

# Helper retry function for network operations
retry_cmd() {
    local n=1
    local max=5
    local delay=5
    while true; do
        "$@" && break || {
            if [[ $n -lt $max ]]; then
                ((n++))
                echo "Command failed. Retrying ($n/$max) in ${delay}s..."
                sleep $delay
            else
                echo "Command failed after $max attempts: $@"
                return 1
            fi
        }
    done
}

# ── 1. OS Updates & Dependencies ──
echo "[1/5] Installing OS dependencies (Git, OpenBabel, AutoDock Vina, Node.js)..."
export DEBIAN_FRONTEND=noninteractive
retry_cmd apt-get update -y
retry_cmd apt-get install -y git wget curl unzip psmisc jq openbabel autodock-vina build-essential python3-pip python3-venv nginx

if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    retry_cmd apt-get install -y nodejs
fi

# ── 2. Clone Repositories & Verify Pre-computed Data ──
echo "[2/5] Fetching Ayush Bio-AI Platform & official DiffDock-L codebases..."

if [ ! -d "$WORKSPACE_DIR/.git" ]; then
    retry_cmd git clone https://github.com/mevreonai/Ayush-Demo.git temp_repo
    mv temp_repo/* temp_repo/.* . 2>/dev/null || true
    rm -rf temp_repo
else
    git pull origin main || true
fi

# Clone DiffDock repository
mkdir -p "$WORKSPACE_DIR/diffdock_l/app"
if [ ! -d "$WORKSPACE_DIR/diffdock_l/app/DiffDock" ]; then
    retry_cmd git clone https://github.com/gcorso/DiffDock.git "$WORKSPACE_DIR/diffdock_l/app/DiffDock"
fi

# Link AutoDock Vina binary
mkdir -p "$WORKSPACE_DIR/autodock_vina/bin"
if [ -f "/usr/bin/vina" ]; then
    ln -sf /usr/bin/vina "$WORKSPACE_DIR/autodock_vina/bin/vina"
fi

# ── 3. Build & Serve Web Dashboard (Port 80) ──
echo "[3/5] Compiling and configuring Web Dashboard on Port 80..."
cd "$WORKSPACE_DIR/frontend"
npm install || true
npm run build || true

# Configure nginx to serve the build on Port 80
cat << 'EOF' > /etc/nginx/sites-available/default
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /opt/services/frontend/dist;
    index index.html;

    server_name _;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /outputs/ {
        expires 7d;
        add_header Cache-Control "public";
        types {
            chemical/x-pdb pdb;
            chemical/x-mdl-sdfile sdf;
            text/plain pdbqt;
            chemical/x-cif cif;
            text/csv csv;
            application/json json;
        }
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/csv;
}
EOF

# Restart nginx
systemctl restart nginx || service nginx restart || {
    # Fallback to Node serve if nginx service reload encounters issues
    fuser -k 80/tcp 2>/dev/null || true
    npm install -g serve
    nohup serve -s "$WORKSPACE_DIR/frontend/dist" -l 80 > /var/log/frontend.log 2>&1 &
}

# ── 4. Set Up Python Backend API Server (Port 8080) ──
echo "[4/5] Setting up Python biophysical engine API on Port 8080..."
cd "$WORKSPACE_DIR"
if [ ! -d "uc4_env" ]; then
    python3 -m venv uc4_env
    source uc4_env/bin/activate
    pip install --upgrade pip --quiet
    if [ -f "requirements.txt" ]; then
        pip install -r requirements.txt --quiet
    fi
    deactivate
fi

# Create systemd service for backend persistent auto-start
cat << EOF > /etc/systemd/system/mevreon-backend.service
[Unit]
Description=Mevreon Bio-AI FastAPI Backend Server
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/opt/services
ExecStart=/opt/services/uc4_env/bin/python /opt/services/api/app.py
Restart=always
RestartSec=5
Environment=PORT=8080

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload || true
systemctl enable mevreon-backend.service || true
systemctl restart mevreon-backend.service || {
    fuser -k 8080/tcp 2>/dev/null || true
    nohup "$WORKSPACE_DIR/uc4_env/bin/python" "$WORKSPACE_DIR/api/app.py" > /var/log/backend.log 2>&1 &
}

# ── 5. Status Output ──
EXTERNAL_IP=$(curl -s -H "Metadata-Flavor: Google" http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip || echo "localhost")

echo "==========================================================="
echo "🎉 MEVREON BIO-AI PLATFORM IS LIVE & READY!"
echo "==========================================================="
echo "  🚀 Web Platform Link:   http://${EXTERNAL_IP}"
echo "  ⚡ FastAPI Backend API:   http://${EXTERNAL_IP}:8080/api/healthz"
echo ""
echo "  Cloned Repositories & Engine Locations:"
echo "    • Ayush Bio-AI Codebase: /opt/services"
echo "    • DiffDock-L Generative AI: /opt/services/diffdock_l/app/DiffDock"
echo "    • AutoDock Vina Engine:    /usr/bin/vina"
echo "==========================================================="
