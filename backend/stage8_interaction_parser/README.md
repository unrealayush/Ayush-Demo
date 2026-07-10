# Stage 8: Interaction Parser

This module analyzes the 3D coordinates from molecular docking outputs to detect non-covalent interactions between the receptor and ligand.

## Input Files
- `--receptor`: PDB file of the clean receptor target.
- `--ligand`: PDBQT or SDF file containing the docked ligand pose.
- `--target_id`: Identifier for the target (e.g., `lasr`).
- `--ligand_id`: Identifier for the ligand (e.g., `costunolide`).
- `--out_dir`: Directory to store the output JSON reports.

## Interaction Detection Logic

The parser uses simple Euclidean distance-based heuristics to classify molecular interactions:

1. **Hydrogen Bonds (`hydrogen_bond`)**
   - Receptor atoms (N, O, S) within 3.5 Å of Ligand atoms (N, O, S, F, C).

2. **Hydrophobic Contacts (`hydrophobic`)**
   - Receptor Carbon (C) atoms in hydrophobic residues (ALA, VAL, LEU, ILE, MET, PHE, TRP, PRO, TYR) within 4.5 Å of Ligand Carbon (C) atoms.

3. **Pi Stacking (`pi_stacking`)**
   - Receptor Carbon (C) atoms in aromatic residues (PHE, TYR, TRP, HIS) within 4.5 Å of Ligand Carbon (C) atoms. Note: If an aromatic residue matches the hydrophobic criteria, it is categorized as hydrophobic.

4. **Salt Bridges (`salt_bridge`)**
   - Receptor Nitrogen (N) atoms in positive residues (ARG, LYS, HIS) within 4.0 Å of Ligand Oxygen (O) atoms.
   - Receptor Oxygen (O) atoms in negative residues (ASP, GLU) within 4.0 Å of Ligand Nitrogen (N) atoms.

## Output JSON Contracts

The module generates two JSON reports exactly matching the defined contracts:
- `outputs/interaction_report.json`
- `outputs/interaction_parser_report.json`

## Testing
Run the test suite using `unittest`:
```bash
python test_interaction_parser.py
```