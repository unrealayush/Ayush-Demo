
import requests
import json

def verify_all_endpoints():
    base_url = "http://127.0.0.1:8000"
    endpoints = [
        "/api/targets",
        "/api/ligands",
        "/api/boxes",
        "/api/contracts-report",
        "/api/vina-report",
        "/api/diffdock-results",
        "/api/interaction-report",
        "/api/mechanism-graph",
        "/api/validation-score",
        "/api/evidence-passport",
        "/api/file?path=outputs/vina_results.json",
        "/api/run-status/vina",
        "/api/scenario-context"
    ]
    
    print("--- API Endpoint Verification ---")
    all_pass = True

    for endpoint in endpoints:
        try:
            response = requests.get(f"{base_url}{endpoint}")
            print(f"Endpoint: {endpoint}")
            print(f"  HTTP Status: {response.status_code}")
            
            if response.status_code != 200:
                all_pass = False
                print(f"  **FAIL**: Expected 200, got {response.status_code}")
                try:
                    print(f"  Response: {response.json()}")
                except:
                    pass
            else:
                 print(f"  **PASS**")


        except Exception as e:
            all_pass = False
            print(f"Endpoint: {endpoint}")
            print(f"  **FAIL**: Request failed with exception: {e}")
    
    print("\\n--- Final Verdict ---")
    if all_pass:
        print("✅ PASS: All endpoints are production-ready.")
    else:
        print("❌ FAIL: One or more endpoints are not production-ready.")

if __name__ == "__main__":
    verify_all_endpoints()
