import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Box, Eye } from 'lucide-react';

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

  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [isSpinning, setIsSpinning] = useState(true);
  const [representation, setRepresentation] = useState<'cartoon' | 'stick' | 'sphere' | 'surface'>('cartoon');
  const [modelsLoaded, setModelsLoaded] = useState<Record<string, any>>({});

  const targetLower = targetId.toLowerCase();
  const ligandLower = ligandId.toLowerCase();

  useEffect(() => {
    if (viewMode !== '3d' || !viewerRef.current || !window.$3Dmol) return;

    // Initialize viewer
    if (viewerInstance.current) {
      try {
        viewerInstance.current.clear();
      } catch (e) {
        console.warn('Error clearing 3Dmol viewer:', e);
      }
    } else {
      viewerInstance.current = window.$3Dmol.createViewer(viewerRef.current, {
        backgroundColor: '#020617',
        id: `viewer_${targetId}_${ligandId}`
      });
    }

    const viewer = viewerInstance.current;
    viewer.clear();

    const receptorUrl = `/data/prepared/targets/${targetLower}/clean_receptor.pdb`;
    const vinaUrl = `/outputs/${targetLower}/${ligandLower}/vina_pose.pdbqt`;
    const diffdockUrl = `/outputs/${targetLower}/${ligandLower}/diffdock_pose.sdf`;

    const loaded: Record<string, any> = {};

    // 1. Fetch & Load Target Protein Ribbon
    fetch(receptorUrl)
      .then(res => (res.ok ? res.text() : Promise.reject(`Receptor not found`)))
      .then(pdbData => {
        const m = viewer.addModel(pdbData, 'pdb');
        loaded.receptor = m;
        applyStyle(viewer, loaded, representation);
        viewer.render();
      })
      .catch(err => console.warn('Receptor load error:', err));

    // 2. Fetch & Load Vina Pose (Green Sticks)
    fetch(vinaUrl)
      .then(res => (res.ok ? res.text() : Promise.reject(`Vina pose not found`)))
      .then(vinaData => {
        const m = viewer.addModel(vinaData, 'pdbqt');
        loaded.vina = m;
        applyStyle(viewer, loaded, representation);
        viewer.zoomTo({ model: m.getID() });
        viewer.render();
      })
      .catch(err => console.warn('Vina load error:', err));

    // 3. Fetch & Load DiffDock Pose (Purple Sticks)
    fetch(diffdockUrl)
      .then(res => (res.ok ? res.text() : Promise.reject(`DiffDock pose not found`)))
      .then(ddData => {
        const m = viewer.addModel(ddData, 'sdf');
        loaded.diffdock = m;
        applyStyle(viewer, loaded, representation);
        viewer.render();
      })
      .catch(err => console.warn('DiffDock load error:', err))
      .finally(() => {
        setModelsLoaded(loaded);

        // Auto spin if enabled
        if (isSpinning) {
          viewer.spin('y', 0.8);
        }
      });

    // Resize listener
    const handleResize = () => {
      if (viewer) viewer.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [targetId, ligandId, viewMode]);

  // Handle Representation Style Switching
  const applyStyle = (viewer: any, loaded: Record<string, any>, styleType: 'cartoon' | 'stick' | 'sphere' | 'surface') => {
    if (!viewer) return;

    // Receptor styling
    if (loaded.receptor) {
      viewer.setStyle({ model: loaded.receptor.getID() }, {});
      if (styleType === 'cartoon') {
        viewer.setStyle({ model: loaded.receptor.getID() }, { cartoon: { color: 'spectrum', opacity: 0.85 } });
      } else if (styleType === 'stick') {
        viewer.setStyle({ model: loaded.receptor.getID() }, { stick: { colorscheme: 'chainHetatm', radius: 0.12 } });
      } else if (styleType === 'sphere') {
        viewer.setStyle({ model: loaded.receptor.getID() }, { sphere: { colorscheme: 'spectrum', scale: 0.4 } });
      } else if (styleType === 'surface') {
        viewer.setStyle({ model: loaded.receptor.getID() }, { cartoon: { color: 'spectrum', opacity: 0.5 } });
        try {
          viewer.addSurface(window.$3Dmol.SurfaceType.VDW, { opacity: 0.4, color: 'lightblue' }, { model: loaded.receptor.getID() });
        } catch (e) {}
      }
    }

    // Vina Pose (Green Sticks/Spheres)
    if (loaded.vina) {
      if (styleType === 'sphere') {
        viewer.setStyle({ model: loaded.vina.getID() }, { sphere: { colorscheme: 'greenCarbon', scale: 0.8 } });
      } else {
        viewer.setStyle({ model: loaded.vina.getID() }, { stick: { colorscheme: 'greenCarbon', radius: 0.22 } });
      }
    }

    // DiffDock Pose (Purple Sticks/Spheres)
    if (loaded.diffdock) {
      if (styleType === 'sphere') {
        viewer.setStyle({ model: loaded.diffdock.getID() }, { sphere: { colorscheme: 'purpleCarbon', scale: 0.8 } });
      } else {
        viewer.setStyle({ model: loaded.diffdock.getID() }, { stick: { colorscheme: 'purpleCarbon', radius: 0.22 } });
      }
    }

    viewer.render();
  };

  const handleStyleChange = (newStyle: 'cartoon' | 'stick' | 'sphere' | 'surface') => {
    setRepresentation(newStyle);
    if (viewerInstance.current) {
      applyStyle(viewerInstance.current, modelsLoaded, newStyle);
    }
  };

  const toggleSpin = () => {
    const nextSpin = !isSpinning;
    setIsSpinning(nextSpin);
    if (viewerInstance.current) {
      if (nextSpin) {
        viewerInstance.current.spin('y', 0.8);
      } else {
        viewerInstance.current.spin(false);
      }
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg group">
      
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
                // Fallback icon if PubChem fails
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
