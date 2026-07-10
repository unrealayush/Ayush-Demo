# Stage 10: Validation Priority Scorer

This module calculates a composite Validation Priority Score (0-100) combining computational evidence from Vina (docking affinity), DiffDock-L (AI pose confidence), and the Interaction Parser (molecular contacts).

## Input Files
- `--interaction_report`: JSON file containing detected interactions (e.g., `outputs/interaction_report.json`).
- `--mechanism_graph`: JSON file mapping the mechanism (e.g., `outputs/mechanism_graph.json`).
- `--vina_report` (or fallback): JSON file containing Vina affinity metrics.
- `--diffdock_report` (or directory): JSON file or directory containing DiffDock-L confidence scores.

## Scoring Model Logic

The final validation priority score out of 100 is built on three components:

1. **Affinity Contribution (Max 40 points)**
   - Vina affinity ranges roughly from 0 (poor) to -12 kcal/mol (excellent).
   - Scored linearly up to 40 points for -12 kcal/mol.

2. **DiffDock Confidence Contribution (Max 35 points)**
   - Expected range from -2.0 to +2.0.
   - Normalized and mapped out of 35 points.

3. **Interaction Contribution (Max 25 points)**
   - 5 points per Hydrogen Bond.
   - 2 points per Hydrophobic Contact.
   - Capped at 25 points.

### Decision Bands
- **Score >= 80**: Prioritize for wet-lab validation
- **Score >= 60**: Consider for wet-lab validation
- **Score < 60**: Review manually

## Output JSON Contracts
The module generates two JSON reports exactly matching the Stage 10 contract:
- `outputs/validation_priority_score.json`
- `outputs/validation_priority_report.json`

## Testing
Run the test suite using `unittest`:
```bash
python test_validation_scorer.py
```