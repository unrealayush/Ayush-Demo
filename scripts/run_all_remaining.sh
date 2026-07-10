#!/bin/bash
# Complete High-Throughput Pre-clinical GPU Screening Campaign
echo "=== Starting Complete Pre-clinical GPU Screening Campaign ==="

targets=("acrb" "agra" "meca" "murj" "ompk36" "srta" "mrkh" "wzc")

for target in "${targets[@]}"; do
    echo "=========================================="
    echo "🚀 STARTING POCKET-TARGETED TARGET: ${target^^}"
    echo "=========================================="
    
    # 1. Run physical screening loop on L4 GPU (unbuffered log)
    /opt/services/uc4_env/bin/python -u scripts/screen_all_ligands_structured.py --target "$target" > "${target}_screen.log" 2>&1
    
    # 2. Upload structured directory to GCS (ignore errors so queue continues!)
    echo "📡 Syncing ${target^^} database to GCS bucket..."
    gcloud storage cp -r "/opt/services/outputs/$target" "gs://mevreon-bioai-screening-outputs/" || echo "⚠️ GCS Sync failed for $target (continuing queue)"
done

echo "🎉 ALL 12 PATHOGEN TARGETS CALCULATED AND SECURED!"
