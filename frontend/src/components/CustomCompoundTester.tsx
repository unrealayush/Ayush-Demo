import React, { useState, useRef, useEffect } from 'react';
import {
  FlaskConical,
  Play,
  Upload,
  CheckCircle2,
  Terminal,
  X,
  Sparkles,
  Cpu,
  AlertCircle,
  RotateCcw
} from 'lucide-react';
import axios from 'axios';

interface CustomCompoundTesterProps {
  isOpen: boolean;
  onClose: () => void;
  onRunSuccess: (customData: {
    targetId: string;
    compoundId: string;
    compoundName: string;
    vinaAffinity: number;
    diffdockConfidence: number;
    priorityScore: number;
  }) => void;
  availableTargets: Array<{ id: string; label: string }>;
}

const PRESET_COMPOUNDS = [
  {
    name: 'Andrographolide (Kalmegh Lead)',
    smiles: 'CC12CCC(C(C1CCC(=C)C2C=C3C(=O)OCC3O)C)(C)CO',
    tag: 'Andrographolide (Kalmegh)'
  },
  {
    name: 'Piperine (Pippali Lead)',
    smiles: 'C1CCN(CC1)C(=O)C=CC=CC2=CC3=C(C=C2)OCO3',
    tag: 'Piperine (Pippali)'
  },
  {
    name: 'Plumbagin (Chitraka Lead)',
    smiles: 'CC1=CC(=O)C2=C(C1=O)C=CC=C2O',
    tag: 'Plumbagin (Chitraka)'
  }
];

export const CustomCompoundTester: React.FC<CustomCompoundTesterProps> = ({
  isOpen,
  onClose,
  onRunSuccess,
  availableTargets
}) => {
  const [compoundName, setCompoundName] = useState(PRESET_COMPOUNDS[0].name);
  const [smiles, setSmiles] = useState(PRESET_COMPOUNDS[0].smiles);
  const [targetId, setTargetId] = useState('PqsR');
  const [engine, setEngine] = useState<'combined' | 'vina' | 'diffdock'>('combined');
  const [isDocking, setIsDocking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [runError, setRunError] = useState<string | null>(null);
  const [runId, setRunId] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs to bottom
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  if (!isOpen) return null;

  const handleSelectPreset = (preset: typeof PRESET_COMPOUNDS[0]) => {
    setCompoundName(preset.name);
    setSmiles(preset.smiles);
    setFileName(null);
    setUploadedFile(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setUploadedFile(file);
      // If it's a text-based file, try to extract SMILES
      if (file.name.endsWith('.txt') || file.name.endsWith('.smi')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const text = event.target?.result as string;
          if (text && text.length > 5) {
            setSmiles(text.split('\n')[0].trim());
          }
        };
        reader.readAsText(file);
      }
    }
  };

  const stopPolling = () => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  };

  const pollStatus = () => {
    pollRef.current = setInterval(async () => {
      try {
        const res = await axios.get('/api/run/custom/status');
        const data = res.data;

        setProgress(data.progress || 0);
        setElapsed(data.elapsed || 0);

        if (data.logs && data.logs.length > 0) {
          setLogs(data.logs);
        }

        if (data.status === 'Completed') {
          stopPolling();

          // Fetch final results
          try {
            const resultRes = await axios.get('/api/run/custom/results');
            const result = resultRes.data;

            if (result.status === 'success') {
              setLogs(prev => [
                ...prev,
                `[${new Date().toLocaleTimeString()}] ✅ REAL PIPELINE COMPLETED`,
                `[${new Date().toLocaleTimeString()}] Vina Affinity: ${result.vinaAffinity} kcal/mol`,
                `[${new Date().toLocaleTimeString()}] DiffDock Confidence: ${result.diffdockConfidence}`,
                `[${new Date().toLocaleTimeString()}] Priority Score: ${result.priorityScore}/100`,
                `[${new Date().toLocaleTimeString()}] Files Generated: ${result.filesGenerated}`,
                `[${new Date().toLocaleTimeString()}] Decision: ${result.decision}`
              ]);

              setTimeout(() => {
                setIsDocking(false);
                onRunSuccess({
                  targetId: result.targetId,
                  compoundId: result.compoundId,
                  compoundName: result.compoundName,
                  vinaAffinity: result.vinaAffinity || 0,
                  diffdockConfidence: result.diffdockConfidence || 0,
                  priorityScore: result.priorityScore || 0
                });
                // Reset the custom run state for next run
                axios.post('/api/run/custom/reset').catch(() => {});
                onClose();
              }, 2000);
            } else {
              setRunError('Pipeline completed but could not parse results.');
              setIsDocking(false);
            }
          } catch (err) {
            setRunError('Pipeline completed but failed to fetch results.');
            setIsDocking(false);
          }
        } else if (data.status === 'Failed') {
          stopPolling();
          setRunError(data.error || 'Pipeline execution failed.');
          setIsDocking(false);
          // Reset for next run
          axios.post('/api/run/custom/reset').catch(() => {});
        }
      } catch (err) {
        // Network error during polling — keep trying
        console.warn('Poll error:', err);
      }
    }, 2000); // Poll every 2 seconds
  };

  const handleRunDocking = async () => {
    setIsDocking(true);
    setProgress(0);
    setRunError(null);
    setElapsed(0);
    setLogs([
      `[${new Date().toLocaleTimeString()}] Initializing real pipeline execution...`,
      `[${new Date().toLocaleTimeString()}] Target: ${targetId} | Engine: ${engine.toUpperCase()}`,
      `[${new Date().toLocaleTimeString()}] Compound: "${compoundName}"`
    ]);

    try {
      const cleanCompoundId = compoundName.toLowerCase().replace(/[^a-z0-9]/g, '_');

      // Check if user uploaded SDF/PDBQT files
      if (uploadedFile && (uploadedFile.name.endsWith('.sdf') || uploadedFile.name.endsWith('.pdbqt') || uploadedFile.name.endsWith('.pdb'))) {
        // Use multipart upload endpoint
        const formData = new FormData();
        formData.append('target_id', targetId.toLowerCase());
        formData.append('compound_name', compoundName);
        formData.append('compound_id', cleanCompoundId);
        formData.append('engine', engine);
        
        if (smiles) {
          formData.append('smiles', smiles);
        }

        if (uploadedFile.name.endsWith('.sdf')) {
          formData.append('ligand_sdf', uploadedFile);
        } else if (uploadedFile.name.endsWith('.pdbqt')) {
          formData.append('ligand_pdbqt', uploadedFile);
        }

        const res = await axios.post('/api/run/custom-upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        setRunId(res.data.run_id);
        setLogs(prev => [
          ...prev,
          `[${new Date().toLocaleTimeString()}] Pipeline triggered on VM. Run ID: ${res.data.run_id}`,
          `[${new Date().toLocaleTimeString()}] Uploaded file: ${uploadedFile.name}`,
          `[${new Date().toLocaleTimeString()}] Waiting for real-time VM execution logs...`
        ]);
      } else {
        // Use JSON endpoint with SMILES
        const res = await axios.post('/api/run/custom', {
          target_id: targetId.toLowerCase(),
          compound_name: compoundName,
          compound_id: cleanCompoundId,
          smiles: smiles,
          engine: engine
        });
        setRunId(res.data.run_id);
        setLogs(prev => [
          ...prev,
          `[${new Date().toLocaleTimeString()}] Pipeline triggered on VM. Run ID: ${res.data.run_id}`,
          `[${new Date().toLocaleTimeString()}] Waiting for real-time VM execution logs...`
        ]);
      }

      // Start polling for real status updates
      setProgress(5);
      pollStatus();

    } catch (e: any) {
      const errMsg = e?.response?.data?.message || e?.response?.data?.detail || e?.message || 'Unknown error';
      setRunError(`Failed to trigger pipeline: ${errMsg}`);
      setIsDocking(false);
      console.error('Error triggering docking:', e);
    }
  };

  const formatElapsed = (seconds: number) => {
    if (seconds < 60) return `${seconds.toFixed(1)}s`;
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(0);
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl glass-panel bg-slate-900/95 border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)] shrink-0">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                Test Custom Compound
                <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live VM GPU Linked
                </span>
              </h2>
              <p className="text-[11px] text-slate-400">Executes real AutoDock Vina + DiffDock-L models — generates 11 passport output files</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isDocking}
            className="text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          
          {/* Quick Presets */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                1-Click AYUSH Compound Presets
              </label>
              <span className="text-[10px] text-cyan-400 font-mono">Select to test</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRESET_COMPOUNDS.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  disabled={isDocking}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border transition flex items-center gap-1.5 ${
                    compoundName === preset.name
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{preset.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Compound Name */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
              Compound Name / Identifier
            </label>
            <input
              type="text"
              value={compoundName}
              onChange={(e) => setCompoundName(e.target.value)}
              disabled={isDocking}
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-lg px-3 py-2 text-xs text-slate-100 placeholder-slate-600 outline-none transition"
              placeholder="e.g., Withaferin A / Curcumin"
            />
          </div>

          {/* SMILES / File Input */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                Chemical Structure (SMILES or Upload File)
              </label>
              <label className="text-[11px] text-cyan-400 cursor-pointer hover:underline flex items-center gap-1">
                <Upload className="w-3 h-3" />
                Upload .SDF / .PDBQT / .PDB
                <input
                  type="file"
                  accept=".sdf,.pdbqt,.mol2,.pdb,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={isDocking}
                />
              </label>
            </div>
            <textarea
              rows={2}
              value={smiles}
              onChange={(e) => setSmiles(e.target.value)}
              disabled={isDocking}
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-lg px-3 py-1.5 text-xs font-mono text-cyan-300 placeholder-slate-600 outline-none transition resize-none"
              placeholder="Enter SMILES string"
            />
            {fileName && (
              <p className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1 font-mono">
                <CheckCircle2 className="w-3 h-3" /> File loaded: {fileName}
              </p>
            )}
          </div>

          {/* Target Selection & Engine Selection Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                Pathogen Target Protein
              </label>
              <select
                value={targetId}
                onChange={(e) => setTargetId(e.target.value)}
                disabled={isDocking}
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-lg px-2.5 py-2 text-xs font-bold text-slate-200 outline-none transition"
              >
                {availableTargets.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.label} ({t.id})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                Computation Engine
              </label>
              <select
                value={engine}
                onChange={(e) => setEngine(e.target.value as any)}
                disabled={isDocking}
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-lg px-2.5 py-2 text-xs font-bold text-purple-300 outline-none transition"
              >
                <option value="combined">AutoDock Vina + DiffDock-L (Full Pipeline)</option>
                <option value="vina">AutoDock Vina (Thermodynamic ΔG only)</option>
                <option value="diffdock">DiffDock-L (Generative Diffusion Pose)</option>
              </select>
            </div>
          </div>

          {/* Error Display */}
          {runError && (
            <div className="flex items-start gap-2 p-3 bg-red-950/50 border border-red-500/30 rounded-lg text-xs text-red-300">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">Pipeline Error</p>
                <p className="font-mono">{runError}</p>
              </div>
            </div>
          )}

          {/* Live Progress Bar & Console Log Terminal */}
          {isDocking && (
            <div className="space-y-2 bg-slate-950 border border-cyan-900/60 rounded-xl p-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-400">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-spin text-cyan-400" />
                  Executing Real Pipeline on VM GPU...
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">{formatElapsed(elapsed)}</span>
                  <span>{progress}%</span>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Pipeline Stage Indicators */}
              <div className="flex items-center gap-1 mt-1">
                {[
                  { label: 'Prep', threshold: 15 },
                  { label: 'Vina', threshold: 30 },
                  { label: 'DiffDock', threshold: 50 },
                  { label: 'Interactions', threshold: 70 },
                  { label: 'MoA Graph', threshold: 75 },
                  { label: 'Score', threshold: 80 },
                  { label: 'Passport', threshold: 85 },
                ].map((stage) => (
                  <span
                    key={stage.label}
                    className={`px-1.5 py-0.5 rounded text-[8px] font-bold font-mono border ${
                      progress >= stage.threshold
                        ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                        : progress >= stage.threshold - 10
                        ? 'bg-cyan-950 text-cyan-400 border-cyan-800 animate-pulse'
                        : 'bg-slate-900 text-slate-600 border-slate-800'
                    }`}
                  >
                    {progress >= stage.threshold ? '✓' : ''} {stage.label}
                  </span>
                ))}
              </div>

              {/* Terminal Logs */}
              <div className="mt-3 bg-slate-950 rounded-lg p-3 border border-slate-800 max-h-48 overflow-y-auto font-mono text-[11px] space-y-0.5">
                {logs.map((log, index) => (
                  <div key={index} className={`flex items-start gap-1.5 ${
                    log.includes('ERROR') || log.includes('FATAL') || log.includes('❌')
                      ? 'text-red-400'
                      : log.includes('SUCCESS') || log.includes('✅') || log.includes('✓')
                      ? 'text-emerald-400'
                      : log.includes('STAGE') || log.includes('====')
                      ? 'text-cyan-300 font-bold'
                      : log.includes('WARNING')
                      ? 'text-amber-400'
                      : 'text-slate-400'
                  }`}>
                    <Terminal className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{log}</span>
                  </div>
                ))}
                <div ref={logEndRef} />
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>NVIDIA L4 GPU — Real Model Execution</span>
            {runId && (
              <span className="text-cyan-500 font-mono">Run: {runId}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              disabled={isDocking}
              className="px-4 py-2 rounded-lg border border-slate-700 text-xs font-bold text-slate-300 hover:bg-slate-800 transition disabled:opacity-50"
            >
              Cancel
            </button>
            {runError && !isDocking && (
              <button
                onClick={() => { setRunError(null); setLogs([]); setProgress(0); }}
                className="px-3 py-2 rounded-lg border border-amber-700 text-xs font-bold text-amber-300 hover:bg-amber-950/50 transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retry
              </button>
            )}
            <button
              onClick={handleRunDocking}
              disabled={isDocking || !compoundName.trim() || (!smiles.trim() && !uploadedFile)}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-2 transition disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-white" />
              {isDocking ? 'Executing on VM...' : 'Run Real In-Silico Docking'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
