import os
import gradio as gr
from typing import Dict, Optional, Any

from dashboard.utils.pipeline_orchestrator import PipelineStageResult

def create_stage_progress_panel():
    with gr.Column(elem_classes="panel-card"):
        # Panel Title Header
        gr.HTML("""
            <div style="display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.75rem; margin-bottom: 1rem;">
                <span style="font-size: 1.1rem;">📈</span>
                <h3 style="margin: 0; font-size: 0.8125rem; font-weight: 700; color: #1e293b;">Vertical Pipeline Progress</h3>
            </div>
        """)
        
        # This HTML element will be dynamically updated by pipeline_runner.py live after each stage
        pipeline_html = gr.HTML(
            value=render_vertical_pipeline({}),
            elem_id="pipeline-vertical-tracker"
        )
        
    return pipeline_html

def render_vertical_pipeline(stages_data: Dict[int, PipelineStageResult], active_stage: Optional[int] = None) -> str:
    stage_names = {
        0: "Scenario Validation",
        1: "Ligand Preparation",
        2: "Receptor Preparation",
        3: "Structure Resolver",
        4: "AutoDock Vina Docking",
        5: "DiffDock-L Blind AI Docking",
        6: "Interaction Parser",
        7: "Mechanism Graph Builder",
        8: "Validation Scorer",
        9: "Evidence Passport Generator"
    }

    # Pulse animation keyframes style
    html = """
    <style>
        @keyframes pulse-blue {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.15); opacity: 0.6; }
        }
        .pulse-dot {
            animation: pulse-blue 1.5s infinite ease-in-out;
        }
    </style>
    <div style="display: flex; flex-direction: column; gap: 0; padding-left: 0.5rem; position: relative;">
    """

    for num in range(10):
        name = stage_names[num]
        
        # 1. Determine color states
        state = "pending"
        circle_border = "#cbd5e1"  # Grey
        circle_fill = "#f8fafc"
        text_color = "#64748b"
        status_lbl = "Pending"
        badge_style = "background-color: #f1f5f9; color: #64748b;"
        pulse_class = ""

        if num in stages_data:
            res = stages_data[num]
            if res.status in ["PASS", "SKIPPED"]:
                state = "passed"
                circle_border = "#10b981"  # Green
                circle_fill = "#ecfdf5"
                text_color = "#0f172a"
                status_lbl = res.status
                badge_style = "background-color: #ecfdf5; color: #047857;"
            else:
                state = "failed"
                circle_border = "#ef4444"  # Red
                circle_fill = "#fef2f2"
                text_color = "#ef4444"
                status_lbl = "FAIL"
                badge_style = "background-color: #fef2f2; color: #b91c1c;"
        elif active_stage == num:
            state = "running"
            circle_border = "#3b82f6"  # Blue
            circle_fill = "#eff6ff"
            text_color = "#1e3a8a"
            status_lbl = "Running..."
            badge_style = "background-color: #eff6ff; color: #1d4ed8; font-weight: bold;"
            pulse_class = "pulse-dot"

        # 2. Draw connecting vertical line
        line_html = ""
        if num < 9:
            line_color = "#10b981" if state == "passed" else ("#ef4444" if state == "failed" else "#cbd5e1")
            line_html = f"""
                <div style="position: absolute; left: 0.7rem; top: 1.5rem; bottom: -1rem; width: 2px; background-color: {line_color}; z-index: 1;"></div>
            """

        html += f"""
        <div style="display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 0.85rem; position: relative; min-height: 2.25rem;">
            {line_html}
            
            <!-- Timeline Circle Node -->
            <div style="width: 1.5rem; height: 1.5rem; border-radius: 9999px; border: 3px solid {circle_border}; background-color: {circle_fill}; display: flex; align-items: center; justify-content: center; z-index: 2; margin-top: 0.1rem;" class="{pulse_class}">
                <span style="font-size: 0.65rem; font-weight: 800; color: {circle_border};">{num}</span>
            </div>
            
            <!-- Stage details -->
            <div style="flex-1; display: flex; align-items: center; justify-content: space-between; width: 100%; padding-right: 0.5rem;">
                <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.75rem; font-weight: 700; color: {text_color}; leading-tight: 1;">{name}</span>
                    <span style="font-size: 0.625rem; color: #94a3b8; font-weight: 500;">Stage {num} Baseline</span>
                </div>
                <div style="padding: 0.15rem 0.5rem; border-radius: 0.25rem; font-size: 0.625rem; font-weight: 700; {badge_style}">
                    {status_lbl}
                </div>
            </div>
        </div>
        """

    html += "</div>"
    return html
