
import requests
import time

def verify_apis():
    base_url = "http://127.0.0.1:8000"
    endpoints = [
        "/api/targets",
        "/api/ligands",
        "/api/run-status/esmfold",
        "/api/run-status/vina",
        "/api/run-status/diffdock",
        "/api/interaction-report",
        "/api/mechanism-graph",
        "/api/validation-score",
        "/api/evidence-passport",
        "/api/file?path=outputs/vina_results.json",
        "/api/boxes",
        "/api/contracts-report",
        "/api/vina-report",
        "/api/diffdock-results",
        "/api/scenario-context"
    ]
    post_endpoints = [
        "/api/run/esmfold",
        "/api/run/vina",
        "/api/run/diffdock"
    ]
    errors = []

    for endpoint in endpoints:
        try:
            start_time = time.time()
            response = requests.get(f"{base_url}{endpoint}")
            response_time = time.time() - start_time
            
            if response.status_code != 200:
                errors.append(f"Endpoint {endpoint} returned status code {response.status_code}")
                try:
                    errors.append(f"Response body: {response.json()}")
                except:
                    pass
            
            try:
                response.json()
            except:
                if not endpoint.startswith('/api/file'):
                     errors.append(f"Endpoint {endpoint} did not return valid JSON")

            print(f"Endpoint {endpoint} returned status {response.status_code} in {response_time:.4f}s")

        except Exception as e:
            errors.append(f"Error calling endpoint {endpoint}: {e}")
            
    for endpoint in post_endpoints:
        try:
            start_time = time.time()
            data = {}
            if "esmfold" in endpoint:
                data = {"target_id": "lasr", "sequence": "M..."}
            elif "vina" in endpoint:
                data = {"target_id": "lasr"}
            elif "diffdock" in endpoint:
                data = {"target_id": "lasr"}

            response = requests.post(f"{base_url}{endpoint}", json=data)
            response_time = time.time() - start_time
            
            if response.status_code != 200:
                errors.append(f"Endpoint {endpoint} returned status code {response.status_code}")
                try:
                    errors.append(f"Response body: {response.json()}")
                except:
                    pass
            
            try:
                response.json()
            except:
                errors.append(f"Endpoint {endpoint} did not return valid JSON")

            print(f"Endpoint {endpoint} returned status {response.status_code} in {response_time:.4f}s")

        except Exception as e:
            errors.append(f"Error calling endpoint {endpoint}: {e}")
    
    if errors:
        print("\nAPI Verification Summary: FAIL")
        for error in errors:
            print(f"- {error}")
    else:
        print("\nAPI Verification Summary: PASS")

if __name__ == "__main__":
    verify_apis()
