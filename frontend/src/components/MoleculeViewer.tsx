import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Box, Eye, RotateCcw, Sparkles } from 'lucide-react';

interface MoleculeViewerProps {
  targetId: string;
  ligandId: string;
}

declare global {
  interface Window {
    $3Dmol: any;
  }
}

export const MoleculeViewer: React.FC<MoleculeViewerProps> = ({ targetId, ligandId }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const viewerInstance = useRef<any>(null);
  const modelsRef = useRef<Record<string, any>>({});

  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [isSpinning, setIsSpinning] = useState(true);
  const [representation, setRepresentation] = useState<'cartoon' | 'stick' | 'sphere' | 'surface'>('cartoon');
  const [isLoading, setIsLoading] = useState(true);

  const targetLower = targetId.toLowerCase();
  const ligandLower = ligandId.toLowerCase();

  useEffect(() => {
    if (viewMode !== '3d' || !viewerRef.current || !window.$3Dmol) return;

    setIsLoading(true);

    // Clean up previous instance when re-mounting 3D container
    if (viewerInstance.current) {
      try {
        viewerInstance.current.clear();
      } catch (e) {}
      viewerInstance.current = null;
    }

    // Always create fresh 3Dmol viewer instance on container ref
    viewerInstance.current = window.$3Dmol.createViewer(viewerRef.current, {
      backgroundColor: '#020617',
      id: `viewer_${targetId}_${ligandId}_${Date.now()}`
    });

    const viewer = viewerInstance.current;
    viewer.clear();
    try {
      viewer.removeAllSurfaces();
    } catch (e) {}

    const receptorUrl = `/data/prepared/targets/${targetLower}/clean_receptor.pdb`;
    const vinaUrl = `/outputs/${targetLower}/${ligandLower}/vina_pose.pdbqt`;
    const diffdockUrl = `/outputs/${targetLower}/${ligandLower}/diffdock_pose.sdf`;

    const loaded: Record<string, any> = {};

    // 1. Fetch & Load Target Protein Receptor
    const loadReceptor = fetch(receptorUrl)
      .then(res => (res.ok ? res.text() : Promise.reject(`Receptor not found`)))
      .then(pdbData => {
        const m = viewer.addModel(pdbData, 'pdb');
        loaded.receptor = m;
      })
      .catch(err => console.warn('Receptor load error:', err));

    // 2. Fetch & Load Vina Pose (Green Sticks)
    const loadVina = fetch(vinaUrl)
      .then(res => (res.ok ? res.text() : Promise.reject(`Vina pose not found`)))
      .then(vinaData => {
        const m = viewer.addModel(vinaData, 'pdbqt');
        loaded.vina = m;
      })
      .catch(err => console.warn('Vina load error:', err));

    // 3. Fetch & Load DiffDock Pose (Purple Sticks)
    const loadDiffDock = fetch(diffdockUrl)
      .then(res => (res.ok ? res.text() : Promise.reject(`DiffDock pose not found`)))
      .then(ddData => {
        const m = viewer.addModel(ddData, 'sdf');
        loaded.diffdock = m;
      })
      .catch(err => console.warn('DiffDock load error:', err));

    // Wait for all models to load then apply default styling
    Promise.allSettled([loadReceptor, loadVina, loadDiffDock]).then(() => {
      modelsRef.current = loaded;
      applyStyle(viewer, loaded, representation);

      // Focus / Zoom to ligand or receptor
      if (loaded.vina) {
        viewer.zoomTo({ model: loaded.vina.getID() });
      } else if (loaded.receptor) {
        viewer.zoomTo({ model: loaded.receptor.getID() });
      } else {
        viewer.zoomTo();
      }

      viewer.render();
      setIsLoading(false);

      // Auto spin by default
      if (isSpinning) {
        viewer.spin('y', 0.5);
      }
    });

    // Resize listener
    const handleResize = () => {
      if (viewer) viewer.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (viewerInstance.current) {
        try {
          viewerInstance.current.clear();
        } catch (e) {}
        viewerInstance.current = null;
      }
    };
  }, [targetId, ligandId, viewMode]);

  // Apply visual representation style cleanly
  const applyStyle = (
    viewer: any,
    loaded: Record<string, any>,
    styleType: 'cartoon' | 'stick' | 'sphere' | 'surface'
  ) => {
    if (!viewer) return;

    // ─── PHASE 1: FULL WIPE ───
    // Remove ALL surfaces (VDW mesh from surface mode)
    try {
      viewer.removeAllSurfaces();
    } catch (e) {}

    // Clear ALL model styles to empty {} in a single pass
    // This ensures sphere geometry buffers, cartoon ribbons, and stick bonds are all flushed
    const allModels = [loaded.receptor, loaded.vina, loaded.diffdock].filter(Boolean);
    for (const model of allModels) {
      try {
        viewer.setStyle({ model: model.getID() }, {});
      } catch (e) {}
    }

    // Force a render between clear and apply so WebGL flushes stale geometry
    viewer.render();

    // ─── PHASE 2: APPLY NEW STYLES ───

    // Receptor
    if (loaded.receptor) {
      const rid = loaded.receptor.getID();
      if (styleType === 'cartoon') {
        viewer.setStyle({ model: rid }, { cartoon: { color: 'spectrum', opacity: 0.9 } });
      } else if (styleType === 'stick') {
        viewer.setStyle({ model: rid }, { stick: { colorscheme: 'chainHetatm', radius: 0.12 } });
      } else if (styleType === 'sphere') {
        viewer.setStyle({ model: rid }, { sphere: { colorscheme: 'spectrum', scale: 0.3 } });
      } else if (styleType === 'surface') {
        viewer.setStyle({ model: rid }, { cartoon: { color: 'spectrum', opacity: 0.4 } });
        try {
          viewer.addSurface(
            window.$3Dmol.SurfaceType.VDW,
            { opacity: 0.45, color: 'cyan' },
            { model: rid }
          );
        } catch (e) {}
      }
    }

    // Vina Pose (Green)
    if (loaded.vina) {
      const vid = loaded.vina.getID();
      if (styleType === 'sphere') {
        viewer.setStyle({ model: vid }, { sphere: { colorscheme: 'greenCarbon', scale: 0.75 } });
      } else {
        viewer.setStyle({ model: vid }, { stick: { colorscheme: 'greenCarbon', radius: 0.24 } });
      }
    }

    // DiffDock Pose (Purple)
    if (loaded.diffdock) {
      const did = loaded.diffdock.getID();
      if (styleType === 'sphere') {
        viewer.setStyle({ model: did }, { sphere: { colorscheme: 'purpleCarbon', scale: 0.75 } });
      } else {
        viewer.setStyle({ model: did }, { stick: { colorscheme: 'purpleCarbon', radius: 0.24 } });
      }
    }

    // Final render with all new styles applied
    viewer.render();
  };

  const handleStyleChange = (newStyle: 'cartoon' | 'stick' | 'sphere' | 'surface') => {
    setRepresentation(newStyle);
    if (viewerInstance.current) {
      applyStyle(viewerInstance.current, modelsRef.current, newStyle);
    }
  };

  const toggleSpin = () => {
    const nextSpin = !isSpinning;
    setIsSpinning(nextSpin);
    if (viewerInstance.current) {
      if (nextSpin) {
        viewerInstance.current.spin('y', 0.5);
      } else {
        viewerInstance.current.spin(false);
      }
    }
  };

  const handleResetView = () => {
    if (viewerInstance.current) {
      const viewer = viewerInstance.current;
      const loaded = modelsRef.current;
      if (loaded.vina) {
        viewer.zoomTo({ model: loaded.vina.getID() });
      } else if (loaded.receptor) {
        viewer.zoomTo({ model: loaded.receptor.getID() });
      } else {
        viewer.zoomTo();
      }
      viewer.render();
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg group bg-slate-950">
      
      {/* 2D / 3D Mode Toggle Bar */}
      <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/80 rounded-lg p-1 shadow-lg backdrop-blur-md">
        <button
          onClick={() => setViewMode('3d')}
          className={`px-2 py-1 rounded text-[9px] font-mono font-bold flex items-center gap-1 transition ${
            viewMode === '3d'
              ? 'bg-cyan-500 text-white shadow-[0_0_8px_rgba(6,182,212,0.6)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Box className="w-3 h-3" /> 3D WebGL
        </button>
        <button
          onClick={() => setViewMode('2d')}
          className={`px-2 py-1 rounded text-[9px] font-mono font-bold flex items-center gap-1 transition ${
            viewMode === '2d'
              ? 'bg-cyan-500 text-white shadow-[0_0_8px_rgba(6,182,212,0.6)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Eye className="w-3 h-3" /> 2D Structure
        </button>
      </div>

      {viewMode === '3d' ? (
        <>
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm text-cyan-400 font-mono text-xs gap-2">
              <Sparkles className="w-6 h-6 animate-spin" />
              <span className="animate-pulse">Loading 3D Co-Crystal Structures...</span>
            </div>
          )}

          {/* 3Dmol Render Container */}
          <div ref={viewerRef} className="w-full h-full cursor-move" />

          {/* Interactive Floating Controls Toolbar */}
          <div className="absolute top-2 left-2 z-20 flex items-center gap-1 bg-slate-900/90 border border-slate-700/80 rounded-lg p-1 shadow-lg backdrop-blur-md">
            
            {/* Rotation Toggle */}
            <button
              onClick={toggleSpin}
              title={isSpinning ? "Pause Auto-Rotation" : "Start Auto-Rotation"}
              className={`p-1.5 rounded transition flex items-center gap-1 text-[9px] font-mono font-bold ${
                isSpinning ? 'bg-cyan-950 text-cyan-400 border border-cyan-700' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isSpinning ? <Pause className="w-3 h-3 text-cyan-400" /> : <Play className="w-3 h-3" />}
              <span>{isSpinning ? 'Spinning' : 'Spin'}</span>
            </button>

            {/* Reset View Button */}
            <button
              onClick={handleResetView}
              title="Reset Zoom / Re-center Binding Site"
              className="p-1.5 rounded text-slate-400 hover:text-slate-200 transition"
            >
              <RotateCcw className="w-3 h-3" />
            </button>

            <div className="w-px h-4 bg-slate-700 mx-0.5" />

            {/* Representation Buttons */}
            <button
              onClick={() => handleStyleChange('cartoon')}
              title="Cartoon Backbone Mode"
              className={`px-1.5 py-1 rounded text-[9px] font-mono font-bold transition ${
                representation === 'cartoon' ? 'bg-purple-950 text-purple-300 border border-purple-700' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Cartoon
            </button>
            <button
              onClick={() => handleStyleChange('stick')}
              title="Sticks Representation"
              className={`px-1.5 py-1 rounded text-[9px] font-mono font-bold transition ${
                representation === 'stick' ? 'bg-purple-950 text-purple-300 border border-purple-700' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Sticks
            </button>
            <button
              onClick={() => handleStyleChange('sphere')}
              title="Bubbles / Spacefilling CPK Spheres"
              className={`px-1.5 py-1 rounded text-[9px] font-mono font-bold transition ${
                representation === 'sphere' ? 'bg-purple-950 text-purple-300 border border-purple-700' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Bubbles
            </button>
            <button
              onClick={() => handleStyleChange('surface')}
              title="Solvent Surface View"
              className={`px-1.5 py-1 rounded text-[9px] font-mono font-bold transition ${
                representation === 'surface' ? 'bg-purple-950 text-purple-300 border border-purple-700' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Surface
            </button>
          </div>

          {/* 3D Visualizer Color Code Legend */}
          <div className="absolute bottom-2 left-2 flex items-center gap-3 bg-slate-950/90 border border-slate-800 rounded px-2.5 py-1 text-[8px] text-slate-300 font-bold select-none shadow-lg font-mono z-10 backdrop-blur-sm">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full shadow-[0_0_5px_rgba(14,165,233,0.8)]" />
              <span>Receptor Ribbon</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
              <span>Vina Pose</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_5px_rgba(168,85,247,0.8)]" />
              <span>DiffDock Pose</span>
            </div>
          </div>
        </>
      ) : (
        /* 2D Chemical Structure Diagram Mode */
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 p-4 border border-slate-800 rounded-lg">
          <div className="text-center mb-2">
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              2D Chemical Structure Diagram
            </span>
            <h4 className="text-sm font-bold text-slate-100 font-sans">{ligandId.replace('_', ' ').toUpperCase()}</h4>
          </div>

          <div className="w-44 h-44 bg-slate-900 rounded-xl p-3 border border-slate-800 flex items-center justify-center shadow-inner relative overflow-hidden">
            <img
              src={`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${ligandLower}/PNG?image_size=300x300`}
              alt={`${ligandId} 2D Structure`}
              className="max-w-full max-h-full object-contain filter invert contrast-125"
              onError={(e: any) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <p className="text-[9px] text-slate-500 font-mono mt-2">Source: PubChem Chemical Registry</p>
        </div>
      )}

    </div>
  );
};
