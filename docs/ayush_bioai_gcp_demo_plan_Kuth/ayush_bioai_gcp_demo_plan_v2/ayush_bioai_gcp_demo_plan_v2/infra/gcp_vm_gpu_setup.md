# GPU VM Setup for DiffDock-L / Optional ESMFold2

## Recommended first-demo VM

- Machine: G2/L4 or N1/T4 class depending on regional availability and quota
- OS: Ubuntu 22.04
- Disk: 100–200 GB
- Install: Docker, NVIDIA drivers, NVIDIA container runtime
- Service account: read/write to GCS input/output buckets

## VM execution

```bash
git clone <repo>
cd <repo>
docker build -t ayush-diffdock -f docker/Dockerfile.diffdock .
docker run --gpus all   -v $PWD/data:/workspace/data   -v $PWD/outputs:/workspace/outputs   ayush-diffdock python jobs/run_diffdock.py
```

## Sync output

```bash
gsutil -m rsync -r outputs gs://$PROJECT_ID-ayush-bioai-outputs/outputs
```
