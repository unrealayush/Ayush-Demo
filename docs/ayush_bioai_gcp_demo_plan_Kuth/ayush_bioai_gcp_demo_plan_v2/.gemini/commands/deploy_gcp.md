# Gemini CLI Command Template — Deploy GCP

Prompt:

Read `docs/05_GCP_VM_CLOUD_RUN_DEPLOYMENT_PLAN.md`, `docs/13_ENV_VAR_CONFIG_CONTRACT.md`, and `infra/`.
Generate/verify deployment scripts for:
- Artifact Registry
- Cloud Run API service
- Cloud Run UI service
- Cloud Run jobs (render `job-vina.yaml` via `envsubst`)
- GCS buckets (derived `gs://${PROJECT_ID}-ayush-bioai-*` convention)
- GPU VM runbook (DiffDock-L / ESMFold2)

Rules (env-var-only, per `docs/13`):
- No literal `PROJECT_ID`, `REGION`, `ZONE`, `SERVICE_ACCOUNT`, or bucket names in any file.
- Pass `--service-account ${SERVICE_ACCOUNT}` and the full `--set-env-vars` set on every deploy/job.
- Secrets via Secret Manager `--set-secrets`, never literals.
- Deploy is gated on `validate_contracts` (gcp-deployment phase, `CHK-ENV-ONLY`) passing.
- On failed acceptance, roll back Cloud Run traffic to the prior healthy revision; never serve
  fabricated data.
