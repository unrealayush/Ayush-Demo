import os
import json
import time
import gradio as gr
from typing import Optional, Tuple

# Constants
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

def create_validation_panel() -> gr.HTML:
    """
    Returns an HTML component representing the dynamic circular score gauge, metrics sliders, and decision readouts.
    This does NOT read any files during startup.
    """
    return gr.HTML(
        value=clear(),
        elem_id="validation-priority-score-card"
    )

def clear() -> str:
    """
    Resets the component to its lightweight initial placeholder state.
    """
    return """
        <div style="font-family: sans-serif; text-align: center; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; background-color: var(--block-background-fill); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem;">
            <span style="font-size: 2rem;">📈</span>
            <div style="font-size: 0.75rem; font-weight: 600; color: var(--body-text-color);">Validation Priority Score</div>
            <div style="font-size: 0.65rem; color: #64748b;">(No execution yet. Run pipeline to compute priority metrics)</div>
        </div>
    """

def load(json_path: Optional[str]) -> Tuple[str, float]:
    """
    Lazy-loads validation_priority_score.json dynamically, compiles the circular progress SVG,
    and returns a tuple of (rendered_html_string, elapsed_seconds).
    """
    start_time = time.time()
    if not json_path or not os.path.exists(json_path):
        return clear(), 0.0

    score = 0.0
    decision = "Pending..."
    strength = "Awaiting execution"
    interpretation = "Run pipeline to generate scoring metrics."
    affinity_val = 0.0
    confidence_val = 0.0
    interaction_val = 0.0
    
    max_affinity = 40.0
    max_confidence = 35.0
    max_interaction = 25.0

    try:
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        score = float(data.get("validation_priority_score", 0.0))
        decision = data.get("decision", "Review manually")
        strength = data.get("evidence_strength", "Low preclinical plausibility")
        interpretation = data.get("interpretation", "")
        
        metrics = data.get("metrics", {})
        affinity_val = float(metrics.get("affinity_contribution", 0.0))
        confidence_val = float(metrics.get("confidence_contribution", 0.0))
        interaction_val = float(metrics.get("interaction_contribution", 0.0))
    except Exception as e:
        print(f"[ValidationPanel] Parsing error: {e}")
        return clear(), time.time() - start_time
            
    # SVG circular progress properties
    stroke_dashoffset = 283 - (283 * min(100.0, max(0.0, score))) / 100
    
    # Calculate percentages for horizontal progress bars
    aff_pct = min(100.0, max(0.0, (affinity_val / max_affinity) * 100)) if affinity_val > 0 else 0.0
    conf_pct = min(100.0, max(0.0, (confidence_val / max_confidence) * 100)) if confidence_val > 0 else 0.0
    int_pct = min(100.0, max(0.0, (interaction_val / max_interaction) * 100)) if interaction_val > 0 else 0.0

    # Decision color variables
    decision_color = "#10b981" if "wet-lab" in decision.lower() or "advance" in decision.lower() else ("#ef4444" if "failed" in decision.lower() or "error" in decision.lower() else "#f59e0b")

    html = f"""
    <div style="font-family: sans-serif; display: flex; flex-direction: column; gap: 1.25rem;">
        
        <!-- Gauge Header row -->
        <div style="display: flex; align-items: center; gap: 1.25rem;">
            <!-- Circular Progress SVG Gauge -->
            <div style="position: relative; width: 5.5rem; height: 5.5rem; flex-shrink: 0;">
                <svg style="width: 100%; height: 100%; transform: rotate(-90deg);" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border-color-primary)" stroke-width="10" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="{decision_color}" stroke-width="10" 
                            stroke-dasharray="283" stroke-dashoffset="{stroke_dashoffset}" 
                            style="transition: stroke-dashoffset 1s ease-out; stroke-linecap: round;" />
                </svg>
                <div style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1;">
                    <span style="font-size: 1.5rem; font-weight: 900; color: var(--body-text-color);">{score:.1f}</span>
                    <span style="font-size: 0.55rem; font-weight: 700; color: #64748b; margin-top: 0.15rem;">/ 100</span>
                </div>
            </div>
            
            <!-- Decision & Badges Column -->
            <div style="display: flex; flex-direction: column; justify-content: center; gap: 0.25rem;">
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--body-text-color);">Validation Priority Score: <span style="font-size: 0.875rem;">{score:.1f}</span></div>
                <div style="font-size: 0.6875rem; font-weight: 700; color: var(--body-text-color);">Decision: <span style="color: {decision_color}; font-weight: 800;">{decision}</span></div>
                <div style="font-size: 0.625rem; color: #94a3b8; font-weight: 500; margin-top: 0.25rem; text-transform: uppercase;">Evidence Strength:</div>
                <div style="font-size: 0.6875rem; font-weight: 700; color: #2563eb;">{strength}</div>
            </div>
        </div>
        
        <div style="height: 1px; background-color: var(--border-color-primary);"></div>

        <!-- Horizontal Contribution progress bars -->
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <!-- Affinity Contribution -->
            <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.6875rem; font-weight: 700; color: var(--body-text-color); margin-bottom: 0.25rem;">
                    <span style="display: flex; align-items: center; gap: 0.25rem;">🛡️ Affinity Contribution</span>
                    <span>{affinity_val:.1f} / 40.0 ({aff_pct:.0f}%)</span>
                </div>
                <div style="width: 100%; height: 0.4rem; background-color: var(--border-color-primary); border-radius: 9999px; overflow: hidden;">
                    <div style="width: {aff_pct}%; height: 100%; background-color: #10b981; border-radius: 9999px;"></div>
                </div>
            </div>

            <!-- Confidence Contribution -->
            <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.6875rem; font-weight: 700; color: var(--body-text-color); margin-bottom: 0.25rem;">
                    <span style="display: flex; align-items: center; gap: 0.25rem;">🧬 Confidence Contribution</span>
                    <span>{confidence_val:.1f} / 35.0 ({conf_pct:.0f}%)</span>
                </div>
                <div style="width: 100%; height: 0.4rem; background-color: var(--border-color-primary); border-radius: 9999px; overflow: hidden;">
                    <div style="width: {conf_pct}%; height: 100%; background-color: #3b82f6; border-radius: 9999px;"></div>
                </div>
            </div>

            <!-- Interaction Contribution -->
            <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.6875rem; font-weight: 700; color: var(--body-text-color); margin-bottom: 0.25rem;">
                    <span style="display: flex; align-items: center; gap: 0.25rem;">⚗️ Interaction Contribution</span>
                    <span>{interaction_val:.1f} / 25.0 ({int_pct:.0f}%)</span>
                </div>
                <div style="width: 100%; height: 0.4rem; background-color: var(--border-color-primary); border-radius: 9999px; overflow: hidden;">
                    <div style="width: {int_pct}%; height: 100%; background-color: #a855f7; border-radius: 9999px;"></div>
                </div>
            </div>
        </div>

        {"<div style='font-size: 0.65rem; font-style: italic; color: #64748b; line-height: 1.3; background-color: var(--block-background-fill); padding: 0.5rem; border-radius: 0.25rem; border: 1px solid var(--border-color-primary);'>" + interpretation + "</div>" if interpretation else ""}
    </div>
    """
    elapsed = time.time() - start_time
    print(f"📈 [LazyLoad] Validation Panel loaded in {elapsed:.4f}s.")
    return html, elapsed

def refresh(json_path: Optional[str]) -> Tuple[str, float]:
    """
    Refreshes the circular score gauge.
    """
    return load(json_path)
