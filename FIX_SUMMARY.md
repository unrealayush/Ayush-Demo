# FIX_SUMMARY.md

## 1. Root causes found

- Timestamp used `timeStyle: "short"`, which omits seconds, so the displayed value did not visibly update every second.
- Molecular viewer initialization returned early when `window.$3Dmol` was unavailable. `frontend/index.html` loaded `jquery` and `3Dmol` from external CDNs, so the viewer could stay blank when those scripts were blocked or unavailable.
- The frontend still rendered hardcoded/fallback UI values for validation and workflow content, including old next-validation steps, fixed confidence text, fixed plausibility/docking values, and decorative footer buttons.
- Source traceability had a decorative navigation strip above the real matrix, so the visible footer did not present only `evidence_passport.traceability_matrix`.
- Production build initially failed locally because TypeScript build-info output was configured under `frontend/node_modules/.tmp`, which was not writable in this checkout. Vite env types were also missing for `import.meta.env`.
- The live combined Cloud Run service `ayush-bioai-demo` in `asia-south1` was serving a stale frontend shell before redeploy. Authenticated `/` returned the older HTML that still referenced the external `3Dmol` CDN scripts.
- The production deployment surface was split across two different patterns: older `us-central1` `ayush-bioai-ui` / `ayush-bioai-api` services running `RUN_MODE=mock`, and the actual combined dashboard service `ayush-bioai-demo` in `asia-south1`.

## 2. Files modified

- `frontend/src/App.tsx`
- `frontend/src/components/MolecularViewer.tsx`
- `frontend/src/components/MechanismGraph.tsx`
- `frontend/index.html`
- `frontend/tsconfig.app.json`
- `frontend/tsconfig.node.json`
- `frontend/src/vite-env.d.ts`
- `frontend/dist/index.html`
- `frontend/dist/assets/index-aSH_9fNB.css`
- `frontend/dist/assets/index-BQ0PLBX-.js`

## 3. API responses verified

- `/api/targets`: 200, list length 4.
- `/api/ligands`: 200, list length 2.
- `/api/interaction-report`: 200, `status=SUCCESS`, interactions 29.
- `/api/mechanism-graph`: 200, nodes 4, edges 4.
- `/api/validation-score`: 200, score 72.6, decision `Consider for wet-lab validation`.
- `/api/evidence-passport`: 200, traceability rows 3, next validation steps 4.
- `/api/file?path=data/prepared/targets/lasr/clean_receptor.pdb`: 200, 416425 bytes, `chemical/x-pdb`.
- `/api/file?path=data/prepared/ligands/costunolide.sdf`: 200, 3161 bytes, `chemical/x-mdl-sdfile`.
- `/api/file?path=data/prepared/targets/pqsr/clean_receptor.pdb`: 200, 258961 bytes, `chemical/x-pdb`.
- `/api/file?path=data/prepared/ligands/dehydrocostus_lactone.sdf`: 200, 3008 bytes, `chemical/x-mdl-sdfile`.
- Deployed `ayush-bioai-demo` in `asia-south1`, revision `ayush-bioai-demo-00003-nmq`, image `asia-south1-docker.pkg.dev/mevreon/ayush-bioai-repo/ayush-bioai-demo:latest`.
- Authenticated remote checks against `https://ayush-bioai-demo-itqxq5fx4a-el.a.run.app` returned 200 for `/api/targets`, `/api/ligands`, `/api/interaction-report`, `/api/mechanism-graph`, `/api/validation-score`, `/api/evidence-passport`, and `/`.

## 4. Screens verified

- Local production dashboard served by FastAPI at `http://127.0.0.1:8080/`.
- Timestamp changed from `Data as on: 24 Jun 2026, 1:37:33 pm` to `Data as on: 24 Jun 2026, 1:37:35 pm`.
- Ligand dropdown showed `Costunolide` and `Dehydrocostus lactone`.
- Target dropdown showed `LasR - Pseudomonas aeruginosa`, `PqsR / MvfR - Pseudomonas aeruginosa`, `AgrA - Staphylococcus aureus`, and `Sortase A / SrtA - Staphylococcus aureus`.
- Mechanism graph rendered 4 ReactFlow nodes and 4 ReactFlow edges. `Graph data loading...` was not visible after data load.
- Molecular viewer loaded actual files and displayed parsed atom counts: LasR/costunolide showed protein atoms 5137 and ligand atoms 37.
- Dropdown interaction changed the active viewer to PqsR/dehydrocostus lactone and displayed protein atoms 3195 and ligand atoms 35.
- Validation panel displayed live `decision`, `evidence_strength`, `validation_priority_score`, and metrics from `/api/validation-score`.
- Next validation displayed the 4 live `evidence_passport.next_validation_steps`.
- Source Traceability Matrix displayed live `evidence_passport.traceability_matrix` rows for `LasR Structure`, `Costunolide`, and `Context`.
- Browser console error log after production reload was empty.
- Final production bundle did not contain the old hardcoded strings `MIC Assay`, `FICI Checkerboard Assay`, `Moderate-High`, `0.81`, `-8.7`, `Evidence Traceability`, `Global Literature`, `In-silico Models`, `3Dmol.org`, or `jquery`.
- Remote combined service `/` was rechecked after deploy with the active `mevreon.ai` identity and returned the updated HTML shell:
  `index-BJfQAAZb.js` and `index-BK5UnRTm.css`, no `jquery`, no `3Dmol.org`, and the updated ASCII description text.

## 5. Remaining blockers

- Anonymous access to the deployed Cloud Run service still returns `403 Forbidden`. Verified IAM policy on `ayush-bioai-demo` grants `roles/run.invoker` to `domain:mevreon.ai`, not `allUsers`.
- Because of that IAM policy, remote browser verification without a `mevreon.ai` authenticated session was not possible from the unauthenticated Cloud Run URL alone.
