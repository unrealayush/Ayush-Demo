# Output JSON Contracts

**Single source of truth for every output JSON/Markdown artifact.** Enums (`confidence_band`,
`run_status`, `structure_status`, `evidence_level`), the provenance convention, and scoring scales
are defined in `contracts/vocabularies.md`. Allowed `validation_decision` strings and forbidden
language live in `contracts/scientific_language.yaml`. Enforced by `validate_contracts`
(`docs/10`, check `CHK-JSON-SCHEMA`).

**Global rules for every file below**
- Every file carries `run_id` (→ `run_manifest.json.run_id`) and `schema_version` (e.g. `"1.0.0"`).
- Every field marked **prov** carries a sibling `provenance.<field>` (vocabularies §6).
- Score/pose fields are **required only when `run_status=success`**; on `failed`/`skipped`/`mock`
  they are absent/null and never fabricated.

---

## run_manifest.json
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| schema_version | string | Y | — |
| created_at | iso8601 | Y | — |
| scenario_id | string | Y | resolved active scenario; → `scenario_registry.yaml` (vocabularies §7b) |
| demo_case | string | N | legacy label; derive from `scenario_id` when present |
| run_mode | enum | Y | vocabularies §7 |
| git_commit | string | Y | — |
| pipeline_steps | array<{step_name, status}> | Y | status ∈ run_status |
| input_files | array<path> | Y | — |
| output_files | array<path> | Y | — |

## input_validation_report.json
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| valid_inputs | bool | Y | true ⇒ all three error arrays empty |
| files_checked | array<path> | Y | — |
| row_counts | object<file,int> | Y | — |
| schema_errors | array<{file,row,column,error}> | Y | — |
| fk_violations | array<{file,row,fk_column,missing_value}> | Y | — |
| identity_synthetic_violations | array<{file,row,column}> | Y | identity column set to synthetic_demo |
| evidence_level_summary | object<label,count> | Y | labels from vocabularies §1 |

## ligand_prep_report.json
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| ligand_id | string (FK) | Y | → ligand_library |
| tool | enum | Y | `RDKit\|OpenBabel` |
| parse_ok | bool | Y | — |
| conformer_generated | bool | Y | — |
| pdbqt_generated | bool | Y | — |
| sdf_path / pdbqt_path | path | Y if success | **prov** |
| run_status | enum | Y | run_status |
| notes | string | N | — |

## target_selection.json
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| target_id | string (FK) | Y | → pathogen_target_registry · **prov** |
| organism | string | Y | **prov** |
| gene_symbol | string | Y | **prov** |
| mechanism_role | enum | Y | input_schemas §pathogen · **prov** |
| pathogen_context_id | string (FK) | Y | → amr_context · **prov** |
| structure_status | enum | Y | structure_status |
| selection_reason | string | Y | — |

## structure_resolution_report.json
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| target_id | string (FK) | Y | → pathogen_target_registry |
| structure_status | enum | Y | `resolved\|structure_pending\|failed` |
| resolved_source | enum | Y if resolved | `RCSB_PDB\|AlphaFoldDB\|ESMFold2` · **prov** |
| resolved_identifier | string | Y if resolved | e.g. PDB id / AF accession · **prov** |
| structure_path | path | Y if resolved | data/prepared/targets/* · **prov** |
| quality_metric_name | string | Y if resolved | e.g. `resolution_A`/`pLDDT` · **prov** |
| quality_metric_value | float | Y if resolved | **prov** |
| membrane_caution | bool | Y | true required for NorA |
| caution_note | string | N | — |
| run_status | enum | Y | run_status |

## diffdock/diffdock_results.json
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| complex_name | string | Y | — |
| target_id / ligand_id | string (FK) | Y | → registries |
| model_name | const | Y | `DiffDock-L` |
| model_version_or_git_commit | string | Y | — |
| top_pose_file | path | Y if success | outputs/diffdock/top_pose.sdf · **prov** |
| confidence_score | float | Y if success | pose confidence only · **prov** |
| confidence_band | enum | Y if success | confidence_band · **prov** |
| run_status | enum | Y | run_status |
| notes | string | N | — |

## vina/vina_results.json
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| target_id / ligand_id | string (FK) | Y | → registries |
| model_name | const | Y | `AutoDock Vina` |
| best_affinity_kcal_mol | float | Y if success | docking energy, not affinity · **prov** |
| pose_file | path | Y if success | outputs/vina/vina_pose.pdbqt · **prov** |
| exhaustiveness | int | Y | ≥1 · **prov** |
| search_box | object{center_x,y,z,size_x,y,z} | Y | **prov** |
| run_status | enum | Y | run_status |
| notes | string | N | — |

## interaction_summary.json
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| target_id / ligand_id | string (FK) | Y | → registries |
| predicted_contacts | array<{residue,atom,distance_A,interaction_type}> | Y | interaction_type ∈ `hbond\|hydrophobic\|pi\|salt_bridge\|other` · **prov** |
| interaction_types | array<enum> | Y | **prov** |
| residue_summary | array<{residue,role}> | Y | **prov** |
| pocket_quality | enum | Y | confidence_band or `not_assessed` · **prov** |
| target_mechanism | string | Y | → amr_context · **prov** |
| validation_needed | bool | Y | — |
| source_pose | enum | Y | `diffdock\|vina` · **prov** |

## mechanism_graph.json  (NEW — the dashboard's mechanism graph)
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| schema_version | string | Y | — |
| nodes | array<node> | Y | — |
| node.id | string | Y | — |
| node.type | enum | Y | `ayush_candidate\|active_marker\|ligand\|target\|amr_mechanism\|biofilm_context\|comparator\|validation_action` |
| node.label | string | Y | — |
| node.ref_id | string (FK) | Y | → PK in source table · **prov** |
| edges | array<edge> | Y | — |
| edge.source / edge.target | string | Y | → node.id |
| edge.relation | enum | Y | `active_marker_of\|is_ligand\|docks_against\|associated_with\|modulates\|comparator_for\|requires_validation` · **prov** |
| edge.evidence_level | enum | Y | vocabularies §1 · **prov** |

Every node/edge asserting a scientific relationship carries provenance; relationships derived from
`synthetic_demo` context carry `evidence_level=synthetic_demo` so the UI badges them.

## combination_plausibility.json
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| candidate | string (FK candidate_id) | Y | → candidate_registry |
| combination | string | Y | — |
| pathogen_context | string (FK pathogen_context_id) | Y | → amr_context |
| ai_combination_plausibility | float | Y | 0.0–1.0 · prioritization, not synergy · **prov** |
| validation_priority_score | float | Y | 0–100 display (vocabularies §5) · **prov** |
| confidence_band | enum | Y | confidence_band · **prov** |
| score_components | object{docking,amr_relevance,mechanism_clarity,study_fit,assay_evidence,uncertainty_penalty} | Y | each 0.0–1.0 · **prov** |
| not_synergy | const bool | Y | `true` |
| required_validation | array<string> | Y | non-empty |

## evidence_passport.json  (see docs/07 for sections)
| field | type | req | enum/notes |
|---|---|---|---|
| run_id | string | Y | — |
| created_at | iso8601 | Y | — |
| scenario_id | string | Y | resolved active scenario; → `scenario_registry.yaml` (vocabularies §7b) |
| demo_case | string | N | legacy label; derive from `scenario_id` when present |
| candidate | object | Y | mirrors candidate_registry row · **prov** |
| pathogen_target | object | Y | mirrors target row · **prov** |
| antibiotic_comparator | object | N | mirrors comparator ligand row when the scenario has one; null when `comparator_control` is null · **prov** |
| docking_summary | object | Y | embeds diffdock+vina key numbers · **prov** |
| interaction_summary | object | Y | **prov** |
| mechanism_graph_ref | path | Y | → outputs/mechanism_graph.json |
| combination_plausibility | object | Y | **prov** |
| validation_decision | enum | Y | scientific_language.yaml allowed_validation_decisions · **prov** |
| wet_lab_plan | array<string> | Y | default 6-item checklist (docs/07) |
| limitations | array<string> | Y | non-empty |
| source_traceability | array | Y | embeds/refs source_traceability.csv |
| disclaimer | const string | Y | scientific_language.yaml canonical_disclaimer |

`evidence_passport.md` is the human render of the same content (both required).

## validation_report.json  (produced by validate_contracts — see docs/10)
| field | type | req | enum/notes |
|---|---|---|---|
| schema_version | string | Y | — |
| validator_version | string | Y | — |
| run_id / run_mode / phase | string/enum | Y | — |
| overall | object{exit_code,result,blocker_failures,warn_count,checks_run,checks_skipped} | Y | result ∈ PASS/FAIL |
| checks | array<{check_id,status,severity,artifacts_inspected,findings[]}> | Y | status ∈ PASS/FAIL/WARN/SKIPPED |
| go_no_go | object<gate,status> | Y | gate0..gate5 |
