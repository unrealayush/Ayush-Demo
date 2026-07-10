# Input Schema Contracts

## candidate_registry.csv

```csv
candidate_id,formulation_name,ayush_system,source_drug,botanical_name,plant_part,active_marker,evidence_source,evidence_level
```

## ligand_library.csv

```csv
ligand_id,compound_name,role,smiles,source_database,source_accession,sdf_path,pdbqt_path,evidence_level
```

## pathogen_target_registry.csv

```csv
target_id,pathogen,organism,target_name,gene_symbol,mechanism_role,sequence_source,sequence_accession,preferred_structure_source,structure_path,evidence_level,caution_note
```

## study_context.csv

```csv
study_context_id,infection_model,isolate_context,resistance_context,biofilm_context,mode,evidence_level
```

## source_traceability.csv

```csv
artifact_type,artifact_id,source_name,source_url,accession_or_identifier,fetch_method,fetched_at,evidence_level,notes
```
