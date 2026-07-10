import urllib.request
import urllib.parse
import json

name = "Costunolide"
encoded_name = urllib.parse.quote(name)
url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{encoded_name}/property/CanonicalSMILES/JSON"
req = urllib.request.Request(url, headers={'User-Agent': 'BioinformaticsHub/1.0'})

try:
    with urllib.request.urlopen(req, timeout=5) as response:
        data = json.loads(response.read().decode('utf-8'))
        print("RAW PUBCHEM RESPONSE:", json.dumps(data, indent=2))
except Exception as e:
    print("PUBCHEM EXCEPTION:", e)
