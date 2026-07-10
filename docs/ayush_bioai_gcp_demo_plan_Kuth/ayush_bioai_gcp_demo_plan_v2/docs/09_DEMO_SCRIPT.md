# 09 — Live Demo Script

## Pre-demo checklist (REAL bar)
- `RUN_MODE=demo` over REAL artifacts; `validate_contracts` Gate 5 green with `--strict-warn`.
- No `run_status=mock` anywhere; every on-screen number resolves to a source artifact (provenance).
- Disclaimers visible; wet-lab checklist present.
- Honest fallback: if any real artifact is missing, show `missing_real_data` / `structure_pending` —
  never a fabricated value.

## Opening
"Today we are showing a research-use-only Bio-AI evidence demo. It does not claim clinical efficacy.
It shows how an AYUSH active marker can be translated into a mechanism-linked validation package
against an AMR pathogen."

## Step 1 — Select AYUSH candidate
Trikatu / Pippali / Maricha; active marker Piperine.
"Instead of treating AYUSH as a vague formulation, the system converts it into an active-marker and
ligand-level evidence object."

## Step 2 — Select pathogen target
MRSA; NorA efflux pump; biofilm-high context.
"We are not docking against a bacterium. We are docking against a bacterial protein target associated
with resistance and persistence biology."

## Step 3 — Select antibiotic comparator
Ciprofloxacin.
"Ciprofloxacin gives us an antibiotic-adjuvant hypothesis: Piperine may be prioritized for validation
as an efflux/biofilm modulator, not as a replacement antibiotic."

## Step 4 — Run Bio-AI pipeline
Show ligand readiness, target structure readiness, Vina baseline, then DiffDock-L pose.
"The Vina baseline adds a classical docking sanity check; the AI docking layer proposes a pose."

## Step 5 — Show mechanism graph
"The platform links Piperine to NorA/efflux, biofilm-pathway context, MRSA persistence, and
antibiotic-adjuvant validation." (Rendered from `mechanism_graph.json`.)

## Step 6 — Show Evidence Passport
"The final output is not a drug claim. It is a validation passport: what to test next, why, and what
evidence is missing." (Validation Priority Score shown 0–100.)

## Close
"This is the bridge from AYUSH knowledge to globally interpretable, mechanism-linked, preclinical
validation planning."

> Footer at all times: "Research-use-only prioritization demo. Not clinical guidance."
