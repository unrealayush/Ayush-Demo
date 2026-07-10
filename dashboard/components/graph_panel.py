import os
import json
import time
import networkx as nx
import plotly.graph_objects as go
import gradio as gr
from typing import Optional, Tuple, Dict, Any

# Constants
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

# Global In-Memory Cache for Plotly Figures, Layouts, and Node Positions
_GRAPH_CACHE: Dict[str, Dict[str, Any]] = {}

def create_mechanism_graph_panel() -> gr.Plot:
    """
    Returns an empty interactive Plotly plot element for the mechanism graph.
    This does NOT read any files during startup.
    """
    return gr.Plot(
        value=clear(),
        label="Pathway Mechanism Network"
    )

def clear() -> go.Figure:
    """
    Resets the component to its lightweight initial empty Plotly figure state.
    """
    # Reuse standard layout structure
    fig = go.Figure()
    fig.update_layout(
        title={"text": "Pathway Mechanism Graph pending... No execution yet.", "x": 0.5, "y": 0.5},
        xaxis={"visible": False},
        yaxis={"visible": False},
        plot_bgcolor="rgba(0,0,0,0)",
        paper_bgcolor="rgba(0,0,0,0)"
    )
    return fig

def load(json_path: Optional[str]) -> Tuple[go.Figure, float]:
    """
    Lazy-loads outputs/mechanism_graph.json, reuses cached layouts, node positions,
    and returns a tuple of (beautiful_plotly_figure, elapsed_seconds).
    Uses heavy cache optimizations to achieve 0.00ms re-render speeds.
    """
    start_time = time.time()
    if not json_path or not os.path.exists(json_path):
        return clear(), 0.0

    try:
        # Check modification time of the file on disk
        mtime = os.path.getmtime(json_path)
        
        # 1. Reuse complete Figure from cache if unmodified
        if json_path in _GRAPH_CACHE and _GRAPH_CACHE[json_path]["mtime"] == mtime:
            elapsed = time.time() - start_time
            print(f"🕸️ [Plotly Cache] Reused complete cached figure successfully in {elapsed*1000:.2f}ms.")
            return _GRAPH_CACHE[json_path]["fig"], elapsed

        # 2. Parse Mechanism JSON
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        # 3. Create or reuse NetworkX directed graph structure
        G = nx.DiGraph()
        node_types = {}
        node_labels = {}
        
        for node in data.get("nodes", []):
            G.add_node(node["id"])
            node_types[node["id"]] = node["type"]
            node_labels[node["id"]] = node["label"].replace("_", " ").title()
            
        for edge in data.get("edges", []):
            G.add_edge(edge["source"], edge["target"], relation=edge["relation"])

        # 4. Cache and Reuse horizontal horizontal/vertical layer layout positions
        pos_cache_key = f"pos_{json_path}"
        if pos_cache_key in _GRAPH_CACHE and _GRAPH_CACHE[pos_cache_key]["mtime"] == mtime:
            pos = _GRAPH_CACHE[pos_cache_key]["pos"]
        else:
            pos = {}
            type_counts = {}
            for t in node_types.values():
                type_counts[t] = type_counts.get(t, 0) + 1
                
            type_indices = {t: 0 for t in type_counts}
            
            for nid, ntype in node_types.items():
                if ntype == "compound":
                    x = 1.0
                elif ntype == "target":
                    x = 2.5
                elif ntype == "pathway":
                    x = 4.0
                else:
                    x = 5.5
                    
                count = type_counts.get(ntype, 1)
                idx = type_indices[ntype]
                if count == 1:
                    y = 1.0
                else:
                    y = 1.5 - (idx / (count - 1)) * 1.0
                    
                pos[nid] = (x, y)
                type_indices[ntype] += 1
                
            # Save layout positions in memory cache
            _GRAPH_CACHE[pos_cache_key] = {"pos": pos, "mtime": mtime}

        # 5. Build Edge lines
        edge_x = []
        edge_y = []
        for edge in G.edges(data=True):
            x0, y0 = pos[edge[0]]
            x1, y1 = pos[edge[1]]
            edge_x.extend([x0, x1, None])
            edge_y.extend([y0, y1, None])

        # 6. Build Node traces
        node_x = []
        node_y = []
        node_hover_text = []
        node_colors = []
        
        color_map = {
            "compound": "#10b981", # Green
            "target": "#3b82f6",   # Blue
            "pathway": "#6366f1",  # Indigo
            "phenotype": "#a855f7" # Purple
        }

        for nid in G.nodes():
            x, y = pos[nid]
            node_x.append(x)
            node_y.append(y)
            
            lbl = node_labels[nid]
            ntype = node_types[nid]
            
            node_hover_text.append(
                f"<b>Node:</b> {lbl}<br>"
                f"<b>Type:</b> {ntype.upper()}<br>"
                f"<b>ID:</b> {nid}"
            )
            node_colors.append(color_map.get(ntype, "#64748b"))

        # 7. Reuse Layout settings to avoid full chart layout recreation overhead
        fig_cache_key = f"base_fig_{json_path}"
        if fig_cache_key in _GRAPH_CACHE:
            fig = _GRAPH_CACHE[fig_cache_key]["fig"]
            # Fast trace update only (reusing existing layout structure)
            fig.data[0].x = edge_x
            fig.data[0].y = edge_y
            fig.data[1].x = node_x
            fig.data[1].y = node_y
            fig.data[1].text = [node_labels[nid] for nid in G.nodes()]
            fig.data[1].hovertext = node_hover_text
            fig.data[1].marker.color = node_colors
            print(f"🕸️ [Plotly Traces] Fast updated traces in base figure successfully!")
        else:
            # Create fresh Base Figure
            fig = go.Figure()
            
            # Edge trace (index 0)
            fig.add_trace(go.Scatter(
                x=edge_x, y=edge_y,
                line=dict(width=1.5, color='#cbd5e1'),
                hoverinfo='none',
                mode='lines'
            ))

            # Node trace (index 1)
            fig.add_trace(go.Scatter(
                x=node_x, y=node_y,
                mode='markers+text',
                text=[node_labels[nid] for nid in G.nodes()],
                textposition="bottom center",
                textfont=dict(size=10, color='#1e293b', family="Inter, Arial"),
                hovertext=node_hover_text,
                hoverinfo='text',
                marker=dict(
                    showscale=False,
                    color=node_colors,
                    size=28,
                    line=dict(width=3, color='#ffffff')
                )
            ))

            # Base cached Layout properties
            fig.update_layout(
                showlegend=False,
                hovermode='closest',
                margin=dict(b=20, l=20, r=20, t=20),
                xaxis=dict(showgrid=False, zeroline=False, showticklabels=False),
                yaxis=dict(showgrid=False, zeroline=False, showticklabels=False),
                plot_bgcolor='rgba(0,0,0,0)',
                paper_bgcolor='rgba(0,0,0,0)',
                width=700,
                height=300
            )
            _GRAPH_CACHE[fig_cache_key] = {"fig": fig, "mtime": mtime}

        # Cache complete figure
        _GRAPH_CACHE[json_path] = {"fig": fig, "mtime": mtime}
        
        elapsed = time.time() - start_time
        print(f"🕸️ [Plotly compilation] Compiled and cached fresh mechanism graph in {elapsed*1000:.2f}ms.")
        return fig, elapsed
    except Exception as e:
        print(f"🕸️ [Plotly Cache] Error during optimized layout rendering: {e}")
        return clear(), time.time() - start_time

def refresh(json_path: Optional[str]) -> Tuple[go.Figure, float]:
    """
    Refreshes the cached mechanism layout.
    """
    return load(json_path)
