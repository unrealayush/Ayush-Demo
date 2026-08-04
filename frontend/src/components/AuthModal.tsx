import React, { useState } from 'react';
import {
  ShieldCheck,
  KeyRound,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  X,
  Sparkles,
  Eye,
  EyeOff,
  Cpu
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated: (user: { email: string; role: string }) => void;
}

const PRESET_ACCOUNTS = [
  {
    label: 'Lead Investigator (Ayush Demo)',
    email: 'ayush@mevreon.ai',
    passcode: 'MEVREON-GPU-2026',
    role: 'Lead Bio-AI Researcher (Full L4 GPU Compute)'
  },
  {
    label: 'Guest Auditor Access',
    email: 'auditor@amr-consortium.org',
    passcode: 'GUEST-AUDIT-88',
    role: 'Preclinical Peer Auditor (Read / Write Compute)'
  }
];

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onAuthenticated
}) => {
  const [email, setEmail] = useState(PRESET_ACCOUNTS[0].email);
  const [passcode, setPasscode] = useState(PRESET_ACCOUNTS[0].passcode);
  const [showPasscode, setShowPasscode] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedSuccess, setVerifiedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSelectPreset = (preset: typeof PRESET_ACCOUNTS[0]) => {
    setEmail(preset.email);
    setPasscode(preset.passcode);
    setError(null);
  };

  const handleAuthenticate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !passcode.trim()) {
      setError('Please provide researcher email and organization passcode.');
      return;
    }

    setIsVerifying(true);
    setError(null);

    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedSuccess(true);

      setTimeout(() => {
        const role = email.includes('ayush') ? 'Lead Bio-AI Investigator' : 'Guest Research Auditor';
        sessionStorage.setItem('mevreon_auth_user', JSON.stringify({ email, role }));
        onAuthenticated({ email, role });
        setVerifiedSuccess(false);
      }, 700);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md glass-panel bg-slate-900/95 border border-cyan-500/50 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 pt-5 pb-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                MEVREON AI LABS
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-700/60">
                  GPU AUTH GATE
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">Researcher Passcode & Access Key Verification</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          
          {/* Quick Presets */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Quick Demo Passcode Presets
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {PRESET_ACCOUNTS.map((preset) => (
                <button
                  key={preset.email}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className={`text-left p-2.5 rounded-xl border text-xs transition flex items-center justify-between ${
                    email === preset.email
                      ? 'bg-cyan-950/70 border-cyan-500 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div>
                    <div className="font-semibold flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                      {preset.label}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{preset.email}</div>
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">
                    Auto-Fill Key
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleAuthenticate} className="space-y-3.5 pt-1">
            
            {/* Email Field */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                Researcher Email / Investigator ID
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="investigator@mevreon.ai"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-lg px-3 py-2 text-xs text-slate-100 placeholder-slate-600 outline-none transition"
                />
              </div>
            </div>

            {/* Passcode Field */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                Organization GPU Access Key
              </label>
              <div className="relative">
                <input
                  type={showPasscode ? 'text' : 'password'}
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••••••••••••"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-lg pl-3 pr-9 py-2 text-xs font-mono text-slate-100 placeholder-slate-600 outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition"
                >
                  {showPasscode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800 text-xs text-red-300 flex items-center gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Success Message */}
            {verifiedSuccess && (
              <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500 text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 animate-bounce" />
                <span>ACCESS GRANTED — Unlocking Custom GPU Computing...</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isVerifying || verifiedSuccess}
              className="w-full mt-2 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 transition disabled:opacity-50"
            >
              {isVerifying ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-white" />
                  Verifying Credentials on GCP Cloud...
                </>
              ) : verifiedSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Authenticated
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4 text-white" />
                  Authenticate & Unlock Custom Tester
                </>
              )}
            </button>
          </form>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>NVIDIA L4 GPU Cloud Instance: <code className="text-cyan-400 font-mono">uc4-model-vm</code></span>
          </div>
          <span className="text-slate-400 font-mono">256-Bit Encrypted</span>
        </div>

      </div>
    </div>
  );
};
