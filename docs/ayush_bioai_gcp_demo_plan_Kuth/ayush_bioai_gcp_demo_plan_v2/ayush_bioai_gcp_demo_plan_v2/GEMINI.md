# Gemini CLI Project Memory — AYUSH Bio-AI Evidence Demo

Use `AGENTS.md` as the canonical instruction file. Do not contradict it.

## Primary coding objective

Create a GCP-deployable MVP with:

- FastAPI backend
- Streamlit or React/Next.js frontend
- Cloud Run web service
- Cloud Run jobs for CPU docking baseline and data fetch
- Optional GPU VM for DiffDock-L and ESMFold2 fallback
- GCS for artifacts
- BigQuery or local SQLite for demo metadata

## Work style

Use phased execution:

1. Build data contracts
2. Build real-data fetchers
3. Build target/ligand preparation
4. Build Vina baseline first
5. Integrate DiffDock-L second
6. Build evidence passport last
7. Deploy to GCP
8. Validate with acceptance tests

## Important

Do not start with UI before data contracts and mock outputs exist. The UI must be generated from artifacts, not invented values.
