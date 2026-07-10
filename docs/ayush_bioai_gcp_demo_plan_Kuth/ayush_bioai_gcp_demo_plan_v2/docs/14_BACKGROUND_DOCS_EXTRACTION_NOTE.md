# 14 — Background Docs Extraction Note

The files in `background_docs/` are **context only — not MVP build inputs**. Their content has **not**
been extracted or transcribed into this pack (no guessing). Below is only what is mechanically known
(file type/size, verified 2026-06-04), plus a proposed coding-phase extraction step.

## Parseability (verified)

| file | true type | size | extractable now? | needs in coding phase |
|---|---|---|---|---|
| `ESKAPE_AYUSH_MultiOmics_Objectives_Deck.pptx` | PowerPoint OOXML (zip) | 16.7 MB | not text-parsed | `python-pptx` (after pip install) or `unzip` of `ppt/slides/*.xml` |
| `AYUSH_MEVREON_Presentation_with_Edits.pptx` | PowerPoint OOXML | 330 KB | not text-parsed | `python-pptx` / `unzip` |
| `AYUSH_MEVREON_Presentation.pptx` | PowerPoint OOXML | 322 KB | not text-parsed | `python-pptx` / `unzip` |
| `background_docsAI_ML_AMR_WithEdits_clean (2).docx` | Word OOXML | 158 KB | not text-parsed | `python-docx` / `unzip` of `word/document.xml` |
| `ayush_bio_ai_evidence_demo_dashboard.png` | PNG 1672×941 | 1.5 MB | image only | vision/OCR (UI reference) |
| `Mevreon's AYUSH Bio-AI Evidence Demo.png` | PNG 1672×941 | 1.5 MB | image only | byte-identical to the dashboard PNG |
| `mevreon_ayush_bio_ai_platform_roadmap.png` | PNG 1672×941 | 1.6 MB | image only | vision/OCR (roadmap → `docs/11`) |

## Tooling state (verified)
- Present: `python3` (miniconda), `unzip`, `PIL`.
- **Not installed:** `python-pptx`, `python-docx`, `pandoc`, `libreoffice`/`soffice`, `pdftotext`.

## Proposed coding-phase extraction step (spec only — do not implement now)
- `tools/extract_background_docs.py`:
  - PPTX/DOCX → `python-pptx` / `python-docx` after `pip install python-pptx python-docx`
    (or, dependency-free, `unzip` the slide/document XML and strip tags).
  - PNG → vision/OCR (the dashboard PNG informs the UI; the roadmap PNG informs `docs/11`).
  - Output to a context-only folder (e.g. `background_docs/extracted/`). **Never** feed extracted
    content into MVP input CSVs or treat it as real scientific data; it is narrative/context only.
- Scope guard: extraction may surface Phase 1–6 programme detail — keep all of it in Future Roadmap
  (`docs/11`), not in Phase 0 build scope.
