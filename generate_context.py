import os

files_to_include = [
    "docs/PROJECT_REVERSE_ENGINEERING.md",
    "docs/STAGE_8_11_JSON_CONTRACTS.md",
    "docs/UI_GAP_ANALYSIS.md",
    "docs/FRONTEND_DATA_AUDIT.md",
    "docs/MECHANISM_GRAPH_FIX_REPORT.md",
    "docs/PRODUCTION_GAP_ANALYSIS.md",
    "docs/SPEC_COMPLIANCE_REPORT.md",
    "docs/COMPLIANCE_FIX_REPORT.md",
    "docs/FORENSIC_UI_FAILURE_REPORT.md",
    "docs/API_WIRING_AUDIT.md",
    "api/app.py",
    "frontend/src/App.tsx",
    "frontend/src/components/MechanismGraph.tsx",
    "frontend/src/components/MolecularViewer.tsx",
    "backend/stage8_interaction_parser/interaction_parser.py",
    "backend/stage9_mechanism_graph/mechanism_graph_builder.py",
    "backend/stage10_validation_scorer/validation_scorer.py",
    "backend/stage11_evidence_passport/passport_generator.py"
]

output_file = "MIGRATION_CONTEXT.md"

with open(output_file, 'w', encoding='utf-8') as outfile:
    outfile.write("# AYUSH Bio-AI Docking Pipeline - Full Migration Context\n\n")
    outfile.write("This document contains all architectural documentation, gap analyses, and critical source code files for the project migration.\n\n")
    
    for filepath in files_to_include:
        if os.path.exists(filepath):
            outfile.write(f"## File: `{filepath}`\n\n")
            
            # Determine code block type
            ext = os.path.splitext(filepath)[1]
            lang = ""
            if ext in ['.py']: lang = "python"
            elif ext in ['.tsx', '.ts']: lang = "typescript"
            elif ext in ['.json']: lang = "json"
            elif ext in ['.md']: lang = "markdown"
            elif ext in ['.yaml', '.yml']: lang = "yaml"
            
            outfile.write(f"```{lang}\n")
            with open(filepath, 'r', encoding='utf-8') as infile:
                outfile.write(infile.read())
            outfile.write(f"\n```\n\n")
        else:
            outfile.write(f"## File: `{filepath}`\n\n")
            outfile.write(f"*File not found in local workspace.*\n\n")

print(f"Successfully generated {output_file}")
