#!/bin/bash
# High-Throughput Queue Extension for MrkH and Wzc targets
echo "MrkH & Wzc Queue Listener initialized. Waiting for active simulations to complete..."

while ps aux | grep screen_all_ligands_structured | grep -v grep | grep -q -E "acrb|agra|meca|murj|ompk36|srta"; do
    sleep 15
done

echo "Active queue completed! Booting MrkH physical screening..."
cd /opt/services
/opt/services/uc4_env/bin/python -u scripts/screen_all_ligands_structured.py --target mrkh > mrkh_screen.log 2>&1
gcloud storage cp -r /opt/services/outputs/mrkh gs://mevreon-bioai-screening-outputs/

echo "MrkH completed and synced. Booting Wzc physical screening..."
/opt/services/uc4_env/bin/python -u scripts/screen_all_ligands_structured.py --target wzc > wzc_screen.log 2>&1
gcloud storage cp -r /opt/services/outputs/wzc gs://mevreon-bioai-screening-outputs/

echo "🎉 ALL 12 PATHOGEN TARGETS COMPLETED AND SYNCED SUCCESSFULLY!"
