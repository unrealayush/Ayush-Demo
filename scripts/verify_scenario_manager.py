
import sys
sys.path.append('C:/Users/ayu23/OneDrive/Desktop/dock/docking_pipeline')
from dashboard.components.scenario_manager import get_manager

def verify_scenario_manager():
    manager = get_manager()
    errors = []
    
    # Check for duplicate scenario IDs
    if len(manager.scenarios.keys()) != len(set(manager.scenarios.keys())):
        errors.append("Duplicate scenario IDs found.")

    # Check for duplicate ligand IDs
    if len(manager.ligands.keys()) != len(set(manager.ligands.keys())):
        errors.append("Duplicate ligand IDs found.")
        
    for scenario_id, scenario in manager.scenarios.items():
        if not scenario['targets']:
            errors.append(f"Scenario '{scenario_id}' has no targets.")
        
        for target_id in scenario['targets']:
            for ligand_id in manager.ligands:
                try:
                    manager.set_selection(scenario_id, ligand_id, target_id)
                    selection = manager.get_current_selection()
                    
                    if not selection.scenario_id:
                        errors.append(f"Missing scenario_id for {scenario_id}, {ligand_id}, {target_id}")
                    if not selection.ligand_id:
                        errors.append(f"Missing ligand_id for {scenario_id}, {ligand_id}, {target_id}")
                    if not selection.target_id:
                        errors.append(f"Missing target_id for {scenario_id}, {ligand_id}, {target_id}")
                    if not selection.organism:
                        errors.append(f"Missing organism for {scenario_id}, {ligand_id}, {target_id}")

                except Exception as e:
                    errors.append(f"Error setting selection for {scenario_id}, {ligand_id}, {target_id}: {e}")
    
    if errors:
        print("Scenario Manager Verification Summary: FAIL")
        for error in errors:
            print(f"- {error}")
    else:
        print("Scenario Manager Verification Summary: PASS")
        print(f"Verified {len(manager.scenarios)} scenarios, {len(manager.ligands)} ligands.")

if __name__ == "__main__":
    verify_scenario_manager()
