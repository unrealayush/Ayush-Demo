#!/usr/bin/env python3
"""
build_models_registry_csv.py
Generates a comprehensive CSV and Excel registry of protein-ligand interaction,
3D docking, binding affinity (Kd/Ki/IC50), and interaction scoring AI/ML models
with GitHub URLs, input compatibility, and pipeline integration roles.
"""

import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

MODELS_DATA = [
    # ── Category 1: 3D Structure & Equivariant Docking Predictors ──
    {
        "Model Name": "DiffDock / DiffDock-L",
        "Category": "3D Equivariant Docking & Diffusion",
        "GitHub Repository URL": "https://github.com/gcorso/DiffDock",
        "Required Inputs": "Protein PDB structure + Ligand SMILES / SDF",
        "Predicted Outputs / Metrics": "3D Docked Ligand Poses, Confidence Score (pLDDT / RMSD < 2Å likelihood)",
        "Input Format Compatibility": "PDB, CIF, SMILES, SDF, MOL2",
        "Pipeline Integration Role": "Generates 3D flexible ligand docking poses without rigid grid limits.",
        "Developer / Organization": "MIT / Broad Institute"
    },
    {
        "Model Name": "Boltz-1",
        "Category": "Joint Biomolecular Structure Co-Folding",
        "GitHub Repository URL": "https://github.com/boltz-community/boltz",
        "Required Inputs": "Protein FASTA sequence / PDB + Ligand SMILES",
        "Predicted Outputs / Metrics": "Joint 3D protein-ligand complex structure, PAE contact matrix, pLDDT scores",
        "Input Format Compatibility": "FASTA, PDB, SMILES",
        "Pipeline Integration Role": "De-novo co-folding of target protein and AYUSH ligand complexes.",
        "Developer / Organization": "MIT / Autonomous Research / Boltz Community"
    },
    {
        "Model Name": "Chai-1",
        "Category": "Biomolecular Structure & Interaction Prediction",
        "GitHub Repository URL": "https://github.com/chaidiscovery/chai-lab",
        "Required Inputs": "Protein Sequence + Ligand SMILES",
        "Predicted Outputs / Metrics": "Multi-chain 3D complex structure, Contact probability matrix, Interface pLDDT",
        "Input Format Compatibility": "FASTA, SMILES",
        "Pipeline Integration Role": "High-precision co-crystallization and interface contact prediction.",
        "Developer / Organization": "Chai Discovery"
    },
    {
        "Model Name": "NeuralPLexer",
        "Category": "Induced-Fit Conformational & Docking Generator",
        "GitHub Repository URL": "https://github.com/AustinBiomedical/NeuralPLexer",
        "Required Inputs": "Protein PDB / Sequence + Ligand SMILES",
        "Predicted Outputs / Metrics": "Induced-fit protein backbone motion + 3D ligand binding trajectory",
        "Input Format Compatibility": "PDB, FASTA, SMILES",
        "Pipeline Integration Role": "Models target protein active site flexibility upon ligand binding.",
        "Developer / Organization": "Caltech / Austin Biomedical"
    },

    # ── Category 2: Deep Learning Rescoring & Affinity (Kd/Ki/IC50) Predictors ──
    {
        "Model Name": "GNINA",
        "Category": "3D CNN Docking & Affinity Rescorer",
        "GitHub Repository URL": "https://github.com/gnina/gnina",
        "Required Inputs": "Protein PDB + Docked Ligand SDF / PDBQT complex",
        "Predicted Outputs / Metrics": "CNN Affinity Score (pKd / pKi), CNN Pose Score (0.0 - 1.0 probability)",
        "Input Format Compatibility": "PDB, PDBQT, SDF, MOL2",
        "Pipeline Integration Role": "Primary 3D convolutional rescorer directly on AutoDock Vina poses.",
        "Developer / Organization": "University of Pittsburgh"
    },
    {
        "Model Name": "PIGNet2",
        "Category": "Physics-Informed Graph Neural Network",
        "GitHub Repository URL": "https://github.com/drorlab/pignet",
        "Required Inputs": "3D Protein-Ligand Complex PDB + SDF",
        "Predicted Outputs / Metrics": "Physics-informed binding affinity (pKd / pIC50), Steric clash penalty score",
        "Input Format Compatibility": "PDB, SDF",
        "Pipeline Integration Role": "Filters out unphysical ligand poses and steric atomic overlaps.",
        "Developer / Organization": "KAIST / Dror Lab (Stanford)"
    },
    {
        "Model Name": "GraphBAR",
        "Category": "Graph-Based Binding Affinity Register",
        "GitHub Repository URL": "https://github.com/GraphBAR/GraphBAR",
        "Required Inputs": "3D Protein-Ligand Complex PDB / SDF",
        "Predicted Outputs / Metrics": "Graph Convolutional Binding Affinity (pKd / pKi)",
        "Input Format Compatibility": "PDB, SDF",
        "Pipeline Integration Role": "Evaluates 3D spatial adjacency distance graphs of binding pockets.",
        "Developer / Organization": "Kyoto University"
    },
    {
        "Model Name": "EquiBind",
        "Category": "SE(3)-Equivariant Rigid Body Docking",
        "GitHub Repository URL": "https://github.com/HannesStark/EquiBind",
        "Required Inputs": "Unbound Protein PDB + Unbound Ligand SMILES / SDF",
        "Predicted Outputs / Metrics": "Fast 3D ligand binding transformation, Keypoint matching score",
        "Input Format Compatibility": "PDB, SMILES, SDF",
        "Pipeline Integration Role": "Ultra-fast pre-docking screening filter (< 1 sec / pair).",
        "Developer / Organization": "MIT"
    },

    # ── Category 3: Sequence-to-SMILES & Interaction Profiling Models ──
    {
        "Model Name": "DeepDTA",
        "Category": "Deep Learning Drug-Target Affinity",
        "GitHub Repository URL": "https://github.com/hkmzkn/DeepDTA",
        "Required Inputs": "Protein FASTA sequence + Ligand SMILES string",
        "Predicted Outputs / Metrics": "Predicted binding affinity score (pKd)",
        "Input Format Compatibility": "FASTA text, SMILES string",
        "Pipeline Integration Role": "2D Sequence-based ultra-fast virtual pre-screening prior to 3D docking.",
        "Developer / Organization": "Middle East Technical University"
    },
    {
        "Model Name": "MONN",
        "Category": "Multi-Objective Neural Network for DTI",
        "GitHub Repository URL": "https://github.com/luoyanan/MONN",
        "Required Inputs": "Protein FASTA sequence + Ligand SMILES",
        "Predicted Outputs / Metrics": "Non-covalent interaction fingerprint matrix, IC50 value",
        "Input Format Compatibility": "FASTA, SMILES",
        "Pipeline Integration Role": "Maps pairwise residue-level contact probabilities from sequences.",
        "Developer / Organization": "Tsinghua University"
    },
    {
        "Model Name": "PLIP",
        "Category": "Protein-Ligand Interaction Profiler",
        "GitHub Repository URL": "https://github.com/pharmai/plip",
        "Required Inputs": "3D Docked Complex PDB",
        "Predicted Outputs / Metrics": "Hydrogen bonds, Hydrophobic contacts, Salt bridges, pi-Stacking count",
        "Input Format Compatibility": "PDB, MMCIF",
        "Pipeline Integration Role": "Atomistic non-covalent interaction fingerprint verification.",
        "Developer / Organization": "TU Dresden / PharmAI"
    }
]

def main():
    df = pd.DataFrame(MODELS_DATA)

    out_csv_paths = [
        BASE_DIR / "outputs" / "protein_ligand_models_registry.csv",
        BASE_DIR / "docs" / "protein_ligand_models_registry.csv",
        BASE_DIR / "data" / "inputs" / "protein_ligand_models_registry.csv"
    ]

    out_xlsx_paths = [
        BASE_DIR / "outputs" / "protein_ligand_models_registry.xlsx",
        BASE_DIR / "docs" / "protein_ligand_models_registry.xlsx"
    ]

    for p in out_csv_paths:
        p.parent.mkdir(parents=True, exist_ok=True)
        df.to_csv(p, index=False)
        print(f" [SUCCESS] Created CSV Registry at: {p}")

    for p in out_xlsx_paths:
        p.parent.mkdir(parents=True, exist_ok=True)
        df.to_excel(p, index=False, sheet_name="Protein-Ligand AI Models")
        print(f" [SUCCESS] Created Excel Registry at: {p}")

if __name__ == "__main__":
    main()
