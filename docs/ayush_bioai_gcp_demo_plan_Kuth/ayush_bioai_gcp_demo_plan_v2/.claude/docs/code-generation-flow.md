# Code-Generation Flow & Bug-Prevention Configuration (Internal)

Internal team reference. Explains **how Claude Code generates code in this repo, step by step**, and
**what can be configured in Claude Code to prevent bugs**. Non-commercial research use.

---

## Part A — How Claude Code runs code generation (step by step)

1. **Context load.** On session start Claude reads `CLAUDE.md` → `@AGENTS.md` (project memory), the
   `.claude/agents/*` subagents, `.claude/skills/*`, and `memory/*`. For this repo that injects the
   scenario routing rule up front: *resolve `scenario_id`, never hardcode Trikatu/Piperine/NorA*.

2. **Plan mode (review gate).** Recommended for non-trivial work. Claude explores read-only (Explore
   agents), designs an approach, writes a plan file, and calls ExitPlanMode. **No edits happen until
   you approve the plan.** This is the team's first human checkpoint.

3. **Task decomposition.** Claude creates a todo list (TaskCreate/TaskUpdate) so multi-step work is
   tracked and visible, and nothing is silently dropped.

4. **Contract-first generation.** Code/config is written (Write/Edit) against the repo's single
   sources of truth — `contracts/input_schemas.md`, `contracts/output_json_contracts.md`,
   `contracts/scenario_schema.md`, `contracts/vocabularies.md`. Generated artifacts conform to those
   schemas instead of inventing shapes. **This is the main structural-bug guard.**

5. **Immediate verification.** Right after each write, Claude runs Bash checks — YAML parse, invariant
   assertions, `pytest`. Failures are fixed in-loop before moving on. (Done this session for the
   scenario registry: parse + "exactly one active default" + "archived never default".)

6. **Gate enforcement.** `validate_contracts` (`docs/10`) runs at **Gate 0** and **every agent
   handoff**. Two review agents back it: `qa-contracts-validator` (mechanical: schema, traceability,
   no-hardcoded-score, forbidden-language greps) and `scientific-validity-reviewer` (judgment:
   overclaiming, mechanism plausibility, missing cautions). These catch hallucinated identifiers,
   schema breaks, and disallowed claims.

7. **Human / skill review.** `/code-review` and `/security-review` for the diff, `/verify` to run the
   change and observe behaviour, then your approval.

8. **Commit.** Only when explicitly asked, on a branch (never on a default branch without branching
   first).

**This session, concretely:** request → (plan mode) → todos → wrote registry/schema/docs → ran
parse + invariant checks → wired `CHK-SCENARIO-*` into `docs/10` → wrote `src/scenario_resolver.py`
→ (tests next).

---

## Part B — What you can configure in Claude Code to prevent bugs

> Current state: this repo has **no project `.claude/settings.json`**, so none of the automation below
> is active yet. Adding it is the single highest-leverage change for "make sure no bug".

Ordered by leverage:

### 1. Hooks (`.claude/settings.json`) — make checks non-skippable
Hooks run shell commands on lifecycle events. The relevant events:
- **`PostToolUse`** on `Edit|Write|MultiEdit` → auto-run formatter/linter + `pytest` +
  `validate_contracts` after every file change; failures are returned to Claude to fix immediately.
- **`PreToolUse`** on `Edit|Write` → guard protected paths (`contracts/**`,
  `configs/archived_reference_scenarios/**`). A hook that exits non-zero (2) **blocks** the tool call
  and surfaces stderr to Claude.
- **`Stop`** → run the full test suite + Gate-0 validator before a turn can finish; non-zero keeps
  Claude working instead of declaring done.

The difference hooks make: checks stop depending on Claude *remembering* to run them — they run every
time, automatically.

### 2. Permissions (`.claude/settings.json` → `permissions`)
- `deny` destructive Bash (`rm -rf`, `git push --force`).
- `ask` for network/deploy operations.
Prevents whole classes of accidental damage regardless of model behaviour.

### 3. Plan-mode default (`permissions.defaultMode: "plan"`)
Forces review-before-execute for everyone on the team; nothing is edited without an approved plan.

### 4. Subagents (already present in `.claude/agents/`)
Route risky judgment through `qa-contracts-validator` (read-only mechanical) and
`scientific-validity-reviewer` (read-only judgment). Keep them as gates on handoffs.

### 5. Tests + `validate_contracts` (the correctness oracle)
Hooks only *run* them — the actual correctness comes from the tests (`tests/`) and the validator
checks (`docs/10`, including the new `CHK-SCENARIO-*`). Grow these alongside every new module.

### 6. CLAUDE.md / skills (already in place)
`AGENTS.md`, `CLAUDE.md`, and the project skill already encode the no-hallucination and scenario
rules, so generation starts from the correct constraints.

### Recommended project `.claude/settings.json` (template)

```json
{
  "permissions": {
    "defaultMode": "plan",
    "deny": ["Bash(rm -rf *)", "Bash(git push --force*)"]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write|MultiEdit",
        "hooks": [
          { "type": "command",
            "command": "cd \"$CLAUDE_PROJECT_DIR\" && python3 -m pytest -q 2>&1 | tail -20" }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command",
            "command": "cd \"$CLAUDE_PROJECT_DIR\" && python3 tools/guard_protected_paths.py" }
        ]
      }
    ]
  }
}
```

**Notes**
- `$CLAUDE_PROJECT_DIR` is provided to hook commands (absolute repo path).
- A `PreToolUse` hook exiting non-zero (2) blocks the tool and shows stderr to Claude.
- `tools/guard_protected_paths.py` is a small optional helper that reads the tool input on stdin and
  rejects edits to a protected-glob list. Add it only if you want the guard active.
- **Validate the config in the live `/hooks` menu before committing** so the config itself does not
  become a new bug source.

---

## Quick checklist for a new module (apply Part A every time)

1. Confirm the contract/schema the module must satisfy.
2. Write the module to that contract.
3. Write table-driven tests covering happy path + each failure mode.
4. Run `python3 -m pytest -q` and the relevant `validate_contracts` gate.
5. `/code-review` the diff; fix findings.
6. Get human approval; commit on a branch when asked.
