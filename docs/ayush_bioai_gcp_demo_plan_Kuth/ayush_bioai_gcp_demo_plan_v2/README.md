# AYUSH Bio-AI Evidence Demo — Gemini CLI / Claude Code Execution Pack

## Purpose

Build a serious, ministry-ready MVP demo for Mevreon’s AYUSH anti-infective proposal.

The demo is **not** a casual dashboard. It is a **mechanism-linked Bio-AI evidence engine** that shows how an AYUSH active marker can be mapped to AMR-relevant bacterial protein targets, docked in-silico, compared against an antibiotic context, and converted into a validation-ready evidence passport.

## Scenario focus

Work routes off a **`scenario_id`** resolved from `configs/scenarios/scenario_registry.yaml`
(precedence: `SCENARIO_ID` env → registry `default_scenario`). See `docs/16` and
`contracts/scenario_schema.md`.

Active scenarios (**shipped default = Scenario_1, `primary_kuth_pseudomonas`**):

- `primary_kuth_pseudomonas` (default) — Costunolide / Dehydrocostus lactone →
  *Pseudomonas aeruginosa*; targets LasR, PqsR / MvfR.
- `secondary_kuth_staphylococcus` — Costunolide / Dehydrocostus lactone → *Staphylococcus aureus*;
  targets AgrA, Sortase A / SrtA.

Archived (reference only, never default): `archived_trikatu_prior` — the former single demo case
(Piperine → MRSA/NorA, Ciprofloxacin comparator), preserved at
`configs/archived_reference_scenarios/scenario_prior.yaml`.

Output for any scenario: a Global Evidence Passport presenting the active marker(s) and target(s) as a
validation-priority hypothesis.

## Non-negotiable scientific boundary

The MVP must never claim:

- clinical efficacy
- proven synergy
- patient-level recommendation
- validated MRSA cure
- regulatory readiness

The correct claim is:

> The system identifies an in-silico, mechanism-supported AYUSH–antibiotic combination hypothesis and recommends the next wet-lab validation package.

## Main output

The live demo should show:

1. Selected AYUSH candidate and active marker
2. Selected bacterial protein target and AMR context
3. Structure readiness status
4. DiffDock-L AI pose result
5. AutoDock Vina baseline docking score
6. Interaction/mechanism graph
7. Validation Priority Score
8. Global Evidence Passport
9. Wet-lab validation checklist

## Repo files included in this planning pack

- `AGENTS.md` — canonical instructions for both Gemini CLI and Claude Code
- `GEMINI.md` — Gemini CLI project memory (+ Agent roles)
- `CLAUDE.md` — Claude Code project memory importing common instructions
- `docs/` — `01` scope/gates, `02` data plan, `03` model flow, `04` runbook (run modes + rollback),
  `05` GCP deployment, `06` agent orchestration, `07` passport spec, `08` quality gates,
  `09` demo script, `10` validate_contracts spec, `11` MVP-vs-Future roadmap,
  `12` fetcher module specs, `13` env-var config contract, `14` background-docs extraction note,
  `15` deployment runbook (post code-build), `16` scenario selection
- `.claude/agents/` — the 10 Claude Code subagents (coordinator + 9 specialists)
- `.claude/skills/ayush-bio-ai-demo/SKILL.md` — reusable project skill
- `.gemini/commands/` — Gemini CLI prompt/command templates
- `contracts/` — `input_schemas.md`, `output_json_contracts.md`, `vocabularies.md` (enums/provenance/scales),
  `scenario_schema.md` (scenario routing fields), `scientific_language.yaml` (single allowed/forbidden wordlist)
- `infra/` — env-var-only GCP scripts: `bootstrap_gcp.sh` (APIs/AR/buckets/SA/IAM),
  `provision_gpu_vm.sh` (scripted GPU VM), `gcp_vm_gpu_setup.md`, `cloudrun/` (service + job deploys)
- `memory/` — project decisions and non-hallucination rules
- `.env.example` — environment template (placeholders only; see `docs/13`)

## Execution mode

**Claude Code is the primary build driver** (agent teams in `.claude/agents/` + dynamic workflows).
Gemini CLI is **supported** via the shared `AGENTS.md` and the `.gemini/commands/*` role checklists,
as a fallback or second independent reviewer — both read the same contracts and acceptance gates, so
an artifact produced by either is checkable by `qa-contracts-validator`.

A single primary driver is recommended for the MVP to avoid two-driver divergence on the shared
contracts; running both in parallel is possible but optional. Independent of the build driver, the
**Evidence Passport step uses Gemini on Vertex AI at runtime** (with a local-mock fallback).
