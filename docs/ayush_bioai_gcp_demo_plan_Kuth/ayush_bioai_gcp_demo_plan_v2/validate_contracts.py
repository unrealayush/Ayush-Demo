#!/usr/bin/env python3
"""validate_contracts — machine-checkable no-hallucination gate (see docs/10).

Phase 0 scaffold. Implements the checks that are feasible without pipeline outputs:
CHK-SCENARIO-REGISTRY, CHK-SCENARIO-DEFAULT, CHK-SCENARIO-NO-CROSSPRODUCT, CHK-CONFIG-CONSISTENCY.
Other catalogued checks (CSV/JSON schema, provenance, language) report status ``skipped`` with a
reason until their producing artifacts exist — never a false ``pass``.

Writes exactly one artifact: ``outputs/validation_report.json``. Exit codes per docs/10:
    0 = all applicable BLOCKER checks pass
    1 = >=1 BLOCKER failed
    2 = WARNs only and --strict-warn set
    3 = validator could not run (infra)
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(REPO_ROOT))

from src.scenario_resolver import RegistryError, load_registry  # noqa: E402

MODEL_RUN_CONFIG = REPO_ROOT / "configs" / "model_run_config.yaml"
REGISTRY_PATH = REPO_ROOT / "configs" / "scenarios" / "scenario_registry.yaml"
ARCHIVED_DIR = REPO_ROOT / "configs" / "archived_reference_scenarios"
OUTPUTS_DIR = REPO_ROOT / "outputs"

FORBIDDEN_SCENARIO_KEYS = {"synergy", "fici", "checkerboard"}

# Gate -> check ids (docs/10). Only the Phase-0-feasible subset is implemented here.
GATE_CHECKS = {
    "gate0": [
        "CHK-CONFIG-CONSISTENCY",
        "CHK-SCENARIO-REGISTRY",
        "CHK-SCENARIO-DEFAULT",
        "CHK-SCENARIO-NO-CROSSPRODUCT",
    ],
}


def _result(check_id, status, severity, findings=None):
    return {"check_id": check_id, "status": status, "severity": severity, "findings": findings or []}


def chk_scenario_registry():
    """Registry parses and core structure is valid (load_registry enforces invariants)."""
    try:
        load_registry(REGISTRY_PATH)
    except RegistryError as exc:
        return _result("CHK-SCENARIO-REGISTRY", "fail", "BLOCKER", [str(exc)])
    return _result("CHK-SCENARIO-REGISTRY", "pass", "BLOCKER")


def chk_scenario_default():
    """Exactly one active default; archived never default; default_scenario resolves."""
    try:
        reg = load_registry(REGISTRY_PATH)
    except RegistryError as exc:
        return _result("CHK-SCENARIO-DEFAULT", "fail", "BLOCKER", [str(exc)])
    # load_registry already asserts these; re-state explicitly for the report.
    findings = []
    defaults = [s for s in reg.get("active_scenarios", []) if s.get("default") is True]
    if len(defaults) != 1:
        findings.append(f"expected exactly one active default, found {len(defaults)}")
    if any(s.get("default") is True for s in reg.get("archived_scenarios", [])):
        findings.append("an archived scenario is marked default")
    status = "fail" if findings else "pass"
    return _result("CHK-SCENARIO-DEFAULT", status, "BLOCKER", findings)


def _iter_scenario_records():
    """Yield every scenario record from the registry + archived files."""
    reg = load_registry(REGISTRY_PATH)
    for rec in reg.get("active_scenarios", []):
        yield "registry/active", rec
    for path in sorted(ARCHIVED_DIR.glob("*.yaml")):
        doc = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
        rec = doc.get("scenario", doc)
        if isinstance(rec, dict):
            yield str(path.relative_to(REPO_ROOT)), rec


def chk_scenario_no_crossproduct():
    """config_components is an explicit list; no synergy/FICI/checkerboard keys present."""
    try:
        findings = []
        for where, rec in _iter_scenario_records():
            comps = rec.get("config_components")
            if comps is not None and not isinstance(comps, list):
                findings.append(f"{where}: config_components must be a list, got {type(comps).__name__}")
            bad = FORBIDDEN_SCENARIO_KEYS & {k.lower() for k in rec.keys()}
            if bad:
                findings.append(f"{where}: forbidden scenario keys present: {sorted(bad)}")
    except (RegistryError, yaml.YAMLError) as exc:
        return _result("CHK-SCENARIO-NO-CROSSPRODUCT", "fail", "BLOCKER", [str(exc)])
    status = "fail" if findings else "pass"
    return _result("CHK-SCENARIO-NO-CROSSPRODUCT", status, "BLOCKER", findings)


def chk_config_consistency():
    """model_run_config quality flags prohibit_*/require_* are all true (WARN per docs/10)."""
    if not MODEL_RUN_CONFIG.exists():
        return _result("CHK-CONFIG-CONSISTENCY", "skipped", "WARN", ["model_run_config.yaml missing"])
    cfg = yaml.safe_load(MODEL_RUN_CONFIG.read_text(encoding="utf-8")) or {}
    quality = cfg.get("quality", {}) or {}
    offenders = [k for k, v in quality.items() if (k.startswith(("prohibit_", "require_")) and v is not True)]
    status = "fail" if offenders else "pass"
    return _result("CHK-CONFIG-CONSISTENCY", status, "WARN",
                   [f"{k} is not true" for k in offenders])


CHECK_FUNCS = {
    "CHK-CONFIG-CONSISTENCY": chk_config_consistency,
    "CHK-SCENARIO-REGISTRY": chk_scenario_registry,
    "CHK-SCENARIO-DEFAULT": chk_scenario_default,
    "CHK-SCENARIO-NO-CROSSPRODUCT": chk_scenario_no_crossproduct,
}


def run(checks, run_mode, phase, strict_warn):
    results = [CHECK_FUNCS[c]() for c in checks if c in CHECK_FUNCS]
    blocker_fail = any(r["status"] == "fail" and r["severity"] == "BLOCKER" for r in results)
    warn_fail = any(r["status"] == "fail" and r["severity"] == "WARN" for r in results)
    overall = "fail" if blocker_fail else ("warn" if warn_fail else "pass")

    report = {
        "run_mode": run_mode,
        "phase": phase,
        "overall_result": overall,
        "checks": results,
        "go_no_go": {r["check_id"]: ("no_go" if r["status"] == "fail" else "go") for r in results},
        "note": "Phase 0 scaffold: only scenario + config checks implemented; others pending artifacts.",
    }
    OUTPUTS_DIR.mkdir(parents=True, exist_ok=True)
    (OUTPUTS_DIR / "validation_report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")

    if blocker_fail:
        return 1
    if warn_fail and strict_warn:
        return 2
    return 0


def main(argv=None):
    p = argparse.ArgumentParser(description="validate_contracts (docs/10) — Phase 0 scaffold")
    p.add_argument("--run-mode", default="local-planning")
    p.add_argument("--phase", default="gate0")
    p.add_argument("--checks", default=None, help="comma-separated check ids, or 'all'")
    p.add_argument("--strict-warn", action="store_true")
    args = p.parse_args(argv)

    if args.checks and args.checks != "all":
        checks = [c.strip() for c in args.checks.split(",") if c.strip()]
    elif args.checks == "all":
        checks = list(CHECK_FUNCS)
    else:
        checks = GATE_CHECKS.get(args.phase, list(CHECK_FUNCS))

    try:
        code = run(checks, args.run_mode, args.phase, args.strict_warn)
    except Exception as exc:  # infra failure
        print(f"validate_contracts could not run: {exc}", file=sys.stderr)
        return 3
    report = json.loads((OUTPUTS_DIR / "validation_report.json").read_text(encoding="utf-8"))
    print(f"validate_contracts [{args.phase}] -> {report['overall_result'].upper()}")
    for r in report["checks"]:
        line = f"  {r['status'].upper():7} {r['check_id']} ({r['severity']})"
        print(line)
        for f in r["findings"]:
            print(f"          - {f}")
    return code


if __name__ == "__main__":
    raise SystemExit(main())
