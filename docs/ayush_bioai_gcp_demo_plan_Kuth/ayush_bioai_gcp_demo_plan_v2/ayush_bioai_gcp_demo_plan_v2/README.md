# AYUSH Bio-AI Evidence Demo — Gemini CLI / Claude Code Execution Pack

## Purpose

Build a serious, ministry-ready MVP demo for Mevreon’s AYUSH anti-infective proposal.

The demo is **not** a casual dashboard. It is a **mechanism-linked Bio-AI evidence engine** that shows how an AYUSH active marker can be mapped to AMR-relevant bacterial protein targets, docked in-silico, compared against an antibiotic context, and converted into a validation-ready evidence passport.

## Demo focus

Primary demo case:

- AYUSH candidate: Trikatu / Pippali / Maricha
- Active marker: Piperine
- Pathogen context: MRSA / Staphylococcus aureus
- AMR mechanism focus: NorA efflux / biofilm-high context
- Antibiotic comparator: Ciprofloxacin
- Output: Global Evidence Passport for Piperine + Ciprofloxacin as a validation-priority combination

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
- `GEMINI.md` — Gemini CLI project memory
- `CLAUDE.md` — Claude Code project memory importing common instructions
- `docs/` — execution plan, data plan, model flow, deployment plan, quality gates
- `.claude/agents/` — Claude Code-style subagents
- `.claude/skills/ayush-bio-ai-demo/SKILL.md` — reusable project skill
- `.gemini/commands/` — Gemini CLI prompt/command templates
- `contracts/` — data and output contracts
- `infra/` — GCP deployment skeletons
- `memory/` — project decisions and non-hallucination rules

## Execution mode

You can execute with either:

- Gemini CLI as primary coding agent
- Claude Code as primary coding agent
- Both in parallel, using the same `AGENTS.md`, data contracts, and acceptance gates

The preferred first execution is Gemini CLI because the deployment target is GCP. Claude Code can be used for code review, refactoring, test hardening, and scientific logic checks.
