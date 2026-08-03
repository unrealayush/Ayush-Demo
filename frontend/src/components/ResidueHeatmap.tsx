import React, { useMemo } from 'react';

interface ResidueHeatmapProps {
  targetId: string;
  leaderboard: any[];
}

export const ResidueHeatmap: React.FC<ResidueHeatmapProps> = ({ targetId, leaderboard }) => {
  // Key active site residues per target
  const keyResiduesMap: Record<string, string[]> = {
    PqsR: ['Tyr258', 'Ile236', 'Leu207', 'Val170', 'Ser255', 'Leu197', 'Gln194', 'Ile186'],
    LasR: ['Trp60', 'Tyr56', 'Asp73', 'Thr75', 'Ser129', 'Thr115', 'Leu36', 'Ala127'],
    PelD: ['Arg367', 'Asp370', 'Glu268', 'Arg271', 'Gly269', 'Val368', 'Leu272', 'Ala369'],
    MexB: ['Phe136', 'Phe178', 'Phe610', 'Phe615', 'Phe617', 'Val612', 'Gln176', 'Lys151'],

    AgrA: ['His169', 'Asn201', 'Val172', 'Ile210', 'Arg198', 'Lys214', 'Phe203', 'Leu199'],
    SrtA: ['His120', 'Cys184', 'Arg197', 'Trp194', 'Ala92', 'Pro94', 'Glu105', 'Thr180'],
    MecA: ['Ser403', 'Lys406', 'Asn464', 'Gln521', 'Thr600', 'Met641', 'Tyr446', 'Lys597'],
    MurJ: ['Arg27', 'Arg161', 'Arg255', 'Lys263', 'Asp24', 'Glu258', 'Gln251', 'Ser262'],

    MrkH: ['Arg68', 'Arg112', 'Glu64', 'Thr66', 'Val110', 'Leu114', 'Phe70', 'Ser111'],
    Wzc: ['Lys538', 'Glu540', 'Tyr569', 'Arg571', 'Asp640', 'Gly642', 'Val536', 'Leu573'],
    AcrB: ['Phe136', 'Phe178', 'Phe610', 'Phe615', 'Phe617', 'Val612', 'Gln176', 'Lys151'],
    OmpK36: ['Arg42', 'Arg82', 'Arg132', 'Glu60', 'Asp135', 'Lys134', 'Tyr118', 'Phe130']
  };

  const activeResidues = keyResiduesMap[targetId] || keyResiduesMap['PqsR'];

  // Simulate contact frequency data based on target & leaderboard count
  const residueData = useMemo(() => {
    const total = Math.max(1, leaderboard.length);
    return activeResidues.map((res, i) => {
      const rawCount = Math.min(total, Math.max(2, Math.round(total * (0.85 - (i * 0.08)))));
      const pct = Math.round((rawCount / total) * 100);
      return { residue: res, count: rawCount, pct };
    });
  }, [targetId, leaderboard, activeResidues]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
          Active Site Contact Hotspots ({targetId})
        </span>
        <span className="text-[9px] font-mono text-slate-600">
          Residue Frequency Across Library
        </span>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {residueData.map((item) => {
          const isHigh = item.pct >= 70;
          const isMed = item.pct >= 40;
          return (
            <div
              key={item.residue}
              className={`p-2 rounded-lg border text-center font-mono transition-all hover:scale-105 ${
                isHigh
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                  : isMed
                  ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <div className="text-[10px] font-bold truncate">{item.residue}</div>
              <div className="text-xs font-black mt-0.5">{item.pct}%</div>
              <div className="text-[8px] text-slate-500 mt-0.5">{item.count} ligands</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
