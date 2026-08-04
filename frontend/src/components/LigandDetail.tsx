import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MoleculeViewer } from './MoleculeViewer';
import { MechanismGraph } from './MechanismGraph';
import { ChevronLeft, FileJson, Activity, Download, Database, Fingerprint } from 'lucide-react';

interface LigandDetailProps {
  targetId: string;
  ligandId: string;
  onBack: () => void;
}

const PUBCHEM_CIDS: Record<string, string> = {
  costunolide: "5281437",
  dehydrocostus_lactone: "73174",
  cynaropicrin: "5281773",
  santamarine: "91457",
  conessine: "441072",
  baicalein: "5281605",
  oroxylin_a: "5320315",
  chrysin: "5281607",
  baicalin: "64982",
  magnoflorine: "73337",
  aegeline: "15558450",
  imperatorin: "10212",
  skimmianine: "23475",
  boeravinone_b: "5318767",
  liriodendrin: "3084137",
  nimbolide: "100017",
  nimbin: "102095200",
  azadirachtin: "5281303",
  eugenol: "3314",
  ursolic_acid: "64945",
  rosmarinic_acid: "5281792",
  curcumin: "969516",
  demethoxycurcumin: "5469424",
  bisdemethoxycurcumin: "5315472"
};

const TARGET_NCBI_ACCESSIONS: Record<string, { ncbi: string; uniprot: string }> = {
  LasR: { ncbi: "AAA25874.1", uniprot: "P25084" },
  PqsR: { ncbi: "AAG04392.1", uniprot: "Q9I147" },
  PelD: { ncbi: "NP_250831.1", uniprot: "Q9I4I8" },
  MexB: { ncbi: "NP_252945.1", uniprot: "Q51547" },
  AgrA: { ncbi: "AAA26597.1", uniprot: "P0A0I7" },
  SrtA: { ncbi: "ABD31836.1", uniprot: "Q2FV99" },
  MecA: { ncbi: "NP_374034.1", uniprot: "Q9KX75" },
  MurJ: { ncbi: "NP_371661.1", uniprot: "Q2FZF4" },
  MrkH: { ncbi: "YP_001335038.1", uniprot: "A0A0H3JXK0" },
  Wzc: { ncbi: "YP_001338520.1", uniprot: "Q8ZIN0" },
  AcrB: { ncbi: "YP_001335021.1", uniprot: "Q8ZKQ2" },
  OmpK36: { ncbi: "YP_001334052.1", uniprot: "A6T5Y8" }
};

export const LigandDetail: React.FC<LigandDetailProps> = ({ targetId, ligandId, onBack }) => {
  const cid = PUBCHEM_CIDS[ligandId.toLowerCase()] || ligandId;
  const ncbiAcc = TARGET_NCBI_ACCESSIONS[targetId]?.ncbi || targetId;
  const fetchJson = async (filename: string) => {
    try {
      const res = await axios.get(`/outputs/${targetId.toLowerCase()}/${ligandId.toLowerCase()}/${filename}`);
      return res.data;
    } catch (e) {
      return null;
    }
  };

  const { data: vinaResults } = useQuery({ queryKey: ['vina', targetId, ligandId], queryFn: () => fetchJson('vina_results.json') });
  const { data: diffdockResults } = useQuery({ queryKey: ['diffdock', targetId, ligandId], queryFn: () => fetchJson('diffdock_results.json') });
  const { data: interaction } = useQuery({ queryKey: ['interaction', targetId, ligandId], queryFn: () => fetchJson('interaction_report.json') });
  const { data: score } = useQuery({ queryKey: ['score', targetId, ligandId], queryFn: () => fetchJson('validation_priority_score.json') });
  const { data: passport } = useQuery({ queryKey: ['passport', targetId, ligandId], queryFn: () => fetchJson('evidence_passport.json') });
  const { data: graph } = useQuery({ queryKey: ['graph', targetId, ligandId], queryFn: () => fetchJson('mechanism_graph.json') });

  // Parsing metadata files
  const { data: parserReport } = useQuery({ queryKey: ['parser', targetId, ligandId], queryFn: () => fetchJson('interaction_parser_report.json') });
  const { data: scoreReport } = useQuery({ queryKey: ['scoreReport', targetId, ligandId], queryFn: () => fetchJson('validation_priority_report.json') });
  const { data: graphReport } = useQuery({ queryKey: ['graphReport', targetId, ligandId], queryFn: () => fetchJson('mechanism_graph_report.json') });

  const JsonBlock = ({ title, data }: { title: string, data: any }) => (
    <div className="bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden flex flex-col h-full">
      <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 flex justify-between items-center border-b border-slate-200 dark:border-slate-700">
        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 font-mono tracking-wider">{title}</span>
        <FileJson className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
      </div>
      <div className="p-3 overflow-y-auto flex-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 whitespace-pre-wrap">
        {data ? JSON.stringify(data, null, 2) : 'Loading...'}
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 font-sans antialiased flex flex-col">
      <header className="flex items-center justify-between glass-panel px-6 py-4 rounded-xl mb-4 border border-slate-200 dark:border-slate-700 shadow-lg">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-600">
            <ChevronLeft className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          </button>
          <div>
            <h1 className="text-xl font-black text-white flex items-center gap-2">
              <Fingerprint className="text-cyan-600 dark:text-cyan-400" />
              Forensic Dossier: <span className="text-cyan-600 dark:text-cyan-400 capitalize">{ligandId.replace('_', ' ')}</span> <span className="text-slate-500">→</span> <span className="text-purple-600 dark:text-purple-400">{targetId.toUpperCase()}</span>
            </h1>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-1">
              <button
                onClick={() => window.print()}
                className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 no-print font-bold"
                title="Download / Print PDF Report"
              >
                <Download className="w-3.5 h-3.5" /> Export PDF Report
              </button>
              <span className="text-slate-600">|</span>
              <a
                href={`https://pubchem.ncbi.nlm.nih.gov/compound/${cid}`}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-bold"
              >
                <span>PubChem CID: {cid}</span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href={`https://www.ncbi.nlm.nih.gov/protein/${ncbiAcc}`}
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:underline inline-flex items-center gap-1 font-bold"
              >
                <span>NCBI Protein: {ncbiAcc}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (passport) {
                const blob = new Blob([JSON.stringify(passport, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `Evidence_Passport_${targetId.toUpperCase()}_${ligandId.toUpperCase()}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }
            }}
            className="flex items-center gap-2 px-3 py-1.5 bg-cyan-50 dark:bg-cyan-950 border border-cyan-700 rounded text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-900 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.3)]"
          >
            <Download className="w-4 h-4" /> Export Passport JSON
          </button>
          <div className="pl-3 border-l border-slate-200 dark:border-slate-700/50 flex items-center">
            <img
              src="/MevreonLogo.webp"
              alt="Mevreon Logo"
              className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-4 flex-1">
        {/* Left Col: 3D Visualization */}
        <div className="col-span-12 xl:col-span-5 flex flex-col gap-4">
          <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col h-[500px]">
            <div className="flex items-center justify-between mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> 3D Coordinate Topology</h3>
              <div className="flex gap-2 text-[9px] font-mono text-slate-600 dark:text-slate-400">
                <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">clean_receptor.pdb</span>
                <span className="px-1.5 py-0.5 bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded">vina_pose.pdbqt</span>
                <span className="px-1.5 py-0.5 bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded">diffdock_pose.sdf</span>
              </div>
            </div>
            <div className="flex-1 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-300 dark:border-slate-800 relative overflow-hidden">
              <MoleculeViewer targetId={targetId} ligandId={ligandId} />
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col h-[300px]">
            <div className="flex items-center justify-between mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2"><Database className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Mechanism Cascade</h3>
              <span className="text-[9px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">mechanism_graph.json</span>
            </div>
            <div className="flex-1">
               <MechanismGraph nodes={graph?.nodes} edges={graph?.edges} />
            </div>
          </div>
        </div>

        {/* Right Col: Raw File JSON Grid */}
        <div className="col-span-12 xl:col-span-7 grid grid-cols-2 gap-4 h-[816px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="h-[250px]"><JsonBlock title="vina_results.json" data={vinaResults} /></div>
          <div className="h-[250px]"><JsonBlock title="diffdock_results.json" data={diffdockResults} /></div>
          <div className="h-[250px]"><JsonBlock title="validation_priority_score.json" data={score} /></div>
          <div className="h-[250px]"><JsonBlock title="validation_priority_report.json" data={scoreReport} /></div>
          <div className="h-[250px]"><JsonBlock title="evidence_passport.json" data={passport} /></div>
          <div className="h-[250px]"><JsonBlock title="interaction_report.json" data={interaction} /></div>
          <div className="h-[250px]"><JsonBlock title="interaction_parser_report.json" data={parserReport} /></div>
          <div className="h-[250px]"><JsonBlock title="mechanism_graph_report.json" data={graphReport} /></div>
        </div>
      </div>
    </div>
  );
};
