"""Tests for src/scenario_resolver — the shared scenario resolution helper.

Covers the precedence rules and the CHK-SCENARIO-* behaviours (docs/10):
unset env -> default, explicit active -> that record, archived -> rejected, bogus -> error,
explicit arg overrides env, and registry-invariant validation.
"""

from __future__ import annotations

import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from src.scenario_resolver import (  # noqa: E402
    ArchivedScenarioError,
    RegistryError,
    UnknownScenarioError,
    list_active_scenarios,
    load_registry,
    resolve_scenario,
)

DEFAULT_ID = "primary_kuth_pseudomonas"
SECONDARY_ID = "secondary_kuth_staphylococcus"
ARCHIVED_ID = "archived_trikatu_prior"


# --- precedence: unset env -> registry default ------------------------------------------------
def test_unset_env_resolves_default():
    record = resolve_scenario(env={})
    assert record["scenario_id"] == DEFAULT_ID
    assert record["default"] is True
    assert record["organism_key"] == "Pseudomonas aeruginosa"


# --- precedence: SCENARIO_ID env selects an active scenario -----------------------------------
def test_env_selects_secondary():
    record = resolve_scenario(env={"SCENARIO_ID": SECONDARY_ID})
    assert record["scenario_id"] == SECONDARY_ID
    assert record["organism_key"] == "Staphylococcus aureus"
    assert record["target_a"] == "AgrA"


# --- precedence: explicit arg overrides the env ----------------------------------------------
def test_explicit_arg_overrides_env():
    record = resolve_scenario(SECONDARY_ID, env={"SCENARIO_ID": DEFAULT_ID})
    assert record["scenario_id"] == SECONDARY_ID


# --- archived id is rejected ------------------------------------------------------------------
def test_archived_id_rejected_via_env():
    with pytest.raises(ArchivedScenarioError):
        resolve_scenario(env={"SCENARIO_ID": ARCHIVED_ID})


def test_archived_id_rejected_via_arg():
    with pytest.raises(ArchivedScenarioError):
        resolve_scenario(ARCHIVED_ID, env={})


# --- unknown id is an error -------------------------------------------------------------------
def test_bogus_id_raises_unknown():
    with pytest.raises(UnknownScenarioError):
        resolve_scenario(env={"SCENARIO_ID": "does_not_exist"})


# --- comparator_control nullable for the active default --------------------------------------
def test_active_default_comparator_control_nullable():
    record = resolve_scenario(env={})
    assert record["comparator_control"] is None


# --- list helper returns both active scenarios, default first --------------------------------
def test_list_active_scenarios():
    ids = [s["scenario_id"] for s in list_active_scenarios()]
    assert ids == [DEFAULT_ID, SECONDARY_ID]


# --- registry invariants hold on the shipped file --------------------------------------------
def test_shipped_registry_invariants():
    registry = load_registry()
    active = registry["active_scenarios"]
    assert sum(1 for s in active if s.get("default") is True) == 1
    assert registry["default_scenario"] == DEFAULT_ID
    assert all(not s.get("default") for s in registry.get("archived_scenarios", []))


# --- malformed registries are rejected (table-driven) ----------------------------------------
@pytest.mark.parametrize(
    "content",
    [
        "active_scenarios: []\ndefault_scenario: x\n",  # no active scenarios
        # two defaults
        "default_scenario: a\nactive_scenarios:\n"
        "  - {scenario_id: a, status: active, default: true}\n"
        "  - {scenario_id: b, status: active, default: true}\n",
        # default_scenario points at a non-default id
        "default_scenario: b\nactive_scenarios:\n"
        "  - {scenario_id: a, status: active, default: true}\n",
        # archived marked default
        "default_scenario: a\nactive_scenarios:\n"
        "  - {scenario_id: a, status: active, default: true}\n"
        "archived_scenarios:\n  - {scenario_id: z, status: archived, default: true}\n",
    ],
)
def test_invalid_registry_rejected(tmp_path, content):
    bad = tmp_path / "registry.yaml"
    bad.write_text(content, encoding="utf-8")
    with pytest.raises(RegistryError):
        load_registry(bad)


def test_missing_registry_file(tmp_path):
    with pytest.raises(RegistryError):
        load_registry(tmp_path / "nope.yaml")
