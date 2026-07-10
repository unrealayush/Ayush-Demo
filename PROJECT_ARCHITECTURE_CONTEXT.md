# AYUSH Bio-AI Platform: Architecture & Context

This document serves as the master architectural reference and context guide for both the Frontend and Backend of the AYUSH Bio-AI High-Throughput Screening Platform.

## 1. System Overview
The platform is a commercial-grade biophysical and deep-learning drug discovery workbench. It screens phytochemical compounds against pathogenic target proteins (e.g., PqsR, LasR, MexB, PelD) using a combination of physics-based docking and generative AI.

The architecture is explicitly decoupled:
*   **Frontend**: A serverless-ready, static React single-page application (SPA).
*   **Backend**: A high-performance FastAPI Python server orchestrating GPU-bound simulations on Google Cloud Platform (GCP).
*   **Data Layer**: A highly structured file-system and Google Cloud Storage (GCS) bucket (`gs://mevreon-bioai-screening-outputs`) acting as the database.

---

## 2. Frontend Architecture (React 19)
The frontend has been completely overhauled from Gradio to a bespoke React dashboard.

### Key Technologies:
*   **Framework**: React 19 + TypeScript + Vite.
*   **Styling**: Tailwind CSS (Dark Mode, Glassmorphism, Custom glowing SVGs).
*   **State & Fetching**: `@tanstack/react-query` + `axios`.
*   **Data Parsing**: `papaparse` for high-speed client-side CSV leaderboard processing.
*   **Visualizers**:
    *   `3Dmol.js`: Native WebGL viewer rendering `.pdb`, `.pdbqt`, and `.sdf` files.
    *   `MechanismGraph.tsx`: Custom mathematical SVG node-edge network for phenotypic cascades (replacing legacy `react-cytoscapejs`).
    *   `ValidationGauge.tsx`: Custom SVG radial progress indicator.

### Deployment & Data Strategy (Serverless High-Availability):
To guarantee 100% uptime for investor presentations, the frontend is compiled as a **static bundle** (`dist/`).
*   All computed biophysical artifacts (PDBs, PDBQTs, SDFs, CSVs, JSONs) for completed targets (e.g., `PqsR`) are **pre-seeded directly into the `public/outputs/` directory**.
*   This allows the React app to be deployed to Vercel, Netlify, or GitHub Pages with **0ms latency** and **zero dependency on the GPU VM's uptime**.

---

## 3. Backend Architecture (FastAPI & Python)
The backend is a robust API and orchestrator built to manage heavy GPU compute workloads.

### Key Technologies:
*   **Server**: FastAPI + Uvicorn (`port 8080`).
*   **AI/Docking Engines**:
    *   *AutoDock Vina*: Physics-based grid docking (calculates thermodynamic $\Delta G$ affinity).
    *   *DiffDock-L*: PyTorch-based Generative Diffusion model (calculates spatial binding confidences).
*   **Environment**: Minimal Linux OS on GCP Compute Engine (`g2-standard-8` instance with an **NVIDIA L4 GPU**).

### The High-Throughput Pipeline (`screen_all_ligands_structured.py`):
When triggered, this automated script performs a rigorous 5-stage biophysical evaluation for every ligand:
1.  **Vina Docking**: Runs the binary, writes `vina_pose.pdbqt`, parses the actual energy into `vina_results.json`.
2.  **DiffDock Deep Learning**: Runs the PyTorch inference, extracts the highest-confidence `rank1` mesh, writes `diffdock_pose.sdf`, and parses the score into `diffdock_results.json`. *(Folder auto-purging is implemented to prevent stale score leakage).*
3.  **Interaction Parsing**: Analyzes non-covalent contacts (H-bonds, Pi-stacking).
4.  **Mechanism Routing**: Maps the interaction to phenotypic outcomes.
5.  **Validation Scoring**: Computes the final Priority Score (0-100) using a weighted biophysical formula.

### Structured Output Database:
Outputs are meticulously organized to allow simple, predictable fetching by the frontend:
```text
outputs/
└── pqsr/
    ├── screening_leaderboard.csv        <-- Global 24-compound ranking grid
    ├── chrysin/                         <-- Dedicated compound folder
    │   ├── vina_pose.pdbqt
    │   ├── diffdock_pose.sdf
    │   ├── validation_priority_score.json
    │   └── ...
    ├── imperatorin/
    └── ...
```

---

## 4. Continuous Integration / Workflow
1.  **Run Pipeline**: Execute `python scripts/screen_all_ligands_structured.py --target pqsr` on the VM.
2.  **Sync to GCP Bucket**: Back up the raw results to `gs://mevreon-bioai-screening-outputs/`.
3.  **Sync to Frontend**: Copy the structured outputs into the React `public/outputs/` folder.
4.  **Compile & Deploy**: Run `npm run build` inside `frontend/` and drag the `dist` folder into Vercel.

This decoupled architecture guarantees maximum compute power during generation and indestructible high-availability during presentation.
