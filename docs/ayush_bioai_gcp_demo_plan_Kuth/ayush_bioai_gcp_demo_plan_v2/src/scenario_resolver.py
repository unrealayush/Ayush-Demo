"""Scenario resolver — the single shared helper for resolving the active scenario.

Every consumer (agents, fetchers, manifest/passport writers, UI bindings) resolves the active
scenario through this module instead of re-parsing the registry or hardcoding a case.

Routing source of truth: ``configs/scenarios/scenario_registry.yaml``
Schema + rules: ``contracts/scenario_schema.md``   Selection guide: ``docs/16``

Selection precedence (highest first):
    1. explicit ``scenario_id`` argument (programmatic override / tests)
    2. ``SCENARIO_ID`` environment variable
    3. registry ``default_scenario``

Archived scenarios are reference-only and are never selectable — requesting one raises
``ArchivedScenarioError``. An id that is neither active nor archived raises
``UnknownScenarioError``. This mirrors the ``CHK-SCENARIO-*`` checks in ``docs/10``.
"""

from __future__ import annotations

import os
from pathlib import Path
from typing import Any, Mapping

import yaml

# Repo root = parent of this file's directory (src/), so the default path is cwd-independent.
REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_REGISTRY_PATH = REPO_ROOT / "configs" / "scenarios" / "scenario_registry.yaml"

# Keys that must never appear on a scenario record (Future Roadmap, not MVP scenario fields).
FORBIDDEN_SCENARIO_KEYS = {"synergy", "fici", "checkerboard"}


class ScenarioError(Exception):
    """Base class for all scenario-resolution failures."""


class RegistryError(ScenarioError):
    """The registry file is missing, unreadable, or structurally invalid."""


class UnknownScenarioError(ScenarioError):
    """The requested scenario_id is neither an active nor an archived scenario."""


class ArchivedScenarioError(ScenarioError):
    """The requested scenario_id exists but is archived (reference-only, never selectable)."""


def load_registry(registry_path: str | os.PathLike[str] | None = None) -> dict[str, Any]:
    """Load and lightly validate the scenario registry.

    Raises ``RegistryError`` if the file cannot be read/parsed or the core routing invariants
    (one active default; archived never default; default points at an active id) are violated.
    """
    path = Path(registry_path) if registry_path is not None else DEFAULT_REGISTRY_PATH
    try:
        with open(path, "r", encoding="utf-8") as fh:
            registry = yaml.safe_load(fh)
    except FileNotFoundError as exc:
        raise RegistryError(f"scenario registry not found: {path}") from exc
    except yaml.YAMLError as exc:
        raise RegistryError(f"scenario registry is not valid YAML: {path}: {exc}") from exc

    if not isinstance(registry, Mapping):
        raise RegistryError(f"scenario registry must be a mapping: {path}")

    active = registry.get("active_scenarios") or []
    if not isinstance(active, list) or not active:
        raise RegistryError("registry has no active_scenarios")

    defaults = [s for s in active if s.get("default") is True]
    if len(defaults) != 1:
        raise RegistryError(
            f"exactly one active scenario must have default: true (found {len(defaults)})"
        )

    archived = registry.get("archived_scenarios") or []
    if any(s.get("default") is True for s in archived):
        raise RegistryError("an archived scenario must never be default: true")

    default_id = registry.get("default_scenario")
    if default_id != defaults[0].get("scenario_id"):
        raise RegistryError(
            "default_scenario must point at the single active default "
            f"(default_scenario={default_id!r}, active default={defaults[0].get('scenario_id')!r})"
        )

    return registry


def list_active_scenarios(
    registry_path: str | os.PathLike[str] | None = None,
) -> list[dict[str, Any]]:
    """Return the active scenario records (curation order preserved)."""
    return list(load_registry(registry_path).get("active_scenarios") or [])


def _archived_ids(registry: Mapping[str, Any]) -> set[str]:
    return {s.get("scenario_id") for s in (registry.get("archived_scenarios") or [])}


def resolve_scenario(
    scenario_id: str | None = None,
    *,
    registry_path: str | os.PathLike[str] | None = None,
    env: Mapping[str, str] | None = None,
) -> dict[str, Any]:
    """Resolve and return the active scenario record per the precedence rules.

    Args:
        scenario_id: explicit override; highest precedence. ``None`` falls back to env/default.
        registry_path: registry location; defaults to the repo's scenario_registry.yaml.
        env: environment mapping; defaults to ``os.environ`` (injectable for tests).

    Raises:
        ArchivedScenarioError: the resolved id is an archived scenario.
        UnknownScenarioError: the resolved id is not present in the registry.
        RegistryError: the registry itself is invalid.
    """
    if env is None:
        env = os.environ
    registry = load_registry(registry_path)

    requested = scenario_id or env.get("SCENARIO_ID") or registry.get("default_scenario")

    for record in registry.get("active_scenarios") or []:
        if record.get("scenario_id") == requested:
            return dict(record)

    if requested in _archived_ids(registry):
        raise ArchivedScenarioError(
            f"scenario {requested!r} is archived (reference-only) and cannot be selected; "
            "choose an active scenario (see docs/16)"
        )

    active_ids = [s.get("scenario_id") for s in (registry.get("active_scenarios") or [])]
    raise UnknownScenarioError(
        f"unknown scenario_id {requested!r}; active scenarios are {active_ids}"
    )


def main(argv: list[str] | None = None) -> int:
    """CLI: print the resolved active scenario_id (honours SCENARIO_ID). Exit non-zero on failure."""
    import argparse
    import sys

    parser = argparse.ArgumentParser(description="Resolve the active AYUSH Bio-AI scenario.")
    parser.add_argument("--scenario-id", default=None, help="explicit override (else SCENARIO_ID/default)")
    parser.add_argument("--registry", default=None, help="registry path override")
    parser.add_argument("--field", default="scenario_id", help="record field to print (default scenario_id)")
    args = parser.parse_args(argv)

    try:
        record = resolve_scenario(args.scenario_id, registry_path=args.registry)
    except ScenarioError as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2
    print(record.get(args.field, ""))
    return 0


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
