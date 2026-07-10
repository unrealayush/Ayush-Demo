# Input Schema Contracts

**This file is the single source of truth for every input CSV.** Enums, `evidence_level`, the
identity-vs-context rule, and paths are defined in `contracts/vocabularies.md`. `docs/02` describes
*where the data comes from*; this file describes *the exact columns*. Enforced by `validate_contracts`
(`docs/10`, check `CHK-CSV-SCHEMA`).

Column table legend:
- **type** ∈ string, enum, float, int, iso8601, uri, smiles, path, bool
- **req** = required (Y/N); conditional rules noted under the table
- **class** = `identity` (never `synthetic_demo`) or `context` (may be `synthetic_demo`) — see vocabularies §2
- **source** = authoritative origin a fetcher/curator must use

All files live under `data/inputs/` except `source_traceability.csv` (an output under `outputs/`).

**Scenario scoping.** Input rows are populated for the **active scenario** resolved from
`configs/scenarios/scenario_registry.yaml` (`scenario_id`; see `contracts/scenario_schema.md` and
`docs/16`). The example values in the tables below are **illustrative only** — several are drawn from
the archived `archived_trikatu_prior` scenario (e.g. `AYU-TRIKATU-001`, `Piperine`, `NorA`,
`Ciprofloxacin`) and must **not** be treated as a hardcoded default. The shipped default scenario is
`primary_kuth_pseudomonas` (Costunolide / Dehydrocostus lactone → *Pseudomonas aeruginosa* LasR,
PqsR/MvfR). Curators fill registries from the active scenario's `config_components`, `organism_key`,
`target_a`, and `target_b`; identity values are still fetched/curated, never invented.

---

## Primary-key / foreign-key map

| CSV | primary key | foreign keys |
|---|---|---|
| candidate_registry.csv | `candidate_id` | — |
| ligand_library.csv | `ligand_id` | `candidate_id` → candidate_registry (only when `role=active`) |
| pathogen_target_registry.csv | `target_id` | `pathogen_context_id` → amr_context |
| amr_context.csv | `pathogen_context_id` | — |
| study_context.csv | `study_context_id` | `pathogen_context_id` → amr_context |
| assay_results.csv | composite (`candidate_id`,`ligand_id`,`comparator_ligand_id`,`pathogen_context_id`,`assay_type`) | `candidate_id`,`ligand_id`,`comparator_ligand_id` → ligand_library; `pathogen_context_id` → amr_context |
| outputs/source_traceability.csv | `artifact_id` (+`artifact_type`) | polymorphic `artifact_id` → PK of the table named by `artifact_type` |

**`antibiotic_id` is removed.** Ciprofloxacin is a row in `ligand_library.csv` with `role=comparator`;
assays reference it via `comparator_ligand_id`. The pipeline selects the comparator by `role`, never
by a hardcoded name.

---

## candidate_registry.csv  (curated public / professor input / IMPPAT)

| column | type | req | allowed/enum | class | source | example |
|---|---|---|---|---|---|---|
| candidate_id | string (PK) | Y | `^AYU-[A-Z0-9]+-\d{3}$` | identity | curator | `AYU-TRIKATU-001` |
| formulation_name | string | Y | free | context | IMPPAT/AYUSH lit | `Trikatu / Pippali / Maricha` |
| ayush_system | enum | Y | `Ayurveda\|Siddha\|Unani\|Homeopathy` | context | curator | `Ayurveda` |
| source_drug | string | Y | free | context | IMPPAT | `Piper longum / Piper nigrum` |
| botanical_name | string | Y | binomial | identity | IMPPAT/taxonomy | `Piper longum` |
| plant_part | string | N | free | context | IMPPAT | `fruit` |
| active_marker | string | Y | free | identity | IMPPAT phytochemical | `Piperine` |
| evidence_source | string | Y | free/citation | context | curator | `IMPPAT 2.0` |
| evidence_level | enum | Y | vocabularies §1 | — | curator | `curated_public` |

## ligand_library.csv  (real public data mandatory for final demo)

| column | type | req | allowed/enum | class | source | example |
|---|---|---|---|---|---|---|
| ligand_id | string (PK) | Y | `^LIG-[A-Z0-9]+$` | identity | curator | `LIG-PIPERINE` |
| candidate_id | string (FK) | N* | → candidate_registry | identity | curator | `AYU-TRIKATU-001` |
| compound_name | string | Y | free | identity | ChEMBL/PubChem | `Piperine` |
| role | enum | Y | `active\|comparator` | identity | curator | `active` |
| smiles | smiles | Y | RDKit-parseable | identity | ChEMBL/PubChem | `O=C(...)` |
| source_database | enum | Y | `ChEMBL\|PubChem\|IMPPAT` | identity | fetcher | `ChEMBL` |
| source_accession | string | Y | DB-native id | identity | fetcher | `CHEMBL159` |
| sdf_path | path | N | under data/prepared/ligands | identity (generated) | ligand-prep | `data/prepared/ligands/piperine.sdf` |
| pdbqt_path | path | N | under data/prepared/ligands | identity (generated) | ligand-prep | `data/prepared/ligands/piperine.pdbqt` |
| evidence_level | enum | Y | vocabularies §1 | — | fetcher | `real_public` |

*`candidate_id` required when `role=active`; empty for `role=comparator` (Ciprofloxacin is not an
AYUSH candidate). `smiles`/`source_accession` are never `synthetic_demo`; unfetchable → row becomes
`missing_real_data` and the pipeline hard-stops (see `memory/NO_HALLUCINATION_RULES.md`).

## pathogen_target_registry.csv  (real or curated public mandatory)

| column | type | req | allowed/enum | class | source | example |
|---|---|---|---|---|---|---|
| target_id | string (PK) | Y | `^TGT-[A-Z0-9]+$` | identity | curator | `TGT-NORA` |
| pathogen_context_id | string (FK) | Y | → amr_context | identity | curator | `PCX-MRSA-001` |
| pathogen | string | Y | free | context | curator | `MRSA` |
| organism | string | Y | binomial | identity | UniProt/NCBI | `Staphylococcus aureus` |
| target_name | string | Y | free | identity | UniProt | `NorA efflux pump` |
| gene_symbol | string | Y | free | identity | UniProt/NCBI | `norA` |
| mechanism_role | enum | Y | `efflux\|gyrase\|biofilm\|other` | context | curator | `efflux` |
| sequence_source | enum | Y | `UniProt\|NCBI` | identity | fetcher | `UniProt` |
| sequence_accession | string | Y | DB-native id | identity | fetcher | `P0A0J8` |
| preferred_structure_source | enum | Y | `RCSB_PDB\|AlphaFoldDB\|ESMFold2` | identity | resolver policy | `RCSB_PDB` |
| structure_path | path | N | under data/prepared/targets | identity (generated) | resolver | `data/prepared/targets/nora_target.pdb` |
| evidence_level | enum | Y | vocabularies §1 | — | fetcher | `real_public` |
| caution_note | string | N | free | context | resolver | `membrane transporter; low docking confidence` |

PDB IDs MUST NOT be hardcoded here; the resolver records the selected id into
`structure_resolution_report.json`.

## amr_context.csv  (curated public)

| column | type | req | allowed/enum | class | source | example |
|---|---|---|---|---|---|---|
| pathogen_context_id | string (PK) | Y | `^PCX-[A-Z0-9-]+$` | identity | curator | `PCX-MRSA-001` |
| organism | string | Y | binomial | identity | NCBI | `Staphylococcus aureus` |
| resistance_context | string | Y | free | context | AMRFinderPlus/lit | `efflux-associated` |
| gene_or_mechanism | string | Y | free | context | AMRFinderPlus/lit | `norA` |
| phenotype_context | string | N | free | context | lit | `fluoroquinolone reduced susceptibility` |
| source | string | Y | free/URL | context | curator | `NCBI Pathogen Detection` |
| evidence_level | enum | Y | vocabularies §1 | — | curator | `curated_public` |

Informs mechanism labels and passport language; does not drive docking.

## study_context.csv  (synthetic demo context acceptable)

| column | type | req | allowed/enum | class | source | example |
|---|---|---|---|---|---|---|
| study_context_id | string (PK) | Y | `^STUDY-[A-Z0-9-]+$` | identity | curator | `STUDY-MRSA-BIOFILM-001` |
| pathogen_context_id | string (FK) | N | → amr_context | identity | curator | `PCX-MRSA-001` |
| infection_model | string | Y | free | context | curator | `biofilm-high wound infection model` |
| isolate_context | string | Y | free | context | curator | `MRSA` |
| resistance_context | string | Y | free | context | curator | `efflux-associated` |
| biofilm_context | enum | Y | `none\|low\|moderate\|high` | context | curator | `high` |
| mode | enum | Y | `preclinical_discovery` | context | fixed | `preclinical_discovery` |
| evidence_level | enum | Y | vocabularies §1 | — | curator | `synthetic_demo` |

**This is never patient data.** All non-id columns are context; the default row is `synthetic_demo`.

## assay_results.csv  (real lab only if available; otherwise empty or clearly synthetic_demo)

| column | type | req | allowed/enum | class | source | example |
|---|---|---|---|---|---|---|
| candidate_id | string (FK) | Y | → candidate_registry | identity | curator | `AYU-TRIKATU-001` |
| ligand_id | string (FK) | Y | → ligand_library | identity | curator | `LIG-PIPERINE` |
| comparator_ligand_id | string (FK) | N | → ligand_library (role=comparator) | identity | curator | `LIG-CIPRO` |
| pathogen_context_id | string (FK) | Y | → amr_context | identity | curator | `PCX-MRSA-001` |
| assay_type | enum | Y | `MIC\|FICI\|biofilm_inhibition\|efflux\|cytotoxicity` | context | lab | `FICI` |
| result_value | float | N | ≥0 | identity (measurement) | lab | `0.37` |
| result_unit | string | N | free | context | lab | `index` |
| interpretation | string | N | free | context | lab | `synergy-suggestive` |
| evidence_level | enum | Y | `real_lab\|synthetic_demo\|missing_real_data` | — | lab/curator | `real_lab` |
| source | string | Y | free/citation | context | lab | `Partner lab, 2026` |

Real measurements → `real_lab`; otherwise leave empty or `synthetic_demo`, clearly labeled. A
fabricated `result_value` is forbidden.

---

## outputs/source_traceability.csv  (mandatory output)

| column | type | req | allowed/enum | class | source | example |
|---|---|---|---|---|---|---|
| artifact_type | enum | Y | `candidate\|ligand\|target\|structure\|docking_result\|passport_statement` | identity | pipeline | `ligand` |
| artifact_id | string (FK) | Y | → PK of table named by artifact_type | identity | pipeline | `LIG-PIPERINE` |
| source_name | string | Y | free | identity | fetcher | `ChEMBL` |
| source_url | uri | Y* | valid URL | identity | fetcher | `https://www.ebi.ac.uk/chembl/...` |
| accession_or_identifier | string | Y* | DB-native id | identity | fetcher | `CHEMBL159` |
| fetch_method | enum | Y | `api\|manual_curation\|generated` | identity | pipeline | `api` |
| fetched_at | iso8601 | Y | RFC3339 | identity | pipeline | `2026-06-04T12:00:00Z` |
| evidence_level | enum | Y | vocabularies §1 | — | pipeline | `real_public` |
| notes | string | N | free | context | pipeline | `selected best-resolution PDB` |

*At least one of `source_url` / `accession_or_identifier` is required unless
`evidence_level ∈ {synthetic_demo, missing_real_data}`.
