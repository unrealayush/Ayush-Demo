import os
import json
import argparse
import glob
from typing import Dict, Any

def get_vina_affinity(vina_report_path: str) -> float:
    if os.path.exists(vina_report_path):
        with open(vina_report_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            # Find mode 1
            for res in data.get("results", []):
                if res.get("mode") == 1:
                    return float(res.get("affinity_kcal_mol", 0.0))
    return 0.0

def get_diffdock_confidence(diffdock_report_path: str, diffdock_dir: str) -> float:
    if os.path.exists(diffdock_report_path):
        with open(diffdock_report_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            if data and len(data) > 0:
                return float(data[0].get("confidence", -2.0))
    
    # Fallback to parsing directory
    if os.path.exists(diffdock_dir):
        files = glob.glob(os.path.join(diffdock_dir, "rank1_confidence*.sdf"))
        if files:
            filename = os.path.basename(files[0])
            # rank1_confidence-0.96.sdf
            try:
                conf_str = filename.replace("rank1_confidence", "").replace(".sdf", "")
                if conf_str.startswith("-"):
                    # it might be "-0.96"
                    pass
                return float(conf_str)
            except ValueError:
                pass
    return -2.0

def get_interaction_counts(interaction_report_path: str) -> Dict[str, int]:
    if os.path.exists(interaction_report_path):
        with open(interaction_report_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return data.get("summary", {"total_h_bonds": 0, "total_hydrophobic": 0})
    return {"total_h_bonds": 0, "total_hydrophobic": 0}

def score_affinity(affinity: float) -> float:
    # 0 to 40 points. Best affinity around -12 kcal/mol
    if affinity >= 0:
        return 0.0
    score = (-affinity / 12.0) * 40.0
    return min(40.0, max(0.0, round(score, 1)))

def score_confidence(confidence: float) -> float:
    # 0 to 35 points. Expected range -2.0 to +2.0
    # Map -2.0 -> 0, +2.0 -> 35
    normalized = (confidence + 2.0) / 4.0
    score = normalized * 35.0
    return min(35.0, max(0.0, round(score, 1)))

def score_interactions(h_bonds: int, hydrophobic: int) -> float:
    # 0 to 25 points. 5 per H-bond, 2 per hydrophobic
    score = (h_bonds * 5.0) + (hydrophobic * 2.0)
    return min(25.0, max(0.0, round(score, 1)))

def main():
    parser = argparse.ArgumentParser(description="Stage 10 Validation Priority Scorer")
    parser.add_argument("--interaction_report", default="outputs/interaction_report.json")
    parser.add_argument("--mechanism_graph", default="outputs/mechanism_graph.json")
    parser.add_argument("--vina_report", default="outputs/vina_results.json")
    parser.add_argument("--vina_fallback", default="assets/vina_validation_report.json")
    parser.add_argument("--diffdock_report", default="outputs/diffdock_results.json")
    parser.add_argument("--diffdock_dir", default="outputs/diffdock_test_run/docked")
    parser.add_argument("--out_dir", required=True)
    args = parser.parse_args()
    
    os.makedirs(args.out_dir, exist_ok=True)
    
    # 1. Fetch metrics
    vina_path = args.vina_report if os.path.exists(args.vina_report) else args.vina_fallback
    affinity = get_vina_affinity(vina_path)
    
    confidence = get_diffdock_confidence(args.diffdock_report, args.diffdock_dir)
    
    interactions = get_interaction_counts(args.interaction_report)
    h_bonds = interactions.get("total_h_bonds", 0)
    hydrophobic = interactions.get("total_hydrophobic", 0)
    
    # 2. Calculate contributions
    aff_contrib = score_affinity(affinity)
    conf_contrib = score_confidence(confidence)
    int_contrib = score_interactions(h_bonds, hydrophobic)
    
    total_score = round(aff_contrib + conf_contrib + int_contrib, 1)
    
    # 3. Determine decision and interpretation
    if total_score >= 80.0:
        decision = "Prioritize for wet-lab validation"
        evidence_strength = "High preclinical plausibility"
    elif total_score >= 60.0:
        decision = "Consider for wet-lab validation"
        evidence_strength = "Moderate preclinical plausibility"
    else:
        decision = "Review manually"
        evidence_strength = "Low preclinical plausibility"
        
    interpretation = "Validation-priority signal only; not clinical efficacy."
    
    # 4. Construct Output JSON
    output = {
        "validation_priority_score": total_score,
        "decision": decision,
        "evidence_strength": evidence_strength,
        "interpretation": interpretation,
        "metrics": {
            "affinity_contribution": aff_contrib,
            "confidence_contribution": conf_contrib,
            "interaction_contribution": int_contrib
        }
    }
    
    out_file = os.path.join(args.out_dir, "validation_priority_score.json")
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2)
        
    report = {
        "status": "SUCCESS",
        "inputs_processed": {
            "affinity": affinity,
            "confidence": confidence,
            "h_bonds": h_bonds,
            "hydrophobic": hydrophobic
        },
        "final_score": total_score
    }
    
    out_report = os.path.join(args.out_dir, "validation_priority_report.json")
    with open(out_report, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2)
        
    print(f"Generated {out_file}")
    print(f"Generated {out_report}")

if __name__ == "__main__":
    main()
