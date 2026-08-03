import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, ArrowRight, Microscope, Leaf, Target } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOrganism: (organismId: string) => void;
  onSelectTarget: (targetId: string) => void;
  onSelectLigand: (ligandId: string) => void;
  organisms: { id: string; name: string; shortName: string }[];
  targets: { id: string; label: string; organism: string }[];
  ligands: { id: string; name: string; plant: string }[];
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectOrganism,
  onSelectTarget,
  onSelectLigand,
  organisms,
  targets,
  ligands
}) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Build searchable items
  const allItems = useMemo(() => {
    const items: { type: 'organism' | 'target' | 'ligand'; id: string; label: string; sub: string }[] = [];
    organisms.forEach(o => items.push({ type: 'organism', id: o.id, label: o.name, sub: o.shortName }));
    targets.forEach(t => items.push({ type: 'target', id: t.id, label: t.label, sub: t.organism }));
    ligands.forEach(l => items.push({ type: 'ligand', id: l.id, label: l.name, sub: l.plant }));
    return items;
  }, [organisms, targets, ligands]);

  const filtered = useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 15);
    const q = query.toLowerCase();
    return allItems.filter(
      item => item.label.toLowerCase().includes(q) || item.sub.toLowerCase().includes(q) || item.id.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query, allItems]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleSelect = (item: typeof allItems[0]) => {
    if (item.type === 'organism') onSelectOrganism(item.id);
    else if (item.type === 'target') onSelectTarget(item.id);
    else onSelectLigand(item.id);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault();
      handleSelect(filtered[activeIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  const typeIcon = (type: string) => {
    if (type === 'organism') return <Microscope className="w-3.5 h-3.5 text-rose-400" />;
    if (type === 'target') return <Target className="w-3.5 h-3.5 text-cyan-400" />;
    return <Leaf className="w-3.5 h-3.5 text-emerald-400" />;
  };

  const typeLabel = (type: string) => {
    if (type === 'organism') return 'Pathogen';
    if (type === 'target') return 'Target';
    return 'Compound';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Palette */}
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/60 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800/60">
          <Search className="w-4 h-4 text-slate-500 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search compounds, targets, pathogens..."
            className="flex-1 bg-transparent text-sm text-slate-200 placeholder-slate-600 outline-none font-medium"
          />
          <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded border border-slate-700 bg-slate-800 text-[9px] font-mono text-slate-500">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[320px] overflow-y-auto custom-scrollbar">
          {filtered.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-slate-500">
              No results for "{query}"
            </div>
          ) : (
            <div className="py-1">
              {filtered.map((item, idx) => (
                <button
                  key={`${item.type}-${item.id}`}
                  onClick={() => handleSelect(item)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    idx === activeIndex
                      ? 'bg-teal-500/10 text-teal-300'
                      : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  {typeIcon(item.type)}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold truncate">{item.label}</div>
                    <div className="text-[10px] text-slate-500 truncate">{item.sub}</div>
                  </div>
                  <span className={`text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border shrink-0 ${
                    item.type === 'organism' ? 'border-rose-500/30 text-rose-400' :
                    item.type === 'target' ? 'border-cyan-500/30 text-cyan-400' :
                    'border-emerald-500/30 text-emerald-400'
                  }`}>
                    {typeLabel(item.type)}
                  </span>
                  {idx === activeIndex && <ArrowRight className="w-3 h-3 text-teal-500 shrink-0" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-2 border-t border-slate-800/60 flex items-center gap-4 text-[9px] font-mono text-slate-600">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>Esc Close</span>
        </div>
      </div>
    </div>
  );
};
