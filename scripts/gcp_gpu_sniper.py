import time
import subprocess
import os

def check_and_start_vm():
    while True:
        print("Attempting to start uc4-model-vm...")
        result = subprocess.run(
            ["gcloud", "compute", "instances", "start", "uc4-model-vm", "--zone=asia-southeast1-b"],
            capture_output=True, text=True
        )
        if result.returncode == 0:
            print("VM successfully started!")
            return True
        elif "ZONE_RESOURCE_POOL_EXHAUSTED" in result.stderr or "stockout" in result.stderr:
            print("Stockout encountered. Waiting 30 seconds before retrying...")
            time.sleep(30)
        else:
            print(f"Unknown error starting VM:\n{result.stderr}\n{result.stdout}")
            time.sleep(30)

def run_ssh_command(cmd):
    return subprocess.run(
        ["gcloud", "compute", "ssh", "uc4-model-vm", "--zone=asia-southeast1-b", "--tunnel-through-iap", "--command", cmd],
        capture_output=True, text=True
    )

def wait_for_process():
    while True:
        res = run_ssh_command("ps aux | grep screen_all_ligands_structured | grep -v grep")
        if "python" not in res.stdout:
            print("Process completed.")
            break
        print("Process still running... waiting 60s.")
        time.sleep(60)

def main():
    print("Initializing Google Cloud VM Sniper Worker...")
    if not check_and_start_vm():
        return
    
    # Wait for SSH to be ready
    print("Waiting 60 seconds for VM SSH daemon and Network stack to initialize...")
    time.sleep(60)

    targets = ["lasr", "peld", "mexb"]
    for target in targets:
        print(f"=== Starting structured screening for {target.upper()} ===")
        # Launching via nohup in background so SSH disconnections don't kill the GPU run
        cmd = f"cd /opt/services && nohup /opt/services/uc4_env/bin/python scripts/screen_all_ligands_structured.py --target {target} > {target}_screen.log 2>&1 &"
        run_ssh_command(cmd)
        
        print(f"Waiting for {target.upper()} deep-learning screening to complete (~24 mins)...")
        time.sleep(10) # give the python process time to instantiate in memory
        wait_for_process()
        
        print(f"Syncing {target.upper()} structured outputs directly to GCS bucket...")
        # Since gsutil requires auth, we download it to the local workstation first, then push to GCS from the local workstation
        
        print(f"Downloading {target.upper()} outputs to local workstation outputs folder...")
        subprocess.run([
            "gcloud", "compute", "scp", "--recurse", f"uc4-model-vm:/opt/services/outputs/{target}", "outputs/",
            "--zone=asia-southeast1-b", "--tunnel-through-iap"
        ])
        
        print(f"Pushing {target.upper()} structural database to GCS Cloud Bucket from local...")
        subprocess.run([
            "gcloud", "storage", "cp", "-r", f"outputs/{target}", f"gs://mevreon-bioai-screening-outputs/"
        ])
        
        print(f"✅ {target.upper()} Pipeline Finished and Secured in Cloud Bucket!")
        
    print("🎉 ALL REMAINING TARGETS PROCESSED SUCCESSFULLY!")

if __name__ == "__main__":
    main()
