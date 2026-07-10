import os
from dataclasses import dataclass
from typing import List, Dict, Any, Optional
from dashboard.utils.registry_loader import get_loader

@dataclass
class ScenarioSelection:
    scenario_id: str
    ligand_id: str
    ligand_name: str
    target_id: str
    target_name: str
    organism: str
    study_context: str
    antibiotic: str
    dataset_version: str

class ScenarioManager:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ScenarioManager, cls).__new__(cls)
            cls._instance._init_manager()
        return cls._instance

    def _init_manager(self):
        self.scenarios: Dict[str, Dict[str, Any]] = {}
        self.ligands: Dict[str, Dict[str, Any]] = {}
        self.current_selection: Optional[ScenarioSelection] = None
        self.refresh_registry()

    def refresh_registry(self):
        self.scenarios = {}
        self.ligands = {}

        # 1. Fetch from Master Registry Loader (cached 24 ligands and 12 targets)
        loader = get_loader()
        self.ligands = loader.ligands

        # 2. Build Scenario Mapping dynamically based on Target Organisms
        for tgt in loader.targets.values():
            org = tgt["organism"]
            
            # Map Organisms to Scenario Families
            if "Pseudomonas" in org:
                scen_id = "primary_kuth_pseudomonas"
                display_name = "Primary MVP (Pseudomonas)"
                context = "Quorum sensing, virulence, biofilm maturation"
                antibiotic = "Ciprofloxacin"
            elif "Staphylococcus" in org:
                scen_id = "secondary_kuth_staphylococcus"
                display_name = "Secondary MVP (Staphylococcus)"
                context = "Quorum sensing, adhesion, biofilm initiation"
                antibiotic = "Mupirocin"
            else:
                scen_id = "tertiary_kuth_klebsiella"
                display_name = "Tertiary MVP (Klebsiella)"
                context = "Biofilm regulation, drug-resistance pathways"
                antibiotic = "Meropenem"

            if scen_id not in self.scenarios:
                self.scenarios[scen_id] = {
                    "scenario_id": scen_id,
                    "display_name": display_name,
                    "organism": org,
                    "study_context": context,
                    "antibiotic": antibiotic,
                    "targets": {},
                    "dataset_version": "1.0.0"
                }
            
            self.scenarios[scen_id]["targets"][tgt["target_id"]] = f"{tgt['target_name']} ({tgt['gene']})"

        # 3. Set standard defaults
        scen_list = list(self.scenarios.keys())
        if scen_list:
            default_scen = "primary_kuth_pseudomonas" if "primary_kuth_pseudomonas" in self.scenarios else scen_list[0]
            default_lig = "dehydrocostus_lactone" if "dehydrocostus_lactone" in self.ligands else list(self.ligands.keys())[0]
            default_tgt = list(self.scenarios[default_scen]["targets"].keys())[0] if self.scenarios[default_scen]["targets"] else ""
            self.set_selection(default_scen, default_lig, default_tgt)

    def set_selection(self, scenario_id: str, ligand_id: str, target_id: str):
        if scenario_id not in self.scenarios:
            raise ValueError(f"Unknown scenario_id: {scenario_id}")
        if ligand_id not in self.ligands:
            raise ValueError(f"Unknown ligand_id: {ligand_id}")
            
        scen_info = self.scenarios[scenario_id]
        if target_id not in scen_info["targets"]:
            # Fallback to first target if mismatch
            target_id = list(scen_info["targets"].keys())[0] if scen_info["targets"] else ""

        self.current_selection = ScenarioSelection(
            scenario_id=scenario_id,
            ligand_id=ligand_id,
            ligand_name=self.ligands[ligand_id]["compound_name"],
            target_id=target_id,
            target_name=scen_info["targets"].get(target_id, "Unknown Target"),
            organism=scen_info["organism"],
            study_context=scen_info["study_context"],
            antibiotic=scen_info["antibiotic"],
            dataset_version=scen_info["dataset_version"]
        )

    def get_current_selection(self) -> ScenarioSelection:
        if self.current_selection is None:
            self.refresh_registry()
        return self.current_selection

# Helper singleton methods
_manager = ScenarioManager()

def get_current_selection() -> ScenarioSelection:
    return _manager.get_current_selection()

def set_selection(scenario_id: str, ligand_id: str, target_id: str):
    _manager.set_selection(scenario_id, ligand_id, target_id)

def refresh_registry():
    _manager.refresh_registry()

def get_manager() -> ScenarioManager:
    return _manager
