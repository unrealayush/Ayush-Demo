import React, { useState } from 'react';
import { ArrowLeft, GitCompare } from 'lucide-react';
import { MoleculeViewer } from './MoleculeViewer';
import { RadarChart } from './RadarChart';

interface ComparisonViewProps {
  targetId: string;
  leaderboard: any[];
  onBack: () => void;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({
  targetId,
  leaderboard,
  onBack
}) => {
  const defaultLigandA = leaderboard[0]?.["Compound ID"] || leaderboard[0]?.["compound_id"] || 'curcumin';
  const defaultLigandB = leaderboard[1]?.["Compound ID"] || leaderboard[1]?.["compound_id"] || 'azadirachtin';

  const [ligandA, setLigandA] = useState<string>(defaultLigandA.toLowerCase());
  const [ligandB, setLigandB] = useState<string>(defaultLigandB.toLowerCase());

  const getRow = (id: string) =>
    leaderboard.find(
      r => (r["Compound ID"] || r["compound_id"] || "").toLowerCase() === id.toLowerCase()
    ) || {};

  const rowA = getRow(ligandA);
  const rowB = getRow(ligandB);

  const getMetrics = (row: any) => ({
    name: row["Compound Name"] || row["compound_name"] || 'Compound',
    vina: parseFloat(row["Vina Affinity (kcal/mol)"] || row["vina_affinity"]) || -7.0,
    diffdock: parseFloat(row["DiffDock Confidence"] || row["diffdock_confidence"]) || -1.5,
    hbonds: parseInt(row["Hydrogen Bonds"] || row["hydrogen_bonds"]) || 3,
    hydrophobic: parseInt(row["Hydrophobic Contacts"] || row["hydrophobic_contacts"]) || 5,
    score: parseFloat(row["Validation Priority Score"] || row["priority_score"]) || 65.0,
    decision: row["Preclinical Decision"] || 'Review'
  });

  const mA = getMetrics(rowA);
  const mB = getMetrics(rowB);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 p-6 font-sans select-none antialiased">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-xs font-mono text-slate-300 hover:text-cyan-400 transition"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Back to Workspace</span>
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <GitCompare className="w-5 h-5 text-cyan-400" />
              Side-by-Side Dual Compound Comparison ({targetId})
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              Compare 3D binding poses, AutoDock Vina physics, and DiffDock-L confidence profiles.
            </p>
          </div>
        </div>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Selector A */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400" />
            <span className="text-xs font-bold text-slate-300">Compound A:</span>
          </div>
          <select
            value={ligandA}
            onChange={(e) => setLigandA(e.target.value)}
            className="bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-xs text-cyan-300 font-mono font-bold outline-none cursor-pointer"
          >
            {leaderboard.map(r => {
              const id = (r["Compound ID"] || r["compound_id"] || "").toLowerCase();
              const name = r["Compound Name"] || r["compound_name"] || id;
              return <option key={id} value={id}>{name}</option>;
            })}
          </select>
        </div>

        {/* Selector B */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-purple-500/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-400" />
            <span className="text-xs font-bold text-slate-300">Compound B:</span>
          </div>
          <select
            value={ligandB}
            onChange={(e) => setLigandB(e.target.value)}
            className="bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-xs text-purple-300 font-mono font-bold outline-none cursor-pointer"
          >
            {leaderboard.map(r => {
              const id = (r["Compound ID"] || r["compound_id"] || "").toLowerCase();
              const name = r["Compound Name"] || r["compound_name"] || id;
              return <option key={id} value={id}>{name}</option>;
            })}
          </select>
        </div>
      </div>

      {/* Dual 3D Viewers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="h-[420px] rounded-xl border border-slate-800 overflow-hidden relative">
          <div className="absolute top-2 left-2 z-30 px-2 py-1 rounded bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs">
            {mA.name}
          </div>
          <MoleculeViewer targetId={targetId} ligandId={ligandA} />
        </div>

        <div className="h-[420px] rounded-xl border border-slate-800 overflow-hidden relative">
          <div className="absolute top-2 left-2 z-30 px-2 py-1 rounded bg-slate-900/90 border border-purple-500/40 text-purple-300 font-mono font-bold text-xs">
            {mB.name}
          </div>
          <MoleculeViewer targetId={targetId} ligandId={ligandB} />
        </div>
      </div>

      {/* Comparison Metrics Grid & Dual Radar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Compound A Metrics */}
        <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 font-mono text-xs">
          <h4 className="text-sm font-bold text-cyan-400 mb-4">{mA.name} Metrics</h4>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Vina Affinity:</span>
              <span className="font-bold text-emerald-400">{mA.vina.toFixed(2)} kcal/mol</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">DiffDock Conf:</span>
              <span className="font-bold text-purple-400">{mA.diffdock.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Hydrogen Bonds:</span>
              <span className="font-bold text-slate-200">{mA.hbonds}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Hydrophobic Contacts:</span>
              <span className="font-bold text-slate-200">{mA.hydrophobic}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-slate-400">Priority Score:</span>
              <span className="font-black text-cyan-300 text-sm">{mA.score.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Dual Radar Overlay */}
        <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col items-center justify-center">
          <RadarChart
            vinaAffinity={mA.vina}
            diffdockConfidence={mA.diffdock}
            hBonds={mA.hbonds}
            hydrophobicContacts={mA.hydrophobic}
            priorityScore={mA.score}
            compoundName={mA.name}
          />
        </div>

        {/* Compound B Metrics */}
        <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 font-mono text-xs">
          <h4 className="text-sm font-bold text-purple-400 mb-4">{mB.name} Metrics</h4>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Vina Affinity:</span>
              <span className="font-bold text-emerald-400">{mB.vina.toFixed(2)} kcal/mol</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">DiffDock Conf:</span>
              <span className="font-bold text-purple-400">{mB.diffdock.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Hydrogen Bonds:</span>
              <span className="font-bold text-slate-200">{mB.hbonds}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Hydrophobic Contacts:</span>
              <span className="font-bold text-slate-200">{mB.hydrophobic}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-slate-400">Priority Score:</span>
              <span className="font-black text-purple-300 text-sm">{mB.score.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
