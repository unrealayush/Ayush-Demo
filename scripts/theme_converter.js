const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../frontend/src');

const replacements = [
  { regex: /bg-slate-950/g, replace: 'bg-slate-50 dark:bg-slate-950' },
  { regex: /text-slate-100/g, replace: 'text-slate-900 dark:text-slate-100' },
  { regex: /text-slate-200/g, replace: 'text-slate-800 dark:text-slate-200' },
  { regex: /text-slate-300/g, replace: 'text-slate-700 dark:text-slate-300' },
  { regex: /text-slate-400/g, replace: 'text-slate-600 dark:text-slate-400' },
  { regex: /bg-slate-900\/60/g, replace: 'bg-white/80 dark:bg-slate-900/60' },
  { regex: /bg-slate-900\/40/g, replace: 'bg-white/60 dark:bg-slate-900/40' },
  { regex: /bg-slate-900\/50/g, replace: 'bg-white/70 dark:bg-slate-900/50' },
  { regex: /bg-slate-900/g, replace: 'bg-white dark:bg-slate-900' },
  { regex: /bg-slate-800/g, replace: 'bg-slate-100 dark:bg-slate-800' },
  { regex: /border-slate-800/g, replace: 'border-slate-300 dark:border-slate-800' },
  { regex: /border-slate-700/g, replace: 'border-slate-200 dark:border-slate-700' },
  { regex: /border-slate-600/g, replace: 'border-slate-300 dark:border-slate-600' },
  { regex: /bg-cyan-950/g, replace: 'bg-cyan-50 dark:bg-cyan-950' },
  { regex: /bg-cyan-950\/40/g, replace: 'bg-cyan-50/80 dark:bg-cyan-950/40' },
  { regex: /text-cyan-100/g, replace: 'text-cyan-900 dark:text-cyan-100' },
  { regex: /text-cyan-400/g, replace: 'text-cyan-600 dark:text-cyan-400' },
  { regex: /text-cyan-300/g, replace: 'text-cyan-700 dark:text-cyan-300' },
  { regex: /text-blue-400/g, replace: 'text-blue-600 dark:text-blue-400' },
  { regex: /text-emerald-400/g, replace: 'text-emerald-600 dark:text-emerald-400' },
  { regex: /text-emerald-300/g, replace: 'text-emerald-700 dark:text-emerald-300' },
  { regex: /text-purple-400/g, replace: 'text-purple-600 dark:text-purple-400' },
  { regex: /text-rose-400/g, replace: 'text-rose-600 dark:text-rose-400' },
  { regex: /bg-emerald-950/g, replace: 'bg-emerald-50 dark:bg-emerald-950' },
  { regex: /bg-purple-950\/30/g, replace: 'bg-purple-50/50 dark:bg-purple-950/30' },
  { regex: /bg-blue-950/g, replace: 'bg-blue-50 dark:bg-blue-950' },
  { regex: /bg-pink-950/g, replace: 'bg-pink-50 dark:bg-pink-950' },
  // Prevent double replacing if script is run twice
  { regex: /bg-slate-50 dark:bg-slate-50 dark:bg-slate-950/g, replace: 'bg-slate-50 dark:bg-slate-950' },
  { regex: /text-slate-900 dark:text-slate-900 dark:text-slate-100/g, replace: 'text-slate-900 dark:text-slate-100' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      replacements.forEach(r => {
        content = content.replace(r.regex, r.replace);
      });
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Processed ${file}`);
    }
  }
}

processDirectory(srcDir);
