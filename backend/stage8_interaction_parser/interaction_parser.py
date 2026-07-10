import os
import json
import math
import argparse
from typing import List, Dict, Tuple

class Atom:
    def __init__(self, name, res_name, res_seq, chain, x, y, z):
        self.name = name.strip()
        self.res_name = res_name.strip()
        self.res_seq = res_seq
        self.chain = chain.strip()
        self.x = float(x)
        self.y = float(y)
        self.z = float(z)
        self.element = self.name[0] if self.name else ''
        if len(self.name) > 1 and self.name[0].isdigit():
            self.element = self.name[1]

def parse_pdb(file_path: str) -> List[Atom]:
    atoms = []
    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            if line.startswith('ATOM') or line.startswith('HETATM'):
                name = line[12:16]
                res_name = line[17:20]
                chain = line[21]
                res_seq = line[22:26].strip()
                x = line[30:38]
                y = line[38:46]
                z = line[46:54]
                atoms.append(Atom(name, res_name, res_seq, chain, x, y, z))
    return atoms

def parse_sdf(file_path: str) -> List[Atom]:
    atoms = []
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    in_atom_block = False
    atom_count = 0
    parsed_atoms = 0
    for i, line in enumerate(lines):
        if i == 3:
            parts = line.split()
            if len(parts) >= 1:
                atom_count = int(parts[0])
            in_atom_block = True
            continue
        if in_atom_block and parsed_atoms < atom_count:
            x, y, z = line[0:10], line[10:20], line[20:30]
            element = line[31:34].strip()
            atoms.append(Atom(element, 'LIG', '1', 'L', x, y, z))
            parsed_atoms += 1
    return atoms

def calculate_distance(a1: Atom, a2: Atom) -> float:
    return math.sqrt((a1.x - a2.x)**2 + (a1.y - a2.y)**2 + (a1.z - a2.z)**2)

def detect_interactions(receptor_atoms: List[Atom], ligand_atoms: List[Atom]) -> List[Dict]:
    interactions = []
    seen = set()

    for ratom in receptor_atoms:
        for latom in ligand_atoms:
            dist = calculate_distance(ratom, latom)
            
            # Simple interaction heuristics
            int_type = None
            
            # Hydrogen bond
            if ratom.element in ['N', 'O', 'S'] and latom.element in ['N', 'O', 'S', 'F', 'C']: # 'C' allowed as a fallback for weak ones or misparsed
                if dist <= 3.5:
                    int_type = "hydrogen_bond"
                    
            # Hydrophobic
            if not int_type and ratom.element == 'C' and latom.element == 'C':
                hydrophobic_res = ['ALA', 'VAL', 'LEU', 'ILE', 'MET', 'PHE', 'TRP', 'PRO', 'TYR']
                if ratom.res_name in hydrophobic_res and dist <= 4.5:
                    int_type = "hydrophobic"
                    
            # Pi stacking (approximation)
            if not int_type and ratom.element == 'C' and latom.element == 'C':
                aromatic_res = ['PHE', 'TYR', 'TRP', 'HIS']
                if ratom.res_name in aromatic_res and dist <= 4.5:
                    int_type = "pi_stacking"
                    
            # Salt bridge
            if not int_type and dist <= 4.0:
                if ratom.res_name in ['ARG', 'LYS', 'HIS'] and ratom.element == 'N' and latom.element == 'O':
                    int_type = "salt_bridge"
                elif ratom.res_name in ['ASP', 'GLU'] and ratom.element == 'O' and latom.element == 'N':
                    int_type = "salt_bridge"

            if int_type:
                res_key = f"{ratom.res_name}{ratom.res_seq}"
                sig = f"{int_type}_{res_key}_{ratom.chain}"
                
                if sig not in seen:
                    seen.add(sig)
                    interactions.append({
                        "type": int_type,
                        "receptor_residue": res_key,
                        "receptor_chain": ratom.chain,
                        "distance_angstroms": round(dist, 2)
                    })
                    
    return interactions

def main():
    parser = argparse.ArgumentParser(description="Stage 8 Interaction Parser")
    parser.add_argument("--receptor", required=True, help="Path to clean_receptor.pdb")
    parser.add_argument("--ligand", required=True, help="Path to ligand .pdbqt or .sdf")
    parser.add_argument("--target_id", required=True, help="Target ID")
    parser.add_argument("--ligand_id", required=True, help="Ligand ID")
    parser.add_argument("--out_dir", required=True, help="Output directory")
    args = parser.parse_args()
    
    os.makedirs(args.out_dir, exist_ok=True)
    
    receptor_atoms = parse_pdb(args.receptor)
    if args.ligand.endswith('.sdf'):
        ligand_atoms = parse_sdf(args.ligand)
    else:
        # PDBQT is similar enough to PDB for basic atom parsing
        ligand_atoms = parse_pdb(args.ligand)

    interactions = detect_interactions(receptor_atoms, ligand_atoms)
    
    # Sort for deterministic output
    interactions.sort(key=lambda x: (x["type"], x["distance_angstroms"]))

    h_bonds = sum(1 for i in interactions if i["type"] == "hydrogen_bond")
    hydrophobic = sum(1 for i in interactions if i["type"] == "hydrophobic")

    report = {
        "status": "SUCCESS",
        "target_id": args.target_id,
        "ligand_id": args.ligand_id,
        "interactions": interactions,
        "summary": {
            "total_h_bonds": h_bonds,
            "total_hydrophobic": hydrophobic
        }
    }

    report_path = os.path.join(args.out_dir, "interaction_report.json")
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2)
        
    parser_report = {
        "parser_version": "1.0",
        "receptor_file": args.receptor,
        "ligand_file": args.ligand,
        "total_interactions_found": len(interactions),
        "status": "SUCCESS"
    }
    
    parser_report_path = os.path.join(args.out_dir, "interaction_parser_report.json")
    with open(parser_report_path, "w", encoding="utf-8") as f:
        json.dump(parser_report, f, indent=2)

    print(f"Generated {report_path}")
    print(f"Generated {parser_report_path}")

if __name__ == "__main__":
    main()
