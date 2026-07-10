# 05 — GCP VM + Cloud Run Deployment Plan

## Architecture

Use a hybrid deployment:

- Cloud Run Service: UI + API backend
- Cloud Run Jobs: data fetch, Vina CPU job, evidence-passport generation
- Compute Engine GPU VM: DiffDock-L and optional ESMFold2 fallback
- GCS: model artifacts, ligand/target files, output JSON
- Artifact Registry: container images
- Secret Manager: API keys and service credentials
- BigQuery or SQLite: demo metadata and source traceability

## Why hybrid?

Cloud Run is excellent for web services and finite batch jobs. DiffDock-L is heavier and may need GPU/dependency control, so a GPU VM is safer for the first high-quality demo.

## Suggested GCP resources

### Cloud Run services

- `ayush-bioai-ui`
- `ayush-bioai-api`

### Cloud Run jobs

- `ayush-fetch-real-data`
- `ayush-prep-ligands`
- `ayush-run-vina`
- `ayush-generate-passport`

### Compute Engine VM

- `ayush-diffdock-gpu-vm`

Suggested minimum:

- Ubuntu 22.04
- NVIDIA L4 or T4 GPU if available
- 100–200 GB persistent disk
- Docker + NVIDIA container runtime
- service account with read/write to GCS bucket

### Buckets

- `gs://<PROJECT_ID>-ayush-bioai-inputs`
- `gs://<PROJECT_ID>-ayush-bioai-outputs`
- `gs://<PROJECT_ID>-ayush-bioai-model-cache`

## Build flow

```bash
gcloud config set project <PROJECT_ID>
gcloud services enable run.googleapis.com artifactregistry.googleapis.com storage.googleapis.com compute.googleapis.com secretmanager.googleapis.com aiplatform.googleapis.com
```

Create Artifact Registry:

```bash
gcloud artifacts repositories create ayush-bioai   --repository-format=docker   --location=<REGION>
```

Build containers:

```bash
gcloud builds submit --tag <REGION>-docker.pkg.dev/<PROJECT_ID>/ayush-bioai/api:latest ./services/api
gcloud builds submit --tag <REGION>-docker.pkg.dev/<PROJECT_ID>/ayush-bioai/ui:latest ./services/ui
gcloud builds submit --tag <REGION>-docker.pkg.dev/<PROJECT_ID>/ayush-bioai/jobs:latest ./jobs
```

Deploy API:

```bash
gcloud run deploy ayush-bioai-api   --image <REGION>-docker.pkg.dev/<PROJECT_ID>/ayush-bioai/api:latest   --region <REGION>   --allow-unauthenticated   --set-env-vars GCS_OUTPUT_BUCKET=<OUTPUT_BUCKET>
```

Deploy UI:

```bash
gcloud run deploy ayush-bioai-ui   --image <REGION>-docker.pkg.dev/<PROJECT_ID>/ayush-bioai/ui:latest   --region <REGION>   --allow-unauthenticated   --set-env-vars API_BASE_URL=<API_URL>
```

Create Cloud Run jobs:

```bash
gcloud run jobs create ayush-run-vina   --image <REGION>-docker.pkg.dev/<PROJECT_ID>/ayush-bioai/jobs:latest   --region <REGION>   --command python   --args jobs/run_vina.py
```

Execute:

```bash
gcloud run jobs execute ayush-run-vina --region <REGION> --wait
```

## GPU VM workflow

Create VM manually or with Terraform, then:

```bash
gcloud compute ssh ayush-diffdock-gpu-vm --zone <ZONE>
```

Inside VM:

```bash
git clone <repo>
cd <repo>
docker build -t ayush-diffdock -f docker/Dockerfile.diffdock .
docker run --gpus all   -v $PWD/data:/workspace/data   -v $PWD/outputs:/workspace/outputs   ayush-diffdock python jobs/run_diffdock.py
```

Sync outputs:

```bash
gsutil -m rsync -r outputs gs://<OUTPUT_BUCKET>/outputs
```

## Deployment acceptance

- `/healthz` returns OK
- UI can load `evidence_passport.json`
- API exposes `/runs/latest`
- Vina job can execute and write output JSON
- GPU VM can generate or fetch DiffDock output
- all outputs have source traceability
