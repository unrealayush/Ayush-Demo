# 01 — MVP Scope and Go/No-Go

## MVP objective

Create a live demo that shows how Mevreon converts an AYUSH candidate into a mechanism-linked validation package against an AMR bacterial target.

## In scope

- Trikatu / Pippali / Maricha case
- Piperine active-marker handling
- MRSA / Staphylococcus aureus target context
- NorA efflux-pump structure resolution
- Ciprofloxacin comparator context
- DiffDock-L AI docking
- AutoDock Vina classical docking baseline
- Interaction summary
- Mechanism graph
- Evidence Passport
- GCP deployment

## Out of scope for MVP

- real patient data
- patient omics
- host transcriptomics
- GNINA
- ESM-2
- ChemBERTa / MolFormer
- Graph neural networks
- clinical decision support
- regulatory claim

## Go/No-Go gates

### Gate 1 — Real data source readiness

Go only if at least:

- Piperine ligand structure is fetched or curated from a real public source
- Ciprofloxacin ligand structure is fetched or curated from a real public source
- MRSA/NorA target sequence or structure source is identified
- Source traceability CSV is complete

### Gate 2 — Structure readiness

Go only if:

- PDB or AlphaFold DB or ESMFold2 fallback provides a usable structure file
- Structure quality metadata is captured
- For low-quality membrane-transporter docking, UI shows caution

### Gate 3 — Docking run

Go only if:

- DiffDock-L outputs a pose file and confidence
- Vina outputs a score and pose file
- Both results are serialized to JSON

### Gate 4 — UI integrity

Go only if:

- UI reads from JSON files
- no score is hardcoded
- research-use-only disclaimer is visible

### Gate 5 — Scientific integrity

Go only if:

- synergy is called "combination plausibility"
- wet-lab validation checklist is visible
- no patient or clinical claims appear
