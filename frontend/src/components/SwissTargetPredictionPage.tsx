import React, { useState, useMemo } from 'react';
import { 
  Dna, 
  Search, 
  ArrowLeft, 
  ExternalLink, 
  PieChart as PieIcon, 
  Table, 
  ShieldCheck, 
  Layers, 
  ChevronRight, 
  ChevronDown, 
  ChevronLeft 
} from 'lucide-react';
import { REAL_SWISSTARGET_DATA, CompoundData } from '../data/realSwissTargetData';

// Exact 24 AYUSH Compounds Filter List
const TARGET_24_IDS = [
  "costunolide", "dehydrocostus_lactone", "cynaropicrin", "santamarine", "conessine",
  "baicalein", "oroxylin_a", "chrysin", "baicalin", "magnoflorine",
  "aegeline", "imperatorin", "skimmianine", "boeravinone_b", "liriodendrin",
  "nimbolide", "nimbin", "azadirachtin", "eugenol", "ursolic_acid",
  "rosmarinic_acid", "curcumin", "demethoxycurcumin", "bisdemethoxycurcumin"
];

export const SwissTargetPredictionPage: React.FC<{ onBackToLanding: () => void }> = ({ onBackToLanding }) => {
  // Filter dataset to strictly the 24 compounds
  const compounds24 = useMemo(() => {
    const list = REAL_SWISSTARGET_DATA.filter(c => TARGET_24_IDS.includes(c.id));
    return list.length > 0 ? list : REAL_SWISSTARGET_DATA.slice(0, 24);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCompound, setActiveCompound] = useState<CompoundData>(compounds24[0]);
  const [activeTab, setActiveTab] = useState<'targets' | 'piechart'>('targets');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Pagination & Display limit (Official SwissTargetPrediction entries selector)
  const [entriesPerPage, setEntriesPerPage] = useState<number>(15);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredCompounds = useMemo(() => {
    return compounds24.filter(c => {
      return c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
             c.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
             c.topTarget.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [compounds24, searchTerm]);

  // Paginated Targets
  const paginatedTargets = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return activeCompound.targets.slice(start, start + entriesPerPage);
  }, [activeCompound, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(activeCompound.targets.length / entriesPerPage);

  const handleSelectCompound = (comp: CompoundData) => {
    setActiveCompound(comp);
    setCurrentPage(1);
    setIsDropdownOpen(false);
  };

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-100 font-sans flex flex-col overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Header Navigation (Fixed Height) */}
      <header className="h-16 shrink-0 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 flex items-center justify-between z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBackToLanding}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium border border-slate-700"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="h-5 w-px bg-slate-800" />
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
              <Dna className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-base font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                SwissTargetPrediction Explorer
              </h1>
              <p className="text-[11px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                Homo sapiens (Human Host Target Profiling) — 24 AYUSH Phytochemicals
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick Dropdown Selector */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 transition-all"
            >
              <span>{activeCompound.name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 max-h-80 overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 p-2 custom-scrollbar">
                {compounds24.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelectCompound(c)}
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
            className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 px-3 py-1.5 rounded-full transition-colors"
          >
            SIB Portal <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* Main Body (Fills remaining height without outer scroll) */}
      <div className="flex-1 flex overflow-hidden p-4 gap-4">
        
        {/* Left Sidebar: 24 Compounds List */}
        <aside className="w-80 shrink-0 bg-slate-900/80 rounded-2xl p-3 border border-slate-800 flex flex-col overflow-hidden shadow-xl">
          <div className="flex items-center justify-between mb-2 px-1">
            <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              AYUSH Compounds ({compounds24.length})
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative mb-2 shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            <input 
              type="text"
              placeholder="Search 24 compounds..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
            />
          </div>

          {/* Scrollable 24 Items List */}
          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
            {filteredCompounds.map((comp) => {
              const isActive = comp.id === activeCompound.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => handleSelectCompound(comp)}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between group ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-950/80 to-slate-900 border-cyan-500/60 text-white shadow-md shadow-cyan-950/30' 
                      : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="space-y-0.5 min-w-0 pr-2">
                    <div className="font-semibold text-xs group-hover:text-cyan-300 transition-colors flex items-center gap-1.5 truncate">
                      <span className="truncate">{comp.name}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 truncate">
                      {comp.category}
                    </p>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'}`} />
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Main Content Panel */}
        <main className="flex-1 bg-slate-900/80 rounded-2xl p-5 border border-slate-800 flex flex-col overflow-hidden shadow-xl">
          
          {/* Header Info Banner */}
          <div className="shrink-0 flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-extrabold text-white tracking-tight">{activeCompound.name}</h2>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                  {activeCompound.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  CID: {activeCompound.cid}
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800/80 max-w-2xl truncate mt-1.5">
                SMILES: {activeCompound.smiles}
              </p>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
              <button
                onClick={() => setActiveTab('targets')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'targets'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Table className="w-3.5 h-3.5" /> 100 Targets List
              </button>
              <button
                onClick={() => setActiveTab('piechart')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <PieIcon className="w-4 h-4 text-cyan-400" />
                  Target Classes Distribution (Homo sapiens)
                </h3>
                <span className="text-xs text-slate-400 font-mono">100 Target Proteins Analyzed</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-2">
                {/* Visual Legend */}
                <div className="space-y-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {activeCompound.targetClasses.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-2 text-slate-300 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                          {item.label}
                        </span>
                        <span className="font-mono text-slate-400 text-[11px]">{item.percentage}% ({item.count})</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                        <div 
                          className="h-full rounded-full transition-all duration-500" 
                          style={{ width: `${item.percentage}%`, backgroundColor: item.color }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Donut Card */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="relative w-32 h-32 rounded-full border-8 border-cyan-500/20 flex items-center justify-center bg-slate-900/60 shadow-inner">
                    <div className="text-center">
                      <span className="text-2xl font-extrabold text-white">{activeCompound.targetClasses.length}</span>
                      <p className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Target Classes</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 max-w-xs">
                    Dominant class: <strong className="text-cyan-400">{activeCompound.targetClasses[0]?.label}</strong> ({activeCompound.targetClasses[0]?.percentage}%)
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* View 2: Paginated Targets Table (Sleek inner scroll only) */
            <div className="flex-1 flex flex-col overflow-hidden pt-3 space-y-2">
              
              {/* Table Controls (Official SwissTargetPrediction entries selector) */}
              <div className="shrink-0 flex items-center justify-between px-1">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>Show</span>
                  <select 
                    value={entriesPerPage}
                    onChange={(e) => {
                      setEntriesPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-xs text-cyan-400 font-semibold focus:outline-none"
                  >
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                  <span>entries</span>
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  Showing {Math.min((currentPage - 1) * entriesPerPage + 1, activeCompound.targets.length)} to {Math.min(currentPage * entriesPerPage, activeCompound.targets.length)} of {activeCompound.targets.length} entries
                </div>
              </div>

              {/* Scrollable Table Area */}
              <div className="flex-1 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950 custom-scrollbar">
                <table className="w-full text-left text-xs text-slate-300 relative">
                  <thead className="sticky top-0 bg-slate-900 z-10 text-slate-400 uppercase text-[10px] tracking-wider font-semibold border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-4">Target Name</th>
                      <th className="py-2.5 px-3">Gene</th>
                      <th className="py-2.5 px-3">UniProt</th>
                      <th className="py-2.5 px-3">ChEMBL ID</th>
                      <th className="py-2.5 px-3">Target Class</th>
                      <th className="py-2.5 px-4">Probability</th>
                      <th className="py-2.5 px-3">Actives (3D/2D)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                    {paginatedTargets.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                        <td className="py-2.5 px-4 font-sans font-medium text-white">{row.target}</td>
                        <td className="py-2.5 px-3 text-cyan-400 font-bold">{row.commonName}</td>
                        <td className="py-2.5 px-3">
                          <a 
                            href={`https://www.uniprot.org/uniprotkb/${row.uniprotId}`} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-blue-400 hover:underline flex items-center gap-1"
                          >
                            {row.uniprotId} <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </td>
                        <td className="py-2.5 px-3">
                          <a 
                            href={`https://www.ebi.ac.uk/chembl/target_report_card/${row.chemblId}`} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-emerald-400 hover:underline flex items-center gap-1"
                          >
                            {row.chemblId} <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </td>
                        <td className="py-2.5 px-3 font-sans text-slate-300">
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px]">
                            {row.targetClass}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 font-sans">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                              <div 
                                className="h-full bg-emerald-500 rounded-full" 
                                style={{ width: `${Math.min(row.probability * 100, 100)}%` }} 
                              />
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400">{row.probability.toFixed(2)}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 text-slate-400 text-[10px]">{row.knownActives}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Pagination Bar */}
              {totalPages > 1 && (
                <div className="shrink-0 flex items-center justify-between pt-1 px-1">
                  <span className="text-xs text-slate-500">Page {currentPage} of {totalPages}</span>
                  <div className="flex items-center gap-1">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      className="p-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                      <button
                        key={pg}
                        onClick={() => setCurrentPage(pg)}
                        className={`w-6 h-6 rounded-lg text-xs font-mono transition-all ${
                          pg === currentPage 
                            ? 'bg-cyan-500 text-slate-950 font-bold' 
                            : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {pg}
                      </button>
                    ))}
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      className="p-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

        </main>
      </div>
    </div>
  );
};
