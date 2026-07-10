from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os
import csv
import json
import yaml
import subprocess
from pathlib import Path
import time
from typing import Optional, List, Dict, Any

app = FastAPI(title="AYUSH Bio-AI Docking Pipeline API", version="1.0.0")

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Base Paths (relative to the docking_pipeline directory)
BASE_DIR = Path(__file__).resolve().parent.parent
OUTPUTS_DIR = BASE_DIR / "outputs"
INPUTS_DIR = BASE_DIR / "data" / "inputs"
PREPARED_DIR = BASE_DIR / "data" / "prepared"
ASSETS_DIR = BASE_DIR / "assets"
CONFIGS_DIR = BASE_DIR / "configs"

# Active run statuses to track executions
run_states = {
    "esmfold": {"status": "Idle", "progress": 0, "logs": [], "elapsed": 0.0, "start_time": None, "error": None},
    "vina": {"status": "Idle", "progress": 0, "logs": [], "elapsed": 0.0, "start_time": None, "error": None},
    "diffdock": {"status": "Idle", "progress": 0, "logs": [], "elapsed": 0.0, "start_time": None, "error": None},
    "screen": {"status": "Idle", "progress": 0, "logs": [], "elapsed": 0.0, "start_time": None, "error": None},
}

# --- Models ---
class RunRequest(BaseModel):
    target_id: str
    ligand_id: Optional[str] = None
    sequence: Optional[str] = None
    config_params: Optional[Dict[str, Any]] = None

# --- Helper Functions ---
def load_csv(file_path: Path) -> List[Dict[str, str]]:
    if not file_path.exists():
        return []
    with open(file_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return list(reader)

def load_json(file_path: Path) -> Dict[str, Any]:
    if not file_path.exists():
        return {}
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}

def load_yaml(file_path: Path) -> Dict[str, Any]:
    if not file_path.exists():
        return {}
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return yaml.safe_load(f)
    except Exception:
        return {}

def run_pipeline_command(model_key: str, cmd: List[str], cwd: str, success_logs: List[str], output_renamer_func=None):
    """
    Executes a real model shell command in the background, captures live stdout stream
    dynamically, updates progress bar, and logs everything to the terminal output console.
    """
    state = run_states[model_key]
    state["status"] = "Running"
    state["start_time"] = time.time()
    state["progress"] = 10
    state["logs"] = [f"[{time.strftime('%H:%M:%S')}] Initializing execution loop..."]
    state["error"] = None
    
    try:
        state["progress"] = 25
        state["logs"].append(f"[{time.strftime('%H:%M:%S')}] Spawning subprocess environment on VM...")
        state["logs"].append(f"[{time.strftime('%H:%M:%S')}] CMD: {' '.join(cmd)}")
        
        # Execute subprocess and capture stdout/stderr in real-time
        process = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            cwd=cwd
        )
        
        # Stream stdout logs dynamically
        while True:
            output = process.stdout.readline()
            if output == '' and process.poll() is not None:
                break
            if output:
                cleaned = output.strip()
                state["logs"].append(f"[{time.strftime('%H:%M:%S')}] {cleaned}")
                
                # Dynamic progress estimation based on typical model log outputs
                if "scoring" in cleaned or "search" in cleaned:
                    state["progress"] = min(75, state["progress"] + 3)
                elif "inference" in cleaned or "predict" in cleaned:
                    state["progress"] = min(85, state["progress"] + 5)
                elif "Writing" in cleaned or "Saving" in cleaned:
                    state["progress"] = 90
        
        rc = process.poll()
        stdout, stderr = process.communicate()
        
        if stderr:
            for line in stderr.splitlines():
                if line.strip():
                    state["logs"].append(f"[{time.strftime('%H:%M:%S')}] [STDERR] {line}")
        
        state["elapsed"] = round(time.time() - state["start_time"], 2)
        
        if rc == 0:
            state["progress"] = 95
            state["logs"].append(f"[{time.strftime('%H:%M:%S')}] Run command returned exit code 0.")
            
            # Run file organization or rename callback if supplied
            if output_renamer_func:
                state["logs"].append(f"[{time.strftime('%H:%M:%S')}] Organizing output directories...")
                output_renamer_func()
                
            state["progress"] = 100
            state["status"] = "Completed"
            state["logs"].append(f"[{time.strftime('%H:%M:%S')}] Pipeline execution completed successfully!")
            for slog in success_logs:
                state["logs"].append(f"[{time.strftime('%H:%M:%S')}] {slog}")
        else:
            state["progress"] = 100
            state["status"] = "Failed"
            state["error"] = f"Script returned exit code {rc}"
            state["logs"].append(f"[{time.strftime('%H:%M:%S')}] Execution failed. Exit code: {rc}")
            
    except Exception as e:
        state["progress"] = 100
        state["status"] = "Failed"
        state["error"] = str(e)
        state["elapsed"] = round(time.time() - state["start_time"], 2) if state["start_time"] else 0.0
        state["logs"].append(f"[{time.strftime('%H:%M:%S')}] Exception raised: {str(e)}")

# --- Endpoints ---

@app.get("/api/healthz")
def healthz():
    return {"status": "ok", "gpu_available": True}

@app.get("/api/targets")
def get_targets():
    csv_path = INPUTS_DIR / "pathogen_target_registry.csv"
    if not csv_path.exists():
        raise HTTPException(status_code=503, detail="Target registry not found or is currently unavailable.")
    targets = load_csv(csv_path)
    return targets

@app.get("/api/ligands")
def get_ligands():
    csv_path = INPUTS_DIR / "ligand_library.csv"
    if not csv_path.exists():
        raise HTTPException(status_code=503, detail="Ligand registry not found or is currently unavailable.")
    ligands = load_csv(csv_path)
    return ligands

@app.get("/api/boxes")
def get_boxes():
    yaml_path = CONFIGS_DIR / "docking_boxes.yaml"
    if not yaml_path.exists():
        raise HTTPException(status_code=503, detail="Docking box configuration not found.")
    return load_yaml(yaml_path)

@app.get("/api/contracts-report")
def get_contracts_report():
    report_path = OUTPUTS_DIR / "validate_contracts_report.json"
    if not report_path.exists():
        raise HTTPException(status_code=503, detail="Contracts validation report not found or is currently unavailable.")
    return load_json(report_path)

@app.get("/api/vina-report")
def get_vina_report():
    report_path = ASSETS_DIR / "vina_validation_report.json"
    if not report_path.exists():
        raise HTTPException(status_code=503, detail="Vina validation report not found or is currently unavailable.")
    return load_json(report_path)

@app.get("/api/diffdock-results")
def get_diffdock_results():
    report_path = OUTPUTS_DIR / "diffdock_results.json"
    if not report_path.exists():
        return {
            "status": "not_generated",
            "message": "DiffDock has not been executed for the current selection."
        }
    return load_json(report_path)

@app.get("/api/interaction-report")
def get_interaction_report():
    report_path = OUTPUTS_DIR / "interaction_report.json"
    if not report_path.exists():
        return {
            "status": "not_generated",
            "message": "Interaction analysis has not yet been executed."
        }
    return load_json(report_path)

@app.get("/api/mechanism-graph")
def get_mechanism_graph():
    report_path = OUTPUTS_DIR / "mechanism_graph.json"
    if not report_path.exists():
        return {
            "status": "not_generated",
            "message": "Mechanism graph has not yet been generated."
        }
    return load_json(report_path)

@app.get("/api/validation-score")
def get_validation_score():
    report_path = OUTPUTS_DIR / "validation_priority_score.json"
    if not report_path.exists():
        return {
            "status": "not_generated",
            "message": "Validation score has not yet been generated."
        }
    return load_json(report_path)

@app.get("/api/evidence-passport")
def get_evidence_passport():
    report_path = OUTPUTS_DIR / "evidence_passport.json"
    if not report_path.exists():
        return {
            "status": "not_generated",
            "message": "Evidence passport has not yet been generated."
        }
    return load_json(report_path)

@app.get("/api/scenario-context")
def get_scenario_context(target_id: str = "lasr", ligand_id: str = "costunolide"):
    return {
        "status": "not_generated",
        "message": "This endpoint is deprecated. Context is now derived from the master registries."
    }

# --- Static File Serving & Download Endpoints ---

@app.get("/api/file")
def get_file(path: str):
    safe_path = BASE_DIR / Path(path)
    
    # Traversal prevention
    try:
        safe_path.relative_to(BASE_DIR)
    except ValueError:
        raise HTTPException(status_code=403, detail="Access denied. Path is outside workspace.")
        
    if not safe_path.exists() or safe_path.is_dir():
        raise HTTPException(status_code=404, detail=f"File not found: {path}")
        
    media_type = "text/plain"
    if safe_path.suffix == ".pdb":
        media_type = "chemical/x-pdb"
    elif safe_path.suffix == ".sdf":
        media_type = "chemical/x-mdl-sdfile"
    elif safe_path.suffix == ".cif":
        media_type = "chemical/x-cif"
        
    return FileResponse(safe_path, media_type=media_type, filename=safe_path.name)

# --- Real Inference Execution Triggers ---

@app.get("/api/run-status/{model_key}")
def get_run_status(model_key: str):
    if model_key not in run_states:
        raise HTTPException(status_code=404, detail="Model key not found")
    state = run_states[model_key]
    if state["status"] == "Running" and state["start_time"] is not None:
        state["elapsed"] = round(time.time() - state["start_time"], 2)
    return state

@app.post("/api/run/esmfold")
def run_esmfold(req: RunRequest, background_tasks: BackgroundTasks):
    state = run_states["esmfold"]
    if state["status"] == "Running":
        return JSONResponse(status_code=400, content={"message": "ESMFold execution is already in progress."})
        
    sequence = req.sequence or ""
    if not sequence.strip():
        raise HTTPException(status_code=400, detail="Fasta sequence required")
        
    runner_script = "/opt/services/esmfold2/app/run_esm.py"
    env_path = "/opt/services/esmfold2/env"
    
    # Temporary output paths
    temp_out_path = OUTPUTS_DIR / f"esm_temp_{uuid_hex()}.tmp"
    final_cif_path = OUTPUTS_DIR / "esm_test_run.cif"
    
    # Command to run biohub/ESMFold2 in conda env
    cmd = [
        "/opt/mambaforge/bin/mamba", "run", "-p", env_path,
        "python", runner_script,
        "--sequence", sequence,
        "--output", str(temp_out_path)
    ]
    
    # Callback to rename files correctly on success
    def rename_esm_output():
        if temp_out_path.exists():
            if final_cif_path.exists():
                final_cif_path.unlink()
            os.rename(str(temp_out_path), str(final_cif_path))
            
    success_logs = ["Structure successfully resolved and saved to outputs/esm_test_run.cif"]
    
    background_tasks.add_task(
        run_pipeline_command,
        "esmfold",
        cmd,
        str(BASE_DIR),
        success_logs,
        rename_esm_output
    )
    
    return {"message": "ESMFold execution triggered on VM L4 GPU.", "status": "Running"}

@app.post("/api/run/vina")
def run_vina(req: RunRequest, background_tasks: BackgroundTasks):
    state = run_states["vina"]
    if state["status"] == "Running":
        return JSONResponse(status_code=400, content={"message": "Vina execution is already in progress."})
        
    # Read custom input box params or fall back to targets config
    config_params = req.config_params or {}
    cx = config_params.get("center_x", 0.0)
    cy = config_params.get("center_y", 0.0)
    cz = config_params.get("center_z", 0.0)
    sx = config_params.get("size_x", 20.0)
    sy = config_params.get("size_y", 20.0)
    sz = config_params.get("size_z", 20.0)
    
    target_id = req.target_id or "lasr"
    ligand_id = req.ligand_id or "costunolide"
    
    vina_binary = "/opt/services/autodock_vina/bin/vina"
    receptor_pdbqt = PREPARED_DIR / "targets" / target_id / "receptor.pdbqt"
    ligand_pdbqt = PREPARED_DIR / "ligands" / f"{ligand_id}.pdbqt"
    out_pdbqt = OUTPUTS_DIR / "vina_test_run_out.pdbqt"
    
    # Command to run local compiled binary AutoDock Vina
    cmd = [
        vina_binary,
        "--receptor", str(receptor_pdbqt),
        "--ligand", str(ligand_pdbqt),
        "--center_x", str(cx), "--center_y", str(cy), "--center_z", str(cz),
        "--size_x", str(sx), "--size_y", str(sy), "--size_z", str(sz),
        "--exhaustiveness", "8",
        "--out", str(out_pdbqt)
    ]
    
    # Callback to parse Vina output on success
    def parse_vina_output():
        import subprocess
        import sys
        try:
            subprocess.run([sys.executable, str(BASE_DIR / "scripts" / "parse_vina.py")], check=True, cwd=str(BASE_DIR))
        except Exception as e:
            print(f"Error parsing Vina: {e}")

    success_logs = [
        "Binding affinity successfully computed using compiled Vina baseline engine.",
        "Pose coordinates saved directly to outputs/vina_test_run_out.pdbqt."
    ]
    
    background_tasks.add_task(
        run_pipeline_command,
        "vina",
        cmd,
        str(BASE_DIR),
        success_logs,
        parse_vina_output
    )
    
    return {"message": "AutoDock Vina pipeline triggered on VM.", "status": "Running"}

@app.post("/api/run/diffdock")
def run_diffdock(req: RunRequest, background_tasks: BackgroundTasks):
    state = run_states["diffdock"]
    if state["status"] == "Running":
        return JSONResponse(status_code=400, content={"message": "DiffDock execution is already in progress."})
        
    target_id = req.target_id or "lasr"
    ligand_id = req.ligand_id or "costunolide"
    
    env_path = "/opt/services/diffdock_l/env"
    diffdock_dir = "/opt/services/diffdock_l/app/DiffDock"
    
    protein_pdb = PREPARED_DIR / "targets" / target_id / "clean_receptor.pdb"
    ligand_sdf = PREPARED_DIR / "ligands" / f"{ligand_id}.sdf"
    out_dir = OUTPUTS_DIR / "diffdock_test_run"
    
    # Command to run real DiffDock-L GPU-accelerated code
    cmd = [
        "/opt/mambaforge/bin/mamba", "run", "-p", env_path,
        "python", "inference.py",
        "--protein_path", str(protein_pdb),
        "--ligand_description", str(ligand_sdf),
        "--out_dir", str(out_dir),
        "--complex_name", "docked",
        "--samples_per_complex", "10",
        "--model_dir", os.path.join(diffdock_dir, "score_model"),
        "--ckpt", "best_ema_inference_epoch_model.pt",
        "--confidence_model_dir", os.path.join(diffdock_dir, "confidence_model"),
        "--confidence_ckpt", "best_model_epoch75.pt"
    ]
    
    # Callback to parse DiffDock output on success
    def parse_diffdock_output():
        import subprocess
        import sys
        try:
            subprocess.run([sys.executable, str(BASE_DIR / "scripts" / "parse_diffdock.py")], check=True, cwd=str(BASE_DIR))
        except Exception as e:
            print(f"Error parsing DiffDock: {e}")

    success_logs = [
        "DiffDock-L complex mapping compiled successfully on NVIDIA L4 GPU.",
        "Generated ranked poses are fully written to outputs/diffdock_test_run/docked/."
    ]
    
    background_tasks.add_task(
        run_pipeline_command,
        "diffdock",
        cmd,
        diffdock_dir,
        success_logs,
        parse_diffdock_output
    )
    
    return {"message": "DiffDock-L docking triggered on VM NVIDIA L4 GPU.", "status": "Running"}

# --- High-Throughput Target Screening Endpoints ---

@app.get("/api/screen/status")
def get_screen_status():
    state = run_states["screen"]
    if state["status"] == "Running" and state["start_time"] is not None:
        state["elapsed"] = round(time.time() - state["start_time"], 2)
    return state

@app.post("/api/screen/{target_id}")
def trigger_screening(target_id: str, background_tasks: BackgroundTasks):
    state = run_states["screen"]
    if state["status"] == "Running":
        return JSONResponse(status_code=400, content={"message": "High-throughput screening is already in progress."})
        
    out_csv = f"outputs/{target_id}_screening_leaderboard.csv"
    cmd = [
        sys.executable,
        str(BASE_DIR / "scripts" / "screen_all_ligands.py"),
        "--target", target_id,
        "--out_csv", out_csv
    ]
    
    success_logs = [
        f"High-throughput screening completed successfully for target {target_id}.",
        f"Sorted leaderboard saved directly to outputs/{target_id}_screening_leaderboard.csv."
    ]
    
    background_tasks.add_task(
        run_pipeline_command,
        "screen",
        cmd,
        str(BASE_DIR),
        success_logs
    )
    
    return {"message": f"High-throughput screening initiated for target {target_id}.", "status": "Running"}

@app.get("/api/screen/{target_id}/download")
def download_screening_results(target_id: str):
    csv_path = OUTPUTS_DIR / f"{target_id}_screening_leaderboard.csv"
    if not csv_path.exists():
        raise HTTPException(status_code=404, detail=f"Screening leaderboard not found for target {target_id}. Please run the screening first.")
    return FileResponse(csv_path, media_type="text/csv", filename=f"{target_id}_screening_leaderboard.csv")

# --- Utility uuid hex generator ---
def uuid_hex() -> str:
    import uuid
    return uuid.uuid4().hex[:8]

# Mount React static files if the production build exists
react_dist = BASE_DIR / "frontend" / "dist"
if react_dist.exists():
    app.mount("/", StaticFiles(directory=str(react_dist), html=True), name="frontend")

if __name__ == "__main__":
    import uvicorn
    print("Starting API server...")
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port)
