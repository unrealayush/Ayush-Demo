# Stage 11: Gemini Evidence Passport Generator

This module aggregates the outputs from all previous stages (Stages 1-10) to generate the final "Global Evidence Passport". It produces a comprehensive, traceably-cited summary of the pipeline's computational predictions and suggests real-world validation steps.

## Input Files
- `outputs/interaction_report.json`
- `outputs/mechanism_graph.json`
- `outputs/validation_priority_score.json`
- `outputs/source_traceability.csv`
- `outputs/structure_resolution_report.json`
- `data/inputs/ligand_library.csv`
- `data/inputs/pathogen_target_registry.csv`

## Generated Passport Content
The module compiles:
1. **Executive Summary**: Synthesized natural-language overview combining the pathogen, target, ligand, priority score, mechanism, and final decision.
2. **Mechanistic Summary**: A log of disrupted pathways and phenotypes based on the graph builder.
3. **Interaction Summary**: Detailed atomic-level contacts (e.g., Hydrogen bonds at specific residues).
4. **Validation Priority Summary**: Quantitative score out of 100, strength rating, and Go/No-Go decision.
5. **Source Traceability Summary**: A matrix of the exact databases (e.g., PubChem, RCSB PDB) used to source the inputs.
6. **Recommended Next Validation Steps**: Suggested wet-lab assays (e.g., Quorum-sensing reporter assay) tailored to the specific target.
7. **Research Limitations & Disclaimer**: Mandatory disclaimer stating "Research-use-only. Not evidence of efficacy. Not clinical guidance."

## Output Formats
The module generates three files:
- `outputs/evidence_passport.json` (Machine-readable full contract)
- `outputs/evidence_passport.md` (Human-readable markdown document)
- `outputs/evidence_passport_report.json` (System generation diagnostic report)

## Testing
Run the test suite using `unittest`:
```bash
python test_passport_generator.py
```