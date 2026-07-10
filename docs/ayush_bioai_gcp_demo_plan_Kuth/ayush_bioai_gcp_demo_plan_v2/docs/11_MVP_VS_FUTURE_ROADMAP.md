# 11 — MVP vs Future Roadmap (Phase boundary)

This doc keeps the immediate MVP build crisply separated from the full AYUSH multi-omics programme.
It exists so coding agents (Claude Code / Gemini CLI) never pull a future-phase capability into the
Phase 0 build. Source of the phase structure: the Mevreon AYUSH Bio-AI Platform Roadmap
(`background_docs/mevreon_ayush_bio_ai_platform_roadmap.png`).

## Phase 0 — THIS MVP (build now)

In-silico, docking-plausibility proof of concept:

`RDKit/Open Babel ligand prep → PDB/AlphaFold/ESMFold2 target resolver → DiffDock-L → AutoDock Vina
→ interaction parser → mechanism graph → combination plausibility scorer → Gemini Evidence Passport`.

Demo case: Piperine + MRSA/NorA + Ciprofloxacin, biofilm-high preclinical wound model.
Outcome: a mechanism-linked **validation-priority** hypothesis for AYUSH + antibiotic combinations
— not clinical efficacy.

## Future Roadmap — NOT MVP implementation scope

| phase | programme objective | capabilities deferred here |
|---|---|---|
| Phase 1 | Clinical Isolate & AYUSH Library Foundation | 500 MDR ESKAPE isolate repository; WGS / resistome / mobilome; curated AYUSH phytochemical library; standardized metadata + QC |
| Phase 2 | In-Vitro Response Screening | MIC/MBC; FICI checkerboard; biofilm inhibition/disruption; cytotoxicity screening |
| Phase 3 | Pathogen Multi-Omics Profiling | RNA-Seq atlas; ATP/efflux assays; LC-MS / GC-MS metabolomics; pathway & biomarker discovery |
| Phase 4 | Multimodal AI Learning Engine | integrate WGS/transcriptomics/metabolomics/MIC/FICI/biofilm; **GNINA, ESM-2, ChemBERTa/MolFormer, GNN/GraphSAGE**; interpretable AI; combination prioritization by species/resistance |
| Phase 5 | In-Vivo Host–Pathogen Translation | mouse infection model; host transcriptomics; pathogen burden & clinical score; translational biomarker discovery |
| Phase 6 | Global Evidence Passport & Clinical Readiness | biomarker panel; validation roadmap; partner onboarding; **patient stratification readiness** |

Cross-cutting enablers (apply to all phases): standardized metadata, wet-lab QC, source traceability,
reproducible bioinformatics, explainable AI.

## Out-of-scope for current code generation
- Real patient data and patient/host omics (any phase of the software MVP).
- Real in-vivo data as part of MVP execution.
- Any extra docking/ML model beyond DiffDock-L + Vina.
- The dashboard's "AI Knowledge Graph" and "Global Literature" tabs are future/stub, not Phase 0 build.

## Boundary enforcement
- Future items must NOT appear in the Phase 0 visible model stack, agent tools, or UI build.
- Any PR adding a future item to MVP code fails review.
- Cross-referenced from `docs/01` (scope table) and `memory/PROJECT_MEMORY.md` (decision log).
