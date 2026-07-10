import sys
import os

# Add workspace directories to sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

try:
    from dashboard.components.scenario_manager import get_manager
    from dashboard.utils.registry_loader import get_loader
    from dashboard.utils.pipeline_orchestrator import get_orchestrator
except ImportError as e:
    print(f"Error importing modules: {e}")
    sys.exit(1)

# Initialize registry loader and manager
loader = get_loader()
manager = get_manager()

# 1. Set selection to Costunolide -> LasR
# scenario: primary_kuth_pseudomonas
# ligand: costunolide
# target: lasr
try:
    manager.set_selection("primary_kuth_pseudomonas", "costunolide", "lasr")
    selection = manager.get_current_selection()
    print("="*60)
    print(f"Target Selection Initialized:")
    print(f"  Scenario:  {selection.scenario_id}")
    print(f"  Ligand:    {selection.ligand_id} ({selection.ligand_name})")
    print(f"  Target:    {selection.target_id} ({selection.target_name})")
    print("="*60)
except Exception as e:
    print(f"Failed to set target selection: {e}")
    sys.exit(1)

# 2. Run Orchestrator
orchestrator = get_orchestrator()
print("\n[Validation] Triggering full pipeline orchestrator execution...")
result = orchestrator.run(selection)

print("\n" + "="*60)
print(f"PIPELINE RUN COMPLETED WITH STATUS: {result.status}")
print(f"Total Runtime: {result.total_runtime}s")
print("="*60)

all_ok = True
# 3. Print and verify every stage
for num in sorted(result.stages.keys()):
    stage_res = result.stages[num]
    print(f"Stage {num:02d}: {stage_res.stage_name:<30} | Status: {stage_res.status:<10} | Runtime: {stage_res.runtime}s")
    if stage_res.status not in ["PASS", "SKIPPED"]:
        print(f"  * [ERROR] Stage {num} failed with error: {stage_res.errors}")
        for l in stage_res.logs:
            print(f"    LOG: {l}")
        all_ok = False

print("="*60)

if not all_ok or result.status != "Completed":
    print("FAIL: One or more stages in the pipeline orchestrator failed.")
    sys.exit(1)

print("\nPASS")
