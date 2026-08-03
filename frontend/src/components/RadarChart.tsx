import { useMemo } from 'react';

interface RadarChartProps {
  vinaAffinity: number;
  diffdockConfidence: number;
  hBonds: number;
  hydrophobicContacts: number;
  priorityScore: number;
  compoundName: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  vinaAffinity,
  diffdockConfidence,
  hBonds,
  hydrophobicContacts,
  priorityScore,
  compoundName
}) => {
  // Normalize all values to 0-1 scale
  const normalized = useMemo(() => ({
    vina: Math.min(1, Math.max(0, -vinaAffinity / 12)),
    diffdock: Math.min(1, Math.max(0, (diffdockConfidence + 4) / 5)),
    hbonds: Math.min(1, Math.max(0, hBonds / 8)),
    hydrophobic: Math.min(1, Math.max(0, hydrophobicContacts / 12)),
    score: Math.min(1, Math.max(0, priorityScore / 100))
  }), [vinaAffinity, diffdockConfidence, hBonds, hydrophobicContacts, priorityScore]);

  const axes = [
    { key: 'vina', label: 'Vina ΔG', value: normalized.vina, raw: `${vinaAffinity.toFixed(1)} kcal/mol` },
    { key: 'diffdock', label: 'DiffDock', value: normalized.diffdock, raw: diffdockConfidence.toFixed(2) },
    { key: 'hbonds', label: 'H-Bonds', value: normalized.hbonds, raw: `${hBonds}` },
    { key: 'hydrophobic', label: 'Hydrophobic', value: normalized.hydrophobic, raw: `${hydrophobicContacts}` },
    { key: 'score', label: 'Priority', value: normalized.score, raw: priorityScore.toFixed(1) }
  ];

  const cx = 120, cy = 110, maxR = 80;
  const n = axes.length;
  const angleStep = (2 * Math.PI) / n;
  const startAngle = -Math.PI / 2;

  const getPoint = (index: number, radius: number) => {
    const angle = startAngle + index * angleStep;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle)
    };
  };

  // Concentric grid rings
  const rings = [0.25, 0.5, 0.75, 1.0];

  // Data polygon
  const dataPoints = axes.map((a, i) => getPoint(i, a.value * maxR));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">
        {compoundName} Profile
      </div>
      <svg viewBox="0 0 240 230" className="w-full max-w-[240px]">
        {/* Grid rings */}
        {rings.map((r) => {
          const ringPoints = Array.from({ length: n }, (_, i) => getPoint(i, r * maxR));
          const ringPath = ringPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
          return (
            <path key={r} d={ringPath} fill="none" stroke="rgba(148,163,184,0.12)" strokeWidth="0.5" />
          );
        })}

        {/* Axis lines */}
        {axes.map((_, i) => {
          const end = getPoint(i, maxR);
          return (
            <line key={i} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" />
          );
        })}

        {/* Data polygon fill */}
        <path
          d={dataPath}
          fill="rgba(20,184,166,0.15)"
          stroke="rgba(20,184,166,0.7)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="transition-all duration-700"
        />

        {/* Data points */}
        {dataPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#14b8a6" stroke="#0f172a" strokeWidth="1" />
        ))}

        {/* Axis labels */}
        {axes.map((a, i) => {
          const labelPoint = getPoint(i, maxR + 18);
          const anchor = labelPoint.x < cx - 5 ? 'end' : labelPoint.x > cx + 5 ? 'start' : 'middle';
          return (
            <g key={a.key}>
              <text
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor={anchor}
                dominantBaseline="middle"
                className="fill-slate-400 text-[7px] font-mono font-semibold"
              >
                {a.label}
              </text>
              <text
                x={labelPoint.x}
                y={labelPoint.y + 9}
                textAnchor={anchor}
                dominantBaseline="middle"
                className="fill-teal-400 text-[6px] font-mono font-bold"
              >
                {a.raw}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
