import {
  Database,
  Sparkles,
  ArrowRight,
  FlaskConical,
  Dna,
  ExternalLink,
  FileText,
  ChevronRight,
  Cpu,
  Microscope,
  Award
} from 'lucide-react';

interface LandingPageProps {
  onSelectOrganism: (organismId: string, targetId?: string) => void;
  onOpenCustomTester: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onSelectOrganism,
  onOpenCustomTester
}) => {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 font-sans select-none antialiased relative overflow-hidden">
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full filter blur-[150px] pointer-events-none" />

      {/* ── Top Hero Header ── */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <span className="text-cyan-400 font-bold text-xl">🧬</span>
          </div>
          <div>
            <h1 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 tracking-tight">
              AYUSH Bio-AI Platform
            </h1>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
              In-Silico Mechanism Validation for Traditional Phytochemicals
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          <button
            onClick={onOpenCustomTester}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-semibold transition hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <FlaskConical className="w-4 h-4 text-cyan-400" />
            <span>Test Custom Compound</span>
          </button>

          <button
            onClick={() => onSelectOrganism('pseudomonas')}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold transition hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <span>Launch Screening Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ── Main Hero Container ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Mechanism-Linked Preclinical Evidence Pipeline (288 Pre-loaded Docked Pairs)</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-100 tracking-tight leading-tight max-w-5xl mx-auto mb-6">
          Validating Traditional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">AYUSH Phytochemicals</span> Against Critical AMR Pathogens
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
          An integrated computational framework combining structural bio-AI, AutoDock Vina physics, DiffDock-L generative pose confidence, and 2D/3D interaction fingerprinting to discover novel plant-derived anti-infective leads.
        </p>

        {/* Quick Launch Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 font-mono">
          <button
            onClick={() => onSelectOrganism('pseudomonas', 'PqsR')}
            className="px-6 py-3.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-300 font-bold text-sm flex items-center gap-2.5 transition hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <span>Explore P. aeruginosa Screening</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onSelectOrganism('staphylococcus', 'AgrA')}
            className="px-6 py-3.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/50 text-rose-300 font-bold text-sm flex items-center gap-2.5 transition hover:scale-105 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
          >
            <span>Explore S. aureus Screening</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onSelectOrganism('klebsiella', 'AcrB')}
            className="px-6 py-3.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-300 font-bold text-sm flex items-center gap-2.5 transition hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            <span>Explore K. pneumoniae Screening</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Live Metrics Grid Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col items-center p-3 border-r border-slate-800/60">
            <span className="text-3xl font-black text-cyan-400 font-mono">288</span>
            <span className="text-xs text-slate-400 font-medium mt-1">Pre-computed Docked Pairs</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase mt-0.5">0ms Instant Load</span>
          </div>

          <div className="flex flex-col items-center p-3 border-r border-slate-800/60">
            <span className="text-3xl font-black text-emerald-400 font-mono">12</span>
            <span className="text-xs text-slate-400 font-medium mt-1">Virulence & AMR Targets</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase mt-0.5">PDB & AlphaFold</span>
          </div>

          <div className="flex flex-col items-center p-3 border-r border-slate-800/60">
            <span className="text-3xl font-black text-purple-400 font-mono">24</span>
            <span className="text-xs text-slate-400 font-medium mt-1">AYUSH Phytochemicals</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase mt-0.5">Verified PubChem CIDs</span>
          </div>

          <div className="flex flex-col items-center p-3">
            <span className="text-3xl font-black text-rose-400 font-mono">3</span>
            <span className="text-xs text-slate-400 font-medium mt-1">WHO Priority Pathogens</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase mt-0.5">Clinical Isolates</span>
          </div>
        </div>
      </section>

      {/* ── Pathogen Organisms Section (The 3 Pathogens) ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/60">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase mb-2">
            Target Pathogen Spectrum
          </h2>
          <h3 className="text-3xl font-bold text-slate-100">
            Select a Pathogen to Launch Target Screening
          </h3>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Each organism features 4 curated molecular target vectors representing quorum sensing, adhesion, efflux pumps, and cell wall biosynthesis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Organism 1: Pseudomonas aeruginosa */}
          <div
            onClick={() => onSelectOrganism('pseudomonas')}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-emerald-500/30 hover:border-emerald-400 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-2xl">
                  🦠
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold">
                  Gram-Negative
                </span>
              </div>

              <h4 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors font-serif italic mb-1">
                Pseudomonas aeruginosa
              </h4>
              <p className="text-xs font-mono text-emerald-400 mb-3 font-semibold">
                Shortform: (P. aeruginosa) | Reference Strain: PAO1
              </p>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Critical opportunistic pathogen causing severe burn, lung, and biofilm-associated hospital infections. Controlled via quorum sensing and efflux pumps.
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                  Active Molecular Targets (4):
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-emerald-400">LasR</span> (QS Receptor)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-emerald-400">PqsR</span> (MvfR QS)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-emerald-400">PelD</span> (Biofilm EPS)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-emerald-400">MexB</span> (Efflux Pump)
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-2.5 rounded-xl bg-emerald-500/20 group-hover:bg-emerald-500 text-emerald-300 group-hover:text-slate-950 font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all">
              <span>Open P. aeruginosa Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Organism 2: Staphylococcus aureus */}
          <div
            onClick={() => onSelectOrganism('staphylococcus')}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-rose-500/30 hover:border-rose-400 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-2xl">
                  🧫
                </div>
                <span className="px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-[10px] font-bold">
                  Gram-Positive
                </span>
              </div>

              <h4 className="text-xl font-bold text-slate-100 group-hover:text-rose-300 transition-colors font-serif italic mb-1">
                Staphylococcus aureus
              </h4>
              <p className="text-xs font-mono text-rose-400 mb-3 font-semibold">
                Shortform: (S. aureus) | Strains: NCTC 8325 / MRSA USA300
              </p>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Virulent pathogen responsible for skin, blood, and medical device infections. Resistant strains (MRSA) target transpeptidases and quorum sensing.
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                  Active Molecular Targets (4):
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-rose-400">AgrA</span> (Agr QS)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-rose-400">Sortase A</span> (Adhesion)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-rose-400">PBP2a</span> (Methicillin R)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-rose-400">MurJ</span> (Lipid II Flippase)
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-2.5 rounded-xl bg-rose-500/20 group-hover:bg-rose-500 text-rose-300 group-hover:text-slate-950 font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all">
              <span>Open S. aureus Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Organism 3: Klebsiella pneumoniae */}
          <div
            onClick={() => onSelectOrganism('klebsiella')}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/30 hover:border-cyan-400 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl">
                  🧬
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] font-bold">
                  Gram-Negative
                </span>
              </div>

              <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-serif italic mb-1">
                Klebsiella pneumoniae
              </h4>
              <p className="text-xs font-mono text-cyan-400 mb-3 font-semibold">
                Shortform: (K. pneumoniae) | Reference Strain: MGH78578
              </p>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Hypervirulent multi-drug resistant bacillus causing nosocomial pneumonia and urinary infections. Protected by heavy polysaccharide capsule.
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                  Active Molecular Targets (4):
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-cyan-400">MrkH</span> (Type III Fimbriae)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-cyan-400">Wzc</span> (Capsule Kinase)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-cyan-400">AcrB</span> (Efflux Pump)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="font-bold text-cyan-400">OmpK36</span> (Outer Porin)
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-2.5 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500 text-cyan-300 group-hover:text-slate-950 font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all">
              <span>Open K. pneumoniae Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ── Scientific Methodological Pipeline Breakdown ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/60">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-xs font-mono font-bold text-purple-400 tracking-wider uppercase mb-2">
            Rigorous Computational Protocol
          </h2>
          <h3 className="text-3xl font-bold text-slate-100">
            5-Stage Preclinical Validation Pipeline
          </h3>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            From verified 3D protein coordinate structures to standardized forensic evidence passports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono">

          {/* Stage 1 */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center">1</span>
                <Dna className="w-4 h-4 text-cyan-400" />
              </div>
              <h5 className="text-xs font-bold text-slate-200 mb-1">Target Preparation</h5>
              <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                PDB & AlphaFold structural curation, residue protonation, and active pocket grid alignment.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-800 text-[9px] text-cyan-400">
              RCSB PDB / UniProt
            </div>
          </div>

          {/* Stage 2 */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center">2</span>
                <Cpu className="w-4 h-4 text-emerald-400" />
              </div>
              <h5 className="text-xs font-bold text-slate-200 mb-1">Ensemble Docking</h5>
              <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                AutoDock Vina physics ($\Delta G$ energy) + DiffDock-L deep generative pose confidence.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-800 text-[9px] text-emerald-400">
              Vina + DiffDock-L
            </div>
          </div>

          {/* Stage 3 */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 font-bold text-xs flex items-center justify-center">3</span>
                <Microscope className="w-4 h-4 text-purple-400" />
              </div>
              <h5 className="text-xs font-bold text-slate-200 mb-1">Fingerprinting</h5>
              <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                3.5Å H-bond counts, hydrophobic contacts, and active site residue proximity maps.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-800 text-[9px] text-purple-400">
              PLIP Interactivity
            </div>
          </div>

          {/* Stage 4 */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center">4</span>
                <Award className="w-4 h-4 text-amber-400" />
              </div>
              <h5 className="text-xs font-bold text-slate-200 mb-1">Priority Ranking</h5>
              <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                Composite scoring (40% Vina + 35% DiffDock + 25% Fingerprints) to order candidates.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-800 text-[9px] text-amber-400">
              Score: 0.0 - 100.0
            </div>
          </div>

          {/* Stage 5 */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center">5</span>
                <FileText className="w-4 h-4 text-blue-400" />
              </div>
              <h5 className="text-xs font-bold text-slate-200 mb-1">Evidence Passports</h5>
              <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                JSON & Markdown forensic trace dossiers with PubChem CIDs and NCBI protein links.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-800 text-[9px] text-blue-400">
              JSON + MD Audit Trail
            </div>
          </div>

        </div>
      </section>

      {/* ── Phytochemical Library Spotlight ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/60">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase mb-2">
            Curated AYUSH Medicinal Flora
          </h2>
          <h3 className="text-3xl font-bold text-slate-100">
            24 Pure Phytochemical Compounds
          </h3>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Derived from classical Indian botanical sources with verified PubChem Registry entries.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 font-mono text-xs">
          {[
            { name: 'Curcumin', plant: 'Curcuma longa (Turmeric)', cid: '969516' },
            { name: 'Azadirachtin', plant: 'Azadirachta indica (Neem)', cid: '5281303' },
            { name: 'Ursolic Acid', plant: 'Ocimum tenuiflorum (Tulsi)', cid: '64945' },
            { name: 'Costunolide', plant: 'Saussurea costus (Kuth)', cid: '5281437' },
            { name: 'Boeravinone B', plant: 'Boerhavia diffusa (Punarnava)', cid: '5318767' },
            { name: 'Aegeline', plant: 'Aegle marmelos (Bael)', cid: '15558450' },
            { name: 'Baicalein', plant: 'Oroxylum indicum (Shyonaka)', cid: '5281605' },
            { name: 'Conessine', plant: 'Holarrhena antidysenterica', cid: '441072' },
            { name: 'Magnoflorine', plant: 'Tinospora cordifolia (Guduchi)', cid: '73337' },
            { name: 'Eugenol', plant: 'Ocimum tenuiflorum (Tulsi)', cid: '3314' },
            { name: 'Nimbolide', plant: 'Azadirachta indica (Neem)', cid: '100017' },
            { name: 'Chrysin', plant: 'Oroxylum indicum (Shyonaka)', cid: '5281607' }
          ].map((item, idx) => (
            <a
              key={idx}
              href={`https://pubchem.ncbi.nlm.nih.gov/compound/${item.cid}`}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all hover:scale-105 flex flex-col justify-between group"
            >
              <div>
                <span className="font-bold text-slate-200 group-hover:text-cyan-300 transition-colors block text-xs truncate">
                  {item.name}
                </span>
                <span className="text-[9px] text-slate-500 italic block mt-0.5 truncate font-sans">
                  {item.plant}
                </span>
              </div>
              <div className="mt-2 text-[9px] text-cyan-400 font-bold flex items-center justify-between border-t border-slate-800/60 pt-1">
                <span>CID: {item.cid}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-slate-800 bg-slate-950 py-8 px-6 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-200 font-bold">mevreon Bio-AI</span>
            <span>|</span>
            <span>AYUSH AMR Screening Pipeline v1.4.0</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://github.com/unrealayush/Ayush-Demo" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-purple-400 flex items-center gap-1">
              <Database className="w-3 h-3 text-purple-400" />
              GCS Bucket Traceable
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
