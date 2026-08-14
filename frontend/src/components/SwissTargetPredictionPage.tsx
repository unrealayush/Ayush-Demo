import React, { useState } from 'react';
import { 
  Dna, 
  Search, 
  ArrowLeft, 
  ExternalLink, 
  PieChart as PieIcon, 
  Table, 
  CheckCircle2, 
  ShieldCheck, 
  Activity,
  Layers,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { REAL_SWISSTARGET_DATA, CompoundData } from '../data/realSwissTargetData';

export const SwissTargetPredictionPage: React.FC<{ onBackToLanding: () => void }> = ({ onBackToLanding }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCompound, setActiveCompound] = useState<CompoundData>(REAL_SWISSTARGET_DATA[0]);
  const [activeTab, setActiveTab] = useState<'targets' | 'piechart'>('targets');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredCompounds = REAL_SWISSTARGET_DATA.filter(c => {
    return c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           c.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
           c.topTarget.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBackToLanding}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium border border-slate-700"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Landing
            </button>
            <div className="h-5 w-px bg-slate-800" />
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                <Dna className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  SwissTargetPrediction Explorer
                </h1>
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Homo sapiens (Human Host Target Profiling) — All 24 AYUSH Phytochemicals
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* 24 Compound Quick Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 transition-all"
              >
                <span>Select Compound ({activeCompound.name})</span>
                <ChevronDown className="w-4 h-4 text-cyan-400" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 max-h-96 overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 p-2 custom-scrollbar">
                  {REAL_SWISSTARGET_DATA.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setActiveCompound(c);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                        c.id === activeCompound.id ? 'bg-cyan-950/80 text-cyan-300 font-bold border border-cyan-800/60' : 'text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <span>{c.name}</span>
                      <span className="font-mono text-[10px] text-slate-400">CID: {c.cid}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="https://www.swisstargetprediction.ch" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 px-3 py-1.5 rounded-full transition-colors"
            >
              Official SIB Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Banner Alert */}
        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-blue-800/40 flex items-start gap-4 shadow-lg shadow-blue-950/20">
          <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 mt-0.5">
            <Activity className="w-5 h-5" />
          </div>
          <div className="text-sm">
            <h3 className="font-semibold text-blue-200 mb-1 flex items-center gap-2">
              SwissTargetPrediction Model Engine (Homo sapiens Pipeline)
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Predicts human target proteins for bioactive small molecules using reverse screening based on 2D and 3D similarity to 370,000+ known active compounds in ChEMBL. Each compound shows a breakdown of <strong>100 predicted human targets</strong> along with official UniProt IDs, ChEMBL IDs, binding probability scores, and Target Class pie chart distributions.
            </p>
          </div>
        </div>

        {/* Master Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar: 24 Compounds Selector List */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  AYUSH Phytochemicals ({REAL_SWISSTARGET_DATA.length})
                </h2>
              </div>

              {/* Search Bar */}
              <div className="relative mb-3">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input 
                  type="text"
                  placeholder="Search compound, target or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                />
              </div>

              {/* List of Compounds */}
              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
                {filteredCompounds.map((comp) => {
                  const isActive = comp.id === activeCompound.id;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setActiveCompound(comp)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-950/60 to-slate-900 border-cyan-500/60 text-white shadow-md shadow-cyan-950/30' 
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900/50'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="font-semibold text-sm group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                          {comp.name}
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 font-mono">
                            CID: {comp.cid}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          Top Target: <span className="text-emerald-400 font-medium">{comp.topTarget}</span>
                        </p>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Main Panel: SwissTargetPrediction Results Display */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow-xl">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-2xl font-bold text-white tracking-tight">{activeCompound.name}</h2>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/60">
                      {activeCompound.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 max-w-xl truncate mt-2">
                    SMILES: {activeCompound.smiles}
                  </p>
                </div>

                {/* View Switcher Tabs */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
                  <button
                    onClick={() => setActiveTab('targets')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'targets'
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Table className="w-3.5 h-3.5" /> 100 Targets List
                  </button>
                  <button
                    onClick={() => setActiveTab('piechart')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'piechart'
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <PieIcon className="w-3.5 h-3.5" /> Target Classes Pie Chart
                  </button>
                </div>
              </div>

              {/* View 1: Target Classes Breakdown & Pie Chart */}
              {activeTab === 'piechart' ? (
                <div className="py-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                      <PieIcon className="w-4 h-4 text-cyan-400" />
                      Target Classes Distribution (Homo sapiens)
                    </h3>
                    <span className="text-xs text-slate-400">Total Analyzed: 100 targets</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Visual Pie Legend Distribution List */}
                    <div className="space-y-3">
                      {activeCompound.targetClasses.map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-2 text-slate-300 font-medium">
                              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                              {item.label}
                            </span>
                            <span className="font-mono text-slate-400">{item.percentage}% ({item.count})</span>
                          </div>
                          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                            <div 
                              className="h-full rounded-full transition-all duration-500" 
                              style={{ width: `${item.percentage}%`, backgroundColor: item.color }} 
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Donut Summary Card */}
                    <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 flex flex-col items-center justify-center text-center space-y-4">
                      <div className="relative w-36 h-36 rounded-full border-8 border-cyan-500/20 flex items-center justify-center bg-slate-900/60 shadow-inner">
                        <div className="text-center">
                          <span className="text-3xl font-extrabold text-white">{activeCompound.targetClasses.length}</span>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Target Classes</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 max-w-xs">
                        Reflects top predicted protein families in human host cells. High concentration in <strong>{activeCompound.targetClasses[0]?.label}</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* View 2: Detailed Targets Table */
                <div className="py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                      <Table className="w-4 h-4 text-emerald-400" />
                      Predicted Human Gene Targets (Homo sapiens)
                    </h3>
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> High Confidence Predictions
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider font-semibold border-b border-slate-800">
                        <tr>
                          <th className="py-3 px-4">Target Name</th>
                          <th className="py-3 px-3">Gene</th>
                          <th className="py-3 px-3">UniProt</th>
                          <th className="py-3 px-3">ChEMBL ID</th>
                          <th className="py-3 px-3">Target Class</th>
                          <th className="py-3 px-4">Probability</th>
                          <th className="py-3 px-3">Actives (3D/2D)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 font-mono">
                        {activeCompound.targets.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                            <td className="py-3 px-4 font-sans font-medium text-white">{row.target}</td>
                            <td className="py-3 px-3 text-cyan-400 font-bold">{row.commonName}</td>
                            <td className="py-3 px-3">
                              <a 
                                href={`https://www.uniprot.org/uniprotkb/${row.uniprotId}`} 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-blue-400 hover:underline flex items-center gap-1"
                              >
                                {row.uniprotId} <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </td>
                            <td className="py-3 px-3">
                              <a 
                                href={`https://www.ebi.ac.uk/chembl/target_report_card/${row.chemblId}`} 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-emerald-400 hover:underline flex items-center gap-1"
                              >
                                {row.chemblId} <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </td>
                            <td className="py-3 px-3 font-sans text-slate-300">
                              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px]">
                                {row.targetClass}
                              </span>
                            </td>
                            <td className="py-3 px-4 font-sans">
                              <div className="flex items-center gap-2">
                                <div className="w-16 h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                  <div 
                                    className="h-full bg-emerald-500 rounded-full" 
                                    style={{ width: `${row.probability * 100}%` }} 
                                  />
                                </div>
                                <span className="text-[11px] font-mono text-emerald-400">{row.probability.toFixed(2)}</span>
                              </div>
                            </td>
                            <td className="py-3 px-3 text-slate-400 text-[11px]">{row.knownActives}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
