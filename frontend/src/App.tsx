import { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { LigandDetail } from './components/LigandDetail';
import { Moon, Sun } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'detail'>('dashboard');
  const [detailTarget, setDetailTarget] = useState('');
  const [detailLigand, setDetailLigand] = useState('');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

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

      {/* Floating Settings / Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50 bg-slate-800 dark:bg-cyan-900 border border-slate-700 dark:border-cyan-500/50"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-400 drop-shadow-[0_0_5px_rgba(99,102,241,0.8)]" />
        )}
      </button>
    </div>
  );
};

export default App;
