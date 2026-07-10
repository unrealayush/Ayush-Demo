# JSON Contracts & Architecture for Missing Pipeline Stages (8-11)

This document outlines the strict JSON data contracts, file inputs/outputs, and frontend consumption mapping for the four missing post-processing and analysis stages of the AYUSH Bio-AI MVP.

---

## Stage 8: Interaction Parser

**Purpose:** Analyzes the final 3D coordinates from docking outputs to identify non-covalent interactions (hydrogen bonds, hydrophobic contacts, pi-stacking, salt bridges) between the ligand and receptor.

### 1. Input Files
- `outputs/vina_test_run_out.pdbqt` (Top Vina pose)
- `outputs/diffdock_test_run/docked/rank1_confidence-*.sdf` (Top DiffDock pose)
- `data/prepared/targets/{target_id}/clean_receptor.pdb` (Original target mesh)

### 2. Output Files
- `outputs/interaction_report.json`

### 3. JSON Schema
```json
{
  "type": "object",
  "required": ["status", "target_id", "ligand_id", "interactions", "summary"],
  "properties": {
    "status": { "type": "string" },
    "target_id": { "type": "string" },
    "ligand_id": { "type": "string" },
    "interactions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": { "type": "string", "enum": ["hydrogen_bond", "hydrophobic", "pi_stacking", "salt_bridge"] },
          "receptor_residue": { "type": "string" },
          "receptor_chain": { "type": "string" },
          "distance_angstroms": { "type": "number" }
        }
      }
    },
    "summary": {
      "type": "object",
      "properties": {
        "total_h_bonds": { "type": "integer" },
        "total_hydrophobic": { "type": "integer" }
      }
    }
  }
}
```

### 4. Example JSON
```json
{
  "status": "SUCCESS",
  "target_id": "lasr",
  "ligand_id": "costunolide",
  "interactions": [
    {
      "type": "hydrogen_bond",
      "receptor_residue": "TRP60",
      "receptor_chain": "A",
      "distance_angstroms": 2.8
    },
    {
      "type": "hydrophobic",
      "receptor_residue": "TYR56",
      "receptor_chain": "A",
      "distance_angstroms": 3.4
    }
  ],
  "summary": {
    "total_h_bonds": 1,
    "total_hydrophobic": 1
  }
}
```

### 5. Field Descriptions
- `type`: The specific molecular interaction class.
- `receptor_residue`: The specific amino acid and position involved (e.g., TRP60).
- `distance_angstroms`: Atomic distance between interacting atoms.

### 6. Frontend Consumption
- The UI will read `interactions` and dynamically highlight these residues on the `MolecularViewer` using 3Dmol.js (e.g., coloring TRP60 in yellow and drawing a dashed line to the ligand).

### 7. Dependencies
- Depends on completion of Stage 6 (Vina) or Stage 7 (DiffDock).

---

## Stage 9: Mechanism Graph Builder

**Purpose:** Transforms the parsed interactions and target metadata into a node-edge graph structure to represent the biological consequence of the binding event.

### 1. Input Files
- `outputs/interaction_report.json`
- `data/inputs/pathogen_target_registry.csv`

### 2. Output Files
- `outputs/mechanism_graph.json`

### 3. JSON Schema
```json
{
  "type": "object",
  "required": ["nodes", "edges"],
  "properties": {
    "nodes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "label": { "type": "string" },
          "type": { "type": "string", "enum": ["compound", "target", "pathway", "phenotype"] }
        }
      }
    },
    "edges": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "source": { "type": "string" },
          "target": { "type": "string" },
          "relation": { "type": "string" }
        }
      }
    }
  }
}
```

### 4. Example JSON
```json
{
  "nodes": [
    { "id": "C1", "label": "Costunolide", "type": "compound" },
    { "id": "T1", "label": "LasR", "type": "target" },
    { "id": "P1", "label": "Quorum Sensing", "type": "pathway" },
    { "id": "PH1", "label": "Biofilm Maturation", "type": "phenotype" }
  ],
  "edges": [
    { "source": "C1", "target": "T1", "relation": "binds_to (H-bond Trp60)" },
    { "source": "T1", "target": "P1", "relation": "regulates" },
    { "source": "P1", "target": "PH1", "relation": "drives" },
    { "source": "C1", "target": "PH1", "relation": "inhibits" }
  ]
}
```

### 5. Field Descriptions
- `nodes.type`: Categorical label for UI styling (e.g., compound=green, target=blue).
- `edges.relation`: The text displayed along the connecting line in the graph.

### 6. Frontend Consumption
- Rendered by the "Mechanism Graph Builder Viewer" component in the middle panel (likely using a library like React Flow or Cytoscape.js) to visually map out how the compound disrupts AMR/virulence.

### 7. Dependencies
- Depends on completion of Stage 8 (Interaction Parser) and Stage 1 (Scenario Loader).

---

## Stage 10: Validation Priority Scorer

**Purpose:** Synthesizes outputs from docking engines and interaction parsing to calculate a single composite "Validation Priority Score" out of 100, advising on wet-lab testing viability.

### 1. Input Files
- `outputs/vina_validation_report.json` (or `vina_test_run_out.pdbqt` metrics)
- `outputs/diffdock_test_run/docked/` (to read ranked confidences)
- `outputs/interaction_report.json`
- `outputs/mechanism_graph.json`

### 2. Output Files
- `outputs/validation_priority_score.json`

### 3. JSON Schema
```json
{
  "type": "object",
  "required": ["validation_priority_score", "decision", "evidence_strength", "interpretation", "metrics"],
  "properties": {
    "validation_priority_score": { "type": "number", "minimum": 0, "maximum": 100 },
    "decision": { "type": "string" },
    "evidence_strength": { "type": "string" },
    "interpretation": { "type": "string" },
    "metrics": {
      "type": "object",
      "properties": {
        "affinity_contribution": { "type": "number" },
        "confidence_contribution": { "type": "number" },
        "interaction_contribution": { "type": "number" }
      }
    }
  }
}
```

### 4. Example JSON
```json
{
  "validation_priority_score": 84.2,
  "decision": "Prioritize for wet-lab validation",
  "evidence_strength": "Moderate-high preclinical plausibility",
  "interpretation": "Validation-priority signal only; not clinical efficacy.",
  "metrics": {
    "affinity_contribution": 35.0,
    "confidence_contribution": 30.2,
    "interaction_contribution": 19.0
  }
}
```

### 5. Field Descriptions
- `validation_priority_score`: Composite metric (0-100).
- `metrics.*_contribution`: Breakdown of how the final score was derived from Vina (affinity), DiffDock (confidence), and Interaction parser (H-bonds).

### 6. Frontend Consumption
- Displayed prominently in the "Validation Priority Score Panel" on the right sidebar. The `decision` string will determine the badge color (e.g., Green for Prioritize, Yellow for Review).

### 7. Dependencies
- Depends on Stages 6, 7, 8, and 9.

---

## Stage 11: Gemini Evidence Passport Generator

**Purpose:** Orchestrates an LLM prompt injecting all downstream reports to generate a human-readable, traceably-cited summary of the experiment, generating the final "Global Evidence Passport".

### 1. Input Files
- `outputs/validation_priority_score.json`
- `outputs/mechanism_graph.json`
- `outputs/source_traceability.csv`
- `data/inputs/ligand_library.csv`
- `data/inputs/pathogen_target_registry.csv`

### 2. Output Files
- `outputs/evidence_passport.json`

### 3. JSON Schema
```json
{
  "type": "object",
  "required": ["passport_id", "generated_at", "executive_summary", "traceability_matrix", "next_validation_steps"],
  "properties": {
    "passport_id": { "type": "string" },
    "generated_at": { "type": "string", "format": "date-time" },
    "executive_summary": { "type": "string" },
    "traceability_matrix": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "entity": { "type": "string" },
          "source": { "type": "string" },
          "accession_or_url": { "type": "string" }
        }
      }
    },
    "next_validation_steps": {
      "type": "array",
      "items": { "type": "string" }
    }
  }
}
```

### 4. Example JSON
```json
{
  "passport_id": "EP-LASR-COSTU-001",
  "generated_at": "2026-06-20T12:00:00Z",
  "executive_summary": "Costunolide demonstrates strong in-silico binding to Pseudomonas aeruginosa LasR with an affinity of -11.54 kcal/mol and a high DiffDock pose confidence (-0.96). The mechanism graph suggests disruption of quorum sensing. Wet-lab validation is highly recommended.",
  "traceability_matrix": [
    { "entity": "LasR Structure", "source": "RCSB PDB", "accession_or_url": "2UV0" },
    { "entity": "Costunolide", "source": "PubChem", "accession_or_url": "CID 5281437" }
  ],
  "next_validation_steps": [
    "Quorum-sensing reporter assay",
    "Pyocyanin assay",
    "Elastase/protease virulence assay",
    "Biofilm maturation/inhibition assay"
  ]
}
```

### 5. Field Descriptions
- `executive_summary`: LLM-generated cohesive text explaining the pipeline results and biological relevance.
- `traceability_matrix`: Provenance of the data used in the analysis.
- `next_validation_steps`: Recommended physical assays based on the target (e.g., LasR specific assays).

### 6. Frontend Consumption
- Consumed by the "Global Evidence Passport" and "Next Validation Steps" components on the right sidebar. Provides the final narrative wrap-up and lists the exact physical experiments needed next.

### 7. Dependencies
- Depends on the successful completion of ALL prior stages (1-10) as it acts as the final aggregator module.
