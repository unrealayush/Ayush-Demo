import sys
import os

# Add workspace directories to sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

try:
    from dashboard.utils.registry_loader import get_loader
    from dashboard.components.scenario_manager import get_manager
except ImportError as e:
    print(f"Error importing modules: {e}")
    sys.exit(1)

loader = get_loader()

# 1. Verify counts
num_ligands = len(loader.ligands)
num_targets = len(loader.targets)

print("="*60)
print(f"Loaded Ligands: {num_ligands} (Expected: 24)")
print(f"Loaded Targets: {num_targets} (Expected: 12)")
print("="*60)

# 2. List every compound
print("\n--- COMPOUNDS LIST ---")
for idx, lig in enumerate(sorted(loader.ligands.values(), key=lambda x: x["compound_name"]), 1):
    print(f"{idx:02d}: ID={lig['compound_id']:<25} | Name={lig['compound_name']:<30} | PubChem={lig['pubchem_cid']}")

# 3. List every target
print("\n--- TARGETS LIST ---")
for idx, tgt in enumerate(sorted(loader.targets.values(), key=lambda x: (x["organism"], x["target_name"])), 1):
    print(f"{idx:02d}: ID={tgt['target_id']:<10} | Name={tgt['target_name']:<20} | Organism={tgt['organism']:<30} | UniProt={tgt['uniprot']}")

print("="*60)

if num_ligands != 24 or num_targets != 12:
    print("FAIL: Counts do not match expected (24 ligands, 12 targets).")
    sys.exit(1)

# Confirm dynamic cascades
manager = get_manager()
scen_list = list(manager.scenarios.keys())
print(f"Dynamic Scenarios compiled: {scen_list}")
for scen in scen_list:
    scen_targets = list(manager.scenarios[scen]["targets"].keys())
    print(f"  * Scenario '{scen}' maps dynamically to {len(scen_targets)} targets: {scen_targets}")

print("\nPASS")
