import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Box, Circle, Hexagon, Component } from 'lucide-react';

declare global {
  interface Window {
    $3Dmol: any;
  }
}

interface MoleculeViewer3DProps {
  molUrl: string;
  format?: 'sdf' | 'pdbqt' | 'pdb' | 'cif';
}

const MoleculeViewer3D: React.FC<MoleculeViewer3DProps> = ({ molUrl, format = 'sdf' }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const viewerInstance = useRef<any>(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentStyle, setCurrentStyle] = useState<'stick' | 'sphere' | 'cartoon' | 'cross'>('stick');

  useEffect(() => {
    if (!window.$3Dmol) {
      setError("3Dmol.js library not loaded");
      setLoading(false);
      return;
    }

    if (!viewerRef.current) return;

    setLoading(true);
    setError(null);
    setIsSpinning(false);
    setCurrentStyle('stick');

    const getBgColor = () => document.documentElement.classList.contains('dark') ? '#0f172a' : '#f8fafc'; // slate-900 or slate-50

    const viewer = window.$3Dmol.createViewer(viewerRef.current, {
      backgroundColor: getBgColor(),
    });
    viewerInstance.current = viewer;

    // Listen for dark mode toggles to update bg color live
    const observer = new MutationObserver(() => {
      viewer.setBackgroundColor(getBgColor());
      viewer.render();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    fetch(molUrl)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.text();
      })
      .then(data => {
        viewer.addModel(data, format);
        viewer.setStyle({}, { stick: { colorscheme: 'Jmol', radius: 0.15 } });
        viewer.zoomTo();
        viewer.render();
        setLoading(false);
      })
      .catch(e => {
        console.error("Error loading molecule:", e);
        setError("Failed to load 3D structure");
        setLoading(false);
      });

    return () => {
      observer.disconnect();
      if (viewerRef.current) viewerRef.current.innerHTML = '';
      viewerInstance.current = null;
    };
  }, [molUrl, format]);

  // Handle Style Changes
  const updateStyle = (styleType: 'stick' | 'sphere' | 'cartoon' | 'cross') => {
    if (!viewerInstance.current) return;
    setCurrentStyle(styleType);
    
    let styleObj = {};
    if (styleType === 'stick') styleObj = { stick: { colorscheme: 'Jmol', radius: 0.15 } };
    if (styleType === 'sphere') styleObj = { sphere: { colorscheme: 'Jmol' } };
    if (styleType === 'cartoon') styleObj = { cartoon: { color: 'spectrum' }, stick: { radius: 0.1 } };
    if (styleType === 'cross') styleObj = { cross: { linewidth: 2 } };

    viewerInstance.current.setStyle({}, styleObj);
    viewerInstance.current.render();
  };

  // Handle Spin Toggle
  const toggleSpin = () => {
    if (!viewerInstance.current) return;
    const newSpinState = !isSpinning;
    setIsSpinning(newSpinState);
    
    if (newSpinState) {
      viewerInstance.current.spin('y', 1);
    } else {
      viewerInstance.current.spin(false);
    }
  };

  return (
    <div className="w-full h-full relative group">
      
      {/* Loading & Error Overlays */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center text-teal-600 z-10 bg-white/50 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500 z-10 bg-white/80 backdrop-blur-sm text-xs font-mono px-4 text-center">
          {error}
        </div>
      )}

      {/* Control Panel (Shows on hover) */}
      {!loading && !error && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-white/90 p-2 rounded-xl shadow-md border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
          
          <button 
            onClick={toggleSpin}
            title={isSpinning ? "Pause Rotation" : "Play Rotation"}
            className={`p-2 rounded-lg transition-colors ${isSpinning ? 'bg-teal-100 text-teal-600' : 'hover:bg-slate-100 text-slate-500'}`}
          >
            {isSpinning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <div className="w-px h-6 bg-slate-200 mx-1"></div>

          <button 
            onClick={() => updateStyle('stick')}
            title="Stick Mode"
            className={`p-2 rounded-lg transition-colors ${currentStyle === 'stick' ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-slate-100 text-slate-500'}`}
          >
            <Component className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => updateStyle('sphere')}
            title="Sphere / CPK Mode"
            className={`p-2 rounded-lg transition-colors ${currentStyle === 'sphere' ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-slate-100 text-slate-500'}`}
          >
            <Circle className="w-4 h-4" />
          </button>

          <button 
            onClick={() => updateStyle('cartoon')}
            title="Cartoon Mode (Proteins)"
            className={`p-2 rounded-lg transition-colors ${currentStyle === 'cartoon' ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-slate-100 text-slate-500'}`}
          >
            <Box className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => updateStyle('cross')}
            title="Wireframe / Cross Mode"
            className={`p-2 rounded-lg transition-colors ${currentStyle === 'cross' ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-slate-100 text-slate-500'}`}
          >
            <Hexagon className="w-4 h-4" />
          </button>

        </div>
      )}

      {/* 3Dmol Container */}
      <div ref={viewerRef} className="w-full h-full cursor-move" style={{ position: 'relative' }}></div>
    </div>
  );
};

export default MoleculeViewer3D;
