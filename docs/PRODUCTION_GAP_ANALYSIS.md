# Production Readiness Gap Analysis

**Date:** June 22, 2026
**Target:** AYUSH Bio-AI Evidence Platform (Backend & Architecture)

This document provides a comprehensive audit of the system as a mature software product, evaluating scalability, security, operational robustness, and data management.

---

## 1. New ligand onboarding
* **Status:** <span style="color:orange">**YELLOW**</span>
* **Risk:** Ligand addition requires manual modifications to static CSV files (`ligand_library.csv`) and manual generation of 3D conformers (SDF/PDBQT) placed in specific folder hierarchies before execution.
* **Impact:** High friction for scaling the library. Scientists cannot self-serve without an engineer.
* **Implementation Effort:** Medium. Requires an admin API endpoint to accept a SMILES string, automatically fetch ChEMBL/PubChem metadata, and trigger RDKit/OpenBabel conversion tasks.

## 2. New pathogen onboarding
* **Status:** <span style="color:red">**RED**</span>
* **Risk:** Pathogen data is loosely structured. There is no automated ontology mapping to resolve pathogen variants or strains dynamically.
* **Impact:** Adding a new organism breaks the predefined scenarios unless manually stitched into the UI and config registries.
* **Implementation Effort:** High. Requires integrating an NCBI Taxonomy lookup and formalizing the pathogen entity model in a relational database.

## 3. New target onboarding
* **Status:** <span style="color:orange">**YELLOW**</span>
* **Risk:** Relies on manual updates to `pathogen_target_registry.csv` and `docking_boxes.yaml`.
* **Impact:** Grid box coordinates (center X, Y, Z) must be manually calculated and entered for every new target before Vina can run.
* **Implementation Effort:** High. Requires implementing automated pocket-detection algorithms (e.g., Fpocket or P2Rank) to autonomously calculate docking boundaries.

## 4. New scenario onboarding
* **Status:** <span style="color:red">**RED**</span>
* **Risk:** Scenarios are hardcoded strings in the UI and basic mappings. There is no automated workflow orchestrator to chain multiple proteins into a single "scenario" run.
* **Impact:** Inability to run complex, multi-target disease pathways asynchronously.
* **Implementation Effort:** High. Requires a graph-based workflow engine (like Apache Airflow or Prefect) to manage complex scenario DAGs.

## 5. Dataset versioning
* **Status:** <span style="color:red">**RED**</span>
* **Risk:** PDB, SDF, and CSV files exist dynamically in folders. There is no DVC (Data Version Control) or immutable blob storage mapping.
* **Impact:** An updated structure for LasR silently overwrites the old one, destroying historical reproducibility.
* **Implementation Effort:** Medium. Implement DVC or uniquely partition AWS/GCP buckets by UUID hashes.

## 6. Traceability
* **Status:** <span style="color:green">**GREEN**</span>
* **Risk:** Source provenance is explicitly mapped in the `source_traceability.csv` and Stage 11 JSON contracts.
* **Impact:** High scientific trust. The origin of every coordinate is documented.
* **Implementation Effort:** Completed.

## 7. Audit logging
* **Status:** <span style="color:orange">**YELLOW**</span>
* **Risk:** Execution logs are tracked temporarily in memory via FastAPI dictionaries (`run_states`) but vanish upon server restart.
* **Impact:** No historical tracking of who ran what, when, or why.
* **Implementation Effort:** Low. Pipe `logging` modules to GCP Cloud Logging (Stackdriver) or a persistent ELK stack.

## 8. Authentication
* **Status:** <span style="color:red">**RED**</span>
* **Risk:** The FastAPI backend and React dashboard are completely open to the public internet on port 7860.
* **Impact:** Anyone with the IP can consume expensive L4 GPU hours or manipulate data.
* **Implementation Effort:** Medium. Implement OAuth2 / OIDC via Google Identity Platform or Firebase Auth.

## 9. User roles
* **Status:** <span style="color:red">**RED**</span>
* **Risk:** No RBAC (Role-Based Access Control).
* **Impact:** No distinction between a 'Viewer' and an 'Admin' capable of triggering deep-learning runs.
* **Implementation Effort:** Medium. Requires Auth token scopes and database user tables.

## 10. Cloud architecture
* **Status:** <span style="color:orange">**YELLOW**</span>
* **Risk:** The entire application (FastAPI, React, Vina, DiffDock, ESMFold) operates monolithically on a single Preemptible (Spot) VM.
* **Impact:** Spot terminations take the whole platform offline. Vertical scaling limit is constrained by the single VM.
* **Implementation Effort:** High. Transition to GKE (Google Kubernetes Engine) for microservices and Vertex AI for decoupled model inference.

## 11. API robustness
* **Status:** <span style="color:orange">**YELLOW**</span>
* **Risk:** Endpoints lack rate limiting, strict Pydantic validation on all parameters, and pagination for large lists.
* **Impact:** Susceptible to DDoS or out-of-memory crashes if flooded with requests.
* **Implementation Effort:** Low. Add `slowapi` rate limiters and strict Pydantic models.

## 12. Error handling
* **Status:** <span style="color:orange">**YELLOW**</span>
* **Risk:** Subprocess errors are caught and logged, but some file parsing assumes happy-paths (e.g. strict index slicing on arrays).
* **Impact:** Corrupted PDB files or malformed SMILES strings will cause hard crashes in the background tasks.
* **Implementation Effort:** Medium. Add exhaustive Try/Except blocks around all file IO and sanitize inputs.

## 13. Long-running jobs
* **Status:** <span style="color:red">**RED**</span>
* **Risk:** Handled via FastAPI `BackgroundTasks`.
* **Impact:** If the FastAPI worker process restarts or the VM is preempted, all active jobs are permanently lost.
* **Implementation Effort:** High. Migrate to Celery + Redis or GCP Cloud Tasks.

## 14. Async execution
* **Status:** <span style="color:green">**GREEN**</span>
* **Risk:** Endpoints correctly decouple HTTP request lifetimes from the deep-learning subprocess tasks.
* **Impact:** Prevents HTTP 504 Gateway Timeout errors. UI remains responsive.
* **Implementation Effort:** Completed.

## 15. Queue architecture
* **Status:** <span style="color:red">**RED**</span>
* **Risk:** None exists. Triggering DiffDock 5 times simultaneously will attempt to spawn 5 concurrent GPU processes on an L4 with only 24GB VRAM.
* **Impact:** Immediate CUDA Out-Of-Memory (OOM) crashes.
* **Implementation Effort:** High. Implement a strict job queue (Redis/RabbitMQ) with concurrency limits matching GPU VRAM.

## 16. Monitoring
* **Status:** <span style="color:red">**RED**</span>
* **Risk:** The `nvidia-smi` and uvicorn processes are unmonitored.
* **Impact:** No alerts when the GPU overheats, VRAM leaks occur, or disk space fills up with generated .cif/.sdf files.
* **Implementation Effort:** Low. Install Prometheus/Grafana or GCP Ops Agent.

## 17. Cost control
* **Status:** <span style="color:orange">**YELLOW**</span>
* **Risk:** Preemptible VMs mitigate costs, but there is no mechanism to auto-hibernate the VM when idle.
* **Impact:** Wasted compute spend running an L4 GPU 24/7 if unused.
* **Implementation Effort:** Medium. Implement GCP Cloud Functions to schedule VM power-downs outside working hours.

## 18. Backup strategy
* **Status:** <span style="color:red">**RED**</span>
* **Risk:** Output files are written to local disk (`/opt/services/outputs`).
* **Impact:** A VM disk failure or accidental deletion results in total loss of all generated predictions and reports.
* **Implementation Effort:** Low. Implement cron jobs to periodically sync the `outputs/` folder to a persistent GCS Bucket.

## 19. Reproducibility
* **Status:** <span style="color:orange">**YELLOW**</span>
* **Risk:** Python environments are managed via Conda/Mamba, but precise random seeds for DiffDock are not strictly documented or passed.
* **Impact:** Running DiffDock twice on the same compound may yield varying confidence scores, frustrating peer review.
* **Implementation Effort:** Low. Enforce deterministic seeds (`--seed 42`) on all AI model subprocess calls.

## 20. Security
* **Status:** <span style="color:red">**RED**</span>
* **Risk:** The API permits any user to run arbitrary OS-level subprocesses via `subprocess.Popen` using un-sanitized string injection in parameters.
* **Impact:** Critical Remote Code Execution (RCE) vulnerability.
* **Implementation Effort:** High. Deep sanitization of all inputs, removal of raw shell access, and sandboxing subprocesses via Docker.

---

## Prioritized Roadmap to Production

### Phase 1: Critical Stability & Security (Immediate)
1. **Authentication & Authorization (Items 8, 9)** - Lock down the port with IAP or OAuth2 immediately to prevent unauthorized GPU use.
2. **Security & Input Sanitization (Item 20)** - Secure the `subprocess` calls against RCE injections.
3. **Queue Architecture (Item 15)** - Implement a strict 1-job concurrency queue for GPU tasks to prevent CUDA OOM crashes.
4. **Backup Strategy (Item 18)** - Pipe generated outputs to Google Cloud Storage.

### Phase 2: Resilience & Tracking (Short-term)
1. **Long-running Jobs (Item 13)** - Replace FastAPI `BackgroundTasks` with Celery for persistent, restartable job tracking.
2. **Monitoring & Audit Logging (Items 7, 16)** - Connect GCP Ops Agent to track GPU utilization and user execution history.
3. **Reproducibility (Item 19)** - Hardcode seeds for all stochastic deep learning models.

### Phase 3: Scalability & Onboarding (Medium-term)
1. **New Target/Ligand Onboarding (Items 1, 3)** - Build automated ETL pipelines to fetch PubChem data and calculate docking grid-boxes algorithmically.
2. **Dataset Versioning (Item 5)** - Implement UUID-based storage partitioning.
3. **Cloud Architecture (Item 10)** - Decouple the monolith; deploy the frontend on Cloud Run and move heavy inference to Vertex AI batch jobs.

### Phase 4: Autonomous Science (Long-term)
1. **New Pathogen & Scenario Onboarding (Items 2, 4)** - Introduce Apache Airflow to orchestrate complex, multi-target disease pathways without manual config editing.