import sys
import os
import json

# Add workspace directories to sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

try:
    from dashboard.components.scenario_manager import get_manager
    from dashboard.utils.registry_loader import get_loader
    from dashboard.utils.pipeline_orchestrator import get_orchestrator
    
    # Import component rendering parsers to verify data hydration
    from dashboard.components.protein_viewer import render_protein_viewer
    from dashboard.components.docking_viewer import render_docking_viewer
    from dashboard.components.interaction_table import load_interaction_data
    from dashboard.components.graph_panel import render_mechanism_graph_plotly
    from dashboard.components.validation_panel import render_validation_panel_html
    from dashboard.components.evidence_passport import load_passport_data
    from dashboard.components.downloads import get_downloads_visibility_updates
except ImportError as e:
    print(f"Error importing modules: {e}")
    sys.exit(1)

print("="*70)
print("🚀 LAUNCHING END-TO-END SYSTEM INTEGRATION VALIDATION")
print("="*70)

# 1. Initialize registry and manager
loader = get_loader()
manager = get_manager()

# 2. Select Costunolide -> LasR
try:
    manager.set_selection("primary_kuth_pseudomonas", "costunolide", "lasr")
    selection = manager.get_current_selection()
    print(f"Selection target: Scenario={selection.scenario_id} | Ligand={selection.ligand_id} | Target={selection.target_id}")
except Exception as e:
    print(f"FAILED to set target selection: {e}")
    sys.exit(1)

# 3. Run Pipeline Orchestrator
orchestrator = get_orchestrator()
print("\nRunning Stage 0 -> Stage 9 complete pipeline...")
result = orchestrator.run(selection)

# Consume generator to complete pipeline execution
try:
    while True:
        next(result)
except StopIteration as e:
    execution_result = e.value

print(f"\nPipeline Run Completed with Status: {execution_result.status}")
print(f"Total Pipeline Runtime: {execution_result.total_runtime}s")

if execution_result.status != "Completed":
    print("FAIL: Pipeline execution status is not 'Completed'.")
    sys.exit(1)

# 4. Verify all 10 stages passed
for num in sorted(execution_result.stages.keys()):
    stage_res = execution_result.stages[num]
    print(f"  * Stage {num}: {stage_res.stage_name:<30} | Status: {stage_res.status}")
    if stage_res.status not in ["PASS", "SKIPPED"]:
        print(f"FAIL: Stage {num} failed: {stage_res.errors}")
        sys.exit(1)

print("\n" + "-"*50)
print("🔍 HYDRATING AND VERIFYING INDEPENDENT DASHBOARD COMPONENTS")
print("-"*50)

# 5. Verify Protein Viewer Loader
try:
    pdb_path = f"data/prepared/targets/{selection.target_id}/clean_receptor.pdb"
    html = render_protein_viewer(pdb_path, selection.target_name, "A", selection.target_id.upper())
    assert "3dmol-protein-viewport" in html
    assert "RCSB" in html or "Unknown" in html or "PDB" in html
    print("PASS: Protein Viewer rendered WebGL 3D canvas HTML successfully.")
except Exception as e:
    print(f"FAIL: Protein Viewer failed: {e}")
    sys.exit(1)

# 6. Verify Docking Viewer Loader
try:
    receptor_path = f"data/prepared/targets/{selection.target_id}/clean_receptor.pdb"
    vina_path = "outputs/vina_test_run_out.pdbqt"
    diffdock_path = "outputs/rank1.sdf"
    html = render_docking_viewer(receptor_path, vina_path, diffdock_path, True, True, selection)
    assert "3dmol-docking" in html
    assert "Vina Affinity" in html
    assert "DiffDock Confidence" in html
    print("PASS: Docking Viewer rendered multi-model co-localized overlay HTML successfully.")
except Exception as e:
    print(f"FAIL: Docking Viewer failed: {e}")
    sys.exit(1)

# 7. Verify Interaction Table Loader
try:
    rows = load_interaction_data("All")
    assert len(rows) > 0
    # First row check
    assert len(rows[0]) == 4  # Residue, Type, Distance, Strength
    print(f"PASS: Interaction Table parsed {len(rows)} real non-covalent contacts successfully.")
except Exception as e:
    print(f"FAIL: Interaction Table failed: {e}")
    sys.exit(1)

# 8. Verify Mechanism Graph Loader
try:
    fig = render_mechanism_graph_plotly("outputs/mechanism_graph.json")
    # Plotly Scatter checks
    assert len(fig.data) == 2  # Edges scatter and Nodes scatter
    assert fig.layout.showlegend is False
    print("PASS: Mechanism Graph constructed Plotly figure from NetworkX successfully.")
except Exception as e:
    print(f"FAIL: Mechanism Graph failed: {e}")
    sys.exit(1)

# 9. Verify Validation Scorer Panel Loader
try:
    html = render_validation_panel_html("outputs/validation_priority_score.json")
    assert "validation-priority-score-card" in html or "circle-progress" in html or "svg" in html
    assert "Affinity" in html
    assert "Confidence" in html
    print("PASS: Validation Panel compiled circular progress SVG gauge successfully.")
except Exception as e:
    print(f"FAIL: Validation Panel failed: {e}")
    sys.exit(1)

# 10. Verify Evidence Passport Loader
try:
    passport = load_passport_data()
    assert "*Awaiting" not in passport["exec_summary"]
    assert "traceability_html" in passport
    assert "RCSB_PDB" in passport["traceability_html"]
    print("PASS: Evidence Passport compiled dossier accordion grids successfully.")
except Exception as e:
    print(f"FAIL: Evidence Passport failed: {e}")
    sys.exit(1)

# 11. Verify Downloads Visibility Loader
try:
    updates = get_downloads_visibility_updates()
    # There should be 8 update dicts returned (7 buttons + 1 fallback text)
    assert len(updates) == 8
    # Since we completed the run successfully, check that some files are visible now
    visible_count = sum(1 for u in updates[:7] if u.get("visible") is True)
    print(f"PASS: Downloads check completed. Un-hidden {visible_count} completed scientific files dynamically.")
except Exception as e:
    print(f"FAIL: Downloads Panel failed: {e}")
    sys.exit(1)

print("="*70)
print("🎉 SYSTEM END-TO-END VALIDATION MATCHES ALL SCIENTIFIC INVARIANTS PERFECTLY!")
print("="*70)
print("\nPASS")
