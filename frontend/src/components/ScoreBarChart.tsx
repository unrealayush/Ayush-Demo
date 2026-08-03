interface ScoreBarChartProps {
  leaderboard: any[];
  selectedLigand: string;
  onSelectLigand: (id: string) => void;
}

export const ScoreBarChart: React.FC<ScoreBarChartProps> = ({
  leaderboard,
  selectedLigand,
  onSelectLigand
}) => {
  if (!leaderboard || leaderboard.length === 0) return null;

  // Parse and sort by priority score descending
  const items = leaderboard
    .map((row) => {
      const id = (row["Compound ID"] || row["compound_id"] || "").toLowerCase();
      const name = row["Compound Name"] || row["compound_name"] || id;
      const score = parseFloat(row["Validation Priority Score"] || row["priority_score"]) || 0;
      return { id, name, score };
    })
    .sort((a, b) => b.score - a.score);

  const maxScore = Math.max(...items.map(i => i.score), 1);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
          All Compounds — Priority Score Distribution
        </span>
        <span className="text-[9px] font-mono text-slate-600">
          {items.length} compounds
        </span>
      </div>

      <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar pr-1">
        {items.map((item, idx) => {
          const pct = (item.score / maxScore) * 100;
          const isSelected = item.id === selectedLigand.toLowerCase();
          const tierColor =
            item.score >= 75 ? 'bg-emerald-500' :
            item.score >= 60 ? 'bg-cyan-500' :
            item.score >= 45 ? 'bg-amber-500' : 'bg-slate-600';

          return (
            <button
              key={item.id}
              onClick={() => onSelectLigand(item.id)}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all duration-200 group ${
                isSelected
                  ? 'bg-teal-500/10 border border-teal-500/40 ring-1 ring-teal-500/20'
                  : 'border border-transparent hover:border-slate-700/50 hover:bg-slate-900/30'
              }`}
            >
              {/* Rank */}
              <span className="w-5 text-[9px] font-mono text-slate-600 font-bold shrink-0">
                {idx + 1}
              </span>

              {/* Name */}
              <span className={`w-32 text-[10px] font-semibold truncate shrink-0 ${
                isSelected ? 'text-teal-300' : 'text-slate-300 group-hover:text-slate-200'
              }`}>
                {item.name}
              </span>

              {/* Bar */}
              <div className="flex-1 h-4 rounded-full overflow-hidden relative" style={{ background: 'rgba(15,23,42,0.6)' }}>
                <div
                  className={`h-full rounded-full transition-all duration-500 ${tierColor}`}
                  style={{ width: `${pct}%`, opacity: isSelected ? 1 : 0.7 }}
                />
              </div>

              {/* Score */}
              <span className={`w-10 text-right text-[10px] font-mono font-bold shrink-0 ${
                item.score >= 75 ? 'text-emerald-400' :
                item.score >= 60 ? 'text-cyan-400' :
                item.score >= 45 ? 'text-amber-400' : 'text-slate-500'
              }`}>
                {item.score.toFixed(1)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tier Legend */}
      <div className="flex items-center gap-4 mt-3 pt-2 border-t border-slate-800/40">
        {[
          { label: 'Initiate Assay (≥75)', color: 'bg-emerald-500' },
          { label: 'Promising (≥60)', color: 'bg-cyan-500' },
          { label: 'Moderate (≥45)', color: 'bg-amber-500' },
          { label: 'Low (<45)', color: 'bg-slate-600' }
        ].map((tier) => (
          <div key={tier.label} className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${tier.color}`} />
            <span className="text-[8px] font-mono text-slate-500">{tier.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
