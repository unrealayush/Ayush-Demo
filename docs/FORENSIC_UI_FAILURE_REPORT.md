# Forensic UI Failure Report

**Date:** June 22, 2026
**Target:** AYUSH Bio-AI Evidence Dashboard

This forensic audit analyzes the discrepancy between the reported implementation status and the running application on the deployed VM (`34.21.237.193`).

---

## Analysis per Feature

### 1. Timestamp does not update
*   **React Component Name:** `App` (Header Banner)
*   **API Endpoint Used:** N/A (Local Javascript Date)
*   **Whether endpoint exists:** N/A
*   **Whether endpoint is called:** N/A
*   **Actual network response:** N/A
*   **Exact code location:** `docking_pipeline/frontend/src/App.tsx` (Lines 66-72)
*   **Root cause:** The `setInterval` hook updating `currentTime` was written to the local codebase and compiled into `index-pl-61C3e.js`. However, due to a recursive SCP folder nesting error (`dist/dist` mismatch) and caching issues during deployment, the VM's `index.html` continued to serve the older `index-BBQ7RN9C.js` bundle to the user, which retained the hardcoded timestamp.

### 2. Ligand dropdown has no options
*   **React Component Name:** `App` (Demo Inputs Panel)
*   **API Endpoint Used:** `/api/ligands`
*   **Whether endpoint exists:** Yes, explicitly defined in `app.py`.
*   **Whether endpoint is called:** Yes, by Axios in `useEffect` loop.
*   **Actual network response:** `200 OK` (returning valid JSON arrays).
*   **Exact code location:** `docking_pipeline/frontend/src/App.tsx` (Lines 77-78)
*   **Root cause:** While the endpoint succeeds, the subsequent Axios call to `/api/interaction-report` throws an unhandled `404 Not Found` Axios Error. Because the data fetch happens synchronously via `await`, the `try/catch` block aborts the entire `fetchData` function immediately, effectively preventing the component from fully initializing or triggering the required renders for the populated states.

### 3. Target dropdown has no options
*   **React Component Name:** `App` (Demo Inputs Panel)
*   **API Endpoint Used:** `/api/targets`
*   **Whether endpoint exists:** Yes, explicitly defined in `app.py`.
*   **Whether endpoint is called:** Yes.
*   **Actual network response:** `200 OK`.
*   **Exact code location:** `docking_pipeline/frontend/src/App.tsx` (Line 75)
*   **Root cause:** Identical to the Ligand dropdown issue. The early abort caused by the missing post-processing endpoints (`404` error) terminates the initialization function, breaking the UI state hydration.

### 4. Mechanism graph permanently shows "Graph data loading..."
*   **React Component Name:** `MechanismGraph`
*   **API Endpoint Used:** `/api/mechanism-graph`
*   **Whether endpoint exists:** No. (Defined locally, but never deployed to the VM).
*   **Whether endpoint is called:** Yes.
*   **Actual network response:** `404 Not Found`.
*   **Exact code location:** `docking_pipeline/frontend/src/App.tsx` (Lines 82-83) and `docking_pipeline/api/app.py`
*   **Root cause:** The local file `api/app.py` was refactored to include the `/api/mechanism-graph` route, but this updated backend file was **never deployed** to the remote VM via SCP. The frontend requests the endpoint, receives a 404, throws an error, and the `mechanismGraph` state remains `null`, triggering the fallback loading UI indefinitely.

### 5. MolecularViewer never loads structures
*   **React Component Name:** `MolecularViewer`
*   **API Endpoint Used:** `/api/file?path=...`
*   **Whether endpoint exists:** Yes.
*   **Whether endpoint is called:** No.
*   **Actual network response:** N/A (Call is never made).
*   **Exact code location:** `docking_pipeline/frontend/src/components/MolecularViewer.tsx` (Line 60)
*   **Root cause:** The 3D viewer relies on `activeTgt` and `activeLig` props to define its file paths. Because the initial registry data hydration failed (due to the 404 crash detailed above), the component receives undefined variables and skips the WebGL loading sequence entirely.

### 6. Traceability section still shows decorative buttons
*   **React Component Name:** `App` (Bottom Section Footer)
*   **API Endpoint Used:** `/api/evidence-passport`
*   **Whether endpoint exists:** No.
*   **Whether endpoint is called:** Yes.
*   **Actual network response:** `404 Not Found`.
*   **Exact code location:** `docking_pipeline/frontend/src/App.tsx` (Line 495)
*   **Root cause:** A copy-paste error during the local source file generation. The markdown report `COMPLIANCE_FIX_REPORT.md` stated the traceability matrix map had been restored, but the actual code written to the `App.tsx` payload simply re-inserted the hardcoded decorative buttons (e.g., `<Network className="w-4 h-4" /> AI Knowledge Graph`).

---

## Endpoint Audits

### All Frontend API Endpoints (Requested by React)
- `GET /api/targets`
- `GET /api/ligands`
- `GET /api/boxes`
- `GET /api/contracts-report`
- `GET /api/interaction-report`
- `GET /api/mechanism-graph`
- `GET /api/validation-score`
- `GET /api/evidence-passport`
- `GET /api/file`
- `POST /api/run/{model}`

### All Backend API Endpoints (Currently Running on VM's app.py)
- `GET /api/healthz`
- `GET /api/targets`
- `GET /api/ligands`
- `GET /api/boxes`
- `GET /api/contracts-report`
- `GET /api/vina-report`
- `GET /api/diffdock-results`
- `GET /api/file`
- `GET /api/run-status/{model_key}`
- `POST /api/run/esmfold`
- `POST /api/run/vina`
- `POST /api/run/diffdock`

### Endpoint Mismatch Table
| Requested by Frontend (React) | Served by Backend (VM `app.py`) | Status Match | Consequence |
| :--- | :--- | :--- | :--- |
| `/api/interaction-report` | **Missing** | ❌ 404 | Throws unhandled Axios exception, halting UI initialization. |
| `/api/mechanism-graph` | **Missing** | ❌ 404 | Graph remains stuck in "Loading" state. |
| `/api/validation-score` | **Missing** | ❌ 404 | Score defaults to 0 or triggers UI failure. |
| `/api/evidence-passport` | **Missing** | ❌ 404 | Passport strings fail to render, components missing data. |
| `/api/targets` | Present | ✅ 200 | Succeeds, but state is lost due to subsequent 404 failures. |
| `/api/ligands` | Present | ✅ 200 | Succeeds, but state is lost due to subsequent 404 failures. |
| `/api/file` | Present | ✅ 200 | Available, but never triggered due to broken state upstream. |

### Conclusion
The fundamental failure is a **Deployment Asynchrony**. The backend file (`app.py`) was updated locally to serve the new JSON contracts but was never uploaded to the VM. The frontend subsequently attempts to fetch these non-existent endpoints, encounters a fatal 404 Error, and halts the entire React lifecycle, paralyzing the UI. Compounding this, the source traceability matrix was implemented incorrectly via a local copy-paste error.