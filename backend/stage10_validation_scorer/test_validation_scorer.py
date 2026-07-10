import unittest
from validation_scorer import score_affinity, score_confidence, score_interactions

class TestValidationScorer(unittest.TestCase):
    
    def test_score_affinity(self):
        # Best affinity: -12 => 40 points
        self.assertEqual(score_affinity(-12.0), 40.0)
        # Above best affinity bounds to 40
        self.assertEqual(score_affinity(-15.0), 40.0)
        # Half affinity: -6 => 20 points
        self.assertEqual(score_affinity(-6.0), 20.0)
        # Bad affinity (positive or 0) => 0 points
        self.assertEqual(score_affinity(0.0), 0.0)
        self.assertEqual(score_affinity(2.0), 0.0)

    def test_score_confidence(self):
        # Expected range -2.0 to 2.0 maps to 0 to 35
        self.assertEqual(score_confidence(2.0), 35.0)
        self.assertEqual(score_confidence(0.0), 17.5)
        self.assertEqual(score_confidence(-2.0), 0.0)
        # Out of bounds
        self.assertEqual(score_confidence(-3.0), 0.0)
        self.assertEqual(score_confidence(3.0), 35.0)

    def test_score_interactions(self):
        # 5 per h-bond, 2 per hydrophobic. Max 25
        self.assertEqual(score_interactions(1, 1), 7.0)
        self.assertEqual(score_interactions(5, 0), 25.0)
        # Bounds to 25
        self.assertEqual(score_interactions(6, 5), 25.0)
        self.assertEqual(score_interactions(0, 0), 0.0)

if __name__ == '__main__':
    unittest.main()
