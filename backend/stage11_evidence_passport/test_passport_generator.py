import unittest
import os
from passport_generator import generate_passport, generate_markdown, DISCLAIMER

class TestPassportGenerator(unittest.TestCase):
    def setUp(self):
        self.dummy_target = "dummy_target.csv"
        self.dummy_ligand = "dummy_ligand.csv"
        
        with open(self.dummy_target, "w", encoding="utf-8") as f:
            f.write("gene_symbol,target_label,organism_key\nlasr,LasR,Pseudomonas aeruginosa\n")
            
        with open(self.dummy_ligand, "w", encoding="utf-8") as f:
            f.write("compound_id,compound_name,pubchem_cid\ncostunolide,Costunolide,123456\n")
            
        self.validation = {
            "validation_priority_score": 85.0,
            "decision": "Prioritize for wet-lab validation",
            "evidence_strength": "High"
        }
        
        self.interaction = {
            "interactions": [{"type": "hydrogen_bond", "receptor_residue": "TRP60", "receptor_chain": "A", "distance_angstroms": 2.8}]
        }
        
        self.mechanism = {
            "edges": [{"source": "C", "target": "T", "relation": "binds"}]
        }

    def tearDown(self):
        if os.path.exists(self.dummy_target):
            os.remove(self.dummy_target)
        if os.path.exists(self.dummy_ligand):
            os.remove(self.dummy_ligand)

    def test_generate_passport(self):
        passport = generate_passport(
            target_id="lasr",
            ligand_id="costunolide",
            interaction_report={},
            mechanism_graph={},
            validation_score=self.validation,
            traceability_data=[],
            resolution_report={"details": [{"target_id": "lasr", "structure_source": "PDB", "structure_id": "1XYZ"}]},
            target_registry_path=self.dummy_target,
            ligand_registry_path=self.dummy_ligand
        )
        
        self.assertIn("passport_id", passport)
        self.assertTrue(passport["passport_id"].startswith("EP-LASR-COSTU"))
        self.assertIn("executive_summary", passport)
        self.assertIn("85.0/100", passport["executive_summary"])
        self.assertTrue(len(passport["traceability_matrix"]) >= 2)
        
        # Test structure matrix
        struct_entry = next(e for e in passport["traceability_matrix"] if "Structure" in e["entity"])
        self.assertEqual(struct_entry["source"], "PDB")
        self.assertEqual(struct_entry["accession_or_url"], "1XYZ")
        
        self.assertTrue(len(passport["next_validation_steps"]) > 0)

    def test_generate_markdown(self):
        passport = {
            "passport_id": "EP-TEST-01",
            "generated_at": "2026-06-20",
            "executive_summary": "Test summary",
            "traceability_matrix": [{"entity": "E1", "source": "S1", "accession_or_url": "A1"}],
            "next_validation_steps": ["Step 1"]
        }
        md = generate_markdown(passport, self.interaction, self.mechanism, self.validation)
        
        self.assertIn("# Global Evidence Passport: EP-TEST-01", md)
        self.assertIn("85.0", md)
        self.assertIn("Prioritize for wet-lab validation", md)
        self.assertIn("Hydrogen Bond", md)
        self.assertIn("TRP60", md)
        self.assertIn(DISCLAIMER, md)
        self.assertIn("Not evidence of efficacy", md)

if __name__ == '__main__':
    unittest.main()
