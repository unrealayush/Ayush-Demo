# Modern, High-Contrast Scientific Adaptive CSS Styling for Gradio 6.0
CSS = """
/* Body & general container: use Gradio native theme colors to support both Light & Dark modes flawlessly */
body, .gradio-container {
    background-color: var(--body-background-fill) !important;
    color: var(--body-text-color) !important;
    font-family: 'Inter', -apple-system, system-ui, sans-serif !important;
    padding: 1.5rem !important;
}

/* Header Banner Styling - uses theme variables with subtle gradient */
#header-bar {
    background: linear-gradient(135deg, var(--block-background-fill) 0%, var(--body-background-fill) 100%) !important;
    border: 1px solid var(--border-color-primary) !important;
    border-radius: 1rem !important;
    padding: 1.25rem 1.75rem !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02) !important;
    margin-bottom: 1.5rem !important;
}

/* Premium Panel Cards - dynamically binds to theme colors to prevent white-on-white text bugs in dark mode */
.panel-card {
    background-color: var(--block-background-fill) !important;
    color: var(--body-text-color) !important;
    border: 1px solid var(--border-color-primary) !important;
    border-radius: 1rem !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 2px -1px rgba(0, 0, 0, 0.02) !important;
    padding: 1.5rem !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.panel-card:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.03) !important;
    border-color: var(--border-color-accent) !important;
}

/* Sleek Section Divider lines */
.panel-header {
    border-bottom: 2px solid var(--border-color-primary) !important;
    padding-bottom: 0.85rem !important;
    margin-bottom: 1.25rem !important;
}

/* WebGL Molecular Viewports Card Styling */
#3d-protein-viewer-canvas, #3d-docking-viewer-canvas {
    border: 1px solid var(--border-color-primary) !important;
    border-radius: 1rem !important;
    overflow: hidden !important;
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.15) !important;
}

/* Custom Console Monospace Terminal View port - keeps terminal dark for tech feel */
.custom-console {
    background-color: #0b0f19 !important; /* deep cosmic dark slate */
    color: #cbd5e1 !important;
    font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace !important;
    font-size: 0.725rem !important;
    line-height: 1.5 !important;
    border-radius: 0.75rem !important;
    border: 1px solid #1e293b !important;
    padding: 1rem !important;
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.25) !important;
}

/* Beautiful Interactive Buttons Custom Overrides */
.primary-btn {
    background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%) !important;
    color: #ffffff !important;
    font-weight: 700 !important;
    border-radius: 0.5rem !important;
    border: none !important;
    box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.25) !important;
    transition: all 0.2s ease !important;
    cursor: pointer !important;
}

.primary-btn:hover {
    background: linear-gradient(135deg, #4338ca 0%, #312e81 100%) !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.35) !important;
}

.primary-btn:active {
    transform: translateY(0) !important;
}

/* SVG Circular Score Gauge Animations & Properties */
.circle-progress-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 6rem;
    height: 6rem;
}

.circle-bg {
    fill: none;
    stroke: var(--border-color-primary);
    stroke-width: 8;
}

.circle-val {
    fill: none;
    stroke-width: 8;
    stroke-linecap: round;
    transition: stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Custom Accordion overrides for ultra clean spacing */
.gradio-accordion {
    border-color: var(--border-color-primary) !important;
    background-color: var(--block-background-fill) !important;
    border-radius: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.02) !important;
}

.gradio-accordion .label-wrap {
    font-weight: 700 !important;
    color: var(--body-text-color) !important;
}
"""
