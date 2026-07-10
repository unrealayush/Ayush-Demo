import unittest
import os
import json
from mechanism_graph_builder import build_mechanism_graph, TARGET_FUNCTION_MAP

class TestMechanismGraphBuilder(unittest.TestCase):
    def setUp(self):
        self.mock_interaction = {
            "status": "SUCCESS",
            "target_id": "lasr",
            "ligand_id": "costunolide",
            "interactions": [
                {
                    "type": "hydrogen_bond",
                    "receptor_residue": "TRP60",
                    "receptor_chain": "A",
                    "distance_angstroms": 2.8
                }
            ],
            "summary": {
                "total_h_bonds": 1,
                "total_hydrophobic": 0
            }
        }
        self.dummy_registry = "dummy_registry.csv"
        self.dummy_study = "dummy_study.csv"
        
        with open(self.dummy_registry, "w", encoding="utf-8") as f:
            f.write("gene_symbol,target_label\nlasr,LasR\n")
            
    def tearDown(self):
        if os.path.exists(self.dummy_registry):
            os.remove(self.dummy_registry)
        if os.path.exists(self.dummy_study):
            os.remove(self.dummy_study)

    def test_build_mechanism_graph(self):
        graph = build_mechanism_graph(self.mock_interaction, self.dummy_registry, self.dummy_study)
        
        # Test Nodes
        nodes = graph["nodes"]
        self.assertEqual(len(nodes), 4)
        node_types = [n["type"] for n in nodes]
        self.assertIn("compound", node_types)
        self.assertIn("target", node_types)
        self.assertIn("pathway", node_types)
        self.assertIn("phenotype", node_types)
        
        # Test Labels
        target_node = next(n for n in nodes if n["type"] == "target")
        self.assertEqual(target_node["label"], "LasR")
        
        pathway_node = next(n for n in nodes if n["type"] == "pathway")
        self.assertEqual(pathway_node["label"], "Quorum Sensing")
        
        phenotype_node = next(n for n in nodes if n["type"] == "phenotype")
        self.assertEqual(phenotype_node["label"], "Biofilm Maturation")

        # Test Edges
        edges = graph["edges"]
        self.assertEqual(len(edges), 4)
        binds_edge = next(e for e in edges if e["source"] == "C_costunolide" and e["target"] == "T_lasr")
        self.assertEqual(binds_edge["relation"], "binds_to (Hydrogen bond TRP60)")

    def test_default_fallback(self):
        unknown_interaction = {
            "status": "SUCCESS",
            "target_id": "unknown_gene",
            "ligand_id": "unknown_ligand",
            "interactions": []
        }
        graph = build_mechanism_graph(unknown_interaction, self.dummy_registry, self.dummy_study)
        
        pathway_node = next(n for n in graph["nodes"] if n["type"] == "pathway")
        self.assertEqual(pathway_node["label"], "Unknown Pathway")
        
        binds_edge = next(e for e in graph["edges"] if e["source"] == "C_unknown_ligand" and e["target"] == "T_unknown_gene")
        self.assertEqual(binds_edge["relation"], "binds_to")

if __name__ == '__main__':
    unittest.main()
