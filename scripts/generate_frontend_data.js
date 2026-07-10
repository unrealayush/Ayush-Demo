const fs = require('fs');
const path = require('path');
const readline = require('readline');

const OUTPUTS_DIR = path.join(__dirname, '../frontend/dist/outputs');
const FRONTEND_DATA_DIR = path.join(__dirname, '../frontend/src/data');
const FRONTEND_PUBLIC_MOL_DIR = path.join(__dirname, '../frontend/public/molecules');

// Ensure directories exist
if (!fs.existsSync(FRONTEND_DATA_DIR)) fs.mkdirSync(FRONTEND_DATA_DIR, { recursive: true });
if (!fs.existsSync(FRONTEND_PUBLIC_MOL_DIR)) fs.mkdirSync(FRONTEND_PUBLIC_MOL_DIR, { recursive: true });

const targets = ['lasr', 'pqsr', 'mexb', 'peld'];

const organisms = [
  {
    id: 'paeruginosa',
    name: 'Pseudomonas aeruginosa',
    description: 'Gram-negative opportunistic pathogen known for multidrug resistance and biofilm formation.',
    targets: targets
  },
  {
    id: 'saureus',
    name: 'Staphylococcus aureus',
    description: 'Gram-positive pathogen responsible for severe skin, soft tissue, and systemic infections.',
    targets: targets
  },
  {
    id: 'kpneumoniae',
    name: 'Klebsiella pneumoniae',
    description: 'Gram-negative bacterium often causing healthcare-associated infections and pneumonia.',
    targets: targets
  }
];

function parseCSVLine(line) {
  const values = [];
  let currentVal = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"' && line[i+1] === '"') {
      currentVal += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(currentVal);
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  values.push(currentVal);
  return values;
}

async function parseLeaderboard(target) {
  const csvPath1 = path.join(OUTPUTS_DIR, `${target}_screening_leaderboard.csv`);
  const csvPath2 = path.join(OUTPUTS_DIR, target, 'screening_leaderboard.csv');
  
  let csvPath = fs.existsSync(csvPath1) ? csvPath1 : (fs.existsSync(csvPath2) ? csvPath2 : null);
  
  if (!csvPath) return [];

  const fileStream = fs.createReadStream(csvPath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let isHeader = true;
  let headers = [];
  const ligands = [];

  for await (const line of rl) {
    if (!line.trim()) continue;
    
    if (isHeader) { 
      headers = parseCSVLine(line).map(h => h.trim());
      isHeader = false; 
      continue; 
    }

    const cols = parseCSVLine(line);
    
    const getCol = (namePatterns) => {
      for (const pattern of namePatterns) {
        const idx = headers.findIndex(h => h.toLowerCase().includes(pattern.toLowerCase()));
        if (idx !== -1) return cols[idx];
      }
      return null;
    };

    const rank = parseInt(getCol(['rank']), 10);
    const compoundName = getCol(['compound name']);
    const vina = parseFloat(getCol(['vina affinity']));
    const diffdock = parseFloat(getCol(['diffdock confidence']));
    const hBonds = getCol(['hydrogen bonds']) ? parseInt(getCol(['hydrogen bonds']), 10) : null;
    const hydrophobic = getCol(['hydrophobic contacts']) ? parseInt(getCol(['hydrophobic contacts']), 10) : null;
    const priority = parseFloat(getCol(['validation priority', 'priority score']));
    const decision = getCol(['preclinical decision']);
    const evidence = getCol(['evidence strength']);
    
    const folderName = compoundName.toLowerCase().replace(/\s+/g, '_');
    
    // Check for 3D files and JSON files
    let has3D = false;
    let sdfFile = null;
    let pdbqtFile = null;
    let executive_summary = null;
    let next_validation_steps = null;
    
    const targetDir = path.join(OUTPUTS_DIR, target, folderName);
    
    if (fs.existsSync(targetDir)) {
      const sdfPath = path.join(targetDir, 'diffdock_pose.sdf');
      const pdbqtPath = path.join(targetDir, 'vina_pose.pdbqt');
      const passportPath = path.join(targetDir, 'evidence_passport.json');
      
      if (fs.existsSync(sdfPath)) {
        has3D = true;
        sdfFile = `${target}_${folderName}_diffdock.sdf`;
        fs.copyFileSync(sdfPath, path.join(FRONTEND_PUBLIC_MOL_DIR, sdfFile));
      } 
      if (fs.existsSync(pdbqtPath)) {
        has3D = true;
        pdbqtFile = `${target}_${folderName}_vina.pdbqt`;
        fs.copyFileSync(pdbqtPath, path.join(FRONTEND_PUBLIC_MOL_DIR, pdbqtFile));
      }

      // Parse JSON for text outputs
      if (fs.existsSync(passportPath)) {
        try {
          const passportData = JSON.parse(fs.readFileSync(passportPath, 'utf8'));
          executive_summary = passportData.executive_summary || null;
          next_validation_steps = passportData.next_validation_steps || null;
        } catch (e) {
          console.error(`Error parsing passport for ${folderName}:`, e.message);
        }
      }
    }

    ligands.push({
      id: folderName,
      rank: rank,
      name: compoundName,
      folderName: folderName,
      vina_affinity: vina,
      diffdock_confidence: diffdock,
      h_bonds: hBonds,
      hydrophobic_contacts: hydrophobic,
      priority_score: priority,
      decision: decision,
      evidence_strength: evidence,
      executive_summary: executive_summary,
      next_validation_steps: next_validation_steps,
      has3D: has3D,
      sdfFile: sdfFile,
      pdbqtFile: pdbqtFile
    });
  }
  
  // Return all ligands
  return ligands;
}

async function buildData() {
  const database = {
    organisms: organisms,
    targetsData: {}
  };

  for (const target of targets) {
    console.log(`Parsing data for target: ${target}`);
    const allLigands = await parseLeaderboard(target);
    database.targetsData[target] = {
      id: target,
      name: target.charAt(0).toUpperCase() + target.slice(1),
      all_ligands: allLigands,
      top_ligands: allLigands.slice(0, 5) // Still keep top 5 for quick matrix
    };
  }

  const outputPath = path.join(FRONTEND_DATA_DIR, 'database.json');
  fs.writeFileSync(outputPath, JSON.stringify(database, null, 2));
  console.log(`Data successfully written to ${outputPath}`);
}

buildData().catch(console.error);
