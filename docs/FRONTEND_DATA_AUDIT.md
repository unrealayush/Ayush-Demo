# Frontend Production-Readiness Data Audit

**Date:** June 22, 2026
**Target:** AYUSH Bio-AI Evidence Dashboard (React Frontend)

## Overview
The recent visual refactoring successfully matched the `reference_dashboard.png` specification layout. However, in the process of matching the exact visual structure, multiple data bindings were replaced with hardcoded text and placeholders. This audit identifies components requiring reconnection to the Stage 8-11 JSON contracts.

## Audit Matrix

### 1. Header & Top Bar Metadata
* **Component:** Date/Time Timestamp
* **Data Source:** Browser/System Time
* **API Endpoint:** None (Local JS)
* **Current Status:** C - Hardcoded (`May 28, 2025 10:30 AM IST`)
* **Required Fix:** Replace with dynamically generated `new Date().toLocaleString()`.

* **Component:** Scenario Selector
* **Data Source:** Target Registry (`scenario_id`)
* **API Endpoint:** `/api/targets`
* **Current Status:** C - Hardcoded (`Scenario: Kuth (New)`)
* **Required Fix:** Bind to `activeTgt?.scenario_id`.

### 2. Left Panel: Demo Inputs
* **Component:** AYUSH Candidate Card
* **Data Source:** Ligand Registry
* **API Endpoint:** `/api/ligands`
* **Current Status:** C - Hardcoded text (`Costunolide + Dehydrocostus lactone`, `Source: Saussurea lappa (Kuth)`)
* **Required Fix:** Bind title to `activeLig?.compound_name` and ID to `pubchem_cid`.

* **Component:** Pathogen Target Card
* **Data Source:** Target Registry
* **API Endpoint:** `/api/targets`
* **Current Status:** C - Hardcoded subtitles and tags (`Targets: LasR... PqsR/MvfR`, `Quorum Sensing`)
* **Required Fix:** Retrieve dynamic aliases and labels from `activeTgt`.

* **Component:** Antibiotic Comparator & Study Context
* **Data Source:** Target Registry / Application Config
* **API Endpoint:** N/A
* **Current Status:** C - Hardcoded (`Ciprofloxacin`, `Biofilm-high`)
* **Required Fix:** Extract from context database or remove if unsupported by backend state.

### 3. Center Panel: Bio-AI Mechanism Layer
* **Component:** Molecular Docking Cards (A, B, C)
* **Data Source:** Vina Report, DiffDock Results, Interaction Report
* **API Endpoint:** `/api/vina-report`, `/api/diffdock-results`, `/api/interaction-report`
* **Current Status:** B - Placeholder Images & Hardcoded Metrics (`-8.7 kcal/mol`, `π-π stacking`)
* **Required Fix:** Rebind `Docking Energy` to `validationScore.metrics.affinity_contribution` (or direct Vina affinity). Replace Wikipedia placeholder image with `MolecularViewer` component (or dynamic PNG rendering).

* **Component:** AI-Derived Mechanism Graph
* **Data Source:** Mechanism Graph Builder
* **API Endpoint:** `/api/mechanism-graph`
* **Current Status:** D - Broken (Data is passed, but container fails to render due to CSS constraints or height collapsing)
* **Required Fix:** Fix `h-full` / `min-h` CSS constraints on the parent wrapper so `reactflow` calculates canvas dimensions properly.

* **Component:** Mechanistic Hypothesis Overlay
* **Data Source:** Evidence Passport (Executive Summary)
* **API Endpoint:** `/api/evidence-passport`
* **Current Status:** C - Hardcoded (`Kuth actives may inhibit quorum sensing...`)
* **Required Fix:** Bind to `evidencePassport?.executive_summary`.

### 4. Right Panel: Global Evidence Passport
* **Component:** Validation Priority Score (Number & Donut Chart)
* **Data Source:** Validation Scorer
* **API Endpoint:** `/api/validation-score`
* **Current Status:** A - Real Data Driven (Partially bounded to `validationScore?.validation_priority_score`)
* **Required Fix:** None required for the number, works as intended.

* **Component:** Decision & Evidence Strength
* **Data Source:** Validation Scorer
* **API Endpoint:** `/api/validation-score`
* **Current Status:** C - Hardcoded (`Advance to Phase 1B wet-lab validation`, `Moderate-high preclinical plausibility`)
* **Required Fix:** Rebind to `validationScore?.decision` and `validationScore?.evidence_strength`.

* **Component:** Sub-score Horizontal Bar Charts
* **Data Source:** Validation Scorer (`metrics`)
* **API Endpoint:** `/api/validation-score`
* **Current Status:** C - Hardcoded (`AMR Relevance 88/100`, etc.)
* **Required Fix:** Map UI bars to `validationScore.metrics` (affinity, confidence, interaction contributions).

* **Component:** Top Ranked Output
* **Data Source:** DiffDock / Vina Arrays
* **API Endpoint:** N/A (Derived from arrays)
* **Current Status:** C - Hardcoded (`#1 Costunolide + Ciprofloxacin`)
* **Required Fix:** Map to dynamic ranking loops.

* **Component:** Next Validation Suggested Workflow
* **Data Source:** Evidence Passport
* **API Endpoint:** `/api/evidence-passport`
* **Current Status:** C - Hardcoded (`MIC Assay`, `Biofilm Assay`, etc.)
* **Required Fix:** Restore `.map()` loop over `evidencePassport?.next_validation_steps`.

### 5. Bottom Panel: Source Traceability
* **Component:** Traceability Matrix
* **Data Source:** Evidence Passport
* **API Endpoint:** `/api/evidence-passport`
* **Current Status:** D - Broken / Replaced by static buttons.
* **Required Fix:** Restore mapping of `evidencePassport?.traceability_matrix` to generate actual source citation cards (PubChem, PDB, etc.) above the disclaimer.