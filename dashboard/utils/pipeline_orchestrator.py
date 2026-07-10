
import os
import sys
import time
import shutil
import subprocess
import requests
from dataclasses import dataclass, field
from typing import List, Dict, Any, Optional, Generator

# Add workspace directories to sys.path
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.append(BASE_DIR)

from dashboard.components.scenario_manager import ScenarioSelection
from dashboard.components.live_logs import stream_subprocess_command

API_BASE_URL = "http://127.0.0.1:8080/api"

@dataclass
class PipelineStageResult:
    stage_number: int
    stage_name: str
    status: str  # "PASS", "FAIL", "SKIPPED", "RUNNING"
    runtime: float
    input_files: List[str] = field(default_factory=list)
    output_files: List[str] = field(default_factory=list)
    errors: Optional[str] = None
    logs: List[str] = field(default_factory=list)

@dataclass
class PipelineExecutionResult:
    scenario_id: str
    status: str  # "Completed", "Failed", "Cancelled"
    total_runtime: float
    stages: Dict[int, PipelineStageResult] = field(default_factory=dict)

class PipelineOrchestrator:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(PipelineOrchestrator, cls).__new__(cls)
            cls._instance._init_orchestrator()
        return cls._instance

    def _init_orchestrator(self):
        self.active_run: Optional[PipelineExecutionResult] = None
        self.is_cancelled = False
        self.current_stage = -1

    def run(self, selection: ScenarioSelection) -> Generator[str, None, PipelineExecutionResult]:
        """
        Runs the full 10-stage pipeline as a generator, yielding live log lines.
        Returns PipelineExecutionResult at completion.
        """
        self.is_cancelled = False
        self.active_run = PipelineExecutionResult(
            scenario_id=selection.scenario_id,
            status="Running",
            total_runtime=0.0,
            stages={}
        )
        
        start_time = time.time()
        
        stages_info = [
            (0, "Scenario Validation"),
            (1, "Ligand Preparation"),
            (2, "Receptor Preparation"),
            (3, "Structure Resolver"),
            (4, "AutoDock Vina Docking"),
            (5, "DiffDock-L Blind AI Docking"),
            (6, "Interaction Parser"),
            (7, "Mechanism Graph Builder"),
            (8, "Validation Scorer"),
            (9, "Evidence Passport Generator")
        ]
        
        try:
            for num, name in stages_info:
                if self.is_cancelled:
                    self.active_run.status = "Cancelled"
                    break
                
                self.current_stage = num
                
                # Iterate over the stage's log generator live
                stage_gen = self.run_stage(num, selection)
                try:
                    while True:
                        line = next(stage_gen)
                        yield line
                except StopIteration as e:
                    stage_res = e.value
                    
                self.active_run.stages[num] = stage_res
                
                if stage_res.status == "FAIL":
                    self.active_run.status = "Failed"
                    break
            else:
                self.active_run.status = "Completed"
                
        except Exception as e:
            self.active_run.status = "Failed"
            yield f"[{time.strftime('%H:%M:%S')}] [ERROR] Run loop crash: {e}"
            
        self.active_run.total_runtime = round(time.time() - start_time, 2)
        return self.active_run

    def run_stage(self, stage_number: int, selection: ScenarioSelection) -> Generator[str, None, PipelineStageResult]:
        stage_names = {
            0: "Scenario Validation",
            1: "Ligand Preparation",
            2: "Receptor Preparation",
            3: "Structure Resolver",
            4: "AutoDock Vina Docking",
            5: "DiffDock-L Blind AI Docking",
            6: "Interaction Parser",
            7: "Mechanism Graph Builder",
            8: "Validation Scorer",
            9: "Evidence Passport Generator"
        }
        
        name = stage_names.get(stage_number, f"Stage {stage_number}")
        start_time = time.time()
        
        init_log = f"[{time.strftime('%H:%M:%S')}] Launching Stage {stage_number}: {name}..."
        yield init_log
        logs = [init_log]
        
        input_files = []
        output_files = []
        status = "PASS"
        errors = None

        try:
            # Stages 0-3 and 6-9 are local Python scripts
            if stage_number in [0, 1, 2, 3, 6, 7, 8, 9]:
                yield from self.run_local_script_stage(stage_number, selection, input_files, output_files, logs)

            # Stages 4 & 5 delegate to the FastAPI server
            elif stage_number == 4: # Vina
                yield from self.run_api_triggered_stage("vina", selection, input_files, output_files, logs)
                
            elif stage_number == 5: # DiffDock
                yield from self.run_api_triggered_stage("diffdock", selection, input_files, output_files, logs)

        except Exception as e:
            status = "FAIL"
            errors = str(e)
            err_log = f"[ERROR] Stage {stage_number} execution failed: {errors}"
            yield err_log
            logs.append(err_log)

        runtime = round(time.time() - start_time, 2)
        end_log = f"Stage {stage_number} finished. Runtime: {runtime}s. Status: {status}"
        yield end_log
        logs.append(end_log)
        
        return PipelineStageResult(
            stage_number=stage_number,
            stage_name=name,
            status=status,
            runtime=runtime,
            input_files=input_files,
            output_files=output_files,
            errors=errors,
            logs=logs
        )

    def run_api_triggered_stage(self, model_key: str, selection: ScenarioSelection, input_files: List, output_files: List, logs: List) -> Generator[str, None, None]:
        """
        Triggers a model run via the API and polls for completion.
        """
        endpoint = f"{API_BASE_URL}/run/{model_key}"
        status_endpoint = f"{API_BASE_URL}/run-status/{model_key}"
        
        payload = {"target_id": selection.target_id, "ligand_id": selection.ligand_id}
        
        yield f"[{time.strftime('%H:%M:%S')}] Delegating execution to API endpoint: {endpoint}"
        
        try:
            response = requests.post(endpoint, json=payload)
            response.raise_for_status()
            yield f"[{time.strftime('%H:%M:%S')}] API trigger successful. Now polling for status..."
        except requests.RequestException as e:
            raise RuntimeError(f"API trigger for {model_key} failed: {e}")

        last_log_index = 0
        while True:
            time.sleep(2) # Poll every 2 seconds
            try:
                status_res = requests.get(status_endpoint)
                status_res.raise_for_status()
                data = status_res.json()
                
                # Stream new logs
                new_logs = data.get("logs", [])[last_log_index:]
                for log in new_logs:
                    yield log
                    logs.append(log)
                last_log_index = len(data.get("logs", []))
                
                if data["status"] == "Completed":
                    yield f"[{time.strftime('%H:%M:%S')}] API reports {model_key} execution completed."
                    break
                elif data["status"] == "Failed":
                    raise RuntimeError(f"API reports {model_key} execution failed: {data.get('error', 'Unknown error')}")
            except requests.RequestException as e:
                raise RuntimeError(f"Failed to poll status for {model_key}: {e}")

    def run_local_script_stage(self, stage_number: int, selection: ScenarioSelection, input_files: List, output_files: List, logs: List) -> Generator[str, None, None]:
        """
        Handles the execution of local python scripts for non-model stages.
        This is a refactored version of the original logic.
        """
        script_path = ""
        cmd_args = []
        # Define scripts and args for each local stage
        if stage_number == 0:
            # Pure validation, no script
            sel_log = f"Checking selection: Scenario={selection.scenario_id} | Ligand={selection.ligand_id} | Target={selection.target_id}"
            yield sel_log
            logs.append(sel_log)
            if not selection.scenario_id or not selection.ligand_id or not selection.target_id:
                raise ValueError("Selection contains empty parameters")
            yield "Inputs successfully validated."
            return

        elif stage_number == 1:
            script_path = "scripts/ligand_preparation.py"
            cmd_args = ["--ligand", selection.ligand_id]
        elif stage_number == 2:
            script_path = "scripts/receptor_preparation.py"
            # This stage originally had a check for a different python. We will use the system one for now.
        elif stage_number == 3:
            script_path = "scripts/resolve_structures.py"
        elif stage_number == 6:
            script_path = os.path.join("backend", "stage8_interaction_parser", "interaction_parser.py")
            cmd_args = ["--receptor", f"data/prepared/targets/{selection.target_id}/clean_receptor.pdb", "--ligand", "outputs/vina_test_run_out.pdbqt", "--target_id", selection.target_id, "--ligand_id", selection.ligand_id, "--out_dir", "outputs"]
        elif stage_number == 7:
            script_path = os.path.join("backend", "stage9_mechanism_graph", "mechanism_graph_builder.py")
            cmd_args = ["--interaction_report", "outputs/interaction_report.json", "--target_registry", "docs/AYUSH_AMR_Final_Targets.xlsx", "--out_dir", "outputs"]
        elif stage_number == 8:
            script_path = os.path.join("backend", "stage10_validation_scorer", "validation_scorer.py")
            cmd_args = ["--interaction_report", "outputs/interaction_report.json", "--mechanism_graph", "outputs/mechanism_graph.json", "--vina_report", "assets/vina_validation_report.json", "--diffdock_report", "outputs/diffdock_results.json", "--out_dir", "outputs"]
        elif stage_number == 9:
            script_path = os.path.join("backend", "stage11_evidence_passport", "passport_generator.py")
            cmd_args = ["--target_id", selection.target_id, "--ligand_id", selection.ligand_id, "--out_dir", "outputs"]

        full_script_path = os.path.join(BASE_DIR, script_path)
        if not os.path.exists(full_script_path):
             raise FileNotFoundError(f"Script for stage {stage_number} not found at {full_script_path}")
             
        cmd = [sys.executable, full_script_path] + cmd_args
        stream = stream_subprocess_command(cmd, cwd=BASE_DIR)
        returncode = 0
        try:
            while True:
                line = next(stream)
                yield line
                logs.append(line)
        except StopIteration as e:
            returncode = e.value
            
        if returncode != 0:
            raise RuntimeError(f"Script for stage {stage_number} failed with exit code {returncode}")

    def cancel(self) -> bool:
        self.is_cancelled = True
        return True

    def get_status(self) -> Dict[str, Any]:
        if self.active_run is None:
            return {"status": "Idle", "current_stage": -1}
        return {
            "status": self.active_run.status,
            "current_stage": self.current_stage,
            "total_runtime": self.active_run.total_runtime
        }

_orchestrator = PipelineOrchestrator()

def get_orchestrator() -> PipelineOrchestrator:
    return _orchestrator
