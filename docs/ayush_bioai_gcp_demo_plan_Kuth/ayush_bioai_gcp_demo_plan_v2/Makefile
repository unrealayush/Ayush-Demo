# AYUSH Bio-AI Evidence Demo — build targets (mode-aware; see docs/04).
# Phase 0 implements: init, validate, test. Later phases are documented stubs that fail loudly
# until their modules exist (no silent no-ops).

PYTHON ?= python3
RUN_MODE ?= local-planning

.PHONY: init validate validate-gate test \
        fetch-real-data validate-inputs prep-ligands resolve-structures \
        run-vina run-diffdock parse-interactions score-combination generate-passport \
        run-ui deploy-gcp

init:  ## install Phase 0 dependencies
	$(PYTHON) -m pip install -r requirements.txt

validate:  ## Gate 0: validate_contracts (docs/10)
	$(PYTHON) validate_contracts.py --run-mode $(RUN_MODE) --phase gate0

validate-gate:  ## run a specific gate: make validate-gate PHASE=gate0
	$(PYTHON) validate_contracts.py --run-mode $(RUN_MODE) --phase $(PHASE)

test:  ## run the unit test suite
	$(PYTHON) -m pytest -q

# --- Phase 1-6 targets (not yet implemented) -------------------------------------------------
fetch-real-data validate-inputs prep-ligands resolve-structures \
run-vina run-diffdock parse-interactions score-combination generate-passport \
run-ui deploy-gcp:
	@echo "target '$@' not implemented yet (see docs/04 + .claude/docs/build-kickoff.md)"; exit 2
