# Internal Build Plan — Claude Code features → build phases

Internal, non-commercial research reference. Shows **which Claude Code feature drives each phase** of
the AYUSH scenario-router pipeline build, and **how fast** code is generated (what runs in parallel vs.
sequentially).

This is the **Layer 2 — Build-time** mechanism view (how we *write* the pipeline). Layer 1 (the
runtime model stack: RDKit → resolver → Vina → DiffDock-L → interaction → passport) is in `AGENTS.md`.
Companion doc: `.claude/docs/code-generation-flow.md` (the step-by-step *how-it-flows*).

---

## Layer 2 — Build-time: hybrid of Agent teams + Dynamic workflows

### Judgment per option

| Option | Verdict | Why |
|---|---|---|
| **Agent teams** (`.claude/agents/*`) | ✅ **Primary unit** | The 10 agents already map 1:1 to pipeline modules with inputs / outputs / never-invent / acceptance criteria. Ideal for delegating bounded specialist authoring, plus the two recurring reviewers (`qa-contracts-validator`, `scientific-validity-reviewer`). |
| **Dynamic workflows** (Workflow tool) | ✅ **For parallel + verify** | Use where work is embarrassingly parallel with a verification barrier — fan-out authoring of the fetcher / prep modules, the test suite, and a review → adversarially-verify pass over passport language / contracts. Worktree isolation since modules touch different files. |
| **Managed Teams** | ❌ **Skip** | Overkill. Persistent multi-agent teams pay off for long-lived, stateful, open-ended collaboration. This build is *well-specified, gated, mostly-sequential* — the coordination is already encoded in the contracts + `validate_contracts` gates. A managed-team runtime adds operational state/complexity with no payoff. |

---

## How I'd actually drive the build

| Build phase | Mechanism | Parallelism / speed | Rationale |
|---|---|---|---|
| Contracts + `validate_contracts.py` + schemas | **Solo** (main session) | Sequential; fast (single pass) | Foundational, single-author for consistency; everything else depends on it being exact. |
| Scenario resolver + tests | **Solo / 1 agent** | Sequential; fast | One shared code path every consumer calls. Already drafted: `src/scenario_resolver.py`; tests next. |
| Fetchers + ligand-prep + structure-resolver | **Dynamic workflow** (fan-out, worktree-isolated; each: author → run `validate_contracts` → fix) | **High — N modules at once** | Independent files, parallelizable, identical verify step → ideal workflow shape. **This is the main speed lever.** |
| Vina + DiffDock-L wrappers | **Agent** (sequential) | Low — GPU-serialized | Environment-specific; no fan-out benefit. |
| interaction → mechanism graph → scorer → passport | **Agent** (linear chain) | Sequential by dependency | Hard data dependencies; `interaction-analyst` then `evidence-passport-designer`. |
| QA + scientific review | **Agent team** (recurring) + optional **workflow** for an adversarial multi-verifier pass on passport language | Parallel verify | `qa-contracts-validator` runs the deterministic gate; `scientific-validity-reviewer` does the LLM judgment. The one place repeated LLM review genuinely adds value. |
| GCP deploy | **Solo / agent** (human-in-loop) | Gated, manual | Auth, project IDs, irreversible-ish actions — keep a human gate. |

---

## How quickly — speed summary

- **Critical path is short:** contracts (solo) → fan-out workflow for the data modules → sequential
  docking/analysis chain → recurring review → gated deploy.
- **Where the speed comes from:** the fan-out workflow phase — authoring many independent modules
  concurrently, each self-verifying against `validate_contracts`, instead of one-by-one.
- **Where it stays slow on purpose:** docking wrappers (GPU-serialized) and deploy (human gate) — not
  parallelized by design.
- **Bug control is built into each phase**, not bolted on: every authored module runs
  `validate_contracts` before handoff. See `.claude/docs/code-generation-flow.md` Part B for the
  `PostToolUse` hook that makes that automatic.

## Two more notes
1. **Contracts gate the whole tree.** Because the fan-out modules each verify against the same
   contracts, parallel authoring can't drift — the gate is the synchronization point, not a shared
   runtime.
2. **Scenario-aware throughout.** Every phase resolves the active scenario via `src/scenario_resolver.py`
   (default `primary_kuth_pseudomonas`); no module hardcodes a case, so the same build serves all
   active scenarios.
