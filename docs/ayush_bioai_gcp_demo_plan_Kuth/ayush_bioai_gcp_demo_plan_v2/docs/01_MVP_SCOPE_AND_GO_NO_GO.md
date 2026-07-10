# 01 — MVP Scope and Go/No-Go

## MVP objective

Create a live demo that shows how Mevreon converts an AYUSH candidate into a mechanism-linked
validation package against an AMR bacterial target. **Phase 0 only** — the full multi-omics
programme is roadmap context (`docs/11`), not build scope.

## Scope boundary (Phase 0 vs Future)

| capability | MVP (Phase 0) | Future Roadmap — see docs/11 |
|---|---|---|
| Demo case Trikatu/Piperine → MRSA/NorA → Ciprofloxacin | ✅ build now | — |
| RDKit/Open Babel ligand prep | ✅ | — |
| PDB/AlphaFold/ESMFold2 structure resolver | ✅ | — |
| DiffDock-L + AutoDock Vina | ✅ | — |
| Interaction parser + mechanism graph | ✅ | — |
| Combination plausibility scorer | ✅ | — |
| Gemini Evidence Passport | ✅ | — |
| GCP Cloud Run + GPU VM deployment | ✅ | — |
| GNINA rescoring | — | Phase 4 |
| ESM-2 / ChemBERTa / MolFormer embeddings | — | Phase 4 |
| GNN / GraphSAGE | — | Phase 4 |
| WGS / resistome repository | — | Phase 1 |
| MIC/FICI/biofilm/cytotoxicity screening | — | Phase 2 |
| RNA-Seq atlas, LC/GC-MS metabolomics | — | Phase 3 |
| Multimodal AI training engine | — | Phase 4 |
| In-vivo / host omics | — | Phase 5 |
| Patient data / patient stratification / clinical readiness | — | Phase 6 (out of all software-MVP scope) |
| Dashboard "AI Knowledge Graph" / "Global Literature" tabs | future/stub only | later |

## Go/No-Go gates

Each gate maps to machine-checkable `validate_contracts` checks (`docs/10`). A gate is **Go** only
when its checks return exit 0.

| gate | intent | validate_contracts checks |
|---|---|---|
| **Gate 0 (NEW)** | contracts validate; inputs structurally sound | CHK-CSV-SCHEMA, CHK-EVL-VALUESET, CHK-CONFIG-CONSISTENCY |
| **Gate 1** | real ligand (Piperine, Ciprofloxacin) + MRSA/NorA target source identified; traceability complete | CHK-TRACE-INPUTS, CHK-IDENTITY-NOSYNTH, CHK-NOHARDCODE-ID, CHK-EVL-RUNMODE-LEGAL |
| **Gate 2** | usable structure (PDB/AlphaFold/ESMFold2) + quality metadata + membrane caution; else structure_pending | CHK-STRUCT-PROVENANCE, CHK-MISSING-DATA |
| **Gate 3** | DiffDock pose+confidence and Vina score+pose serialized to JSON | CHK-JSON-SCHEMA(diffdock,vina), CHK-SCORE-PROVENANCE, CHK-RUNSTATUS-RUNMODE, CHK-MOCK-CONSISTENCY |
| **Gate 4** | UI reads JSON, no hardcoded score, disclaimer visible | CHK-UI-NUMBER-TRACE, CHK-SCORE-PROVENANCE, CHK-DISCLAIMER, CHK-TRACE-NUMBERS |
| **Gate 5** | synergy called "combination plausibility", wet-lab checklist visible, no patient/clinical claims | CHK-FORBIDDEN-LANG, CHK-ALLOWED-CLAIM, CHK-DECISION-VALUESET, CHK-JSON-SCHEMA(passport) |

## Demo bar (locked)

The deliverable ministry demo runs **`RUN_MODE=demo` over REAL artifacts** (real fetched data + real
executed DiffDock-L/Vina; GPU VM on the critical path). `run_status=mock` is **forbidden** in the
demo; Gate 5 runs with `--strict-warn`. If a real structure/fetch genuinely fails, the demo shows
`structure_pending` / `missing_real_data` honestly — it never fabricates a value. `mock` mode exists
for development only.
