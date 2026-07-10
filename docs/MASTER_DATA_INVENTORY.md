# 📦 Master Data Inventory Report

This report details the contents of the project's binary source documents.

---
\n## 📄 File: `docs/AYUSH_AMR_Final_Targets.xlsx`\n\n### Worksheet: `AYUSH_AMR_Final_Targets`\n\n**Columns:**\n- `Organism`\n- `Recommended Strain`\n- `NCBI Assembly`\n- `Target Protein`\n- `Gene`\n- `Locus Tag (Reference Strain)`\n- `Target Class`\n- `Primary Function`\n- `Role in AMR/Biofilm`\n- `UniProt`\n- `Structure Availability`\n\n\n## 📄 File: `docs/Verified_AYUSH_Ligands_24 (1).xlsx`\n\n### Worksheet: `Verified_AYUSH_Ligands`\n\n**Columns:**\n- `Plant`\n- `Compound`\n- `Chemical Class`\n- `PubChem CID`\n- `Priority`\n\n\n## 📄 File: `docs/Ayush flow.docx`\n\n### Headings\n\n\n### Tables\n\n- **table_1_headers**: `['UI field', 'What user selects', 'Source dataset']`\n- **table_2_headers**: `['Dataset', 'Format', 'Purpose']`\n- **table_3_headers**: `['Field', 'Value']`\n- **table_4_headers**: `['Field', 'Value']`\n- **table_5_headers**: `['Field', 'Value']`\n- **table_6_headers**: `['Card', 'Display']`\n- **table_7_headers**: `['Score', 'Meaning', 'Do not say']`\n- **table_8_headers**: `['Component', 'Example weight']`\n- **table_9_headers**: `['Score', 'UI decision']`\n- **table_10_headers**: `['Current visual text', 'Replace with']`\n- **table_11_headers**: `['MVP dataset file', 'What it contains', 'Preferred real source', 'Fallback / note']`\n- **table_12_headers**: `['Scenario', 'Organism', 'Target labels']`\n- **table_13_headers**: `['Source', 'Use for']`\n\n## 📄 File: `evidence_pack.zip`\n\n### Text-Based Files Found:\n\n- `ligand_library.csv`\n- `pathogen_target_registry.csv`\n- `source_traceability.csv`\n- `structure_resolution_report.json`\n- `ligand_prep_report.json`\n- `receptor_prep_report.json`\n- `docking_boxes.yaml`\n- `diffdock_input.csv`\n- `validate_contracts_report.json`\n\n---\n## 🧬 Pathway & Phenotype Metadata\n\n**Authoritative Source:** Not Found\n\n---\n## 🔗 Dependency Graph

This graph shows the proposed authoritative source for each logical registry based on the inventory.

*   **`target_registry`**
    *   **Source:** `docs/AYUSH_AMR_Final_Targets.xlsx`
    *   **Worksheet:** `Final_Targets`
*   **`ligand_registry`**
    *   **Source:** `docs/Verified_AYUSH_Ligands_24 (1).xlsx`
    *   **Worksheet:** `Final_Ligands`
*   **`study_context`**
    *   **Source:** `docs/AYUSH_AMR_Final_Targets.xlsx` (If pathway/phenotype columns are confirmed)
    *   **Worksheet:** `Final_Targets`
*   **`assay_registry`**
    *   **Source:** Not Found
*   **`scenario_registry`**
    *   **Source:** Not Found (Logic should be derived from `target_registry` and `ligand_registry`)
