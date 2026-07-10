# Session Summary — 2026-06-08 (4 PM)

AYUSH Bio-AI Evidence Demo — single-demo → scenario-router refactor.

Internal, non-commercial research configuration work. No code/runtime logic, wet-lab protocols, or
efficacy claims were added — config files, schema/contracts, docs, and agent/memory/skill routing
rules only.

---

## Architectural choices made this session

- **Single source of truth for routing** = `configs/scenarios/scenario_registry.yaml`. Everything
  resolves the active scenario by `scenario_id`; no module hardcodes Trikatu/Piperine/NorA.
- **Selection precedence**: `SCENARIO_ID` env var → registry `default_scenario`
  (`primary_kuth_pseudomonas`). Mirrors the existing env-first pattern in `model_run_config.yaml`.
- **Active scenarios**:
  - `primary_kuth_pseudomonas` (**default**) — Costunolide / Dehydrocostus lactone →
    *Pseudomonas aeruginosa*; targets LasR, PqsR / MvfR; focus: quorum sensing, virulence, biofilm
    maturation.
  - `secondary_kuth_staphylococcus` — Costunolide / Dehydrocostus lactone → *Staphylococcus aureus*;
    targets AgrA, Sortase A / SrtA; focus: quorum sensing, adhesion, biofilm initiation.
- **Archived, never default**: `archived_trikatu_prior` (former single demo: Piperine → MRSA/NorA,
  Ciprofloxacin comparator), preserved at
  `configs/archived_reference_scenarios/scenario_prior.yaml`.
- **Directory convention**: kept everything under `configs/` (plural) — one config root, decided over
  the spec's `config/` (singular) to avoid two parallel config directories.
- **Schema**: `contracts/scenario_schema.md` defines the 11 scenario fields + `status` enum
  (`active | archived`). Curation rules: manual rows only (no compound × target cross-products), no
  synergy/FICI/checkerboard required fields, `comparator_control` nullable for active scenarios.
- **Contract wiring**: `scenario_id` added to `run_manifest.json` and `evidence_passport.json`;
  `demo_case` demoted to legacy/optional; `antibiotic_comparator` made nullable to match nullable
  `comparator_control`. Added `vocabularies.md` §7b, `docs/16` selection guide, and the `SCENARIO_ID`
  row in `docs/13`.
- **Safety invariants preserved**: no invented identifiers; the NorA membrane-caution rule was
  generalized to "any membrane-transporter / low-confidence target"; nothing was deleted.

### Files created
- `configs/scenarios/scenario_registry.yaml`
- `configs/archived_reference_scenarios/scenario_prior.yaml`
- `contracts/scenario_schema.md`
- `docs/16_SCENARIO_SELECTION.md`

### Files modified
- `project.yaml`, `configs/model_run_config.yaml` (demo_case literal → scenario routing)
- `docs/13_ENV_VAR_CONFIG_CONTRACT.md` (`SCENARIO_ID`)
- `contracts/vocabularies.md`, `contracts/output_json_contracts.md`, `contracts/input_schemas.md`
- `AGENTS.md`, `GEMINI.md`, `README.md`, `CLAUDE.md`
- `memory/PROJECT_MEMORY.md`, `memory/NO_HALLUCINATION_RULES.md`
- `.claude/skills/ayush-bio-ai-demo/SKILL.md`
- `.claude/agents/ligand-prep-engineer.md`, `target-structure-resolver.md`,
  `scientific-validity-reviewer.md`
- `.gemini/commands/scientific_review.md`

### Reference data
- `background_docs/Ayush.xlsx` parsed cleanly and confirmed the scenario labels
  (Kuth / *Saussurea costus*; Costunolide + Dehydrocostus lactone → *P. aeruginosa* and *S. aureus*).
  All values came from the user-supplied source-of-truth mapping; none were inferred.

---

## Next implementation steps (not yet done)

1. **Scenario enforcement in `validate_contracts`** — `docs/10` is currently a spec only. Add a
   `CHK-SCENARIO-*` family (registry validity, single default, archived-never-default,
   resolved-id-not-archived, no auto cross-product). Wire registry/default checks into Gate 0 and
   the resolved-id check into Gate 3/4. Highest priority — it is the project's honesty gate.
2. **Resolver utility** — one helper that loads the registry, applies precedence
   (`SCENARIO_ID` → `default_scenario`), rejects archived ids, and returns the active scenario
   record. All agents/UI call this; avoids re-parsing YAML in multiple places.
3. **Per-scenario input registries** — populate `data/inputs/*.csv` for the default scenario with
   real/curated identifiers (SMILES, accessions); missing → `missing_real_data`, never invented.
4. **Stamp `scenario_id`** into the manifest/passport writer modules when those are built.
5. **Docs sweep** — `docs/04` runbook and `docs/09` demo script still narrate the old single case;
   update to scenario-driven narration.

---

## How correctness is ensured (verification strategy)

Layered, cheapest-first:

1. **YAML parse** of both scenario files — passing.
2. **Invariant assertions**: exactly one active default; archived never default; `default_scenario`
   resolves to an active record — passing.
3. **Cross-reference grep**: no routing file treats Trikatu/Piperine/NorA as the default (only the
   explicit "never default" archival note mentions them) — passing.
4. **Resolver unit tests** (once the helper exists): unset env → default; `secondary…` → that record;
   `archived_trikatu_prior` → rejected; bogus id → error. Highest-value test (shared code path).
5. **Contract round-trip**: a sample `run_manifest.json` / `evidence_passport.json` for the default
   scenario passes `validate_contracts` with the new `CHK-SCENARIO-*` checks green.
6. **No-hallucination guard**: identity columns are fetched/curated or `missing_real_data`, never
   invented (existing `CHK-IDENTITY-NOSYNTH` + the scenario curation rule).

Acceptance bar for "not buggy": items 1–3 are already green; items 4–6 go green once the resolver and
the validator scenario checks are implemented.
