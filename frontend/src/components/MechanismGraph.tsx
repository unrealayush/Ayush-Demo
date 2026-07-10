import React from 'react';

interface Node {
  id: string;
  label: string;
  type: string;
}

interface Edge {
  source: string;
  target: string;
  relation: string;
}

interface MechanismGraphProps {
  nodes?: Node[];
  edges?: Edge[];
}

export const MechanismGraph: React.FC<MechanismGraphProps> = ({ nodes = [], edges = [] }) => {
  if (nodes.length === 0) {
    return (
      <div className="flex items-center justify-center h-[140px] text-[10px] text-slate-500 border border-dashed border-slate-300 dark:border-slate-800 rounded-lg">
        No phenotypic cascade annotations available.
      </div>
    );
  }

  const width = 440;
  const height = 150;
  const cx = width / 2;
  const cy = height / 2;

  const nodePositions: { [id: string]: { x: number; y: number } } = {};

  const compounds = nodes.filter(n => n.type === 'compound');
  const targets = nodes.filter(n => n.type === 'target' || !n.type);
  const phenotypes = nodes.filter(n => n.type === 'phenotype');

  compounds.forEach((node, idx) => {
    nodePositions[node.id] = {
      x: cx - 110 + (idx * 60),
      y: cy
    };
  });

  targets.forEach((node, idx) => {
    const angle = (idx / Math.max(1, targets.length)) * 2 * Math.PI - Math.PI / 2;
    const r = 50;
    nodePositions[node.id] = {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle)
    };
  });

  phenotypes.forEach((node, idx) => {
    const angle = (idx / Math.max(1, phenotypes.length)) * 2 * Math.PI;
    const r = 90;
    nodePositions[node.id] = {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle)
    };
  });

  nodes.forEach((node, idx) => {
    if (!nodePositions[node.id]) {
      nodePositions[node.id] = {
        x: 40 + (idx * 50) % (width - 80),
        y: 40 + (idx * 30) % (height - 80)
      };
    }
  });

  return (
    <div className="w-full h-[140px] bg-slate-50 dark:bg-slate-950/60 rounded-lg border border-slate-300 dark:border-slate-800/80 relative overflow-hidden select-none shadow-inner">
      <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <filter id="neon-glow-indigo" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="neon-glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="neon-glow-rose" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map((edge, idx) => {
          const start = nodePositions[edge.source];
          const end = nodePositions[edge.target];
          if (!start || !end) return null;

          return (
            <g key={`edge-${idx}`}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="#1e293b"
                strokeWidth="1.5"
                className="opacity-60"
              />
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="#06b6d4" // Glowing cyan edges
                strokeWidth="1"
                strokeDasharray="4,4"
              />
              <text
                x={(start.x + end.x) / 2}
                y={(start.y + end.y) / 2 - 4}
                textAnchor="middle"
                className="fill-slate-500 font-mono text-[7px] font-bold"
              >
                {edge.relation}
              </text>
            </g>
          );
        })}

        {nodes.map((node) => {
          const pos = nodePositions[node.id];
          if (!pos) return null;

          let nodeColor = "#0284c7"; // Cyan/Blue
          let strokeColor = "#38bdf8";
          let glowFilter = "url(#neon-glow-indigo)";
          
          if (node.type === 'compound') {
            nodeColor = "#059669"; // Emerald
            strokeColor = "#34d399";
            glowFilter = "url(#neon-glow-emerald)";
          } else if (node.type === 'phenotype') {
            nodeColor = "#e11d48"; // Rose/Pink
            strokeColor = "#fb7185";
            glowFilter = "url(#neon-glow-rose)";
          }

          return (
            <g key={node.id} className="group cursor-pointer">
              <circle
                cx={pos.x}
                cy={pos.y}
                r="11"
                fill="transparent"
                stroke={strokeColor}
                strokeWidth="1.5"
                className="opacity-0 group-hover:opacity-30 transition-all duration-300 ease-out"
                style={{ filter: glowFilter }}
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r="7"
                fill={nodeColor}
                stroke={strokeColor}
                strokeWidth="1.5"
                className="transition-all duration-300 ease-out group-hover:scale-110"
              />
              <text
                x={pos.x}
                y={pos.y + 14}
                textAnchor="middle"
                className="fill-slate-300 font-semibold font-mono text-[7px] select-none pointer-events-none group-hover:fill-white transition-colors"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="absolute top-2 right-2 flex items-center gap-2 bg-slate-50 dark:bg-slate-950/90 border border-slate-300 dark:border-slate-800/80 rounded px-1.5 py-0.5 text-[7px] text-slate-600 dark:text-slate-400 font-bold font-mono">
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 bg-emerald-500 rounded-full" />
          <span>Active</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 bg-sky-500 rounded-full" />
          <span>Target</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 bg-rose-500 rounded-full" />
          <span>Phenotype</span>
        </div>
      </div>
    </div>
  );
};
