import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import { X, Layers, Download, Sparkles } from 'lucide-react';

interface TargetMatrixProps {
  organismId: string;
  organismName: string;
  targets: { id: string; label: string; desc?: string; strain?: string }[];
  onClose: () => void;
}

export const CrossTargetMatrixModal: React.FC<TargetMatrixProps> = ({
  organismId,
  organismName,
  targets,
  onClose
}) => {
  const [matrixData, setMatrixData] = useState<Record<string, Record<string, number>>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [compoundsList, setCompoundsList] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchAllLeaderboards = async () => {
      setLoading(true);
      const dataMap: Record<string, Record<string, number>> = {};
      const cmpMap = new Map<string, string>();

      try {
        for (const target of targets) {
          const url = `/outputs/${target.id.toLowerCase()}/leaderboard.csv`;
          const res = await axios.get(url);
          const parsed = Papa.parse(res.data, { header: true }).data as any[];

          parsed.forEach(row => {
            const cid = (row["Compound ID"] || row["compound_id"] || "").trim().toLowerCase();
            const cname = row["Compound Name"] || row["compound_name"] || cid;
            const energy = parseFloat(row["Vina Affinity (kcal/mol)"]) || 0.0;

            if (cid) {
              cmpMap.set(cid, cname);
              if (!dataMap[cid]) dataMap[cid] = {};
              dataMap[cid][target.id.toLowerCase()] = energy;
            }
          });
        }

        const cmpArray = Array.from(cmpMap.entries()).map(([id, name]) => ({ id, name }));
        setCompoundsList(cmpArray);
        setMatrixData(dataMap);
      } catch (err) {
        console.error("Error building cross-target matrix:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllLeaderboards();
  }, [organismId, targets]);

  const getAffinityColor = (energy: number) => {
    if (energy <= -8.0) return 'bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40';
    if (energy <= -7.0) return 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40';
    if (energy <= -6.0) return 'bg-blue-500/10 text-blue-300 font-semibold border border-blue-500/20';
    return 'bg-slate-900/50 text-slate-400 border border-slate-800';
  };

  const exportMatrixCSV = () => {
    if (!compoundsList.length) return;
    const headers = ['Compound ID', 'Compound Name', ...targets.map(t => `${t.label} (kcal/mol)`)];
    const rows = compoundsList.map(c => {
      const targetVals = targets.map(t => matrixData[c.id]?.[t.id.toLowerCase()] ?? 'N/A');
      return [c.id, c.name, ...targetVals].join(',');
    });
    const csvContent = [headers.join(','), ...rows].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Polypharmacology_Matrix_${organismId.toUpperCase()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                Multi-Target Poly-Pharmacology Screening Matrix
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30">
                  {organismId.toUpperCase()}
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Comparative binding affinity (&Delta;G kcal/mol) across all targets in <span className="italic text-slate-300">{organismName}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportMatrixCSV}
              className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Export Matrix CSV
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Matrix Table Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-cyan-400">
              <Sparkles className="w-8 h-8 animate-spin" />
              <p className="text-sm font-mono animate-pulse">Aggregating cross-target binding affinities...</p>
            </div>
          ) : (
            <div>
              {/* Legend */}
              <div className="flex items-center justify-between mb-4 px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono">
                <span className="text-slate-400 font-semibold uppercase tracking-wider">Affinity Spectrum:</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-400"></span>
                    <span className="text-emerald-300">&le; -8.0 kcal/mol (Potent)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400"></span>
                    <span className="text-cyan-300">&le; -7.0 kcal/mol (Strong)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-blue-500/30 border border-blue-400"></span>
                    <span className="text-blue-300">&le; -6.0 kcal/mol (Moderate)</span>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left divide-y divide-slate-800">
                  <thead className="bg-slate-950 font-mono text-xs uppercase tracking-wider text-slate-400">
                    <tr>
                      <th className="px-4 py-3 sticky left-0 bg-slate-950 z-10 border-r border-slate-800">Phytochemical Candidate</th>
                      {targets.map(t => (
                        <th key={t.id} className="px-4 py-3 text-center">
                          <div className="font-bold text-cyan-300">{t.label}</div>
                          <div className="text-[10px] text-slate-500 font-normal lowercase">{t.desc || t.id}</div>
                        </th>
                      ))}
                      <th className="px-4 py-3 text-center">Poly-Pharm Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono text-xs bg-slate-900/40">
                    {compoundsList.map(c => {
                      const affinities = targets.map(t => matrixData[c.id]?.[t.id.toLowerCase()] ?? 0);
                      const strongCount = affinities.filter(a => a <= -7.0).length;
                      const avgAffinity = (affinities.reduce((a, b) => a + b, 0) / (affinities.length || 1)).toFixed(2);

                      return (
                        <tr key={c.id} className="hover:bg-slate-800/40 transition-colors">
                          <td className="px-4 py-2.5 font-bold text-slate-200 sticky left-0 bg-slate-900/90 border-r border-slate-800">
                            {c.name}
                            <div className="text-[10px] text-slate-500 font-normal uppercase">{c.id}</div>
                          </td>
                          {targets.map(t => {
                            const val = matrixData[c.id]?.[t.id.toLowerCase()];
                            return (
                              <td key={t.id} className="px-3 py-2 text-center">
                                {val !== undefined ? (
                                  <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-mono transition-transform hover:scale-105 ${getAffinityColor(val)}`}>
                                    {val.toFixed(1)}
                                  </span>
                                ) : (
                                  <span className="text-slate-600">-</span>
                                )}
                              </td>
                            );
                          })}
                          <td className="px-4 py-2.5 text-center">
                            {strongCount >= 2 ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                <Sparkles className="w-3 h-3 text-amber-400" />
                                Dual-Action ({avgAffinity})
                              </span>
                            ) : (
                              <span className="text-slate-500 text-[11px]">Selective ({avgAffinity})</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
