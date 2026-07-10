$logFile = "C:\Users\ayu23\OneDrive\Desktop\dock\docking_pipeline\vm_boot.log"
Add-Content $logFile "=== Google Cloud GPU Sniper Started at $(Get-Date) ==="

# 1. Start VM loop
while ($true) {
    Add-Content $logFile "Attempting to start uc4-model-vm..."
    $output = gcloud compute instances start uc4-model-vm --zone=asia-southeast1-b 2>&1
    Add-Content $logFile $output
    if ($LASTEXITCODE -eq 0) {
        Add-Content $logFile "VM successfully started at $(Get-Date)!"
        break
    }
    Add-Content $logFile "Stockout encountered. Waiting 15 seconds..."
    Start-Sleep -Seconds 15
}

Add-Content $logFile "Waiting 60 seconds for VM SSH daemon to initialize..."
Start-Sleep -Seconds 60

# 2. Run screenings
$targets = @("lasr", "peld", "mexb")
foreach ($target in $targets) {
    Add-Content $logFile "=== Starting structured screening for $target ==="
    $cmd = "cd /opt/services && nohup /opt/services/uc4_env/bin/python scripts/screen_all_ligands_structured.py --target $target > ${target}_screen.log 2>&1 &"
    $output = gcloud compute ssh uc4-model-vm --zone=asia-southeast1-b --tunnel-through-iap --command=$cmd 2>&1
    Add-Content $logFile $output
    
    # Wait for completion loop
    while ($true) {
        $check = gcloud compute ssh uc4-model-vm --zone=asia-southeast1-b --tunnel-through-iap --command="ps aux | grep screen_all_ligands_structured | grep -v grep" 2>&1
        if ($check -notlike "*python*") {
            Add-Content $logFile "Screening for $target completed!"
            break
        }
        Add-Content $logFile "Screening for $target still running..."
        Start-Sleep -Seconds 60
    }
    
    # 3. SCP Download
    Add-Content $logFile "Downloading results for $target..."
    $output = gcloud compute scp --recurse uc4-model-vm:/opt/services/outputs/$target C:\Users\ayu23\OneDrive\Desktop\dock\docking_pipeline\frontend\public\outputs\ --zone=asia-southeast1-b --tunnel-through-iap 2>&1
    Add-Content $logFile $output
    
    # 4. GCS Sync
    Add-Content $logFile "Uploading results to GCS..."
    $output = gcloud storage cp -r C:\Users\ayu23\OneDrive\Desktop\dock\docking_pipeline\frontend\public\outputs\$target gs://mevreon-bioai-screening-outputs/ 2>&1
    Add-Content $logFile $output
}

Add-Content $logFile "=== ALL PROCESSES COMPLETED SUCCESSFULLY AT $(Get-Date) ==="
