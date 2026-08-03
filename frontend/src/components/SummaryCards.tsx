import { useMemo } from 'react';
import { Trophy, Zap, Link2, FlaskConical } from 'lucide-react';

interface SummaryCardsProps {
  leaderboard: any[];
  onSelectLigand: (id: string) => void;
}

export const SummaryCards: React.FC<SummaryCardsProps> = ({
  leaderboard,
  onSelectLigand
}) => {
  const insights = useMemo(() => {
    if (!leaderboard || leaderboard.length === 0) return null;

    let bestOverall = leaderboard[0];
    let bestVina = leaderboard[0];
    let bestHBonds = leaderboard[0];
    let bestDiffDock = leaderboard[0];

    for (const row of leaderboard) {
      const score = parseFloat(row["Validation Priority Score"] || row["priority_score"]) || 0;
      const vina = parseFloat(row["Vina Affinity (kcal/mol)"] || row["vina_affinity"]) || 0;
      const hb = parseInt(row["Hydrogen Bonds"] || row["hydrogen_bonds"]) || 0;
      const dd = parseFloat(row["DiffDock Confidence"] || row["diffdock_confidence"]) || -99;

      const bestScore = parseFloat(bestOverall["Validation Priority Score"] || bestOverall["priority_score"]) || 0;
      const bestV = parseFloat(bestVina["Vina Affinity (kcal/mol)"] || bestVina["vina_affinity"]) || 0;
      const bestH = parseInt(bestHBonds["Hydrogen Bonds"] || bestHBonds["hydrogen_bonds"]) || 0;
      const bestD = parseFloat(bestDiffDock["DiffDock Confidence"] || bestDiffDock["diffdock_confidence"]) || -99;

      if (score > bestScore) bestOverall = row;
      if (vina < bestV) bestVina = row;
      if (hb > bestH) bestHBonds = row;
      if (dd > bestD) bestDiffDock = row;
    }

    return [
      {
        title: 'Top Compound',
        compound: bestOverall["Compound Name"] || bestOverall["compound_name"],
        id: (bestOverall["Compound ID"] || bestOverall["compound_id"] || "").toLowerCase(),
        value: (parseFloat(bestOverall["Validation Priority Score"] || bestOverall["priority_score"]) || 0).toFixed(1),
        unit: 'Score',
        icon: Trophy,
        color: 'teal'
      },
      {
        title: 'Strongest Vina',
        compound: bestVina["Compound Name"] || bestVina["compound_name"],
        id: (bestVina["Compound ID"] || bestVina["compound_id"] || "").toLowerCase(),
        value: (parseFloat(bestVina["Vina Affinity (kcal/mol)"] || bestVina["vina_affinity"]) || 0).toFixed(1),
        unit: 'kcal/mol',
        icon: Zap,
        color: 'emerald'
      },
      {
        title: 'Most H-Bonds',
        compound: bestHBonds["Compound Name"] || bestHBonds["compound_name"],
        id: (bestHBonds["Compound ID"] || bestHBonds["compound_id"] || "").toLowerCase(),
        value: (parseInt(bestHBonds["Hydrogen Bonds"] || bestHBonds["hydrogen_bonds"]) || 0).toString(),
        unit: 'bonds',
        icon: Link2,
        color: 'indigo'
      },
      {
        title: 'Top DiffDock',
        compound: bestDiffDock["Compound Name"] || bestDiffDock["compound_name"],
        id: (bestDiffDock["Compound ID"] || bestDiffDock["compound_id"] || "").toLowerCase(),
        value: (parseFloat(bestDiffDock["DiffDock Confidence"] || bestDiffDock["diffdock_confidence"]) || 0).toFixed(2),
        unit: 'conf.',
        icon: FlaskConical,
        color: 'purple'
      }
    ];
  }, [leaderboard]);

  if (!insights) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      {insights.map((card) => (
        <button
          key={card.title}
          onClick={() => onSelectLigand(card.id)}
          className={`group text-left p-3 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
            card.color === 'teal' ? 'border-teal-500/20 hover:border-teal-500/40 hover:shadow-[0_8px_25px_rgba(20,184,166,0.1)]' :
            card.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_8px_25px_rgba(16,185,129,0.1)]' :
            card.color === 'indigo' ? 'border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-[0_8px_25px_rgba(99,102,241,0.1)]' :
            'border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_8px_25px_rgba(168,85,247,0.1)]'
          } bg-slate-900/40`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 font-bold">
              {card.title}
            </span>
            <card.icon className={`w-3.5 h-3.5 ${
              card.color === 'teal' ? 'text-teal-500' :
              card.color === 'emerald' ? 'text-emerald-500' :
              card.color === 'indigo' ? 'text-indigo-500' : 'text-purple-500'
            }`} />
          </div>
          <div className={`text-xl font-bold font-mono mb-0.5 ${
            card.color === 'teal' ? 'text-teal-400' :
            card.color === 'emerald' ? 'text-emerald-400' :
            card.color === 'indigo' ? 'text-indigo-400' : 'text-purple-400'
          }`}>
            {card.value}
            <span className="text-[9px] text-slate-500 font-normal ml-1">{card.unit}</span>
          </div>
          <div className="text-[10px] text-slate-400 truncate group-hover:text-slate-300 transition-colors">
            {card.compound}
          </div>
        </button>
      ))}
    </div>
  );
};
