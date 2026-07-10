# Project Memory

## MVP decision log

- The first MVP is not a patient-data product.
- The fourth input should be called Study Context, not Host/Patient Context.
- ESM-2 is excluded from visible MVP because it adds model clutter and is older.
- ESMFold2 is allowed only as a fallback protein-structure resolver when no good PDB or AlphaFold DB structure exists.
- GNINA is excluded from MVP and moved to Phase 2.
- DiffDock-L + AutoDock Vina are the MVP docking stack.
- Gemini is used for evidence synthesis and scientific critic, not for scoring raw docking.
- All output values must be traceable to generated JSON/CSV files.

## Default demo route

Trikatu/Piperine → MRSA/NorA → Ciprofloxacin comparator → DiffDock-L pose → Vina baseline → interaction parser → validation-priority score → Global Evidence Passport.
