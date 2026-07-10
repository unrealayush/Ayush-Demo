import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Papa from 'papaparse';
import {
  Calendar,
  ShieldCheck,
  ClipboardList,
  BrainCircuit,
  Globe2,
  CheckCircle2,
  Trophy,
  Share2,
  Database,
  FileText,
  Activity,
  Search,
  RefreshCw
} from 'lucide-react';
import { MoleculeViewer } from './components/MoleculeViewer';
import { MechanismGraph } from './components/MechanismGraph';

// ── Pathogen Organism Mappings ──
const ORGANISMS = [
  {
    id: 'pseudomonas',
    name: 'Pseudomonas aeruginosa',
    emoji: '🦠',
    description: 'Gram-negative opportunistic pathogen',
    colorClass: 'text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]',
    activeColor: 'bg-emerald-500 border-emerald-400 text-emerald-700 dark:text-emerald-300',
    targets: [
      { id: 'PqsR', label: 'PqsR / MvfR', desc: 'Transcription Regulator (LBD)', strain: 'PAO1' },
      { id: 'LasR', label: 'LasR', desc: 'Autoinducer Receptor', strain: 'PAO1' },
      { id: 'PelD', label: 'PelD', desc: 'c-di-GMP Synthase effector', strain: 'PAO1' },
      { id: 'MexB', label: 'MexB', desc: 'Multi-drug Efflux Pump', strain: 'PAO1' }
    ]
  },
  {
    id: 'staphylococcus',
    name: 'Staphylococcus aureus',
    emoji: '🧫',
    description: 'Gram-positive virulent pathogen',
    colorClass: 'text-rose-600 dark:text-rose-400 border-rose-500/30 bg-rose-950/20 shadow-[0_0_15px_rgba(244,63,94,0.15)]',
    activeColor: 'bg-rose-500 border-rose-400 text-rose-300',
    targets: [
      { id: 'AgrA', label: 'AgrA', desc: 'Transcription Regulator', strain: 'USA300' },
      { id: 'SrtA', label: 'Sortase A / SrtA', desc: 'Transpeptidase Adhesion', strain: 'USA300' },
      { id: 'MecA', label: 'PBP2a / MecA', desc: 'Beta-lactam Resistant Cell Wall', strain: 'USA300' }
    ]
  },
  {
    id: 'enterobacteriaceae',
    name: 'Enterobacteriaceae (E. coli / K. pneumoniae)',
    emoji: '🧬',
    description: 'Gram-negative drug-resistant bacilli',
    colorClass: 'text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]',
    activeColor: 'bg-cyan-500 border-cyan-400 text-cyan-700 dark:text-cyan-300',
    targets: [
      { id: 'AcrB', label: 'AcrB', desc: 'E. coli Efflux Pump transporter', strain: 'K12 / MGH78578' },
      { id: 'MurJ', label: 'MurJ', desc: 'E. coli Lipid II Flippase', strain: 'K12' },
      { id: 'OmpK36', label: 'OmpK36', desc: 'K. pneumoniae Porin channel', strain: 'MGH78578' },
      { id: 'MrkH', label: 'MrkH', desc: 'K. pneumoniae Type III Fimbriae', strain: 'MGH78578' },
      { id: 'Wzc', label: 'Wzc', desc: 'K. pneumoniae Capsule Autokinase', strain: 'MGH78578' }
    ]
  }
];

interface DashboardProps {
  onOpenDetail?: (targetId: string, ligandId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onOpenDetail }) => {
  // ── States ──
  const [selectedOrganism, setSelectedOrganism] = useState<string>('pseudomonas');
  const [selectedTarget, setSelectedTarget] = useState<string>('PqsR');
  const [selectedLigand, setSelectedLigand] = useState<string>('Chrysin');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Find active organism details
  const activeOrg = ORGANISMS.find(o => o.id === selectedOrganism) || ORGANISMS[0];
  const activeTargetDetails = activeOrg.targets.find(t => t.id === selectedTarget) || activeOrg.targets[0];

  // ── Auto-Update Target when Organism Tab changes ──
  useEffect(() => {
    const defaultTarget = activeOrg.targets[0].id;
    setSelectedTarget(defaultTarget);
  }, [selectedOrganism]);

  // ── 1. Fetch Target Leaderboard CSV ──
  const { data: leaderboard = [], isLoading: loadingLeaderboard } = useQuery({
    queryKey: ['leaderboard', selectedTarget],
    queryFn: async () => {
      const url = `/outputs/${selectedTarget.toLowerCase()}/screening_leaderboard.csv`;
      const res = await axios.get(url);
      const parsed = Papa.parse(res.data, { header: true, skipEmptyLines: true });
      return parsed.data as any[];
    }
  });

  // ── 2. Auto-Select Rank 1 Ligand on Target/Leaderboard Change ──
  useEffect(() => {
    if (leaderboard.length > 0) {
      const topLigand = leaderboard[0]["Compound ID"] || leaderboard[0]["compound_id"];
      if (topLigand) {
        setSelectedLigand(topLigand);
      }
    }
  }, [leaderboard, selectedTarget]);

  // ── 3. Fetch Selected Compound Cascade Graph JSON ──
  const { data: graphData } = useQuery({
    queryKey: ['mechanism-graph', selectedTarget, selectedLigand],
    queryFn: async () => {
      const url = `/outputs/${selectedTarget.toLowerCase()}/${selectedLigand.toLowerCase()}/mechanism_graph.json`;
      const res = await axios.get(url);
      return res.data;
    },
    enabled: !!selectedTarget && !!selectedLigand
  });

  // ── 4. Fetch Selected Compound Dossier Passport JSON ──
  const { data: passport } = useQuery({
    queryKey: ['evidence-passport', selectedTarget, selectedLigand],
    queryFn: async () => {
      const url = `/outputs/${selectedTarget.toLowerCase()}/${selectedLigand.toLowerCase()}/evidence_passport.json`;
      const res = await axios.get(url);
      return res.data;
    },
    enabled: !!selectedTarget && !!selectedLigand
  });

  // Extract active row values from leaderboard
  const activeRow = leaderboard.find(row => 
    (row["Compound ID"] || row["compound_id"] || "").toLowerCase() === selectedLigand.toLowerCase()
  );

  const compoundName = activeRow ? activeRow["Compound Name"] : selectedLigand;
  const vinaEnergy = activeRow ? parseFloat(activeRow["Vina Affinity (kcal/mol)"]) || 0.0 : 0.0;
  const diffdockConfidence = activeRow ? parseFloat(activeRow["DiffDock Confidence"]) || 0.0 : 0.0;
  const hBonds = activeRow ? parseInt(activeRow["Hydrogen Bonds"]) || 0 : 0;
  const hydrophobic = activeRow ? parseInt(activeRow["Hydrophobic Contacts"]) || 4 : 4;
  const priorityScore = activeRow ? parseFloat(activeRow["Validation Priority Score"]) || 0.0 : 0.0;
  const decision = activeRow ? activeRow["Preclinical Decision"] : "Review manually";
  const evidenceStrength = activeRow ? activeRow["Evidence Strength"] : "Low preclinical plausibility";

  // Dynamic Metrics mapped from physics
  const dockingPlausibility = Math.min(100, Math.max(10, Math.round((-vinaEnergy / 12.0) * 100)));
  const antiBiofilmSupport = Math.min(100, Math.max(10, Math.round(((diffdockConfidence + 3.0) / 5.0) * 100)));
  const amrRelevance = Math.round(priorityScore);

  // Filter leaderboard
  const filteredLeaderboard = leaderboard.filter(row => {
    const name = (row["Compound Name"] || "").toLowerCase();
    const id = (row["Compound ID"] || "").toLowerCase();
    return name.includes(searchQuery.toLowerCase()) || id.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 font-sans select-none antialiased">
      
      {/* ── Top Navigation Bar ── */}
      <header className="flex flex-col lg:flex-row items-center justify-between gap-4 glass-panel px-6 py-4 rounded-xl mb-4 shadow-[0_0_20px_rgba(14,165,233,0.15)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <div className="text-cyan-600 dark:text-cyan-400 font-bold text-xl">🧬</div>
          </div>
          <div>
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 tracking-tight">AYUSH Bio-AI Evidence Demo</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium tracking-wide uppercase mt-0.5">Mechanism-linked validation for AYUSH medicines</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 relative z-10">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <Calendar className="w-4 h-4 text-cyan-500" />
            <span className="font-mono">July 7, 2026 10:30 AM</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-50/50 dark:bg-purple-950/30 text-xs font-semibold text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            Mode: Research-Use-Only
          </div>

          <div className="pl-4 border-l border-slate-200 dark:border-slate-700/50 hidden md:block">
            <div className="text-xl font-black tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              mevreon<span className="text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">·</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Pathogen Organism Segregation Tabs Row ── */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {ORGANISMS.map(org => {
          const isActive = org.id === selectedOrganism;
          return (
            <button
              key={org.id}
              onClick={() => setSelectedOrganism(org.id)}
              className={`flex flex-col items-center p-3 rounded-xl border text-center transition-all duration-300 relative overflow-hidden ${
                isActive 
                  ? `${org.colorClass} border-cyan-400 ring-1 ring-cyan-500/30 scale-[1.01]` 
                  : 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/10 hover:border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:text-slate-200'
              }`}
            >
              {isActive && (
                <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              )}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{org.emoji}</span>
                <span className="text-xs font-black uppercase tracking-wider font-mono">{org.name}</span>
              </div>
              <p className="text-[10px] text-slate-500 italic font-medium">{org.description}</p>
            </button>
          );
        })}
      </div>

      {/* ── Main Grid ── */}
      <div className="grid grid-cols-12 gap-4 mb-4">

        {/* ── LEFT COLUMN: Demo Inputs (span-3) ── */}
        <div className="col-span-12 xl:col-span-3 flex flex-col gap-4">
          <div className="glass-panel rounded-xl p-5 flex-1 relative overflow-hidden flex flex-col justify-between">
             <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>

             <div>
              <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700/50 pb-3">
                <ClipboardList className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-wide">Preclinical Inputs</h2>
              </div>

              {/* Pathogen Target Selection pill grid */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-900 border border-cyan-400 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs font-bold shadow-[0_0_8px_rgba(6,182,212,0.4)]">1</div>
                  <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase">Select Target Vector</h3>
                </div>
                <div className="grid grid-cols-1 gap-2 pl-7">
                  {activeOrg.targets.map(tar => {
                    const isTargetActive = tar.id === selectedTarget;
                    return (
                      <button
                        key={tar.id}
                        onClick={() => setSelectedTarget(tar.id)}
                        className={`text-left p-2 rounded border text-xs font-mono font-bold transition-all relative overflow-hidden ${
                          isTargetActive 
                            ? 'bg-cyan-50 dark:bg-cyan-50/80 dark:bg-cyan-950/40 border-cyan-400 text-cyan-700 dark:text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]' 
                            : 'border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/10 text-slate-600 dark:text-slate-400 hover:border-slate-200 dark:border-slate-700 hover:text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-0.5">
                          <span>{tar.label}</span>
                          {isTargetActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]" />}
                        </div>
                        <p className="text-[9px] text-slate-500 italic font-semibold">{tar.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Phytochemical Card */}
              <div className="mb-6 border-t border-slate-300 dark:border-slate-800/50 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-900 border border-cyan-400 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs font-bold shadow-[0_0_8px_rgba(6,182,212,0.4)]">2</div>
                    <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">ACTIVE CANDIDATE</h3>
                  </div>
                  {onOpenDetail && (
                    <button 
                      onClick={() => onOpenDetail(selectedTarget, selectedLigand)}
                      className="px-2 py-1 bg-cyan-50 dark:bg-cyan-950 border border-cyan-600 rounded text-[9px] font-bold text-cyan-700 dark:text-cyan-300 hover:bg-cyan-900 transition-colors flex items-center gap-1 shadow-[0_0_5px_rgba(6,182,212,0.3)]"
                    >
                      <Database className="w-3 h-3" /> MORE INFO
                    </button>
                  )}
                </div>
                <div className="pl-7">
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-1 font-semibold uppercase tracking-wider">Kuth Actives (Selected)</p>
                  <h4 className="text-sm font-bold text-cyan-900 dark:text-cyan-100 leading-snug drop-shadow-[0_0_2px_rgba(255,255,255,0.2)]">{compoundName}</h4>
                  <div className="flex items-center justify-between mt-2.5 gap-2">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold mb-1 shadow-[0_0_5px_rgba(16,185,129,0.2)]">Mono-Component</span>
                      <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium">Source: <span className="font-semibold text-slate-700 dark:text-slate-300">Saussurea lappa</span></p>
                    </div>
                    <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Saussurea_costus_1.jpg/640px-Saussurea_costus_1.jpg" alt="Saussurea Lappa" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Pathogen Strain Details */}
              <div className="mb-6 border-t border-slate-300 dark:border-slate-800/50 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-900 border border-cyan-400 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs font-bold shadow-[0_0_8px_rgba(6,182,212,0.4)]">3</div>
                  <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">CLINICAL ISOLATE</h3>
                </div>
                <div className="pl-7">
                  <div className="flex justify-between items-center gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-red-300 mb-1 drop-shadow-[0_0_5px_rgba(248,113,113,0.3)]">{activeOrg.name}</h4>
                      <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">Reference Strain: <span className="text-cyan-600 dark:text-cyan-400">{activeTargetDetails.strain}</span></p>
                    </div>
                    <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0">
                      <img src={
                        activeOrg.id === 'pseudomonas' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pseudomonas_aeruginosa_gram.jpg/640px-Pseudomonas_aeruginosa_gram.jpg' :
                        activeOrg.id === 'staphylococcus' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Staphylococcus_aureus_Gram.jpg/640px-Staphylococcus_aureus_Gram.jpg' :
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/EscherichiaColi_NIAID.jpg/640px-EscherichiaColi_NIAID.jpg'
                      } alt={activeOrg.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
             </div>

            {/* Antibiotic Comparators */}
            <div className="border-t border-slate-300 dark:border-slate-800/50 pt-4 mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-cyan-900 border border-cyan-400 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs font-bold shadow-[0_0_8px_rgba(6,182,212,0.4)]">4</div>
                <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">Study Context</h3>
              </div>
              <div className="pl-7">
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">Ciprofloxacin Adjuvant Assay</h4>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-[9px] font-semibold">Biofilm Inhibition</span>
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-slate-200 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0 p-1 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ciprofloxacin.svg/640px-Ciprofloxacin.svg.png" alt="Ciprofloxacin" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MIDDLE COLUMN: Mechanism Layer (span-5) ── */}
        <div className="col-span-12 xl:col-span-5 flex flex-col gap-4">
          <div className="glass-panel rounded-xl p-5 flex-1 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 dark:border-slate-700/50 pb-3">
              <BrainCircuit className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-wide">Bio-AI Co-Crystal Simulation</h2>
                <p className="text-[10px] uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold font-mono">Live WebGL-3D molecular interactions</p>
              </div>
            </div>

            {/* Dynamic WebGL 3D Molecule Viewer Panel */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[11px] font-bold text-slate-700 dark:text-slate-300 tracking-wider uppercase">{selectedTarget} Binding Site</h3>
                <span className="px-2 py-0.5 text-[8px] font-bold font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950 border border-cyan-800 rounded">Interactive WebGL</span>
              </div>
              
              <div className="h-64 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg relative overflow-hidden shadow-inner flex items-center justify-center">
                {selectedTarget && selectedLigand ? (
                  <MoleculeViewer targetId={selectedTarget} ligandId={selectedLigand} />
                ) : (
                  <div className="text-center text-slate-500 font-mono text-xs">
                    Initializing graphics cards...
                  </div>
                )}
              </div>
            </div>

            {/* AI Mechanism Graph Panel */}
            <div className="flex-1 glass-card rounded-xl p-4 relative flex flex-col bg-white dark:bg-slate-900/10 border border-slate-300 dark:border-slate-800">
              <h3 className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-3 tracking-wider uppercase">AI-Derived Cascade Network</h3>
              
              <div className="flex-1 min-h-[140px]">
                <MechanismGraph nodes={graphData?.nodes} edges={graphData?.edges} />
              </div>

              <div className="mt-3 flex items-start gap-3 p-2.5 bg-white/80 dark:bg-white dark:bg-slate-900/60 rounded-lg border border-cyan-900/50 backdrop-blur-md relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-cyan-500"></div>
                <div className="w-6 h-6 rounded bg-cyan-50 dark:bg-cyan-950 flex items-center justify-center shrink-0 border border-cyan-800">
                  <BrainCircuit className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                    <span className="font-bold text-cyan-600 dark:text-cyan-400">&gt; ANNOTATION:</span> {passport?.executive_summary || `${compoundName} targets the active site pocket of ${selectedTarget}, initiating down-regulation of virulent biofilm synthesis loops.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Evidence Passport (span-4) ── */}
        <div className="col-span-12 xl:col-span-4 flex flex-col gap-4">
          <div className="glass-panel rounded-xl p-5 flex-1 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent"></div>

            <div>
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-700/50 pb-3">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-wide">Evidence Passport</h2>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" />
              </div>

              {/* Dynamic Score Section */}
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-cyan-500/20 blur-[2px]"></div>
                  <div className="absolute inset-2 rounded-full bg-cyan-900/20 blur-md"></div>
                  
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="rgba(30,41,59,0.5)" strokeWidth="5" fill="none" />
                    <circle cx="50" cy="50" r="45" stroke="#22d3ee" strokeWidth="5.5" fill="none" strokeDasharray="282.7" strokeDashoffset={282.7 - (priorityScore / 100) * 282.7} strokeLinecap="round" />
                  </svg>
                  <div className="relative flex flex-col items-center justify-center z-10">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-cyan-300 font-mono">{priorityScore.toFixed(1)}</span>
                    <span className="text-[9px] font-bold text-cyan-500/80 tracking-widest uppercase mt-0.5">Score</span>
                  </div>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-1 font-mono">PRIORITY RATING</p>
                  <p className="text-sm font-black text-cyan-600 dark:text-cyan-400 leading-snug mb-1 drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">{decision}</p>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">Evidence Strength: <br/><span className="font-bold text-purple-600 dark:text-purple-400 font-mono text-[10px]">{evidenceStrength}</span></p>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4 mb-6 border-t border-slate-200 dark:border-slate-700/50 pt-4">
                
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Priority Weight</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">{amrRelevance}/100</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{ width: `${amrRelevance}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <BrainCircuit className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Docking Plausibility</span>
                    </div>
                    <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400">{dockingPlausibility}/100</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" style={{ width: `${dockingPlausibility}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-teal-400" />
                      <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Generative Confidence</span>
                    </div>
                    <span className="text-[10px] font-mono text-teal-400">{antiBiofilmSupport}/100</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)]" style={{ width: `${antiBiofilmSupport}%` }} />
                  </div>
                </div>

              </div>

              {/* Real Thermodynamic Details */}
              <div className="mb-6 border-t border-slate-200 dark:border-slate-700/50 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-4 h-4 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
                  <h3 className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">Biophysical Energetics ({selectedLigand})</h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/80 dark:bg-white dark:bg-slate-900/60 p-2.5 rounded border border-slate-300 dark:border-slate-800/80 text-center">
                    <span className="text-[8px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest block mb-1">Vina Affinity</span>
                    <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_4px_rgba(16,185,129,0.3)]">{vinaEnergy.toFixed(2)} <span className="text-[7px] text-slate-500 uppercase">kcal/mol</span></span>
                  </div>
                  <div className="bg-white/80 dark:bg-white dark:bg-slate-900/60 p-2.5 rounded border border-slate-300 dark:border-slate-800/80 text-center">
                    <span className="text-[8px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest block mb-1">DiffDock Conf.</span>
                    <span className="text-xs font-black text-purple-600 dark:text-purple-400 drop-shadow-[0_0_4px_rgba(168,85,247,0.3)]">{diffdockConfidence.toFixed(2)}</span>
                  </div>
                  <div className="bg-white/80 dark:bg-white dark:bg-slate-900/60 p-2.5 rounded border border-slate-300 dark:border-slate-800/80 text-center">
                    <span className="text-[8px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest block mb-1">H-Bonds</span>
                    <span className="text-xs font-black text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_4px_rgba(6,182,212,0.3)]">{hBonds} / {hydrophobic}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Validation Workflow */}
            <div className="border-t border-slate-200 dark:border-slate-700/50 pt-4 mt-auto">
              <h3 className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-3 text-center font-mono">Suggested Pre-Clinical Flow</h3>
              <div className="grid grid-cols-1 gap-2.5">
                {(passport?.next_validation_steps || [
                  "Verify ligand displacement limits using competitive fluorescent assays.",
                  "Conduct standard MIC biofilms assays on mammalian lines to check toxicity limits.",
                  "Perform target expression qPCR audits."
                ]).map((step: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white/60 dark:bg-white dark:bg-slate-900/40 p-2 rounded border border-slate-300 dark:border-slate-800/60 hover:border-cyan-500/20 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-[10px] text-slate-700 dark:text-slate-300 font-mono leading-tight">{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── Interactive 24-Compound Preclinical Leaderboard Table (Spans Full Width) ── */}
      <div className="glass-panel rounded-xl p-5 mb-4 shadow-[0_0_20px_rgba(14,165,233,0.1)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300 dark:border-slate-800 pb-3.5 mb-4">
          <div className="flex items-center gap-2.5">
            <ClipboardList className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-wide">{selectedTarget} Leaderboard Ranking</h2>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 font-semibold font-mono uppercase tracking-wider">Dynamic high-throughput screening database (24 Compounds)</p>
            </div>
          </div>
          
          {/* Glowing Search Bar */}
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-3.5 w-3.5 text-slate-500" />
            </span>
            <input
              type="text"
              placeholder="Search phytochemical compounds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-9 pr-3 py-1.5 bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800/80 rounded-lg text-xs font-semibold placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 font-mono transition-all duration-300"
            />
          </div>
        </div>

        {/* Dynamic Data Table */}
        <div className="overflow-x-auto select-none rounded-lg border border-slate-300 dark:border-slate-800/80">
          <table className="min-w-full divide-y divide-slate-800 bg-slate-50 dark:bg-slate-950/50">
            <thead className="bg-slate-50 dark:bg-slate-950/90 font-mono text-[9px] uppercase tracking-wider text-slate-600 dark:text-slate-400 font-black">
              <tr>
                <th className="px-4 py-3 text-left">Rank</th>
                <th className="px-4 py-3 text-left">Compound Name</th>
                <th className="px-4 py-3 text-right">Vina Affinity (kcal/mol)</th>
                <th className="px-4 py-3 text-right">DiffDock Confidence</th>
                <th className="px-4 py-3 text-right">H-Bonds</th>
                <th className="px-4 py-3 text-center">Priority Score</th>
                <th className="px-4 py-3 text-left">Preclinical Decision</th>
                <th className="px-4 py-3 text-left">Evidence Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900/60 font-mono text-[10px] font-semibold">
              {loadingLeaderboard ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-slate-500">
                    <div className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-4 h-4 text-cyan-500 animate-spin" />
                      <span>Parsing preclinical datasets from static assets...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredLeaderboard.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-slate-500">
                    No matching compounds found inside the target database.
                  </td>
                </tr>
              ) : (
                filteredLeaderboard.map((row: any) => {
                  const id = (row["Compound ID"] || row["compound_id"] || "").toLowerCase();
                  const name = row["Compound Name"] || row["compound_name"] || id;
                  const isSelected = id === selectedLigand.toLowerCase();
                  
                  const vAffinity = parseFloat(row["Vina Affinity (kcal/mol)"] || row["vina_affinity"]) || 0.0;
                  const dConfidence = parseFloat(row["DiffDock Confidence"] || row["diffdock_confidence"]) || 0.0;
                  const hydrogenBonds = parseInt(row["Hydrogen Bonds"] || row["hydrogen_bonds"]) || 0;
                  const priority = parseFloat(row["Validation Priority Score"] || row["priority_score"]) || 0.0;
                  const rowDecision = row["Preclinical Decision"] || row["decision"];
                  const strength = row["Evidence Strength"] || row["evidence_strength"];

                  return (
                    <tr
                      key={id}
                      onClick={() => setSelectedLigand(id)}
                      className={`cursor-pointer transition-all duration-150 ${
                        isSelected 
                          ? 'bg-cyan-50 dark:bg-cyan-50/80 dark:bg-cyan-950/40 border-l-2 border-cyan-500 text-white shadow-inner shadow-[0_0_10px_rgba(6,182,212,0.1)]' 
                          : 'hover:bg-white dark:bg-slate-900/20 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <td className="px-4 py-2.5 font-bold text-slate-500">#{row.Rank || row.rank}</td>
                      <td className="px-4 py-2.5 font-sans font-bold flex items-center gap-1.5">
                        <span className="text-slate-900 dark:text-slate-100">{name}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]" />}
                      </td>
                      <td className={`px-4 py-2.5 text-right font-black ${vAffinity < -7.0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>
                        {vAffinity.toFixed(2)}
                      </td>
                      <td className={`px-4 py-2.5 text-right font-black ${dConfidence > -1.0 ? 'text-purple-600 dark:text-purple-400' : 'text-slate-600 dark:text-slate-400'}`}>
                        {dConfidence.toFixed(2)}
                      </td>
                      <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400">{hydrogenBonds}</td>
                      <td className="px-4 py-2.5 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded font-black text-[9px] ${
                          priority >= 75.0 
                            ? 'bg-emerald-50 dark:bg-emerald-950 border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 font-bold' 
                            : priority >= 60.0 
                              ? 'bg-cyan-50 dark:bg-cyan-950 border border-cyan-500/50 text-cyan-600 dark:text-cyan-400' 
                              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-400'
                        }`}>
                          {priority.toFixed(1)}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-slate-700 dark:text-slate-300 text-xs truncate max-w-[150px]">{rowDecision}</td>
                      <td className="px-4 py-2.5 text-purple-600 dark:text-purple-400 text-xs truncate max-w-[150px] font-bold">{strength}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="mt-4 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-slate-300 dark:border-slate-800 pt-4 px-4 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/80 relative overflow-hidden rounded-b-xl">
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-600 dark:text-cyan-400 transition-colors"><Share2 className="w-4 h-4"/> Knowledge Graph</div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-600 dark:text-cyan-400 transition-colors"><FileText className="w-4 h-4"/> Global Literature</div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-600 dark:text-cyan-400 transition-colors"><Database className="w-4 h-4"/> In-silico Models</div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-emerald-600 dark:text-emerald-400 transition-colors"><ShieldCheck className="w-4 h-4"/> Traceability Verified</div>
        </div>
        <div className="text-slate-500 italic text-[10px] font-mono tracking-wider">
          v1.4.0_alpha // MEVREON-CORE-HTS
        </div>
      </footer>

    </div>
  );
};

export default Dashboard;
