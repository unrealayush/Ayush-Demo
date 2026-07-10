# 02 — Dataset Real Source Plan

## Dataset principle

Use real/public-curated data wherever possible. Synthetic fallback is allowed **only** for optional
context fields, **never** for ligand identity, target identity, or docking output. Every row carries
an `evidence_level` from the canonical five-label set (`contracts/vocabularies.md` §1).

**Column contracts are not duplicated here.** The authoritative per-column schema for every CSV lives
in `contracts/input_schemas.md`. This document covers *where the data comes from*, the *default demo
rows*, the *fetcher module* that produces it, and the *fallback behavior*. The planned fetcher
modules are specified in `docs/12_FETCHER_MODULE_SPECS.md`.

| dataset | file | reality target | fetcher (docs/12) |
|---|---|---|---|
| A — AYUSH candidate metadata | `data/inputs/candidate_registry.csv` | curated_public | `fetch_imppat_candidate_metadata.py` (curated fallback) |
| B — Ligand library | `data/inputs/ligand_library.csv` | **real public mandatory** | `fetch_chembl_ligands.py` (+`fetch_pubchem_ligands.py` fallback) |
| C — Pathogen target registry | `data/inputs/pathogen_target_registry.csv` | **real/curated public mandatory** | `fetch_uniprot_targets.py`, `fetch_rcsb_structures.py`, `fetch_alphafold_structures.py` |
| D — AMR/resistance context | `data/inputs/amr_context.csv` | curated_public | `fetch_amr_context.py` |
| E — Study context | `data/inputs/study_context.csv` | synthetic_demo acceptable | curator (no live fetch) |
| F — Optional assay evidence | `data/inputs/assay_results.csv` | real_lab if available else empty/synthetic | curator (lab input) |
| G — Source traceability | `outputs/source_traceability.csv` | generated (mandatory) | `build_source_traceability.py` |

---

## Dataset A — AYUSH candidate and phytochemical metadata

- **Preferred source:** IMPPAT 2.0 (Indian medicinal plant–phytochemical associations); AYUSH
  literature manually curated when an IMPPAT row is incomplete.
- **Default row:** `candidate_id=AYU-TRIKATU-001`, `formulation_name=Trikatu / Pippali / Maricha`,
  `source_drug=Piper longum / Piper nigrum`, `active_marker=Piperine`.
- **Fallback:** if the IMPPAT fetch is unavailable, manually curate from the professor-provided table
  and label as `curated_public` (per `contracts/vocabularies.md`), not as a real database record.

## Dataset B — Ligand library

- **Compounds:** Piperine (`role=active`), Ciprofloxacin (`role=comparator`).
- **Preferred source:** ChEMBL web services; optional PubChem; IMPPAT 3D structure for phytochemicals
  when available.
- **Rule:** do not invent SMILES. If the automated fetch fails, require manual curation with source
  URL/accession; if neither is possible, write a `missing_real_data` row and hard-stop (ligand
  identity is mandatory).

## Dataset C — Pathogen target registry

- **Targets:** primary = NorA efflux pump (*S. aureus* / MRSA context); comparator = DNA gyrase /
  GyrA context for Ciprofloxacin.
- **Preferred source:** UniProt / NCBI protein for sequence; RCSB PDB for experimental structures;
  AlphaFold DB for predicted; ESMFold2 only if PDB/AlphaFold are unavailable or poor.
- **No-hallucination rule:** do not hardcode PDB IDs. The fetcher/resolver queries and records the
  selected identifier into `outputs/structure_resolution_report.json`.

## Dataset D — AMR/resistance context

- **Preferred source:** NCBI AMRFinderPlus / Pathogen Detection for real AMR mechanism context;
  literature/manual curation for NorA/efflux and MRSA biofilm context.
- **MVP use:** informs mechanism labels and evidence-passport language; **does not drive docking**.

## Dataset E — Study context

- **Default row:** `study_context_id=STUDY-MRSA-BIOFILM-001`, `infection_model=biofilm-high wound
  infection model`, `isolate_context=MRSA`, `resistance_context=efflux-associated`,
  `biofilm_context=high`, `mode=preclinical_discovery`, `evidence_level=synthetic_demo`.
- **Note:** this is **not patient data**.

## Dataset F — Optional assay evidence

- **Rule:** if the partner lab provides real MIC/FICI/biofilm results, include them as `real_lab`.
  Otherwise leave empty or `synthetic_demo`, clearly labeled. The comparator is referenced via
  `comparator_ligand_id` (→ `ligand_library`, `role=comparator`); there is no `antibiotic_id`.

## Dataset G — Source traceability

- **Mandatory output.** Every fetched/curated/generated artifact writes a row (see
  `contracts/input_schemas.md`). Built by `build_source_traceability.py` and checked by
  `validate_contracts` (`CHK-TRACE-INPUTS`, `CHK-TRACE-NUMBERS`).
