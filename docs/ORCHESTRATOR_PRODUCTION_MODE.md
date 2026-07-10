# Pipeline Orchestrator - Production Mode Architecture

This document describes the design, execution flow, and strict validation logic of the Pipeline Orchestrator in Production Mode.

---

## 🚀 Architectural Design

The Pipeline Orchestrator (`dashboard/utils/pipeline_orchestrator.py`) acts as the single execution harness for the 10-stage AYUSH Bio-AI Docking Pipeline (Stages 0–9). 

In Production Mode, **all simulated data fallbacks, fake affinities, confidence stubs, and mock files have been permanently stripped**. The orchestrator enforces strict physical constraints: calculations must actually execute on local hardware or a remote cloud VM, and required scientific outputs must exist on disk, otherwise the pipeline fails immediately.

### ⚙️ Execution Modes

The Orchestrator supports two runtime configurations managed via the `ORCHESTRATOR_MODE` environment variable:

1.  **`LOCAL` (Workstation Validation Mode):**
    *   Looks for local executables (such as `vina` or python scripts) on the user's local path.
    *   If local executables are found, runs docking calculations locally.
    *   If local executables are missing, **it does not generate dummy files**. It performs a strict check of the disk for existing *real* calculations. If they do not exist, it aborts the run and raises a `FileNotFoundError` immediately.
2.  **`VM` (GCP Cloud Production Mode):**
    *   Executes the pipeline directly on the GCP L4 GPU Spot instance (`uc4-model-vm`) inside the `/opt/services` production path.
    *   Calls native compiled binary utilities (`/opt/services/autodock_vina/bin/vina`) and GPU model weights (`/opt/services/diffdock_l/env/bin/python`).
    *   Fails immediately with clear system errors if cloud executables, model weights, or hardware resources are preempted or missing.

---

## 📈 10-Stage Sequential Execution Flow

When `run(selection)` is triggered, the orchestrator validates inputs and executes the following sequential steps:

```text
  [Stage 0] Validate Selection (Pathogen, Target, Ligand selection)
     ↓
  [Stage 1] Ligand Preparation (ligand_preparation.py ➡️ .sdf, .pdbqt)
     ↓
  [Stage 2] Receptor Preparation (receptor_preparation.py ➡️ clean_receptor.pdb, receptor.pdbqt)
     ↓
  [Stage 3] Structure Resolver (resolve_structures.py ➡️ checks PDB or downloads; SKIPPED if exists)
     ↓
  [Stage 4] AutoDock Vina Docking (autodock_vina binary ➡️ vina_test_run_out.pdbqt, vina.log, vina_results.json)
     ↓
  [Stage 5] DiffDock-L Docking (diffdock_l Python ➡️ rank1.sdf, diffdock_results.json)
     ↓
  [Stage 6] Interaction Parser (interaction_parser.py ➡️ interaction_report.json)
     ↓
  [Stage 7] Mechanism Graph Builder (mechanism_graph_builder.py ➡️ mechanism_graph.json)
     ↓
  [Stage 8] Validation Scorer (validation_scorer.py ➡️ validation_priority_score.json)
     ↓
  [Stage 9] Evidence Passport Generator (passport_generator.py ➡️ evidence_passport.json, .md)
```

---

## 🛡️ Strict Verification Constraints

Every stage's execution is validated by asserting the existence of its required files on the disk. If a file is missing, the stage status is marked as **`FAIL`**, an exception is logged to the Execution Console, and the orchestrator halts immediately:

*   **Vina Verification:** Asserts `outputs/vina_test_run_out.pdbqt`, `outputs/vina.log`, and `outputs/vina_results.json` exist.
*   **DiffDock Verification:** Asserts `outputs/rank1.sdf` and `outputs/diffdock_results.json` exist.
*   **Interaction Verification:** Asserts `outputs/interaction_report.json` exists.
*   **Graph Verification:** Asserts `outputs/mechanism_graph.json` exists.
*   **Scorer Verification:** Asserts `outputs/validation_priority_score.json` exists.
*   **Passport Verification:** Asserts `outputs/evidence_passport.json` and `outputs/evidence_passport.md` exist.

*Zero fake scientific data is generated. All metrics represent 100% real, calculated scientific outputs.*
