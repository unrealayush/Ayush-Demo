import zipfile
import os

zip_path = "outputs/delivery_pack.zip"
target_file = "investor_delivery_pack/pqsr_liriodendrin_vina_pose.pdbqt"

if not os.path.exists(zip_path):
    print(f"Error: Zip file not found at {zip_path}")
    exit(1)

try:
    with zipfile.ZipFile(zip_path) as z:
        # Check if the target file exists inside the ZIP
        if target_file in z.namelist():
            with z.open(target_file) as f:
                content = f.read().decode('utf-8')
                print("📄 First 10 lines of pqsr_liriodendrin_vina_pose.pdbqt:")
                for line in content.splitlines()[:10]:
                    print(line)
        else:
            print(f"File {target_file} not found inside {zip_path}")
            print("Available files:", z.namelist()[:10])
except Exception as e:
    print(f"Exception reading zip: {e}")
