import json
import urllib.request
import sys
import os

endpoints = {
    "/api/interaction-report": "outputs/interaction_report.json",
    "/api/mechanism-graph": "outputs/mechanism_graph.json",
    "/api/validation-score": "outputs/validation_priority_score.json",
    "/api/evidence-passport": "outputs/evidence_passport.json"
}

all_match = True

for route, filepath in endpoints.items():
    url = f"http://localhost:7860{route}"
    if not os.path.exists(filepath):
        print(f"Error: Local file '{filepath}' does not exist.")
        all_match = False
        continue
        
    try:
        # Fetch from local endpoint
        with urllib.request.urlopen(url, timeout=5) as response:
            endpoint_data = json.loads(response.read().decode('utf-8'))
            
        # Read from disk
        with open(filepath, 'r', encoding='utf-8') as f:
            disk_data = json.load(f)
            
        # Compare dictionaries
        if endpoint_data == disk_data:
            print(f"MATCH: Endpoint '{route}' matches disk file '{filepath}' exactly.")
        else:
            print(f"MISMATCH: Endpoint '{route}' does NOT match disk file '{filepath}'.")
            all_match = False
    except Exception as e:
        print(f"FAILED to query {route}: {e}")
        all_match = False

if all_match:
    print("SUCCESS: All endpoints verified and match disk artifacts perfectly!")
else:
    print("FAILURE: Some mismatches or connection errors found.")
