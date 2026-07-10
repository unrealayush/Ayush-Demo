import React, { useRef, useEffect } from 'react';

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

  useEffect(() => {
    if (!viewerRef.current || !window.$3Dmol) return;

    // Clear previous viewer if it exists
    if (viewerInstance.current) {
      try {
        viewerInstance.current.clear();
      } catch (e) {
        console.warn('Error clearing 3Dmol viewer:', e);
      }
    } else {
      // Create new 3Dmol viewer
      viewerInstance.current = window.$3Dmol.createViewer(viewerRef.current, {
        backgroundColor: '#020617', // match Tailwind bg-slate-50 dark:bg-slate-950
        id: `viewer_${targetId}_${ligandId}`
      });
    }

    const viewer = viewerInstance.current;
    viewer.clear();

    const targetLower = targetId.toLowerCase();
    const ligandLower = ligandId.toLowerCase();

    // Map paths to public asset directories
    const receptorUrl = `/data/prepared/targets/${targetLower}/clean_receptor.pdb`;
    const vinaUrl = `/outputs/${targetLower}/${ligandLower}/vina_pose.pdbqt`;
    const diffdockUrl = `/outputs/${targetLower}/${ligandLower}/diffdock_pose.sdf`;

    // 1. Fetch & Load Target Protein Ribbon
    fetch(receptorUrl)
      .then(res => {
        if (!res.ok) throw new Error(`Receptor file not found at ${receptorUrl}`);
        return res.text();
      })
      .then(pdbData => {
        const m = viewer.addModel(pdbData, 'pdb');
        viewer.setStyle({ model: m.getID() }, { cartoon: { color: 'spectrum', opacity: 0.85 } });
        viewer.render();
      })
      .catch(err => console.error('Error loading receptor structure:', err));

    // 2. Fetch & Load Vina Pose (Green Sticks)
    fetch(vinaUrl)
      .then(res => {
        if (!res.ok) throw new Error(`Vina file not found at ${vinaUrl}`);
        return res.text();
      })
      .then(vinaData => {
        const m = viewer.addModel(vinaData, 'pdbqt');
        viewer.setStyle({ model: m.getID() }, { stick: { colorscheme: 'greenCarbon', radius: 0.18 } });
        viewer.zoomTo({ model: m.getID() });
        viewer.render();
      })
      .catch(err => console.error('Error loading Vina pose structure:', err));

    // 3. Fetch & Load DiffDock Pose (Purple Sticks)
    fetch(diffdockUrl)
      .then(res => {
        if (!res.ok) throw new Error(`DiffDock file not found at ${diffdockUrl}`);
        return res.text();
      })
      .then(ddData => {
        const m = viewer.addModel(ddData, 'sdf');
        viewer.setStyle({ model: m.getID() }, { stick: { colorscheme: 'purpleCarbon', radius: 0.18 } });
        viewer.render();
      })
      .catch(err => console.error('Error loading DiffDock pose structure:', err));

    // Handle responsiveness
    const handleResize = () => {
      if (viewer) viewer.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [targetId, ligandId]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg">
      <div ref={viewerRef} className="w-full h-full" />
      {/* 3D Visualizer Color Code Legend */}
      <div className="absolute bottom-2 left-2 flex items-center gap-3 bg-slate-50 dark:bg-slate-950/90 border border-slate-300 dark:border-slate-800 rounded px-2.5 py-1 text-[8px] text-slate-700 dark:text-slate-300 font-bold select-none shadow-lg font-mono z-10 backdrop-blur-sm">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-sky-500 rounded-full shadow-[0_0_5px_rgba(14,165,233,0.8)]" />
          <span>Receptor Ribbon</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
          <span>Vina (Green)</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_5px_rgba(168,85,247,0.8)]" />
          <span>DiffDock (Purple)</span>
        </div>
      </div>
    </div>
  );
};
