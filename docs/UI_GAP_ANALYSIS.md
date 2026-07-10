# UI Gap Analysis

This document outlines the visual gaps between the current React implementation and the primary visual specification (`docs/reference_dashboard.png`). 

## 1. Layout Differences
* **Current State:** The dashboard uses a dark theme (`bg-slate-950`) and the `MechanismGraph` is stacked vertically. The Top Ranked Output only shows the top 1 result. The 3D Molecular Viewer was removed from the center panel.
* **Reference Image:** The dashboard features a clean, bright light theme with white panels (`bg-white` or `bg-slate-50`) and soft shadows. The Mechanism Graph nodes are aligned horizontally. The Top Ranked Output lists 3 distinct results. Molecular docking insights are displayed as three side-by-side graphical cards.
* **Priority:** HIGH
* **Files to Change:** `frontend/src/App.tsx`, `frontend/src/components/MechanismGraph.tsx`

## 2. Card Differences
* **Current State:** The Center Panel uses basic slate/emerald borders for compound/target cards. The Left Panel uses standard HTML `<select>` dropdowns.
* **Reference Image:** The Left Panel features styled numbered badges (1, 2, 3, 4), vibrant biological/chemical imagery (e.g., Kuth plant, Pseudomonas bacteria, Ciprofloxacin structure), and styled pill tags (e.g., "Multi-Component", "Quorum Sensing"). The Center Panel cards have A/B/C letter badges, specific titles, and show 3D rendering snapshots instead of raw text.
* **Priority:** HIGH
* **Files to Change:** `frontend/src/App.tsx`

## 3. Typography Differences
* **Current State:** Monospace and default sans-serif fonts with generic bolding (Tailwind defaults).
* **Reference Image:** Highly structured typographic hierarchy. The header uses a modern geometric sans-serif (e.g., Inter or Roboto) with a prominent title ("AYUSH Bio-AI Evidence Demo") and a softer, smaller subtitle. Section headers are distinctly bolded with specific sizing.
* **Priority:** MEDIUM
* **Files to Change:** `frontend/src/index.css`, `frontend/src/App.tsx`

## 4. Color Differences
* **Current State:** Dark mode palette dominated by `slate-950`, `emerald-400`, `amber-400`, and `indigo-400`.
* **Reference Image:** Light mode palette. Primary colors are deep blue/indigo for headers and accents, bright green for positive indicators/scores, and light gray for borders/backgrounds. The score is a vibrant blue/green gradient or solid color.
* **Priority:** HIGH
* **Files to Change:** `frontend/src/App.tsx`, `frontend/src/components/MechanismGraph.tsx`

## 5. Spacing Differences
* **Current State:** Standard `gap-6` and `p-5` padding using Tailwind.
* **Reference Image:** More expansive whitespace. The right panel has distinct separation between the score, charts, and ranked outputs. The bottom bar is visually separated from the main content with a thin border and structured horizontal spacing.
* **Priority:** MEDIUM
* **Files to Change:** `frontend/src/App.tsx`

## 6. Missing Widgets
* **Current State:** Missing the "Antibiotic Comparator" input widget in the Left Panel. Missing the "Molecular Docking & Interaction Insights" multi-card visual widget in the Center Panel. Missing the "Data as on" and "Scenario" top-bar widgets.
* **Reference Image:** Explicitly displays the "Antibiotic Comparator" (Ciprofloxacin), three 3D-visual docking cards in the Center Panel, and top-bar metadata details.
* **Priority:** HIGH
* **Files to Change:** `frontend/src/App.tsx`

## 7. Missing Visual Hierarchy
* **Current State:** The Validation Priority Score is just large text (`text-5xl`).
* **Reference Image:** The Validation Priority Score is enclosed in a prominent circular progress ring (donut chart) with the score fraction clearly styled inside.
* **Priority:** HIGH
* **Files to Change:** `frontend/src/App.tsx`

## 8. Missing Interactions
* **Current State:** Mechanism Graph lines are standard bezier curves.
* **Reference Image:** Mechanism Graph utilizes dashed/dotted lines to indicate specific hypothetical relationships (e.g., "Adjuvant potential").
* **Priority:** LOW
* **Files to Change:** `frontend/src/components/MechanismGraph.tsx`

## 9. Missing Charts
* **Current State:** The Right Panel lacks any sub-score breakdown charts.
* **Reference Image:** Features four horizontal bar charts representing "AMR Relevance", "Docking Plausibility", "Anti-biofilm Support", and "Translational Readiness" with fractional scores (e.g., 88/100).
* **Priority:** HIGH
* **Files to Change:** `frontend/src/App.tsx`

## 10. Missing Icons
* **Current State:** Uses standard Lucide React icons. Missing the "mevreon" corporate logo in the top right.
* **Reference Image:** Custom iconography for section headers (e.g., a clipboard for Demo Inputs, a brain/nodes for Mechanism Layer, a globe for Evidence Passport, a trophy for Top Ranked Output, and specific bottom-bar icons).
* **Priority:** MEDIUM
* **Files to Change:** `frontend/src/App.tsx`
