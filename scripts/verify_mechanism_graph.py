
import requests
import json
from datetime import datetime
import os

response = requests.get('http://127.0.0.1:8000/api/mechanism-graph')
print(f'Endpoint: /api/mechanism-graph')
print(f'HTTP Status: {response.status_code}')
print(f'Response Length: {len(response.content)}')
data = response.json()
print(f'JSON Keys: {list(data.keys())}')
print(f'Number of nodes: {len(data.get("nodes", []))}')
print(f'Number of edges: {len(data.get("edges", []))}')
node_types = set([n.get("type") for n in data.get("nodes", [])])
print(f'Node Categories: {list(node_types)}')
edge_types = set([e.get("relation") for e in data.get("edges", [])])
print(f'Edge Relation Types: {list(edge_types)}')
file_path = 'C:/Users/ayu23/OneDrive/Desktop/dock/docking_pipeline/outputs/mechanism_graph.json'
print(f'Source File: {file_path}')
print(f'Last Modified: {datetime.fromtimestamp(os.path.getmtime(file_path))}')
