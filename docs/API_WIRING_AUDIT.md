# API Wiring Source-Code Audit

**Date:** June 22, 2026

*Note: This audit evaluates only the current state of the source code repository (`frontend/src/App.tsx`, `frontend/src/components/*`, and `api/app.py`). It does not infer or diagnose runtime deployment or network behavior.*

## 1. Frontend Data Widgets

### Widget: Demo Inputs (Target & Ligand Dropdowns)
1. **Component name:** `App`
2. **State variable:** `targets`, `ligands`
3. **API endpoint referenced:** `/api/targets`, `/api/ligands`
4. **Fetch implementation:** `axios.get('/api/targets')`, `axios.get('/api/ligands')` in `useEffect` hook.
5. **Expected JSON shape:** Array of objects `[{scenario_id, organism_key, target_label, gene_symbol, uniprot_accession}]` and `[{compound_id, compound_name, pubchem_cid}]`.
6. **Matching backend route exists:** Yes (`@app.get("/api/targets")`, `@app.get("/api/ligands")`)
7. **File and line number:** `frontend/src/App.tsx` (Lines 83-86)

### Widget: Molecular Docking Card (3D Viewer & Metrics)
1. **Component name:** `App` & `MolecularViewer`
2. **State variable:** `interactionReport`, `validationScore`, `selectedTargetId`, `selectedLigandId`
3. **API endpoint referenced:** `/api/interaction-report`, `/api/validation-score`, `/api/file` (via MolecularViewer)
4. **Fetch implementation:** `axios.get('/api/interaction-report')`, `axios.get('/api/validation-score')`, `fetch('/api/file?path=...')`
5. **Expected JSON shape:** 
   - Interaction: `{status, interactions: [{type, receptor_residue}], summary: {total_h_bonds, total_hydrophobic}}`
   - Validation Score: `{validation_priority_score, decision, evidence_strength, metrics: {...}}`
   - File: Raw text/binary file stream.
6. **Matching backend route exists:** Yes (`@app.get("/api/interaction-report")`, `@app.get("/api/validation-score")`, `@app.get("/api/file")`)
7. **File and line number:** `frontend/src/App.tsx` (Lines 88-93), `frontend/src/components/MolecularViewer.tsx` (Lines 60, 81)

### Widget: AI-Derived Mechanism Graph
1. **Component name:** `App` & `MechanismGraph`
2. **State variable:** `mechanismGraph`
3. **API endpoint referenced:** `/api/mechanism-graph`
4. **Fetch implementation:** `axios.get('/api/mechanism-graph')`
5. **Expected JSON shape:** `{nodes: [{id, label, type}], edges: [{source, target, relation}]}`
6. **Matching backend route exists:** Yes (`@app.get("/api/mechanism-graph")`)
7. **File and line number:** `frontend/src/App.tsx` (Lines 90-91)

### Widget: Global Evidence Passport (Scores, Charts, Steps)
1. **Component name:** `App`
2. **State variable:** `validationScore`, `evidencePassport`
3. **API endpoint referenced:** `/api/validation-score`, `/api/evidence-passport`
4. **Fetch implementation:** `axios.get('/api/validation-score')`, `axios.get('/api/evidence-passport')`
5. **Expected JSON shape:** 
   - Evidence Passport: `{passport_id, executive_summary, next_validation_steps: [], traceability_matrix: []}`
6. **Matching backend route exists:** Yes (`@app.get("/api/validation-score")`, `@app.get("/api/evidence-passport")`)
7. **File and line number:** `frontend/src/App.tsx` (Lines 92-95)

### Widget: Source Traceability Matrix
1. **Component name:** `App` (Footer)
2. **State variable:** `evidencePassport`
3. **API endpoint referenced:** `/api/evidence-passport`
4. **Fetch implementation:** `axios.get('/api/evidence-passport')`
5. **Expected JSON shape:** `{traceability_matrix: [{entity, source, accession_or_url}]}`
6. **Matching backend route exists:** Yes (`@app.get("/api/evidence-passport")`)
7. **File and line number:** `frontend/src/App.tsx` (Lines 94-95)

---

## 2. Frontend Endpoint Inventory
The React application explicitly requests the following endpoints:
1. `GET /api/targets`
2. `GET /api/ligands`
3. `GET /api/interaction-report`
4. `GET /api/mechanism-graph`
5. `GET /api/validation-score`
6. `GET /api/evidence-passport`
7. `GET /api/file` (with `?path=` query parameter)

---

## 3. Backend Route Inventory
The FastAPI application (`api/app.py`) explicitly defines the following routes:
1. `GET /api/healthz`
2. `GET /api/targets`
3. `GET /api/ligands`
4. `GET /api/boxes`
5. `GET /api/contracts-report`
6. `GET /api/vina-report`
7. `GET /api/diffdock-results`
8. `GET /api/interaction-report`
9. `GET /api/mechanism-graph`
10. `GET /api/validation-score`
11. `GET /api/evidence-passport`
12. `GET /api/file`
13. `GET /api/run-status/{model_key}`
14. `POST /api/run/esmfold`
15. `POST /api/run/vina`
16. `POST /api/run/diffdock`

---

## 4. Route Mismatch Table

| Frontend Required Endpoint | Backend Defined Route | Status | Notes |
| :--- | :--- | :--- | :--- |
| `GET /api/targets` | `GET /api/targets` | **MATCH** | Perfectly aligned in source code. |
| `GET /api/ligands` | `GET /api/ligands` | **MATCH** | Perfectly aligned in source code. |
| `GET /api/interaction-report` | `GET /api/interaction-report`| **MATCH** | Perfectly aligned in source code. |
| `GET /api/mechanism-graph` | `GET /api/mechanism-graph` | **MATCH** | Perfectly aligned in source code. |
| `GET /api/validation-score` | `GET /api/validation-score` | **MATCH** | Perfectly aligned in source code. |
| `GET /api/evidence-passport` | `GET /api/evidence-passport`| **MATCH** | Perfectly aligned in source code. |
| `GET /api/file` | `GET /api/file` | **MATCH** | Perfectly aligned in source code. |

**Conclusion:**
According to the source code, there are **zero API mismatches**. The React frontend components and their respective state interfaces are perfectly wired to the FastAPI backend routing structure.