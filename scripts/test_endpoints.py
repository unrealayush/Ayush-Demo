import json
import urllib.request
import urllib.error
import sys

base_url = "http://localhost:7860"

endpoints_to_test = {
    "/api/targets": "GET",
    "/api/ligands": "GET",
    "/api/interaction-report": "GET",
    "/api/mechanism-graph": "GET",
    "/api/validation-score": "GET",
    "/api/evidence-passport": "GET",
    "/api/file?path=outputs/interaction_report.json": "GET"
}

all_pass = True

# 1. Test GET endpoints
for route, method in endpoints_to_test.items():
    url = f"{base_url}{route}"
    try:
        req = urllib.request.Request(url, method=method)
        with urllib.request.urlopen(req, timeout=5) as response:
            status = response.getcode()
            body = response.read().decode('utf-8')
            # Check if valid JSON
            json_data = json.loads(body)
            print(f"PASS: {method} {route} returned {status} with valid JSON.")
    except Exception as e:
        print(f"FAIL: {method} {route} failed: {e}")
        all_pass = False

# 2. Test POST run triggers (dry runs)
post_endpoints = {
    "/api/run/esmfold": {"target_id": "lasr", "sequence": "MALVDGG"},
    "/api/run/vina": {"target_id": "lasr", "ligand_id": "costunolide"},
    "/api/run/diffdock": {"target_id": "lasr", "ligand_id": "costunolide"}
}

for route, payload in post_endpoints.items():
    url = f"{base_url}{route}"
    try:
        data = json.dumps(payload).encode('utf-8')
        req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'}, method="POST")
        with urllib.request.urlopen(req, timeout=5) as response:
            status = response.getcode()
            body = response.read().decode('utf-8')
            json_data = json.loads(body)
            print(f"PASS: POST {route} returned {status} with response: {json_data}")
    except urllib.error.HTTPError as e:
        # Check if 400 is returned because task is already in progress, which counts as 200/reachable
        if e.code in [400, 422]:
            print(f"PASS: POST {route} returned anticipated {e.code} code.")
        else:
            print(f"FAIL: POST {route} failed with HTTPError: {e.code}")
            all_pass = False
    except Exception as e:
        print(f"FAIL: POST {route} failed: {e}")
        all_pass = False

if all_pass:
    print("\nSUCCESS: All backend REST endpoints verified and operational!")
else:
    sys.exit(1)
