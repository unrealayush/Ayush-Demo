# Output JSON Contracts

## diffdock_results.json

```json
{
  "run_id": "string",
  "complex_name": "string",
  "target_id": "string",
  "ligand_id": "string",
  "model_name": "DiffDock-L",
  "model_version_or_git_commit": "string",
  "top_pose_file": "string",
  "confidence_score": 0.0,
  "confidence_band": "low|moderate|high",
  "run_status": "success|failed|mock",
  "notes": "string"
}
```

## vina_results.json

```json
{
  "run_id": "string",
  "target_id": "string",
  "ligand_id": "string",
  "model_name": "AutoDock Vina",
  "best_affinity_kcal_mol": 0.0,
  "pose_file": "string",
  "exhaustiveness": 8,
  "search_box": {},
  "run_status": "success|failed|mock",
  "notes": "string"
}
```

## combination_plausibility.json

```json
{
  "run_id": "string",
  "candidate": "string",
  "combination": "string",
  "pathogen_context": "string",
  "ai_combination_plausibility": 0.0,
  "validation_priority_score": 0.0,
  "confidence_band": "low|moderate|moderate-high|high",
  "not_synergy": true,
  "required_validation": []
}
```
