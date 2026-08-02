import { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { LigandDetail } from './components/LigandDetail';
import { Moon, Sun, Zap } from 'lucide-react';

export type ThemeMode = 'dark' | 'light' | 'cyber';

const App = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'detail'>('dashboard');
  const [detailTarget, setDetailTarget] = useState('');
  const [detailLigand, setDetailLigand] = useState('');
  const [theme, setTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light', 'cyber');

    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'cyber') {
      root.classList.add('dark', 'cyber');
    } else {
      root.classList.add('light');
    }
  }, [theme]);

  const handleOpenDetail = (targetId: string, ligandId: string) => {
    setDetailTarget(targetId);
    setDetailLigand(ligandId);
    setCurrentView('detail');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  return (
    <div className="w-full min-h-screen relative transition-colors duration-300">
      {currentView === 'dashboard' ? (
        <Dashboard onOpenDetail={handleOpenDetail} />
      ) : (
        <LigandDetail 
          targetId={detailTarget} 
          ligandId={detailLigand} 
          onBack={handleBackToDashboard} 
        />
      )}

      {/* Floating 3-Way Theme Switcher (Dark / Light / Cyber) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 p-1.5 rounded-full shadow-2xl bg-slate-900/90 dark:bg-slate-900/90 border border-slate-700 dark:border-cyan-500/50 backdrop-blur-md">
        
        <button
          onClick={() => setTheme('dark')}
          title="Classic Dark Theme"
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            theme === 'dark'
              ? 'bg-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.8)] scale-110'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Moon className="w-4 h-4" />
        </button>

        <button
          onClick={() => setTheme('light')}
          title="Clean Light Theme"
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            theme === 'light'
              ? 'bg-amber-500 text-white shadow-[0_0_12px_rgba(245,158,11,0.8)] scale-110'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sun className="w-4 h-4" />
        </button>

        <button
          onClick={() => setTheme('cyber')}
          title="Cyberpunk Midnight Theme"
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            theme === 'cyber'
              ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.8)] scale-110'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Zap className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};

export default App;
