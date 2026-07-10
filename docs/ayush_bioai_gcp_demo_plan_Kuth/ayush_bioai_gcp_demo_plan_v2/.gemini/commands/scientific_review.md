# Gemini CLI Command Template — Scientific Review

Prompt:

Read `memory/NO_HALLUCINATION_RULES.md`, the `AGENTS.md` output-interpretation section,
`contracts/scientific_language.yaml`, and `docs/07_EVIDENCE_PASSPORT_OUTPUT_SPEC.md`.

Review `outputs/interaction_summary.json`, `outputs/mechanism_graph.json`,
`outputs/combination_plausibility.json`, and `outputs/evidence_passport.{json,md}` for scientific
overclaiming, defensible mechanism hypotheses, correct interpretation of DiffDock/Vina/score
semantics, allowed `validation_decision` wording, and required scenario-specific cautions (e.g. a
membrane-transporter caution such as NorA in the archived scenario). Write
`outputs/scientific_review.json` with finding → severity → suggested cautious
rewrite and a pass/needs-revision verdict. This is the Gemini-side mirror of the
`scientific-validity-reviewer` agent. Advisory only — do not edit artifacts.
