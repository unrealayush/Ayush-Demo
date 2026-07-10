import os
import json
import time
import gradio as gr
from typing import Optional, Dict, Any, Tuple

# Constants
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

def create_evidence_passport_panel() -> Tuple[gr.Markdown, gr.Markdown, gr.HTML, gr.HTML, gr.HTML]:
    """
    Creates the collapsible Evidence Passport Accordion elements inside a card.
    This does NOT read any files during startup.
    """
    with gr.Column(elem_classes="panel-card"):
        gr.HTML("""
            <div style="display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.75rem; margin-bottom: 1rem;">
                <span style="font-size: 1.1rem;">📂</span>
                <h2 style="margin: 0; font-size: 0.875rem; font-weight: 700; color: #1e293b;">Global Evidence Dossier</h2>
            </div>
        """)
        
        c = clear()
        
        with gr.Accordion("📝 Executive Summary", open=True) as acc_exec:
            exec_summary_md = gr.Markdown(value=c["exec_summary"])
            
        with gr.Accordion("⚙️ Mechanistic Summary", open=False) as acc_mech:
            mechanistic_summary_md = gr.Markdown(value=c["mechanistic_summary"])
            
        with gr.Accordion("📊 Validation Summary", open=False) as acc_val:
            validation_summary_html = gr.HTML(value=c["validation_html"])
            
        with gr.Accordion("🔗 Source Traceability Matrix", open=False) as acc_trace:
            traceability_table_html = gr.HTML(value=c["traceability_html"])
            
        with gr.Accordion("📋 Next Validation Steps", open=False) as acc_steps:
            next_steps_html = gr.HTML(value=c["next_steps_html"])
            
    return exec_summary_md, mechanistic_summary_md, validation_summary_html, traceability_table_html, next_steps_html

def clear() -> Dict[str, str]:
    """
    Resets all collapsible evidence accordions to their lightweight placeholder states.
    """
    return {
        "exec_summary": "*No execution yet.*",
        "mechanistic_summary": "*No execution yet.*",
        "validation_html": "<div style='color: #64748b; font-size: 0.75rem; font-style: italic;'>No execution yet.</div>",
        "traceability_html": "<div style='color: #64748b; font-size: 0.75rem; font-style: italic;'>No execution yet.</div>",
        "next_steps_html": "<div style='color: #64748b; font-size: 0.75rem; font-style: italic;'>No execution yet.</div>"
    }

def load() -> Tuple[str, str, str, str, str, float]:
    """
    Lazy-loads all completed evidence passport JSONs from disk, builds structural dossiers,
    and returns a tuple of (exec, mech, val, trace, next, elapsed_seconds).
    """
    start_time = time.time()
    
    passport_path = os.path.join(BASE_DIR, "outputs", "evidence_passport.json")
    graph_path = os.path.join(BASE_DIR, "outputs", "mechanism_graph.json")
    score_path = os.path.join(BASE_DIR, "outputs", "validation_priority_score.json")
    
    c = clear()
    out = (c["exec_summary"], c["mechanistic_summary"], c["validation_html"], c["traceability_html"], c["next_steps_html"])
    
    if not os.path.exists(passport_path):
        return (*out, 0.0)

    try:
        # Load passport JSON
        with open(passport_path, "r", encoding="utf-8") as f:
            passport = json.load(f)
            
        exec_summary = passport.get("executive_summary", "")
        
        # 2. Build Mechanistic Summary dynamically from mechanism_graph.json
        mechanistic_summary = "*No mechanistic pathways loaded.*"
        if os.path.exists(graph_path):
            with open(graph_path, "r", encoding="utf-8") as f:
                graph = json.load(f)
            edges = graph.get("edges", [])
            if edges:
                mech_md = "The compound modulates the following biological cascade level connections:\n"
                for edge in edges:
                    mech_md += f"- **{edge.get('source','').replace('C_','').replace('T_','').title()}** ➡️ *{edge.get('relation','connected_to')}* ➡️ **{edge.get('target','').replace('PH_','').replace('P_','').title()}**\n"
                mechanistic_summary = mech_md
                
        # 3. Build Validation Summary dynamically from validation_priority_score.json
        validation_html = "<div style='color: #64748b;'>No priority scores calculated.</div>"
        if os.path.exists(score_path):
            with open(score_path, "r", encoding="utf-8") as f:
                score = json.load(f)
            validation_html = f"""
                <div style="font-family: sans-serif; font-size: 0.75rem; color: var(--body-text-color); line-height: 1.5; display: flex; flex-direction: column; gap: 0.35rem;">
                    <div><strong>Validation Priority Score:</strong> <span style="font-size: 0.875rem; font-weight: bold; color: #1e3a8a;">{score.get('validation_priority_score', 0.0)} / 100</span></div>
                    <div><strong>Operational Decision:</strong> <span style="font-weight: bold; color: #047857;">{score.get('decision', 'Review manually')}</span></div>
                    <div><strong>Preclinical Evidence Strength:</strong> <span style="font-weight: bold; color: #1d4ed8;">{score.get('evidence_strength', 'Low preclinical plausibility')}</span></div>
                    {"<div style='font-size: 0.65rem; color: #64748b; font-style: italic; margin-top: 0.25rem;'>Interpretation: " + score.get('interpretation', '') + "</div>" if score.get('interpretation') else ""}
                </div>
            """
            
        # 4. Build Traceability Matrix dynamically
        trace_rows = ""
        for item in passport.get("traceability_matrix", []):
            trace_rows += f"""
                <tr style="border-bottom: 1px solid var(--border-color-primary);">
                    <td style="padding: 0.45rem 0.75rem; font-weight: bold; color: #1e3a8a;">{item.get('entity','')}</td>
                    <td style="padding: 0.45rem 0.75rem;">{item.get('source','')}</td>
                    <td style="padding: 0.45rem 0.75rem; font-family: monospace; color: #475569;">{item.get('accession_or_url','')}</td>
                </tr>
            """
            
        traceability_html = f"""
            <div style="border: 1px solid var(--border-color-primary); border-radius: 0.5rem; overflow: hidden; background-color: var(--block-background-fill);">
                <table style="width: 100%; font-size: 0.725rem; border-collapse: collapse; text-align: left; color: var(--body-text-color);">
                    <thead>
                        <tr style="background-color: var(--block-background-fill); border-bottom: 1px solid var(--border-color-primary); color: #64748b;">
                            <th style="padding: 0.45rem 0.75rem;">Reference Entity</th>
                            <th style="padding: 0.45rem 0.75rem;">Source DB</th>
                            <th style="padding: 0.45rem 0.75rem;">Accession / URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trace_rows}
                    </tbody>
                </table>
            </div>
        """
        
        # 5. Build Next Validation Steps
        next_steps_html = '<div style="display: flex; flex-direction: column; gap: 0.35rem;">'
        for step in passport.get("next_validation_steps", []):
            next_steps_html += f"""
                <div style="display: flex; align-items: flex-start; gap: 0.35rem; font-size: 0.7rem; font-weight: 600; color: var(--body-text-color);">
                    <span style="color: #10b981;">▶️</span> <span>{step}</span>
                </div>
            """
        next_steps_html += '</div>'
        
        elapsed = time.time() - start_time
        print(f"📂 [LazyLoad] Evidence Passport loaded in {elapsed:.4f}s.")
        return exec_summary, mechanistic_summary, validation_html, traceability_html, next_steps_html, elapsed
    except Exception as e:
        print(f"📂 [LazyLoad] Error mapping passport: {e}")
        return (*out, time.time() - start_time)

def refresh() -> Tuple[str, str, str, str, str, float]:
    """
    Refreshes the Evidence Accordions from disk logs.
    """
    return load()
