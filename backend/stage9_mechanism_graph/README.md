# Stage 9: Mechanism Graph Builder

This module transforms the parsed molecular interactions (from Stage 8) and the target metadata (from registries) into a structured node-edge graph representation. This graph maps the biological consequence of a compound's binding event to a specific target.

## Input Files
- `--interaction_report`: JSON file containing parsed interactions from Stage 8 (e.g., `outputs/interaction_report.json`).
- `--target_registry`: CSV registry of targets (e.g., `data/inputs/pathogen_target_registry.csv`).
- `--study_context`: (Optional) CSV file defining specific pathways or phenotypes for targets. Defaults to `data/inputs/study_context.csv`.

## Graph Generation Logic
The builder maps targets to biological functions using a predefined mapping (or the `study_context.csv` if available):
- `lasr` -> Quorum Sensing (Pathway) -> Biofilm Maturation (Phenotype)
- `pqsr` / `pqsr_mvfr` -> Quorum Sensing -> Virulence & Persistence
- `agra` -> Virulence Regulation -> Biofilm Initiation
- `srta` -> Adhesion / Biofilm Initiation -> Surface Colonization

It generates four types of nodes:
1. `compound`: The ligand (e.g., Costunolide).
2. `target`: The protein receptor (e.g., LasR).
3. `pathway`: The biological pathway (e.g., Quorum Sensing).
4. `phenotype`: The resulting phenotype (e.g., Biofilm Maturation).

It connects these nodes with directed edges, dynamically injecting the strongest interaction type from Stage 8 into the compound-target binding relation (e.g., `binds_to (Hydrogen bond TRP60)`).

## Output JSON Contracts
The module generates two JSON reports matching the defined Stage 9 contract:
- `outputs/mechanism_graph.json`
- `outputs/mechanism_graph_report.json`

## Testing
Run the test suite using `unittest`:
```bash
python test_mechanism_graph.py
```