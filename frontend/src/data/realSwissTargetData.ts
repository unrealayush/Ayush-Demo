/* Auto-generated real SwissTargetPrediction dataset containing 30 real CSV runs */

export interface TargetItem {
  target: string;
  commonName: string;
  uniprotId: string;
  chemblId: string;
  targetClass: string;
  probability: number;
  knownActives: string;
}

export interface CompoundData {
  id: string;
  name: string;
  cid: number;
  smiles: string;
  category: string;
  topTarget: string;
  topTargetUniprot: string;
  targetClasses: { label: string; count: number; percentage: number; color: string }[];
  targets: TargetItem[];
}

export const REAL_SWISSTARGET_DATA: CompoundData[] = [
  {
    "id": "aegeline",
    "name": "Aegeline",
    "cid": 15558450,
    "smiles": "CC(C(=O)NC1=CC=C(C=C1)O)C2=CC=CC=C2",
    "category": "Cinnamamide Alkaloid",
    "topTarget": "NACHT, LRR and PYD domains-containing protein 3 (NLRP3)",
    "topTargetUniprot": "Q96P20",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 22,
        "percentage": 22.0,
        "color": "#3B82F6"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 18,
        "percentage": 18.0,
        "color": "#10B981"
      },
      {
        "label": "Oxidoreductase",
        "count": 12,
        "percentage": 12.0,
        "color": "#F59E0B"
      },
      {
        "label": "Lyase",
        "count": 10,
        "percentage": 10.0,
        "color": "#EF4444"
      },
      {
        "label": "Eraser",
        "count": 7,
        "percentage": 7.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Nuclear receptor",
        "count": 6,
        "percentage": 6.0,
        "color": "#EC4899"
      },
      {
        "label": "Hydrolase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#6366F1"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#14B8A6"
      },
      {
        "label": "Protease",
        "count": 2,
        "percentage": 2.0,
        "color": "#F97316"
      },
      {
        "label": "Electrochemical transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#84CC16"
      },
      {
        "label": "Membrane receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Secreted protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#64748B"
      },
      {
        "label": "Enzyme",
        "count": 1,
        "percentage": 1.0,
        "color": "#3B82F6"
      },
      {
        "label": "Transferase",
        "count": 1,
        "percentage": 1.0,
        "color": "#10B981"
      },
      {
        "label": "Other ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#F59E0B"
      },
      {
        "label": "Transcription factor",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Ligase",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Isomerase",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      }
    ],
    "targets": [
      {
        "target": "NACHT, LRR and PYD domains-containing protein 3",
        "commonName": "NLRP3",
        "uniprotId": "Q96P20",
        "chemblId": "CHEMBL1741208",
        "targetClass": "Unclassified protein",
        "probability": 0.9566,
        "knownActives": "66 /  26"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 1",
        "commonName": "TRPV1",
        "uniprotId": "Q8NER1",
        "chemblId": "CHEMBL4794",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.8973,
        "knownActives": "137 /  278"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.7396,
        "knownActives": "2236 /  170"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.719,
        "knownActives": "395 /  360"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.6623,
        "knownActives": "274 /  213"
      },
      {
        "target": "Histone deacetylase 3",
        "commonName": "HDAC3",
        "uniprotId": "O15379",
        "chemblId": "CHEMBL1829",
        "targetClass": "Eraser",
        "probability": 0.605,
        "knownActives": "90 /  284"
      },
      {
        "target": "Rho-associated protein kinase 2",
        "commonName": "ROCK2",
        "uniprotId": "O75116",
        "chemblId": "CHEMBL2973",
        "targetClass": "Kinase",
        "probability": 0.5698,
        "knownActives": "154 /  447"
      },
      {
        "target": "NADP-dependent malic enzyme, mitochondrial",
        "commonName": "ME3",
        "uniprotId": "Q16798",
        "chemblId": "CHEMBL6182",
        "targetClass": "Oxidoreductase",
        "probability": 0.4908,
        "knownActives": "29 /  21"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.4881,
        "knownActives": "579 /  186"
      },
      {
        "target": "Nuclear receptor ROR-gamma",
        "commonName": "RORC",
        "uniprotId": "P51449",
        "chemblId": "CHEMBL1741186",
        "targetClass": "Nuclear receptor",
        "probability": 0.487,
        "knownActives": "114 /  392"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.4776,
        "knownActives": "555 /  361"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.4524,
        "knownActives": "294 /  137"
      },
      {
        "target": "Sphingolipid delta(4)-desaturase DES1",
        "commonName": "DEGS1",
        "uniprotId": "O15121",
        "chemblId": "CHEMBL2021749",
        "targetClass": "Oxidoreductase",
        "probability": 0.4186,
        "knownActives": "42 /  28"
      },
      {
        "target": "Rho-associated protein kinase 1",
        "commonName": "ROCK1",
        "uniprotId": "Q13464",
        "chemblId": "CHEMBL3231",
        "targetClass": "Kinase",
        "probability": 0.4124,
        "knownActives": "33 /  119"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4104,
        "knownActives": "680 /  735"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.4057,
        "knownActives": "480 /  325"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4045,
        "knownActives": "270 /  501"
      },
      {
        "target": "D(4) dopamine receptor",
        "commonName": "DRD4",
        "uniprotId": "P21917",
        "chemblId": "CHEMBL219",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.39,
        "knownActives": "197 /  390"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.3896,
        "knownActives": "278 /  646"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.3795,
        "knownActives": "617 /  140"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.3656,
        "knownActives": "57 /  9"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.3622,
        "knownActives": "288 /  236"
      },
      {
        "target": "Bifunctional epoxide hydrolase 2",
        "commonName": "EPHX2",
        "uniprotId": "P34913",
        "chemblId": "CHEMBL2409",
        "targetClass": "Protease",
        "probability": 0.3446,
        "knownActives": "41 /  256"
      },
      {
        "target": "Histone deacetylase 8",
        "commonName": "HDAC8",
        "uniprotId": "Q9BY41",
        "chemblId": "CHEMBL3192",
        "targetClass": "Eraser",
        "probability": 0.338,
        "knownActives": "129 /  220"
      },
      {
        "target": "Cyclin-dependent kinase 2",
        "commonName": "CDK2",
        "uniprotId": "P24941",
        "chemblId": "CHEMBL301",
        "targetClass": "Kinase",
        "probability": 0.3167,
        "knownActives": "276 /  92"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.3097,
        "knownActives": "462 /  261"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2889,
        "knownActives": "1732 /  414"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.2875,
        "knownActives": "373 /  236"
      },
      {
        "target": "Cannabinoid receptor 1",
        "commonName": "CNR1",
        "uniprotId": "P21554",
        "chemblId": "CHEMBL218",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2863,
        "knownActives": "428 /  117"
      },
      {
        "target": "NADP-dependent malic enzyme",
        "commonName": "ME1",
        "uniprotId": "P48163",
        "chemblId": "CHEMBL3495",
        "targetClass": "Enzyme",
        "probability": 0.2767,
        "knownActives": "29 /  19"
      },
      {
        "target": "NAD-dependent malic enzyme, mitochondrial",
        "commonName": "ME2",
        "uniprotId": "P23368",
        "chemblId": "CHEMBL5291602",
        "targetClass": "Oxidoreductase",
        "probability": 0.2767,
        "knownActives": "27 /  19"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2601,
        "knownActives": "64 /  305"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.2601,
        "knownActives": "1389 /  111"
      },
      {
        "target": "Hepatocyte growth factor receptor",
        "commonName": "MET",
        "uniprotId": "P08581",
        "chemblId": "CHEMBL3717",
        "targetClass": "Kinase",
        "probability": 0.2582,
        "knownActives": "291 /  91"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2553,
        "knownActives": "1637 /  512"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.2402,
        "knownActives": "52 /  48"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.2402,
        "knownActives": "73 /  92"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 0.2382,
        "knownActives": "37 /  75"
      },
      {
        "target": "Mitogen-activated protein kinase kinase kinase 5",
        "commonName": "MAP3K5",
        "uniprotId": "Q99683",
        "chemblId": "CHEMBL5285",
        "targetClass": "Kinase",
        "probability": 0.2343,
        "knownActives": "13 /  2"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2327,
        "knownActives": "1533 /  420"
      },
      {
        "target": "[Pyruvate dehydrogenase (acetyl-transferring)] kinase isozyme 1, mitochondrial",
        "commonName": "PDK1",
        "uniprotId": "Q15118",
        "chemblId": "CHEMBL4766",
        "targetClass": "Kinase",
        "probability": 0.2273,
        "knownActives": "480 /  70"
      },
      {
        "target": "DNA polymerase theta",
        "commonName": "POLQ",
        "uniprotId": "O75417",
        "chemblId": "CHEMBL6025",
        "targetClass": "Transferase",
        "probability": 0.2195,
        "knownActives": "2 /  22"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.2185,
        "knownActives": "60 /  76"
      },
      {
        "target": "Liver carboxylesterase 1",
        "commonName": "CES1",
        "uniprotId": "P23141",
        "chemblId": "CHEMBL2265",
        "targetClass": "Hydrolase",
        "probability": 0.2169,
        "knownActives": "2 /  37"
      },
      {
        "target": "Prostaglandin E2 receptor EP4 subtype",
        "commonName": "PTGER4",
        "uniprotId": "P35408",
        "chemblId": "CHEMBL1836",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2131,
        "knownActives": "8 /  57"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 8",
        "commonName": "TRPM8",
        "uniprotId": "Q7Z2W7",
        "chemblId": "CHEMBL1075319",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2044,
        "knownActives": "70 /  41"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.1906,
        "knownActives": "25 /  9"
      },
      {
        "target": "Receptor-type tyrosine-protein kinase FLT3",
        "commonName": "FLT3",
        "uniprotId": "P36888",
        "chemblId": "CHEMBL1974",
        "targetClass": "Kinase",
        "probability": 0.1878,
        "knownActives": "197 /  83"
      },
      {
        "target": "Platelet-derived growth factor receptor beta",
        "commonName": "PDGFRB",
        "uniprotId": "P09619",
        "chemblId": "CHEMBL1913",
        "targetClass": "Kinase",
        "probability": 0.1878,
        "knownActives": "470 /  56"
      },
      {
        "target": "Anoctamin-1",
        "commonName": "ANO1",
        "uniprotId": "Q5XXA6",
        "chemblId": "CHEMBL2046267",
        "targetClass": "Other ion channel",
        "probability": 0.186,
        "knownActives": "162 /  202"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.1851,
        "knownActives": "389 /  19"
      },
      {
        "target": "Melatonin receptor type 1B",
        "commonName": "MTNR1B",
        "uniprotId": "P49286",
        "chemblId": "CHEMBL1946",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1828,
        "knownActives": "13 /  301"
      },
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1828,
        "knownActives": "14 /  364"
      },
      {
        "target": "[Pyruvate dehydrogenase (acetyl-transferring)] kinase isozyme 2, mitochondrial",
        "commonName": "PDK2",
        "uniprotId": "Q15119",
        "chemblId": "CHEMBL3861",
        "targetClass": "Kinase",
        "probability": 0.1801,
        "knownActives": "45 /  49"
      },
      {
        "target": "Aldehyde dehydrogenase, mitochondrial",
        "commonName": "ALDH2",
        "uniprotId": "P05091",
        "chemblId": "CHEMBL1935",
        "targetClass": "Oxidoreductase",
        "probability": 0.1754,
        "knownActives": "40 /  13"
      },
      {
        "target": "Gamma-secretase",
        "commonName": "N/A",
        "uniprotId": "Q96BI3&Q9NZ42&Q8WW43&P49768&Q92542&P49810",
        "chemblId": "CHEMBL2094135",
        "targetClass": "Protease",
        "probability": 0.1747,
        "knownActives": "9 /  82"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.1747,
        "knownActives": "247 /  15"
      },
      {
        "target": "5-hydroxytryptamine receptor 6",
        "commonName": "HTR6",
        "uniprotId": "P50406",
        "chemblId": "CHEMBL3371",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1652,
        "knownActives": "93 /  159"
      },
      {
        "target": "Substance-P receptor",
        "commonName": "TACR1",
        "uniprotId": "P25103",
        "chemblId": "CHEMBL249",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.164,
        "knownActives": "37 /  76"
      },
      {
        "target": "Indoleamine 2,3-dioxygenase 1",
        "commonName": "IDO1",
        "uniprotId": "P14902",
        "chemblId": "CHEMBL4685",
        "targetClass": "Oxidoreductase",
        "probability": 0.1573,
        "knownActives": "197 /  178"
      },
      {
        "target": "Voltage-gated inwardly rectifying potassium channel KCNH2",
        "commonName": "KCNH2",
        "uniprotId": "Q12809",
        "chemblId": "CHEMBL240",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.1571,
        "knownActives": "167 /  205"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.1537,
        "knownActives": "102 /  212"
      },
      {
        "target": "Histone deacetylase 4",
        "commonName": "HDAC4",
        "uniprotId": "P56524",
        "chemblId": "CHEMBL3524",
        "targetClass": "Eraser",
        "probability": 0.1537,
        "knownActives": "22 /  25"
      },
      {
        "target": "Proto-oncogene tyrosine-protein kinase receptor Ret",
        "commonName": "RET",
        "uniprotId": "P07949",
        "chemblId": "CHEMBL2041",
        "targetClass": "Kinase",
        "probability": 0.1513,
        "knownActives": "140 /  44"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 0.1512,
        "knownActives": "19 /  18"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.1512,
        "knownActives": "29 /  40"
      },
      {
        "target": "Microtubule-associated protein tau",
        "commonName": "MAPT",
        "uniprotId": "P10636",
        "chemblId": "CHEMBL1293224",
        "targetClass": "Other cytosolic protein",
        "probability": 0.1489,
        "knownActives": "50 /  43"
      },
      {
        "target": "Acetyl-CoA carboxylase 2",
        "commonName": "ACACB",
        "uniprotId": "O00763",
        "chemblId": "CHEMBL4829",
        "targetClass": "Ligase",
        "probability": 0.1466,
        "knownActives": "2 /  603"
      },
      {
        "target": "Thyroid hormone receptor beta",
        "commonName": "THRB",
        "uniprotId": "P10828",
        "chemblId": "CHEMBL1947",
        "targetClass": "Nuclear receptor",
        "probability": 0.1462,
        "knownActives": "260 /  65"
      },
      {
        "target": "[Pyruvate dehydrogenase (acetyl-transferring)] kinase isozyme 3, mitochondrial",
        "commonName": "PDK3",
        "uniprotId": "Q15120",
        "chemblId": "CHEMBL3893",
        "targetClass": "Kinase",
        "probability": 0.1432,
        "knownActives": "21 /  7"
      },
      {
        "target": "Serine/threonine-protein kinase PLK4",
        "commonName": "PLK4",
        "uniprotId": "O00444",
        "chemblId": "CHEMBL3788",
        "targetClass": "Kinase",
        "probability": 0.1426,
        "knownActives": "20 /  73"
      },
      {
        "target": "Mitogen-activated protein kinase 14",
        "commonName": "MAPK14",
        "uniprotId": "Q16539",
        "chemblId": "CHEMBL260",
        "targetClass": "Kinase",
        "probability": 0.1405,
        "knownActives": "120 /  130"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.14,
        "knownActives": "34 /  34"
      },
      {
        "target": "Mitogen-activated protein kinase 10",
        "commonName": "MAPK10",
        "uniprotId": "P53779",
        "chemblId": "CHEMBL2637",
        "targetClass": "Kinase",
        "probability": 0.1398,
        "knownActives": "112 /  27"
      },
      {
        "target": "Mitogen-activated protein kinase 8",
        "commonName": "MAPK8",
        "uniprotId": "P45983",
        "chemblId": "CHEMBL2276",
        "targetClass": "Kinase",
        "probability": 0.1398,
        "knownActives": "52 /  67"
      },
      {
        "target": "DNA topoisomerase 2-alpha",
        "commonName": "TOP2A",
        "uniprotId": "P11388",
        "chemblId": "CHEMBL1806",
        "targetClass": "Isomerase",
        "probability": 0.1386,
        "knownActives": "44 /  10"
      },
      {
        "target": "Palmitoleoyl-protein carboxylesterase NOTUM",
        "commonName": "NOTUM",
        "uniprotId": "Q6P988",
        "chemblId": "CHEMBL3714531",
        "targetClass": "Hydrolase",
        "probability": 0.1369,
        "knownActives": "5 /  85"
      },
      {
        "target": "Glycogen synthase kinase-3 alpha",
        "commonName": "GSK3A",
        "uniprotId": "P49840",
        "chemblId": "CHEMBL2850",
        "targetClass": "Kinase",
        "probability": 0.1364,
        "knownActives": "33 /  21"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.1347,
        "knownActives": "930 /  243"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.1343,
        "knownActives": "168 /  84"
      },
      {
        "target": "Sigma non-opioid intracellular receptor 1",
        "commonName": "SIGMAR1",
        "uniprotId": "Q99720",
        "chemblId": "CHEMBL287",
        "targetClass": "Membrane receptor",
        "probability": 0.1322,
        "knownActives": "220 /  366"
      },
      {
        "target": "Alpha-1B adrenergic receptor",
        "commonName": "ADRA1B",
        "uniprotId": "P35368",
        "chemblId": "CHEMBL232",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1322,
        "knownActives": "25 /  100"
      },
      {
        "target": "Alpha-1A adrenergic receptor",
        "commonName": "ADRA1A",
        "uniprotId": "P35348",
        "chemblId": "CHEMBL229",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1322,
        "knownActives": "40 /  139"
      },
      {
        "target": "Progesterone receptor",
        "commonName": "PGR",
        "uniprotId": "P06401",
        "chemblId": "CHEMBL208",
        "targetClass": "Nuclear receptor",
        "probability": 0.1305,
        "knownActives": "97 /  59"
      },
      {
        "target": "Estrogen-related receptor gamma",
        "commonName": "ESRRG",
        "uniprotId": "P62508",
        "chemblId": "CHEMBL4245",
        "targetClass": "Nuclear receptor",
        "probability": 0.1289,
        "knownActives": "164 /  39"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 1",
        "commonName": "HSD17B1",
        "uniprotId": "P14061",
        "chemblId": "CHEMBL3181",
        "targetClass": "Oxidoreductase",
        "probability": 0.1269,
        "knownActives": "440 /  11"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.1263,
        "knownActives": "265 /  80"
      },
      {
        "target": "Sodium-dependent serotonin transporter",
        "commonName": "SLC6A4",
        "uniprotId": "P31645",
        "chemblId": "CHEMBL228",
        "targetClass": "Electrochemical transporter",
        "probability": 0.1222,
        "knownActives": "106 /  337"
      },
      {
        "target": "Histone acetyltransferase p300",
        "commonName": "EP300",
        "uniprotId": "Q09472",
        "chemblId": "CHEMBL3784",
        "targetClass": "Writer",
        "probability": 0.1199,
        "knownActives": "45 /  139"
      },
      {
        "target": "Alpha-ketoglutarate-dependent dioxygenase FTO",
        "commonName": "FTO",
        "uniprotId": "Q9C0B1",
        "chemblId": "CHEMBL2331065",
        "targetClass": "Oxidoreductase",
        "probability": 0.1186,
        "knownActives": "49 /  3"
      },
      {
        "target": "5-hydroxytryptamine receptor 2B",
        "commonName": "HTR2B",
        "uniprotId": "P41595",
        "chemblId": "CHEMBL1833",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1173,
        "knownActives": "99 /  159"
      },
      {
        "target": "Vascular endothelial growth factor receptor 1",
        "commonName": "FLT1",
        "uniprotId": "P17948",
        "chemblId": "CHEMBL1868",
        "targetClass": "Kinase",
        "probability": 0.1171,
        "knownActives": "133 /  23"
      },
      {
        "target": "Mast/stem cell growth factor receptor Kit",
        "commonName": "KIT",
        "uniprotId": "P10721",
        "chemblId": "CHEMBL1936",
        "targetClass": "Kinase",
        "probability": 0.1171,
        "knownActives": "92 /  15"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.1169,
        "knownActives": "536 /  131"
      },
      {
        "target": "Ribosomal protein S6 kinase alpha-3",
        "commonName": "RPS6KA3",
        "uniprotId": "P51812",
        "chemblId": "CHEMBL2345",
        "targetClass": "Kinase",
        "probability": 0.1147,
        "knownActives": "86 /  8"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1125,
        "knownActives": "90 /  318"
      },
      {
        "target": "Histamine H3 receptor",
        "commonName": "HRH3",
        "uniprotId": "Q9Y5N1",
        "chemblId": "CHEMBL264",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1105,
        "knownActives": "23 /  189"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.11,
        "knownActives": "192 /  223"
      },
      {
        "target": "Carbonic anhydrase 3",
        "commonName": "CA3",
        "uniprotId": "P07451",
        "chemblId": "CHEMBL2885",
        "targetClass": "Lyase",
        "probability": 0.109,
        "knownActives": "6 /  2"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.1056,
        "knownActives": "241 /  110"
      }
    ]
  },
  {
    "id": "azadirachtin",
    "name": "Azadirachtin",
    "cid": 5281303,
    "smiles": "CC(=O)OC1C(C2(CC(=O)C3C(C2=C)C4(C(O3)C5=COC=C5)C(C=CC4(C)C(=O)OC)C)C)OC(=O)C1O",
    "category": "Limonoid Seco-Triterpenoid",
    "topTarget": "Heat shock protein HSP 90-alpha (HSP90AA1)",
    "topTargetUniprot": "P07900",
    "targetClasses": [
      {
        "label": "Lyase",
        "count": 13,
        "percentage": 13.0,
        "color": "#3B82F6"
      },
      {
        "label": "Primary active transporter",
        "count": 10,
        "percentage": 10.0,
        "color": "#10B981"
      },
      {
        "label": "Kinase",
        "count": 8,
        "percentage": 8.0,
        "color": "#F59E0B"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 6,
        "percentage": 6.0,
        "color": "#EF4444"
      },
      {
        "label": "Phosphatase",
        "count": 6,
        "percentage": 6.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Transferase",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Transcription factor",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 5,
        "percentage": 5.0,
        "color": "#6366F1"
      },
      {
        "label": "Protease",
        "count": 5,
        "percentage": 5.0,
        "color": "#14B8A6"
      },
      {
        "label": "Reader",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Hydrolase",
        "count": 4,
        "percentage": 4.0,
        "color": "#84CC16"
      },
      {
        "label": "Nuclear receptor",
        "count": 4,
        "percentage": 4.0,
        "color": "#A855F7"
      },
      {
        "label": "Oxidoreductase",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#3B82F6"
      },
      {
        "label": "Isomerase",
        "count": 3,
        "percentage": 3.0,
        "color": "#10B981"
      },
      {
        "label": "Ligase",
        "count": 3,
        "percentage": 3.0,
        "color": "#F59E0B"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Secreted protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Other ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      },
      {
        "label": "Electrochemical transporter",
        "count": 1,
        "percentage": 1.0,
        "color": "#A855F7"
      },
      {
        "label": "Other nuclear protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#64748B"
      },
      {
        "label": "Cytochrome P450",
        "count": 1,
        "percentage": 1.0,
        "color": "#3B82F6"
      }
    ],
    "targets": [
      {
        "target": "Heat shock protein HSP 90-alpha",
        "commonName": "HSP90AA1",
        "uniprotId": "P07900",
        "chemblId": "CHEMBL3880",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0164,
        "knownActives": "0 /  19"
      },
      {
        "target": "Squalene synthase",
        "commonName": "FDFT1",
        "uniprotId": "P37268",
        "chemblId": "CHEMBL3338",
        "targetClass": "Transferase",
        "probability": 0.0162,
        "knownActives": "0 /  31"
      },
      {
        "target": "Zinc finger protein GLI1",
        "commonName": "GLI1",
        "uniprotId": "P08151",
        "chemblId": "CHEMBL5461",
        "targetClass": "Transcription factor",
        "probability": 0.0147,
        "knownActives": "0 /  5"
      },
      {
        "target": "Isocitrate dehydrogenase [NADP] cytoplasmic",
        "commonName": "IDH1",
        "uniprotId": "O75874",
        "chemblId": "CHEMBL2007625",
        "targetClass": "Oxidoreductase",
        "probability": 0.0147,
        "knownActives": "0 /  2"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 3",
        "commonName": "KCNA3",
        "uniprotId": "P22001",
        "chemblId": "CHEMBL4633",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0137,
        "knownActives": "0 /  6"
      },
      {
        "target": "Neurogenic locus notch homolog protein 1",
        "commonName": "NOTCH1",
        "uniprotId": "P46531",
        "chemblId": "CHEMBL2146346",
        "targetClass": "Membrane receptor",
        "probability": 0.0135,
        "knownActives": "0 /  1"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.0106,
        "knownActives": "0 /  21"
      },
      {
        "target": "Protein kinase C alpha type",
        "commonName": "PRKCA",
        "uniprotId": "P17252",
        "chemblId": "CHEMBL299",
        "targetClass": "Kinase",
        "probability": 0.0086,
        "knownActives": "0 /  320"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.0082,
        "knownActives": "0 /  17"
      },
      {
        "target": "Motilin receptor",
        "commonName": "MLNR",
        "uniprotId": "O43193",
        "chemblId": "CHEMBL2203",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0078,
        "knownActives": "0 /  3"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.0077,
        "knownActives": "0 /  92"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.0077,
        "knownActives": "0 /  15"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.0077,
        "knownActives": "0 /  74"
      },
      {
        "target": "Protein kinase C eta type",
        "commonName": "PRKCH",
        "uniprotId": "P24723",
        "chemblId": "CHEMBL3616",
        "targetClass": "Kinase",
        "probability": 0.0077,
        "knownActives": "0 /  14"
      },
      {
        "target": "Protein kinase C beta type",
        "commonName": "PRKCB",
        "uniprotId": "P05771",
        "chemblId": "CHEMBL3045",
        "targetClass": "Kinase",
        "probability": 0.0077,
        "knownActives": "0 /  22"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 1",
        "commonName": "ATP2A1",
        "uniprotId": "O14983",
        "chemblId": "CHEMBL3136",
        "targetClass": "Primary active transporter",
        "probability": 0.007,
        "knownActives": "0 /  6"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.0063,
        "knownActives": "0 /  59"
      },
      {
        "target": "Nicotinamide N-methyltransferase",
        "commonName": "NNMT",
        "uniprotId": "P40261",
        "chemblId": "CHEMBL2346486",
        "targetClass": "Transferase",
        "probability": 0.0055,
        "knownActives": "0 /  1"
      },
      {
        "target": "Glycine receptor subunit alpha-2",
        "commonName": "GLRA2",
        "uniprotId": "P23416",
        "chemblId": "CHEMBL5871",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0054,
        "knownActives": "0 /  5"
      },
      {
        "target": "Glycine receptor subunit alpha-1",
        "commonName": "GLRA1",
        "uniprotId": "P23415",
        "chemblId": "CHEMBL5845",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0054,
        "knownActives": "0 /  7"
      },
      {
        "target": "Protein phosphatase 1A",
        "commonName": "PPM1A",
        "uniprotId": "P35813",
        "chemblId": "CHEMBL2437",
        "targetClass": "Phosphatase",
        "probability": 0.0051,
        "knownActives": "0 /  1"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.0049,
        "knownActives": "0 /  5"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.0046,
        "knownActives": "0 /  4"
      },
      {
        "target": "Bromodomain-containing protein 3",
        "commonName": "BRD3",
        "uniprotId": "Q15059",
        "chemblId": "CHEMBL1795186",
        "targetClass": "Reader",
        "probability": 0.0043,
        "knownActives": "0 /  9"
      },
      {
        "target": "Bromodomain-containing protein 4",
        "commonName": "BRD4",
        "uniprotId": "O60885",
        "chemblId": "CHEMBL1163125",
        "targetClass": "Reader",
        "probability": 0.0043,
        "knownActives": "0 /  10"
      },
      {
        "target": "Nuclear factor erythroid 2-related factor 2",
        "commonName": "NFE2L2",
        "uniprotId": "Q16236",
        "chemblId": "CHEMBL1075094",
        "targetClass": "Transcription factor",
        "probability": 0.0039,
        "knownActives": "0 /  7"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.0038,
        "knownActives": "0 /  2"
      },
      {
        "target": "Platelet-activating factor receptor",
        "commonName": "PTAFR",
        "uniprotId": "P25105",
        "chemblId": "CHEMBL250",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0037,
        "knownActives": "0 /  11"
      },
      {
        "target": "Beta-glucuronidase",
        "commonName": "GUSB",
        "uniprotId": "P08236",
        "chemblId": "CHEMBL2728",
        "targetClass": "Hydrolase",
        "probability": 0.0037,
        "knownActives": "0 /  1"
      },
      {
        "target": "Interleukin-2",
        "commonName": "IL2",
        "uniprotId": "P60568",
        "chemblId": "CHEMBL5880",
        "targetClass": "Secreted protein",
        "probability": 0.0035,
        "knownActives": "0 /  1"
      },
      {
        "target": "Proteasome Macropain subunit MB1",
        "commonName": "PSMB5",
        "uniprotId": "P28074",
        "chemblId": "CHEMBL4662",
        "targetClass": "Protease",
        "probability": 0.0034,
        "knownActives": "0 /  2"
      },
      {
        "target": "Proteasome component C5",
        "commonName": "PSMB1",
        "uniprotId": "P20618",
        "chemblId": "CHEMBL4208",
        "targetClass": "Protease",
        "probability": 0.0034,
        "knownActives": "0 /  2"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.0034,
        "knownActives": "0 /  71"
      },
      {
        "target": "Bcl-2-like protein 1",
        "commonName": "BCL2L1",
        "uniprotId": "Q07817",
        "chemblId": "CHEMBL4625",
        "targetClass": "Other ion channel",
        "probability": 0.0033,
        "knownActives": "0 /  5"
      },
      {
        "target": "Serine/threonine-protein phosphatase 2A activator",
        "commonName": "PTPA",
        "uniprotId": "Q15257",
        "chemblId": "CHEMBL2505",
        "targetClass": "Phosphatase",
        "probability": 0.0032,
        "knownActives": "0 /  1"
      },
      {
        "target": "Endothelial PAS domain-containing protein 1",
        "commonName": "EPAS1",
        "uniprotId": "Q99814",
        "chemblId": "CHEMBL1744522",
        "targetClass": "Transcription factor",
        "probability": 0.0032,
        "knownActives": "0 /  3"
      },
      {
        "target": "Kir3.1/Kir3.4",
        "commonName": "N/A",
        "uniprotId": "P48549&P48544",
        "chemblId": "CHEMBL3038488",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0031,
        "knownActives": "0 /  11"
      },
      {
        "target": "DNA (cytosine-5)-methyltransferase 3A",
        "commonName": "DNMT3A",
        "uniprotId": "Q9Y6K1",
        "chemblId": "CHEMBL1992",
        "targetClass": "Writer",
        "probability": 0.0031,
        "knownActives": "0 /  1"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 11",
        "commonName": "PTPN11",
        "uniprotId": "Q06124",
        "chemblId": "CHEMBL3864",
        "targetClass": "Phosphatase",
        "probability": 0.0031,
        "knownActives": "0 /  5"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.0031,
        "knownActives": "0 /  8"
      },
      {
        "target": "V-type proton ATPase subunit S1",
        "commonName": "ATP6AP1",
        "uniprotId": "Q15904",
        "chemblId": "CHEMBL4790",
        "targetClass": "Primary active transporter",
        "probability": 0.003,
        "knownActives": "0 /  1"
      },
      {
        "target": "P2X purinoceptor 3",
        "commonName": "P2RX3",
        "uniprotId": "P56373",
        "chemblId": "CHEMBL2998",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.003,
        "knownActives": "0 /  1"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.003,
        "knownActives": "0 /  1"
      },
      {
        "target": "Sodium/potassium-transporting ATPase subunit alpha-2/beta-3",
        "commonName": "N/A",
        "uniprotId": "P50993&P54709",
        "chemblId": "CHEMBL6066562",
        "targetClass": "Primary active transporter",
        "probability": 0.003,
        "knownActives": "0 /  3"
      },
      {
        "target": "Sodium/potassium-transporting ATPase subunit alpha-2/beta-2",
        "commonName": "N/A",
        "uniprotId": "P14415&P50993",
        "chemblId": "CHEMBL6066561",
        "targetClass": "Primary active transporter",
        "probability": 0.003,
        "knownActives": "0 /  3"
      },
      {
        "target": "Sodium/potassium-transporting ATPase subunit alpha-2/beta-1",
        "commonName": "N/A",
        "uniprotId": "P05026&P50993",
        "chemblId": "CHEMBL6066560",
        "targetClass": "Primary active transporter",
        "probability": 0.003,
        "knownActives": "0 /  3"
      },
      {
        "target": "Sodium/potassium-transporting ATPase subunit alpha-1/beta-1",
        "commonName": "N/A",
        "uniprotId": "P05023&P05026",
        "chemblId": "CHEMBL6066559",
        "targetClass": "Primary active transporter",
        "probability": 0.003,
        "knownActives": "0 /  3"
      },
      {
        "target": "D-3-phosphoglycerate dehydrogenase",
        "commonName": "PHGDH",
        "uniprotId": "O43175",
        "chemblId": "CHEMBL2311243",
        "targetClass": "Oxidoreductase",
        "probability": 0.003,
        "knownActives": "0 /  1"
      },
      {
        "target": "Serine/threonine-protein phosphatase PP1-gamma catalytic subunit",
        "commonName": "PPP1CC",
        "uniprotId": "P36873",
        "chemblId": "CHEMBL4438",
        "targetClass": "Phosphatase",
        "probability": 0.0028,
        "knownActives": "0 /  5"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.0028,
        "knownActives": "0 /  82"
      },
      {
        "target": "ATP-dependent Clp protease ATP-binding subunit clpX-like, mitochondrial",
        "commonName": "CLPX",
        "uniprotId": "O76031",
        "chemblId": "CHEMBL3797014",
        "targetClass": "Enzyme",
        "probability": 0.0028,
        "knownActives": "0 /  1"
      },
      {
        "target": "Peptidyl-prolyl cis-trans isomerase FKBP1A",
        "commonName": "FKBP1A",
        "uniprotId": "P62942",
        "chemblId": "CHEMBL1902",
        "targetClass": "Isomerase",
        "probability": 0.0026,
        "knownActives": "0 /  87"
      },
      {
        "target": "Adenylate cyclase type 1",
        "commonName": "ADCY1",
        "uniprotId": "Q08828",
        "chemblId": "CHEMBL2899",
        "targetClass": "Lyase",
        "probability": 0.0026,
        "knownActives": "0 /  45"
      },
      {
        "target": "Adenylate cyclase type 8",
        "commonName": "ADCY8",
        "uniprotId": "P40145",
        "chemblId": "CHEMBL2960",
        "targetClass": "Lyase",
        "probability": 0.0026,
        "knownActives": "0 /  1"
      },
      {
        "target": "Solute carrier family 2, facilitated glucose transporter member 1",
        "commonName": "SLC2A1",
        "uniprotId": "P11166",
        "chemblId": "CHEMBL2535",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0026,
        "knownActives": "0 /  13"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.0025,
        "knownActives": "0 /  22"
      },
      {
        "target": "Liver carboxylesterase 1",
        "commonName": "CES1",
        "uniprotId": "P23141",
        "chemblId": "CHEMBL2265",
        "targetClass": "Hydrolase",
        "probability": 0.0024,
        "knownActives": "0 /  2"
      },
      {
        "target": "Isoleucine--tRNA ligase, cytoplasmic",
        "commonName": "IARS1",
        "uniprotId": "P41252",
        "chemblId": "CHEMBL3235",
        "targetClass": "Ligase",
        "probability": 0.0024,
        "knownActives": "0 /  5"
      },
      {
        "target": "NACHT, LRR and PYD domains-containing protein 3",
        "commonName": "NLRP3",
        "uniprotId": "Q96P20",
        "chemblId": "CHEMBL1741208",
        "targetClass": "Unclassified protein",
        "probability": 0.0023,
        "knownActives": "0 /  30"
      },
      {
        "target": "Bifunctional epoxide hydrolase 2",
        "commonName": "EPHX2",
        "uniprotId": "P34913",
        "chemblId": "CHEMBL2409",
        "targetClass": "Protease",
        "probability": 0.0023,
        "knownActives": "0 /  7"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0022,
        "knownActives": "0 /  24"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0022,
        "knownActives": "0 /  6"
      },
      {
        "target": "Bromodomain testis-specific protein",
        "commonName": "BRDT",
        "uniprotId": "Q58F21",
        "chemblId": "CHEMBL1795185",
        "targetClass": "Reader",
        "probability": 0.0022,
        "knownActives": "0 /  1"
      },
      {
        "target": "Bromodomain-containing protein 2",
        "commonName": "BRD2",
        "uniprotId": "P25440",
        "chemblId": "CHEMBL1293289",
        "targetClass": "Reader",
        "probability": 0.0022,
        "knownActives": "0 /  1"
      },
      {
        "target": "dCTP pyrophosphatase 1",
        "commonName": "DCTPP1",
        "uniprotId": "Q9H773",
        "chemblId": "CHEMBL3769292",
        "targetClass": "Hydrolase",
        "probability": 0.0021,
        "knownActives": "0 /  1"
      },
      {
        "target": "Proteinase-activated receptor 2",
        "commonName": "F2RL1",
        "uniprotId": "P55085",
        "chemblId": "CHEMBL5963",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0021,
        "knownActives": "0 /  1"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 3",
        "commonName": "ATP2A3",
        "uniprotId": "Q93084",
        "chemblId": "CHEMBL2401",
        "targetClass": "Primary active transporter",
        "probability": 0.0021,
        "knownActives": "0 /  1"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 2",
        "commonName": "ATP2A2",
        "uniprotId": "P16615",
        "chemblId": "CHEMBL3901",
        "targetClass": "Primary active transporter",
        "probability": 0.0021,
        "knownActives": "0 /  3"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 1",
        "commonName": "TRPV1",
        "uniprotId": "Q8NER1",
        "chemblId": "CHEMBL4794",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.002,
        "knownActives": "0 /  19"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 8",
        "commonName": "TRPM8",
        "uniprotId": "Q7Z2W7",
        "chemblId": "CHEMBL1075319",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.002,
        "knownActives": "0 /  1"
      },
      {
        "target": "Geranylgeranyl transferase type I",
        "commonName": "N/A",
        "uniprotId": "P49354&P53609",
        "chemblId": "CHEMBL2095164",
        "targetClass": "Transferase",
        "probability": 0.002,
        "knownActives": "0 /  1"
      },
      {
        "target": "Protein farnesyltransferase",
        "commonName": "N/A",
        "uniprotId": "P49354&P49356",
        "chemblId": "CHEMBL2094108",
        "targetClass": "Transferase",
        "probability": 0.002,
        "knownActives": "0 /  4"
      },
      {
        "target": "Synaptojanin-2",
        "commonName": "SYNJ2",
        "uniprotId": "O15056",
        "chemblId": "CHEMBL4523129",
        "targetClass": "Hydrolase",
        "probability": 0.002,
        "knownActives": "0 /  11"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.0019,
        "knownActives": "0 /  2"
      },
      {
        "target": "Splicing factor 3B subunit 3",
        "commonName": "SF3B3",
        "uniprotId": "Q15393",
        "chemblId": "CHEMBL1250378",
        "targetClass": "Other nuclear protein",
        "probability": 0.0019,
        "knownActives": "0 /  9"
      },
      {
        "target": "Peptidyl-prolyl cis-trans isomerase FKBP5",
        "commonName": "FKBP5",
        "uniprotId": "Q13451",
        "chemblId": "CHEMBL2052031",
        "targetClass": "Enzyme",
        "probability": 0.0019,
        "knownActives": "0 /  2"
      },
      {
        "target": "Protein phosphatase 3 catalytic subunit alpha",
        "commonName": "PPP3CA",
        "uniprotId": "Q08209",
        "chemblId": "CHEMBL4445",
        "targetClass": "Phosphatase",
        "probability": 0.0019,
        "knownActives": "0 /  2"
      },
      {
        "target": "Peptidyl-prolyl cis-trans isomerase FKBP4",
        "commonName": "FKBP4",
        "uniprotId": "Q02790",
        "chemblId": "CHEMBL4050",
        "targetClass": "Isomerase",
        "probability": 0.0019,
        "knownActives": "0 /  2"
      },
      {
        "target": "Peptidyl-prolyl cis-trans isomerase FKBP1B",
        "commonName": "FKBP1B",
        "uniprotId": "P68106",
        "chemblId": "CHEMBL2430",
        "targetClass": "Isomerase",
        "probability": 0.0019,
        "knownActives": "0 /  2"
      },
      {
        "target": "Serine/threonine-protein kinase mTOR",
        "commonName": "MTOR",
        "uniprotId": "P42345",
        "chemblId": "CHEMBL2842",
        "targetClass": "Kinase",
        "probability": 0.0019,
        "knownActives": "0 /  34"
      },
      {
        "target": "Cytochrome P450 3A4",
        "commonName": "CYP3A4",
        "uniprotId": "P08684",
        "chemblId": "CHEMBL340",
        "targetClass": "Cytochrome P450",
        "probability": 0.0019,
        "knownActives": "0 /  2"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  4"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  8"
      },
      {
        "target": "Tubulin--tyrosine ligase",
        "commonName": "TTL",
        "uniprotId": "Q8NG68",
        "chemblId": "CHEMBL5549",
        "targetClass": "Ligase",
        "probability": 0.0019,
        "knownActives": "0 /  15"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  7"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  28"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  8"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  8"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  5"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  10"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  25"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  29"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.0019,
        "knownActives": "0 /  27"
      },
      {
        "target": "Kelch-like ECH-associated protein 1",
        "commonName": "KEAP1",
        "uniprotId": "Q14145",
        "chemblId": "CHEMBL2069156",
        "targetClass": "Unclassified protein",
        "probability": 0.0018,
        "knownActives": "0 /  3"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 0.0017,
        "knownActives": "0 /  1"
      },
      {
        "target": "Mineralocorticoid receptor",
        "commonName": "NR3C2",
        "uniprotId": "P08235",
        "chemblId": "CHEMBL1994",
        "targetClass": "Nuclear receptor",
        "probability": 0.0017,
        "knownActives": "0 /  11"
      },
      {
        "target": "Progesterone receptor",
        "commonName": "PGR",
        "uniprotId": "P06401",
        "chemblId": "CHEMBL208",
        "targetClass": "Nuclear receptor",
        "probability": 0.0017,
        "knownActives": "0 /  49"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.0016,
        "knownActives": "0 /  1"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 7",
        "commonName": "TRPM7",
        "uniprotId": "Q96QT4",
        "chemblId": "CHEMBL1250412",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0015,
        "knownActives": "0 /  1"
      },
      {
        "target": "Pyruvate carboxylase, mitochondrial",
        "commonName": "PC",
        "uniprotId": "P11498",
        "chemblId": "CHEMBL5725151",
        "targetClass": "Ligase",
        "probability": 0.0015,
        "knownActives": "0 /  1"
      }
    ]
  },
  {
    "id": "baicalein",
    "name": "Baicalein",
    "cid": 5281605,
    "smiles": "O=C1C=C(c2ccccc2)Oc3c1c(O)c(O)c(O)c3",
    "category": "Flavonoid Trihydroxyflavone",
    "topTarget": "Histone deacetylase 6 (HDAC6)",
    "topTargetUniprot": "Q9UBN7",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 24,
        "percentage": 24.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 14,
        "percentage": 14.0,
        "color": "#10B981"
      },
      {
        "label": "Transferase",
        "count": 9,
        "percentage": 9.0,
        "color": "#F59E0B"
      },
      {
        "label": "Protease",
        "count": 8,
        "percentage": 8.0,
        "color": "#EF4444"
      },
      {
        "label": "Lyase",
        "count": 7,
        "percentage": 7.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Nuclear receptor",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Enzyme",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Writer",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Eraser",
        "count": 3,
        "percentage": 3.0,
        "color": "#14B8A6"
      },
      {
        "label": "Primary active transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Electrochemical transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Hydrolase",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Cytochrome P450",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Phosphatase",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Other ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Secreted protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Isomerase",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      }
    ],
    "targets": [
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 1.0,
        "knownActives": "51 /  29"
      },
      {
        "target": "Serine/threonine-protein kinase PLK1",
        "commonName": "PLK1",
        "uniprotId": "P53350",
        "chemblId": "CHEMBL3024",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "12 /  7"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "107 /  42"
      },
      {
        "target": "G protein-coupled receptor kinase 6",
        "commonName": "GRK6",
        "uniprotId": "P43250",
        "chemblId": "CHEMBL6144",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "19 /  4"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 1.0,
        "knownActives": "70 /  10"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX12",
        "commonName": "ALOX12",
        "uniprotId": "P18054",
        "chemblId": "CHEMBL3687",
        "targetClass": "Enzyme",
        "probability": 1.0,
        "knownActives": "29 /  14"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "58 /  13"
      },
      {
        "target": "Tyrosine-protein kinase Yes",
        "commonName": "YES1",
        "uniprotId": "P07947",
        "chemblId": "CHEMBL2073",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "5 /  5"
      },
      {
        "target": "Cyclin-dependent kinase 1/cyclin B1",
        "commonName": "N/A",
        "uniprotId": "P06493&P14635",
        "chemblId": "CHEMBL1907602",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "30 /  19"
      },
      {
        "target": "Lysine-specific demethylase 4E",
        "commonName": "KDM4E",
        "uniprotId": "B2RXH2",
        "chemblId": "CHEMBL1293226",
        "targetClass": "Eraser",
        "probability": 1.0,
        "knownActives": "10 /  2"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 0.9791,
        "knownActives": "31 /  153"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.9791,
        "knownActives": "76 /  44"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.9791,
        "knownActives": "16 /  16"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.9791,
        "knownActives": "47 /  34"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.9791,
        "knownActives": "38 /  114"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.9791,
        "knownActives": "200 /  110"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.9777,
        "knownActives": "28 /  145"
      },
      {
        "target": "Cyclin-dependent kinase 5/CDK5 activator 1",
        "commonName": "N/A",
        "uniprotId": "Q00535&Q15078",
        "chemblId": "CHEMBL1907600",
        "targetClass": "Kinase",
        "probability": 0.9777,
        "knownActives": "80 /  25"
      },
      {
        "target": "Cyclin-dependent kinase 6",
        "commonName": "CDK6",
        "uniprotId": "Q00534",
        "chemblId": "CHEMBL2508",
        "targetClass": "Kinase",
        "probability": 0.9777,
        "knownActives": "8 /  6"
      },
      {
        "target": "Proteasome Macropain subunit MB1",
        "commonName": "PSMB5",
        "uniprotId": "P28074",
        "chemblId": "CHEMBL4662",
        "targetClass": "Protease",
        "probability": 0.9777,
        "knownActives": "13 /  6"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.9777,
        "knownActives": "61 /  40"
      },
      {
        "target": "Cyclin-dependent kinase 1/cyclin B",
        "commonName": "N/A",
        "uniprotId": "P06493&P14635&Q8WWL7&O95067",
        "chemblId": "CHEMBL2094127",
        "targetClass": "Kinase",
        "probability": 0.9777,
        "knownActives": "37 /  13"
      },
      {
        "target": "Solute carrier organic anion transporter family member 2B1",
        "commonName": "SLCO2B1",
        "uniprotId": "O94956",
        "chemblId": "CHEMBL1743124",
        "targetClass": "Electrochemical transporter",
        "probability": 0.9766,
        "knownActives": "7 /  6"
      },
      {
        "target": "Inositol hexakisphosphate kinase 2",
        "commonName": "IP6K2",
        "uniprotId": "Q9UHH9",
        "chemblId": "CHEMBL4523488",
        "targetClass": "Transferase",
        "probability": 0.9753,
        "knownActives": "10 /  10"
      },
      {
        "target": "Receptor-type tyrosine-protein phosphatase S",
        "commonName": "PTPRS",
        "uniprotId": "Q13332",
        "chemblId": "CHEMBL2396508",
        "targetClass": "Phosphatase",
        "probability": 0.9746,
        "knownActives": "8 /  8"
      },
      {
        "target": "Poly [ADP-ribose] polymerase tankyrase-2",
        "commonName": "TNKS2",
        "uniprotId": "Q9H2K2",
        "chemblId": "CHEMBL6154",
        "targetClass": "Transferase",
        "probability": 0.9734,
        "knownActives": "17 /  12"
      },
      {
        "target": "Poly [ADP-ribose] polymerase tankyrase-1",
        "commonName": "TNKS",
        "uniprotId": "O95271",
        "chemblId": "CHEMBL6164",
        "targetClass": "Transferase",
        "probability": 0.9734,
        "knownActives": "13 /  28"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 0.9667,
        "knownActives": "90 /  26"
      },
      {
        "target": "DNA polymerase eta",
        "commonName": "POLH",
        "uniprotId": "Q9Y253",
        "chemblId": "CHEMBL5542",
        "targetClass": "Transferase",
        "probability": 0.9661,
        "knownActives": "5 /  4"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.9656,
        "knownActives": "209 /  112"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.9653,
        "knownActives": "105 /  331"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.9653,
        "knownActives": "47 /  223"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.9653,
        "knownActives": "108 /  127"
      },
      {
        "target": "NADPH oxidase 4",
        "commonName": "NOX4",
        "uniprotId": "Q9NPH5",
        "chemblId": "CHEMBL1250375",
        "targetClass": "Oxidoreductase",
        "probability": 0.9631,
        "knownActives": "25 /  8"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 2",
        "commonName": "MKNK2",
        "uniprotId": "Q9HBH9",
        "chemblId": "CHEMBL4204",
        "targetClass": "Kinase",
        "probability": 0.9631,
        "knownActives": "17 /  7"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.9631,
        "knownActives": "458 /  127"
      },
      {
        "target": "Casein kinase II subunit alpha",
        "commonName": "CSNK2A1",
        "uniprotId": "P68400",
        "chemblId": "CHEMBL3629",
        "targetClass": "Kinase",
        "probability": 0.9631,
        "knownActives": "23 /  9"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.9631,
        "knownActives": "58 /  34"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.9631,
        "knownActives": "80 /  40"
      },
      {
        "target": "Tyrosine-protein kinase SYK",
        "commonName": "SYK",
        "uniprotId": "P43405",
        "chemblId": "CHEMBL2599",
        "targetClass": "Kinase",
        "probability": 0.9631,
        "knownActives": "17 /  3"
      },
      {
        "target": "Receptor-type tyrosine-protein kinase FLT3",
        "commonName": "FLT3",
        "uniprotId": "P36888",
        "chemblId": "CHEMBL1974",
        "targetClass": "Kinase",
        "probability": 0.9631,
        "knownActives": "37 /  16"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.9631,
        "knownActives": "82 /  111"
      },
      {
        "target": "Multidrug resistance-associated protein 1",
        "commonName": "ABCC1",
        "uniprotId": "P33527",
        "chemblId": "CHEMBL3004",
        "targetClass": "Primary active transporter",
        "probability": 0.9631,
        "knownActives": "13 /  75"
      },
      {
        "target": "Dipeptidyl peptidase 4",
        "commonName": "DPP4",
        "uniprotId": "P27487",
        "chemblId": "CHEMBL284",
        "targetClass": "Protease",
        "probability": 0.9631,
        "knownActives": "24 /  9"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.9631,
        "knownActives": "15 /  9"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 1",
        "commonName": "HSD17B1",
        "uniprotId": "P14061",
        "chemblId": "CHEMBL3181",
        "targetClass": "Oxidoreductase",
        "probability": 0.9631,
        "knownActives": "135 /  10"
      },
      {
        "target": "Cystic fibrosis transmembrane conductance regulator",
        "commonName": "CFTR",
        "uniprotId": "P13569",
        "chemblId": "CHEMBL4051",
        "targetClass": "Other ion channel",
        "probability": 0.9631,
        "knownActives": "6 /  3"
      },
      {
        "target": "Myeloperoxidase",
        "commonName": "MPO",
        "uniprotId": "P05164",
        "chemblId": "CHEMBL2439",
        "targetClass": "Oxidoreductase",
        "probability": 0.9631,
        "knownActives": "11 /  4"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.9631,
        "knownActives": "444 /  120"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.9631,
        "knownActives": "48 /  9"
      },
      {
        "target": "Aldo-keto reductase family 1 member B10",
        "commonName": "AKR1B10",
        "uniprotId": "O60218",
        "chemblId": "CHEMBL5983",
        "targetClass": "Oxidoreductase",
        "probability": 0.9631,
        "knownActives": "15 /  3"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.962,
        "knownActives": "234 /  64"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.9602,
        "knownActives": "188 /  58"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.955,
        "knownActives": "151 /  79"
      },
      {
        "target": "Poly [ADP-ribose] polymerase 1",
        "commonName": "PARP1",
        "uniprotId": "P09874",
        "chemblId": "CHEMBL3105",
        "targetClass": "Transferase",
        "probability": 0.9516,
        "knownActives": "149 /  70"
      },
      {
        "target": "Carbonyl reductase [NADPH] 1",
        "commonName": "CBR1",
        "uniprotId": "P16152",
        "chemblId": "CHEMBL5586",
        "targetClass": "Oxidoreductase",
        "probability": 0.9489,
        "knownActives": "9 /  3"
      },
      {
        "target": "Histone-lysine N-methyltransferase SETD7",
        "commonName": "SETD7",
        "uniprotId": "Q8WTS6",
        "chemblId": "CHEMBL5523",
        "targetClass": "Writer",
        "probability": 0.9477,
        "knownActives": "3 /  3"
      },
      {
        "target": "6-phosphofructo-2-kinase/fructose-2,6-bisphosphatase 3",
        "commonName": "PFKFB3",
        "uniprotId": "Q16875",
        "chemblId": "CHEMBL2331053",
        "targetClass": "Enzyme",
        "probability": 0.9477,
        "knownActives": "10 /  3"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.9424,
        "knownActives": "69 /  55"
      },
      {
        "target": "Histone-lysine N-methyltransferase EZH1",
        "commonName": "EZH1",
        "uniprotId": "Q92800",
        "chemblId": "CHEMBL2189116",
        "targetClass": "Writer",
        "probability": 0.9393,
        "knownActives": "1 /  1"
      },
      {
        "target": "Histone-lysine N-methyltransferase 2A",
        "commonName": "KMT2A",
        "uniprotId": "Q03164",
        "chemblId": "CHEMBL1293299",
        "targetClass": "Writer",
        "probability": 0.9393,
        "knownActives": "1 /  1"
      },
      {
        "target": "Alpha-amylase 1A",
        "commonName": "AMY1A",
        "uniprotId": "P0DUB6",
        "chemblId": "CHEMBL2478",
        "targetClass": "Hydrolase",
        "probability": 0.9393,
        "knownActives": "1 /  1"
      },
      {
        "target": "Histone-lysine N-methyltransferase NSD2",
        "commonName": "NSD2",
        "uniprotId": "O96028",
        "chemblId": "CHEMBL3108645",
        "targetClass": "Writer",
        "probability": 0.9393,
        "knownActives": "1 /  1"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 0.9322,
        "knownActives": "82 /  19"
      },
      {
        "target": "Short transient receptor potential channel 5",
        "commonName": "TRPC5",
        "uniprotId": "Q9UL62",
        "chemblId": "CHEMBL1250411",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.9177,
        "knownActives": "5 /  4"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9177,
        "knownActives": "17 /  41"
      },
      {
        "target": "Protein disulfide-isomerase",
        "commonName": "P4HB",
        "uniprotId": "P07237",
        "chemblId": "CHEMBL5422",
        "targetClass": "Isomerase",
        "probability": 0.9177,
        "knownActives": "34 /  2"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.9177,
        "knownActives": "26 /  93"
      },
      {
        "target": "Tyrosine-protein kinase Lck",
        "commonName": "LCK",
        "uniprotId": "P06239",
        "chemblId": "CHEMBL258",
        "targetClass": "Kinase",
        "probability": 0.9114,
        "knownActives": "33 /  5"
      },
      {
        "target": "Inositol polyphosphate multikinase",
        "commonName": "IPMK",
        "uniprotId": "Q8NFU5",
        "chemblId": "CHEMBL4523401",
        "targetClass": "Transferase",
        "probability": 0.907,
        "knownActives": "6 /  6"
      },
      {
        "target": "Monocarboxylate transporter 1",
        "commonName": "SLC16A1",
        "uniprotId": "P53985",
        "chemblId": "CHEMBL4360",
        "targetClass": "Electrochemical transporter",
        "probability": 0.8939,
        "knownActives": "4 /  2"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 0.8886,
        "knownActives": "57 /  6"
      },
      {
        "target": "72 kDa type IV collagenase",
        "commonName": "MMP2",
        "uniprotId": "P08253",
        "chemblId": "CHEMBL333",
        "targetClass": "Protease",
        "probability": 0.8886,
        "knownActives": "86 /  4"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.8874,
        "knownActives": "74 /  40"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.8779,
        "knownActives": "25 /  27"
      },
      {
        "target": "Mast/stem cell growth factor receptor Kit",
        "commonName": "KIT",
        "uniprotId": "P10721",
        "chemblId": "CHEMBL1936",
        "targetClass": "Kinase",
        "probability": 0.8758,
        "knownActives": "8 /  3"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 1",
        "commonName": "MKNK1",
        "uniprotId": "Q9BUB5",
        "chemblId": "CHEMBL4718",
        "targetClass": "Kinase",
        "probability": 0.8732,
        "knownActives": "8 /  2"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.8665,
        "knownActives": "95 /  33"
      },
      {
        "target": "Steroid hormone receptor ERR1",
        "commonName": "ESRRA",
        "uniprotId": "P11474",
        "chemblId": "CHEMBL3429",
        "targetClass": "Nuclear receptor",
        "probability": 0.8648,
        "knownActives": "21 /  2"
      },
      {
        "target": "Solute carrier family 2, facilitated glucose transporter member 1",
        "commonName": "SLC2A1",
        "uniprotId": "P11166",
        "chemblId": "CHEMBL2535",
        "targetClass": "Electrochemical transporter",
        "probability": 0.8648,
        "knownActives": "3 /  2"
      },
      {
        "target": "Macrophage metalloelastase",
        "commonName": "MMP12",
        "uniprotId": "P39900",
        "chemblId": "CHEMBL4393",
        "targetClass": "Protease",
        "probability": 0.8646,
        "knownActives": "17 /  5"
      },
      {
        "target": "Ribosomal protein S6 kinase alpha-3",
        "commonName": "RPS6KA3",
        "uniprotId": "P51812",
        "chemblId": "CHEMBL2345",
        "targetClass": "Kinase",
        "probability": 0.8633,
        "knownActives": "32 /  26"
      },
      {
        "target": "Lactoylglutathione lyase",
        "commonName": "GLO1",
        "uniprotId": "Q04760",
        "chemblId": "CHEMBL2424",
        "targetClass": "Lyase",
        "probability": 0.8613,
        "knownActives": "7 /  4"
      },
      {
        "target": "A disintegrin and metalloproteinase with thrombospondin motifs 4",
        "commonName": "ADAMTS4",
        "uniprotId": "O75173",
        "chemblId": "CHEMBL2318",
        "targetClass": "Protease",
        "probability": 0.8613,
        "knownActives": "4 /  1"
      },
      {
        "target": "Cyclin-dependent kinase 2",
        "commonName": "CDK2",
        "uniprotId": "P24941",
        "chemblId": "CHEMBL301",
        "targetClass": "Kinase",
        "probability": 0.8536,
        "knownActives": "107 /  26"
      },
      {
        "target": "NAD-dependent protein deacylase sirtuin-6",
        "commonName": "SIRT6",
        "uniprotId": "Q8N6T7",
        "chemblId": "CHEMBL2163182",
        "targetClass": "Eraser",
        "probability": 0.8506,
        "knownActives": "4 /  2"
      },
      {
        "target": "METTL3/METTL14",
        "commonName": "N/A",
        "uniprotId": "Q86U44&Q9HCE5",
        "chemblId": "CHEMBL4106140",
        "targetClass": "Transferase",
        "probability": 0.8506,
        "knownActives": "2 /  2"
      },
      {
        "target": "Casein kinase II alpha'/ beta",
        "commonName": "N/A",
        "uniprotId": "P67870&P19784",
        "chemblId": "CHEMBL3883328",
        "targetClass": "Kinase",
        "probability": 0.8506,
        "knownActives": "3 /  1"
      },
      {
        "target": "ADP-ribosyl cyclase/cyclic ADP-ribose hydrolase 1",
        "commonName": "CD38",
        "uniprotId": "P28907",
        "chemblId": "CHEMBL4660",
        "targetClass": "Enzyme",
        "probability": 0.8506,
        "knownActives": "3 /  3"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.8288,
        "knownActives": "11 /  4"
      },
      {
        "target": "Beta-galactoside alpha-2,6-sialyltransferase 1",
        "commonName": "ST6GAL1",
        "uniprotId": "P15907",
        "chemblId": "CHEMBL3596075",
        "targetClass": "Transferase",
        "probability": 0.8273,
        "knownActives": "3 /  2"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.8231,
        "knownActives": "51 /  12"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.8113,
        "knownActives": "134 /  9"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.8103,
        "knownActives": "222 /  68"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.7923,
        "knownActives": "18 /  3"
      },
      {
        "target": "BDNF/NT-3 growth factors receptor",
        "commonName": "NTRK2",
        "uniprotId": "Q16620",
        "chemblId": "CHEMBL4898",
        "targetClass": "Kinase",
        "probability": 0.7912,
        "knownActives": "1 /  2"
      },
      {
        "target": "Plasminogen",
        "commonName": "PLG",
        "uniprotId": "P00747",
        "chemblId": "CHEMBL1801",
        "targetClass": "Protease",
        "probability": 0.7882,
        "knownActives": "11 /  7"
      },
      {
        "target": "Aurora kinase B",
        "commonName": "AURKB",
        "uniprotId": "Q96GD4",
        "chemblId": "CHEMBL2185",
        "targetClass": "Kinase",
        "probability": 0.7841,
        "knownActives": "19 /  6"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.7757,
        "knownActives": "133 /  37"
      },
      {
        "target": "Catenin beta-1",
        "commonName": "CTNNB1",
        "uniprotId": "P35222",
        "chemblId": "CHEMBL5866",
        "targetClass": "Unclassified protein",
        "probability": 0.7709,
        "knownActives": "4 /  3"
      }
    ]
  },
  {
    "id": "baicalin",
    "name": "Baicalin",
    "cid": 64982,
    "smiles": "O=C1C=C(c2ccccc2)Oc3c1c(O)c(O)c(O)c3OC4OC(C(=O)O)C(O)C(O)C4O",
    "category": "Flavone Glucuronide",
    "topTarget": "Lysine-specific histone demethylase 1A (KDM1A)",
    "topTargetUniprot": "O60341",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 21,
        "percentage": 21.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 13,
        "percentage": 13.0,
        "color": "#10B981"
      },
      {
        "label": "Protease",
        "count": 8,
        "percentage": 8.0,
        "color": "#F59E0B"
      },
      {
        "label": "Lyase",
        "count": 7,
        "percentage": 7.0,
        "color": "#EF4444"
      },
      {
        "label": "Unclassified protein",
        "count": 6,
        "percentage": 6.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Eraser",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Hydrolase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Enzyme",
        "count": 5,
        "percentage": 5.0,
        "color": "#6366F1"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 5,
        "percentage": 5.0,
        "color": "#14B8A6"
      },
      {
        "label": "Transferase",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Electrochemical transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#84CC16"
      },
      {
        "label": "Cytochrome P450",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Primary active transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Secreted protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Membrane receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Isomerase",
        "count": 1,
        "percentage": 1.0,
        "color": "#F59E0B"
      },
      {
        "label": "Phosphodiesterase",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Nuclear receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Reader",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Phosphatase",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      }
    ],
    "targets": [
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.9729,
        "knownActives": "183 /  9"
      },
      {
        "target": "Serine/threonine-protein kinase PLK1",
        "commonName": "PLK1",
        "uniprotId": "P53350",
        "chemblId": "CHEMBL3024",
        "targetClass": "Kinase",
        "probability": 0.9068,
        "knownActives": "41 /  5"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.7853,
        "knownActives": "162 /  60"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 0.5793,
        "knownActives": "176 /  28"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.4869,
        "knownActives": "113 /  17"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.4869,
        "knownActives": "80 /  12"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.4869,
        "knownActives": "553 /  17"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.4869,
        "knownActives": "422 /  54"
      },
      {
        "target": "2-5A-dependent ribonuclease",
        "commonName": "RNASEL",
        "uniprotId": "Q05823",
        "chemblId": "CHEMBL3575",
        "targetClass": "Hydrolase",
        "probability": 0.4569,
        "knownActives": "1 /  1"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 0.4569,
        "knownActives": "149 /  19"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.4569,
        "knownActives": "21 /  10"
      },
      {
        "target": "Protein disulfide-isomerase",
        "commonName": "P4HB",
        "uniprotId": "P07237",
        "chemblId": "CHEMBL5422",
        "targetClass": "Isomerase",
        "probability": 0.4569,
        "knownActives": "102 /  2"
      },
      {
        "target": "NADPH oxidase 4",
        "commonName": "NOX4",
        "uniprotId": "Q9NPH5",
        "chemblId": "CHEMBL1250375",
        "targetClass": "Oxidoreductase",
        "probability": 0.4554,
        "knownActives": "36 /  7"
      },
      {
        "target": "Alpha-2C adrenergic receptor",
        "commonName": "ADRA2C",
        "uniprotId": "P18825",
        "chemblId": "CHEMBL1916",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4554,
        "knownActives": "24 /  2"
      },
      {
        "target": "Ribosomal protein S6 kinase alpha-3",
        "commonName": "RPS6KA3",
        "uniprotId": "P51812",
        "chemblId": "CHEMBL2345",
        "targetClass": "Kinase",
        "probability": 0.4347,
        "knownActives": "49 /  26"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 0.4211,
        "knownActives": "138 /  5"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.4193,
        "knownActives": "161 /  119"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.4017,
        "knownActives": "24 /  1"
      },
      {
        "target": "Nicotinamide phosphoribosyltransferase",
        "commonName": "NAMPT",
        "uniprotId": "P43490",
        "chemblId": "CHEMBL1744525",
        "targetClass": "Enzyme",
        "probability": 0.3576,
        "knownActives": "5 /  1"
      },
      {
        "target": "Synaptojanin-2",
        "commonName": "SYNJ2",
        "uniprotId": "O15056",
        "chemblId": "CHEMBL4523129",
        "targetClass": "Hydrolase",
        "probability": 0.3396,
        "knownActives": "16 /  7"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.3358,
        "knownActives": "220 /  24"
      },
      {
        "target": "Tumor necrosis factor",
        "commonName": "TNF",
        "uniprotId": "P01375",
        "chemblId": "CHEMBL1825",
        "targetClass": "Secreted protein",
        "probability": 0.3293,
        "knownActives": "27 /  3"
      },
      {
        "target": "Interleukin-2",
        "commonName": "IL2",
        "uniprotId": "P60568",
        "chemblId": "CHEMBL5880",
        "targetClass": "Secreted protein",
        "probability": 0.324,
        "knownActives": "22 /  4"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.3041,
        "knownActives": "151 /  31"
      },
      {
        "target": "Neuromedin-U receptor 2",
        "commonName": "NMUR2",
        "uniprotId": "Q9GZQ4",
        "chemblId": "CHEMBL1075144",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2839,
        "knownActives": "2 /  1"
      },
      {
        "target": "Alpha-2A adrenergic receptor",
        "commonName": "ADRA2A",
        "uniprotId": "P08913",
        "chemblId": "CHEMBL1867",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2839,
        "knownActives": "47 /  1"
      },
      {
        "target": "Ribosomal protein S6 kinase alpha-1",
        "commonName": "RPS6KA1",
        "uniprotId": "Q15418",
        "chemblId": "CHEMBL2553",
        "targetClass": "Kinase",
        "probability": 0.2477,
        "knownActives": "13 /  3"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.2281,
        "knownActives": "74 /  2"
      },
      {
        "target": "Dipeptidyl peptidase 4",
        "commonName": "DPP4",
        "uniprotId": "P27487",
        "chemblId": "CHEMBL284",
        "targetClass": "Protease",
        "probability": 0.1466,
        "knownActives": "46 /  8"
      },
      {
        "target": "Cystathionine beta-synthase",
        "commonName": "CBS",
        "uniprotId": "P35520",
        "chemblId": "CHEMBL3399911",
        "targetClass": "Enzyme",
        "probability": 0.1326,
        "knownActives": "9 /  3"
      },
      {
        "target": "Beta-glucuronidase",
        "commonName": "GUSB",
        "uniprotId": "P08236",
        "chemblId": "CHEMBL2728",
        "targetClass": "Hydrolase",
        "probability": 0.1161,
        "knownActives": "49 /  2"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.093,
        "knownActives": "479 /  14"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.0876,
        "knownActives": "494 /  44"
      },
      {
        "target": "ADP-ribosyl cyclase/cyclic ADP-ribose hydrolase 1",
        "commonName": "CD38",
        "uniprotId": "P28907",
        "chemblId": "CHEMBL4660",
        "targetClass": "Enzyme",
        "probability": 0.0732,
        "knownActives": "6 /  3"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 0.072,
        "knownActives": "20 /  2"
      },
      {
        "target": "cGMP-specific 3',5'-cyclic phosphodiesterase",
        "commonName": "PDE5A",
        "uniprotId": "O76074",
        "chemblId": "CHEMBL1827",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0625,
        "knownActives": "107 /  16"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.0578,
        "knownActives": "350 /  53"
      },
      {
        "target": "Ribosomal protein S6 kinase alpha-6",
        "commonName": "RPS6KA6",
        "uniprotId": "Q9UK32",
        "chemblId": "CHEMBL4924",
        "targetClass": "Kinase",
        "probability": 0.0539,
        "knownActives": "6 /  2"
      },
      {
        "target": "Sclerostin",
        "commonName": "SOST",
        "uniprotId": "Q9BQB4",
        "chemblId": "CHEMBL3580487",
        "targetClass": "Unclassified protein",
        "probability": 0.0498,
        "knownActives": "5 /  1"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.0305,
        "knownActives": "365 /  29"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 0.0183,
        "knownActives": "59 /  109"
      },
      {
        "target": "Cyclin-dependent kinase 2",
        "commonName": "CDK2",
        "uniprotId": "P24941",
        "chemblId": "CHEMBL301",
        "targetClass": "Kinase",
        "probability": 0.0163,
        "knownActives": "229 /  19"
      },
      {
        "target": "CDK2/Cyclin A2",
        "commonName": "N/A",
        "uniprotId": "P24941&P20248",
        "chemblId": "CHEMBL3038469",
        "targetClass": "Kinase",
        "probability": 0.0154,
        "knownActives": "72 /  17"
      },
      {
        "target": "CDK9/cyclin T1",
        "commonName": "N/A",
        "uniprotId": "O60563&P50750",
        "chemblId": "CHEMBL2111389",
        "targetClass": "Kinase",
        "probability": 0.0154,
        "knownActives": "89 /  23"
      },
      {
        "target": "Aldehyde dehydrogenase, mitochondrial",
        "commonName": "ALDH2",
        "uniprotId": "P05091",
        "chemblId": "CHEMBL1935",
        "targetClass": "Oxidoreductase",
        "probability": 0.0141,
        "knownActives": "25 /  36"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.0105,
        "knownActives": "73 /  157"
      },
      {
        "target": "Cyclin-dependent kinase 9",
        "commonName": "CDK9",
        "uniprotId": "P50750",
        "chemblId": "CHEMBL3116",
        "targetClass": "Kinase",
        "probability": 0.0103,
        "knownActives": "17 /  9"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.01,
        "knownActives": "67 /  24"
      },
      {
        "target": "CDK8/Cyclin C",
        "commonName": "N/A",
        "uniprotId": "P49336&P24863",
        "chemblId": "CHEMBL3038474",
        "targetClass": "Kinase",
        "probability": 0.0094,
        "knownActives": "8 /  11"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.0089,
        "knownActives": "136 /  14"
      },
      {
        "target": "Maltase-glucoamylase",
        "commonName": "MGAM",
        "uniprotId": "O43451",
        "chemblId": "CHEMBL2074",
        "targetClass": "Hydrolase",
        "probability": 0.0087,
        "knownActives": "28 /  5"
      },
      {
        "target": "Lysine-specific demethylase 5A",
        "commonName": "KDM5A",
        "uniprotId": "P29375",
        "chemblId": "CHEMBL2424504",
        "targetClass": "Reader",
        "probability": 0.0085,
        "knownActives": "18 /  1"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 2",
        "commonName": "MKNK2",
        "uniprotId": "Q9HBH9",
        "chemblId": "CHEMBL4204",
        "targetClass": "Kinase",
        "probability": 0.0084,
        "knownActives": "35 /  6"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.008,
        "knownActives": "43 /  31"
      },
      {
        "target": "Solute carrier organic anion transporter family member 2B1",
        "commonName": "SLCO2B1",
        "uniprotId": "O94956",
        "chemblId": "CHEMBL1743124",
        "targetClass": "Electrochemical transporter",
        "probability": 0.008,
        "knownActives": "7 /  6"
      },
      {
        "target": "Plasminogen",
        "commonName": "PLG",
        "uniprotId": "P00747",
        "chemblId": "CHEMBL1801",
        "targetClass": "Protease",
        "probability": 0.0079,
        "knownActives": "68 /  4"
      },
      {
        "target": "Neutrophil elastase",
        "commonName": "ELANE",
        "uniprotId": "P08246",
        "chemblId": "CHEMBL248",
        "targetClass": "Protease",
        "probability": 0.0076,
        "knownActives": "36 /  23"
      },
      {
        "target": "Multidrug resistance-associated protein 1",
        "commonName": "ABCC1",
        "uniprotId": "P33527",
        "chemblId": "CHEMBL3004",
        "targetClass": "Primary active transporter",
        "probability": 0.0075,
        "knownActives": "14 /  81"
      },
      {
        "target": "Cytochrome P450 1A2",
        "commonName": "CYP1A2",
        "uniprotId": "P05177",
        "chemblId": "CHEMBL3356",
        "targetClass": "Cytochrome P450",
        "probability": 0.0067,
        "knownActives": "10 /  6"
      },
      {
        "target": "Mast/stem cell growth factor receptor Kit",
        "commonName": "KIT",
        "uniprotId": "P10721",
        "chemblId": "CHEMBL1936",
        "targetClass": "Kinase",
        "probability": 0.0066,
        "knownActives": "60 /  4"
      },
      {
        "target": "Sigma non-opioid intracellular receptor 1",
        "commonName": "SIGMAR1",
        "uniprotId": "Q99720",
        "chemblId": "CHEMBL287",
        "targetClass": "Membrane receptor",
        "probability": 0.0056,
        "knownActives": "63 /  76"
      },
      {
        "target": "Inositol hexakisphosphate kinase 2",
        "commonName": "IP6K2",
        "uniprotId": "Q9UHH9",
        "chemblId": "CHEMBL4523488",
        "targetClass": "Transferase",
        "probability": 0.0055,
        "knownActives": "9 /  10"
      },
      {
        "target": "Inositol polyphosphate multikinase",
        "commonName": "IPMK",
        "uniprotId": "Q8NFU5",
        "chemblId": "CHEMBL4523401",
        "targetClass": "Transferase",
        "probability": 0.0055,
        "knownActives": "5 /  6"
      },
      {
        "target": "Cytochrome P450 1A1",
        "commonName": "CYP1A1",
        "uniprotId": "P04798",
        "chemblId": "CHEMBL2231",
        "targetClass": "Cytochrome P450",
        "probability": 0.0052,
        "knownActives": "8 /  13"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.0052,
        "knownActives": "78 /  118"
      },
      {
        "target": "Troponin, cardiac muscle",
        "commonName": "N/A",
        "uniprotId": "P63316&P19429&P45379",
        "chemblId": "CHEMBL2095202",
        "targetClass": "Unclassified protein",
        "probability": 0.0048,
        "knownActives": "12 /  2"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0048,
        "knownActives": "219 /  3"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.0047,
        "knownActives": "208 /  24"
      },
      {
        "target": "Proto-oncogene tyrosine-protein kinase Src",
        "commonName": "SRC",
        "uniprotId": "P12931",
        "chemblId": "CHEMBL267",
        "targetClass": "Kinase",
        "probability": 0.0047,
        "knownActives": "294 /  11"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.0045,
        "knownActives": "187 /  17"
      },
      {
        "target": "Aldehyde dehydrogenase X, mitochondrial",
        "commonName": "ALDH1B1",
        "uniprotId": "P30837",
        "chemblId": "CHEMBL4881",
        "targetClass": "Oxidoreductase",
        "probability": 0.0043,
        "knownActives": "1 /  1"
      },
      {
        "target": "Retinal dehydrogenase 2",
        "commonName": "ALDH1A2",
        "uniprotId": "O94788",
        "chemblId": "CHEMBL3112384",
        "targetClass": "Oxidoreductase",
        "probability": 0.0043,
        "knownActives": "1 /  1"
      },
      {
        "target": "MUS81-ECE1",
        "commonName": "N/A",
        "uniprotId": "P42892&Q96NY9",
        "chemblId": "CHEMBL5465380",
        "targetClass": "Protease",
        "probability": 0.0042,
        "knownActives": "6 /  2"
      },
      {
        "target": "Solute carrier family 22 member 12",
        "commonName": "SLC22A12",
        "uniprotId": "Q96S37",
        "chemblId": "CHEMBL6120",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0042,
        "knownActives": "112 /  1"
      },
      {
        "target": "Alpha-ketoglutarate-dependent dioxygenase FTO",
        "commonName": "FTO",
        "uniprotId": "Q9C0B1",
        "chemblId": "CHEMBL2331065",
        "targetClass": "Oxidoreductase",
        "probability": 0.0041,
        "knownActives": "59 /  3"
      },
      {
        "target": "G-protein coupled receptor 35",
        "commonName": "GPR35",
        "uniprotId": "Q9HC97",
        "chemblId": "CHEMBL1293267",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0041,
        "knownActives": "29 /  5"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.0041,
        "knownActives": "274 /  4"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 0.004,
        "knownActives": "169 /  10"
      },
      {
        "target": "Receptor-type tyrosine-protein kinase FLT3",
        "commonName": "FLT3",
        "uniprotId": "P36888",
        "chemblId": "CHEMBL1974",
        "targetClass": "Kinase",
        "probability": 0.0039,
        "knownActives": "141 /  13"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.0039,
        "knownActives": "219 /  11"
      },
      {
        "target": "Fructose-1,6-bisphosphatase 1",
        "commonName": "FBP1",
        "uniprotId": "P09467",
        "chemblId": "CHEMBL3975",
        "targetClass": "Phosphatase",
        "probability": 0.0037,
        "knownActives": "201 /  1"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 1",
        "commonName": "MKNK1",
        "uniprotId": "Q9BUB5",
        "chemblId": "CHEMBL4718",
        "targetClass": "Kinase",
        "probability": 0.0036,
        "knownActives": "21 /  2"
      },
      {
        "target": "Sodium/glucose cotransporter 2",
        "commonName": "SLC5A2",
        "uniprotId": "P31639",
        "chemblId": "CHEMBL3884",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0035,
        "knownActives": "42 /  31"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit gamma isoform",
        "commonName": "PIK3CG",
        "uniprotId": "P48736",
        "chemblId": "CHEMBL3267",
        "targetClass": "Transferase",
        "probability": 0.0035,
        "knownActives": "140 /  1"
      },
      {
        "target": "Histone deacetylase 4",
        "commonName": "HDAC4",
        "uniprotId": "P56524",
        "chemblId": "CHEMBL3524",
        "targetClass": "Eraser",
        "probability": 0.0034,
        "knownActives": "16 /  2"
      },
      {
        "target": "beta-catenin-B-cell lymphoma 9 protein complex",
        "commonName": "N/A",
        "uniprotId": "P35222&O00512",
        "chemblId": "CHEMBL3885525",
        "targetClass": "Unclassified protein",
        "probability": 0.0032,
        "knownActives": "14 /  19"
      },
      {
        "target": "Catenin beta-1",
        "commonName": "CTNNB1",
        "uniprotId": "P35222",
        "chemblId": "CHEMBL5866",
        "targetClass": "Unclassified protein",
        "probability": 0.0032,
        "knownActives": "9 /  3"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 3",
        "commonName": "KCNA3",
        "uniprotId": "P22001",
        "chemblId": "CHEMBL4633",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0032,
        "knownActives": "11 /  19"
      },
      {
        "target": "ELAV-like protein 3",
        "commonName": "ELAVL3",
        "uniprotId": "Q14576",
        "chemblId": "CHEMBL4105924",
        "targetClass": "Unclassified protein",
        "probability": 0.0031,
        "knownActives": "5 /  3"
      },
      {
        "target": "Sodium/glucose cotransporter 1",
        "commonName": "SLC5A1",
        "uniprotId": "P13866",
        "chemblId": "CHEMBL4979",
        "targetClass": "Electrochemical transporter",
        "probability": 0.003,
        "knownActives": "26 /  20"
      },
      {
        "target": "6-phosphofructo-2-kinase/fructose-2,6-bisphosphatase 3",
        "commonName": "PFKFB3",
        "uniprotId": "Q16875",
        "chemblId": "CHEMBL2331053",
        "targetClass": "Enzyme",
        "probability": 0.003,
        "knownActives": "15 /  2"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.003,
        "knownActives": "135 /  5"
      },
      {
        "target": "Aurora kinase B",
        "commonName": "AURKB",
        "uniprotId": "Q96GD4",
        "chemblId": "CHEMBL2185",
        "targetClass": "Kinase",
        "probability": 0.003,
        "knownActives": "73 /  2"
      },
      {
        "target": "Insulin-like growth factor 1 receptor",
        "commonName": "IGF1R",
        "uniprotId": "P08069",
        "chemblId": "CHEMBL1957",
        "targetClass": "Kinase",
        "probability": 0.003,
        "knownActives": "53 /  2"
      },
      {
        "target": "Insulin receptor",
        "commonName": "INSR",
        "uniprotId": "P06213",
        "chemblId": "CHEMBL1981",
        "targetClass": "Kinase",
        "probability": 0.003,
        "knownActives": "24 /  1"
      },
      {
        "target": "72 kDa type IV collagenase",
        "commonName": "MMP2",
        "uniprotId": "P08253",
        "chemblId": "CHEMBL333",
        "targetClass": "Protease",
        "probability": 0.0029,
        "knownActives": "197 /  6"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 0.0029,
        "knownActives": "81 /  5"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.0028,
        "knownActives": "53 /  3"
      },
      {
        "target": "Stromelysin-1",
        "commonName": "MMP3",
        "uniprotId": "P08254",
        "chemblId": "CHEMBL283",
        "targetClass": "Protease",
        "probability": 0.0028,
        "knownActives": "58 /  1"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.0027,
        "knownActives": "123 /  11"
      }
    ]
  },
  {
    "id": "berberine",
    "name": "Berberine",
    "cid": 2353,
    "smiles": "COc1ccc2c(c1OC)C[N+]3=C(C2)c4cc5c(cc4C3)OCO5",
    "category": "Isoquinoline Alkaloid",
    "topTarget": "Acetylcholinesterase (ACHE)",
    "topTargetUniprot": "P22303",
    "targetClasses": [
      {
        "label": "Family A G protein-coupled receptor",
        "count": 38,
        "percentage": 38.0,
        "color": "#3B82F6"
      },
      {
        "label": "Eraser",
        "count": 5,
        "percentage": 5.0,
        "color": "#10B981"
      },
      {
        "label": "Oxidoreductase",
        "count": 5,
        "percentage": 5.0,
        "color": "#F59E0B"
      },
      {
        "label": "Kinase",
        "count": 5,
        "percentage": 5.0,
        "color": "#EF4444"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 5,
        "percentage": 5.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Hydrolase",
        "count": 4,
        "percentage": 4.0,
        "color": "#EC4899"
      },
      {
        "label": "Electrochemical transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Protease",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Nuclear receptor",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Membrane receptor",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Phosphodiesterase",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Lyase",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Primary active transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Transferase",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Surface antigen",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Family C G protein-coupled receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Cytochrome P450",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Reader",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      }
    ],
    "targets": [
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.1564,
        "knownActives": "2874 /  195"
      },
      {
        "target": "5-hydroxytryptamine receptor 7",
        "commonName": "HTR7",
        "uniprotId": "P34969",
        "chemblId": "CHEMBL3155",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1308,
        "knownActives": "2413 /  55"
      },
      {
        "target": "Muscarinic acetylcholine receptor M4",
        "commonName": "CHRM4",
        "uniprotId": "P08173",
        "chemblId": "CHEMBL1821",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1308,
        "knownActives": "648 /  14"
      },
      {
        "target": "Histone acetyltransferase p300",
        "commonName": "EP300",
        "uniprotId": "Q09472",
        "chemblId": "CHEMBL3784",
        "targetClass": "Writer",
        "probability": 0.1229,
        "knownActives": "428 /  3"
      },
      {
        "target": "D(1A) dopamine receptor",
        "commonName": "DRD1",
        "uniprotId": "P21728",
        "chemblId": "CHEMBL2056",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0761,
        "knownActives": "727 /  193"
      },
      {
        "target": "Sigma non-opioid intracellular receptor 1",
        "commonName": "SIGMAR1",
        "uniprotId": "Q99720",
        "chemblId": "CHEMBL287",
        "targetClass": "Membrane receptor",
        "probability": 0.0667,
        "knownActives": "1938 /  96"
      },
      {
        "target": "D(4) dopamine receptor",
        "commonName": "DRD4",
        "uniprotId": "P21917",
        "chemblId": "CHEMBL219",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0643,
        "knownActives": "2240 /  52"
      },
      {
        "target": "Voltage-gated inwardly rectifying potassium channel KCNH2",
        "commonName": "KCNH2",
        "uniprotId": "Q12809",
        "chemblId": "CHEMBL240",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0628,
        "knownActives": "4443 /  84"
      },
      {
        "target": "D(3) dopamine receptor",
        "commonName": "DRD3",
        "uniprotId": "P35462",
        "chemblId": "CHEMBL234",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0613,
        "knownActives": "3972 /  148"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0613,
        "knownActives": "6152 /  200"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0612,
        "knownActives": "4402 /  76"
      },
      {
        "target": "Tissue factor",
        "commonName": "F3",
        "uniprotId": "P13726",
        "chemblId": "CHEMBL4081",
        "targetClass": "Surface antigen",
        "probability": 0.0584,
        "knownActives": "71 /  21"
      },
      {
        "target": "D(1B) dopamine receptor",
        "commonName": "DRD5",
        "uniprotId": "P21918",
        "chemblId": "CHEMBL1850",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0545,
        "knownActives": "165 /  19"
      },
      {
        "target": "Alpha-1A adrenergic receptor",
        "commonName": "ADRA1A",
        "uniprotId": "P35348",
        "chemblId": "CHEMBL229",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0265,
        "knownActives": "1259 /  8"
      },
      {
        "target": "5-hydroxytryptamine receptor 2B",
        "commonName": "HTR2B",
        "uniprotId": "P41595",
        "chemblId": "CHEMBL1833",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0248,
        "knownActives": "1157 /  87"
      },
      {
        "target": "Alpha-1B adrenergic receptor",
        "commonName": "ADRA1B",
        "uniprotId": "P35368",
        "chemblId": "CHEMBL232",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0234,
        "knownActives": "1056 /  9"
      },
      {
        "target": "Alpha-1D adrenergic receptor",
        "commonName": "ADRA1D",
        "uniprotId": "P25100",
        "chemblId": "CHEMBL223",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0234,
        "knownActives": "966 /  8"
      },
      {
        "target": "Sigma intracellular receptor 2",
        "commonName": "TMEM97",
        "uniprotId": "Q5BJF2",
        "chemblId": "CHEMBL4105907",
        "targetClass": "Membrane receptor",
        "probability": 0.0227,
        "knownActives": "443 /  90"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.0199,
        "knownActives": "49 /  4"
      },
      {
        "target": "Nischarin",
        "commonName": "NISCH",
        "uniprotId": "Q9Y2I1",
        "chemblId": "CHEMBL3923",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0197,
        "knownActives": "91 /  7"
      },
      {
        "target": "5-hydroxytryptamine receptor 2A",
        "commonName": "HTR2A",
        "uniprotId": "P28223",
        "chemblId": "CHEMBL224",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0197,
        "knownActives": "4380 /  125"
      },
      {
        "target": "Alpha-2C adrenergic receptor",
        "commonName": "ADRA2C",
        "uniprotId": "P18825",
        "chemblId": "CHEMBL1916",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.019,
        "knownActives": "501 /  11"
      },
      {
        "target": "Alpha-2B adrenergic receptor",
        "commonName": "ADRA2B",
        "uniprotId": "P18089",
        "chemblId": "CHEMBL1942",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.019,
        "knownActives": "406 /  9"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.019,
        "knownActives": "2148 /  54"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.0183,
        "knownActives": "2331 /  44"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.0175,
        "knownActives": "808 /  53"
      },
      {
        "target": "Melanin-concentrating hormone receptor 1",
        "commonName": "MCHR1",
        "uniprotId": "Q99705",
        "chemblId": "CHEMBL344",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.016,
        "knownActives": "1641 /  66"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.0148,
        "knownActives": "1602 /  122"
      },
      {
        "target": "Sodium-dependent serotonin transporter",
        "commonName": "SLC6A4",
        "uniprotId": "P31645",
        "chemblId": "CHEMBL228",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0128,
        "knownActives": "4043 /  87"
      },
      {
        "target": "Protein O-GlcNAcase",
        "commonName": "OGA",
        "uniprotId": "O60502",
        "chemblId": "CHEMBL5921",
        "targetClass": "Hydrolase",
        "probability": 0.0125,
        "knownActives": "658 /  75"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0119,
        "knownActives": "2643 /  47"
      },
      {
        "target": "Orexin/Hypocretin receptor type 1",
        "commonName": "HCRTR1",
        "uniprotId": "O43613",
        "chemblId": "CHEMBL5113",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0116,
        "knownActives": "2606 /  46"
      },
      {
        "target": "Endothelin-1 receptor",
        "commonName": "EDNRA",
        "uniprotId": "P25101",
        "chemblId": "CHEMBL252",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0113,
        "knownActives": "963 /  65"
      },
      {
        "target": "Melatonin receptor type 1B",
        "commonName": "MTNR1B",
        "uniprotId": "P49286",
        "chemblId": "CHEMBL1946",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0107,
        "knownActives": "814 /  38"
      },
      {
        "target": "Angiotensin-converting enzyme 2",
        "commonName": "ACE2",
        "uniprotId": "Q9BYF1",
        "chemblId": "CHEMBL3736",
        "targetClass": "Protease",
        "probability": 0.0104,
        "knownActives": "66 /  1"
      },
      {
        "target": "Dihydrofolate reductase",
        "commonName": "DHFR",
        "uniprotId": "P00374",
        "chemblId": "CHEMBL202",
        "targetClass": "Oxidoreductase",
        "probability": 0.0095,
        "knownActives": "750 /  10"
      },
      {
        "target": "TGF-beta receptor type-1",
        "commonName": "TGFBR1",
        "uniprotId": "P36897",
        "chemblId": "CHEMBL4439",
        "targetClass": "Kinase",
        "probability": 0.0089,
        "knownActives": "1160 /  1"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0087,
        "knownActives": "2550 /  78"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0087,
        "knownActives": "843 /  17"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.0077,
        "knownActives": "1777 /  56"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.0072,
        "knownActives": "5381 /  71"
      },
      {
        "target": "5-hydroxytryptamine receptor 6",
        "commonName": "HTR6",
        "uniprotId": "P50406",
        "chemblId": "CHEMBL3371",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.007,
        "knownActives": "3201 /  21"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.0068,
        "knownActives": "1174 /  185"
      },
      {
        "target": "5-hydroxytryptamine receptor 5A",
        "commonName": "HTR5A",
        "uniprotId": "P47898",
        "chemblId": "CHEMBL3426",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0067,
        "knownActives": "201 /  5"
      },
      {
        "target": "5-hydroxytryptamine receptor 1D",
        "commonName": "HTR1D",
        "uniprotId": "P28221",
        "chemblId": "CHEMBL1983",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0067,
        "knownActives": "948 /  5"
      },
      {
        "target": "Beta-1 adrenergic receptor",
        "commonName": "ADRB1",
        "uniprotId": "P08588",
        "chemblId": "CHEMBL213",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0067,
        "knownActives": "403 /  19"
      },
      {
        "target": "5-hydroxytryptamine receptor 1B",
        "commonName": "HTR1B",
        "uniprotId": "P28222",
        "chemblId": "CHEMBL1898",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0065,
        "knownActives": "808 /  6"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.0065,
        "knownActives": "1949 /  46"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.0064,
        "knownActives": "3856 /  41"
      },
      {
        "target": "Prostaglandin E2 receptor EP4 subtype",
        "commonName": "PTGER4",
        "uniprotId": "P35408",
        "chemblId": "CHEMBL1836",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0064,
        "knownActives": "725 /  6"
      },
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0063,
        "knownActives": "863 /  11"
      },
      {
        "target": "Alpha-2A adrenergic receptor",
        "commonName": "ADRA2A",
        "uniprotId": "P08913",
        "chemblId": "CHEMBL1867",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0063,
        "knownActives": "649 /  8"
      },
      {
        "target": "T1R1/T1R3",
        "commonName": "N/A",
        "uniprotId": "Q7RTX0&Q7RTX1",
        "chemblId": "CHEMBL3832641",
        "targetClass": "Family C G protein-coupled receptor",
        "probability": 0.0062,
        "knownActives": "117 /  16"
      },
      {
        "target": "Tyrosyl-DNA phosphodiesterase 2",
        "commonName": "TDP2",
        "uniprotId": "O95551",
        "chemblId": "CHEMBL2169736",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0059,
        "knownActives": "72 /  3"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.0058,
        "knownActives": "196 /  7"
      },
      {
        "target": "Cytochrome P450 2D6",
        "commonName": "CYP2D6",
        "uniprotId": "P10635",
        "chemblId": "CHEMBL289",
        "targetClass": "Cytochrome P450",
        "probability": 0.0058,
        "knownActives": "190 /  1"
      },
      {
        "target": "Prostaglandin E2 receptor EP2 subtype",
        "commonName": "PTGER2",
        "uniprotId": "P43116",
        "chemblId": "CHEMBL1881",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0057,
        "knownActives": "353 /  4"
      },
      {
        "target": "Thromboxane A2 receptor",
        "commonName": "TBXA2R",
        "uniprotId": "P21731",
        "chemblId": "CHEMBL2069",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0057,
        "knownActives": "493 /  10"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.0056,
        "knownActives": "2414 /  29"
      },
      {
        "target": "Beta-3 adrenergic receptor",
        "commonName": "ADRB3",
        "uniprotId": "P13945",
        "chemblId": "CHEMBL246",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0054,
        "knownActives": "179 /  32"
      },
      {
        "target": "Beta-2 adrenergic receptor",
        "commonName": "ADRB2",
        "uniprotId": "P07550",
        "chemblId": "CHEMBL210",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0054,
        "knownActives": "379 /  31"
      },
      {
        "target": "Poly [ADP-ribose] polymerase 1",
        "commonName": "PARP1",
        "uniprotId": "P09874",
        "chemblId": "CHEMBL3105",
        "targetClass": "Transferase",
        "probability": 0.0053,
        "knownActives": "3205 /  7"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0053,
        "knownActives": "2796 /  65"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha4/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P43681",
        "chemblId": "CHEMBL1907589",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0052,
        "knownActives": "680 /  8"
      },
      {
        "target": "Small conductance calcium-activated potassium channel protein 3",
        "commonName": "KCNN3",
        "uniprotId": "Q9UGI6",
        "chemblId": "CHEMBL3381",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0052,
        "knownActives": "8 /  7"
      },
      {
        "target": "Small conductance calcium-activated potassium channel protein 2",
        "commonName": "KCNN2",
        "uniprotId": "Q9H2S1",
        "chemblId": "CHEMBL4469",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0052,
        "knownActives": "8 /  7"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.005,
        "knownActives": "635 /  22"
      },
      {
        "target": "Histamine H2 receptor",
        "commonName": "HRH2",
        "uniprotId": "P25021",
        "chemblId": "CHEMBL1941",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.005,
        "knownActives": "278 /  4"
      },
      {
        "target": "Serine/threonine-protein kinase PLK1",
        "commonName": "PLK1",
        "uniprotId": "P53350",
        "chemblId": "CHEMBL3024",
        "targetClass": "Kinase",
        "probability": 0.0049,
        "knownActives": "723 /  4"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0048,
        "knownActives": "788 /  51"
      },
      {
        "target": "Histone deacetylase 3",
        "commonName": "HDAC3",
        "uniprotId": "O15379",
        "chemblId": "CHEMBL1829",
        "targetClass": "Eraser",
        "probability": 0.0048,
        "knownActives": "1778 /  30"
      },
      {
        "target": "Orexin receptor type 2",
        "commonName": "HCRTR2",
        "uniprotId": "O43614",
        "chemblId": "CHEMBL4792",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0048,
        "knownActives": "3375 /  41"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.0047,
        "knownActives": "6177 /  51"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.0046,
        "knownActives": "1874 /  15"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0046,
        "knownActives": "357 /  4"
      },
      {
        "target": "Sclerostin",
        "commonName": "SOST",
        "uniprotId": "Q9BQB4",
        "chemblId": "CHEMBL3580487",
        "targetClass": "Unclassified protein",
        "probability": 0.0045,
        "knownActives": "5 /  4"
      },
      {
        "target": "Glutamate receptor 2",
        "commonName": "GRIA2",
        "uniprotId": "P42262",
        "chemblId": "CHEMBL4016",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0044,
        "knownActives": "66 /  1"
      },
      {
        "target": "Rho-associated protein kinase 2",
        "commonName": "ROCK2",
        "uniprotId": "O75116",
        "chemblId": "CHEMBL2973",
        "targetClass": "Kinase",
        "probability": 0.0043,
        "knownActives": "3607 /  42"
      },
      {
        "target": "Muscarinic acetylcholine receptor M1",
        "commonName": "CHRM1",
        "uniprotId": "P11229",
        "chemblId": "CHEMBL216",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0042,
        "knownActives": "1129 /  4"
      },
      {
        "target": "C-C chemokine receptor type 2",
        "commonName": "CCR2",
        "uniprotId": "P41597",
        "chemblId": "CHEMBL4015",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0042,
        "knownActives": "692 /  14"
      },
      {
        "target": "Platelet-activating factor receptor",
        "commonName": "PTAFR",
        "uniprotId": "P25105",
        "chemblId": "CHEMBL250",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0041,
        "knownActives": "178 /  6"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.0041,
        "knownActives": "540 /  27"
      },
      {
        "target": "Indoleamine 2,3-dioxygenase 1",
        "commonName": "IDO1",
        "uniprotId": "P14902",
        "chemblId": "CHEMBL4685",
        "targetClass": "Oxidoreductase",
        "probability": 0.004,
        "knownActives": "1349 /  4"
      },
      {
        "target": "Dipeptidyl peptidase 4",
        "commonName": "DPP4",
        "uniprotId": "P27487",
        "chemblId": "CHEMBL284",
        "targetClass": "Protease",
        "probability": 0.004,
        "knownActives": "3280 /  53"
      },
      {
        "target": "Spindlin-1",
        "commonName": "SPIN1",
        "uniprotId": "Q9Y657",
        "chemblId": "CHEMBL4523509",
        "targetClass": "Reader",
        "probability": 0.0039,
        "knownActives": "32 /  13"
      },
      {
        "target": "Macrophage migration inhibitory factor",
        "commonName": "MIF",
        "uniprotId": "P14174",
        "chemblId": "CHEMBL2085",
        "targetClass": "Enzyme",
        "probability": 0.0038,
        "knownActives": "38 /  2"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.0037,
        "knownActives": "193 /  8"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.0036,
        "knownActives": "840 /  22"
      },
      {
        "target": "X-box-binding protein 1",
        "commonName": "XBP1",
        "uniprotId": "P17861",
        "chemblId": "CHEMBL1741176",
        "targetClass": "Unclassified protein",
        "probability": 0.0036,
        "knownActives": "3 /  2"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P32297",
        "chemblId": "CHEMBL2109234",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0035,
        "knownActives": "36 /  1"
      },
      {
        "target": "Peroxisome proliferator-activated receptor alpha",
        "commonName": "PPARA",
        "uniprotId": "Q07869",
        "chemblId": "CHEMBL239",
        "targetClass": "Nuclear receptor",
        "probability": 0.0035,
        "knownActives": "1452 /  24"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.0035,
        "knownActives": "2473 /  38"
      },
      {
        "target": "cGMP-specific 3',5'-cyclic phosphodiesterase",
        "commonName": "PDE5A",
        "uniprotId": "O76074",
        "chemblId": "CHEMBL1827",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0034,
        "knownActives": "1383 /  75"
      },
      {
        "target": "Procathepsin L",
        "commonName": "CTSL",
        "uniprotId": "P07711",
        "chemblId": "CHEMBL3837",
        "targetClass": "Protease",
        "probability": 0.0034,
        "knownActives": "773 /  25"
      },
      {
        "target": "Nicotinamide phosphoribosyltransferase",
        "commonName": "NAMPT",
        "uniprotId": "P43490",
        "chemblId": "CHEMBL1744525",
        "targetClass": "Enzyme",
        "probability": 0.0033,
        "knownActives": "2112 /  10"
      },
      {
        "target": "Dihydroorotate dehydrogenase (quinone), mitochondrial",
        "commonName": "DHODH",
        "uniprotId": "Q02127",
        "chemblId": "CHEMBL1966",
        "targetClass": "Oxidoreductase",
        "probability": 0.0033,
        "knownActives": "1052 /  5"
      },
      {
        "target": "Mitogen-activated protein kinase 14",
        "commonName": "MAPK14",
        "uniprotId": "Q16539",
        "chemblId": "CHEMBL260",
        "targetClass": "Kinase",
        "probability": 0.0032,
        "knownActives": "2380 /  5"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.0032,
        "knownActives": "3620 /  75"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.0032,
        "knownActives": "3019 /  56"
      },
      {
        "target": "Multidrug and toxin extrusion protein 1",
        "commonName": "SLC47A1",
        "uniprotId": "Q96FL8",
        "chemblId": "CHEMBL1743126",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0032,
        "knownActives": "22 /  1"
      }
    ]
  },
  {
    "id": "bisdemethoxycurcumin",
    "name": "Bisdemethoxycurcumin",
    "cid": 5315472,
    "smiles": "O=C(/C=C/c1ccc(O)cc1)CC(=O)/C=C/c2ccc(O)cc2",
    "category": "Curcuminoid Polyphenol",
    "topTarget": "Toll-like receptor 9 (TLR9)",
    "topTargetUniprot": "Q9NR96",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 17,
        "percentage": 17.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 15,
        "percentage": 15.0,
        "color": "#10B981"
      },
      {
        "label": "Lyase",
        "count": 13,
        "percentage": 13.0,
        "color": "#F59E0B"
      },
      {
        "label": "Protease",
        "count": 12,
        "percentage": 12.0,
        "color": "#EF4444"
      },
      {
        "label": "Eraser",
        "count": 7,
        "percentage": 7.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Transcription factor",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Primary active transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Nuclear receptor",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Isomerase",
        "count": 3,
        "percentage": 3.0,
        "color": "#14B8A6"
      },
      {
        "label": "Unclassified protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Enzyme",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Writer",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Cytochrome P450",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Phosphatase",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 1,
        "percentage": 1.0,
        "color": "#F59E0B"
      },
      {
        "label": "Surface antigen",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Transferase",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Secreted protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      }
    ],
    "targets": [
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 1.0,
        "knownActives": "24 /  8"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 1.0,
        "knownActives": "258 /  125"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "325 /  17"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "611 /  257"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "152 /  19"
      },
      {
        "target": "Aldo-keto reductase family 1 member B10",
        "commonName": "AKR1B10",
        "uniprotId": "O60218",
        "chemblId": "CHEMBL5983",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "54 /  19"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.9712,
        "knownActives": "19 /  3"
      },
      {
        "target": "Transcription factor AP1",
        "commonName": "N/A",
        "uniprotId": "P05412&P01100",
        "chemblId": "CHEMBL2111421",
        "targetClass": "Transcription factor",
        "probability": 0.8878,
        "knownActives": "3 /  3"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.8824,
        "knownActives": "243 /  12"
      },
      {
        "target": "Tissue factor",
        "commonName": "F3",
        "uniprotId": "P13726",
        "chemblId": "CHEMBL4081",
        "targetClass": "Surface antigen",
        "probability": 0.8824,
        "knownActives": "55 /  10"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.8663,
        "knownActives": "396 /  6"
      },
      {
        "target": "Nuclear factor NF-kappa-B p105 subunit",
        "commonName": "NFKB1",
        "uniprotId": "P19838",
        "chemblId": "CHEMBL3251",
        "targetClass": "Transcription factor",
        "probability": 0.8663,
        "knownActives": "9 /  11"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.8663,
        "knownActives": "6 /  8"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.8604,
        "knownActives": "315 /  78"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.8604,
        "knownActives": "132 /  23"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 0.8525,
        "knownActives": "170 /  64"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1B",
        "commonName": "DYRK1B",
        "uniprotId": "Q9Y463",
        "chemblId": "CHEMBL5543",
        "targetClass": "Kinase",
        "probability": 0.8448,
        "knownActives": "87 /  8"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 2",
        "commonName": "DYRK2",
        "uniprotId": "Q92630",
        "chemblId": "CHEMBL4376",
        "targetClass": "Kinase",
        "probability": 0.8448,
        "knownActives": "62 /  8"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.8448,
        "knownActives": "176 /  9"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.8441,
        "knownActives": "117 /  64"
      },
      {
        "target": "Histone acetyltransferase p300",
        "commonName": "EP300",
        "uniprotId": "Q09472",
        "chemblId": "CHEMBL3784",
        "targetClass": "Writer",
        "probability": 0.8441,
        "knownActives": "56 /  15"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.8396,
        "knownActives": "293 /  112"
      },
      {
        "target": "Collagenase 3",
        "commonName": "MMP13",
        "uniprotId": "P45452",
        "chemblId": "CHEMBL280",
        "targetClass": "Protease",
        "probability": 0.8393,
        "knownActives": "82 /  4"
      },
      {
        "target": "Microtubule-associated protein tau",
        "commonName": "MAPT",
        "uniprotId": "P10636",
        "chemblId": "CHEMBL1293224",
        "targetClass": "Other cytosolic protein",
        "probability": 0.8388,
        "knownActives": "51 /  22"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.835,
        "knownActives": "533 /  132"
      },
      {
        "target": "Nuclear factor erythroid 2-related factor 2",
        "commonName": "NFE2L2",
        "uniprotId": "Q16236",
        "chemblId": "CHEMBL1075094",
        "targetClass": "Transcription factor",
        "probability": 0.8279,
        "knownActives": "11 /  32"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.8279,
        "knownActives": "124 /  83"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 0.8279,
        "knownActives": "109 /  31"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 0.8239,
        "knownActives": "21 /  18"
      },
      {
        "target": "CDGSH iron-sulfur domain-containing protein 1",
        "commonName": "CISD1",
        "uniprotId": "Q9NZ45",
        "chemblId": "CHEMBL1795168",
        "targetClass": "Unclassified protein",
        "probability": 0.8239,
        "knownActives": "24 /  6"
      },
      {
        "target": "Dual specificity protein kinase CLK4",
        "commonName": "CLK4",
        "uniprotId": "Q9HAZ1",
        "chemblId": "CHEMBL4203",
        "targetClass": "Kinase",
        "probability": 0.8239,
        "knownActives": "31 /  1"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 3",
        "commonName": "ATP2A3",
        "uniprotId": "Q93084",
        "chemblId": "CHEMBL2401",
        "targetClass": "Primary active transporter",
        "probability": 0.8239,
        "knownActives": "3 /  1"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 0.8239,
        "knownActives": "20 /  10"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.8239,
        "knownActives": "518 /  56"
      },
      {
        "target": "Lactoylglutathione lyase",
        "commonName": "GLO1",
        "uniprotId": "Q04760",
        "chemblId": "CHEMBL2424",
        "targetClass": "Lyase",
        "probability": 0.8239,
        "knownActives": "31 /  8"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.8239,
        "knownActives": "105 /  10"
      },
      {
        "target": "Dual specificity protein kinase CLK1",
        "commonName": "CLK1",
        "uniprotId": "P49759",
        "chemblId": "CHEMBL4224",
        "targetClass": "Kinase",
        "probability": 0.8239,
        "knownActives": "73 /  4"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.8239,
        "knownActives": "90 /  26"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 0.8239,
        "knownActives": "55 /  18"
      },
      {
        "target": "Nitric oxide synthase, inducible",
        "commonName": "NOS2",
        "uniprotId": "P35228",
        "chemblId": "CHEMBL4481",
        "targetClass": "Enzyme",
        "probability": 0.8239,
        "knownActives": "8 /  1"
      },
      {
        "target": "Glutathione S-transferase Mu 2",
        "commonName": "GSTM2",
        "uniprotId": "P28161",
        "chemblId": "CHEMBL4589",
        "targetClass": "Transferase",
        "probability": 0.8239,
        "knownActives": "1 /  1"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.8239,
        "knownActives": "31 /  20"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.8239,
        "knownActives": "71 /  16"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 2",
        "commonName": "ATP2A2",
        "uniprotId": "P16615",
        "chemblId": "CHEMBL3901",
        "targetClass": "Primary active transporter",
        "probability": 0.8239,
        "knownActives": "3 /  1"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.8239,
        "knownActives": "107 /  12"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.8239,
        "knownActives": "117 /  17"
      },
      {
        "target": "HSP60/HSP10",
        "commonName": "N/A",
        "uniprotId": "P10809&P61604",
        "chemblId": "CHEMBL4106131",
        "targetClass": "Unclassified protein",
        "probability": 0.8239,
        "knownActives": "20 /  3"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.8239,
        "knownActives": "611 /  40"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.8239,
        "knownActives": "526 /  46"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.8239,
        "knownActives": "580 /  79"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.8239,
        "knownActives": "210 /  36"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 3",
        "commonName": "DYRK3",
        "uniprotId": "O43781",
        "chemblId": "CHEMBL4575",
        "targetClass": "Kinase",
        "probability": 0.8239,
        "knownActives": "27 /  1"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.8239,
        "knownActives": "431 /  50"
      },
      {
        "target": "Islet amyloid polypeptide",
        "commonName": "IAPP",
        "uniprotId": "P10997",
        "chemblId": "CHEMBL1914266",
        "targetClass": "Secreted protein",
        "probability": 0.822,
        "knownActives": "16 /  11"
      },
      {
        "target": "Tyrosine-protein kinase ABL1",
        "commonName": "ABL1",
        "uniprotId": "P00519",
        "chemblId": "CHEMBL1862",
        "targetClass": "Kinase",
        "probability": 0.6539,
        "knownActives": "187 /  1"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.6464,
        "knownActives": "2372 /  364"
      },
      {
        "target": "DNA topoisomerase 2-alpha",
        "commonName": "TOP2A",
        "uniprotId": "P11388",
        "chemblId": "CHEMBL1806",
        "targetClass": "Isomerase",
        "probability": 0.5948,
        "knownActives": "44 /  20"
      },
      {
        "target": "Inhibitor of NF-kappa-B kinase (IKK)",
        "commonName": "N/A",
        "uniprotId": "O14920&O15111&Q9Y6K9",
        "chemblId": "CHEMBL2111328",
        "targetClass": "Kinase",
        "probability": 0.4905,
        "knownActives": "2 /  3"
      },
      {
        "target": "Proto-oncogene tyrosine-protein kinase Src",
        "commonName": "SRC",
        "uniprotId": "P12931",
        "chemblId": "CHEMBL267",
        "targetClass": "Kinase",
        "probability": 0.4786,
        "knownActives": "504 /  9"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.4204,
        "knownActives": "309 /  19"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.3922,
        "knownActives": "317 /  145"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.3755,
        "knownActives": "276 /  8"
      },
      {
        "target": "Eukaryotic elongation factor 2 kinase",
        "commonName": "EEF2K",
        "uniprotId": "O00418",
        "chemblId": "CHEMBL5026",
        "targetClass": "Kinase",
        "probability": 0.3745,
        "knownActives": "4 /  4"
      },
      {
        "target": "Histone deacetylase 8",
        "commonName": "HDAC8",
        "uniprotId": "Q9BY41",
        "chemblId": "CHEMBL3192",
        "targetClass": "Eraser",
        "probability": 0.3449,
        "knownActives": "139 /  8"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.3449,
        "knownActives": "107 /  15"
      },
      {
        "target": "RAC-alpha serine/threonine-protein kinase",
        "commonName": "AKT1",
        "uniprotId": "P31749",
        "chemblId": "CHEMBL4282",
        "targetClass": "Kinase",
        "probability": 0.2609,
        "knownActives": "150 /  4"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.2402,
        "knownActives": "1509 /  142"
      },
      {
        "target": "Neutrophil elastase",
        "commonName": "ELANE",
        "uniprotId": "P08246",
        "chemblId": "CHEMBL248",
        "targetClass": "Protease",
        "probability": 0.2013,
        "knownActives": "58 /  14"
      },
      {
        "target": "1-phosphatidylinositol 4,5-bisphosphate phosphodiesterase gamma-1",
        "commonName": "PLCG1",
        "uniprotId": "P19174",
        "chemblId": "CHEMBL3964",
        "targetClass": "Enzyme",
        "probability": 0.1992,
        "knownActives": "3 /  1"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.1545,
        "knownActives": "328 /  12"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 3",
        "commonName": "HSD17B3",
        "uniprotId": "P37058",
        "chemblId": "CHEMBL4234",
        "targetClass": "Oxidoreductase",
        "probability": 0.1489,
        "knownActives": "98 /  9"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.1181,
        "knownActives": "662 /  81"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.1084,
        "knownActives": "62 /  25"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.1084,
        "knownActives": "33 /  23"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.0919,
        "knownActives": "119 /  4"
      },
      {
        "target": "Protein arginine N-methyltransferase 1",
        "commonName": "PRMT1",
        "uniprotId": "Q99873",
        "chemblId": "CHEMBL5524",
        "targetClass": "Writer",
        "probability": 0.0848,
        "knownActives": "16 /  1"
      },
      {
        "target": "Carbonic anhydrase 3",
        "commonName": "CA3",
        "uniprotId": "P07451",
        "chemblId": "CHEMBL2885",
        "targetClass": "Lyase",
        "probability": 0.0819,
        "knownActives": "11 /  5"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 0.0812,
        "knownActives": "156 /  13"
      },
      {
        "target": "Histone deacetylase 3",
        "commonName": "HDAC3",
        "uniprotId": "O15379",
        "chemblId": "CHEMBL1829",
        "targetClass": "Eraser",
        "probability": 0.0809,
        "knownActives": "106 /  5"
      },
      {
        "target": "Progesterone receptor",
        "commonName": "PGR",
        "uniprotId": "P06401",
        "chemblId": "CHEMBL208",
        "targetClass": "Nuclear receptor",
        "probability": 0.0802,
        "knownActives": "97 /  6"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.0772,
        "knownActives": "273 /  5"
      },
      {
        "target": "Urokinase-type plasminogen activator",
        "commonName": "PLAU",
        "uniprotId": "P00749",
        "chemblId": "CHEMBL3286",
        "targetClass": "Protease",
        "probability": 0.0769,
        "knownActives": "100 /  3"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 0.0749,
        "knownActives": "76 /  102"
      },
      {
        "target": "Steroid hormone receptor ERR2",
        "commonName": "ESRRB",
        "uniprotId": "O95718",
        "chemblId": "CHEMBL3751",
        "targetClass": "Nuclear receptor",
        "probability": 0.0682,
        "knownActives": "79 /  52"
      },
      {
        "target": "Tissue-type plasminogen activator",
        "commonName": "PLAT",
        "uniprotId": "P00750",
        "chemblId": "CHEMBL1873",
        "targetClass": "Protease",
        "probability": 0.0637,
        "knownActives": "48 /  1"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 1",
        "commonName": "HSD17B1",
        "uniprotId": "P14061",
        "chemblId": "CHEMBL3181",
        "targetClass": "Oxidoreductase",
        "probability": 0.0606,
        "knownActives": "450 /  3"
      },
      {
        "target": "M-phase inducer phosphatase 2",
        "commonName": "CDC25B",
        "uniprotId": "P30305",
        "chemblId": "CHEMBL4804",
        "targetClass": "Phosphatase",
        "probability": 0.0588,
        "knownActives": "104 /  6"
      },
      {
        "target": "Aldehyde dehydrogenase, mitochondrial",
        "commonName": "ALDH2",
        "uniprotId": "P05091",
        "chemblId": "CHEMBL1935",
        "targetClass": "Oxidoreductase",
        "probability": 0.0552,
        "knownActives": "40 /  2"
      },
      {
        "target": "Dipeptidyl peptidase 4",
        "commonName": "DPP4",
        "uniprotId": "P27487",
        "chemblId": "CHEMBL284",
        "targetClass": "Protease",
        "probability": 0.0522,
        "knownActives": "61 /  7"
      },
      {
        "target": "72 kDa type IV collagenase",
        "commonName": "MMP2",
        "uniprotId": "P08253",
        "chemblId": "CHEMBL333",
        "targetClass": "Protease",
        "probability": 0.0487,
        "knownActives": "232 /  65"
      },
      {
        "target": "Interstitial collagenase",
        "commonName": "MMP1",
        "uniprotId": "P03956",
        "chemblId": "CHEMBL332",
        "targetClass": "Protease",
        "probability": 0.0487,
        "knownActives": "166 /  60"
      },
      {
        "target": "Lysine-specific demethylase 5B",
        "commonName": "KDM5B",
        "uniprotId": "Q9UGL1",
        "chemblId": "CHEMBL3774295",
        "targetClass": "Eraser",
        "probability": 0.0469,
        "knownActives": "19 /  1"
      },
      {
        "target": "Cathepsin B",
        "commonName": "CTSB",
        "uniprotId": "P07858",
        "chemblId": "CHEMBL4072",
        "targetClass": "Protease",
        "probability": 0.0444,
        "knownActives": "23 /  4"
      },
      {
        "target": "Fibroblast growth factor receptor 1",
        "commonName": "FGFR1",
        "uniprotId": "P11362",
        "chemblId": "CHEMBL3650",
        "targetClass": "Kinase",
        "probability": 0.0439,
        "knownActives": "341 /  7"
      },
      {
        "target": "Coagulation factor X",
        "commonName": "F10",
        "uniprotId": "P00742",
        "chemblId": "CHEMBL244",
        "targetClass": "Protease",
        "probability": 0.0411,
        "knownActives": "280 /  33"
      },
      {
        "target": "Prothrombin",
        "commonName": "F2",
        "uniprotId": "P00734",
        "chemblId": "CHEMBL204",
        "targetClass": "Protease",
        "probability": 0.0396,
        "knownActives": "217 /  33"
      },
      {
        "target": "Macrophage migration inhibitory factor",
        "commonName": "MIF",
        "uniprotId": "P14174",
        "chemblId": "CHEMBL2085",
        "targetClass": "Enzyme",
        "probability": 0.0392,
        "knownActives": "150 /  13"
      },
      {
        "target": "Glutathione reductase, mitochondrial",
        "commonName": "GSR",
        "uniprotId": "P00390",
        "chemblId": "CHEMBL2755",
        "targetClass": "Oxidoreductase",
        "probability": 0.0353,
        "knownActives": "4 /  5"
      },
      {
        "target": "Protein disulfide-isomerase",
        "commonName": "P4HB",
        "uniprotId": "P07237",
        "chemblId": "CHEMBL5422",
        "targetClass": "Isomerase",
        "probability": 0.0334,
        "knownActives": "135 /  29"
      },
      {
        "target": "Adenosine receptor A1",
        "commonName": "ADORA1",
        "uniprotId": "P30542",
        "chemblId": "CHEMBL226",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0323,
        "knownActives": "145 /  2"
      }
    ]
  },
  {
    "id": "boeravinone_b",
    "name": "Boeravinone B",
    "cid": 5318767,
    "smiles": "COc1cc2c(cc1O)c(=O)c3c(o2)cc(c(c3)OC)O",
    "category": "Rotenoid Isoflavonoid",
    "topTarget": "Prostaglandin G/H synthase 2 (PTGS2)",
    "topTargetUniprot": "P35354",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 36,
        "percentage": 36.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 16,
        "percentage": 16.0,
        "color": "#10B981"
      },
      {
        "label": "Lyase",
        "count": 12,
        "percentage": 12.0,
        "color": "#F59E0B"
      },
      {
        "label": "Enzyme",
        "count": 4,
        "percentage": 4.0,
        "color": "#EF4444"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 4,
        "percentage": 4.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 4,
        "percentage": 4.0,
        "color": "#EC4899"
      },
      {
        "label": "Cytochrome P450",
        "count": 3,
        "percentage": 3.0,
        "color": "#06B6D4"
      },
      {
        "label": "Eraser",
        "count": 3,
        "percentage": 3.0,
        "color": "#6366F1"
      },
      {
        "label": "Other cytosolic protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#14B8A6"
      },
      {
        "label": "Hydrolase",
        "count": 2,
        "percentage": 2.0,
        "color": "#F97316"
      },
      {
        "label": "Nuclear receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#84CC16"
      },
      {
        "label": "Primary active transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Phosphatase",
        "count": 1,
        "percentage": 1.0,
        "color": "#64748B"
      },
      {
        "label": "Transcription factor",
        "count": 1,
        "percentage": 1.0,
        "color": "#3B82F6"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 1,
        "percentage": 1.0,
        "color": "#10B981"
      },
      {
        "label": "Unclassified protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#F59E0B"
      },
      {
        "label": "Electrochemical transporter",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Secreted protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Other ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Transferase",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Protease",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      }
    ],
    "targets": [
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.992,
        "knownActives": "177 /  15"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.9856,
        "knownActives": "120 /  31"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.9411,
        "knownActives": "224 /  164"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.7413,
        "knownActives": "462 /  20"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.7161,
        "knownActives": "214 /  33"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.7049,
        "knownActives": "397 /  149"
      },
      {
        "target": "Maltase-glucoamylase",
        "commonName": "MGAM",
        "uniprotId": "O43451",
        "chemblId": "CHEMBL2074",
        "targetClass": "Hydrolase",
        "probability": 0.7014,
        "knownActives": "27 /  6"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.6695,
        "knownActives": "460 /  143"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.6541,
        "knownActives": "174 /  259"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.65,
        "knownActives": "106 /  56"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 0.6048,
        "knownActives": "19 /  17"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.4672,
        "knownActives": "400 /  51"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.466,
        "knownActives": "78 /  45"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.4239,
        "knownActives": "445 /  71"
      },
      {
        "target": "Carbonyl reductase [NADPH] 1",
        "commonName": "CBR1",
        "uniprotId": "P16152",
        "chemblId": "CHEMBL5586",
        "targetClass": "Oxidoreductase",
        "probability": 0.4104,
        "knownActives": "20 /  3"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.3752,
        "knownActives": "86 /  16"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.3752,
        "knownActives": "35 /  30"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.3752,
        "knownActives": "35 /  10"
      },
      {
        "target": "Cyclin-dependent kinase 5/CDK5 activator 1",
        "commonName": "N/A",
        "uniprotId": "Q00535&Q15078",
        "chemblId": "CHEMBL1907600",
        "targetClass": "Kinase",
        "probability": 0.3732,
        "knownActives": "161 /  12"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.3537,
        "knownActives": "391 /  33"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 0.278,
        "knownActives": "20 /  29"
      },
      {
        "target": "Pyruvate kinase PKLR",
        "commonName": "PKLR",
        "uniprotId": "P30613",
        "chemblId": "CHEMBL1075126",
        "targetClass": "Enzyme",
        "probability": 0.276,
        "knownActives": "28 /  3"
      },
      {
        "target": "Transcription factor p65",
        "commonName": "RELA",
        "uniprotId": "Q04206",
        "chemblId": "CHEMBL5533",
        "targetClass": "Transcription factor",
        "probability": 0.2696,
        "knownActives": "12 /  4"
      },
      {
        "target": "Aurora kinase B",
        "commonName": "AURKB",
        "uniprotId": "Q96GD4",
        "chemblId": "CHEMBL2185",
        "targetClass": "Kinase",
        "probability": 0.2589,
        "knownActives": "72 /  5"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 0.2589,
        "knownActives": "166 /  10"
      },
      {
        "target": "Phosphoglycerate mutase 1",
        "commonName": "PGAM1",
        "uniprotId": "P18669",
        "chemblId": "CHEMBL3334418",
        "targetClass": "Enzyme",
        "probability": 0.2462,
        "knownActives": "59 /  21"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 0.2417,
        "knownActives": "171 /  23"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1B",
        "commonName": "DYRK1B",
        "uniprotId": "Q9Y463",
        "chemblId": "CHEMBL5543",
        "targetClass": "Kinase",
        "probability": 0.2314,
        "knownActives": "66 /  1"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.2314,
        "knownActives": "112 /  7"
      },
      {
        "target": "Dual specificity protein kinase CLK1",
        "commonName": "CLK1",
        "uniprotId": "P49759",
        "chemblId": "CHEMBL4224",
        "targetClass": "Kinase",
        "probability": 0.2314,
        "knownActives": "53 /  3"
      },
      {
        "target": "Dual specificity protein kinase CLK4",
        "commonName": "CLK4",
        "uniprotId": "Q9HAZ1",
        "chemblId": "CHEMBL4203",
        "targetClass": "Kinase",
        "probability": 0.2265,
        "knownActives": "25 /  1"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 2",
        "commonName": "DYRK2",
        "uniprotId": "Q92630",
        "chemblId": "CHEMBL4376",
        "targetClass": "Kinase",
        "probability": 0.2265,
        "knownActives": "49 /  1"
      },
      {
        "target": "Dual specificity protein kinase CLK3",
        "commonName": "CLK3",
        "uniprotId": "P49761",
        "chemblId": "CHEMBL4226",
        "targetClass": "Kinase",
        "probability": 0.2265,
        "knownActives": "22 /  1"
      },
      {
        "target": "Dual specificity protein kinase CLK2",
        "commonName": "CLK2",
        "uniprotId": "P49760",
        "chemblId": "CHEMBL4225",
        "targetClass": "Kinase",
        "probability": 0.2265,
        "knownActives": "30 /  2"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.2264,
        "knownActives": "937 /  77"
      },
      {
        "target": "Insulin-like growth factor 1 receptor",
        "commonName": "IGF1R",
        "uniprotId": "P08069",
        "chemblId": "CHEMBL1957",
        "targetClass": "Kinase",
        "probability": 0.2237,
        "knownActives": "50 /  3"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.2144,
        "knownActives": "429 /  431"
      },
      {
        "target": "Cytochrome P450 1A1",
        "commonName": "CYP1A1",
        "uniprotId": "P04798",
        "chemblId": "CHEMBL2231",
        "targetClass": "Cytochrome P450",
        "probability": 0.2063,
        "knownActives": "8 /  22"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.1843,
        "knownActives": "1108 /  57"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 3",
        "commonName": "KCNA3",
        "uniprotId": "P22001",
        "chemblId": "CHEMBL4633",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.1698,
        "knownActives": "11 /  77"
      },
      {
        "target": "Hepatocyte growth factor receptor",
        "commonName": "MET",
        "uniprotId": "P08581",
        "chemblId": "CHEMBL3717",
        "targetClass": "Kinase",
        "probability": 0.1624,
        "knownActives": "186 /  3"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.1615,
        "knownActives": "144 /  19"
      },
      {
        "target": "Glucose-6-phosphate 1-dehydrogenase",
        "commonName": "G6PD",
        "uniprotId": "P11413",
        "chemblId": "CHEMBL5347",
        "targetClass": "Oxidoreductase",
        "probability": 0.1532,
        "knownActives": "3 /  1"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.1501,
        "knownActives": "427 /  12"
      },
      {
        "target": "L-lactate dehydrogenase A chain",
        "commonName": "LDHA",
        "uniprotId": "P00338",
        "chemblId": "CHEMBL4835",
        "targetClass": "Oxidoreductase",
        "probability": 0.1362,
        "knownActives": "31 /  2"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 5",
        "commonName": "KCNA5",
        "uniprotId": "P22460",
        "chemblId": "CHEMBL4306",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.1359,
        "knownActives": "9 /  34"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.1308,
        "knownActives": "14 /  2"
      },
      {
        "target": "Lysine-specific demethylase 5B",
        "commonName": "KDM5B",
        "uniprotId": "Q9UGL1",
        "chemblId": "CHEMBL3774295",
        "targetClass": "Eraser",
        "probability": 0.1305,
        "knownActives": "20 /  1"
      },
      {
        "target": "Polycomb protein EED",
        "commonName": "EED",
        "uniprotId": "O75530",
        "chemblId": "CHEMBL2189117",
        "targetClass": "Unclassified protein",
        "probability": 0.1238,
        "knownActives": "1 /  1"
      },
      {
        "target": "Receptor-type tyrosine-protein kinase FLT3",
        "commonName": "FLT3",
        "uniprotId": "P36888",
        "chemblId": "CHEMBL1974",
        "targetClass": "Kinase",
        "probability": 0.1232,
        "knownActives": "141 /  13"
      },
      {
        "target": "Solute carrier organic anion transporter family member 2B1",
        "commonName": "SLCO2B1",
        "uniprotId": "O94956",
        "chemblId": "CHEMBL1743124",
        "targetClass": "Electrochemical transporter",
        "probability": 0.1232,
        "knownActives": "7 /  6"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.1173,
        "knownActives": "524 /  57"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 0.1158,
        "knownActives": "69 /  107"
      },
      {
        "target": "ALK tyrosine kinase receptor",
        "commonName": "ALK",
        "uniprotId": "Q9UM73",
        "chemblId": "CHEMBL4247",
        "targetClass": "Kinase",
        "probability": 0.1073,
        "knownActives": "38 /  2"
      },
      {
        "target": "Calcium-activated potassium channel subunit alpha-1",
        "commonName": "KCNMA1",
        "uniprotId": "Q12791",
        "chemblId": "CHEMBL4304",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.1014,
        "knownActives": "29 /  1"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 2",
        "commonName": "MKNK2",
        "uniprotId": "Q9HBH9",
        "chemblId": "CHEMBL4204",
        "targetClass": "Kinase",
        "probability": 0.1002,
        "knownActives": "34 /  6"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 1",
        "commonName": "MKNK1",
        "uniprotId": "Q9BUB5",
        "chemblId": "CHEMBL4718",
        "targetClass": "Kinase",
        "probability": 0.1002,
        "knownActives": "22 /  2"
      },
      {
        "target": "Serine/threonine-protein kinase PLK1",
        "commonName": "PLK1",
        "uniprotId": "P53350",
        "chemblId": "CHEMBL3024",
        "targetClass": "Kinase",
        "probability": 0.0953,
        "knownActives": "46 /  4"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.0935,
        "knownActives": "69 /  9"
      },
      {
        "target": "Proto-oncogene tyrosine-protein kinase Src",
        "commonName": "SRC",
        "uniprotId": "P12931",
        "chemblId": "CHEMBL267",
        "targetClass": "Kinase",
        "probability": 0.0872,
        "knownActives": "289 /  2"
      },
      {
        "target": "Insulin receptor",
        "commonName": "INSR",
        "uniprotId": "P06213",
        "chemblId": "CHEMBL1981",
        "targetClass": "Kinase",
        "probability": 0.0872,
        "knownActives": "22 /  2"
      },
      {
        "target": "Tyrosine-protein kinase receptor UFO",
        "commonName": "AXL",
        "uniprotId": "P30530",
        "chemblId": "CHEMBL4895",
        "targetClass": "Kinase",
        "probability": 0.0854,
        "knownActives": "10 /  2"
      },
      {
        "target": "Aldo-keto reductase family 1 member C3",
        "commonName": "AKR1C3",
        "uniprotId": "P42330",
        "chemblId": "CHEMBL4681",
        "targetClass": "Oxidoreductase",
        "probability": 0.085,
        "knownActives": "82 /  2"
      },
      {
        "target": "Casein kinase II subunit alpha",
        "commonName": "CSNK2A1",
        "uniprotId": "P68400",
        "chemblId": "CHEMBL3629",
        "targetClass": "Kinase",
        "probability": 0.0826,
        "knownActives": "40 /  8"
      },
      {
        "target": "Carbonic anhydrase 3",
        "commonName": "CA3",
        "uniprotId": "P07451",
        "chemblId": "CHEMBL2885",
        "targetClass": "Lyase",
        "probability": 0.0816,
        "knownActives": "16 /  8"
      },
      {
        "target": "Cyclin-dependent kinase 4/cyclin D1",
        "commonName": "N/A",
        "uniprotId": "P11802&P24385",
        "chemblId": "CHEMBL1907601",
        "targetClass": "Kinase",
        "probability": 0.0809,
        "knownActives": "152 /  2"
      },
      {
        "target": "Voltage-gated inwardly rectifying potassium channel KCNH2",
        "commonName": "KCNH2",
        "uniprotId": "Q12809",
        "chemblId": "CHEMBL240",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0798,
        "knownActives": "67 /  8"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 0.0793,
        "knownActives": "153 /  11"
      },
      {
        "target": "Mast/stem cell growth factor receptor Kit",
        "commonName": "KIT",
        "uniprotId": "P10721",
        "chemblId": "CHEMBL1936",
        "targetClass": "Kinase",
        "probability": 0.0775,
        "knownActives": "56 /  2"
      },
      {
        "target": "Aldo-keto reductase family 1 member C1",
        "commonName": "AKR1C1",
        "uniprotId": "Q04828",
        "chemblId": "CHEMBL5905",
        "targetClass": "Oxidoreductase",
        "probability": 0.0764,
        "knownActives": "39 /  2"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0756,
        "knownActives": "327 /  3"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.0725,
        "knownActives": "74 /  3"
      },
      {
        "target": "Aldehyde dehydrogenase, mitochondrial",
        "commonName": "ALDH2",
        "uniprotId": "P05091",
        "chemblId": "CHEMBL1935",
        "targetClass": "Oxidoreductase",
        "probability": 0.0722,
        "knownActives": "26 /  42"
      },
      {
        "target": "Apoptosis regulator Bcl-2",
        "commonName": "BCL2",
        "uniprotId": "P10415",
        "chemblId": "CHEMBL4860",
        "targetClass": "Other ion channel",
        "probability": 0.07,
        "knownActives": "87 /  6"
      },
      {
        "target": "Aurora kinase A",
        "commonName": "AURKA",
        "uniprotId": "O14965",
        "chemblId": "CHEMBL4722",
        "targetClass": "Kinase",
        "probability": 0.0698,
        "knownActives": "106 /  1"
      },
      {
        "target": "Prostaglandin E2 receptor EP2 subtype",
        "commonName": "PTGER2",
        "uniprotId": "P43116",
        "chemblId": "CHEMBL1881",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0679,
        "knownActives": "4 /  1"
      },
      {
        "target": "Poly [ADP-ribose] polymerase tankyrase-1",
        "commonName": "TNKS",
        "uniprotId": "O95271",
        "chemblId": "CHEMBL6164",
        "targetClass": "Transferase",
        "probability": 0.0678,
        "knownActives": "32 /  13"
      },
      {
        "target": "Cysteine protease ATG4B",
        "commonName": "ATG4B",
        "uniprotId": "Q9Y4P1",
        "chemblId": "CHEMBL1741221",
        "targetClass": "Enzyme",
        "probability": 0.0677,
        "knownActives": "4 /  2"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.0673,
        "knownActives": "69 /  2"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0654,
        "knownActives": "72 /  31"
      },
      {
        "target": "Receptor tyrosine-protein kinase erbB-2",
        "commonName": "ERBB2",
        "uniprotId": "P04626",
        "chemblId": "CHEMBL1824",
        "targetClass": "Kinase",
        "probability": 0.065,
        "knownActives": "89 /  1"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.0638,
        "knownActives": "313 /  6"
      },
      {
        "target": "Macrophage migration inhibitory factor",
        "commonName": "MIF",
        "uniprotId": "P14174",
        "chemblId": "CHEMBL2085",
        "targetClass": "Enzyme",
        "probability": 0.0633,
        "knownActives": "106 /  20"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.0617,
        "knownActives": "75 /  46"
      },
      {
        "target": "RAC-alpha serine/threonine-protein kinase",
        "commonName": "AKT1",
        "uniprotId": "P31749",
        "chemblId": "CHEMBL4282",
        "targetClass": "Kinase",
        "probability": 0.0592,
        "knownActives": "51 /  3"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.0589,
        "knownActives": "161 /  24"
      },
      {
        "target": "Sigma non-opioid intracellular receptor 1",
        "commonName": "SIGMAR1",
        "uniprotId": "Q99720",
        "chemblId": "CHEMBL287",
        "targetClass": "Membrane receptor",
        "probability": 0.0581,
        "knownActives": "67 /  83"
      },
      {
        "target": "Serine/threonine-protein kinase B-raf",
        "commonName": "BRAF",
        "uniprotId": "P15056",
        "chemblId": "CHEMBL5145",
        "targetClass": "Kinase",
        "probability": 0.058,
        "knownActives": "139 /  4"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.0575,
        "knownActives": "93 /  61"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.0568,
        "knownActives": "250 /  5"
      },
      {
        "target": "G-protein coupled receptor 35",
        "commonName": "GPR35",
        "uniprotId": "Q9HC97",
        "chemblId": "CHEMBL1293267",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0559,
        "knownActives": "28 /  14"
      },
      {
        "target": "Angiopoietin-1 receptor",
        "commonName": "TEK",
        "uniprotId": "Q02763",
        "chemblId": "CHEMBL4128",
        "targetClass": "Kinase",
        "probability": 0.0559,
        "knownActives": "7 /  1"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.0558,
        "knownActives": "169 /  4"
      },
      {
        "target": "Platelet-derived growth factor receptor beta",
        "commonName": "PDGFRB",
        "uniprotId": "P09619",
        "chemblId": "CHEMBL1913",
        "targetClass": "Kinase",
        "probability": 0.0553,
        "knownActives": "137 /  1"
      },
      {
        "target": "Macrophage colony-stimulating factor 1 receptor",
        "commonName": "CSF1R",
        "uniprotId": "P07333",
        "chemblId": "CHEMBL1844",
        "targetClass": "Kinase",
        "probability": 0.0525,
        "knownActives": "12 /  11"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.0518,
        "knownActives": "161 /  66"
      },
      {
        "target": "3-oxo-5-alpha-steroid 4-dehydrogenase 1",
        "commonName": "SRD5A1",
        "uniprotId": "P18405",
        "chemblId": "CHEMBL1787",
        "targetClass": "Oxidoreductase",
        "probability": 0.0497,
        "knownActives": "3 /  5"
      },
      {
        "target": "Vascular endothelial growth factor receptor 3",
        "commonName": "FLT4",
        "uniprotId": "P35916",
        "chemblId": "CHEMBL1955",
        "targetClass": "Kinase",
        "probability": 0.0488,
        "knownActives": "36 /  1"
      },
      {
        "target": "Mitogen-activated protein kinase kinase kinase 8",
        "commonName": "MAP3K8",
        "uniprotId": "P41279",
        "chemblId": "CHEMBL4899",
        "targetClass": "Kinase",
        "probability": 0.0471,
        "knownActives": "3 /  1"
      },
      {
        "target": "Heat shock 70 kDa protein 1A",
        "commonName": "HSPA1A",
        "uniprotId": "P0DMV8",
        "chemblId": "CHEMBL5460",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0449,
        "knownActives": "7 /  1"
      }
    ]
  },
  {
    "id": "carvacrol",
    "name": "Carvacrol",
    "cid": 10864,
    "smiles": "Cc1ccc(c(c1)C(C)C)O",
    "category": "Monoterpenoid Phenol",
    "topTarget": "Prostaglandin G/H synthase 1 (PTGS1)",
    "topTargetUniprot": "P23219",
    "targetClasses": [
      {
        "label": "Family A G protein-coupled receptor",
        "count": 26,
        "percentage": 26.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 12,
        "percentage": 12.0,
        "color": "#10B981"
      },
      {
        "label": "Kinase",
        "count": 11,
        "percentage": 11.0,
        "color": "#F59E0B"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 6,
        "percentage": 6.0,
        "color": "#EF4444"
      },
      {
        "label": "Nuclear receptor",
        "count": 6,
        "percentage": 6.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Eraser",
        "count": 6,
        "percentage": 6.0,
        "color": "#EC4899"
      },
      {
        "label": "Lyase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Electrochemical transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#6366F1"
      },
      {
        "label": "Enzyme",
        "count": 3,
        "percentage": 3.0,
        "color": "#14B8A6"
      },
      {
        "label": "Unclassified protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Secreted protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Primary active transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Other cytosolic protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Membrane receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Other ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Hydrolase",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Protease",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Cytochrome P450",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Reader",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Phosphatase",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      }
    ],
    "targets": [
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.9105,
        "knownActives": "78 /  43"
      },
      {
        "target": "GABA-A receptor; alpha-1/beta-2/gamma-2",
        "commonName": "N/A",
        "uniprotId": "P14867&P47870&P18507",
        "chemblId": "CHEMBL2095172",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.868,
        "knownActives": "10 /  5"
      },
      {
        "target": "Transient receptor potential cation channel subfamily A member 1",
        "commonName": "TRPA1",
        "uniprotId": "O75762",
        "chemblId": "CHEMBL6007",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.7998,
        "knownActives": "11 /  24"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 1",
        "commonName": "TRPV1",
        "uniprotId": "Q8NER1",
        "chemblId": "CHEMBL4794",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.7772,
        "knownActives": "63 /  5"
      },
      {
        "target": "5-hydroxytryptamine receptor 2B",
        "commonName": "HTR2B",
        "uniprotId": "P41595",
        "chemblId": "CHEMBL1833",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.7755,
        "knownActives": "54 /  22"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.7755,
        "knownActives": "41 /  34"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.7755,
        "knownActives": "30 /  73"
      },
      {
        "target": "GABA-A receptor; alpha-1/beta-3/gamma-2",
        "commonName": "N/A",
        "uniprotId": "P14867&P18507&P28472",
        "chemblId": "CHEMBL2094121",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.7755,
        "knownActives": "2 /  1"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.7676,
        "knownActives": "48 /  23"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.7649,
        "knownActives": "210 /  98"
      },
      {
        "target": "Macrophage migration inhibitory factor",
        "commonName": "MIF",
        "uniprotId": "P14174",
        "chemblId": "CHEMBL2085",
        "targetClass": "Enzyme",
        "probability": 0.6655,
        "knownActives": "64 /  11"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.6371,
        "knownActives": "776 /  231"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.6106,
        "knownActives": "639 /  240"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 3",
        "commonName": "ATP2A3",
        "uniprotId": "Q93084",
        "chemblId": "CHEMBL2401",
        "targetClass": "Primary active transporter",
        "probability": 0.4654,
        "knownActives": "3 /  1"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 2",
        "commonName": "ATP2A2",
        "uniprotId": "P16615",
        "chemblId": "CHEMBL3901",
        "targetClass": "Primary active transporter",
        "probability": 0.4654,
        "knownActives": "3 /  1"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.4609,
        "knownActives": "341 /  132"
      },
      {
        "target": "5-hydroxytryptamine receptor 6",
        "commonName": "HTR6",
        "uniprotId": "P50406",
        "chemblId": "CHEMBL3371",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4172,
        "knownActives": "13 /  10"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.4159,
        "knownActives": "100 /  45"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.4077,
        "knownActives": "204 /  23"
      },
      {
        "target": "Estrogen-related receptor gamma",
        "commonName": "ESRRG",
        "uniprotId": "P62508",
        "chemblId": "CHEMBL4245",
        "targetClass": "Nuclear receptor",
        "probability": 0.3324,
        "knownActives": "32 /  7"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.2955,
        "knownActives": "131 /  59"
      },
      {
        "target": "Programmed cell death 1 ligand 1",
        "commonName": "CD274",
        "uniprotId": "Q9NZQ7",
        "chemblId": "CHEMBL3580522",
        "targetClass": "Unclassified protein",
        "probability": 0.2934,
        "knownActives": "1 /  1"
      },
      {
        "target": "Programmed cell death protein 1/Programmed cell death 1 ligand 1",
        "commonName": "N/A",
        "uniprotId": "Q15116&Q9NZQ7",
        "chemblId": "CHEMBL4523993",
        "targetClass": "Unclassified protein",
        "probability": 0.2934,
        "knownActives": "1 /  1"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.292,
        "knownActives": "85 /  7"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.2601,
        "knownActives": "28 /  12"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2535,
        "knownActives": "24 /  65"
      },
      {
        "target": "Sodium-dependent serotonin transporter",
        "commonName": "SLC6A4",
        "uniprotId": "P31645",
        "chemblId": "CHEMBL228",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2535,
        "knownActives": "32 /  109"
      },
      {
        "target": "Substance-K receptor",
        "commonName": "TACR2",
        "uniprotId": "P21452",
        "chemblId": "CHEMBL2327",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2535,
        "knownActives": "7 /  4"
      },
      {
        "target": "Muscarinic acetylcholine receptor M3",
        "commonName": "CHRM3",
        "uniprotId": "P20309",
        "chemblId": "CHEMBL245",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2535,
        "knownActives": "3 /  13"
      },
      {
        "target": "Alpha-2C adrenergic receptor",
        "commonName": "ADRA2C",
        "uniprotId": "P18825",
        "chemblId": "CHEMBL1916",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2535,
        "knownActives": "15 /  10"
      },
      {
        "target": "Alpha-2B adrenergic receptor",
        "commonName": "ADRA2B",
        "uniprotId": "P18089",
        "chemblId": "CHEMBL1942",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2535,
        "knownActives": "13 /  8"
      },
      {
        "target": "Muscarinic acetylcholine receptor M1",
        "commonName": "CHRM1",
        "uniprotId": "P11229",
        "chemblId": "CHEMBL216",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2535,
        "knownActives": "6 /  17"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2535,
        "knownActives": "44 /  5"
      },
      {
        "target": "Alpha-2A adrenergic receptor",
        "commonName": "ADRA2A",
        "uniprotId": "P08913",
        "chemblId": "CHEMBL1867",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2535,
        "knownActives": "32 /  20"
      },
      {
        "target": "Indoleamine 2,3-dioxygenase 1",
        "commonName": "IDO1",
        "uniprotId": "P14902",
        "chemblId": "CHEMBL4685",
        "targetClass": "Oxidoreductase",
        "probability": 0.2497,
        "knownActives": "117 /  26"
      },
      {
        "target": "Sex hormone-binding globulin",
        "commonName": "SHBG",
        "uniprotId": "P04278",
        "chemblId": "CHEMBL3305",
        "targetClass": "Secreted protein",
        "probability": 0.2404,
        "knownActives": "22 /  16"
      },
      {
        "target": "Muscarinic acetylcholine receptor M2",
        "commonName": "CHRM2",
        "uniprotId": "P08172",
        "chemblId": "CHEMBL211",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2363,
        "knownActives": "3 /  15"
      },
      {
        "target": "D(3) dopamine receptor",
        "commonName": "DRD3",
        "uniprotId": "P35462",
        "chemblId": "CHEMBL234",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2346,
        "knownActives": "60 /  72"
      },
      {
        "target": "D(1A) dopamine receptor",
        "commonName": "DRD1",
        "uniprotId": "P21728",
        "chemblId": "CHEMBL2056",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2346,
        "knownActives": "100 /  50"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2346,
        "knownActives": "117 /  91"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2329,
        "knownActives": "243 /  96"
      },
      {
        "target": "Cannabinoid receptor 1",
        "commonName": "CNR1",
        "uniprotId": "P21554",
        "chemblId": "CHEMBL218",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2329,
        "knownActives": "210 /  56"
      },
      {
        "target": "Nuclear receptor ROR-gamma",
        "commonName": "RORC",
        "uniprotId": "P51449",
        "chemblId": "CHEMBL1741186",
        "targetClass": "Nuclear receptor",
        "probability": 0.2239,
        "knownActives": "33 /  2"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.214,
        "knownActives": "268 /  5"
      },
      {
        "target": "Glycine receptor subunit alpha-1",
        "commonName": "GLRA1",
        "uniprotId": "P23415",
        "chemblId": "CHEMBL5845",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.214,
        "knownActives": "2 /  7"
      },
      {
        "target": "Microtubule-associated protein tau",
        "commonName": "MAPT",
        "uniprotId": "P10636",
        "chemblId": "CHEMBL1293224",
        "targetClass": "Other cytosolic protein",
        "probability": 0.2067,
        "knownActives": "28 /  1"
      },
      {
        "target": "5-hydroxytryptamine receptor 3A",
        "commonName": "HTR3A",
        "uniprotId": "P46098",
        "chemblId": "CHEMBL1899",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.1913,
        "knownActives": "5 /  1"
      },
      {
        "target": "Insulin-like growth factor 1 receptor",
        "commonName": "IGF1R",
        "uniprotId": "P08069",
        "chemblId": "CHEMBL1957",
        "targetClass": "Kinase",
        "probability": 0.1816,
        "knownActives": "26 /  16"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.1751,
        "knownActives": "241 /  68"
      },
      {
        "target": "Serine/threonine-protein kinase/endoribonuclease IRE1",
        "commonName": "ERN1",
        "uniprotId": "O75460",
        "chemblId": "CHEMBL1163101",
        "targetClass": "Enzyme",
        "probability": 0.175,
        "knownActives": "192 /  37"
      },
      {
        "target": "Lysine-specific demethylase 4E",
        "commonName": "KDM4E",
        "uniprotId": "B2RXH2",
        "chemblId": "CHEMBL1293226",
        "targetClass": "Eraser",
        "probability": 0.1729,
        "knownActives": "5 /  4"
      },
      {
        "target": "Histone deacetylase 8",
        "commonName": "HDAC8",
        "uniprotId": "Q9BY41",
        "chemblId": "CHEMBL3192",
        "targetClass": "Eraser",
        "probability": 0.1726,
        "knownActives": "38 /  18"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 1",
        "commonName": "HSD17B1",
        "uniprotId": "P14061",
        "chemblId": "CHEMBL3181",
        "targetClass": "Oxidoreductase",
        "probability": 0.1711,
        "knownActives": "286 /  63"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 0.1676,
        "knownActives": "53 /  21"
      },
      {
        "target": "Focal adhesion kinase 1",
        "commonName": "PTK2",
        "uniprotId": "Q05397",
        "chemblId": "CHEMBL2695",
        "targetClass": "Kinase",
        "probability": 0.1672,
        "knownActives": "11 /  2"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.1648,
        "knownActives": "150 /  22"
      },
      {
        "target": "Alpha-1D adrenergic receptor",
        "commonName": "ADRA1D",
        "uniprotId": "P25100",
        "chemblId": "CHEMBL223",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.163,
        "knownActives": "3 /  9"
      },
      {
        "target": "HSP60/HSP10",
        "commonName": "N/A",
        "uniprotId": "P10809&P61604",
        "chemblId": "CHEMBL4106131",
        "targetClass": "Unclassified protein",
        "probability": 0.1599,
        "knownActives": "12 /  4"
      },
      {
        "target": "Bcl-2-like protein 1",
        "commonName": "BCL2L1",
        "uniprotId": "Q07817",
        "chemblId": "CHEMBL4625",
        "targetClass": "Other ion channel",
        "probability": 0.1586,
        "knownActives": "18 /  10"
      },
      {
        "target": "Apoptosis regulator Bcl-2",
        "commonName": "BCL2",
        "uniprotId": "P10415",
        "chemblId": "CHEMBL4860",
        "targetClass": "Other ion channel",
        "probability": 0.1586,
        "knownActives": "20 /  12"
      },
      {
        "target": "G-protein coupled receptor 55",
        "commonName": "GPR55",
        "uniprotId": "Q9Y2T6",
        "chemblId": "CHEMBL1075322",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1563,
        "knownActives": "5 /  1"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.1557,
        "knownActives": "75 /  49"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1548,
        "knownActives": "126 /  98"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1548,
        "knownActives": "141 /  79"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1548,
        "knownActives": "157 /  103"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.1536,
        "knownActives": "18 /  16"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.1536,
        "knownActives": "45 /  13"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.1493,
        "knownActives": "41 /  23"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 0.1493,
        "knownActives": "78 /  2"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.1485,
        "knownActives": "253 /  34"
      },
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1485,
        "knownActives": "12 /  107"
      },
      {
        "target": "Sigma intracellular receptor 2",
        "commonName": "TMEM97",
        "uniprotId": "Q5BJF2",
        "chemblId": "CHEMBL4105907",
        "targetClass": "Membrane receptor",
        "probability": 0.1459,
        "knownActives": "3 /  9"
      },
      {
        "target": "NAD-dependent protein deacetylase sirtuin-3, mitochondrial",
        "commonName": "SIRT3",
        "uniprotId": "Q9NTG7",
        "chemblId": "CHEMBL4461",
        "targetClass": "Eraser",
        "probability": 0.1458,
        "knownActives": "2 /  1"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.1444,
        "knownActives": "9 /  6"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.1426,
        "knownActives": "127 /  63"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.1424,
        "knownActives": "64 /  27"
      },
      {
        "target": "Transcription intermediary factor 1-alpha",
        "commonName": "TRIM24",
        "uniprotId": "O15164",
        "chemblId": "CHEMBL3108638",
        "targetClass": "Reader",
        "probability": 0.1379,
        "knownActives": "6 /  3"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX12",
        "commonName": "ALOX12",
        "uniprotId": "P18054",
        "chemblId": "CHEMBL3687",
        "targetClass": "Enzyme",
        "probability": 0.1377,
        "knownActives": "60 /  13"
      },
      {
        "target": "Eukaryotic elongation factor 2 kinase",
        "commonName": "EEF2K",
        "uniprotId": "O00418",
        "chemblId": "CHEMBL5026",
        "targetClass": "Kinase",
        "probability": 0.1375,
        "knownActives": "3 /  2"
      },
      {
        "target": "Toll-like receptor 8",
        "commonName": "TLR8",
        "uniprotId": "Q9NR97",
        "chemblId": "CHEMBL5805",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.1361,
        "knownActives": "7 /  1"
      },
      {
        "target": "Calcium/calmodulin-dependent protein kinase type II subunit alpha",
        "commonName": "CAMK2A",
        "uniprotId": "Q9UQM7",
        "chemblId": "CHEMBL4147",
        "targetClass": "Kinase",
        "probability": 0.1353,
        "knownActives": "11 /  4"
      },
      {
        "target": "Receptor-type tyrosine-protein kinase FLT3",
        "commonName": "FLT3",
        "uniprotId": "P36888",
        "chemblId": "CHEMBL1974",
        "targetClass": "Kinase",
        "probability": 0.1331,
        "knownActives": "69 /  1"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.1328,
        "knownActives": "200 /  33"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.1328,
        "knownActives": "18 /  14"
      },
      {
        "target": "Histone deacetylase 4",
        "commonName": "HDAC4",
        "uniprotId": "P56524",
        "chemblId": "CHEMBL3524",
        "targetClass": "Eraser",
        "probability": 0.1328,
        "knownActives": "13 /  13"
      },
      {
        "target": "Cyclin-dependent kinase 1",
        "commonName": "CDK1",
        "uniprotId": "P06493",
        "chemblId": "CHEMBL308",
        "targetClass": "Kinase",
        "probability": 0.1299,
        "knownActives": "98 /  2"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.1295,
        "knownActives": "141 /  56"
      },
      {
        "target": "Melatonin receptor type 1B",
        "commonName": "MTNR1B",
        "uniprotId": "P49286",
        "chemblId": "CHEMBL1946",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.128,
        "knownActives": "11 /  68"
      },
      {
        "target": "Alpha-ketoglutarate-dependent dioxygenase FTO",
        "commonName": "FTO",
        "uniprotId": "Q9C0B1",
        "chemblId": "CHEMBL2331065",
        "targetClass": "Oxidoreductase",
        "probability": 0.1271,
        "knownActives": "14 /  4"
      },
      {
        "target": "Beta-3 adrenergic receptor",
        "commonName": "ADRB3",
        "uniprotId": "P13945",
        "chemblId": "CHEMBL246",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1269,
        "knownActives": "1 /  6"
      },
      {
        "target": "Tyrosine-protein kinase SYK",
        "commonName": "SYK",
        "uniprotId": "P43405",
        "chemblId": "CHEMBL2599",
        "targetClass": "Kinase",
        "probability": 0.1268,
        "knownActives": "26 /  2"
      },
      {
        "target": "Arachidonate 5-lipoxygenase-activating protein",
        "commonName": "ALOX5AP",
        "uniprotId": "P20292",
        "chemblId": "CHEMBL4550",
        "targetClass": "Other cytosolic protein",
        "probability": 0.1257,
        "knownActives": "20 /  2"
      },
      {
        "target": "Glycine receptor alpha-3/beta",
        "commonName": "N/A",
        "uniprotId": "O75311&P48167",
        "chemblId": "CHEMBL4106144",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.1249,
        "knownActives": "1 /  1"
      },
      {
        "target": "Cyclin-dependent kinase 2",
        "commonName": "CDK2",
        "uniprotId": "P24941",
        "chemblId": "CHEMBL301",
        "targetClass": "Kinase",
        "probability": 0.1205,
        "knownActives": "149 /  1"
      },
      {
        "target": "D(4) dopamine receptor",
        "commonName": "DRD4",
        "uniprotId": "P21917",
        "chemblId": "CHEMBL219",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.12,
        "knownActives": "34 /  44"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1199,
        "knownActives": "63 /  37"
      },
      {
        "target": "Fibroblast growth factor receptor 1",
        "commonName": "FGFR1",
        "uniprotId": "P11362",
        "chemblId": "CHEMBL3650",
        "targetClass": "Kinase",
        "probability": 0.1195,
        "knownActives": "94 /  1"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.1188,
        "knownActives": "16 /  13"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.1188,
        "knownActives": "161 /  73"
      },
      {
        "target": "Albumin",
        "commonName": "ALB",
        "uniprotId": "P02768",
        "chemblId": "CHEMBL3253",
        "targetClass": "Secreted protein",
        "probability": 0.1183,
        "knownActives": "22 /  6"
      }
    ]
  },
  {
    "id": "chrysin",
    "name": "Chrysin",
    "cid": 5281607,
    "smiles": "O=C1C=C(c2ccccc2)Oc3cc(O)cc(O)c13",
    "category": "Dihydroxyflavone",
    "topTarget": "Broad substrate specificity ATP-binding cassette transporter ABCG2 (ABCG2)",
    "topTargetUniprot": "Q9UNQ0",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 27,
        "percentage": 27.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 15,
        "percentage": 15.0,
        "color": "#10B981"
      },
      {
        "label": "Transferase",
        "count": 8,
        "percentage": 8.0,
        "color": "#F59E0B"
      },
      {
        "label": "Lyase",
        "count": 7,
        "percentage": 7.0,
        "color": "#EF4444"
      },
      {
        "label": "Protease",
        "count": 7,
        "percentage": 7.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Nuclear receptor",
        "count": 4,
        "percentage": 4.0,
        "color": "#EC4899"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Primary active transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#6366F1"
      },
      {
        "label": "Eraser",
        "count": 3,
        "percentage": 3.0,
        "color": "#14B8A6"
      },
      {
        "label": "Enzyme",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Hydrolase",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Cytochrome P450",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Electrochemical transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Phosphatase",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Secreted protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Other ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Isomerase",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      }
    ],
    "targets": [
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 1.0,
        "knownActives": "95 /  147"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 1.0,
        "knownActives": "122 /  31"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "430 /  122"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 1.0,
        "knownActives": "69 /  153"
      },
      {
        "target": "Cyclin-dependent kinase 5/CDK5 activator 1",
        "commonName": "N/A",
        "uniprotId": "Q00535&Q15078",
        "chemblId": "CHEMBL1907600",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "156 /  25"
      },
      {
        "target": "Cyclin-dependent kinase 6",
        "commonName": "CDK6",
        "uniprotId": "Q00534",
        "chemblId": "CHEMBL2508",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "10 /  6"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "168 /  43"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "101 /  50"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 1.0,
        "knownActives": "111 /  16"
      },
      {
        "target": "Proteasome Macropain subunit MB1",
        "commonName": "PSMB5",
        "uniprotId": "P28074",
        "chemblId": "CHEMBL4662",
        "targetClass": "Protease",
        "probability": 1.0,
        "knownActives": "10 /  6"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "73 /  38"
      },
      {
        "target": "Carbonyl reductase [NADPH] 1",
        "commonName": "CBR1",
        "uniprotId": "P16152",
        "chemblId": "CHEMBL5586",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "20 /  3"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "148 /  25"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 1.0,
        "knownActives": "158 /  51"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 1.0,
        "knownActives": "71 /  112"
      },
      {
        "target": "Cyclin-dependent kinase 1/cyclin B",
        "commonName": "N/A",
        "uniprotId": "P06493&P14635&Q8WWL7&O95067",
        "chemblId": "CHEMBL2094127",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "65 /  13"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "496 /  68"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "419 /  65"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "377 /  120"
      },
      {
        "target": "Poly [ADP-ribose] polymerase tankyrase-2",
        "commonName": "TNKS2",
        "uniprotId": "Q9H2K2",
        "chemblId": "CHEMBL6154",
        "targetClass": "Transferase",
        "probability": 0.9857,
        "knownActives": "34 /  12"
      },
      {
        "target": "Poly [ADP-ribose] polymerase tankyrase-1",
        "commonName": "TNKS",
        "uniprotId": "O95271",
        "chemblId": "CHEMBL6164",
        "targetClass": "Transferase",
        "probability": 0.9857,
        "knownActives": "27 /  28"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX12",
        "commonName": "ALOX12",
        "uniprotId": "P18054",
        "chemblId": "CHEMBL3687",
        "targetClass": "Enzyme",
        "probability": 0.9834,
        "knownActives": "79 /  14"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.9834,
        "knownActives": "96 /  13"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.9822,
        "knownActives": "21 /  9"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.982,
        "knownActives": "877 /  127"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.982,
        "knownActives": "1025 /  127"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.9813,
        "knownActives": "222 /  132"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.9813,
        "knownActives": "263 /  38"
      },
      {
        "target": "Myeloperoxidase",
        "commonName": "MPO",
        "uniprotId": "P05164",
        "chemblId": "CHEMBL2439",
        "targetClass": "Oxidoreductase",
        "probability": 0.979,
        "knownActives": "33 /  4"
      },
      {
        "target": "Receptor-type tyrosine-protein kinase FLT3",
        "commonName": "FLT3",
        "uniprotId": "P36888",
        "chemblId": "CHEMBL1974",
        "targetClass": "Kinase",
        "probability": 0.9777,
        "knownActives": "126 /  16"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.9767,
        "knownActives": "69 /  9"
      },
      {
        "target": "Inositol hexakisphosphate kinase 2",
        "commonName": "IP6K2",
        "uniprotId": "Q9UHH9",
        "chemblId": "CHEMBL4523488",
        "targetClass": "Transferase",
        "probability": 0.974,
        "knownActives": "8 /  10"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.974,
        "knownActives": "413 /  340"
      },
      {
        "target": "NADPH oxidase 4",
        "commonName": "NOX4",
        "uniprotId": "Q9NPH5",
        "chemblId": "CHEMBL1250375",
        "targetClass": "Oxidoreductase",
        "probability": 0.9735,
        "knownActives": "33 /  8"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.971,
        "knownActives": "238 /  39"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.9699,
        "knownActives": "148 /  34"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.9699,
        "knownActives": "166 /  234"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.9698,
        "knownActives": "177 /  112"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 2",
        "commonName": "MKNK2",
        "uniprotId": "Q9HBH9",
        "chemblId": "CHEMBL4204",
        "targetClass": "Kinase",
        "probability": 0.9691,
        "knownActives": "34 /  7"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 1",
        "commonName": "HSD17B1",
        "uniprotId": "P14061",
        "chemblId": "CHEMBL3181",
        "targetClass": "Oxidoreductase",
        "probability": 0.9681,
        "knownActives": "300 /  9"
      },
      {
        "target": "Poly [ADP-ribose] polymerase 1",
        "commonName": "PARP1",
        "uniprotId": "P09874",
        "chemblId": "CHEMBL3105",
        "targetClass": "Transferase",
        "probability": 0.9672,
        "knownActives": "214 /  70"
      },
      {
        "target": "Casein kinase II subunit alpha",
        "commonName": "CSNK2A1",
        "uniprotId": "P68400",
        "chemblId": "CHEMBL3629",
        "targetClass": "Kinase",
        "probability": 0.9656,
        "knownActives": "38 /  9"
      },
      {
        "target": "Dipeptidyl peptidase 4",
        "commonName": "DPP4",
        "uniprotId": "P27487",
        "chemblId": "CHEMBL284",
        "targetClass": "Protease",
        "probability": 0.9641,
        "knownActives": "38 /  9"
      },
      {
        "target": "Solute carrier organic anion transporter family member 2B1",
        "commonName": "SLCO2B1",
        "uniprotId": "O94956",
        "chemblId": "CHEMBL1743124",
        "targetClass": "Electrochemical transporter",
        "probability": 0.9639,
        "knownActives": "6 /  6"
      },
      {
        "target": "Cyclin-dependent kinase 1/cyclin B1",
        "commonName": "N/A",
        "uniprotId": "P06493&P14635",
        "chemblId": "CHEMBL1907602",
        "targetClass": "Kinase",
        "probability": 0.9637,
        "knownActives": "70 /  19"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 0.9628,
        "knownActives": "77 /  9"
      },
      {
        "target": "Tyrosine-protein kinase SYK",
        "commonName": "SYK",
        "uniprotId": "P43405",
        "chemblId": "CHEMBL2599",
        "targetClass": "Kinase",
        "probability": 0.9624,
        "knownActives": "59 /  3"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.9588,
        "knownActives": "212 /  54"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.9568,
        "knownActives": "381 /  79"
      },
      {
        "target": "G protein-coupled receptor kinase 6",
        "commonName": "GRK6",
        "uniprotId": "P43250",
        "chemblId": "CHEMBL6144",
        "targetClass": "Kinase",
        "probability": 0.955,
        "knownActives": "26 /  4"
      },
      {
        "target": "Multidrug resistance-associated protein 1",
        "commonName": "ABCC1",
        "uniprotId": "P33527",
        "chemblId": "CHEMBL3004",
        "targetClass": "Primary active transporter",
        "probability": 0.9521,
        "knownActives": "11 /  73"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.9462,
        "knownActives": "443 /  71"
      },
      {
        "target": "Tyrosine-protein kinase Lck",
        "commonName": "LCK",
        "uniprotId": "P06239",
        "chemblId": "CHEMBL258",
        "targetClass": "Kinase",
        "probability": 0.9419,
        "knownActives": "85 /  5"
      },
      {
        "target": "BDNF/NT-3 growth factors receptor",
        "commonName": "NTRK2",
        "uniprotId": "Q16620",
        "chemblId": "CHEMBL4898",
        "targetClass": "Kinase",
        "probability": 0.9418,
        "knownActives": "5 /  2"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.9418,
        "knownActives": "66 /  4"
      },
      {
        "target": "Aldo-keto reductase family 1 member B10",
        "commonName": "AKR1B10",
        "uniprotId": "O60218",
        "chemblId": "CHEMBL5983",
        "targetClass": "Oxidoreductase",
        "probability": 0.9398,
        "knownActives": "45 /  3"
      },
      {
        "target": "A-type voltage-gated potassium channel KCND3",
        "commonName": "KCND3",
        "uniprotId": "Q9UK17",
        "chemblId": "CHEMBL1964",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.9351,
        "knownActives": "1 /  1"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 3",
        "commonName": "TRPV3",
        "uniprotId": "Q8NET8",
        "chemblId": "CHEMBL5522",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.9351,
        "knownActives": "3 /  1"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 5",
        "commonName": "KCNA5",
        "uniprotId": "P22460",
        "chemblId": "CHEMBL4306",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.9351,
        "knownActives": "8 /  21"
      },
      {
        "target": "Serine/threonine-protein kinase PLK1",
        "commonName": "PLK1",
        "uniprotId": "P53350",
        "chemblId": "CHEMBL3024",
        "targetClass": "Kinase",
        "probability": 0.9334,
        "knownActives": "40 /  7"
      },
      {
        "target": "Cystic fibrosis transmembrane conductance regulator",
        "commonName": "CFTR",
        "uniprotId": "P13569",
        "chemblId": "CHEMBL4051",
        "targetClass": "Other ion channel",
        "probability": 0.9314,
        "knownActives": "18 /  3"
      },
      {
        "target": "Lysine-specific demethylase 4E",
        "commonName": "KDM4E",
        "uniprotId": "B2RXH2",
        "chemblId": "CHEMBL1293226",
        "targetClass": "Eraser",
        "probability": 0.9293,
        "knownActives": "11 /  2"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.9272,
        "knownActives": "119 /  33"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 0.9257,
        "knownActives": "158 /  20"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 0.9224,
        "knownActives": "143 /  6"
      },
      {
        "target": "72 kDa type IV collagenase",
        "commonName": "MMP2",
        "uniprotId": "P08253",
        "chemblId": "CHEMBL333",
        "targetClass": "Protease",
        "probability": 0.9224,
        "knownActives": "183 /  4"
      },
      {
        "target": "Tyrosine-protein kinase Yes",
        "commonName": "YES1",
        "uniprotId": "P07947",
        "chemblId": "CHEMBL2073",
        "targetClass": "Kinase",
        "probability": 0.9203,
        "knownActives": "8 /  5"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 1",
        "commonName": "MKNK1",
        "uniprotId": "Q9BUB5",
        "chemblId": "CHEMBL4718",
        "targetClass": "Kinase",
        "probability": 0.9109,
        "knownActives": "21 /  2"
      },
      {
        "target": "DNA polymerase eta",
        "commonName": "POLH",
        "uniprotId": "Q9Y253",
        "chemblId": "CHEMBL5542",
        "targetClass": "Transferase",
        "probability": 0.9077,
        "knownActives": "5 /  4"
      },
      {
        "target": "CDK8/Cyclin C",
        "commonName": "N/A",
        "uniprotId": "P49336&P24863",
        "chemblId": "CHEMBL3038474",
        "targetClass": "Kinase",
        "probability": 0.9072,
        "knownActives": "9 /  12"
      },
      {
        "target": "Ribosomal protein S6 kinase alpha-3",
        "commonName": "RPS6KA3",
        "uniprotId": "P51812",
        "chemblId": "CHEMBL2345",
        "targetClass": "Kinase",
        "probability": 0.9041,
        "knownActives": "52 /  26"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.9027,
        "knownActives": "77 /  91"
      },
      {
        "target": "Protein disulfide-isomerase",
        "commonName": "P4HB",
        "uniprotId": "P07237",
        "chemblId": "CHEMBL5422",
        "targetClass": "Isomerase",
        "probability": 0.8821,
        "knownActives": "109 /  2"
      },
      {
        "target": "Inositol polyphosphate multikinase",
        "commonName": "IPMK",
        "uniprotId": "Q8NFU5",
        "chemblId": "CHEMBL4523401",
        "targetClass": "Transferase",
        "probability": 0.881,
        "knownActives": "4 /  6"
      },
      {
        "target": "CDGSH iron-sulfur domain-containing protein 1",
        "commonName": "CISD1",
        "uniprotId": "Q9NZ45",
        "chemblId": "CHEMBL1795168",
        "targetClass": "Unclassified protein",
        "probability": 0.8782,
        "knownActives": "25 /  1"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.8777,
        "knownActives": "390 /  12"
      },
      {
        "target": "Lactoylglutathione lyase",
        "commonName": "GLO1",
        "uniprotId": "Q04760",
        "chemblId": "CHEMBL2424",
        "targetClass": "Lyase",
        "probability": 0.8746,
        "knownActives": "23 /  4"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.8706,
        "knownActives": "305 /  9"
      },
      {
        "target": "Receptor-type tyrosine-protein phosphatase S",
        "commonName": "PTPRS",
        "uniprotId": "Q13332",
        "chemblId": "CHEMBL2396508",
        "targetClass": "Phosphatase",
        "probability": 0.8691,
        "knownActives": "6 /  8"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.8585,
        "knownActives": "69 /  42"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.8531,
        "knownActives": "365 /  38"
      },
      {
        "target": "Casein kinase II alpha'/ beta",
        "commonName": "N/A",
        "uniprotId": "P67870&P19784",
        "chemblId": "CHEMBL3883328",
        "targetClass": "Kinase",
        "probability": 0.8435,
        "knownActives": "7 /  2"
      },
      {
        "target": "Monocarboxylate transporter 1",
        "commonName": "SLC16A1",
        "uniprotId": "P53985",
        "chemblId": "CHEMBL4360",
        "targetClass": "Electrochemical transporter",
        "probability": 0.8421,
        "knownActives": "3 /  2"
      },
      {
        "target": "Beta-galactoside alpha-2,6-sialyltransferase 1",
        "commonName": "ST6GAL1",
        "uniprotId": "P15907",
        "chemblId": "CHEMBL3596075",
        "targetClass": "Transferase",
        "probability": 0.8336,
        "knownActives": "7 /  2"
      },
      {
        "target": "6-phosphofructo-2-kinase/fructose-2,6-bisphosphatase 3",
        "commonName": "PFKFB3",
        "uniprotId": "Q16875",
        "chemblId": "CHEMBL2331053",
        "targetClass": "Enzyme",
        "probability": 0.832,
        "knownActives": "13 /  3"
      },
      {
        "target": "Macrophage metalloelastase",
        "commonName": "MMP12",
        "uniprotId": "P39900",
        "chemblId": "CHEMBL4393",
        "targetClass": "Protease",
        "probability": 0.8296,
        "knownActives": "39 /  5"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit alpha isoform",
        "commonName": "PIK3CA",
        "uniprotId": "P42336",
        "chemblId": "CHEMBL4005",
        "targetClass": "Transferase",
        "probability": 0.8193,
        "knownActives": "237 /  5"
      },
      {
        "target": "Cyclin-dependent kinase 9",
        "commonName": "CDK9",
        "uniprotId": "P50750",
        "chemblId": "CHEMBL3116",
        "targetClass": "Kinase",
        "probability": 0.8153,
        "knownActives": "16 /  11"
      },
      {
        "target": "CDK2/Cyclin A2",
        "commonName": "N/A",
        "uniprotId": "P24941&P20248",
        "chemblId": "CHEMBL3038469",
        "targetClass": "Kinase",
        "probability": 0.8153,
        "knownActives": "79 /  37"
      },
      {
        "target": "Cyclin-dependent kinase 2",
        "commonName": "CDK2",
        "uniprotId": "P24941",
        "chemblId": "CHEMBL301",
        "targetClass": "Kinase",
        "probability": 0.8153,
        "knownActives": "234 /  26"
      },
      {
        "target": "CDK9/cyclin T1",
        "commonName": "N/A",
        "uniprotId": "O60563&P50750",
        "chemblId": "CHEMBL2111389",
        "targetClass": "Kinase",
        "probability": 0.8153,
        "knownActives": "82 /  53"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.8153,
        "knownActives": "159 /  9"
      },
      {
        "target": "G-protein coupled receptor 35",
        "commonName": "GPR35",
        "uniprotId": "Q9HC97",
        "chemblId": "CHEMBL1293267",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.8118,
        "knownActives": "27 /  32"
      },
      {
        "target": "Mast/stem cell growth factor receptor Kit",
        "commonName": "KIT",
        "uniprotId": "P10721",
        "chemblId": "CHEMBL1936",
        "targetClass": "Kinase",
        "probability": 0.8086,
        "knownActives": "46 /  3"
      },
      {
        "target": "Alpha-ketoglutarate-dependent dioxygenase FTO",
        "commonName": "FTO",
        "uniprotId": "Q9C0B1",
        "chemblId": "CHEMBL2331065",
        "targetClass": "Oxidoreductase",
        "probability": 0.806,
        "knownActives": "61 /  3"
      },
      {
        "target": "Alpha-amylase 1A",
        "commonName": "AMY1A",
        "uniprotId": "P0DUB6",
        "chemblId": "CHEMBL2478",
        "targetClass": "Hydrolase",
        "probability": 0.8028,
        "knownActives": "7 /  1"
      },
      {
        "target": "Short transient receptor potential channel 5",
        "commonName": "TRPC5",
        "uniprotId": "Q9UL62",
        "chemblId": "CHEMBL1250411",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.8021,
        "knownActives": "5 /  4"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.801,
        "knownActives": "288 /  3"
      },
      {
        "target": "A disintegrin and metalloproteinase with thrombospondin motifs 4",
        "commonName": "ADAMTS4",
        "uniprotId": "O75173",
        "chemblId": "CHEMBL2318",
        "targetClass": "Protease",
        "probability": 0.7996,
        "knownActives": "10 /  1"
      },
      {
        "target": "Histone-lysine N-methyltransferase EZH1",
        "commonName": "EZH1",
        "uniprotId": "Q92800",
        "chemblId": "CHEMBL2189116",
        "targetClass": "Writer",
        "probability": 0.7986,
        "knownActives": "1 /  1"
      }
    ]
  },
  {
    "id": "conessine",
    "name": "Conessine",
    "cid": 441072,
    "smiles": "CN(C)C1CCC2(C3CCC4C(C3CCC2C1)CC5(C4)CN(C)C5)C",
    "category": "Steroidal Alkaloid",
    "topTarget": "Cholinesterase (BCHE)",
    "topTargetUniprot": "P06276",
    "targetClasses": [
      {
        "label": "Family A G protein-coupled receptor",
        "count": 24,
        "percentage": 24.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 16,
        "percentage": 16.0,
        "color": "#10B981"
      },
      {
        "label": "Lyase",
        "count": 11,
        "percentage": 11.0,
        "color": "#F59E0B"
      },
      {
        "label": "Hydrolase",
        "count": 8,
        "percentage": 8.0,
        "color": "#EF4444"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 8,
        "percentage": 8.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Electrochemical transporter",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Kinase",
        "count": 3,
        "percentage": 3.0,
        "color": "#06B6D4"
      },
      {
        "label": "Protease",
        "count": 3,
        "percentage": 3.0,
        "color": "#6366F1"
      },
      {
        "label": "Nuclear receptor",
        "count": 3,
        "percentage": 3.0,
        "color": "#14B8A6"
      },
      {
        "label": "Transferase",
        "count": 2,
        "percentage": 2.0,
        "color": "#F97316"
      },
      {
        "label": "Isomerase",
        "count": 2,
        "percentage": 2.0,
        "color": "#84CC16"
      },
      {
        "label": "Phosphatase",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Eraser",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Writer",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#F59E0B"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Cytochrome P450",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Phosphodiesterase",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Family C G protein-coupled receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      }
    ],
    "targets": [
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.9922,
        "knownActives": "1707 /  14"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.992,
        "knownActives": "2952 /  8"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.9843,
        "knownActives": "932 /  8"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha4/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P43681",
        "chemblId": "CHEMBL1907589",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.9739,
        "knownActives": "726 /  26"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.973,
        "knownActives": "357 /  13"
      },
      {
        "target": "Acetylcholine receptor; alpha1/beta1/delta/gamma",
        "commonName": "N/A",
        "uniprotId": "P02708&P07510&P11230&Q07001",
        "chemblId": "CHEMBL1907588",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.9724,
        "knownActives": "18 /  2"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P32297",
        "chemblId": "CHEMBL2109234",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.9721,
        "knownActives": "46 /  1"
      },
      {
        "target": "Histamine H3 receptor",
        "commonName": "HRH3",
        "uniprotId": "Q9Y5N1",
        "chemblId": "CHEMBL264",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9587,
        "knownActives": "3242 /  8"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha2/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&Q15822",
        "chemblId": "CHEMBL2109230",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.952,
        "knownActives": "11 /  1"
      },
      {
        "target": "Sigma non-opioid intracellular receptor 1",
        "commonName": "SIGMAR1",
        "uniprotId": "Q99720",
        "chemblId": "CHEMBL287",
        "targetClass": "Membrane receptor",
        "probability": 0.95,
        "knownActives": "2680 /  52"
      },
      {
        "target": "UDP-glucuronosyltransferase 2B7",
        "commonName": "UGT2B7",
        "uniprotId": "P16662",
        "chemblId": "CHEMBL4370",
        "targetClass": "Transferase",
        "probability": 0.8934,
        "knownActives": "7 /  1"
      },
      {
        "target": "Dynamin-1",
        "commonName": "DNM1",
        "uniprotId": "Q05193",
        "chemblId": "CHEMBL4958",
        "targetClass": "Hydrolase",
        "probability": 0.8258,
        "knownActives": "23 /  11"
      },
      {
        "target": "Alpha-2C adrenergic receptor",
        "commonName": "ADRA2C",
        "uniprotId": "P18825",
        "chemblId": "CHEMBL1916",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.7244,
        "knownActives": "499 /  7"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.5747,
        "knownActives": "2922 /  6"
      },
      {
        "target": "Voltage-gated inwardly rectifying potassium channel KCNH2",
        "commonName": "KCNH2",
        "uniprotId": "Q12809",
        "chemblId": "CHEMBL240",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.5161,
        "knownActives": "5158 /  5"
      },
      {
        "target": "D(3) dopamine receptor",
        "commonName": "DRD3",
        "uniprotId": "P35462",
        "chemblId": "CHEMBL234",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.5108,
        "knownActives": "4530 /  5"
      },
      {
        "target": "Histamine H1 receptor",
        "commonName": "HRH1",
        "uniprotId": "P35367",
        "chemblId": "CHEMBL231",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.5036,
        "knownActives": "967 /  1"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.5036,
        "knownActives": "6811 /  4"
      },
      {
        "target": "Muscarinic acetylcholine receptor M3",
        "commonName": "CHRM3",
        "uniprotId": "P20309",
        "chemblId": "CHEMBL245",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.5007,
        "knownActives": "1431 /  5"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.4907,
        "knownActives": "2894 /  28"
      },
      {
        "target": "Muscarinic acetylcholine receptor M1",
        "commonName": "CHRM1",
        "uniprotId": "P11229",
        "chemblId": "CHEMBL216",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4893,
        "knownActives": "1336 /  6"
      },
      {
        "target": "Muscarinic acetylcholine receptor M2",
        "commonName": "CHRM2",
        "uniprotId": "P08172",
        "chemblId": "CHEMBL211",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.445,
        "knownActives": "1266 /  9"
      },
      {
        "target": "5-hydroxytryptamine receptor 5A",
        "commonName": "HTR5A",
        "uniprotId": "P47898",
        "chemblId": "CHEMBL3426",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4436,
        "knownActives": "319 /  1"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.4418,
        "knownActives": "3292 /  19"
      },
      {
        "target": "Alpha-1B adrenergic receptor",
        "commonName": "ADRA1B",
        "uniprotId": "P35368",
        "chemblId": "CHEMBL232",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4337,
        "knownActives": "1069 /  2"
      },
      {
        "target": "Muscarinic acetylcholine receptor M5",
        "commonName": "CHRM5",
        "uniprotId": "P08912",
        "chemblId": "CHEMBL2035",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4323,
        "knownActives": "504 /  10"
      },
      {
        "target": "Muscarinic acetylcholine receptor M4",
        "commonName": "CHRM4",
        "uniprotId": "P08173",
        "chemblId": "CHEMBL1821",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4323,
        "knownActives": "829 /  9"
      },
      {
        "target": "Histamine H2 receptor",
        "commonName": "HRH2",
        "uniprotId": "P25021",
        "chemblId": "CHEMBL1941",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4155,
        "knownActives": "307 /  4"
      },
      {
        "target": "Cytochrome P450 2D6",
        "commonName": "CYP2D6",
        "uniprotId": "P10635",
        "chemblId": "CHEMBL289",
        "targetClass": "Cytochrome P450",
        "probability": 0.3985,
        "knownActives": "226 /  1"
      },
      {
        "target": "Alpha-2B adrenergic receptor",
        "commonName": "ADRA2B",
        "uniprotId": "P18089",
        "chemblId": "CHEMBL1942",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.3961,
        "knownActives": "430 /  4"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.3554,
        "knownActives": "5396 /  1"
      },
      {
        "target": "Tyrosine-protein kinase Fyn",
        "commonName": "FYN",
        "uniprotId": "P06241",
        "chemblId": "CHEMBL1841",
        "targetClass": "Kinase",
        "probability": 0.3321,
        "knownActives": "395 /  1"
      },
      {
        "target": "Lanosterol synthase",
        "commonName": "LSS",
        "uniprotId": "P48449",
        "chemblId": "CHEMBL3593",
        "targetClass": "Isomerase",
        "probability": 0.2688,
        "knownActives": "128 /  5"
      },
      {
        "target": "Cyclin-dependent kinase 5/CDK5 activator 1",
        "commonName": "N/A",
        "uniprotId": "Q00535&Q15078",
        "chemblId": "CHEMBL1907600",
        "targetClass": "Kinase",
        "probability": 0.2394,
        "knownActives": "529 /  1"
      },
      {
        "target": "Phosphatidylinositol 3,4,5-trisphosphate 5-phosphatase 1",
        "commonName": "INPP5D",
        "uniprotId": "Q92835",
        "chemblId": "CHEMBL1781870",
        "targetClass": "Phosphatase",
        "probability": 0.2133,
        "knownActives": "2 /  1"
      },
      {
        "target": "Nischarin",
        "commonName": "NISCH",
        "uniprotId": "Q9Y2I1",
        "chemblId": "CHEMBL3923",
        "targetClass": "Other cytosolic protein",
        "probability": 0.1956,
        "knownActives": "115 /  1"
      },
      {
        "target": "KiSS-1 receptor",
        "commonName": "KISS1R",
        "uniprotId": "Q969F8",
        "chemblId": "CHEMBL5413",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1366,
        "knownActives": "17 /  3"
      },
      {
        "target": "Phospholipase A2, membrane associated",
        "commonName": "PLA2G2A",
        "uniprotId": "P14555",
        "chemblId": "CHEMBL3474",
        "targetClass": "Hydrolase",
        "probability": 0.1326,
        "knownActives": "126 /  3"
      },
      {
        "target": "Phospholipase A2",
        "commonName": "PLA2G1B",
        "uniprotId": "P04054",
        "chemblId": "CHEMBL4426",
        "targetClass": "Hydrolase",
        "probability": 0.1326,
        "knownActives": "59 /  2"
      },
      {
        "target": "Epoxide hydrolase 1",
        "commonName": "EPHX1",
        "uniprotId": "P07099",
        "chemblId": "CHEMBL1968",
        "targetClass": "Protease",
        "probability": 0.1311,
        "knownActives": "150 /  71"
      },
      {
        "target": "Glutamate NMDA receptor; GRIN1/GRIN2B",
        "commonName": "N/A",
        "uniprotId": "Q05586&Q13224",
        "chemblId": "CHEMBL1907603",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.1186,
        "knownActives": "1171 /  4"
      },
      {
        "target": "Glutamate NMDA receptor; GRIN1/GRIN2A",
        "commonName": "N/A",
        "uniprotId": "Q05586&Q12879",
        "chemblId": "CHEMBL1907604",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.1116,
        "knownActives": "108 /  5"
      },
      {
        "target": "Alcohol dehydrogenase 1A",
        "commonName": "ADH1A",
        "uniprotId": "P07327",
        "chemblId": "CHEMBL1970",
        "targetClass": "Oxidoreductase",
        "probability": 0.1114,
        "knownActives": "9 /  16"
      },
      {
        "target": "Alcohol dehydrogenase 1C",
        "commonName": "ADH1C",
        "uniprotId": "P00326",
        "chemblId": "CHEMBL3285",
        "targetClass": "Oxidoreductase",
        "probability": 0.1114,
        "knownActives": "2 /  5"
      },
      {
        "target": "Multidrug and toxin extrusion protein 1",
        "commonName": "SLC47A1",
        "uniprotId": "Q96FL8",
        "chemblId": "CHEMBL1743126",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0961,
        "knownActives": "20 /  1"
      },
      {
        "target": "3-oxo-5-alpha-steroid 4-dehydrogenase 2",
        "commonName": "SRD5A2",
        "uniprotId": "P31213",
        "chemblId": "CHEMBL1856",
        "targetClass": "Oxidoreductase",
        "probability": 0.0734,
        "knownActives": "285 /  28"
      },
      {
        "target": "Solute carrier family 22 member 2",
        "commonName": "SLC22A2",
        "uniprotId": "O15244",
        "chemblId": "CHEMBL1743122",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0708,
        "knownActives": "13 /  1"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0588,
        "knownActives": "4059 /  10"
      },
      {
        "target": "All-trans-retinol dehydrogenase [NAD(+)] ADH4",
        "commonName": "ADH4",
        "uniprotId": "P08319",
        "chemblId": "CHEMBL2990",
        "targetClass": "Oxidoreductase",
        "probability": 0.052,
        "knownActives": "0 /  1"
      },
      {
        "target": "All-trans-retinol dehydrogenase [NAD(+)] ADH1B",
        "commonName": "ADH1B",
        "uniprotId": "P00325",
        "chemblId": "CHEMBL3284",
        "targetClass": "Oxidoreductase",
        "probability": 0.052,
        "knownActives": "0 /  6"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0404,
        "knownActives": "4597 /  1"
      },
      {
        "target": "3-beta-hydroxysteroid-Delta(8),Delta(7)-isomerase",
        "commonName": "EBP",
        "uniprotId": "Q15125",
        "chemblId": "CHEMBL4931",
        "targetClass": "Isomerase",
        "probability": 0.0327,
        "knownActives": "60 /  6"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.0306,
        "knownActives": "2187 /  7"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.0293,
        "knownActives": "762 /  4"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.027,
        "knownActives": "2352 /  45"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.0268,
        "knownActives": "1345 /  22"
      },
      {
        "target": "All-trans-retinol dehydrogenase [NAD(+)] ADH7",
        "commonName": "ADH7",
        "uniprotId": "P40394",
        "chemblId": "CHEMBL3867",
        "targetClass": "Oxidoreductase",
        "probability": 0.0265,
        "knownActives": "0 /  1"
      },
      {
        "target": "Nociceptin receptor",
        "commonName": "OPRL1",
        "uniprotId": "P41146",
        "chemblId": "CHEMBL2014",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0249,
        "knownActives": "2291 /  10"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.0248,
        "knownActives": "2752 /  8"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0243,
        "knownActives": "2770 /  1"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.0225,
        "knownActives": "335 /  4"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.0225,
        "knownActives": "771 /  4"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.0225,
        "knownActives": "243 /  4"
      },
      {
        "target": "Bifunctional epoxide hydrolase 2",
        "commonName": "EPHX2",
        "uniprotId": "P34913",
        "chemblId": "CHEMBL2409",
        "targetClass": "Protease",
        "probability": 0.0209,
        "knownActives": "1602 /  124"
      },
      {
        "target": "5-hydroxytryptamine receptor 6",
        "commonName": "HTR6",
        "uniprotId": "P50406",
        "chemblId": "CHEMBL3371",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0203,
        "knownActives": "3557 /  1"
      },
      {
        "target": "Deoxyhypusine synthase",
        "commonName": "DHPS",
        "uniprotId": "P49366",
        "chemblId": "CHEMBL4415",
        "targetClass": "Transferase",
        "probability": 0.0195,
        "knownActives": "17 /  1"
      },
      {
        "target": "3-oxo-5-alpha-steroid 4-dehydrogenase 1",
        "commonName": "SRD5A1",
        "uniprotId": "P18405",
        "chemblId": "CHEMBL1787",
        "targetClass": "Oxidoreductase",
        "probability": 0.019,
        "knownActives": "286 /  35"
      },
      {
        "target": "Bile acid receptor",
        "commonName": "NR1H4",
        "uniprotId": "Q96RI1",
        "chemblId": "CHEMBL2047",
        "targetClass": "Nuclear receptor",
        "probability": 0.0175,
        "knownActives": "1336 /  17"
      },
      {
        "target": "G-protein coupled bile acid receptor 1",
        "commonName": "GPBAR1",
        "uniprotId": "Q8TDU6",
        "chemblId": "CHEMBL5409",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0159,
        "knownActives": "339 /  1"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.0144,
        "knownActives": "163 /  4"
      },
      {
        "target": "Carbonic anhydrase 3",
        "commonName": "CA3",
        "uniprotId": "P07451",
        "chemblId": "CHEMBL2885",
        "targetClass": "Lyase",
        "probability": 0.0144,
        "knownActives": "78 /  2"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 0.0141,
        "knownActives": "221 /  4"
      },
      {
        "target": "3-keto-steroid reductase/17-beta-hydroxysteroid dehydrogenase 7",
        "commonName": "HSD17B7",
        "uniprotId": "P56937",
        "chemblId": "CHEMBL5999",
        "targetClass": "Oxidoreductase",
        "probability": 0.0136,
        "knownActives": "3 /  2"
      },
      {
        "target": "Glucose-6-phosphate 1-dehydrogenase",
        "commonName": "G6PD",
        "uniprotId": "P11413",
        "chemblId": "CHEMBL5347",
        "targetClass": "Oxidoreductase",
        "probability": 0.0135,
        "knownActives": "20 /  4"
      },
      {
        "target": "Fatty-acid amide hydrolase 1",
        "commonName": "FAAH",
        "uniprotId": "O00519",
        "chemblId": "CHEMBL2243",
        "targetClass": "Hydrolase",
        "probability": 0.0128,
        "knownActives": "1141 /  7"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.0127,
        "knownActives": "2739 /  3"
      },
      {
        "target": "Lysine-specific demethylase 2B",
        "commonName": "KDM2B",
        "uniprotId": "Q8NHM5",
        "chemblId": "CHEMBL3779760",
        "targetClass": "Eraser",
        "probability": 0.0118,
        "knownActives": "349 /  1"
      },
      {
        "target": "Vesicular acetylcholine transporter",
        "commonName": "SLC18A3",
        "uniprotId": "Q16572",
        "chemblId": "CHEMBL4767",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0117,
        "knownActives": "204 /  4"
      },
      {
        "target": "Tyrosyl-DNA phosphodiesterase 1",
        "commonName": "TDP1",
        "uniprotId": "Q9NUW8",
        "chemblId": "CHEMBL1075138",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0112,
        "knownActives": "68 /  1"
      },
      {
        "target": "Alpha-2A adrenergic receptor",
        "commonName": "ADRA2A",
        "uniprotId": "P08913",
        "chemblId": "CHEMBL1867",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.011,
        "knownActives": "689 /  1"
      },
      {
        "target": "N-acylethanolamine-hydrolyzing acid amidase",
        "commonName": "NAAA",
        "uniprotId": "Q02083",
        "chemblId": "CHEMBL4349",
        "targetClass": "Hydrolase",
        "probability": 0.0108,
        "knownActives": "287 /  6"
      },
      {
        "target": "Nitric oxide synthase 1",
        "commonName": "NOS1",
        "uniprotId": "P29475",
        "chemblId": "CHEMBL3568",
        "targetClass": "Oxidoreductase",
        "probability": 0.0104,
        "knownActives": "797 /  35"
      },
      {
        "target": "Peroxisomal N(1)-acetyl-spermine/spermidine oxidase",
        "commonName": "PAOX",
        "uniprotId": "Q6QHF9",
        "chemblId": "CHEMBL2105",
        "targetClass": "Oxidoreductase",
        "probability": 0.0103,
        "knownActives": "9 /  5"
      },
      {
        "target": "Dipeptidyl peptidase 4",
        "commonName": "DPP4",
        "uniprotId": "P27487",
        "chemblId": "CHEMBL284",
        "targetClass": "Protease",
        "probability": 0.0098,
        "knownActives": "3512 /  51"
      },
      {
        "target": "Metabotropic glutamate receptor 5",
        "commonName": "GRM5",
        "uniprotId": "P41594",
        "chemblId": "CHEMBL3227",
        "targetClass": "Family C G protein-coupled receptor",
        "probability": 0.0091,
        "knownActives": "607 /  2"
      },
      {
        "target": "C-X-C chemokine receptor type 4",
        "commonName": "CXCR4",
        "uniprotId": "P61073",
        "chemblId": "CHEMBL2107",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0091,
        "knownActives": "234 /  2"
      },
      {
        "target": "Protein arginine N-methyltransferase 6",
        "commonName": "PRMT6",
        "uniprotId": "Q96LA8",
        "chemblId": "CHEMBL1275221",
        "targetClass": "Writer",
        "probability": 0.0084,
        "knownActives": "118 /  2"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD11B2",
        "uniprotId": "P80365",
        "chemblId": "CHEMBL3746",
        "targetClass": "Oxidoreductase",
        "probability": 0.008,
        "knownActives": "72 /  2"
      },
      {
        "target": "Nitric oxide synthase, inducible",
        "commonName": "NOS2",
        "uniprotId": "P35228",
        "chemblId": "CHEMBL4481",
        "targetClass": "Enzyme",
        "probability": 0.0078,
        "knownActives": "508 /  33"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.0073,
        "knownActives": "877 /  1"
      },
      {
        "target": "Nitric oxide synthase 3",
        "commonName": "NOS3",
        "uniprotId": "P29474",
        "chemblId": "CHEMBL4803",
        "targetClass": "Enzyme",
        "probability": 0.0068,
        "knownActives": "236 /  18"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 3",
        "commonName": "HSD17B3",
        "uniprotId": "P37058",
        "chemblId": "CHEMBL4234",
        "targetClass": "Oxidoreductase",
        "probability": 0.0063,
        "knownActives": "36 /  4"
      },
      {
        "target": "Anti-estrogen binding site (AEBS)",
        "commonName": "N/A",
        "uniprotId": "Q15125&Q9UBM7",
        "chemblId": "CHEMBL612409",
        "targetClass": "Oxidoreductase",
        "probability": 0.0063,
        "knownActives": "9 /  2"
      },
      {
        "target": "Toll-like receptor 4",
        "commonName": "TLR4",
        "uniprotId": "O00206",
        "chemblId": "CHEMBL5255",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.0063,
        "knownActives": "55 /  2"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.005,
        "knownActives": "566 /  4"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.0048,
        "knownActives": "44 /  1"
      },
      {
        "target": "Histone-arginine methyltransferase CARM1",
        "commonName": "CARM1",
        "uniprotId": "Q86X55",
        "chemblId": "CHEMBL5406",
        "targetClass": "Writer",
        "probability": 0.0047,
        "knownActives": "257 /  2"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.0047,
        "knownActives": "1661 /  1"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.0046,
        "knownActives": "3916 /  11"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.0046,
        "knownActives": "3269 /  11"
      }
    ]
  },
  {
    "id": "costunolide",
    "name": "Costunolide",
    "cid": 5281437,
    "smiles": "CC1=CCCC(=C)C2C(CC1)C(=C)C(=O)O2",
    "category": "Sesquiterpene Lactone",
    "topTarget": "Pyruvate kinase PKM (PKM)",
    "topTargetUniprot": "P14618",
    "targetClasses": [
      {
        "label": "Family A G protein-coupled receptor",
        "count": 12,
        "percentage": 12.0,
        "color": "#3B82F6"
      },
      {
        "label": "Nuclear receptor",
        "count": 11,
        "percentage": 11.0,
        "color": "#10B981"
      },
      {
        "label": "Kinase",
        "count": 11,
        "percentage": 11.0,
        "color": "#F59E0B"
      },
      {
        "label": "Oxidoreductase",
        "count": 10,
        "percentage": 10.0,
        "color": "#EF4444"
      },
      {
        "label": "Protease",
        "count": 8,
        "percentage": 8.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Hydrolase",
        "count": 6,
        "percentage": 6.0,
        "color": "#EC4899"
      },
      {
        "label": "Transferase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Phosphatase",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Enzyme",
        "count": 3,
        "percentage": 3.0,
        "color": "#14B8A6"
      },
      {
        "label": "Cytochrome P450",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Secreted protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Transcription factor",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Primary active transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Electrochemical transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Other ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#EC4899"
      },
      {
        "label": "Eraser",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Isomerase",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Ligase",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Phosphodiesterase",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#A855F7"
      }
    ],
    "targets": [
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.9415,
        "knownActives": "112 /  4"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.9117,
        "knownActives": "1740 /  411"
      },
      {
        "target": "NACHT, LRR and PYD domains-containing protein 3",
        "commonName": "NLRP3",
        "uniprotId": "Q96P20",
        "chemblId": "CHEMBL1741208",
        "targetClass": "Unclassified protein",
        "probability": 0.8805,
        "knownActives": "391 /  41"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.7934,
        "knownActives": "2150 /  23"
      },
      {
        "target": "Serine protease 1",
        "commonName": "PRSS1",
        "uniprotId": "P07477",
        "chemblId": "CHEMBL209",
        "targetClass": "Protease",
        "probability": 0.6397,
        "knownActives": "297 /  12"
      },
      {
        "target": "Prothrombin",
        "commonName": "F2",
        "uniprotId": "P00734",
        "chemblId": "CHEMBL204",
        "targetClass": "Protease",
        "probability": 0.6397,
        "knownActives": "1540 /  16"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.5373,
        "knownActives": "1508 /  2"
      },
      {
        "target": "Progesterone receptor",
        "commonName": "PGR",
        "uniprotId": "P06401",
        "chemblId": "CHEMBL208",
        "targetClass": "Nuclear receptor",
        "probability": 0.5055,
        "knownActives": "1094 /  60"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.4873,
        "knownActives": "1489 /  121"
      },
      {
        "target": "Steroid 17-alpha-hydroxylase/17,20 lyase",
        "commonName": "CYP17A1",
        "uniprotId": "P05093",
        "chemblId": "CHEMBL3522",
        "targetClass": "Cytochrome P450",
        "probability": 0.4809,
        "knownActives": "487 /  27"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.4789,
        "knownActives": "408 /  103"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.4732,
        "knownActives": "2512 /  1"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 0.4714,
        "knownActives": "756 /  9"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.4712,
        "knownActives": "296 /  2"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha4/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P43681",
        "chemblId": "CHEMBL1907589",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.4712,
        "knownActives": "577 /  4"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.4711,
        "knownActives": "1976 /  51"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.471,
        "knownActives": "579 /  45"
      },
      {
        "target": "Ubiquitin carboxyl-terminal hydrolase 7",
        "commonName": "USP7",
        "uniprotId": "Q93009",
        "chemblId": "CHEMBL2157850",
        "targetClass": "Protease",
        "probability": 0.4683,
        "knownActives": "181 /  1"
      },
      {
        "target": "Toll-like receptor 4",
        "commonName": "TLR4",
        "uniprotId": "O00206",
        "chemblId": "CHEMBL5255",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.4683,
        "knownActives": "82 /  9"
      },
      {
        "target": "Mineralocorticoid receptor",
        "commonName": "NR3C2",
        "uniprotId": "P08235",
        "chemblId": "CHEMBL1994",
        "targetClass": "Nuclear receptor",
        "probability": 0.4576,
        "knownActives": "552 /  37"
      },
      {
        "target": "Ubiquitin-conjugating enzyme E2 D3",
        "commonName": "UBE2D3",
        "uniprotId": "P61077",
        "chemblId": "CHEMBL4105911",
        "targetClass": "Transferase",
        "probability": 0.451,
        "knownActives": "5 /  4"
      },
      {
        "target": "Bile acid receptor",
        "commonName": "NR1H4",
        "uniprotId": "Q96RI1",
        "chemblId": "CHEMBL2047",
        "targetClass": "Nuclear receptor",
        "probability": 0.4463,
        "knownActives": "1038 /  44"
      },
      {
        "target": "Tubulin--tyrosine ligase",
        "commonName": "TTL",
        "uniprotId": "Q8NG68",
        "chemblId": "CHEMBL5549",
        "targetClass": "Ligase",
        "probability": 0.4348,
        "knownActives": "14 /  17"
      },
      {
        "target": "TGF-beta receptor type-1",
        "commonName": "TGFBR1",
        "uniprotId": "P36897",
        "chemblId": "CHEMBL4439",
        "targetClass": "Kinase",
        "probability": 0.4045,
        "knownActives": "1846 /  1"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.3925,
        "knownActives": "914 /  2"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.3835,
        "knownActives": "203 /  6"
      },
      {
        "target": "Protein farnesyltransferase",
        "commonName": "N/A",
        "uniprotId": "P49354&P49356",
        "chemblId": "CHEMBL2094108",
        "targetClass": "Transferase",
        "probability": 0.3835,
        "knownActives": "943 /  14"
      },
      {
        "target": "Chymotrypsin-C",
        "commonName": "CTRC",
        "uniprotId": "Q99895",
        "chemblId": "CHEMBL2386",
        "targetClass": "Protease",
        "probability": 0.3809,
        "knownActives": "37 /  3"
      },
      {
        "target": "Fatty-acid amide hydrolase 1",
        "commonName": "FAAH",
        "uniprotId": "O00519",
        "chemblId": "CHEMBL2243",
        "targetClass": "Hydrolase",
        "probability": 0.3472,
        "knownActives": "836 /  25"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.3471,
        "knownActives": "2572 /  20"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.3405,
        "knownActives": "779 /  39"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.3367,
        "knownActives": "96 /  22"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD11B2",
        "uniprotId": "P80365",
        "chemblId": "CHEMBL3746",
        "targetClass": "Oxidoreductase",
        "probability": 0.3175,
        "knownActives": "53 /  17"
      },
      {
        "target": "Interleukin-1 beta",
        "commonName": "IL1B",
        "uniprotId": "P01584",
        "chemblId": "CHEMBL1909490",
        "targetClass": "Secreted protein",
        "probability": 0.3168,
        "knownActives": "149 /  4"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.3123,
        "knownActives": "3904 /  3"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.303,
        "knownActives": "138 /  4"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2969,
        "knownActives": "4576 /  1"
      },
      {
        "target": "Phospholipase A2, membrane associated",
        "commonName": "PLA2G2A",
        "uniprotId": "P14555",
        "chemblId": "CHEMBL3474",
        "targetClass": "Hydrolase",
        "probability": 0.2747,
        "knownActives": "69 /  11"
      },
      {
        "target": "Gamma-secretase",
        "commonName": "N/A",
        "uniprotId": "Q96BI3&Q9NZ42&Q8WW43&P49768&Q92542&P49810",
        "chemblId": "CHEMBL2094135",
        "targetClass": "Protease",
        "probability": 0.266,
        "knownActives": "1551 /  7"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.2657,
        "knownActives": "2094 /  75"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2643,
        "knownActives": "2733 /  35"
      },
      {
        "target": "Aldo-keto reductase family 1 member C1",
        "commonName": "AKR1C1",
        "uniprotId": "Q04828",
        "chemblId": "CHEMBL5905",
        "targetClass": "Oxidoreductase",
        "probability": 0.2479,
        "knownActives": "6 /  1"
      },
      {
        "target": "Aldo-keto reductase family 1 member C2",
        "commonName": "AKR1C2",
        "uniprotId": "P52895",
        "chemblId": "CHEMBL5847",
        "targetClass": "Oxidoreductase",
        "probability": 0.2479,
        "knownActives": "8 /  1"
      },
      {
        "target": "Aldo-keto reductase family 1 member C3",
        "commonName": "AKR1C3",
        "uniprotId": "P42330",
        "chemblId": "CHEMBL4681",
        "targetClass": "Oxidoreductase",
        "probability": 0.2479,
        "knownActives": "232 /  15"
      },
      {
        "target": "Sex hormone-binding globulin",
        "commonName": "SHBG",
        "uniprotId": "P04278",
        "chemblId": "CHEMBL3305",
        "targetClass": "Secreted protein",
        "probability": 0.2479,
        "knownActives": "63 /  42"
      },
      {
        "target": "Endothelial PAS domain-containing protein 1",
        "commonName": "EPAS1",
        "uniprotId": "Q99814",
        "chemblId": "CHEMBL1744522",
        "targetClass": "Transcription factor",
        "probability": 0.2457,
        "knownActives": "295 /  4"
      },
      {
        "target": "Coagulation factor X",
        "commonName": "F10",
        "uniprotId": "P00742",
        "chemblId": "CHEMBL244",
        "targetClass": "Protease",
        "probability": 0.2443,
        "knownActives": "2301 /  18"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.2361,
        "knownActives": "742 /  9"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 2",
        "commonName": "TRPM2",
        "uniprotId": "O94759",
        "chemblId": "CHEMBL1250402",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2353,
        "knownActives": "8 /  1"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2353,
        "knownActives": "3472 /  1"
      },
      {
        "target": "Exportin-1",
        "commonName": "XPO1",
        "uniprotId": "O14980",
        "chemblId": "CHEMBL5661",
        "targetClass": "Unclassified protein",
        "probability": 0.2338,
        "knownActives": "52 /  6"
      },
      {
        "target": "Delta(24)-sterol reductase",
        "commonName": "DHCR24",
        "uniprotId": "Q15392",
        "chemblId": "CHEMBL2331059",
        "targetClass": "Oxidoreductase",
        "probability": 0.2335,
        "knownActives": "11 /  11"
      },
      {
        "target": "Short transient receptor potential channel 6",
        "commonName": "TRPC6",
        "uniprotId": "Q9Y210",
        "chemblId": "CHEMBL2417347",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2322,
        "knownActives": "64 /  4"
      },
      {
        "target": "3-hydroxy-3-methylglutaryl-coenzyme A reductase",
        "commonName": "HMGCR",
        "uniprotId": "P04035",
        "chemblId": "CHEMBL402",
        "targetClass": "Oxidoreductase",
        "probability": 0.2284,
        "knownActives": "81 /  26"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.2281,
        "knownActives": "1327 /  2"
      },
      {
        "target": "Geranylgeranyl transferase type I",
        "commonName": "N/A",
        "uniprotId": "P49354&P53609",
        "chemblId": "CHEMBL2095164",
        "targetClass": "Transferase",
        "probability": 0.2257,
        "knownActives": "210 /  1"
      },
      {
        "target": "Protein kinase C beta type",
        "commonName": "PRKCB",
        "uniprotId": "P05771",
        "chemblId": "CHEMBL3045",
        "targetClass": "Kinase",
        "probability": 0.216,
        "knownActives": "215 /  13"
      },
      {
        "target": "Thromboxane A2 receptor",
        "commonName": "TBXA2R",
        "uniprotId": "P21731",
        "chemblId": "CHEMBL2069",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2138,
        "knownActives": "92 /  17"
      },
      {
        "target": "Protein kinase C alpha type",
        "commonName": "PRKCA",
        "uniprotId": "P17252",
        "chemblId": "CHEMBL299",
        "targetClass": "Kinase",
        "probability": 0.2134,
        "knownActives": "678 /  273"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.2126,
        "knownActives": "59 /  5"
      },
      {
        "target": "3-oxo-5-alpha-steroid 4-dehydrogenase 2",
        "commonName": "SRD5A2",
        "uniprotId": "P31213",
        "chemblId": "CHEMBL1856",
        "targetClass": "Oxidoreductase",
        "probability": 0.2075,
        "knownActives": "262 /  29"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.2023,
        "knownActives": "290 /  20"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.2023,
        "knownActives": "455 /  52"
      },
      {
        "target": "Potassium-transporting ATPase alpha chain 2",
        "commonName": "ATP12A",
        "uniprotId": "P54707",
        "chemblId": "CHEMBL2933",
        "targetClass": "Primary active transporter",
        "probability": 0.1869,
        "knownActives": "10 /  10"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.1854,
        "knownActives": "2833 /  4"
      },
      {
        "target": "Receptor-interacting serine/threonine-protein kinase 3",
        "commonName": "RIPK3",
        "uniprotId": "Q9Y572",
        "chemblId": "CHEMBL1795199",
        "targetClass": "Kinase",
        "probability": 0.1782,
        "knownActives": "198 /  1"
      },
      {
        "target": "M-phase inducer phosphatase 3",
        "commonName": "CDC25C",
        "uniprotId": "P30307",
        "chemblId": "CHEMBL2378",
        "targetClass": "Phosphatase",
        "probability": 0.166,
        "knownActives": "40 /  5"
      },
      {
        "target": "M-phase inducer phosphatase 2",
        "commonName": "CDC25B",
        "uniprotId": "P30305",
        "chemblId": "CHEMBL4804",
        "targetClass": "Phosphatase",
        "probability": 0.166,
        "knownActives": "121 /  24"
      },
      {
        "target": "M-phase inducer phosphatase 1",
        "commonName": "CDC25A",
        "uniprotId": "P30304",
        "chemblId": "CHEMBL3775",
        "targetClass": "Phosphatase",
        "probability": 0.166,
        "knownActives": "81 /  21"
      },
      {
        "target": "Cytochrome P450 2C19",
        "commonName": "CYP2C19",
        "uniprotId": "P33261",
        "chemblId": "CHEMBL3622",
        "targetClass": "Cytochrome P450",
        "probability": 0.1652,
        "knownActives": "93 /  6"
      },
      {
        "target": "Oxysterols receptor LXR-alpha",
        "commonName": "NR1H3",
        "uniprotId": "Q13133",
        "chemblId": "CHEMBL2808",
        "targetClass": "Nuclear receptor",
        "probability": 0.1612,
        "knownActives": "492 /  33"
      },
      {
        "target": "Oxysterols receptor LXR-beta",
        "commonName": "NR1H2",
        "uniprotId": "P55055",
        "chemblId": "CHEMBL4093",
        "targetClass": "Nuclear receptor",
        "probability": 0.1612,
        "knownActives": "557 /  14"
      },
      {
        "target": "Prostaglandin E2 receptor EP3 subtype",
        "commonName": "PTGER3",
        "uniprotId": "P43115",
        "chemblId": "CHEMBL3710",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1608,
        "knownActives": "388 /  15"
      },
      {
        "target": "Heat shock protein HSP 90-alpha",
        "commonName": "HSP90AA1",
        "uniprotId": "P07900",
        "chemblId": "CHEMBL3880",
        "targetClass": "Other cytosolic protein",
        "probability": 0.1548,
        "knownActives": "585 /  13"
      },
      {
        "target": "Glutathione S-transferase P",
        "commonName": "GSTP1",
        "uniprotId": "P09211",
        "chemblId": "CHEMBL3902",
        "targetClass": "Transferase",
        "probability": 0.1544,
        "knownActives": "72 /  3"
      },
      {
        "target": "Bcl-2-like protein 1",
        "commonName": "BCL2L1",
        "uniprotId": "Q07817",
        "chemblId": "CHEMBL4625",
        "targetClass": "Other ion channel",
        "probability": 0.1539,
        "knownActives": "84 /  7"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.1539,
        "knownActives": "551 /  7"
      },
      {
        "target": "Phosphatidylserine lipase ABHD16A",
        "commonName": "ABHD16A",
        "uniprotId": "O95870",
        "chemblId": "CHEMBL6168",
        "targetClass": "Hydrolase",
        "probability": 0.1415,
        "knownActives": "5 /  2"
      },
      {
        "target": "Nuclear receptor subfamily 4 group A member 2",
        "commonName": "NR4A2",
        "uniprotId": "P43354",
        "chemblId": "CHEMBL5002",
        "targetClass": "Nuclear receptor",
        "probability": 0.141,
        "knownActives": "44 /  3"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.139,
        "knownActives": "658 /  8"
      },
      {
        "target": "Pancreatic triacylglycerol lipase",
        "commonName": "PNLIP",
        "uniprotId": "P16233",
        "chemblId": "CHEMBL1812",
        "targetClass": "Hydrolase",
        "probability": 0.1378,
        "knownActives": "17 /  6"
      },
      {
        "target": "Prostaglandin E2 receptor EP4 subtype",
        "commonName": "PTGER4",
        "uniprotId": "P35408",
        "chemblId": "CHEMBL1836",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1335,
        "knownActives": "165 /  19"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1334,
        "knownActives": "2523 /  28"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1327,
        "knownActives": "4085 /  16"
      },
      {
        "target": "Substance-K receptor",
        "commonName": "TACR2",
        "uniprotId": "P21452",
        "chemblId": "CHEMBL2327",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1306,
        "knownActives": "384 /  1"
      },
      {
        "target": "Integrin alpha-L/beta-2 (LFA-1)",
        "commonName": "N/A",
        "uniprotId": "P20701&P05107",
        "chemblId": "CHEMBL2364172",
        "targetClass": "Membrane receptor",
        "probability": 0.1306,
        "knownActives": "1 /  2"
      },
      {
        "target": "Cholesteryl ester transfer protein",
        "commonName": "CETP",
        "uniprotId": "P11597",
        "chemblId": "CHEMBL3572",
        "targetClass": "Other ion channel",
        "probability": 0.1287,
        "knownActives": "302 /  4"
      },
      {
        "target": "Tumor necrosis factor",
        "commonName": "TNF",
        "uniprotId": "P01375",
        "chemblId": "CHEMBL1825",
        "targetClass": "Secreted protein",
        "probability": 0.1238,
        "knownActives": "968 /  9"
      },
      {
        "target": "DNA polymerase kappa",
        "commonName": "POLK",
        "uniprotId": "Q9UBT6",
        "chemblId": "CHEMBL5365",
        "targetClass": "Enzyme",
        "probability": 0.1198,
        "knownActives": "4 /  1"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.1196,
        "knownActives": "232 /  35"
      },
      {
        "target": "DNA polymerase beta",
        "commonName": "POLB",
        "uniprotId": "P06746",
        "chemblId": "CHEMBL2392",
        "targetClass": "Enzyme",
        "probability": 0.1191,
        "knownActives": "2 /  3"
      },
      {
        "target": "Proprotein convertase subtilisin/kexin type 7",
        "commonName": "PCSK7",
        "uniprotId": "Q16549",
        "chemblId": "CHEMBL2232",
        "targetClass": "Protease",
        "probability": 0.1164,
        "knownActives": "1 /  1"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.1152,
        "knownActives": "256 /  46"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.1152,
        "knownActives": "380 /  44"
      },
      {
        "target": "Muscarinic acetylcholine receptor M1",
        "commonName": "CHRM1",
        "uniprotId": "P11229",
        "chemblId": "CHEMBL216",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.11,
        "knownActives": "1162 /  46"
      },
      {
        "target": "Muscarinic acetylcholine receptor M2",
        "commonName": "CHRM2",
        "uniprotId": "P08172",
        "chemblId": "CHEMBL211",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.11,
        "knownActives": "1026 /  37"
      },
      {
        "target": "Cannabinoid receptor 1",
        "commonName": "CNR1",
        "uniprotId": "P21554",
        "chemblId": "CHEMBL218",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.108,
        "knownActives": "2974 /  18"
      },
      {
        "target": "Protein kinase C gamma type",
        "commonName": "PRKCG",
        "uniprotId": "P05129",
        "chemblId": "CHEMBL2938",
        "targetClass": "Kinase",
        "probability": 0.1061,
        "knownActives": "91 /  8"
      },
      {
        "target": "Prostacyclin receptor",
        "commonName": "PTGIR",
        "uniprotId": "P43119",
        "chemblId": "CHEMBL1995",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1031,
        "knownActives": "46 /  12"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.1021,
        "knownActives": "5539 /  7"
      }
    ]
  },
  {
    "id": "curcumin",
    "name": "Curcumin",
    "cid": 969516,
    "smiles": "O=C(\\C=C\\c1ccc(O)c(OC)c1)CC(=O)\\C=C\\c2ccc(O)c(OC)c2",
    "category": "Diarylheptanoid Polyphenol",
    "topTarget": "Dual specificity tyrosine-phosphorylation-regulated kinase 1B (DYRK1B)",
    "topTargetUniprot": "Q9Y463",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 17,
        "percentage": 17.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 15,
        "percentage": 15.0,
        "color": "#10B981"
      },
      {
        "label": "Lyase",
        "count": 12,
        "percentage": 12.0,
        "color": "#F59E0B"
      },
      {
        "label": "Cytochrome P450",
        "count": 7,
        "percentage": 7.0,
        "color": "#EF4444"
      },
      {
        "label": "Eraser",
        "count": 6,
        "percentage": 6.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Transcription factor",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Protease",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Secreted protein",
        "count": 5,
        "percentage": 5.0,
        "color": "#6366F1"
      },
      {
        "label": "Primary active transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Unclassified protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Transferase",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Surface antigen",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Isomerase",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Nuclear receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Phosphatase",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Hydrolase",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Structural protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      }
    ],
    "targets": [
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1B",
        "commonName": "DYRK1B",
        "uniprotId": "Q9Y463",
        "chemblId": "CHEMBL5543",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "87 /  8"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "21 /  17"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 1.0,
        "knownActives": "118 /  118"
      },
      {
        "target": "CDGSH iron-sulfur domain-containing protein 1",
        "commonName": "CISD1",
        "uniprotId": "Q9NZ45",
        "chemblId": "CHEMBL1795168",
        "targetClass": "Unclassified protein",
        "probability": 1.0,
        "knownActives": "25 /  8"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 1.0,
        "knownActives": "24 /  7"
      },
      {
        "target": "Dual specificity protein kinase CLK4",
        "commonName": "CLK4",
        "uniprotId": "Q9HAZ1",
        "chemblId": "CHEMBL4203",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "31 /  1"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 3",
        "commonName": "ATP2A3",
        "uniprotId": "Q93084",
        "chemblId": "CHEMBL2401",
        "targetClass": "Primary active transporter",
        "probability": 1.0,
        "knownActives": "3 /  1"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 2",
        "commonName": "DYRK2",
        "uniprotId": "Q92630",
        "chemblId": "CHEMBL4376",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "62 /  10"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "20 /  10"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "532 /  78"
      },
      {
        "target": "Nuclear factor erythroid 2-related factor 2",
        "commonName": "NFE2L2",
        "uniprotId": "Q16236",
        "chemblId": "CHEMBL1075094",
        "targetClass": "Transcription factor",
        "probability": 1.0,
        "knownActives": "11 /  36"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "176 /  14"
      },
      {
        "target": "Histone acetyltransferase p300",
        "commonName": "EP300",
        "uniprotId": "Q09472",
        "chemblId": "CHEMBL3784",
        "targetClass": "Writer",
        "probability": 1.0,
        "knownActives": "56 /  17"
      },
      {
        "target": "Lactoylglutathione lyase",
        "commonName": "GLO1",
        "uniprotId": "Q04760",
        "chemblId": "CHEMBL2424",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "32 /  8"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "108 /  10"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 1.0,
        "knownActives": "263 /  133"
      },
      {
        "target": "Dual specificity protein kinase CLK1",
        "commonName": "CLK1",
        "uniprotId": "P49759",
        "chemblId": "CHEMBL4224",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "73 /  4"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "94 /  28"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 1.0,
        "knownActives": "54 /  19"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "400 /  8"
      },
      {
        "target": "Nitric oxide synthase, inducible",
        "commonName": "NOS2",
        "uniprotId": "P35228",
        "chemblId": "CHEMBL4481",
        "targetClass": "Enzyme",
        "probability": 1.0,
        "knownActives": "9 /  1"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "244 /  12"
      },
      {
        "target": "Glutathione S-transferase Mu 2",
        "commonName": "GSTM2",
        "uniprotId": "P28161",
        "chemblId": "CHEMBL4589",
        "targetClass": "Transferase",
        "probability": 1.0,
        "knownActives": "1 /  1"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "620 /  357"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "31 /  20"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "124 /  88"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "74 /  18"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "316 /  96"
      },
      {
        "target": "Nuclear factor NF-kappa-B p105 subunit",
        "commonName": "NFKB1",
        "uniprotId": "P19838",
        "chemblId": "CHEMBL3251",
        "targetClass": "Transcription factor",
        "probability": 1.0,
        "knownActives": "9 /  9"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 2",
        "commonName": "ATP2A2",
        "uniprotId": "P16615",
        "chemblId": "CHEMBL3901",
        "targetClass": "Primary active transporter",
        "probability": 1.0,
        "knownActives": "3 /  1"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "107 /  14"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 1.0,
        "knownActives": "175 /  64"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "119 /  21"
      },
      {
        "target": "Tissue factor",
        "commonName": "F3",
        "uniprotId": "P13726",
        "chemblId": "CHEMBL4081",
        "targetClass": "Surface antigen",
        "probability": 1.0,
        "knownActives": "59 /  10"
      },
      {
        "target": "HSP60/HSP10",
        "commonName": "N/A",
        "uniprotId": "P10809&P61604",
        "chemblId": "CHEMBL4106131",
        "targetClass": "Unclassified protein",
        "probability": 1.0,
        "knownActives": "20 /  3"
      },
      {
        "target": "Microtubule-associated protein tau",
        "commonName": "MAPT",
        "uniprotId": "P10636",
        "chemblId": "CHEMBL1293224",
        "targetClass": "Other cytosolic protein",
        "probability": 1.0,
        "knownActives": "52 /  22"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "545 /  191"
      },
      {
        "target": "Transcription factor AP1",
        "commonName": "N/A",
        "uniprotId": "P05412&P01100",
        "chemblId": "CHEMBL2111421",
        "targetClass": "Transcription factor",
        "probability": 1.0,
        "knownActives": "3 /  4"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 1.0,
        "knownActives": "308 /  166"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "622 /  62"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "540 /  62"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "588 /  118"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 1.0,
        "knownActives": "216 /  56"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 3",
        "commonName": "DYRK3",
        "uniprotId": "O43781",
        "chemblId": "CHEMBL4575",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "27 /  1"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "435 /  68"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 1.0,
        "knownActives": "113 /  38"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.9974,
        "knownActives": "139 /  108"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.9971,
        "knownActives": "7 /  6"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.9944,
        "knownActives": "326 /  24"
      },
      {
        "target": "Tyrosine-protein kinase ABL1",
        "commonName": "ABL1",
        "uniprotId": "P00519",
        "chemblId": "CHEMBL1862",
        "targetClass": "Kinase",
        "probability": 0.9896,
        "knownActives": "193 /  2"
      },
      {
        "target": "DNA topoisomerase 2-alpha",
        "commonName": "TOP2A",
        "uniprotId": "P11388",
        "chemblId": "CHEMBL1806",
        "targetClass": "Isomerase",
        "probability": 0.9851,
        "knownActives": "44 /  20"
      },
      {
        "target": "Inhibitor of NF-kappa-B kinase (IKK)",
        "commonName": "N/A",
        "uniprotId": "O14920&O15111&Q9Y6K9",
        "chemblId": "CHEMBL2111328",
        "targetClass": "Kinase",
        "probability": 0.9825,
        "knownActives": "2 /  3"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.9772,
        "knownActives": "20 /  5"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9554,
        "knownActives": "277 /  11"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.9505,
        "knownActives": "316 /  39"
      },
      {
        "target": "Histone deacetylase 8",
        "commonName": "HDAC8",
        "uniprotId": "Q9BY41",
        "chemblId": "CHEMBL3192",
        "targetClass": "Eraser",
        "probability": 0.9441,
        "knownActives": "139 /  26"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.9441,
        "knownActives": "111 /  22"
      },
      {
        "target": "RAC-alpha serine/threonine-protein kinase",
        "commonName": "AKT1",
        "uniprotId": "P31749",
        "chemblId": "CHEMBL4282",
        "targetClass": "Kinase",
        "probability": 0.8449,
        "knownActives": "154 /  4"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 0.8377,
        "knownActives": "153 /  20"
      },
      {
        "target": "Aldo-keto reductase family 1 member B10",
        "commonName": "AKR1B10",
        "uniprotId": "O60218",
        "chemblId": "CHEMBL5983",
        "targetClass": "Oxidoreductase",
        "probability": 0.8295,
        "knownActives": "54 /  19"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 3",
        "commonName": "HSD17B3",
        "uniprotId": "P37058",
        "chemblId": "CHEMBL4234",
        "targetClass": "Oxidoreductase",
        "probability": 0.7631,
        "knownActives": "98 /  4"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.7557,
        "knownActives": "278 /  6"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.7458,
        "knownActives": "332 /  30"
      },
      {
        "target": "Islet amyloid polypeptide",
        "commonName": "IAPP",
        "uniprotId": "P10997",
        "chemblId": "CHEMBL1914266",
        "targetClass": "Secreted protein",
        "probability": 0.7151,
        "knownActives": "16 /  9"
      },
      {
        "target": "Histone deacetylase 3",
        "commonName": "HDAC3",
        "uniprotId": "O15379",
        "chemblId": "CHEMBL1829",
        "targetClass": "Eraser",
        "probability": 0.6039,
        "knownActives": "111 /  12"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.5513,
        "knownActives": "123 /  4"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 0.4409,
        "knownActives": "163 /  13"
      },
      {
        "target": "Collagenase 3",
        "commonName": "MMP13",
        "uniprotId": "P45452",
        "chemblId": "CHEMBL280",
        "targetClass": "Protease",
        "probability": 0.4293,
        "knownActives": "87 /  7"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.3609,
        "knownActives": "318 /  122"
      },
      {
        "target": "Fibroblast growth factor receptor 1",
        "commonName": "FGFR1",
        "uniprotId": "P11362",
        "chemblId": "CHEMBL3650",
        "targetClass": "Kinase",
        "probability": 0.2784,
        "knownActives": "345 /  9"
      },
      {
        "target": "Tumor necrosis factor",
        "commonName": "TNF",
        "uniprotId": "P01375",
        "chemblId": "CHEMBL1825",
        "targetClass": "Secreted protein",
        "probability": 0.2694,
        "knownActives": "49 /  4"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.2651,
        "knownActives": "66 /  25"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.2651,
        "knownActives": "33 /  26"
      },
      {
        "target": "Stromal cell-derived factor 1",
        "commonName": "CXCL12",
        "uniprotId": "P48061",
        "chemblId": "CHEMBL3286074",
        "targetClass": "Secreted protein",
        "probability": 0.2195,
        "knownActives": "28 /  26"
      },
      {
        "target": "Neutrophil elastase",
        "commonName": "ELANE",
        "uniprotId": "P08246",
        "chemblId": "CHEMBL248",
        "targetClass": "Protease",
        "probability": 0.1646,
        "knownActives": "63 /  15"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.1637,
        "knownActives": "2406 /  378"
      },
      {
        "target": "Interleukin-6",
        "commonName": "IL6",
        "uniprotId": "P05231",
        "chemblId": "CHEMBL1795129",
        "targetClass": "Secreted protein",
        "probability": 0.16,
        "knownActives": "4 /  2"
      },
      {
        "target": "Farnesyl pyrophosphate synthase",
        "commonName": "FDPS",
        "uniprotId": "P14324",
        "chemblId": "CHEMBL1782",
        "targetClass": "Transferase",
        "probability": 0.1561,
        "knownActives": "145 /  4"
      },
      {
        "target": "Cytochrome P450 2C9",
        "commonName": "CYP2C9",
        "uniprotId": "P11712",
        "chemblId": "CHEMBL3397",
        "targetClass": "Cytochrome P450",
        "probability": 0.1487,
        "knownActives": "15 /  4"
      },
      {
        "target": "Bifunctional epoxide hydrolase 2",
        "commonName": "EPHX2",
        "uniprotId": "P34913",
        "chemblId": "CHEMBL2409",
        "targetClass": "Protease",
        "probability": 0.1332,
        "knownActives": "45 /  20"
      },
      {
        "target": "Thioredoxin reductase 1, cytoplasmic",
        "commonName": "TXNRD1",
        "uniprotId": "Q16881",
        "chemblId": "CHEMBL1927",
        "targetClass": "Oxidoreductase",
        "probability": 0.1217,
        "knownActives": "6 /  5"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1057,
        "knownActives": "94 /  6"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.1049,
        "knownActives": "71 /  23"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.1047,
        "knownActives": "298 /  210"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.103,
        "knownActives": "259 /  76"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.097,
        "knownActives": "38 /  24"
      },
      {
        "target": "Cytochrome P450 2C19",
        "commonName": "CYP2C19",
        "uniprotId": "P33261",
        "chemblId": "CHEMBL3622",
        "targetClass": "Cytochrome P450",
        "probability": 0.0883,
        "knownActives": "9 /  4"
      },
      {
        "target": "Cytochrome P450 2D6",
        "commonName": "CYP2D6",
        "uniprotId": "P10635",
        "chemblId": "CHEMBL289",
        "targetClass": "Cytochrome P450",
        "probability": 0.0883,
        "knownActives": "10 /  1"
      },
      {
        "target": "Cytochrome P450 3A4",
        "commonName": "CYP3A4",
        "uniprotId": "P08684",
        "chemblId": "CHEMBL340",
        "targetClass": "Cytochrome P450",
        "probability": 0.0883,
        "knownActives": "24 /  4"
      },
      {
        "target": "Lymphocyte antigen 96",
        "commonName": "LY96",
        "uniprotId": "Q9Y6Y9",
        "chemblId": "CHEMBL2375202",
        "targetClass": "Surface antigen",
        "probability": 0.0879,
        "knownActives": "3 /  5"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.0864,
        "knownActives": "675 /  88"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.0835,
        "knownActives": "25 /  22"
      },
      {
        "target": "Proto-oncogene tyrosine-protein kinase Src",
        "commonName": "SRC",
        "uniprotId": "P12931",
        "chemblId": "CHEMBL267",
        "targetClass": "Kinase",
        "probability": 0.0783,
        "knownActives": "520 /  11"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 0.0715,
        "knownActives": "77 /  97"
      },
      {
        "target": "Cytochrome P450 1A2",
        "commonName": "CYP1A2",
        "uniprotId": "P05177",
        "chemblId": "CHEMBL3356",
        "targetClass": "Cytochrome P450",
        "probability": 0.0703,
        "knownActives": "11 /  14"
      },
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0686,
        "knownActives": "15 /  8"
      },
      {
        "target": "Tubulin beta-1 chain",
        "commonName": "TUBB1",
        "uniprotId": "Q9H4B7",
        "chemblId": "CHEMBL1915",
        "targetClass": "Structural protein",
        "probability": 0.0652,
        "knownActives": "19 /  36"
      },
      {
        "target": "Cyclin-dependent kinase 4/cyclin D1",
        "commonName": "N/A",
        "uniprotId": "P11802&P24385",
        "chemblId": "CHEMBL1907601",
        "targetClass": "Kinase",
        "probability": 0.0644,
        "knownActives": "198 /  2"
      },
      {
        "target": "Macrophage migration inhibitory factor",
        "commonName": "MIF",
        "uniprotId": "P14174",
        "chemblId": "CHEMBL2085",
        "targetClass": "Enzyme",
        "probability": 0.0635,
        "knownActives": "153 /  12"
      },
      {
        "target": "Adenosine receptor A1",
        "commonName": "ADORA1",
        "uniprotId": "P30542",
        "chemblId": "CHEMBL226",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0559,
        "knownActives": "149 /  2"
      }
    ]
  },
  {
    "id": "cynaropicrin",
    "name": "Cynaropicrin",
    "cid": 5281773,
    "smiles": "C=C1C(=O)OC2CC(=C)C(OC(=O)C(=C)CO)C3C1C2OC3=O",
    "category": "Sesquiterpene Lactone",
    "topTarget": "Prostaglandin G/H synthase 2 (PTGS2)",
    "topTargetUniprot": "P35354",
    "targetClasses": [
      {
        "label": "Lyase",
        "count": 13,
        "percentage": 13.0,
        "color": "#3B82F6"
      },
      {
        "label": "Kinase",
        "count": 10,
        "percentage": 10.0,
        "color": "#10B981"
      },
      {
        "label": "Transferase",
        "count": 8,
        "percentage": 8.0,
        "color": "#F59E0B"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 8,
        "percentage": 8.0,
        "color": "#EF4444"
      },
      {
        "label": "Protease",
        "count": 7,
        "percentage": 7.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Nuclear receptor",
        "count": 6,
        "percentage": 6.0,
        "color": "#EC4899"
      },
      {
        "label": "Oxidoreductase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Phosphatase",
        "count": 5,
        "percentage": 5.0,
        "color": "#6366F1"
      },
      {
        "label": "Transcription factor",
        "count": 5,
        "percentage": 5.0,
        "color": "#14B8A6"
      },
      {
        "label": "Primary active transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Reader",
        "count": 4,
        "percentage": 4.0,
        "color": "#84CC16"
      },
      {
        "label": "Electrochemical transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Unclassified protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Hydrolase",
        "count": 3,
        "percentage": 3.0,
        "color": "#3B82F6"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Other cytosolic protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#EC4899"
      },
      {
        "label": "Cytochrome P450",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Phosphodiesterase",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Isomerase",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Other nuclear protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Ligase",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#A855F7"
      }
    ],
    "targets": [
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.7757,
        "knownActives": "1765 /  19"
      },
      {
        "target": "Toll-like receptor 4",
        "commonName": "TLR4",
        "uniprotId": "O00206",
        "chemblId": "CHEMBL5255",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.6348,
        "knownActives": "80 /  9"
      },
      {
        "target": "Solute carrier family 2, facilitated glucose transporter member 1",
        "commonName": "SLC2A1",
        "uniprotId": "P11166",
        "chemblId": "CHEMBL2535",
        "targetClass": "Electrochemical transporter",
        "probability": 0.5702,
        "knownActives": "80 /  12"
      },
      {
        "target": "Adenylate cyclase type 1",
        "commonName": "ADCY1",
        "uniprotId": "Q08828",
        "chemblId": "CHEMBL2899",
        "targetClass": "Lyase",
        "probability": 0.5661,
        "knownActives": "71 /  45"
      },
      {
        "target": "Adenylate cyclase type 8",
        "commonName": "ADCY8",
        "uniprotId": "P40145",
        "chemblId": "CHEMBL2960",
        "targetClass": "Lyase",
        "probability": 0.5508,
        "knownActives": "11 /  1"
      },
      {
        "target": "NACHT, LRR and PYD domains-containing protein 3",
        "commonName": "NLRP3",
        "uniprotId": "Q96P20",
        "chemblId": "CHEMBL1741208",
        "targetClass": "Unclassified protein",
        "probability": 0.492,
        "knownActives": "378 /  41"
      },
      {
        "target": "Geranylgeranyl transferase type I",
        "commonName": "N/A",
        "uniprotId": "P49354&P53609",
        "chemblId": "CHEMBL2095164",
        "targetClass": "Transferase",
        "probability": 0.4868,
        "knownActives": "234 /  1"
      },
      {
        "target": "Kelch-like ECH-associated protein 1",
        "commonName": "KEAP1",
        "uniprotId": "Q14145",
        "chemblId": "CHEMBL2069156",
        "targetClass": "Unclassified protein",
        "probability": 0.4849,
        "knownActives": "167 /  3"
      },
      {
        "target": "Protein farnesyltransferase",
        "commonName": "N/A",
        "uniprotId": "P49354&P49356",
        "chemblId": "CHEMBL2094108",
        "targetClass": "Transferase",
        "probability": 0.4686,
        "knownActives": "1050 /  4"
      },
      {
        "target": "Protein kinase C alpha type",
        "commonName": "PRKCA",
        "uniprotId": "P17252",
        "chemblId": "CHEMBL299",
        "targetClass": "Kinase",
        "probability": 0.4272,
        "knownActives": "753 /  349"
      },
      {
        "target": "Kir3.1/Kir3.4",
        "commonName": "N/A",
        "uniprotId": "P48549&P48544",
        "chemblId": "CHEMBL3038488",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.3435,
        "knownActives": "192 /  11"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.3264,
        "knownActives": "1558 /  2"
      },
      {
        "target": "Ubiquitin carboxyl-terminal hydrolase 7",
        "commonName": "USP7",
        "uniprotId": "Q93009",
        "chemblId": "CHEMBL2157850",
        "targetClass": "Protease",
        "probability": 0.2966,
        "knownActives": "223 /  1"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.2863,
        "knownActives": "213 /  5"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.2737,
        "knownActives": "76 /  5"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.2622,
        "knownActives": "499 /  88"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.2574,
        "knownActives": "6657 /  7"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.2406,
        "knownActives": "1059 /  123"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.2312,
        "knownActives": "798 /  64"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.2001,
        "knownActives": "54 /  5"
      },
      {
        "target": "Nuclear factor erythroid 2-related factor 2",
        "commonName": "NFE2L2",
        "uniprotId": "Q16236",
        "chemblId": "CHEMBL1075094",
        "targetClass": "Transcription factor",
        "probability": 0.1905,
        "knownActives": "306 /  4"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 3",
        "commonName": "KCNA3",
        "uniprotId": "P22001",
        "chemblId": "CHEMBL4633",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.1649,
        "knownActives": "245 /  6"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.1465,
        "knownActives": "247 /  83"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.1447,
        "knownActives": "285 /  21"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 2",
        "commonName": "ATP2A2",
        "uniprotId": "P16615",
        "chemblId": "CHEMBL3901",
        "targetClass": "Primary active transporter",
        "probability": 0.137,
        "knownActives": "6 /  4"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 3",
        "commonName": "ATP2A3",
        "uniprotId": "Q93084",
        "chemblId": "CHEMBL2401",
        "targetClass": "Primary active transporter",
        "probability": 0.1298,
        "knownActives": "2 /  1"
      },
      {
        "target": "Bromodomain-containing protein 4",
        "commonName": "BRD4",
        "uniprotId": "O60885",
        "chemblId": "CHEMBL1163125",
        "targetClass": "Reader",
        "probability": 0.1259,
        "knownActives": "5777 /  10"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 1",
        "commonName": "ATP2A1",
        "uniprotId": "O14983",
        "chemblId": "CHEMBL3136",
        "targetClass": "Primary active transporter",
        "probability": 0.1242,
        "knownActives": "5 /  7"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.1216,
        "knownActives": "3530 /  26"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.1216,
        "knownActives": "2889 /  25"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.1097,
        "knownActives": "757 /  16"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.109,
        "knownActives": "421 /  8"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.1059,
        "knownActives": "909 /  65"
      },
      {
        "target": "DNA polymerase beta",
        "commonName": "POLB",
        "uniprotId": "P06746",
        "chemblId": "CHEMBL2392",
        "targetClass": "Enzyme",
        "probability": 0.1054,
        "knownActives": "3 /  3"
      },
      {
        "target": "Heat shock protein HSP 90-alpha",
        "commonName": "HSP90AA1",
        "uniprotId": "P07900",
        "chemblId": "CHEMBL3880",
        "targetClass": "Other cytosolic protein",
        "probability": 0.1015,
        "knownActives": "624 /  21"
      },
      {
        "target": "Serine-protein kinase ATM",
        "commonName": "ATM",
        "uniprotId": "Q13315",
        "chemblId": "CHEMBL3797",
        "targetClass": "Kinase",
        "probability": 0.1009,
        "knownActives": "427 /  1"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.0995,
        "knownActives": "4814 /  20"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.0995,
        "knownActives": "4026 /  24"
      },
      {
        "target": "Bromodomain-containing protein 3",
        "commonName": "BRD3",
        "uniprotId": "Q15059",
        "chemblId": "CHEMBL1795186",
        "targetClass": "Reader",
        "probability": 0.0981,
        "knownActives": "619 /  9"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 0.0858,
        "knownActives": "292 /  4"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.0858,
        "knownActives": "890 /  8"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.0858,
        "knownActives": "213 /  5"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.0815,
        "knownActives": "327 /  8"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.0815,
        "knownActives": "872 /  10"
      },
      {
        "target": "Proteasome Macropain subunit MB1",
        "commonName": "PSMB5",
        "uniprotId": "P28074",
        "chemblId": "CHEMBL4662",
        "targetClass": "Protease",
        "probability": 0.0678,
        "knownActives": "461 /  9"
      },
      {
        "target": "Protein kinase C eta type",
        "commonName": "PRKCH",
        "uniprotId": "P24723",
        "chemblId": "CHEMBL3616",
        "targetClass": "Kinase",
        "probability": 0.0633,
        "knownActives": "129 /  12"
      },
      {
        "target": "Protein kinase C beta type",
        "commonName": "PRKCB",
        "uniprotId": "P05771",
        "chemblId": "CHEMBL3045",
        "targetClass": "Kinase",
        "probability": 0.0633,
        "knownActives": "230 /  22"
      },
      {
        "target": "Methionine aminopeptidase 2",
        "commonName": "METAP2",
        "uniprotId": "P50579",
        "chemblId": "CHEMBL3922",
        "targetClass": "Protease",
        "probability": 0.0629,
        "knownActives": "639 /  58"
      },
      {
        "target": "Ras guanyl-releasing protein 3",
        "commonName": "RASGRP3",
        "uniprotId": "Q8IV61",
        "chemblId": "CHEMBL3638",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0622,
        "knownActives": "87 /  70"
      },
      {
        "target": "D-3-phosphoglycerate dehydrogenase",
        "commonName": "PHGDH",
        "uniprotId": "O43175",
        "chemblId": "CHEMBL2311243",
        "targetClass": "Oxidoreductase",
        "probability": 0.0606,
        "knownActives": "293 /  1"
      },
      {
        "target": "Glycine receptor subunit alpha-1",
        "commonName": "GLRA1",
        "uniprotId": "P23415",
        "chemblId": "CHEMBL5845",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0591,
        "knownActives": "39 /  7"
      },
      {
        "target": "Platelet-activating factor receptor",
        "commonName": "PTAFR",
        "uniprotId": "P25105",
        "chemblId": "CHEMBL250",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0548,
        "knownActives": "217 /  11"
      },
      {
        "target": "Glycine receptor subunit alpha-2",
        "commonName": "GLRA2",
        "uniprotId": "P23416",
        "chemblId": "CHEMBL5871",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0548,
        "knownActives": "5 /  5"
      },
      {
        "target": "Beta-glucuronidase",
        "commonName": "GUSB",
        "uniprotId": "P08236",
        "chemblId": "CHEMBL2728",
        "targetClass": "Hydrolase",
        "probability": 0.0548,
        "knownActives": "105 /  1"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 0.0503,
        "knownActives": "227 /  7"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0503,
        "knownActives": "2572 /  44"
      },
      {
        "target": "Proteasome component C5",
        "commonName": "PSMB1",
        "uniprotId": "P20618",
        "chemblId": "CHEMBL4208",
        "targetClass": "Protease",
        "probability": 0.046,
        "knownActives": "38 /  4"
      },
      {
        "target": "dCTP pyrophosphatase 1",
        "commonName": "DCTPP1",
        "uniprotId": "Q9H773",
        "chemblId": "CHEMBL3769292",
        "targetClass": "Hydrolase",
        "probability": 0.0433,
        "knownActives": "85 /  1"
      },
      {
        "target": "Bromodomain-containing protein 2",
        "commonName": "BRD2",
        "uniprotId": "P25440",
        "chemblId": "CHEMBL1293289",
        "targetClass": "Reader",
        "probability": 0.0427,
        "knownActives": "580 /  1"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.0424,
        "knownActives": "1530 /  23"
      },
      {
        "target": "Nuclear factor NF-kappa-B p105 subunit",
        "commonName": "NFKB1",
        "uniprotId": "P19838",
        "chemblId": "CHEMBL3251",
        "targetClass": "Transcription factor",
        "probability": 0.0416,
        "knownActives": "10 /  1"
      },
      {
        "target": "Bromodomain testis-specific protein",
        "commonName": "BRDT",
        "uniprotId": "Q58F21",
        "chemblId": "CHEMBL1795185",
        "targetClass": "Reader",
        "probability": 0.0383,
        "knownActives": "138 /  1"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.0369,
        "knownActives": "1065 /  52"
      },
      {
        "target": "Protein kinase C gamma type",
        "commonName": "PRKCG",
        "uniprotId": "P05129",
        "chemblId": "CHEMBL2938",
        "targetClass": "Kinase",
        "probability": 0.0358,
        "knownActives": "93 /  17"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.0354,
        "knownActives": "2831 /  16"
      },
      {
        "target": "Gamma-secretase",
        "commonName": "N/A",
        "uniprotId": "Q96BI3&Q9NZ42&Q8WW43&P49768&Q92542&P49810",
        "chemblId": "CHEMBL2094135",
        "targetClass": "Protease",
        "probability": 0.0349,
        "knownActives": "1471 /  17"
      },
      {
        "target": "Serine/threonine-protein phosphatase 5",
        "commonName": "PPP5C",
        "uniprotId": "P53041",
        "chemblId": "CHEMBL3425389",
        "targetClass": "Phosphatase",
        "probability": 0.0345,
        "knownActives": "8 /  5"
      },
      {
        "target": "C-X-C chemokine receptor type 1",
        "commonName": "CXCR1",
        "uniprotId": "P25024",
        "chemblId": "CHEMBL4029",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0334,
        "knownActives": "28 /  2"
      },
      {
        "target": "Isocitrate dehydrogenase [NADP] cytoplasmic",
        "commonName": "IDH1",
        "uniprotId": "O75874",
        "chemblId": "CHEMBL2007625",
        "targetClass": "Oxidoreductase",
        "probability": 0.0326,
        "knownActives": "1833 /  2"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.0324,
        "knownActives": "585 /  10"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0321,
        "knownActives": "863 /  8"
      },
      {
        "target": "Zinc finger protein GLI1",
        "commonName": "GLI1",
        "uniprotId": "P08151",
        "chemblId": "CHEMBL5461",
        "targetClass": "Transcription factor",
        "probability": 0.0317,
        "knownActives": "12 /  5"
      },
      {
        "target": "Proto-oncogene vav",
        "commonName": "VAV1",
        "uniprotId": "P15498",
        "chemblId": "CHEMBL3259472",
        "targetClass": "Unclassified protein",
        "probability": 0.0313,
        "knownActives": "1 /  1"
      },
      {
        "target": "3-hydroxy-3-methylglutaryl-coenzyme A reductase",
        "commonName": "HMGCR",
        "uniprotId": "P04035",
        "chemblId": "CHEMBL402",
        "targetClass": "Oxidoreductase",
        "probability": 0.0304,
        "knownActives": "178 /  21"
      },
      {
        "target": "Nuclear receptor subfamily 4 group A member 2",
        "commonName": "NR4A2",
        "uniprotId": "P43354",
        "chemblId": "CHEMBL5002",
        "targetClass": "Nuclear receptor",
        "probability": 0.03,
        "knownActives": "70 /  1"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.0288,
        "knownActives": "2000 /  22"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 11",
        "commonName": "PTPN11",
        "uniprotId": "Q06124",
        "chemblId": "CHEMBL3864",
        "targetClass": "Phosphatase",
        "probability": 0.0287,
        "knownActives": "1311 /  3"
      },
      {
        "target": "Mineralocorticoid receptor",
        "commonName": "NR3C2",
        "uniprotId": "P08235",
        "chemblId": "CHEMBL1994",
        "targetClass": "Nuclear receptor",
        "probability": 0.0282,
        "knownActives": "467 /  23"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0276,
        "knownActives": "1304 /  6"
      },
      {
        "target": "Bile acid receptor",
        "commonName": "NR1H4",
        "uniprotId": "Q96RI1",
        "chemblId": "CHEMBL2047",
        "targetClass": "Nuclear receptor",
        "probability": 0.0263,
        "knownActives": "1712 /  22"
      },
      {
        "target": "Prothrombin",
        "commonName": "F2",
        "uniprotId": "P00734",
        "chemblId": "CHEMBL204",
        "targetClass": "Protease",
        "probability": 0.026,
        "knownActives": "2675 /  9"
      },
      {
        "target": "Endothelin-1 receptor",
        "commonName": "EDNRA",
        "uniprotId": "P25101",
        "chemblId": "CHEMBL252",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.026,
        "knownActives": "978 /  3"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 0.0259,
        "knownActives": "829 /  3"
      },
      {
        "target": "Nicotinamide N-methyltransferase",
        "commonName": "NNMT",
        "uniprotId": "P40261",
        "chemblId": "CHEMBL2346486",
        "targetClass": "Transferase",
        "probability": 0.0259,
        "knownActives": "112 /  1"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0256,
        "knownActives": "2130 /  28"
      },
      {
        "target": "Proteinase-activated receptor 2",
        "commonName": "F2RL1",
        "uniprotId": "P55085",
        "chemblId": "CHEMBL5963",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0251,
        "knownActives": "61 /  1"
      },
      {
        "target": "Serine/threonine-protein phosphatase PP1-alpha catalytic subunit",
        "commonName": "PPP1CA",
        "uniprotId": "P62136",
        "chemblId": "CHEMBL2164",
        "targetClass": "Phosphatase",
        "probability": 0.0245,
        "knownActives": "42 /  3"
      },
      {
        "target": "Squalene synthase",
        "commonName": "FDFT1",
        "uniprotId": "P37268",
        "chemblId": "CHEMBL3338",
        "targetClass": "Transferase",
        "probability": 0.0235,
        "knownActives": "113 /  31"
      },
      {
        "target": "Splicing factor 3B subunit 3",
        "commonName": "SF3B3",
        "uniprotId": "Q15393",
        "chemblId": "CHEMBL1250378",
        "targetClass": "Other nuclear protein",
        "probability": 0.0221,
        "knownActives": "11 /  9"
      },
      {
        "target": "Ubiquitin-conjugating enzyme E2 D3",
        "commonName": "UBE2D3",
        "uniprotId": "P61077",
        "chemblId": "CHEMBL4105911",
        "targetClass": "Transferase",
        "probability": 0.0221,
        "knownActives": "5 /  4"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.0219,
        "knownActives": "1522 /  21"
      },
      {
        "target": "Phosphatidylinositol 3-kinase catalytic subunit type 3",
        "commonName": "PIK3C3",
        "uniprotId": "Q8NEB9",
        "chemblId": "CHEMBL1075165",
        "targetClass": "Transferase",
        "probability": 0.0215,
        "knownActives": "583 /  3"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0213,
        "knownActives": "3209 /  2"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0208,
        "knownActives": "2449 /  2"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit alpha isoform",
        "commonName": "PIK3CA",
        "uniprotId": "P42336",
        "chemblId": "CHEMBL4005",
        "targetClass": "Transferase",
        "probability": 0.0207,
        "knownActives": "5365 /  44"
      },
      {
        "target": "Serine/threonine-protein phosphatase PP1-gamma catalytic subunit",
        "commonName": "PPP1CC",
        "uniprotId": "P36873",
        "chemblId": "CHEMBL4438",
        "targetClass": "Phosphatase",
        "probability": 0.0197,
        "knownActives": "5 /  6"
      },
      {
        "target": "Serine/threonine-protein kinase mTOR",
        "commonName": "MTOR",
        "uniprotId": "P42345",
        "chemblId": "CHEMBL2842",
        "targetClass": "Kinase",
        "probability": 0.0194,
        "knownActives": "3306 /  34"
      },
      {
        "target": "Isoleucine--tRNA ligase, cytoplasmic",
        "commonName": "IARS1",
        "uniprotId": "P41252",
        "chemblId": "CHEMBL3235",
        "targetClass": "Ligase",
        "probability": 0.0185,
        "knownActives": "13 /  5"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0183,
        "knownActives": "2786 /  14"
      },
      {
        "target": "Neurogenic locus notch homolog protein 1",
        "commonName": "NOTCH1",
        "uniprotId": "P46531",
        "chemblId": "CHEMBL2146346",
        "targetClass": "Membrane receptor",
        "probability": 0.018,
        "knownActives": "65 /  1"
      }
    ]
  },
  {
    "id": "dehydrocostus_lactone",
    "name": "Dehydrocostus lactone",
    "cid": 109551,
    "smiles": "C=C1CCC2C(=C)C3C(CC2C1=C)C(=C)C(=O)O3",
    "category": "Sesquiterpene Lactone",
    "topTarget": "NACHT, LRR and PYD domains-containing protein 3 (NLRP3)",
    "topTargetUniprot": "Q96P20",
    "targetClasses": [
      {
        "label": "Nuclear receptor",
        "count": 12,
        "percentage": 12.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 11,
        "percentage": 11.0,
        "color": "#10B981"
      },
      {
        "label": "Kinase",
        "count": 10,
        "percentage": 10.0,
        "color": "#F59E0B"
      },
      {
        "label": "Protease",
        "count": 9,
        "percentage": 9.0,
        "color": "#EF4444"
      },
      {
        "label": "Hydrolase",
        "count": 6,
        "percentage": 6.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Phosphatase",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Transferase",
        "count": 5,
        "percentage": 5.0,
        "color": "#6366F1"
      },
      {
        "label": "Electrochemical transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Transcription factor",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Cytochrome P450",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Eraser",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Isomerase",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Secreted protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#EC4899"
      },
      {
        "label": "Primary active transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#06B6D4"
      },
      {
        "label": "Ligase",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Adhesion",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Phosphodiesterase",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      },
      {
        "label": "Other ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#A855F7"
      },
      {
        "label": "Lyase",
        "count": 1,
        "percentage": 1.0,
        "color": "#64748B"
      },
      {
        "label": "Reader",
        "count": 1,
        "percentage": 1.0,
        "color": "#3B82F6"
      }
    ],
    "targets": [
      {
        "target": "NACHT, LRR and PYD domains-containing protein 3",
        "commonName": "NLRP3",
        "uniprotId": "Q96P20",
        "chemblId": "CHEMBL1741208",
        "targetClass": "Unclassified protein",
        "probability": 0.9752,
        "knownActives": "404 /  40"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.8146,
        "knownActives": "2354 /  21"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.7916,
        "knownActives": "115 /  4"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.6682,
        "knownActives": "1782 /  198"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.5056,
        "knownActives": "427 /  88"
      },
      {
        "target": "Serine protease 1",
        "commonName": "PRSS1",
        "uniprotId": "P07477",
        "chemblId": "CHEMBL209",
        "targetClass": "Protease",
        "probability": 0.4256,
        "knownActives": "328 /  11"
      },
      {
        "target": "Prothrombin",
        "commonName": "F2",
        "uniprotId": "P00734",
        "chemblId": "CHEMBL204",
        "targetClass": "Protease",
        "probability": 0.4256,
        "knownActives": "1636 /  14"
      },
      {
        "target": "Short transient receptor potential channel 6",
        "commonName": "TRPC6",
        "uniprotId": "Q9Y210",
        "chemblId": "CHEMBL2417347",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.3769,
        "knownActives": "60 /  5"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.3712,
        "knownActives": "1582 /  1"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.3067,
        "knownActives": "2278 /  54"
      },
      {
        "target": "Progesterone receptor",
        "commonName": "PGR",
        "uniprotId": "P06401",
        "chemblId": "CHEMBL208",
        "targetClass": "Nuclear receptor",
        "probability": 0.2901,
        "knownActives": "1158 /  47"
      },
      {
        "target": "Chymotrypsin-C",
        "commonName": "CTRC",
        "uniprotId": "Q99895",
        "chemblId": "CHEMBL2386",
        "targetClass": "Protease",
        "probability": 0.2813,
        "knownActives": "40 /  3"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2736,
        "knownActives": "4688 /  1"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.2676,
        "knownActives": "1703 /  76"
      },
      {
        "target": "Bile acid receptor",
        "commonName": "NR1H4",
        "uniprotId": "Q96RI1",
        "chemblId": "CHEMBL2047",
        "targetClass": "Nuclear receptor",
        "probability": 0.2543,
        "knownActives": "1074 /  55"
      },
      {
        "target": "Mineralocorticoid receptor",
        "commonName": "NR3C2",
        "uniprotId": "P08235",
        "chemblId": "CHEMBL1994",
        "targetClass": "Nuclear receptor",
        "probability": 0.2454,
        "knownActives": "557 /  28"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.2391,
        "knownActives": "2696 /  1"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.2369,
        "knownActives": "298 /  2"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha4/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P43681",
        "chemblId": "CHEMBL1907589",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.2369,
        "knownActives": "569 /  5"
      },
      {
        "target": "Steroid 17-alpha-hydroxylase/17,20 lyase",
        "commonName": "CYP17A1",
        "uniprotId": "P05093",
        "chemblId": "CHEMBL3522",
        "targetClass": "Cytochrome P450",
        "probability": 0.2244,
        "knownActives": "544 /  24"
      },
      {
        "target": "Ubiquitin-conjugating enzyme E2 D3",
        "commonName": "UBE2D3",
        "uniprotId": "P61077",
        "chemblId": "CHEMBL4105911",
        "targetClass": "Transferase",
        "probability": 0.2211,
        "knownActives": "5 /  4"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 0.215,
        "knownActives": "930 /  9"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2027,
        "knownActives": "3514 /  1"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.1914,
        "knownActives": "943 /  1"
      },
      {
        "target": "DNA polymerase beta",
        "commonName": "POLB",
        "uniprotId": "P06746",
        "chemblId": "CHEMBL2392",
        "targetClass": "Enzyme",
        "probability": 0.1857,
        "knownActives": "2 /  3"
      },
      {
        "target": "Ubiquitin carboxyl-terminal hydrolase 7",
        "commonName": "USP7",
        "uniprotId": "Q93009",
        "chemblId": "CHEMBL2157850",
        "targetClass": "Protease",
        "probability": 0.1831,
        "knownActives": "185 /  1"
      },
      {
        "target": "Toll-like receptor 4",
        "commonName": "TLR4",
        "uniprotId": "O00206",
        "chemblId": "CHEMBL5255",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.1831,
        "knownActives": "83 /  6"
      },
      {
        "target": "Tubulin--tyrosine ligase",
        "commonName": "TTL",
        "uniprotId": "Q8NG68",
        "chemblId": "CHEMBL5549",
        "targetClass": "Ligase",
        "probability": 0.1701,
        "knownActives": "14 /  17"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.161,
        "knownActives": "610 /  37"
      },
      {
        "target": "Mitogen-activated protein kinase kinase kinase 5",
        "commonName": "MAP3K5",
        "uniprotId": "Q99683",
        "chemblId": "CHEMBL5285",
        "targetClass": "Kinase",
        "probability": 0.1518,
        "knownActives": "920 /  3"
      },
      {
        "target": "Coagulation factor X",
        "commonName": "F10",
        "uniprotId": "P00742",
        "chemblId": "CHEMBL244",
        "targetClass": "Protease",
        "probability": 0.1384,
        "knownActives": "2485 /  19"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD11B2",
        "uniprotId": "P80365",
        "chemblId": "CHEMBL3746",
        "targetClass": "Oxidoreductase",
        "probability": 0.1362,
        "knownActives": "54 /  12"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.1348,
        "knownActives": "4132 /  2"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.1317,
        "knownActives": "211 /  5"
      },
      {
        "target": "Interleukin-1 beta",
        "commonName": "IL1B",
        "uniprotId": "P01584",
        "chemblId": "CHEMBL1909490",
        "targetClass": "Secreted protein",
        "probability": 0.1284,
        "knownActives": "150 /  3"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.1267,
        "knownActives": "99 /  20"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.1176,
        "knownActives": "2637 /  14"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.1174,
        "knownActives": "144 /  4"
      },
      {
        "target": "Potassium-transporting ATPase alpha chain 2",
        "commonName": "ATP12A",
        "uniprotId": "P54707",
        "chemblId": "CHEMBL2933",
        "targetClass": "Primary active transporter",
        "probability": 0.117,
        "knownActives": "12 /  10"
      },
      {
        "target": "Hepatic sodium/bile acid cotransporter",
        "commonName": "SLC10A1",
        "uniprotId": "Q14973",
        "chemblId": "CHEMBL5287",
        "targetClass": "Electrochemical transporter",
        "probability": 0.1124,
        "knownActives": "138 /  2"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.1116,
        "knownActives": "2218 /  36"
      },
      {
        "target": "TGF-beta receptor type-1",
        "commonName": "TGFBR1",
        "uniprotId": "P36897",
        "chemblId": "CHEMBL4439",
        "targetClass": "Kinase",
        "probability": 0.1114,
        "knownActives": "1939 /  1"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.1112,
        "knownActives": "6056 /  7"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.1112,
        "knownActives": "777 /  61"
      },
      {
        "target": "Protein farnesyltransferase",
        "commonName": "N/A",
        "uniprotId": "P49354&P49356",
        "chemblId": "CHEMBL2094108",
        "targetClass": "Transferase",
        "probability": 0.108,
        "knownActives": "961 /  13"
      },
      {
        "target": "Phospholipase A2, membrane associated",
        "commonName": "PLA2G2A",
        "uniprotId": "P14555",
        "chemblId": "CHEMBL3474",
        "targetClass": "Hydrolase",
        "probability": 0.1058,
        "knownActives": "66 /  10"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.1041,
        "knownActives": "66 /  4"
      },
      {
        "target": "Aldo-keto reductase family 1 member C1",
        "commonName": "AKR1C1",
        "uniprotId": "Q04828",
        "chemblId": "CHEMBL5905",
        "targetClass": "Oxidoreductase",
        "probability": 0.1025,
        "knownActives": "6 /  1"
      },
      {
        "target": "Aldo-keto reductase family 1 member C2",
        "commonName": "AKR1C2",
        "uniprotId": "P52895",
        "chemblId": "CHEMBL5847",
        "targetClass": "Oxidoreductase",
        "probability": 0.1025,
        "knownActives": "8 /  1"
      },
      {
        "target": "Aldo-keto reductase family 1 member C3",
        "commonName": "AKR1C3",
        "uniprotId": "P42330",
        "chemblId": "CHEMBL4681",
        "targetClass": "Oxidoreductase",
        "probability": 0.1025,
        "knownActives": "251 /  16"
      },
      {
        "target": "Sex hormone-binding globulin",
        "commonName": "SHBG",
        "uniprotId": "P04278",
        "chemblId": "CHEMBL3305",
        "targetClass": "Secreted protein",
        "probability": 0.1025,
        "knownActives": "63 /  28"
      },
      {
        "target": "DNA topoisomerase 2-alpha",
        "commonName": "TOP2A",
        "uniprotId": "P11388",
        "chemblId": "CHEMBL1806",
        "targetClass": "Isomerase",
        "probability": 0.101,
        "knownActives": "47 /  2"
      },
      {
        "target": "Endothelial PAS domain-containing protein 1",
        "commonName": "EPAS1",
        "uniprotId": "Q99814",
        "chemblId": "CHEMBL1744522",
        "targetClass": "Transcription factor",
        "probability": 0.0975,
        "knownActives": "300 /  4"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0974,
        "knownActives": "2746 /  31"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 2",
        "commonName": "TRPM2",
        "uniprotId": "O94759",
        "chemblId": "CHEMBL1250402",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0952,
        "knownActives": "7 /  1"
      },
      {
        "target": "Fatty-acid amide hydrolase 1",
        "commonName": "FAAH",
        "uniprotId": "O00519",
        "chemblId": "CHEMBL2243",
        "targetClass": "Hydrolase",
        "probability": 0.0922,
        "knownActives": "1035 /  17"
      },
      {
        "target": "Delta(24)-sterol reductase",
        "commonName": "DHCR24",
        "uniprotId": "Q15392",
        "chemblId": "CHEMBL2331059",
        "targetClass": "Oxidoreductase",
        "probability": 0.0894,
        "knownActives": "11 /  8"
      },
      {
        "target": "3-hydroxy-3-methylglutaryl-coenzyme A reductase",
        "commonName": "HMGCR",
        "uniprotId": "P04035",
        "chemblId": "CHEMBL402",
        "targetClass": "Oxidoreductase",
        "probability": 0.0863,
        "knownActives": "80 /  22"
      },
      {
        "target": "M-phase inducer phosphatase 1",
        "commonName": "CDC25A",
        "uniprotId": "P30304",
        "chemblId": "CHEMBL3775",
        "targetClass": "Phosphatase",
        "probability": 0.0857,
        "knownActives": "80 /  25"
      },
      {
        "target": "Exportin-1",
        "commonName": "XPO1",
        "uniprotId": "O14980",
        "chemblId": "CHEMBL5661",
        "targetClass": "Unclassified protein",
        "probability": 0.0845,
        "knownActives": "60 /  6"
      },
      {
        "target": "Gamma-secretase",
        "commonName": "N/A",
        "uniprotId": "Q96BI3&Q9NZ42&Q8WW43&P49768&Q92542&P49810",
        "chemblId": "CHEMBL2094135",
        "targetClass": "Protease",
        "probability": 0.0813,
        "knownActives": "1654 /  8"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0805,
        "knownActives": "2563 /  36"
      },
      {
        "target": "5'-nucleotidase",
        "commonName": "NT5E",
        "uniprotId": "P21589",
        "chemblId": "CHEMBL5957",
        "targetClass": "Phosphatase",
        "probability": 0.0805,
        "knownActives": "71 /  7"
      },
      {
        "target": "3-oxo-5-alpha-steroid 4-dehydrogenase 2",
        "commonName": "SRD5A2",
        "uniprotId": "P31213",
        "chemblId": "CHEMBL1856",
        "targetClass": "Oxidoreductase",
        "probability": 0.0778,
        "knownActives": "275 /  15"
      },
      {
        "target": "Transcription factor p65",
        "commonName": "RELA",
        "uniprotId": "Q04206",
        "chemblId": "CHEMBL5533",
        "targetClass": "Transcription factor",
        "probability": 0.077,
        "knownActives": "48 /  6"
      },
      {
        "target": "Histone acetyltransferase p300",
        "commonName": "EP300",
        "uniprotId": "Q09472",
        "chemblId": "CHEMBL3784",
        "targetClass": "Writer",
        "probability": 0.0743,
        "knownActives": "375 /  2"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.0726,
        "knownActives": "1456 /  2"
      },
      {
        "target": "Intercellular adhesion molecule 1",
        "commonName": "ICAM1",
        "uniprotId": "P05362",
        "chemblId": "CHEMBL3070",
        "targetClass": "Adhesion",
        "probability": 0.0719,
        "knownActives": "113 /  1"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0708,
        "knownActives": "743 /  9"
      },
      {
        "target": "Protein kinase C alpha type",
        "commonName": "PRKCA",
        "uniprotId": "P17252",
        "chemblId": "CHEMBL299",
        "targetClass": "Kinase",
        "probability": 0.0697,
        "knownActives": "697 /  245"
      },
      {
        "target": "NAD-dependent protein deacetylase sirtuin-2",
        "commonName": "SIRT2",
        "uniprotId": "Q8IXJ6",
        "chemblId": "CHEMBL4462",
        "targetClass": "Eraser",
        "probability": 0.0686,
        "knownActives": "405 /  1"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.0675,
        "knownActives": "461 /  38"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.0643,
        "knownActives": "257 /  11"
      },
      {
        "target": "Protein kinase C beta type",
        "commonName": "PRKCB",
        "uniprotId": "P05771",
        "chemblId": "CHEMBL3045",
        "targetClass": "Kinase",
        "probability": 0.0623,
        "knownActives": "215 /  10"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.0621,
        "knownActives": "371 /  12"
      },
      {
        "target": "Glutathione S-transferase P",
        "commonName": "GSTP1",
        "uniprotId": "P09211",
        "chemblId": "CHEMBL3902",
        "targetClass": "Transferase",
        "probability": 0.0616,
        "knownActives": "77 /  3"
      },
      {
        "target": "Vitamin D3 receptor",
        "commonName": "VDR",
        "uniprotId": "P11473",
        "chemblId": "CHEMBL1977",
        "targetClass": "Nuclear receptor",
        "probability": 0.0612,
        "knownActives": "257 /  21"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.06,
        "knownActives": "2818 /  1"
      },
      {
        "target": "Geranylgeranyl transferase type I",
        "commonName": "N/A",
        "uniprotId": "P49354&P53609",
        "chemblId": "CHEMBL2095164",
        "targetClass": "Transferase",
        "probability": 0.0599,
        "knownActives": "210 /  1"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.0595,
        "knownActives": "308 /  17"
      },
      {
        "target": "Cytochrome P450 2C19",
        "commonName": "CYP2C19",
        "uniprotId": "P33261",
        "chemblId": "CHEMBL3622",
        "targetClass": "Cytochrome P450",
        "probability": 0.0595,
        "knownActives": "109 /  5"
      },
      {
        "target": "Receptor-interacting serine/threonine-protein kinase 3",
        "commonName": "RIPK3",
        "uniprotId": "Q9Y572",
        "chemblId": "CHEMBL1795199",
        "targetClass": "Kinase",
        "probability": 0.0594,
        "knownActives": "205 /  1"
      },
      {
        "target": "Pancreatic triacylglycerol lipase",
        "commonName": "PNLIP",
        "uniprotId": "P16233",
        "chemblId": "CHEMBL1812",
        "targetClass": "Hydrolase",
        "probability": 0.0591,
        "knownActives": "16 /  7"
      },
      {
        "target": "Thromboxane A2 receptor",
        "commonName": "TBXA2R",
        "uniprotId": "P21731",
        "chemblId": "CHEMBL2069",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0579,
        "knownActives": "78 /  16"
      },
      {
        "target": "Solute carrier family 2, facilitated glucose transporter member 1",
        "commonName": "SLC2A1",
        "uniprotId": "P11166",
        "chemblId": "CHEMBL2535",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0571,
        "knownActives": "126 /  6"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.0568,
        "knownActives": "606 /  6"
      },
      {
        "target": "Prolyl endopeptidase",
        "commonName": "PREP",
        "uniprotId": "P48147",
        "chemblId": "CHEMBL3202",
        "targetClass": "Protease",
        "probability": 0.0563,
        "knownActives": "268 /  1"
      },
      {
        "target": "Bcl-2-like protein 1",
        "commonName": "BCL2L1",
        "uniprotId": "Q07817",
        "chemblId": "CHEMBL4625",
        "targetClass": "Other ion channel",
        "probability": 0.0551,
        "knownActives": "92 /  6"
      },
      {
        "target": "M-phase inducer phosphatase 2",
        "commonName": "CDC25B",
        "uniprotId": "P30305",
        "chemblId": "CHEMBL4804",
        "targetClass": "Phosphatase",
        "probability": 0.0548,
        "knownActives": "121 /  23"
      },
      {
        "target": "Adenylate cyclase type 8",
        "commonName": "ADCY8",
        "uniprotId": "P40145",
        "chemblId": "CHEMBL2960",
        "targetClass": "Lyase",
        "probability": 0.0508,
        "knownActives": "41 /  1"
      },
      {
        "target": "Ribosomal protein S6 kinase alpha-5",
        "commonName": "RPS6KA5",
        "uniprotId": "O75582",
        "chemblId": "CHEMBL4237",
        "targetClass": "Kinase",
        "probability": 0.0506,
        "knownActives": "85 /  4"
      },
      {
        "target": "Oxysterols receptor LXR-alpha",
        "commonName": "NR1H3",
        "uniprotId": "Q13133",
        "chemblId": "CHEMBL2808",
        "targetClass": "Nuclear receptor",
        "probability": 0.0503,
        "knownActives": "647 /  16"
      },
      {
        "target": "Oxysterols receptor LXR-beta",
        "commonName": "NR1H2",
        "uniprotId": "P55055",
        "chemblId": "CHEMBL4093",
        "targetClass": "Nuclear receptor",
        "probability": 0.0503,
        "knownActives": "743 /  10"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0488,
        "knownActives": "2980 /  12"
      },
      {
        "target": "Liver carboxylesterase 1",
        "commonName": "CES1",
        "uniprotId": "P23141",
        "chemblId": "CHEMBL2265",
        "targetClass": "Hydrolase",
        "probability": 0.0483,
        "knownActives": "199 /  5"
      },
      {
        "target": "Nuclear receptor subfamily 4 group A member 2",
        "commonName": "NR4A2",
        "uniprotId": "P43354",
        "chemblId": "CHEMBL5002",
        "targetClass": "Nuclear receptor",
        "probability": 0.0481,
        "knownActives": "44 /  3"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.0479,
        "knownActives": "681 /  14"
      },
      {
        "target": "Bromodomain-containing protein 4",
        "commonName": "BRD4",
        "uniprotId": "O60885",
        "chemblId": "CHEMBL1163125",
        "targetClass": "Reader",
        "probability": 0.0459,
        "knownActives": "5914 /  10"
      },
      {
        "target": "Ubiquitin carboxyl-terminal hydrolase 2",
        "commonName": "USP2",
        "uniprotId": "O75604",
        "chemblId": "CHEMBL1293227",
        "targetClass": "Protease",
        "probability": 0.045,
        "knownActives": "21 /  1"
      },
      {
        "target": "M-phase inducer phosphatase 3",
        "commonName": "CDC25C",
        "uniprotId": "P30307",
        "chemblId": "CHEMBL2378",
        "targetClass": "Phosphatase",
        "probability": 0.0446,
        "knownActives": "39 /  5"
      }
    ]
  },
  {
    "id": "demethoxycurcumin",
    "name": "Demethoxycurcumin",
    "cid": 5469424,
    "smiles": "COc1cc(/C=C/C(=O)CC(=O)/C=C/c2ccc(O)cc2)ccc1O",
    "category": "Curcuminoid Polyphenol",
    "topTarget": "Toll-like receptor 9 (TLR9)",
    "topTargetUniprot": "Q9NR96",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 17,
        "percentage": 17.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 15,
        "percentage": 15.0,
        "color": "#10B981"
      },
      {
        "label": "Lyase",
        "count": 12,
        "percentage": 12.0,
        "color": "#F59E0B"
      },
      {
        "label": "Cytochrome P450",
        "count": 7,
        "percentage": 7.0,
        "color": "#EF4444"
      },
      {
        "label": "Eraser",
        "count": 6,
        "percentage": 6.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Protease",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Transcription factor",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 5,
        "percentage": 5.0,
        "color": "#6366F1"
      },
      {
        "label": "Secreted protein",
        "count": 5,
        "percentage": 5.0,
        "color": "#14B8A6"
      },
      {
        "label": "Primary active transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Unclassified protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Transferase",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Surface antigen",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Isomerase",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Nuclear receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Phosphatase",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Hydrolase",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      }
    ],
    "targets": [
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 1.0,
        "knownActives": "24 /  7"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "618 /  357"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "315 /  96"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 1.0,
        "knownActives": "135 /  108"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.9975,
        "knownActives": "261 /  133"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1B",
        "commonName": "DYRK1B",
        "uniprotId": "Q9Y463",
        "chemblId": "CHEMBL5543",
        "targetClass": "Kinase",
        "probability": 0.9969,
        "knownActives": "87 /  8"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 0.9969,
        "knownActives": "21 /  17"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.9969,
        "knownActives": "118 /  118"
      },
      {
        "target": "CDGSH iron-sulfur domain-containing protein 1",
        "commonName": "CISD1",
        "uniprotId": "Q9NZ45",
        "chemblId": "CHEMBL1795168",
        "targetClass": "Unclassified protein",
        "probability": 0.9969,
        "knownActives": "24 /  8"
      },
      {
        "target": "Dual specificity protein kinase CLK4",
        "commonName": "CLK4",
        "uniprotId": "Q9HAZ1",
        "chemblId": "CHEMBL4203",
        "targetClass": "Kinase",
        "probability": 0.9969,
        "knownActives": "31 /  1"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 3",
        "commonName": "ATP2A3",
        "uniprotId": "Q93084",
        "chemblId": "CHEMBL2401",
        "targetClass": "Primary active transporter",
        "probability": 0.9969,
        "knownActives": "3 /  1"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 2",
        "commonName": "DYRK2",
        "uniprotId": "Q92630",
        "chemblId": "CHEMBL4376",
        "targetClass": "Kinase",
        "probability": 0.9969,
        "knownActives": "62 /  10"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 0.9969,
        "knownActives": "20 /  10"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.9969,
        "knownActives": "528 /  78"
      },
      {
        "target": "Nuclear factor erythroid 2-related factor 2",
        "commonName": "NFE2L2",
        "uniprotId": "Q16236",
        "chemblId": "CHEMBL1075094",
        "targetClass": "Transcription factor",
        "probability": 0.9969,
        "knownActives": "11 /  36"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.9969,
        "knownActives": "176 /  14"
      },
      {
        "target": "Histone acetyltransferase p300",
        "commonName": "EP300",
        "uniprotId": "Q09472",
        "chemblId": "CHEMBL3784",
        "targetClass": "Writer",
        "probability": 0.9969,
        "knownActives": "57 /  17"
      },
      {
        "target": "Lactoylglutathione lyase",
        "commonName": "GLO1",
        "uniprotId": "Q04760",
        "chemblId": "CHEMBL2424",
        "targetClass": "Lyase",
        "probability": 0.9969,
        "knownActives": "31 /  8"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.9969,
        "knownActives": "107 /  10"
      },
      {
        "target": "Dual specificity protein kinase CLK1",
        "commonName": "CLK1",
        "uniprotId": "P49759",
        "chemblId": "CHEMBL4224",
        "targetClass": "Kinase",
        "probability": 0.9969,
        "knownActives": "73 /  4"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.9969,
        "knownActives": "92 /  28"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 0.9969,
        "knownActives": "51 /  19"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.9969,
        "knownActives": "396 /  8"
      },
      {
        "target": "Nitric oxide synthase, inducible",
        "commonName": "NOS2",
        "uniprotId": "P35228",
        "chemblId": "CHEMBL4481",
        "targetClass": "Enzyme",
        "probability": 0.9969,
        "knownActives": "8 /  1"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.9969,
        "knownActives": "244 /  12"
      },
      {
        "target": "Glutathione S-transferase Mu 2",
        "commonName": "GSTM2",
        "uniprotId": "P28161",
        "chemblId": "CHEMBL4589",
        "targetClass": "Transferase",
        "probability": 0.9969,
        "knownActives": "1 /  1"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.9969,
        "knownActives": "31 /  20"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.9969,
        "knownActives": "124 /  88"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.9969,
        "knownActives": "72 /  18"
      },
      {
        "target": "Nuclear factor NF-kappa-B p105 subunit",
        "commonName": "NFKB1",
        "uniprotId": "P19838",
        "chemblId": "CHEMBL3251",
        "targetClass": "Transcription factor",
        "probability": 0.9969,
        "knownActives": "9 /  9"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 2",
        "commonName": "ATP2A2",
        "uniprotId": "P16615",
        "chemblId": "CHEMBL3901",
        "targetClass": "Primary active transporter",
        "probability": 0.9969,
        "knownActives": "3 /  1"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.9969,
        "knownActives": "107 /  14"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 0.9969,
        "knownActives": "174 /  64"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.9969,
        "knownActives": "116 /  21"
      },
      {
        "target": "Tissue factor",
        "commonName": "F3",
        "uniprotId": "P13726",
        "chemblId": "CHEMBL4081",
        "targetClass": "Surface antigen",
        "probability": 0.9969,
        "knownActives": "57 /  10"
      },
      {
        "target": "HSP60/HSP10",
        "commonName": "N/A",
        "uniprotId": "P10809&P61604",
        "chemblId": "CHEMBL4106131",
        "targetClass": "Unclassified protein",
        "probability": 0.9969,
        "knownActives": "20 /  3"
      },
      {
        "target": "Microtubule-associated protein tau",
        "commonName": "MAPT",
        "uniprotId": "P10636",
        "chemblId": "CHEMBL1293224",
        "targetClass": "Other cytosolic protein",
        "probability": 0.9969,
        "knownActives": "52 /  22"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.9969,
        "knownActives": "542 /  191"
      },
      {
        "target": "Transcription factor AP1",
        "commonName": "N/A",
        "uniprotId": "P05412&P01100",
        "chemblId": "CHEMBL2111421",
        "targetClass": "Transcription factor",
        "probability": 0.9969,
        "knownActives": "3 /  4"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.9969,
        "knownActives": "306 /  166"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.9969,
        "knownActives": "621 /  62"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.9969,
        "knownActives": "537 /  62"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.9969,
        "knownActives": "583 /  118"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.9969,
        "knownActives": "216 /  56"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 3",
        "commonName": "DYRK3",
        "uniprotId": "O43781",
        "chemblId": "CHEMBL4575",
        "targetClass": "Kinase",
        "probability": 0.9969,
        "knownActives": "27 /  1"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.9969,
        "knownActives": "432 /  68"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 0.9969,
        "knownActives": "112 /  38"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.9967,
        "knownActives": "6 /  6"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.9941,
        "knownActives": "326 /  24"
      },
      {
        "target": "Tyrosine-protein kinase ABL1",
        "commonName": "ABL1",
        "uniprotId": "P00519",
        "chemblId": "CHEMBL1862",
        "targetClass": "Kinase",
        "probability": 0.9883,
        "knownActives": "193 /  2"
      },
      {
        "target": "DNA topoisomerase 2-alpha",
        "commonName": "TOP2A",
        "uniprotId": "P11388",
        "chemblId": "CHEMBL1806",
        "targetClass": "Isomerase",
        "probability": 0.9818,
        "knownActives": "44 /  20"
      },
      {
        "target": "Inhibitor of NF-kappa-B kinase (IKK)",
        "commonName": "N/A",
        "uniprotId": "O14920&O15111&Q9Y6K9",
        "chemblId": "CHEMBL2111328",
        "targetClass": "Kinase",
        "probability": 0.9742,
        "knownActives": "2 /  3"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.9651,
        "knownActives": "20 /  5"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.9528,
        "knownActives": "315 /  39"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.949,
        "knownActives": "277 /  11"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.9339,
        "knownActives": "109 /  22"
      },
      {
        "target": "Histone deacetylase 8",
        "commonName": "HDAC8",
        "uniprotId": "Q9BY41",
        "chemblId": "CHEMBL3192",
        "targetClass": "Eraser",
        "probability": 0.931,
        "knownActives": "139 /  26"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 0.8645,
        "knownActives": "153 /  20"
      },
      {
        "target": "Aldo-keto reductase family 1 member B10",
        "commonName": "AKR1B10",
        "uniprotId": "O60218",
        "chemblId": "CHEMBL5983",
        "targetClass": "Oxidoreductase",
        "probability": 0.8645,
        "knownActives": "54 /  19"
      },
      {
        "target": "RAC-alpha serine/threonine-protein kinase",
        "commonName": "AKT1",
        "uniprotId": "P31749",
        "chemblId": "CHEMBL4282",
        "targetClass": "Kinase",
        "probability": 0.8484,
        "knownActives": "151 /  4"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 3",
        "commonName": "HSD17B3",
        "uniprotId": "P37058",
        "chemblId": "CHEMBL4234",
        "targetClass": "Oxidoreductase",
        "probability": 0.7819,
        "knownActives": "98 /  4"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.7673,
        "knownActives": "278 /  6"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.7551,
        "knownActives": "332 /  30"
      },
      {
        "target": "Islet amyloid polypeptide",
        "commonName": "IAPP",
        "uniprotId": "P10997",
        "chemblId": "CHEMBL1914266",
        "targetClass": "Secreted protein",
        "probability": 0.7358,
        "knownActives": "16 /  9"
      },
      {
        "target": "Histone deacetylase 3",
        "commonName": "HDAC3",
        "uniprotId": "O15379",
        "chemblId": "CHEMBL1829",
        "targetClass": "Eraser",
        "probability": 0.594,
        "knownActives": "111 /  12"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.5491,
        "knownActives": "123 /  4"
      },
      {
        "target": "Collagenase 3",
        "commonName": "MMP13",
        "uniprotId": "P45452",
        "chemblId": "CHEMBL280",
        "targetClass": "Protease",
        "probability": 0.484,
        "knownActives": "86 /  7"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 0.4559,
        "knownActives": "157 /  13"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.406,
        "knownActives": "316 /  122"
      },
      {
        "target": "Fibroblast growth factor receptor 1",
        "commonName": "FGFR1",
        "uniprotId": "P11362",
        "chemblId": "CHEMBL3650",
        "targetClass": "Kinase",
        "probability": 0.2932,
        "knownActives": "344 /  9"
      },
      {
        "target": "Tumor necrosis factor",
        "commonName": "TNF",
        "uniprotId": "P01375",
        "chemblId": "CHEMBL1825",
        "targetClass": "Secreted protein",
        "probability": 0.2677,
        "knownActives": "49 /  4"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.2669,
        "knownActives": "62 /  25"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.2669,
        "knownActives": "33 /  26"
      },
      {
        "target": "Stromal cell-derived factor 1",
        "commonName": "CXCL12",
        "uniprotId": "P48061",
        "chemblId": "CHEMBL3286074",
        "targetClass": "Secreted protein",
        "probability": 0.2426,
        "knownActives": "28 /  26"
      },
      {
        "target": "Interleukin-6",
        "commonName": "IL6",
        "uniprotId": "P05231",
        "chemblId": "CHEMBL1795129",
        "targetClass": "Secreted protein",
        "probability": 0.1851,
        "knownActives": "4 /  2"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.1846,
        "knownActives": "2400 /  378"
      },
      {
        "target": "Farnesyl pyrophosphate synthase",
        "commonName": "FDPS",
        "uniprotId": "P14324",
        "chemblId": "CHEMBL1782",
        "targetClass": "Transferase",
        "probability": 0.1845,
        "knownActives": "137 /  4"
      },
      {
        "target": "Cytochrome P450 2C9",
        "commonName": "CYP2C9",
        "uniprotId": "P11712",
        "chemblId": "CHEMBL3397",
        "targetClass": "Cytochrome P450",
        "probability": 0.1542,
        "knownActives": "14 /  4"
      },
      {
        "target": "Neutrophil elastase",
        "commonName": "ELANE",
        "uniprotId": "P08246",
        "chemblId": "CHEMBL248",
        "targetClass": "Protease",
        "probability": 0.1499,
        "knownActives": "60 /  15"
      },
      {
        "target": "Thioredoxin reductase 1, cytoplasmic",
        "commonName": "TXNRD1",
        "uniprotId": "Q16881",
        "chemblId": "CHEMBL1927",
        "targetClass": "Oxidoreductase",
        "probability": 0.1406,
        "knownActives": "6 /  5"
      },
      {
        "target": "Bifunctional epoxide hydrolase 2",
        "commonName": "EPHX2",
        "uniprotId": "P34913",
        "chemblId": "CHEMBL2409",
        "targetClass": "Protease",
        "probability": 0.1325,
        "knownActives": "45 /  20"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.1239,
        "knownActives": "70 /  23"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.1237,
        "knownActives": "298 /  210"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.119,
        "knownActives": "38 /  24"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.1172,
        "knownActives": "669 /  88"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1147,
        "knownActives": "94 /  6"
      },
      {
        "target": "Cytochrome P450 2C19",
        "commonName": "CYP2C19",
        "uniprotId": "P33261",
        "chemblId": "CHEMBL3622",
        "targetClass": "Cytochrome P450",
        "probability": 0.1144,
        "knownActives": "8 /  4"
      },
      {
        "target": "Cytochrome P450 3A4",
        "commonName": "CYP3A4",
        "uniprotId": "P08684",
        "chemblId": "CHEMBL340",
        "targetClass": "Cytochrome P450",
        "probability": 0.1144,
        "knownActives": "20 /  4"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.1087,
        "knownActives": "258 /  76"
      },
      {
        "target": "Cytochrome P450 2D6",
        "commonName": "CYP2D6",
        "uniprotId": "P10635",
        "chemblId": "CHEMBL289",
        "targetClass": "Cytochrome P450",
        "probability": 0.1039,
        "knownActives": "10 /  1"
      },
      {
        "target": "Lymphocyte antigen 96",
        "commonName": "LY96",
        "uniprotId": "Q9Y6Y9",
        "chemblId": "CHEMBL2375202",
        "targetClass": "Surface antigen",
        "probability": 0.1028,
        "knownActives": "3 /  5"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 0.096,
        "knownActives": "76 /  97"
      },
      {
        "target": "Cytochrome P450 1A2",
        "commonName": "CYP1A2",
        "uniprotId": "P05177",
        "chemblId": "CHEMBL3356",
        "targetClass": "Cytochrome P450",
        "probability": 0.0935,
        "knownActives": "11 /  14"
      },
      {
        "target": "Proto-oncogene tyrosine-protein kinase Src",
        "commonName": "SRC",
        "uniprotId": "P12931",
        "chemblId": "CHEMBL267",
        "targetClass": "Kinase",
        "probability": 0.0926,
        "knownActives": "520 /  11"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.0895,
        "knownActives": "25 /  22"
      },
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0821,
        "knownActives": "15 /  8"
      },
      {
        "target": "Macrophage migration inhibitory factor",
        "commonName": "MIF",
        "uniprotId": "P14174",
        "chemblId": "CHEMBL2085",
        "targetClass": "Enzyme",
        "probability": 0.0738,
        "knownActives": "152 /  12"
      },
      {
        "target": "Cyclin-dependent kinase 4/cyclin D1",
        "commonName": "N/A",
        "uniprotId": "P11802&P24385",
        "chemblId": "CHEMBL1907601",
        "targetClass": "Kinase",
        "probability": 0.068,
        "knownActives": "198 /  2"
      },
      {
        "target": "Adenosine receptor A1",
        "commonName": "ADORA1",
        "uniprotId": "P30542",
        "chemblId": "CHEMBL226",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0667,
        "knownActives": "149 /  2"
      },
      {
        "target": "Adenosine receptor A2a",
        "commonName": "ADORA2A",
        "uniprotId": "P29274",
        "chemblId": "CHEMBL251",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0667,
        "knownActives": "214 /  3"
      }
    ]
  },
  {
    "id": "eugenol",
    "name": "Eugenol",
    "cid": 3314,
    "smiles": "CC=Cc1ccc(c(c1)OC)O",
    "category": "Allylbenzene Phenylpropanoid",
    "topTarget": "Prostaglandin G/H synthase 2 (PTGS2)",
    "topTargetUniprot": "P35354",
    "targetClasses": [
      {
        "label": "Family A G protein-coupled receptor",
        "count": 22,
        "percentage": 22.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 14,
        "percentage": 14.0,
        "color": "#10B981"
      },
      {
        "label": "Nuclear receptor",
        "count": 8,
        "percentage": 8.0,
        "color": "#F59E0B"
      },
      {
        "label": "Kinase",
        "count": 5,
        "percentage": 5.0,
        "color": "#EF4444"
      },
      {
        "label": "Lyase",
        "count": 5,
        "percentage": 5.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Electrochemical transporter",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Hydrolase",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Primary active transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Eraser",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Unclassified protein",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Phosphatase",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Enzyme",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Other ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Secreted protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Protease",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Transcription factor",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Cytochrome P450",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Isomerase",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Structural protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Transferase",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Reader",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      }
    ],
    "targets": [
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.5691,
        "knownActives": "183 /  63"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.5562,
        "knownActives": "91 /  45"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.5345,
        "knownActives": "91 /  29"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.5338,
        "knownActives": "410 /  187"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.5137,
        "knownActives": "360 /  47"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.4103,
        "knownActives": "59 /  24"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.4064,
        "knownActives": "142 /  202"
      },
      {
        "target": "Insulin-like growth factor 1 receptor",
        "commonName": "IGF1R",
        "uniprotId": "P08069",
        "chemblId": "CHEMBL1957",
        "targetClass": "Kinase",
        "probability": 0.4035,
        "knownActives": "34 /  15"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.3898,
        "knownActives": "87 /  24"
      },
      {
        "target": "Transient receptor potential cation channel subfamily A member 1",
        "commonName": "TRPA1",
        "uniprotId": "O75762",
        "chemblId": "CHEMBL6007",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.3847,
        "knownActives": "13 /  15"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.3732,
        "knownActives": "101 /  49"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.3655,
        "knownActives": "28 /  54"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.3636,
        "knownActives": "377 /  101"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX12",
        "commonName": "ALOX12",
        "uniprotId": "P18054",
        "chemblId": "CHEMBL3687",
        "targetClass": "Enzyme",
        "probability": 0.3455,
        "knownActives": "71 /  12"
      },
      {
        "target": "3-hydroxy-3-methylglutaryl-coenzyme A reductase",
        "commonName": "HMGCR",
        "uniprotId": "P04035",
        "chemblId": "CHEMBL402",
        "targetClass": "Oxidoreductase",
        "probability": 0.3302,
        "knownActives": "5 /  5"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.3285,
        "knownActives": "290 /  17"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 1",
        "commonName": "HSD17B1",
        "uniprotId": "P14061",
        "chemblId": "CHEMBL3181",
        "targetClass": "Oxidoreductase",
        "probability": 0.3285,
        "knownActives": "316 /  36"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.2902,
        "knownActives": "60 /  142"
      },
      {
        "target": "Muscarinic acetylcholine receptor M3",
        "commonName": "CHRM3",
        "uniprotId": "P20309",
        "chemblId": "CHEMBL245",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2878,
        "knownActives": "5 /  26"
      },
      {
        "target": "Muscarinic acetylcholine receptor M1",
        "commonName": "CHRM1",
        "uniprotId": "P11229",
        "chemblId": "CHEMBL216",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2878,
        "knownActives": "6 /  25"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.2799,
        "knownActives": "122 /  43"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.2776,
        "knownActives": "313 /  51"
      },
      {
        "target": "Transcription factor AP1",
        "commonName": "N/A",
        "uniprotId": "P05412&P01100",
        "chemblId": "CHEMBL2111421",
        "targetClass": "Transcription factor",
        "probability": 0.2773,
        "knownActives": "3 /  5"
      },
      {
        "target": "Macrophage migration inhibitory factor",
        "commonName": "MIF",
        "uniprotId": "P14174",
        "chemblId": "CHEMBL2085",
        "targetClass": "Enzyme",
        "probability": 0.2664,
        "knownActives": "99 /  12"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2545,
        "knownActives": "48 /  108"
      },
      {
        "target": "D(3) dopamine receptor",
        "commonName": "DRD3",
        "uniprotId": "P35462",
        "chemblId": "CHEMBL234",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2438,
        "knownActives": "194 /  139"
      },
      {
        "target": "D(1A) dopamine receptor",
        "commonName": "DRD1",
        "uniprotId": "P21728",
        "chemblId": "CHEMBL2056",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2438,
        "knownActives": "265 /  149"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2398,
        "knownActives": "38 /  93"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2398,
        "knownActives": "279 /  165"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.2392,
        "knownActives": "255 /  126"
      },
      {
        "target": "Tubulin beta-1 chain",
        "commonName": "TUBB1",
        "uniprotId": "Q9H4B7",
        "chemblId": "CHEMBL1915",
        "targetClass": "Structural protein",
        "probability": 0.2378,
        "knownActives": "19 /  35"
      },
      {
        "target": "Sodium-dependent serotonin transporter",
        "commonName": "SLC6A4",
        "uniprotId": "P31645",
        "chemblId": "CHEMBL228",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2284,
        "knownActives": "57 /  213"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.2269,
        "knownActives": "942 /  270"
      },
      {
        "target": "4-aminobutyrate aminotransferase, mitochondrial",
        "commonName": "ABAT",
        "uniprotId": "P80404",
        "chemblId": "CHEMBL2044",
        "targetClass": "Transferase",
        "probability": 0.2263,
        "knownActives": "1 /  1"
      },
      {
        "target": "Succinate-semialdehyde dehydrogenase, mitochondrial",
        "commonName": "ALDH5A1",
        "uniprotId": "P51649",
        "chemblId": "CHEMBL1911",
        "targetClass": "Oxidoreductase",
        "probability": 0.2263,
        "knownActives": "1 /  1"
      },
      {
        "target": "Serine/threonine-protein kinase/endoribonuclease IRE1",
        "commonName": "ERN1",
        "uniprotId": "O75460",
        "chemblId": "CHEMBL1163101",
        "targetClass": "Enzyme",
        "probability": 0.2164,
        "knownActives": "229 /  46"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.2146,
        "knownActives": "185 /  61"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.2137,
        "knownActives": "269 /  82"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.2131,
        "knownActives": "330 /  41"
      },
      {
        "target": "Bcl-2-like protein 1",
        "commonName": "BCL2L1",
        "uniprotId": "Q07817",
        "chemblId": "CHEMBL4625",
        "targetClass": "Other ion channel",
        "probability": 0.2073,
        "knownActives": "42 /  5"
      },
      {
        "target": "Apoptosis regulator Bcl-2",
        "commonName": "BCL2",
        "uniprotId": "P10415",
        "chemblId": "CHEMBL4860",
        "targetClass": "Other ion channel",
        "probability": 0.2073,
        "knownActives": "59 /  12"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.2066,
        "knownActives": "102 /  67"
      },
      {
        "target": "5-hydroxytryptamine receptor 2B",
        "commonName": "HTR2B",
        "uniprotId": "P41595",
        "chemblId": "CHEMBL1833",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2063,
        "knownActives": "80 /  58"
      },
      {
        "target": "5-hydroxytryptamine receptor 2A",
        "commonName": "HTR2A",
        "uniprotId": "P28223",
        "chemblId": "CHEMBL224",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2063,
        "knownActives": "96 /  142"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.2063,
        "knownActives": "800 /  203"
      },
      {
        "target": "Organic anion transporter 3",
        "commonName": "SLC22A8",
        "uniprotId": "Q8TCC7",
        "chemblId": "CHEMBL1641348",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2049,
        "knownActives": "7 /  2"
      },
      {
        "target": "Solute carrier family 22 member 6",
        "commonName": "SLC22A6",
        "uniprotId": "Q4U2R8",
        "chemblId": "CHEMBL1641347",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2049,
        "knownActives": "5 /  1"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.1982,
        "knownActives": "315 /  81"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.1977,
        "knownActives": "109 /  61"
      },
      {
        "target": "Histone deacetylase 8",
        "commonName": "HDAC8",
        "uniprotId": "Q9BY41",
        "chemblId": "CHEMBL3192",
        "targetClass": "Eraser",
        "probability": 0.1952,
        "knownActives": "59 /  23"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.192,
        "knownActives": "51 /  17"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1895,
        "knownActives": "219 /  144"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 3",
        "commonName": "ATP2A3",
        "uniprotId": "Q93084",
        "chemblId": "CHEMBL2401",
        "targetClass": "Primary active transporter",
        "probability": 0.1871,
        "knownActives": "3 /  2"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 2",
        "commonName": "ATP2A2",
        "uniprotId": "P16615",
        "chemblId": "CHEMBL3901",
        "targetClass": "Primary active transporter",
        "probability": 0.1871,
        "knownActives": "3 /  2"
      },
      {
        "target": "Sex hormone-binding globulin",
        "commonName": "SHBG",
        "uniprotId": "P04278",
        "chemblId": "CHEMBL3305",
        "targetClass": "Secreted protein",
        "probability": 0.1862,
        "knownActives": "24 /  15"
      },
      {
        "target": "D(4) dopamine receptor",
        "commonName": "DRD4",
        "uniprotId": "P21917",
        "chemblId": "CHEMBL219",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.186,
        "knownActives": "90 /  74"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.1832,
        "knownActives": "266 /  38"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 0.1826,
        "knownActives": "76 /  19"
      },
      {
        "target": "Indoleamine 2,3-dioxygenase 1",
        "commonName": "IDO1",
        "uniprotId": "P14902",
        "chemblId": "CHEMBL4685",
        "targetClass": "Oxidoreductase",
        "probability": 0.1783,
        "knownActives": "160 /  10"
      },
      {
        "target": "5-hydroxytryptamine receptor 6",
        "commonName": "HTR6",
        "uniprotId": "P50406",
        "chemblId": "CHEMBL3371",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1778,
        "knownActives": "25 /  21"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1745,
        "knownActives": "110 /  99"
      },
      {
        "target": "Liver carboxylesterase 1",
        "commonName": "CES1",
        "uniprotId": "P23141",
        "chemblId": "CHEMBL2265",
        "targetClass": "Hydrolase",
        "probability": 0.1729,
        "knownActives": "2 /  5"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.1729,
        "knownActives": "21 /  16"
      },
      {
        "target": "M-phase inducer phosphatase 2",
        "commonName": "CDC25B",
        "uniprotId": "P30305",
        "chemblId": "CHEMBL4804",
        "targetClass": "Phosphatase",
        "probability": 0.1696,
        "knownActives": "50 /  7"
      },
      {
        "target": "Calmodulin-1",
        "commonName": "CALM1",
        "uniprotId": "P0DP23",
        "chemblId": "CHEMBL6093",
        "targetClass": "Unclassified protein",
        "probability": 0.1692,
        "knownActives": "4 /  3"
      },
      {
        "target": "Cytochrome P450 1A1",
        "commonName": "CYP1A1",
        "uniprotId": "P04798",
        "chemblId": "CHEMBL2231",
        "targetClass": "Cytochrome P450",
        "probability": 0.1689,
        "knownActives": "6 /  27"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.1683,
        "knownActives": "405 /  320"
      },
      {
        "target": "Estrogen-related receptor gamma",
        "commonName": "ESRRG",
        "uniprotId": "P62508",
        "chemblId": "CHEMBL4245",
        "targetClass": "Nuclear receptor",
        "probability": 0.1665,
        "knownActives": "36 /  19"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.1643,
        "knownActives": "103 /  78"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.163,
        "knownActives": "222 /  8"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1625,
        "knownActives": "73 /  85"
      },
      {
        "target": "Steroid hormone receptor ERR1",
        "commonName": "ESRRA",
        "uniprotId": "P11474",
        "chemblId": "CHEMBL3429",
        "targetClass": "Nuclear receptor",
        "probability": 0.1606,
        "knownActives": "32 /  7"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 0.1574,
        "knownActives": "94 /  4"
      },
      {
        "target": "Cannabinoid receptor 1",
        "commonName": "CNR1",
        "uniprotId": "P21554",
        "chemblId": "CHEMBL218",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1563,
        "knownActives": "178 /  101"
      },
      {
        "target": "GABA-A receptor; alpha-1/beta-2/gamma-2",
        "commonName": "N/A",
        "uniprotId": "P14867&P47870&P18507",
        "chemblId": "CHEMBL2095172",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.1563,
        "knownActives": "10 /  5"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.1556,
        "knownActives": "207 /  115"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.1537,
        "knownActives": "59 /  92"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 2",
        "commonName": "MKNK2",
        "uniprotId": "Q9HBH9",
        "chemblId": "CHEMBL4204",
        "targetClass": "Kinase",
        "probability": 0.1492,
        "knownActives": "32 /  2"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.149,
        "knownActives": "31 /  5"
      },
      {
        "target": "Progesterone receptor",
        "commonName": "PGR",
        "uniprotId": "P06401",
        "chemblId": "CHEMBL208",
        "targetClass": "Nuclear receptor",
        "probability": 0.1485,
        "knownActives": "51 /  26"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1468,
        "knownActives": "242 /  90"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1468,
        "knownActives": "268 /  74"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1468,
        "knownActives": "273 /  96"
      },
      {
        "target": "Alpha-1D adrenergic receptor",
        "commonName": "ADRA1D",
        "uniprotId": "P25100",
        "chemblId": "CHEMBL223",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1465,
        "knownActives": "11 /  31"
      },
      {
        "target": "Alpha-2C adrenergic receptor",
        "commonName": "ADRA2C",
        "uniprotId": "P18825",
        "chemblId": "CHEMBL1916",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1465,
        "knownActives": "19 /  24"
      },
      {
        "target": "Alpha-2B adrenergic receptor",
        "commonName": "ADRA2B",
        "uniprotId": "P18089",
        "chemblId": "CHEMBL1942",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1465,
        "knownActives": "15 /  19"
      },
      {
        "target": "Alpha-2A adrenergic receptor",
        "commonName": "ADRA2A",
        "uniprotId": "P08913",
        "chemblId": "CHEMBL1867",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1465,
        "knownActives": "42 /  21"
      },
      {
        "target": "Tyrosine-protein kinase Fyn",
        "commonName": "FYN",
        "uniprotId": "P06241",
        "chemblId": "CHEMBL1841",
        "targetClass": "Kinase",
        "probability": 0.1465,
        "knownActives": "128 /  9"
      },
      {
        "target": "Programmed cell death 1 ligand 1",
        "commonName": "CD274",
        "uniprotId": "Q9NZQ7",
        "chemblId": "CHEMBL3580522",
        "targetClass": "Unclassified protein",
        "probability": 0.1438,
        "knownActives": "1 /  2"
      },
      {
        "target": "Programmed cell death protein 1/Programmed cell death 1 ligand 1",
        "commonName": "N/A",
        "uniprotId": "Q15116&Q9NZQ7",
        "chemblId": "CHEMBL4523993",
        "targetClass": "Unclassified protein",
        "probability": 0.1438,
        "knownActives": "1 /  4"
      },
      {
        "target": "72 kDa type IV collagenase",
        "commonName": "MMP2",
        "uniprotId": "P08253",
        "chemblId": "CHEMBL333",
        "targetClass": "Protease",
        "probability": 0.1426,
        "knownActives": "141 /  4"
      },
      {
        "target": "Protein disulfide-isomerase",
        "commonName": "P4HB",
        "uniprotId": "P07237",
        "chemblId": "CHEMBL5422",
        "targetClass": "Isomerase",
        "probability": 0.1416,
        "knownActives": "103 /  51"
      },
      {
        "target": "Cholesteryl ester transfer protein",
        "commonName": "CETP",
        "uniprotId": "P11597",
        "chemblId": "CHEMBL3572",
        "targetClass": "Other ion channel",
        "probability": 0.1396,
        "knownActives": "8 /  11"
      },
      {
        "target": "Bromodomain-containing protein 4",
        "commonName": "BRD4",
        "uniprotId": "O60885",
        "chemblId": "CHEMBL1163125",
        "targetClass": "Reader",
        "probability": 0.1382,
        "knownActives": "111 /  4"
      },
      {
        "target": "M-phase inducer phosphatase 1",
        "commonName": "CDC25A",
        "uniprotId": "P30304",
        "chemblId": "CHEMBL3775",
        "targetClass": "Phosphatase",
        "probability": 0.1345,
        "knownActives": "40 /  3"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.1334,
        "knownActives": "96 /  25"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 0.1326,
        "knownActives": "31 /  16"
      },
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1309,
        "knownActives": "12 /  160"
      },
      {
        "target": "Melatonin receptor type 1B",
        "commonName": "MTNR1B",
        "uniprotId": "P49286",
        "chemblId": "CHEMBL1946",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1304,
        "knownActives": "11 /  111"
      },
      {
        "target": "NAD-dependent protein deacetylase sirtuin-3, mitochondrial",
        "commonName": "SIRT3",
        "uniprotId": "Q9NTG7",
        "chemblId": "CHEMBL4461",
        "targetClass": "Eraser",
        "probability": 0.1303,
        "knownActives": "3 /  1"
      }
    ]
  },
  {
    "id": "imperatorin",
    "name": "Imperatorin",
    "cid": 10212,
    "smiles": "CC(=CCOC1=C2C=CC(=O)OC2=CC=C1)C",
    "category": "Furanocoumarin",
    "topTarget": "Melatonin receptor type 1A (MTNR1A)",
    "topTargetUniprot": "P48039",
    "targetClasses": [
      {
        "label": "Oxidoreductase",
        "count": 19,
        "percentage": 19.0,
        "color": "#3B82F6"
      },
      {
        "label": "Lyase",
        "count": 12,
        "percentage": 12.0,
        "color": "#10B981"
      },
      {
        "label": "Kinase",
        "count": 12,
        "percentage": 12.0,
        "color": "#F59E0B"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 11,
        "percentage": 11.0,
        "color": "#EF4444"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 9,
        "percentage": 9.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Cytochrome P450",
        "count": 6,
        "percentage": 6.0,
        "color": "#EC4899"
      },
      {
        "label": "Hydrolase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Nuclear receptor",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Eraser",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Unclassified protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Enzyme",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Protease",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Phosphodiesterase",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Phosphatase",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#10B981"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#F59E0B"
      },
      {
        "label": "Transcription factor",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Reader",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Primary active transporter",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Electrochemical transporter",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      }
    ],
    "targets": [
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9871,
        "knownActives": "944 /  7"
      },
      {
        "target": "3-oxo-5-alpha-steroid 4-dehydrogenase 1",
        "commonName": "SRD5A1",
        "uniprotId": "P18405",
        "chemblId": "CHEMBL1787",
        "targetClass": "Oxidoreductase",
        "probability": 0.9709,
        "knownActives": "309 /  6"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.9657,
        "knownActives": "4225 /  232"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.9657,
        "knownActives": "3438 /  244"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.9018,
        "knownActives": "477 /  20"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.9018,
        "knownActives": "1073 /  81"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 0.8981,
        "knownActives": "224 /  56"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 0.8956,
        "knownActives": "362 /  54"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.8806,
        "knownActives": "2352 /  493"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.7963,
        "knownActives": "1013 /  70"
      },
      {
        "target": "Carbonic anhydrase 3",
        "commonName": "CA3",
        "uniprotId": "P07451",
        "chemblId": "CHEMBL2885",
        "targetClass": "Lyase",
        "probability": 0.7816,
        "knownActives": "103 /  10"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.7814,
        "knownActives": "255 /  10"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 0.7421,
        "knownActives": "296 /  19"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.7246,
        "knownActives": "191 /  10"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.6998,
        "knownActives": "2926 /  1"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.679,
        "knownActives": "4675 /  105"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.6474,
        "knownActives": "8292 /  23"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.6413,
        "knownActives": "387 /  54"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 3",
        "commonName": "KCNA3",
        "uniprotId": "P22001",
        "chemblId": "CHEMBL4633",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.6294,
        "knownActives": "267 /  66"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.6055,
        "knownActives": "1135 /  183"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.5158,
        "knownActives": "3289 /  5"
      },
      {
        "target": "Aldo-keto reductase family 1 member C3",
        "commonName": "AKR1C3",
        "uniprotId": "P42330",
        "chemblId": "CHEMBL4681",
        "targetClass": "Oxidoreductase",
        "probability": 0.4773,
        "knownActives": "539 /  1"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.448,
        "knownActives": "1473 /  31"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 5",
        "commonName": "KCNA5",
        "uniprotId": "P22460",
        "chemblId": "CHEMBL4306",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.433,
        "knownActives": "492 /  35"
      },
      {
        "target": "Cytochrome P450 1A1",
        "commonName": "CYP1A1",
        "uniprotId": "P04798",
        "chemblId": "CHEMBL2231",
        "targetClass": "Cytochrome P450",
        "probability": 0.3801,
        "knownActives": "52 /  13"
      },
      {
        "target": "Tyrosyl-DNA phosphodiesterase 1",
        "commonName": "TDP1",
        "uniprotId": "Q9NUW8",
        "chemblId": "CHEMBL1075138",
        "targetClass": "Phosphodiesterase",
        "probability": 0.3645,
        "knownActives": "76 /  18"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 1",
        "commonName": "KCNA1",
        "uniprotId": "Q09470",
        "chemblId": "CHEMBL2309",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.3483,
        "knownActives": "6 /  3"
      },
      {
        "target": "Aldehyde dehydrogenase, mitochondrial",
        "commonName": "ALDH2",
        "uniprotId": "P05091",
        "chemblId": "CHEMBL1935",
        "targetClass": "Oxidoreductase",
        "probability": 0.3155,
        "knownActives": "85 /  44"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.3097,
        "knownActives": "1710 /  35"
      },
      {
        "target": "Immunoglobulin lambda variable 6-57",
        "commonName": "IGLV6-57",
        "uniprotId": "P01721",
        "chemblId": "CHEMBL4739844",
        "targetClass": "Unclassified protein",
        "probability": 0.2888,
        "knownActives": "31 /  9"
      },
      {
        "target": "Aldehyde dehydrogenase 1A1",
        "commonName": "ALDH1A1",
        "uniprotId": "P00352",
        "chemblId": "CHEMBL3577",
        "targetClass": "Oxidoreductase",
        "probability": 0.2868,
        "knownActives": "202 /  3"
      },
      {
        "target": "Voltage-gated inwardly rectifying potassium channel KCNH2",
        "commonName": "KCNH2",
        "uniprotId": "Q12809",
        "chemblId": "CHEMBL240",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2853,
        "knownActives": "5288 /  9"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 4",
        "commonName": "KCNA4",
        "uniprotId": "P22459",
        "chemblId": "CHEMBL4205",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2753,
        "knownActives": "8 /  2"
      },
      {
        "target": "Aldo-keto reductase family 1 member C1",
        "commonName": "AKR1C1",
        "uniprotId": "Q04828",
        "chemblId": "CHEMBL5905",
        "targetClass": "Oxidoreductase",
        "probability": 0.2691,
        "knownActives": "25 /  1"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.2448,
        "knownActives": "5598 /  79"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 0.2424,
        "knownActives": "184 /  20"
      },
      {
        "target": "Lysine-specific demethylase 5B",
        "commonName": "KDM5B",
        "uniprotId": "Q9UGL1",
        "chemblId": "CHEMBL3774295",
        "targetClass": "Eraser",
        "probability": 0.2395,
        "knownActives": "426 /  1"
      },
      {
        "target": "Small conductance calcium-activated potassium channel protein 2",
        "commonName": "KCNN2",
        "uniprotId": "Q9H2S1",
        "chemblId": "CHEMBL4469",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2368,
        "knownActives": "8 /  1"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 7",
        "commonName": "KCNA7",
        "uniprotId": "Q96RP8",
        "chemblId": "CHEMBL2773",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2368,
        "knownActives": "1 /  1"
      },
      {
        "target": "Small conductance calcium-activated potassium channel protein 1",
        "commonName": "KCNN1",
        "uniprotId": "Q92952",
        "chemblId": "CHEMBL2369",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2368,
        "knownActives": "5 /  1"
      },
      {
        "target": "Calcium-activated potassium channel subunit alpha-1",
        "commonName": "KCNMA1",
        "uniprotId": "Q12791",
        "chemblId": "CHEMBL4304",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2368,
        "knownActives": "8 /  1"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 6",
        "commonName": "KCNA6",
        "uniprotId": "P17658",
        "chemblId": "CHEMBL5279",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2368,
        "knownActives": "5 /  1"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 2",
        "commonName": "KCNA2",
        "uniprotId": "P16389",
        "chemblId": "CHEMBL2086",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.2368,
        "knownActives": "2 /  1"
      },
      {
        "target": "Advanced glycosylation end product-specific receptor",
        "commonName": "AGER",
        "uniprotId": "Q15109",
        "chemblId": "CHEMBL2176846",
        "targetClass": "Membrane receptor",
        "probability": 0.2233,
        "knownActives": "35 /  1"
      },
      {
        "target": "DNA repair nuclease/redox regulator APEX1",
        "commonName": "APEX1",
        "uniprotId": "P27695",
        "chemblId": "CHEMBL5619",
        "targetClass": "Enzyme",
        "probability": 0.2207,
        "knownActives": "59 /  2"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.2066,
        "knownActives": "983 /  13"
      },
      {
        "target": "Cytochrome P450 1A2",
        "commonName": "CYP1A2",
        "uniprotId": "P05177",
        "chemblId": "CHEMBL3356",
        "targetClass": "Cytochrome P450",
        "probability": 0.1872,
        "knownActives": "64 /  11"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.1865,
        "knownActives": "3478 /  286"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.1831,
        "knownActives": "250 /  79"
      },
      {
        "target": "Pyruvate kinase PKLR",
        "commonName": "PKLR",
        "uniprotId": "P30613",
        "chemblId": "CHEMBL1075126",
        "targetClass": "Enzyme",
        "probability": 0.172,
        "knownActives": "2 /  3"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.1547,
        "knownActives": "966 /  42"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.1535,
        "knownActives": "2007 /  94"
      },
      {
        "target": "Exportin-1",
        "commonName": "XPO1",
        "uniprotId": "O14980",
        "chemblId": "CHEMBL5661",
        "targetClass": "Unclassified protein",
        "probability": 0.1458,
        "knownActives": "44 /  2"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.1429,
        "knownActives": "5811 /  10"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.1418,
        "knownActives": "2304 /  14"
      },
      {
        "target": "NAD-dependent protein deacetylase sirtuin-1",
        "commonName": "SIRT1",
        "uniprotId": "Q96EB6",
        "chemblId": "CHEMBL4506",
        "targetClass": "Eraser",
        "probability": 0.1343,
        "knownActives": "245 /  2"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.134,
        "knownActives": "7616 /  35"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.1331,
        "knownActives": "735 /  102"
      },
      {
        "target": "Polycomb protein EED",
        "commonName": "EED",
        "uniprotId": "O75530",
        "chemblId": "CHEMBL2189117",
        "targetClass": "Unclassified protein",
        "probability": 0.127,
        "knownActives": "514 /  1"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.1162,
        "knownActives": "18 /  31"
      },
      {
        "target": "Orexin/Hypocretin receptor type 1",
        "commonName": "HCRTR1",
        "uniprotId": "O43613",
        "chemblId": "CHEMBL5113",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1111,
        "knownActives": "4939 /  1"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.0977,
        "knownActives": "1088 /  61"
      },
      {
        "target": "Glucose-6-phosphate 1-dehydrogenase",
        "commonName": "G6PD",
        "uniprotId": "P11413",
        "chemblId": "CHEMBL5347",
        "targetClass": "Oxidoreductase",
        "probability": 0.0932,
        "knownActives": "14 /  1"
      },
      {
        "target": "Transcription factor p65",
        "commonName": "RELA",
        "uniprotId": "Q04206",
        "chemblId": "CHEMBL5533",
        "targetClass": "Transcription factor",
        "probability": 0.0895,
        "knownActives": "36 /  4"
      },
      {
        "target": "Bromodomain-containing protein 4",
        "commonName": "BRD4",
        "uniprotId": "O60885",
        "chemblId": "CHEMBL1163125",
        "targetClass": "Reader",
        "probability": 0.0865,
        "knownActives": "6564 /  4"
      },
      {
        "target": "D-amino-acid oxidase",
        "commonName": "DAO",
        "uniprotId": "P14920",
        "chemblId": "CHEMBL5485",
        "targetClass": "Oxidoreductase",
        "probability": 0.0847,
        "knownActives": "189 /  1"
      },
      {
        "target": "Tyrosine-protein kinase Lck",
        "commonName": "LCK",
        "uniprotId": "P06239",
        "chemblId": "CHEMBL258",
        "targetClass": "Kinase",
        "probability": 0.0801,
        "knownActives": "1155 /  4"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.0763,
        "knownActives": "2705 /  7"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.0762,
        "knownActives": "2143 /  14"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.076,
        "knownActives": "4501 /  13"
      },
      {
        "target": "Mitochondrial complex I (NADH dehydrogenase)",
        "commonName": "N/A",
        "uniprotId": "P03923&O95299&O00217&P03901&P56556&P03886&O95139&O00483&Q86Y39&P17568&P03891&O75306&P03915&P51970&O43674&P03905&P03897&O14561&O15239&O43181&O43676&O43677&O43678&O43920&O75251&O75380&O75438&O75489&O95167&O95168&O95169&O95178&O95182&O95298&O96000&P19404&P28331&P49821&P56181&Q16718&Q16795&Q8N183&Q9BU61&Q9NRX3&Q9NX14&Q9P032&Q9P0J0&Q9UI09&Q9Y375&Q9Y6M9",
        "chemblId": "CHEMBL2363065",
        "targetClass": "Oxidoreductase",
        "probability": 0.0747,
        "knownActives": "2 /  3"
      },
      {
        "target": "Cysteine protease ATG4B",
        "commonName": "ATG4B",
        "uniprotId": "Q9Y4P1",
        "chemblId": "CHEMBL1741221",
        "targetClass": "Enzyme",
        "probability": 0.0739,
        "knownActives": "54 /  2"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0726,
        "knownActives": "3670 /  64"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.0718,
        "knownActives": "808 /  13"
      },
      {
        "target": "Casein kinase II subunit alpha",
        "commonName": "CSNK2A1",
        "uniprotId": "P68400",
        "chemblId": "CHEMBL3629",
        "targetClass": "Kinase",
        "probability": 0.0711,
        "knownActives": "371 /  6"
      },
      {
        "target": "Dual specificity protein kinase CLK2",
        "commonName": "CLK2",
        "uniprotId": "P49760",
        "chemblId": "CHEMBL4225",
        "targetClass": "Kinase",
        "probability": 0.07,
        "knownActives": "1011 /  2"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 3",
        "commonName": "HSD17B3",
        "uniprotId": "P37058",
        "chemblId": "CHEMBL4234",
        "targetClass": "Oxidoreductase",
        "probability": 0.0654,
        "knownActives": "33 /  28"
      },
      {
        "target": "Steryl-sulfatase",
        "commonName": "STS",
        "uniprotId": "P08842",
        "chemblId": "CHEMBL3559",
        "targetClass": "Hydrolase",
        "probability": 0.0618,
        "knownActives": "275 /  10"
      },
      {
        "target": "G-protein coupled receptor 55",
        "commonName": "GPR55",
        "uniprotId": "Q9Y2T6",
        "chemblId": "CHEMBL1075322",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0582,
        "knownActives": "55 /  22"
      },
      {
        "target": "Prostaglandin E2 receptor EP2 subtype",
        "commonName": "PTGER2",
        "uniprotId": "P43116",
        "chemblId": "CHEMBL1881",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0581,
        "knownActives": "235 /  1"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.0577,
        "knownActives": "1148 /  43"
      },
      {
        "target": "G protein-coupled receptor kinase 6",
        "commonName": "GRK6",
        "uniprotId": "P43250",
        "chemblId": "CHEMBL6144",
        "targetClass": "Kinase",
        "probability": 0.0556,
        "knownActives": "73 /  4"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0545,
        "knownActives": "6506 /  14"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.0531,
        "knownActives": "448 /  2"
      },
      {
        "target": "D(3) dopamine receptor",
        "commonName": "DRD3",
        "uniprotId": "P35462",
        "chemblId": "CHEMBL234",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0529,
        "knownActives": "4187 /  14"
      },
      {
        "target": "M-phase inducer phosphatase 3",
        "commonName": "CDC25C",
        "uniprotId": "P30307",
        "chemblId": "CHEMBL2378",
        "targetClass": "Phosphatase",
        "probability": 0.0499,
        "knownActives": "39 /  5"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0487,
        "knownActives": "4659 /  75"
      },
      {
        "target": "Kallikrein-7",
        "commonName": "KLK7",
        "uniprotId": "P49862",
        "chemblId": "CHEMBL2443",
        "targetClass": "Protease",
        "probability": 0.0476,
        "knownActives": "197 /  4"
      },
      {
        "target": "Vitamin K epoxide reductase complex subunit 1",
        "commonName": "VKORC1",
        "uniprotId": "Q9BQB6",
        "chemblId": "CHEMBL1930",
        "targetClass": "Oxidoreductase",
        "probability": 0.0465,
        "knownActives": "6 /  10"
      },
      {
        "target": "Maltase-glucoamylase",
        "commonName": "MGAM",
        "uniprotId": "O43451",
        "chemblId": "CHEMBL2074",
        "targetClass": "Hydrolase",
        "probability": 0.0444,
        "knownActives": "122 /  5"
      },
      {
        "target": "Carbonyl reductase [NADPH] 1",
        "commonName": "CBR1",
        "uniprotId": "P16152",
        "chemblId": "CHEMBL5586",
        "targetClass": "Oxidoreductase",
        "probability": 0.0443,
        "knownActives": "1 /  3"
      },
      {
        "target": "Cytochrome P450 11B2, mitochondrial",
        "commonName": "CYP11B2",
        "uniprotId": "P19099",
        "chemblId": "CHEMBL2722",
        "targetClass": "Cytochrome P450",
        "probability": 0.0441,
        "knownActives": "1366 /  30"
      },
      {
        "target": "Cytochrome P450 11B1, mitochondrial",
        "commonName": "CYP11B1",
        "uniprotId": "P15538",
        "chemblId": "CHEMBL1908",
        "targetClass": "Cytochrome P450",
        "probability": 0.0441,
        "knownActives": "866 /  31"
      },
      {
        "target": "Aurora kinase B",
        "commonName": "AURKB",
        "uniprotId": "Q96GD4",
        "chemblId": "CHEMBL2185",
        "targetClass": "Kinase",
        "probability": 0.044,
        "knownActives": "1411 /  4"
      },
      {
        "target": "DNA-dependent protein kinase catalytic subunit",
        "commonName": "PRKDC",
        "uniprotId": "P78527",
        "chemblId": "CHEMBL3142",
        "targetClass": "Kinase",
        "probability": 0.0431,
        "knownActives": "1164 /  46"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0416,
        "knownActives": "3275 /  2"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1B",
        "commonName": "DYRK1B",
        "uniprotId": "Q9Y463",
        "chemblId": "CHEMBL5543",
        "targetClass": "Kinase",
        "probability": 0.0414,
        "knownActives": "570 /  1"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 2",
        "commonName": "DYRK2",
        "uniprotId": "Q92630",
        "chemblId": "CHEMBL4376",
        "targetClass": "Kinase",
        "probability": 0.0414,
        "knownActives": "404 /  1"
      },
      {
        "target": "Cyclin-dependent kinase 5/CDK5 activator 1",
        "commonName": "N/A",
        "uniprotId": "Q00535&Q15078",
        "chemblId": "CHEMBL1907600",
        "targetClass": "Kinase",
        "probability": 0.0414,
        "knownActives": "887 /  9"
      },
      {
        "target": "Liver carboxylesterase 1",
        "commonName": "CES1",
        "uniprotId": "P23141",
        "chemblId": "CHEMBL2265",
        "targetClass": "Hydrolase",
        "probability": 0.0411,
        "knownActives": "149 /  2"
      }
    ]
  },
  {
    "id": "liriodendrin",
    "name": "Liriodendrin",
    "cid": 3084137,
    "smiles": "COc1cc(cc(c1O)OC)C2C3COC(C3CO2)c4cc(c(c(c4)OC)OC5C(C(C(C(O5)CO)O)O)O)OC6C(C(C(C(O6)CO)O)O)O",
    "category": "Furofuran Lignan Diglucoside",
    "topTarget": "Adenosine receptor A1 (ADORA1)",
    "topTargetUniprot": "P30542",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 15,
        "percentage": 15.0,
        "color": "#3B82F6"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 13,
        "percentage": 13.0,
        "color": "#10B981"
      },
      {
        "label": "Oxidoreductase",
        "count": 9,
        "percentage": 9.0,
        "color": "#F59E0B"
      },
      {
        "label": "Hydrolase",
        "count": 6,
        "percentage": 6.0,
        "color": "#EF4444"
      },
      {
        "label": "Electrochemical transporter",
        "count": 5,
        "percentage": 5.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Protease",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Isomerase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Unclassified protein",
        "count": 5,
        "percentage": 5.0,
        "color": "#6366F1"
      },
      {
        "label": "Lyase",
        "count": 5,
        "percentage": 5.0,
        "color": "#14B8A6"
      },
      {
        "label": "Cytochrome P450",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Secreted protein",
        "count": 4,
        "percentage": 4.0,
        "color": "#84CC16"
      },
      {
        "label": "Phosphodiesterase",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Enzyme",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Transferase",
        "count": 3,
        "percentage": 3.0,
        "color": "#3B82F6"
      },
      {
        "label": "Eraser",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Other cytosolic protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Phosphatase",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Nuclear receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#EC4899"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Transcription factor",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Surface antigen",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Primary active transporter",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      }
    ],
    "targets": [
      {
        "target": "Adenosine receptor A1",
        "commonName": "ADORA1",
        "uniprotId": "P30542",
        "chemblId": "CHEMBL226",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4563,
        "knownActives": "0 /  1"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.1223,
        "knownActives": "0 /  76"
      },
      {
        "target": "Histone-lysine N-methyltransferase, H3 lysine-79 specific",
        "commonName": "DOT1L",
        "uniprotId": "Q8TEK3",
        "chemblId": "CHEMBL1795117",
        "targetClass": "Writer",
        "probability": 0.1093,
        "knownActives": "0 /  1"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.1093,
        "knownActives": "0 /  30"
      },
      {
        "target": "Tyrosyl-DNA phosphodiesterase 1",
        "commonName": "TDP1",
        "uniprotId": "Q9NUW8",
        "chemblId": "CHEMBL1075138",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0522,
        "knownActives": "0 /  2"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0461,
        "knownActives": "0 /  3"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.0405,
        "knownActives": "0 /  16"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.0374,
        "knownActives": "0 /  20"
      },
      {
        "target": "Synaptojanin-2",
        "commonName": "SYNJ2",
        "uniprotId": "O15056",
        "chemblId": "CHEMBL4523129",
        "targetClass": "Hydrolase",
        "probability": 0.0367,
        "knownActives": "0 /  18"
      },
      {
        "target": "Solute carrier organic anion transporter family member 2B1",
        "commonName": "SLCO2B1",
        "uniprotId": "O94956",
        "chemblId": "CHEMBL1743124",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0361,
        "knownActives": "0 /  1"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.0349,
        "knownActives": "0 /  91"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.0342,
        "knownActives": "0 /  7"
      },
      {
        "target": "3-oxo-5-alpha-steroid 4-dehydrogenase 1",
        "commonName": "SRD5A1",
        "uniprotId": "P18405",
        "chemblId": "CHEMBL1787",
        "targetClass": "Oxidoreductase",
        "probability": 0.0274,
        "knownActives": "0 /  1"
      },
      {
        "target": "Heparanase",
        "commonName": "HPSE",
        "uniprotId": "Q9Y251",
        "chemblId": "CHEMBL3921",
        "targetClass": "Hydrolase",
        "probability": 0.0259,
        "knownActives": "0 /  3"
      },
      {
        "target": "Hypoxia-inducible factor 1-alpha",
        "commonName": "HIF1A",
        "uniprotId": "Q16665",
        "chemblId": "CHEMBL4261",
        "targetClass": "Transcription factor",
        "probability": 0.0244,
        "knownActives": "0 /  12"
      },
      {
        "target": "Sterol O-acyltransferase 1",
        "commonName": "SOAT1",
        "uniprotId": "P35610",
        "chemblId": "CHEMBL2782",
        "targetClass": "Transferase",
        "probability": 0.0244,
        "knownActives": "0 /  2"
      },
      {
        "target": "Sterol O-acyltransferase 2",
        "commonName": "SOAT2",
        "uniprotId": "O75908",
        "chemblId": "CHEMBL4465",
        "targetClass": "Transferase",
        "probability": 0.0244,
        "knownActives": "0 /  2"
      },
      {
        "target": "Sodium/glucose cotransporter 2",
        "commonName": "SLC5A2",
        "uniprotId": "P31639",
        "chemblId": "CHEMBL3884",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0232,
        "knownActives": "0 /  837"
      },
      {
        "target": "Sodium/glucose cotransporter 1",
        "commonName": "SLC5A1",
        "uniprotId": "P13866",
        "chemblId": "CHEMBL4979",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0232,
        "knownActives": "0 /  443"
      },
      {
        "target": "Bifunctional epoxide hydrolase 2",
        "commonName": "EPHX2",
        "uniprotId": "P34913",
        "chemblId": "CHEMBL2409",
        "targetClass": "Protease",
        "probability": 0.0219,
        "knownActives": "0 /  13"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 1",
        "commonName": "TRPV1",
        "uniprotId": "Q8NER1",
        "chemblId": "CHEMBL4794",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.021,
        "knownActives": "0 /  27"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 2",
        "commonName": "PTPN2",
        "uniprotId": "P17706",
        "chemblId": "CHEMBL3807",
        "targetClass": "Phosphatase",
        "probability": 0.02,
        "knownActives": "0 /  3"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.0193,
        "knownActives": "0 /  70"
      },
      {
        "target": "DNA topoisomerase 2-beta",
        "commonName": "TOP2B",
        "uniprotId": "Q02880",
        "chemblId": "CHEMBL3396",
        "targetClass": "Isomerase",
        "probability": 0.0192,
        "knownActives": "0 /  2"
      },
      {
        "target": "DNA topoisomerase 2-alpha",
        "commonName": "TOP2A",
        "uniprotId": "P11388",
        "chemblId": "CHEMBL1806",
        "targetClass": "Isomerase",
        "probability": 0.0192,
        "knownActives": "0 /  8"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 8",
        "commonName": "TRPM8",
        "uniprotId": "Q7Z2W7",
        "chemblId": "CHEMBL1075319",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.019,
        "knownActives": "0 /  20"
      },
      {
        "target": "Mitogen-activated protein kinase 9",
        "commonName": "MAPK9",
        "uniprotId": "P45984",
        "chemblId": "CHEMBL4179",
        "targetClass": "Kinase",
        "probability": 0.0163,
        "knownActives": "0 /  3"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.0148,
        "knownActives": "0 /  126"
      },
      {
        "target": "Mitochondrial complex I (NADH dehydrogenase)",
        "commonName": "N/A",
        "uniprotId": "P03923&O95299&O00217&P03901&P56556&P03886&O95139&O00483&Q86Y39&P17568&P03891&O75306&P03915&P51970&O43674&P03905&P03897&O14561&O15239&O43181&O43676&O43677&O43678&O43920&O75251&O75380&O75438&O75489&O95167&O95168&O95169&O95178&O95182&O95298&O96000&P19404&P28331&P49821&P56181&Q16718&Q16795&Q8N183&Q9BU61&Q9NRX3&Q9NX14&Q9P032&Q9P0J0&Q9UI09&Q9Y375&Q9Y6M9",
        "chemblId": "CHEMBL2363065",
        "targetClass": "Oxidoreductase",
        "probability": 0.0146,
        "knownActives": "0 /  1"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.0139,
        "knownActives": "0 /  10"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.0125,
        "knownActives": "0 /  47"
      },
      {
        "target": "Platelet-activating factor receptor",
        "commonName": "PTAFR",
        "uniprotId": "P25105",
        "chemblId": "CHEMBL250",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0116,
        "knownActives": "0 /  69"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.0112,
        "knownActives": "0 /  10"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.0106,
        "knownActives": "0 /  3"
      },
      {
        "target": "Troponin, cardiac muscle",
        "commonName": "N/A",
        "uniprotId": "P63316&P19429&P45379",
        "chemblId": "CHEMBL2095202",
        "targetClass": "Unclassified protein",
        "probability": 0.0102,
        "knownActives": "0 /  2"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.01,
        "knownActives": "0 /  26"
      },
      {
        "target": "Eukaryotic initiation factor 4A-I",
        "commonName": "EIF4A1",
        "uniprotId": "P60842",
        "chemblId": "CHEMBL2052028",
        "targetClass": "Hydrolase",
        "probability": 0.0098,
        "knownActives": "0 /  34"
      },
      {
        "target": "MUS81-ECE1",
        "commonName": "N/A",
        "uniprotId": "P42892&Q96NY9",
        "chemblId": "CHEMBL5465380",
        "targetClass": "Protease",
        "probability": 0.0085,
        "knownActives": "0 /  5"
      },
      {
        "target": "D(1A) dopamine receptor",
        "commonName": "DRD1",
        "uniprotId": "P21728",
        "chemblId": "CHEMBL2056",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0082,
        "knownActives": "0 /  27"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0082,
        "knownActives": "0 /  75"
      },
      {
        "target": "Stimulator of interferon genes protein",
        "commonName": "STING1",
        "uniprotId": "Q86WV6",
        "chemblId": "CHEMBL4523377",
        "targetClass": "Unclassified protein",
        "probability": 0.0079,
        "knownActives": "0 /  2"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.0076,
        "knownActives": "0 /  164"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 0.0076,
        "knownActives": "0 /  9"
      },
      {
        "target": "D(4) dopamine receptor",
        "commonName": "DRD4",
        "uniprotId": "P21917",
        "chemblId": "CHEMBL219",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0066,
        "knownActives": "0 /  22"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX12",
        "commonName": "ALOX12",
        "uniprotId": "P18054",
        "chemblId": "CHEMBL3687",
        "targetClass": "Enzyme",
        "probability": 0.0065,
        "knownActives": "0 /  6"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.0065,
        "knownActives": "0 /  13"
      },
      {
        "target": "Tissue factor",
        "commonName": "F3",
        "uniprotId": "P13726",
        "chemblId": "CHEMBL4081",
        "targetClass": "Surface antigen",
        "probability": 0.0062,
        "knownActives": "0 /  5"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0055,
        "knownActives": "0 /  366"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.0051,
        "knownActives": "0 /  51"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.0051,
        "knownActives": "0 /  10"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.0051,
        "knownActives": "0 /  19"
      },
      {
        "target": "Protein kinase C eta type",
        "commonName": "PRKCH",
        "uniprotId": "P24723",
        "chemblId": "CHEMBL3616",
        "targetClass": "Kinase",
        "probability": 0.0051,
        "knownActives": "0 /  15"
      },
      {
        "target": "Protein kinase C alpha type",
        "commonName": "PRKCA",
        "uniprotId": "P17252",
        "chemblId": "CHEMBL299",
        "targetClass": "Kinase",
        "probability": 0.0051,
        "knownActives": "0 /  44"
      },
      {
        "target": "Protein kinase C beta type",
        "commonName": "PRKCB",
        "uniprotId": "P05771",
        "chemblId": "CHEMBL3045",
        "targetClass": "Kinase",
        "probability": 0.0051,
        "knownActives": "0 /  19"
      },
      {
        "target": "Protein kinase C gamma type",
        "commonName": "PRKCG",
        "uniprotId": "P05129",
        "chemblId": "CHEMBL2938",
        "targetClass": "Kinase",
        "probability": 0.0051,
        "knownActives": "0 /  19"
      },
      {
        "target": "Cytochrome P450 3A4",
        "commonName": "CYP3A4",
        "uniprotId": "P08684",
        "chemblId": "CHEMBL340",
        "targetClass": "Cytochrome P450",
        "probability": 0.0051,
        "knownActives": "0 /  10"
      },
      {
        "target": "Solute carrier family 28 member 3",
        "commonName": "SLC28A3",
        "uniprotId": "Q9HAS3",
        "chemblId": "CHEMBL5707",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0049,
        "knownActives": "0 /  1"
      },
      {
        "target": "Anthrax toxin receptor 2",
        "commonName": "ANTXR2",
        "uniprotId": "P58335",
        "chemblId": "CHEMBL4296326",
        "targetClass": "Unclassified protein",
        "probability": 0.0048,
        "knownActives": "0 /  5"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.0048,
        "knownActives": "0 /  25"
      },
      {
        "target": "Alpha-amylase 1A",
        "commonName": "AMY1A",
        "uniprotId": "P0DUB6",
        "chemblId": "CHEMBL2478",
        "targetClass": "Hydrolase",
        "probability": 0.0048,
        "knownActives": "0 /  1"
      },
      {
        "target": "Plasminogen activator inhibitor 1",
        "commonName": "SERPINE1",
        "uniprotId": "P05121",
        "chemblId": "CHEMBL3475",
        "targetClass": "Secreted protein",
        "probability": 0.0048,
        "knownActives": "0 /  13"
      },
      {
        "target": "Coagulation factor X",
        "commonName": "F10",
        "uniprotId": "P00742",
        "chemblId": "CHEMBL244",
        "targetClass": "Protease",
        "probability": 0.0048,
        "knownActives": "0 /  12"
      },
      {
        "target": "Peptidyl-prolyl cis-trans isomerase FKBP5",
        "commonName": "FKBP5",
        "uniprotId": "Q13451",
        "chemblId": "CHEMBL2052031",
        "targetClass": "Enzyme",
        "probability": 0.0047,
        "knownActives": "0 /  104"
      },
      {
        "target": "Peptidyl-prolyl cis-trans isomerase FKBP4",
        "commonName": "FKBP4",
        "uniprotId": "Q02790",
        "chemblId": "CHEMBL4050",
        "targetClass": "Isomerase",
        "probability": 0.0047,
        "knownActives": "0 /  36"
      },
      {
        "target": "Peptidyl-prolyl cis-trans isomerase FKBP1B",
        "commonName": "FKBP1B",
        "uniprotId": "P68106",
        "chemblId": "CHEMBL2430",
        "targetClass": "Isomerase",
        "probability": 0.0047,
        "knownActives": "0 /  35"
      },
      {
        "target": "Peptidyl-prolyl cis-trans isomerase FKBP1A",
        "commonName": "FKBP1A",
        "uniprotId": "P62942",
        "chemblId": "CHEMBL1902",
        "targetClass": "Isomerase",
        "probability": 0.0047,
        "knownActives": "0 /  132"
      },
      {
        "target": "High affinity cGMP-specific 3',5'-cyclic phosphodiesterase 9A",
        "commonName": "PDE9A",
        "uniprotId": "O76083",
        "chemblId": "CHEMBL3535",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0047,
        "knownActives": "0 /  6"
      },
      {
        "target": "C-C chemokine receptor type 3",
        "commonName": "CCR3",
        "uniprotId": "P51677",
        "chemblId": "CHEMBL3473",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0046,
        "knownActives": "0 /  3"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.0046,
        "knownActives": "0 /  249"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 0.0044,
        "knownActives": "0 /  39"
      },
      {
        "target": "Ileal sodium/bile acid cotransporter",
        "commonName": "SLC10A2",
        "uniprotId": "Q12908",
        "chemblId": "CHEMBL2778",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0044,
        "knownActives": "0 /  2"
      },
      {
        "target": "Monoglyceride lipase",
        "commonName": "MGLL",
        "uniprotId": "Q99685",
        "chemblId": "CHEMBL4191",
        "targetClass": "Hydrolase",
        "probability": 0.0042,
        "knownActives": "0 /  8"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.0041,
        "knownActives": "0 /  117"
      },
      {
        "target": "Cytochrome P450 2C19",
        "commonName": "CYP2C19",
        "uniprotId": "P33261",
        "chemblId": "CHEMBL3622",
        "targetClass": "Cytochrome P450",
        "probability": 0.0041,
        "knownActives": "0 /  3"
      },
      {
        "target": "Cytochrome P450 2C9",
        "commonName": "CYP2C9",
        "uniprotId": "P11712",
        "chemblId": "CHEMBL3397",
        "targetClass": "Cytochrome P450",
        "probability": 0.0041,
        "knownActives": "0 /  3"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.0041,
        "knownActives": "0 /  38"
      },
      {
        "target": "Neutrophil elastase",
        "commonName": "ELANE",
        "uniprotId": "P08246",
        "chemblId": "CHEMBL248",
        "targetClass": "Protease",
        "probability": 0.004,
        "knownActives": "0 /  12"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0037,
        "knownActives": "0 /  563"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0037,
        "knownActives": "0 /  519"
      },
      {
        "target": "Cannabinoid receptor 1",
        "commonName": "CNR1",
        "uniprotId": "P21554",
        "chemblId": "CHEMBL218",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0036,
        "knownActives": "0 /  257"
      },
      {
        "target": "Endothelin-1 receptor",
        "commonName": "EDNRA",
        "uniprotId": "P25101",
        "chemblId": "CHEMBL252",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0033,
        "knownActives": "0 /  131"
      },
      {
        "target": "Endothelin receptor type B",
        "commonName": "EDNRB",
        "uniprotId": "P24530",
        "chemblId": "CHEMBL1785",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0033,
        "knownActives": "0 /  75"
      },
      {
        "target": "5'-AMP-activated protein kinase catalytic subunit alpha-2",
        "commonName": "PRKAA2",
        "uniprotId": "P54646",
        "chemblId": "CHEMBL2116",
        "targetClass": "Kinase",
        "probability": 0.0032,
        "knownActives": "0 /  1"
      },
      {
        "target": "Placenta growth factor",
        "commonName": "PGF",
        "uniprotId": "P49763",
        "chemblId": "CHEMBL1697671",
        "targetClass": "Secreted protein",
        "probability": 0.0032,
        "knownActives": "0 /  3"
      },
      {
        "target": "Vascular endothelial growth factor A, long form",
        "commonName": "VEGFA",
        "uniprotId": "P15692",
        "chemblId": "CHEMBL1783",
        "targetClass": "Secreted protein",
        "probability": 0.0032,
        "knownActives": "0 /  4"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.0032,
        "knownActives": "0 /  66"
      },
      {
        "target": "Proto-oncogene tyrosine-protein kinase Src",
        "commonName": "SRC",
        "uniprotId": "P12931",
        "chemblId": "CHEMBL267",
        "targetClass": "Kinase",
        "probability": 0.0032,
        "knownActives": "0 /  6"
      },
      {
        "target": "Fibroblast growth factor receptor 1",
        "commonName": "FGFR1",
        "uniprotId": "P11362",
        "chemblId": "CHEMBL3650",
        "targetClass": "Kinase",
        "probability": 0.0032,
        "knownActives": "0 /  4"
      },
      {
        "target": "Mast/stem cell growth factor receptor Kit",
        "commonName": "KIT",
        "uniprotId": "P10721",
        "chemblId": "CHEMBL1936",
        "targetClass": "Kinase",
        "probability": 0.0032,
        "knownActives": "0 /  10"
      },
      {
        "target": "Hepatocyte growth factor receptor",
        "commonName": "MET",
        "uniprotId": "P08581",
        "chemblId": "CHEMBL3717",
        "targetClass": "Kinase",
        "probability": 0.0032,
        "knownActives": "0 /  14"
      },
      {
        "target": "Free fatty acid receptor 1",
        "commonName": "FFAR1",
        "uniprotId": "O14842",
        "chemblId": "CHEMBL4422",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0031,
        "knownActives": "0 /  190"
      },
      {
        "target": "Oxysterol-binding protein 1",
        "commonName": "OSBP",
        "uniprotId": "P22059",
        "chemblId": "CHEMBL4523203",
        "targetClass": "Unclassified protein",
        "probability": 0.003,
        "knownActives": "0 /  16"
      },
      {
        "target": "Heat shock protein HSP 90-alpha",
        "commonName": "HSP90AA1",
        "uniprotId": "P07900",
        "chemblId": "CHEMBL3880",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0029,
        "knownActives": "0 /  17"
      },
      {
        "target": "Interleukin-6",
        "commonName": "IL6",
        "uniprotId": "P05231",
        "chemblId": "CHEMBL1795129",
        "targetClass": "Secreted protein",
        "probability": 0.0028,
        "knownActives": "0 /  1"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 0.0028,
        "knownActives": "0 /  2"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.0028,
        "knownActives": "0 /  64"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.0028,
        "knownActives": "0 /  17"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.0028,
        "knownActives": "0 /  58"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.0028,
        "knownActives": "0 /  57"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0027,
        "knownActives": "0 /  55"
      }
    ]
  },
  {
    "id": "magnoflorine",
    "name": "Magnoflorine",
    "cid": 73337,
    "smiles": "CN1CCC2=CC(=C(C3=C2C1CC4=CC(=C(C=C4)O)OC)OC)O",
    "category": "Aporphine Alkaloid",
    "topTarget": "Neuronal acetylcholine receptor; alpha4/beta2 (N/A)",
    "topTargetUniprot": "P17787&P43681",
    "targetClasses": [
      {
        "label": "Family A G protein-coupled receptor",
        "count": 36,
        "percentage": 36.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 8,
        "percentage": 8.0,
        "color": "#10B981"
      },
      {
        "label": "Electrochemical transporter",
        "count": 5,
        "percentage": 5.0,
        "color": "#F59E0B"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 4,
        "percentage": 4.0,
        "color": "#EF4444"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 4,
        "percentage": 4.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Hydrolase",
        "count": 4,
        "percentage": 4.0,
        "color": "#EC4899"
      },
      {
        "label": "Eraser",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Unclassified protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#6366F1"
      },
      {
        "label": "Kinase",
        "count": 3,
        "percentage": 3.0,
        "color": "#14B8A6"
      },
      {
        "label": "Membrane receptor",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Primary active transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Protease",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Other ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Phosphodiesterase",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Writer",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Nuclear receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Lyase",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Other nuclear protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Phosphatase",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Surface antigen",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Transferase",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Structural protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Transcription factor",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#A855F7"
      }
    ],
    "targets": [
      {
        "target": "Neuronal acetylcholine receptor; alpha4/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P43681",
        "chemblId": "CHEMBL1907589",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.9836,
        "knownActives": "34 /  21"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9737,
        "knownActives": "210 /  451"
      },
      {
        "target": "5-hydroxytryptamine receptor 7",
        "commonName": "HTR7",
        "uniprotId": "P34969",
        "chemblId": "CHEMBL3155",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9684,
        "knownActives": "112 /  232"
      },
      {
        "target": "D(3) dopamine receptor",
        "commonName": "DRD3",
        "uniprotId": "P35462",
        "chemblId": "CHEMBL234",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.968,
        "knownActives": "317 /  471"
      },
      {
        "target": "D(1A) dopamine receptor",
        "commonName": "DRD1",
        "uniprotId": "P21728",
        "chemblId": "CHEMBL2056",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.968,
        "knownActives": "359 /  392"
      },
      {
        "target": "Tyrosyl-DNA phosphodiesterase 2",
        "commonName": "TDP2",
        "uniprotId": "O95551",
        "chemblId": "CHEMBL2169736",
        "targetClass": "Phosphodiesterase",
        "probability": 0.9668,
        "knownActives": "33 /  3"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9633,
        "knownActives": "476 /  719"
      },
      {
        "target": "5-hydroxytryptamine receptor 2B",
        "commonName": "HTR2B",
        "uniprotId": "P41595",
        "chemblId": "CHEMBL1833",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9626,
        "knownActives": "94 /  208"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9553,
        "knownActives": "81 /  215"
      },
      {
        "target": "5-hydroxytryptamine receptor 6",
        "commonName": "HTR6",
        "uniprotId": "P50406",
        "chemblId": "CHEMBL3371",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9385,
        "knownActives": "77 /  50"
      },
      {
        "target": "5-hydroxytryptamine receptor 2A",
        "commonName": "HTR2A",
        "uniprotId": "P28223",
        "chemblId": "CHEMBL224",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9385,
        "knownActives": "168 /  361"
      },
      {
        "target": "5-hydroxytryptamine receptor 5A",
        "commonName": "HTR5A",
        "uniprotId": "P47898",
        "chemblId": "CHEMBL3426",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9222,
        "knownActives": "9 /  66"
      },
      {
        "target": "E3 ubiquitin-protein ligase Mdm2",
        "commonName": "MDM2",
        "uniprotId": "Q00987",
        "chemblId": "CHEMBL5023",
        "targetClass": "Other nuclear protein",
        "probability": 0.8987,
        "knownActives": "32 /  113"
      },
      {
        "target": "Sclerostin",
        "commonName": "SOST",
        "uniprotId": "Q9BQB4",
        "chemblId": "CHEMBL3580487",
        "targetClass": "Unclassified protein",
        "probability": 0.8986,
        "knownActives": "1 /  5"
      },
      {
        "target": "Alpha-2C adrenergic receptor",
        "commonName": "ADRA2C",
        "uniprotId": "P18825",
        "chemblId": "CHEMBL1916",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.8933,
        "knownActives": "27 /  39"
      },
      {
        "target": "D(4) dopamine receptor",
        "commonName": "DRD4",
        "uniprotId": "P21917",
        "chemblId": "CHEMBL219",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.872,
        "knownActives": "154 /  174"
      },
      {
        "target": "Alpha-1D adrenergic receptor",
        "commonName": "ADRA1D",
        "uniprotId": "P25100",
        "chemblId": "CHEMBL223",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.8713,
        "knownActives": "24 /  22"
      },
      {
        "target": "Alpha-2B adrenergic receptor",
        "commonName": "ADRA2B",
        "uniprotId": "P18089",
        "chemblId": "CHEMBL1942",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.8713,
        "knownActives": "24 /  35"
      },
      {
        "target": "Voltage-gated inwardly rectifying potassium channel KCNH2",
        "commonName": "KCNH2",
        "uniprotId": "Q12809",
        "chemblId": "CHEMBL240",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.8681,
        "knownActives": "102 /  286"
      },
      {
        "target": "Disabled homolog 2-interacting protein",
        "commonName": "DAB2IP",
        "uniprotId": "Q5VWQ8",
        "chemblId": "CHEMBL4523330",
        "targetClass": "Unclassified protein",
        "probability": 0.8551,
        "knownActives": "2 /  1"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.8464,
        "knownActives": "829 /  819"
      },
      {
        "target": "5-hydroxytryptamine receptor 1D",
        "commonName": "HTR1D",
        "uniprotId": "P28221",
        "chemblId": "CHEMBL1983",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.8341,
        "knownActives": "25 /  39"
      },
      {
        "target": "Sodium-dependent serotonin transporter",
        "commonName": "SLC6A4",
        "uniprotId": "P31645",
        "chemblId": "CHEMBL228",
        "targetClass": "Electrochemical transporter",
        "probability": 0.8333,
        "knownActives": "91 /  386"
      },
      {
        "target": "Alpha-2A adrenergic receptor",
        "commonName": "ADRA2A",
        "uniprotId": "P08913",
        "chemblId": "CHEMBL1867",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.8333,
        "knownActives": "56 /  43"
      },
      {
        "target": "D(1B) dopamine receptor",
        "commonName": "DRD5",
        "uniprotId": "P21918",
        "chemblId": "CHEMBL1850",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.8071,
        "knownActives": "91 /  78"
      },
      {
        "target": "Patatin-like phospholipase domain-containing protein 2",
        "commonName": "PNPLA2",
        "uniprotId": "Q96AD5",
        "chemblId": "CHEMBL3822353",
        "targetClass": "Hydrolase",
        "probability": 0.806,
        "knownActives": "0 /  1"
      },
      {
        "target": "Protein tyrosine phosphatase receptor type C-associated protein",
        "commonName": "PTPRCAP",
        "uniprotId": "Q14761",
        "chemblId": "CHEMBL4806",
        "targetClass": "Phosphatase",
        "probability": 0.7986,
        "knownActives": "2 /  1"
      },
      {
        "target": "5-hydroxytryptamine receptor 1B",
        "commonName": "HTR1B",
        "uniprotId": "P28222",
        "chemblId": "CHEMBL1898",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.798,
        "knownActives": "17 /  29"
      },
      {
        "target": "Tyrosine 3-monooxygenase",
        "commonName": "TH",
        "uniprotId": "P07101",
        "chemblId": "CHEMBL1969",
        "targetClass": "Oxidoreductase",
        "probability": 0.7798,
        "knownActives": "3 /  2"
      },
      {
        "target": "Alpha-1B adrenergic receptor",
        "commonName": "ADRA1B",
        "uniprotId": "P35368",
        "chemblId": "CHEMBL232",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.7668,
        "knownActives": "22 /  31"
      },
      {
        "target": "Alpha-1A adrenergic receptor",
        "commonName": "ADRA1A",
        "uniprotId": "P35348",
        "chemblId": "CHEMBL229",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.7627,
        "knownActives": "30 /  27"
      },
      {
        "target": "Beta-1 adrenergic receptor",
        "commonName": "ADRB1",
        "uniprotId": "P08588",
        "chemblId": "CHEMBL213",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.7521,
        "knownActives": "117 /  34"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.7209,
        "knownActives": "130 /  13"
      },
      {
        "target": "Histamine H2 receptor",
        "commonName": "HRH2",
        "uniprotId": "P25021",
        "chemblId": "CHEMBL1941",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.5789,
        "knownActives": "0 /  15"
      },
      {
        "target": "Beta-2 adrenergic receptor",
        "commonName": "ADRB2",
        "uniprotId": "P07550",
        "chemblId": "CHEMBL210",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4528,
        "knownActives": "198 /  82"
      },
      {
        "target": "Beta-3 adrenergic receptor",
        "commonName": "ADRB3",
        "uniprotId": "P13945",
        "chemblId": "CHEMBL246",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4302,
        "knownActives": "111 /  50"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX12",
        "commonName": "ALOX12",
        "uniprotId": "P18054",
        "chemblId": "CHEMBL3687",
        "targetClass": "Enzyme",
        "probability": 0.3783,
        "knownActives": "96 /  1"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.3783,
        "knownActives": "104 /  1"
      },
      {
        "target": "Translocator protein",
        "commonName": "TSPO",
        "uniprotId": "P30536",
        "chemblId": "CHEMBL5742",
        "targetClass": "Membrane receptor",
        "probability": 0.3348,
        "knownActives": "2 /  2"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.3297,
        "knownActives": "98 /  359"
      },
      {
        "target": "Tissue factor",
        "commonName": "F3",
        "uniprotId": "P13726",
        "chemblId": "CHEMBL4081",
        "targetClass": "Surface antigen",
        "probability": 0.1662,
        "knownActives": "37 /  29"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.1547,
        "knownActives": "118 /  209"
      },
      {
        "target": "Dihydrofolate reductase",
        "commonName": "DHFR",
        "uniprotId": "P00374",
        "chemblId": "CHEMBL202",
        "targetClass": "Oxidoreductase",
        "probability": 0.1193,
        "knownActives": "25 /  8"
      },
      {
        "target": "Thromboxane A2 receptor",
        "commonName": "TBXA2R",
        "uniprotId": "P21731",
        "chemblId": "CHEMBL2069",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1152,
        "knownActives": "21 /  10"
      },
      {
        "target": "Sigma non-opioid intracellular receptor 1",
        "commonName": "SIGMAR1",
        "uniprotId": "Q99720",
        "chemblId": "CHEMBL287",
        "targetClass": "Membrane receptor",
        "probability": 0.0999,
        "knownActives": "169 /  295"
      },
      {
        "target": "Poly [ADP-ribose] polymerase 1",
        "commonName": "PARP1",
        "uniprotId": "P09874",
        "chemblId": "CHEMBL3105",
        "targetClass": "Transferase",
        "probability": 0.0926,
        "knownActives": "210 /  54"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.0825,
        "knownActives": "227 /  321"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.0742,
        "knownActives": "182 /  153"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.0681,
        "knownActives": "273 /  67"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0649,
        "knownActives": "29 /  23"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0526,
        "knownActives": "46 /  174"
      },
      {
        "target": "Histone acetyltransferase p300",
        "commonName": "EP300",
        "uniprotId": "Q09472",
        "chemblId": "CHEMBL3784",
        "targetClass": "Writer",
        "probability": 0.0522,
        "knownActives": "36 /  14"
      },
      {
        "target": "Programmed cell death 1 ligand 1",
        "commonName": "CD274",
        "uniprotId": "Q9NZQ7",
        "chemblId": "CHEMBL3580522",
        "targetClass": "Unclassified protein",
        "probability": 0.0479,
        "knownActives": "4 /  279"
      },
      {
        "target": "Tubulin beta-1 chain",
        "commonName": "TUBB1",
        "uniprotId": "Q9H4B7",
        "chemblId": "CHEMBL1915",
        "targetClass": "Structural protein",
        "probability": 0.0409,
        "knownActives": "19 /  5"
      },
      {
        "target": "Multidrug resistance-associated protein 1",
        "commonName": "ABCC1",
        "uniprotId": "P33527",
        "chemblId": "CHEMBL3004",
        "targetClass": "Primary active transporter",
        "probability": 0.0397,
        "knownActives": "13 /  13"
      },
      {
        "target": "Dipeptidyl peptidase 4",
        "commonName": "DPP4",
        "uniprotId": "P27487",
        "chemblId": "CHEMBL284",
        "targetClass": "Protease",
        "probability": 0.0377,
        "knownActives": "49 /  73"
      },
      {
        "target": "Muscarinic acetylcholine receptor M3",
        "commonName": "CHRM3",
        "uniprotId": "P20309",
        "chemblId": "CHEMBL245",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0377,
        "knownActives": "18 /  14"
      },
      {
        "target": "Melatonin receptor type 1B",
        "commonName": "MTNR1B",
        "uniprotId": "P49286",
        "chemblId": "CHEMBL1946",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0339,
        "knownActives": "13 /  153"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.0316,
        "knownActives": "201 /  42"
      },
      {
        "target": "Small conductance calcium-activated potassium channel protein 3",
        "commonName": "KCNN3",
        "uniprotId": "Q9UGI6",
        "chemblId": "CHEMBL3381",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0292,
        "knownActives": "1 /  7"
      },
      {
        "target": "Small conductance calcium-activated potassium channel protein 2",
        "commonName": "KCNN2",
        "uniprotId": "Q9H2S1",
        "chemblId": "CHEMBL4469",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0292,
        "knownActives": "1 /  7"
      },
      {
        "target": "Small conductance calcium-activated potassium channel protein 1",
        "commonName": "KCNN1",
        "uniprotId": "Q92952",
        "chemblId": "CHEMBL2369",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0292,
        "knownActives": "1 /  1"
      },
      {
        "target": "Muscarinic acetylcholine receptor M4",
        "commonName": "CHRM4",
        "uniprotId": "P08173",
        "chemblId": "CHEMBL1821",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0286,
        "knownActives": "8 /  24"
      },
      {
        "target": "Cyclin-dependent kinase 1/cyclin B",
        "commonName": "N/A",
        "uniprotId": "P06493&P14635&Q8WWL7&O95067",
        "chemblId": "CHEMBL2094127",
        "targetClass": "Kinase",
        "probability": 0.0264,
        "knownActives": "77 /  1"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 0.0264,
        "knownActives": "195 /  2"
      },
      {
        "target": "Orexin/Hypocretin receptor type 1",
        "commonName": "HCRTR1",
        "uniprotId": "O43613",
        "chemblId": "CHEMBL5113",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0255,
        "knownActives": "9 /  62"
      },
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0244,
        "knownActives": "14 /  131"
      },
      {
        "target": "Sigma intracellular receptor 2",
        "commonName": "TMEM97",
        "uniprotId": "Q5BJF2",
        "chemblId": "CHEMBL4105907",
        "targetClass": "Membrane receptor",
        "probability": 0.0236,
        "knownActives": "44 /  116"
      },
      {
        "target": "Muscarinic acetylcholine receptor M2",
        "commonName": "CHRM2",
        "uniprotId": "P08172",
        "chemblId": "CHEMBL211",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0236,
        "knownActives": "8 /  31"
      },
      {
        "target": "Kallikrein-7",
        "commonName": "KLK7",
        "uniprotId": "P49862",
        "chemblId": "CHEMBL2443",
        "targetClass": "Protease",
        "probability": 0.0228,
        "knownActives": "4 /  1"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.0195,
        "knownActives": "482 /  22"
      },
      {
        "target": "Protein arginine N-methyltransferase 5",
        "commonName": "PRMT5",
        "uniprotId": "O14744",
        "chemblId": "CHEMBL1795116",
        "targetClass": "Writer",
        "probability": 0.0181,
        "knownActives": "15 /  297"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0177,
        "knownActives": "58 /  202"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.017,
        "knownActives": "1119 /  113"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.017,
        "knownActives": "1448 /  466"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0169,
        "knownActives": "37 /  4"
      },
      {
        "target": "7-dehydrocholesterol reductase",
        "commonName": "DHCR7",
        "uniprotId": "Q9UBM7",
        "chemblId": "CHEMBL2169735",
        "targetClass": "Oxidoreductase",
        "probability": 0.0167,
        "knownActives": "3 /  3"
      },
      {
        "target": "DNA polymerase beta",
        "commonName": "POLB",
        "uniprotId": "P06746",
        "chemblId": "CHEMBL2392",
        "targetClass": "Enzyme",
        "probability": 0.0159,
        "knownActives": "1 /  1"
      },
      {
        "target": "Orexin receptor type 2",
        "commonName": "HCRTR2",
        "uniprotId": "O43614",
        "chemblId": "CHEMBL4792",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0149,
        "knownActives": "5 /  56"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.0144,
        "knownActives": "140 /  36"
      },
      {
        "target": "Multidrug and toxin extrusion protein 1",
        "commonName": "SLC47A1",
        "uniprotId": "Q96FL8",
        "chemblId": "CHEMBL1743126",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0143,
        "knownActives": "3 /  1"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0141,
        "knownActives": "742 /  853"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0141,
        "knownActives": "894 /  757"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.0139,
        "knownActives": "6 /  4"
      },
      {
        "target": "Synaptic vesicular amine transporter",
        "commonName": "SLC18A2",
        "uniprotId": "Q05940",
        "chemblId": "CHEMBL1893",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0137,
        "knownActives": "2 /  69"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0136,
        "knownActives": "88 /  40"
      },
      {
        "target": "Cholesteryl ester transfer protein",
        "commonName": "CETP",
        "uniprotId": "P11597",
        "chemblId": "CHEMBL3572",
        "targetClass": "Other ion channel",
        "probability": 0.0129,
        "knownActives": "8 /  186"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.0124,
        "knownActives": "110 /  89"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.0121,
        "knownActives": "504 /  84"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.0111,
        "knownActives": "431 /  68"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.011,
        "knownActives": "66 /  12"
      },
      {
        "target": "Prostaglandin D2 receptor 2",
        "commonName": "PTGDR2",
        "uniprotId": "Q9Y5Y4",
        "chemblId": "CHEMBL5071",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0106,
        "knownActives": "9 /  508"
      },
      {
        "target": "Serine hydrolase RBBP9",
        "commonName": "RBBP9",
        "uniprotId": "O75884",
        "chemblId": "CHEMBL1075121",
        "targetClass": "Hydrolase",
        "probability": 0.0103,
        "knownActives": "0 /  1"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0101,
        "knownActives": "213 /  17"
      },
      {
        "target": "Glutamate receptor ionotropic, NMDA 2C",
        "commonName": "GRIN2C",
        "uniprotId": "Q14957",
        "chemblId": "CHEMBL4109",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0092,
        "knownActives": "1 /  17"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.009,
        "knownActives": "38 /  28"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.0089,
        "knownActives": "519 /  80"
      },
      {
        "target": "Angiotensin-converting enzyme 2",
        "commonName": "ACE2",
        "uniprotId": "Q9BYF1",
        "chemblId": "CHEMBL3736",
        "targetClass": "Protease",
        "probability": 0.0088,
        "knownActives": "6 /  1"
      },
      {
        "target": "Bcl-2-like protein 1",
        "commonName": "BCL2L1",
        "uniprotId": "Q07817",
        "chemblId": "CHEMBL4625",
        "targetClass": "Other ion channel",
        "probability": 0.0083,
        "knownActives": "70 /  25"
      },
      {
        "target": "Apoptosis regulator Bcl-2",
        "commonName": "BCL2",
        "uniprotId": "P10415",
        "chemblId": "CHEMBL4860",
        "targetClass": "Other ion channel",
        "probability": 0.0083,
        "knownActives": "87 /  166"
      }
    ]
  },
  {
    "id": "nimbin",
    "name": "Nimbin",
    "cid": 102095200,
    "smiles": "CC(=O)OC1C(C2(CC(=O)C3C(C2=C)C4(C(O3)C5=COC=C5)C(C=CC4(C)C(=O)OC)C)C)OC(=O)C1",
    "category": "Limonoid Triterpenoid",
    "topTarget": "Heat shock protein HSP 90-alpha (HSP90AA1)",
    "topTargetUniprot": "P07900",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 19,
        "percentage": 19.0,
        "color": "#3B82F6"
      },
      {
        "label": "Transferase",
        "count": 13,
        "percentage": 13.0,
        "color": "#10B981"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 6,
        "percentage": 6.0,
        "color": "#F59E0B"
      },
      {
        "label": "Protease",
        "count": 6,
        "percentage": 6.0,
        "color": "#EF4444"
      },
      {
        "label": "Phosphatase",
        "count": 5,
        "percentage": 5.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Nuclear receptor",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Enzyme",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Reader",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Primary active transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Other cytosolic protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Oxidoreductase",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Electrochemical transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Hydrolase",
        "count": 3,
        "percentage": 3.0,
        "color": "#3B82F6"
      },
      {
        "label": "Unclassified protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#10B981"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#F59E0B"
      },
      {
        "label": "Secreted protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Transcription factor",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 2,
        "percentage": 2.0,
        "color": "#EC4899"
      },
      {
        "label": "Other ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#06B6D4"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Ligase",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Phosphodiesterase",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Cytochrome P450",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      }
    ],
    "targets": [
      {
        "target": "Heat shock protein HSP 90-alpha",
        "commonName": "HSP90AA1",
        "uniprotId": "P07900",
        "chemblId": "CHEMBL3880",
        "targetClass": "Other cytosolic protein",
        "probability": 0.965,
        "knownActives": "764 /  17"
      },
      {
        "target": "Nitric oxide synthase, inducible",
        "commonName": "NOS2",
        "uniprotId": "P35228",
        "chemblId": "CHEMBL4481",
        "targetClass": "Enzyme",
        "probability": 0.2697,
        "knownActives": "517 /  1"
      },
      {
        "target": "Interleukin-1 beta",
        "commonName": "IL1B",
        "uniprotId": "P01584",
        "chemblId": "CHEMBL1909490",
        "targetClass": "Secreted protein",
        "probability": 0.2697,
        "knownActives": "163 /  3"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.1564,
        "knownActives": "1981 /  10"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0298,
        "knownActives": "2970 /  184"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0298,
        "knownActives": "1661 /  50"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0298,
        "knownActives": "3778 /  67"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.0294,
        "knownActives": "1097 /  48"
      },
      {
        "target": "Macrophage migration inhibitory factor",
        "commonName": "MIF",
        "uniprotId": "P14174",
        "chemblId": "CHEMBL2085",
        "targetClass": "Enzyme",
        "probability": 0.0282,
        "knownActives": "43 /  1"
      },
      {
        "target": "Protein kinase C alpha type",
        "commonName": "PRKCA",
        "uniprotId": "P17252",
        "chemblId": "CHEMBL299",
        "targetClass": "Kinase",
        "probability": 0.0238,
        "knownActives": "799 /  288"
      },
      {
        "target": "Endoplasmic reticulum aminopeptidase 1",
        "commonName": "ERAP1",
        "uniprotId": "Q9NZ08",
        "chemblId": "CHEMBL5939",
        "targetClass": "Protease",
        "probability": 0.0172,
        "knownActives": "83 /  1"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.017,
        "knownActives": "544 /  71"
      },
      {
        "target": "Dual specificity protein phosphatase 3",
        "commonName": "DUSP3",
        "uniprotId": "P51452",
        "chemblId": "CHEMBL2635",
        "targetClass": "Phosphatase",
        "probability": 0.0169,
        "knownActives": "82 /  3"
      },
      {
        "target": "Bromodomain-containing protein 2",
        "commonName": "BRD2",
        "uniprotId": "P25440",
        "chemblId": "CHEMBL1293289",
        "targetClass": "Reader",
        "probability": 0.0165,
        "knownActives": "715 /  1"
      },
      {
        "target": "Bromodomain-containing protein 4",
        "commonName": "BRD4",
        "uniprotId": "O60885",
        "chemblId": "CHEMBL1163125",
        "targetClass": "Reader",
        "probability": 0.0165,
        "knownActives": "6652 /  9"
      },
      {
        "target": "Serine/threonine-protein kinase mTOR",
        "commonName": "MTOR",
        "uniprotId": "P42345",
        "chemblId": "CHEMBL2842",
        "targetClass": "Kinase",
        "probability": 0.0161,
        "knownActives": "3864 /  35"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit alpha isoform",
        "commonName": "PIK3CA",
        "uniprotId": "P42336",
        "chemblId": "CHEMBL4005",
        "targetClass": "Transferase",
        "probability": 0.0161,
        "knownActives": "6027 /  49"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit gamma isoform",
        "commonName": "PIK3CG",
        "uniprotId": "P48736",
        "chemblId": "CHEMBL3267",
        "targetClass": "Transferase",
        "probability": 0.0154,
        "knownActives": "2978 /  3"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit delta isoform",
        "commonName": "PIK3CD",
        "uniprotId": "O00329",
        "chemblId": "CHEMBL3130",
        "targetClass": "Transferase",
        "probability": 0.0154,
        "knownActives": "6142 /  3"
      },
      {
        "target": "Phosphatidylinositol 3-kinase catalytic subunit type 3",
        "commonName": "PIK3C3",
        "uniprotId": "Q8NEB9",
        "chemblId": "CHEMBL1075165",
        "targetClass": "Transferase",
        "probability": 0.0153,
        "knownActives": "617 /  11"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.0151,
        "knownActives": "66 /  3"
      },
      {
        "target": "DNA-dependent protein kinase catalytic subunit",
        "commonName": "PRKDC",
        "uniprotId": "P78527",
        "chemblId": "CHEMBL3142",
        "targetClass": "Kinase",
        "probability": 0.0146,
        "knownActives": "1130 /  2"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.0144,
        "knownActives": "2139 /  15"
      },
      {
        "target": "Kir3.1/Kir3.4",
        "commonName": "N/A",
        "uniprotId": "P48549&P48544",
        "chemblId": "CHEMBL3038488",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0135,
        "knownActives": "200 /  9"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit beta isoform",
        "commonName": "PIK3CB",
        "uniprotId": "P42338",
        "chemblId": "CHEMBL3145",
        "targetClass": "Transferase",
        "probability": 0.0135,
        "knownActives": "2147 /  2"
      },
      {
        "target": "PI3-kinase p110-alpha/p85-alpha",
        "commonName": "N/A",
        "uniprotId": "P27986&P42336",
        "chemblId": "CHEMBL2111367",
        "targetClass": "Transferase",
        "probability": 0.0132,
        "knownActives": "1335 /  5"
      },
      {
        "target": "Myosin light chain kinase, smooth muscle",
        "commonName": "MYLK",
        "uniprotId": "Q15746",
        "chemblId": "CHEMBL2428",
        "targetClass": "Kinase",
        "probability": 0.0126,
        "knownActives": "80 /  1"
      },
      {
        "target": "Bromodomain-containing protein 3",
        "commonName": "BRD3",
        "uniprotId": "Q15059",
        "chemblId": "CHEMBL1795186",
        "targetClass": "Reader",
        "probability": 0.0125,
        "knownActives": "753 /  9"
      },
      {
        "target": "RAC-alpha serine/threonine-protein kinase",
        "commonName": "AKT1",
        "uniprotId": "P31749",
        "chemblId": "CHEMBL4282",
        "targetClass": "Kinase",
        "probability": 0.0123,
        "knownActives": "2797 /  18"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.0119,
        "knownActives": "264 /  62"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.0111,
        "knownActives": "348 /  9"
      },
      {
        "target": "Protein kinase C beta type",
        "commonName": "PRKCB",
        "uniprotId": "P05771",
        "chemblId": "CHEMBL3045",
        "targetClass": "Kinase",
        "probability": 0.0108,
        "knownActives": "411 /  14"
      },
      {
        "target": "Serine/threonine-protein kinase PLK3",
        "commonName": "PLK3",
        "uniprotId": "Q9H4B4",
        "chemblId": "CHEMBL4897",
        "targetClass": "Kinase",
        "probability": 0.0108,
        "knownActives": "149 /  1"
      },
      {
        "target": "Serine/threonine-protein kinase PLK1",
        "commonName": "PLK1",
        "uniprotId": "P53350",
        "chemblId": "CHEMBL3024",
        "targetClass": "Kinase",
        "probability": 0.0108,
        "knownActives": "857 /  1"
      },
      {
        "target": "Solute carrier family 2, facilitated glucose transporter member 1",
        "commonName": "SLC2A1",
        "uniprotId": "P11166",
        "chemblId": "CHEMBL2535",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0107,
        "knownActives": "142 /  4"
      },
      {
        "target": "Bromodomain testis-specific protein",
        "commonName": "BRDT",
        "uniprotId": "Q58F21",
        "chemblId": "CHEMBL1795185",
        "targetClass": "Reader",
        "probability": 0.0102,
        "knownActives": "194 /  1"
      },
      {
        "target": "Phosphatidylinositol 4-kinase beta",
        "commonName": "PI4KB",
        "uniprotId": "Q9UBF8",
        "chemblId": "CHEMBL3268",
        "targetClass": "Transferase",
        "probability": 0.0095,
        "knownActives": "308 /  1"
      },
      {
        "target": "Phosphatidylinositol 4-kinase alpha",
        "commonName": "PI4KA",
        "uniprotId": "P42356",
        "chemblId": "CHEMBL3667",
        "targetClass": "Transferase",
        "probability": 0.0095,
        "knownActives": "78 /  1"
      },
      {
        "target": "Proteasome Macropain subunit MB1",
        "commonName": "PSMB5",
        "uniprotId": "P28074",
        "chemblId": "CHEMBL4662",
        "targetClass": "Protease",
        "probability": 0.0092,
        "knownActives": "594 /  2"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 2",
        "commonName": "ATP2A2",
        "uniprotId": "P16615",
        "chemblId": "CHEMBL3901",
        "targetClass": "Primary active transporter",
        "probability": 0.009,
        "knownActives": "8 /  3"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.0085,
        "knownActives": "3487 /  20"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 1",
        "commonName": "ATP2A1",
        "uniprotId": "O14983",
        "chemblId": "CHEMBL3136",
        "targetClass": "Primary active transporter",
        "probability": 0.0085,
        "knownActives": "5 /  6"
      },
      {
        "target": "Phospholipase A2, membrane associated",
        "commonName": "PLA2G2A",
        "uniprotId": "P14555",
        "chemblId": "CHEMBL3474",
        "targetClass": "Hydrolase",
        "probability": 0.0084,
        "knownActives": "192 /  8"
      },
      {
        "target": "Proteasome component C5",
        "commonName": "PSMB1",
        "uniprotId": "P20618",
        "chemblId": "CHEMBL4208",
        "targetClass": "Protease",
        "probability": 0.0077,
        "knownActives": "73 /  2"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.0076,
        "knownActives": "1337 /  46"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.0074,
        "knownActives": "274 /  2"
      },
      {
        "target": "Protein farnesyltransferase",
        "commonName": "N/A",
        "uniprotId": "P49354&P49356",
        "chemblId": "CHEMBL2094108",
        "targetClass": "Transferase",
        "probability": 0.0072,
        "knownActives": "1349 /  6"
      },
      {
        "target": "Geranylgeranyl transferase type I",
        "commonName": "N/A",
        "uniprotId": "P49354&P53609",
        "chemblId": "CHEMBL2095164",
        "targetClass": "Transferase",
        "probability": 0.007,
        "knownActives": "282 /  1"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.0068,
        "knownActives": "7904 /  4"
      },
      {
        "target": "Serine/threonine-protein kinase SIK3",
        "commonName": "SIK3",
        "uniprotId": "Q9Y2K2",
        "chemblId": "CHEMBL6149",
        "targetClass": "Kinase",
        "probability": 0.0067,
        "knownActives": "115 /  1"
      },
      {
        "target": "cAMP-dependent protein kinase catalytic subunit gamma",
        "commonName": "PRKACG",
        "uniprotId": "P22612",
        "chemblId": "CHEMBL2743",
        "targetClass": "Kinase",
        "probability": 0.0067,
        "knownActives": "11 /  1"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 3",
        "commonName": "ATP2A3",
        "uniprotId": "Q93084",
        "chemblId": "CHEMBL2401",
        "targetClass": "Primary active transporter",
        "probability": 0.0066,
        "knownActives": "2 /  2"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.0064,
        "knownActives": "1259 /  59"
      },
      {
        "target": "D-3-phosphoglycerate dehydrogenase",
        "commonName": "PHGDH",
        "uniprotId": "O43175",
        "chemblId": "CHEMBL2311243",
        "targetClass": "Oxidoreductase",
        "probability": 0.0063,
        "knownActives": "324 /  1"
      },
      {
        "target": "M-phase inducer phosphatase 2",
        "commonName": "CDC25B",
        "uniprotId": "P30305",
        "chemblId": "CHEMBL4804",
        "targetClass": "Phosphatase",
        "probability": 0.0061,
        "knownActives": "157 /  5"
      },
      {
        "target": "Histone-lysine N-methyltransferase EZH2",
        "commonName": "EZH2",
        "uniprotId": "Q15910",
        "chemblId": "CHEMBL2189110",
        "targetClass": "Writer",
        "probability": 0.0059,
        "knownActives": "856 /  2"
      },
      {
        "target": "Mineralocorticoid receptor",
        "commonName": "NR3C2",
        "uniprotId": "P08235",
        "chemblId": "CHEMBL1994",
        "targetClass": "Nuclear receptor",
        "probability": 0.0056,
        "knownActives": "530 /  20"
      },
      {
        "target": "Endothelin-1 receptor",
        "commonName": "EDNRA",
        "uniprotId": "P25101",
        "chemblId": "CHEMBL252",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0055,
        "knownActives": "1070 /  6"
      },
      {
        "target": "Tumor necrosis factor",
        "commonName": "TNF",
        "uniprotId": "P01375",
        "chemblId": "CHEMBL1825",
        "targetClass": "Secreted protein",
        "probability": 0.0055,
        "knownActives": "1321 /  6"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 3",
        "commonName": "KCNA3",
        "uniprotId": "P22001",
        "chemblId": "CHEMBL4633",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0054,
        "knownActives": "264 /  7"
      },
      {
        "target": "Squalene synthase",
        "commonName": "FDFT1",
        "uniprotId": "P37268",
        "chemblId": "CHEMBL3338",
        "targetClass": "Transferase",
        "probability": 0.0053,
        "knownActives": "128 /  25"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.0051,
        "knownActives": "1870 /  8"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.005,
        "knownActives": "691 /  10"
      },
      {
        "target": "Toll-like receptor 4",
        "commonName": "TLR4",
        "uniprotId": "O00206",
        "chemblId": "CHEMBL5255",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.0045,
        "knownActives": "87 /  4"
      },
      {
        "target": "Prothrombin",
        "commonName": "F2",
        "uniprotId": "P00734",
        "chemblId": "CHEMBL204",
        "targetClass": "Protease",
        "probability": 0.0045,
        "knownActives": "3428 /  6"
      },
      {
        "target": "Ras guanyl-releasing protein 3",
        "commonName": "RASGRP3",
        "uniprotId": "Q8IV61",
        "chemblId": "CHEMBL3638",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0044,
        "knownActives": "87 /  44"
      },
      {
        "target": "Bile acid receptor",
        "commonName": "NR1H4",
        "uniprotId": "Q96RI1",
        "chemblId": "CHEMBL2047",
        "targetClass": "Nuclear receptor",
        "probability": 0.0043,
        "knownActives": "2371 /  14"
      },
      {
        "target": "Kelch-like ECH-associated protein 1",
        "commonName": "KEAP1",
        "uniprotId": "Q14145",
        "chemblId": "CHEMBL2069156",
        "targetClass": "Unclassified protein",
        "probability": 0.0043,
        "knownActives": "182 /  3"
      },
      {
        "target": "Tubulin--tyrosine ligase",
        "commonName": "TTL",
        "uniprotId": "Q8NG68",
        "chemblId": "CHEMBL5549",
        "targetClass": "Ligase",
        "probability": 0.004,
        "knownActives": "17 /  12"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0039,
        "knownActives": "1003 /  1"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.0038,
        "knownActives": "832 /  7"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0036,
        "knownActives": "2863 /  29"
      },
      {
        "target": "Sodium-dependent serotonin transporter",
        "commonName": "SLC6A4",
        "uniprotId": "P31645",
        "chemblId": "CHEMBL228",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0036,
        "knownActives": "4816 /  9"
      },
      {
        "target": "Protein kinase C eta type",
        "commonName": "PRKCH",
        "uniprotId": "P24723",
        "chemblId": "CHEMBL3616",
        "targetClass": "Kinase",
        "probability": 0.0035,
        "knownActives": "131 /  4"
      },
      {
        "target": "dCTP pyrophosphatase 1",
        "commonName": "DCTPP1",
        "uniprotId": "Q9H773",
        "chemblId": "CHEMBL3769292",
        "targetClass": "Hydrolase",
        "probability": 0.0031,
        "knownActives": "99 /  1"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.0031,
        "knownActives": "2690 /  3"
      },
      {
        "target": "Proteinase-activated receptor 2",
        "commonName": "F2RL1",
        "uniprotId": "P55085",
        "chemblId": "CHEMBL5963",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0031,
        "knownActives": "65 /  1"
      },
      {
        "target": "NACHT, LRR and PYD domains-containing protein 3",
        "commonName": "NLRP3",
        "uniprotId": "Q96P20",
        "chemblId": "CHEMBL1741208",
        "targetClass": "Unclassified protein",
        "probability": 0.0031,
        "knownActives": "398 /  15"
      },
      {
        "target": "cAMP-dependent protein kinase catalytic subunit alpha",
        "commonName": "PRKACA",
        "uniprotId": "P17612",
        "chemblId": "CHEMBL4101",
        "targetClass": "Kinase",
        "probability": 0.0031,
        "knownActives": "76 /  2"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0031,
        "knownActives": "968 /  7"
      },
      {
        "target": "Apoptosis regulator Bcl-2",
        "commonName": "BCL2",
        "uniprotId": "P10415",
        "chemblId": "CHEMBL4860",
        "targetClass": "Other ion channel",
        "probability": 0.003,
        "knownActives": "823 /  1"
      },
      {
        "target": "Proto-oncogene vav",
        "commonName": "VAV1",
        "uniprotId": "P15498",
        "chemblId": "CHEMBL3259472",
        "targetClass": "Unclassified protein",
        "probability": 0.003,
        "knownActives": "1 /  1"
      },
      {
        "target": "Protein kinase C gamma type",
        "commonName": "PRKCG",
        "uniprotId": "P05129",
        "chemblId": "CHEMBL2938",
        "targetClass": "Kinase",
        "probability": 0.003,
        "knownActives": "100 /  9"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0029,
        "knownActives": "1609 /  5"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 1",
        "commonName": "TRPV1",
        "uniprotId": "Q8NER1",
        "chemblId": "CHEMBL4794",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0029,
        "knownActives": "1672 /  17"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 8",
        "commonName": "TRPM8",
        "uniprotId": "Q7Z2W7",
        "chemblId": "CHEMBL1075319",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0029,
        "knownActives": "387 /  1"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha4/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P43681",
        "chemblId": "CHEMBL1907589",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0028,
        "knownActives": "755 /  4"
      },
      {
        "target": "TGF-beta receptor type-1",
        "commonName": "TGFBR1",
        "uniprotId": "P36897",
        "chemblId": "CHEMBL4439",
        "targetClass": "Kinase",
        "probability": 0.0027,
        "knownActives": "1806 /  1"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.0027,
        "knownActives": "90 /  4"
      },
      {
        "target": "Ubiquitin carboxyl-terminal hydrolase 7",
        "commonName": "USP7",
        "uniprotId": "Q93009",
        "chemblId": "CHEMBL2157850",
        "targetClass": "Protease",
        "probability": 0.0027,
        "knownActives": "307 /  4"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0026,
        "knownActives": "412 /  2"
      },
      {
        "target": "ATP-dependent Clp protease ATP-binding subunit clpX-like, mitochondrial",
        "commonName": "CLPX",
        "uniprotId": "O76031",
        "chemblId": "CHEMBL3797014",
        "targetClass": "Enzyme",
        "probability": 0.0026,
        "knownActives": "1 /  1"
      },
      {
        "target": "Nicotinamide N-methyltransferase",
        "commonName": "NNMT",
        "uniprotId": "P40261",
        "chemblId": "CHEMBL2346486",
        "targetClass": "Transferase",
        "probability": 0.0025,
        "knownActives": "105 /  1"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 11",
        "commonName": "PTPN11",
        "uniprotId": "Q06124",
        "chemblId": "CHEMBL3864",
        "targetClass": "Phosphatase",
        "probability": 0.0025,
        "knownActives": "1572 /  5"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.0024,
        "knownActives": "1011 /  62"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.0023,
        "knownActives": "2457 /  19"
      },
      {
        "target": "Bcl-2-like protein 1",
        "commonName": "BCL2L1",
        "uniprotId": "Q07817",
        "chemblId": "CHEMBL4625",
        "targetClass": "Other ion channel",
        "probability": 0.0022,
        "knownActives": "565 /  5"
      },
      {
        "target": "C-X-C chemokine receptor type 1",
        "commonName": "CXCR1",
        "uniprotId": "P25024",
        "chemblId": "CHEMBL4029",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0022,
        "knownActives": "36 /  2"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.0022,
        "knownActives": "3166 /  1"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 2",
        "commonName": "PTPN2",
        "uniprotId": "P17706",
        "chemblId": "CHEMBL3807",
        "targetClass": "Phosphatase",
        "probability": 0.0022,
        "knownActives": "219 /  10"
      }
    ]
  },
  {
    "id": "nimbolide",
    "name": "Nimbolide",
    "cid": 100017,
    "smiles": "CC12CCC3C(C1C=CC4C2(C(=O)C=C(O4)C5=COC=C5)O)C6C(=O)OCC6(C3=O)C",
    "category": "Limonoid Triterpenoid",
    "topTarget": "Heat shock protein HSP 90-alpha (HSP90AA1)",
    "topTargetUniprot": "P07900",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 20,
        "percentage": 20.0,
        "color": "#3B82F6"
      },
      {
        "label": "Transferase",
        "count": 12,
        "percentage": 12.0,
        "color": "#10B981"
      },
      {
        "label": "Protease",
        "count": 6,
        "percentage": 6.0,
        "color": "#F59E0B"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 5,
        "percentage": 5.0,
        "color": "#EF4444"
      },
      {
        "label": "Nuclear receptor",
        "count": 5,
        "percentage": 5.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Enzyme",
        "count": 4,
        "percentage": 4.0,
        "color": "#EC4899"
      },
      {
        "label": "Oxidoreductase",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Phosphatase",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Reader",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Primary active transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#84CC16"
      },
      {
        "label": "Other cytosolic protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Transcription factor",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Electrochemical transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#3B82F6"
      },
      {
        "label": "Hydrolase",
        "count": 3,
        "percentage": 3.0,
        "color": "#10B981"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#F59E0B"
      },
      {
        "label": "Unclassified protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#EF4444"
      },
      {
        "label": "Secreted protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 2,
        "percentage": 2.0,
        "color": "#EC4899"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Ligase",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Cytochrome P450",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Phosphodiesterase",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      },
      {
        "label": "Other ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#A855F7"
      }
    ],
    "targets": [
      {
        "target": "Heat shock protein HSP 90-alpha",
        "commonName": "HSP90AA1",
        "uniprotId": "P07900",
        "chemblId": "CHEMBL3880",
        "targetClass": "Other cytosolic protein",
        "probability": 0.9619,
        "knownActives": "759 /  17"
      },
      {
        "target": "Nitric oxide synthase, inducible",
        "commonName": "NOS2",
        "uniprotId": "P35228",
        "chemblId": "CHEMBL4481",
        "targetClass": "Enzyme",
        "probability": 0.2212,
        "knownActives": "576 /  1"
      },
      {
        "target": "Interleukin-1 beta",
        "commonName": "IL1B",
        "uniprotId": "P01584",
        "chemblId": "CHEMBL1909490",
        "targetClass": "Secreted protein",
        "probability": 0.2212,
        "knownActives": "158 /  3"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.1687,
        "knownActives": "1977 /  10"
      },
      {
        "target": "Macrophage migration inhibitory factor",
        "commonName": "MIF",
        "uniprotId": "P14174",
        "chemblId": "CHEMBL2085",
        "targetClass": "Enzyme",
        "probability": 0.0334,
        "knownActives": "43 /  1"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.032,
        "knownActives": "990 /  53"
      },
      {
        "target": "Dual specificity protein phosphatase 3",
        "commonName": "DUSP3",
        "uniprotId": "P51452",
        "chemblId": "CHEMBL2635",
        "targetClass": "Phosphatase",
        "probability": 0.0246,
        "knownActives": "78 /  3"
      },
      {
        "target": "Protein kinase C alpha type",
        "commonName": "PRKCA",
        "uniprotId": "P17252",
        "chemblId": "CHEMBL299",
        "targetClass": "Kinase",
        "probability": 0.0246,
        "knownActives": "799 /  290"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0245,
        "knownActives": "2958 /  184"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0216,
        "knownActives": "3709 /  67"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0187,
        "knownActives": "1656 /  50"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.014,
        "knownActives": "65 /  3"
      },
      {
        "target": "Endoplasmic reticulum aminopeptidase 1",
        "commonName": "ERAP1",
        "uniprotId": "Q9NZ08",
        "chemblId": "CHEMBL5939",
        "targetClass": "Protease",
        "probability": 0.0138,
        "knownActives": "79 /  1"
      },
      {
        "target": "Bromodomain-containing protein 2",
        "commonName": "BRD2",
        "uniprotId": "P25440",
        "chemblId": "CHEMBL1293289",
        "targetClass": "Reader",
        "probability": 0.0132,
        "knownActives": "722 /  1"
      },
      {
        "target": "Bromodomain-containing protein 4",
        "commonName": "BRD4",
        "uniprotId": "O60885",
        "chemblId": "CHEMBL1163125",
        "targetClass": "Reader",
        "probability": 0.0132,
        "knownActives": "6650 /  9"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.013,
        "knownActives": "540 /  71"
      },
      {
        "target": "RAC-alpha serine/threonine-protein kinase",
        "commonName": "AKT1",
        "uniprotId": "P31749",
        "chemblId": "CHEMBL4282",
        "targetClass": "Kinase",
        "probability": 0.0128,
        "knownActives": "2737 /  18"
      },
      {
        "target": "DNA-dependent protein kinase catalytic subunit",
        "commonName": "PRKDC",
        "uniprotId": "P78527",
        "chemblId": "CHEMBL3142",
        "targetClass": "Kinase",
        "probability": 0.0126,
        "knownActives": "1142 /  2"
      },
      {
        "target": "Phosphatidylinositol 3-kinase catalytic subunit type 3",
        "commonName": "PIK3C3",
        "uniprotId": "Q8NEB9",
        "chemblId": "CHEMBL1075165",
        "targetClass": "Transferase",
        "probability": 0.0121,
        "knownActives": "620 /  11"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.012,
        "knownActives": "266 /  63"
      },
      {
        "target": "Serine/threonine-protein kinase mTOR",
        "commonName": "MTOR",
        "uniprotId": "P42345",
        "chemblId": "CHEMBL2842",
        "targetClass": "Kinase",
        "probability": 0.0118,
        "knownActives": "3777 /  34"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit alpha isoform",
        "commonName": "PIK3CA",
        "uniprotId": "P42336",
        "chemblId": "CHEMBL4005",
        "targetClass": "Transferase",
        "probability": 0.0118,
        "knownActives": "5970 /  49"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit delta isoform",
        "commonName": "PIK3CD",
        "uniprotId": "O00329",
        "chemblId": "CHEMBL3130",
        "targetClass": "Transferase",
        "probability": 0.0114,
        "knownActives": "6091 /  3"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit gamma isoform",
        "commonName": "PIK3CG",
        "uniprotId": "P48736",
        "chemblId": "CHEMBL3267",
        "targetClass": "Transferase",
        "probability": 0.0112,
        "knownActives": "2964 /  3"
      },
      {
        "target": "Solute carrier family 2, facilitated glucose transporter member 1",
        "commonName": "SLC2A1",
        "uniprotId": "P11166",
        "chemblId": "CHEMBL2535",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0112,
        "knownActives": "131 /  4"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.0109,
        "knownActives": "2140 /  15"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit beta isoform",
        "commonName": "PIK3CB",
        "uniprotId": "P42338",
        "chemblId": "CHEMBL3145",
        "targetClass": "Transferase",
        "probability": 0.0107,
        "knownActives": "2132 /  2"
      },
      {
        "target": "Bromodomain-containing protein 3",
        "commonName": "BRD3",
        "uniprotId": "Q15059",
        "chemblId": "CHEMBL1795186",
        "targetClass": "Reader",
        "probability": 0.0103,
        "knownActives": "760 /  9"
      },
      {
        "target": "PI3-kinase p110-alpha/p85-alpha",
        "commonName": "N/A",
        "uniprotId": "P27986&P42336",
        "chemblId": "CHEMBL2111367",
        "targetClass": "Transferase",
        "probability": 0.0101,
        "knownActives": "1318 /  5"
      },
      {
        "target": "Protein kinase C beta type",
        "commonName": "PRKCB",
        "uniprotId": "P05771",
        "chemblId": "CHEMBL3045",
        "targetClass": "Kinase",
        "probability": 0.01,
        "knownActives": "319 /  14"
      },
      {
        "target": "Myosin light chain kinase, smooth muscle",
        "commonName": "MYLK",
        "uniprotId": "Q15746",
        "chemblId": "CHEMBL2428",
        "targetClass": "Kinase",
        "probability": 0.0099,
        "knownActives": "81 /  1"
      },
      {
        "target": "Kir3.1/Kir3.4",
        "commonName": "N/A",
        "uniprotId": "P48549&P48544",
        "chemblId": "CHEMBL3038488",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0094,
        "knownActives": "201 /  9"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.0089,
        "knownActives": "3456 /  20"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.0088,
        "knownActives": "349 /  9"
      },
      {
        "target": "Phosphatidylinositol 4-kinase beta",
        "commonName": "PI4KB",
        "uniprotId": "Q9UBF8",
        "chemblId": "CHEMBL3268",
        "targetClass": "Transferase",
        "probability": 0.0083,
        "knownActives": "309 /  1"
      },
      {
        "target": "Serine/threonine-protein kinase PLK3",
        "commonName": "PLK3",
        "uniprotId": "Q9H4B4",
        "chemblId": "CHEMBL4897",
        "targetClass": "Kinase",
        "probability": 0.0083,
        "knownActives": "145 /  1"
      },
      {
        "target": "Serine/threonine-protein kinase PLK1",
        "commonName": "PLK1",
        "uniprotId": "P53350",
        "chemblId": "CHEMBL3024",
        "targetClass": "Kinase",
        "probability": 0.0083,
        "knownActives": "843 /  1"
      },
      {
        "target": "Phosphatidylinositol 4-kinase alpha",
        "commonName": "PI4KA",
        "uniprotId": "P42356",
        "chemblId": "CHEMBL3667",
        "targetClass": "Transferase",
        "probability": 0.0083,
        "knownActives": "79 /  1"
      },
      {
        "target": "Bromodomain testis-specific protein",
        "commonName": "BRDT",
        "uniprotId": "Q58F21",
        "chemblId": "CHEMBL1795185",
        "targetClass": "Reader",
        "probability": 0.0078,
        "knownActives": "187 /  1"
      },
      {
        "target": "Proteasome Macropain subunit MB1",
        "commonName": "PSMB5",
        "uniprotId": "P28074",
        "chemblId": "CHEMBL4662",
        "targetClass": "Protease",
        "probability": 0.0071,
        "knownActives": "591 /  2"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 2",
        "commonName": "ATP2A2",
        "uniprotId": "P16615",
        "chemblId": "CHEMBL3901",
        "targetClass": "Primary active transporter",
        "probability": 0.0068,
        "knownActives": "8 /  3"
      },
      {
        "target": "Phospholipase A2, membrane associated",
        "commonName": "PLA2G2A",
        "uniprotId": "P14555",
        "chemblId": "CHEMBL3474",
        "targetClass": "Hydrolase",
        "probability": 0.0068,
        "knownActives": "190 /  8"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 1",
        "commonName": "ATP2A1",
        "uniprotId": "O14983",
        "chemblId": "CHEMBL3136",
        "targetClass": "Primary active transporter",
        "probability": 0.0067,
        "knownActives": "5 /  6"
      },
      {
        "target": "D-3-phosphoglycerate dehydrogenase",
        "commonName": "PHGDH",
        "uniprotId": "O43175",
        "chemblId": "CHEMBL2311243",
        "targetClass": "Oxidoreductase",
        "probability": 0.0064,
        "knownActives": "325 /  1"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.0063,
        "knownActives": "1364 /  49"
      },
      {
        "target": "Proteasome component C5",
        "commonName": "PSMB1",
        "uniprotId": "P20618",
        "chemblId": "CHEMBL4208",
        "targetClass": "Protease",
        "probability": 0.0061,
        "knownActives": "73 /  2"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.0061,
        "knownActives": "263 /  2"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0057,
        "knownActives": "2886 /  29"
      },
      {
        "target": "Sodium-dependent serotonin transporter",
        "commonName": "SLC6A4",
        "uniprotId": "P31645",
        "chemblId": "CHEMBL228",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0057,
        "knownActives": "4841 /  9"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.0056,
        "knownActives": "688 /  10"
      },
      {
        "target": "Histone-lysine N-methyltransferase EZH2",
        "commonName": "EZH2",
        "uniprotId": "Q15910",
        "chemblId": "CHEMBL2189110",
        "targetClass": "Writer",
        "probability": 0.0055,
        "knownActives": "792 /  2"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.0053,
        "knownActives": "7782 /  4"
      },
      {
        "target": "Protein farnesyltransferase",
        "commonName": "N/A",
        "uniprotId": "P49354&P49356",
        "chemblId": "CHEMBL2094108",
        "targetClass": "Transferase",
        "probability": 0.0052,
        "knownActives": "1324 /  7"
      },
      {
        "target": "M-phase inducer phosphatase 2",
        "commonName": "CDC25B",
        "uniprotId": "P30305",
        "chemblId": "CHEMBL4804",
        "targetClass": "Phosphatase",
        "probability": 0.0052,
        "knownActives": "150 /  5"
      },
      {
        "target": "Tumor necrosis factor",
        "commonName": "TNF",
        "uniprotId": "P01375",
        "chemblId": "CHEMBL1825",
        "targetClass": "Secreted protein",
        "probability": 0.0051,
        "knownActives": "1258 /  6"
      },
      {
        "target": "Geranylgeranyl transferase type I",
        "commonName": "N/A",
        "uniprotId": "P49354&P53609",
        "chemblId": "CHEMBL2095164",
        "targetClass": "Transferase",
        "probability": 0.0051,
        "knownActives": "285 /  1"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0049,
        "knownActives": "1015 /  1"
      },
      {
        "target": "Bile acid receptor",
        "commonName": "NR1H4",
        "uniprotId": "Q96RI1",
        "chemblId": "CHEMBL2047",
        "targetClass": "Nuclear receptor",
        "probability": 0.0047,
        "knownActives": "2281 /  15"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 3",
        "commonName": "KCNA3",
        "uniprotId": "P22001",
        "chemblId": "CHEMBL4633",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0047,
        "knownActives": "262 /  7"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 3",
        "commonName": "ATP2A3",
        "uniprotId": "Q93084",
        "chemblId": "CHEMBL2401",
        "targetClass": "Primary active transporter",
        "probability": 0.0046,
        "knownActives": "2 /  2"
      },
      {
        "target": "Serine/threonine-protein kinase SIK3",
        "commonName": "SIK3",
        "uniprotId": "Q9Y2K2",
        "chemblId": "CHEMBL6149",
        "targetClass": "Kinase",
        "probability": 0.0046,
        "knownActives": "108 /  1"
      },
      {
        "target": "cAMP-dependent protein kinase catalytic subunit gamma",
        "commonName": "PRKACG",
        "uniprotId": "P22612",
        "chemblId": "CHEMBL2743",
        "targetClass": "Kinase",
        "probability": 0.0046,
        "knownActives": "11 /  1"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0043,
        "knownActives": "414 /  2"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.0038,
        "knownActives": "1198 /  41"
      },
      {
        "target": "Endothelin-1 receptor",
        "commonName": "EDNRA",
        "uniprotId": "P25101",
        "chemblId": "CHEMBL252",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0036,
        "knownActives": "1050 /  6"
      },
      {
        "target": "Toll-like receptor 4",
        "commonName": "TLR4",
        "uniprotId": "O00206",
        "chemblId": "CHEMBL5255",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.0036,
        "knownActives": "89 /  4"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha4/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P43681",
        "chemblId": "CHEMBL1907589",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0035,
        "knownActives": "757 /  4"
      },
      {
        "target": "Squalene synthase",
        "commonName": "FDFT1",
        "uniprotId": "P37268",
        "chemblId": "CHEMBL3338",
        "targetClass": "Transferase",
        "probability": 0.0035,
        "knownActives": "121 /  24"
      },
      {
        "target": "cAMP-dependent protein kinase catalytic subunit alpha",
        "commonName": "PRKACA",
        "uniprotId": "P17612",
        "chemblId": "CHEMBL4101",
        "targetClass": "Kinase",
        "probability": 0.0034,
        "knownActives": "77 /  1"
      },
      {
        "target": "Tubulin--tyrosine ligase",
        "commonName": "TTL",
        "uniprotId": "Q8NG68",
        "chemblId": "CHEMBL5549",
        "targetClass": "Ligase",
        "probability": 0.0034,
        "knownActives": "17 /  12"
      },
      {
        "target": "Kelch-like ECH-associated protein 1",
        "commonName": "KEAP1",
        "uniprotId": "Q14145",
        "chemblId": "CHEMBL2069156",
        "targetClass": "Unclassified protein",
        "probability": 0.0033,
        "knownActives": "169 /  3"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.0033,
        "knownActives": "1948 /  7"
      },
      {
        "target": "Mineralocorticoid receptor",
        "commonName": "NR3C2",
        "uniprotId": "P08235",
        "chemblId": "CHEMBL1994",
        "targetClass": "Nuclear receptor",
        "probability": 0.0033,
        "knownActives": "540 /  20"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.0033,
        "knownActives": "98 /  4"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.0032,
        "knownActives": "2319 /  19"
      },
      {
        "target": "Ras guanyl-releasing protein 3",
        "commonName": "RASGRP3",
        "uniprotId": "Q8IV61",
        "chemblId": "CHEMBL3638",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0031,
        "knownActives": "87 /  47"
      },
      {
        "target": "NACHT, LRR and PYD domains-containing protein 3",
        "commonName": "NLRP3",
        "uniprotId": "Q96P20",
        "chemblId": "CHEMBL1741208",
        "targetClass": "Unclassified protein",
        "probability": 0.0031,
        "knownActives": "410 /  16"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.003,
        "knownActives": "3073 /  1"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.003,
        "knownActives": "831 /  7"
      },
      {
        "target": "dCTP pyrophosphatase 1",
        "commonName": "DCTPP1",
        "uniprotId": "Q9H773",
        "chemblId": "CHEMBL3769292",
        "targetClass": "Hydrolase",
        "probability": 0.003,
        "knownActives": "102 /  1"
      },
      {
        "target": "Prothrombin",
        "commonName": "F2",
        "uniprotId": "P00734",
        "chemblId": "CHEMBL204",
        "targetClass": "Protease",
        "probability": 0.0029,
        "knownActives": "3204 /  6"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 1",
        "commonName": "TRPV1",
        "uniprotId": "Q8NER1",
        "chemblId": "CHEMBL4794",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0028,
        "knownActives": "1689 /  17"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.0028,
        "knownActives": "1049 /  70"
      },
      {
        "target": "ATP-dependent Clp protease ATP-binding subunit clpX-like, mitochondrial",
        "commonName": "CLPX",
        "uniprotId": "O76031",
        "chemblId": "CHEMBL3797014",
        "targetClass": "Enzyme",
        "probability": 0.0027,
        "knownActives": "1 /  1"
      },
      {
        "target": "Ubiquitin carboxyl-terminal hydrolase 7",
        "commonName": "USP7",
        "uniprotId": "Q93009",
        "chemblId": "CHEMBL2157850",
        "targetClass": "Protease",
        "probability": 0.0027,
        "knownActives": "288 /  4"
      },
      {
        "target": "Proteinase-activated receptor 2",
        "commonName": "F2RL1",
        "uniprotId": "P55085",
        "chemblId": "CHEMBL5963",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0026,
        "knownActives": "70 /  1"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.0026,
        "knownActives": "901 /  6"
      },
      {
        "target": "TGF-beta receptor type-1",
        "commonName": "TGFBR1",
        "uniprotId": "P36897",
        "chemblId": "CHEMBL4439",
        "targetClass": "Kinase",
        "probability": 0.0026,
        "knownActives": "1835 /  1"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0026,
        "knownActives": "1552 /  6"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0025,
        "knownActives": "969 /  7"
      },
      {
        "target": "Apoptosis regulator Bcl-2",
        "commonName": "BCL2",
        "uniprotId": "P10415",
        "chemblId": "CHEMBL4860",
        "targetClass": "Other ion channel",
        "probability": 0.0025,
        "knownActives": "696 /  1"
      },
      {
        "target": "Protein kinase C eta type",
        "commonName": "PRKCH",
        "uniprotId": "P24723",
        "chemblId": "CHEMBL3616",
        "targetClass": "Kinase",
        "probability": 0.0025,
        "knownActives": "131 /  4"
      },
      {
        "target": "Protein kinase C gamma type",
        "commonName": "PRKCG",
        "uniprotId": "P05129",
        "chemblId": "CHEMBL2938",
        "targetClass": "Kinase",
        "probability": 0.0025,
        "knownActives": "100 /  9"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.0024,
        "knownActives": "2582 /  2"
      },
      {
        "target": "Proto-oncogene vav",
        "commonName": "VAV1",
        "uniprotId": "P15498",
        "chemblId": "CHEMBL3259472",
        "targetClass": "Unclassified protein",
        "probability": 0.0023,
        "knownActives": "1 /  1"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 8",
        "commonName": "TRPM8",
        "uniprotId": "Q7Z2W7",
        "chemblId": "CHEMBL1075319",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0023,
        "knownActives": "370 /  1"
      },
      {
        "target": "Zinc finger protein GLI1",
        "commonName": "GLI1",
        "uniprotId": "P08151",
        "chemblId": "CHEMBL5461",
        "targetClass": "Transcription factor",
        "probability": 0.0023,
        "knownActives": "14 /  4"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 2",
        "commonName": "PTPN2",
        "uniprotId": "P17706",
        "chemblId": "CHEMBL3807",
        "targetClass": "Phosphatase",
        "probability": 0.0022,
        "knownActives": "189 /  10"
      },
      {
        "target": "3-hydroxy-3-methylglutaryl-coenzyme A reductase",
        "commonName": "HMGCR",
        "uniprotId": "P04035",
        "chemblId": "CHEMBL402",
        "targetClass": "Oxidoreductase",
        "probability": 0.0021,
        "knownActives": "188 /  18"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.002,
        "knownActives": "7445 /  13"
      }
    ]
  },
  {
    "id": "oroxylin_a",
    "name": "Oroxylin A",
    "cid": 5320315,
    "smiles": "COc1c(O)c2c(oc(cc2=O)c3ccccc3)cc1O",
    "category": "O-Methylated Flavonoid",
    "topTarget": "Receptor-type tyrosine-protein kinase FLT3 (FLT3)",
    "topTargetUniprot": "P36888",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 25,
        "percentage": 25.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 14,
        "percentage": 14.0,
        "color": "#10B981"
      },
      {
        "label": "Transferase",
        "count": 7,
        "percentage": 7.0,
        "color": "#F59E0B"
      },
      {
        "label": "Lyase",
        "count": 7,
        "percentage": 7.0,
        "color": "#EF4444"
      },
      {
        "label": "Protease",
        "count": 7,
        "percentage": 7.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Nuclear receptor",
        "count": 4,
        "percentage": 4.0,
        "color": "#EC4899"
      },
      {
        "label": "Hydrolase",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Writer",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Eraser",
        "count": 3,
        "percentage": 3.0,
        "color": "#14B8A6"
      },
      {
        "label": "Primary active transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Phosphatase",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Enzyme",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Cytochrome P450",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#3B82F6"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Electrochemical transporter",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Secreted protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Other ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Isomerase",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      }
    ],
    "targets": [
      {
        "target": "Receptor-type tyrosine-protein kinase FLT3",
        "commonName": "FLT3",
        "uniprotId": "P36888",
        "chemblId": "CHEMBL1974",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "146 /  16"
      },
      {
        "target": "Solute carrier organic anion transporter family member 2B1",
        "commonName": "SLCO2B1",
        "uniprotId": "O94956",
        "chemblId": "CHEMBL1743124",
        "targetClass": "Electrochemical transporter",
        "probability": 1.0,
        "knownActives": "6 /  6"
      },
      {
        "target": "Mast/stem cell growth factor receptor Kit",
        "commonName": "KIT",
        "uniprotId": "P10721",
        "chemblId": "CHEMBL1936",
        "targetClass": "Kinase",
        "probability": 0.984,
        "knownActives": "59 /  3"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 0.9831,
        "knownActives": "178 /  20"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 2",
        "commonName": "MKNK2",
        "uniprotId": "Q9HBH9",
        "chemblId": "CHEMBL4204",
        "targetClass": "Kinase",
        "probability": 0.9805,
        "knownActives": "36 /  9"
      },
      {
        "target": "MAP kinase-interacting serine/threonine-protein kinase 1",
        "commonName": "MKNK1",
        "uniprotId": "Q9BUB5",
        "chemblId": "CHEMBL4718",
        "targetClass": "Kinase",
        "probability": 0.9805,
        "knownActives": "24 /  2"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9802,
        "knownActives": "378 /  3"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.9683,
        "knownActives": "97 /  17"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.9622,
        "knownActives": "151 /  30"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 0.9622,
        "knownActives": "169 /  40"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.9614,
        "knownActives": "77 /  131"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.9574,
        "knownActives": "100 /  177"
      },
      {
        "target": "Receptor-type tyrosine-protein phosphatase S",
        "commonName": "PTPRS",
        "uniprotId": "Q13332",
        "chemblId": "CHEMBL2396508",
        "targetClass": "Phosphatase",
        "probability": 0.9568,
        "knownActives": "6 /  8"
      },
      {
        "target": "Cyclin-dependent kinase 9",
        "commonName": "CDK9",
        "uniprotId": "P50750",
        "chemblId": "CHEMBL3116",
        "targetClass": "Kinase",
        "probability": 0.9563,
        "knownActives": "16 /  11"
      },
      {
        "target": "CDK8/Cyclin C",
        "commonName": "N/A",
        "uniprotId": "P49336&P24863",
        "chemblId": "CHEMBL3038474",
        "targetClass": "Kinase",
        "probability": 0.9563,
        "knownActives": "10 /  12"
      },
      {
        "target": "CDK2/Cyclin A2",
        "commonName": "N/A",
        "uniprotId": "P24941&P20248",
        "chemblId": "CHEMBL3038469",
        "targetClass": "Kinase",
        "probability": 0.9563,
        "knownActives": "86 /  35"
      },
      {
        "target": "Cyclin-dependent kinase 2",
        "commonName": "CDK2",
        "uniprotId": "P24941",
        "chemblId": "CHEMBL301",
        "targetClass": "Kinase",
        "probability": 0.9563,
        "knownActives": "253 /  26"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.9563,
        "knownActives": "21 /  9"
      },
      {
        "target": "CDK9/cyclin T1",
        "commonName": "N/A",
        "uniprotId": "O60563&P50750",
        "chemblId": "CHEMBL2111389",
        "targetClass": "Kinase",
        "probability": 0.9563,
        "knownActives": "95 /  45"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.9563,
        "knownActives": "170 /  9"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.9532,
        "knownActives": "229 /  61"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.9512,
        "knownActives": "79 /  42"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 0.9506,
        "knownActives": "72 /  153"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX12",
        "commonName": "ALOX12",
        "uniprotId": "P18054",
        "chemblId": "CHEMBL3687",
        "targetClass": "Enzyme",
        "probability": 0.949,
        "knownActives": "87 /  14"
      },
      {
        "target": "A-type voltage-gated potassium channel KCND3",
        "commonName": "KCND3",
        "uniprotId": "Q9UK17",
        "chemblId": "CHEMBL1964",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.9488,
        "knownActives": "1 /  1"
      },
      {
        "target": "Inositol hexakisphosphate kinase 2",
        "commonName": "IP6K2",
        "uniprotId": "Q9UHH9",
        "chemblId": "CHEMBL4523488",
        "targetClass": "Transferase",
        "probability": 0.9488,
        "knownActives": "8 /  10"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 3",
        "commonName": "TRPV3",
        "uniprotId": "Q8NET8",
        "chemblId": "CHEMBL5522",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.9488,
        "knownActives": "4 /  1"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.9488,
        "knownActives": "454 /  425"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 5",
        "commonName": "KCNA5",
        "uniprotId": "P22460",
        "chemblId": "CHEMBL4306",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.9488,
        "knownActives": "12 /  29"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.9488,
        "knownActives": "237 /  152"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 0.9488,
        "knownActives": "78 /  8"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.9418,
        "knownActives": "322 /  6"
      },
      {
        "target": "G protein-coupled receptor kinase 6",
        "commonName": "GRK6",
        "uniprotId": "P43250",
        "chemblId": "CHEMBL6144",
        "targetClass": "Kinase",
        "probability": 0.9407,
        "knownActives": "26 /  4"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.9374,
        "knownActives": "474 /  143"
      },
      {
        "target": "Cyclin-dependent kinase 5/CDK5 activator 1",
        "commonName": "N/A",
        "uniprotId": "Q00535&Q15078",
        "chemblId": "CHEMBL1907600",
        "targetClass": "Kinase",
        "probability": 0.9374,
        "knownActives": "186 /  26"
      },
      {
        "target": "Cyclin-dependent kinase 6",
        "commonName": "CDK6",
        "uniprotId": "Q00534",
        "chemblId": "CHEMBL2508",
        "targetClass": "Kinase",
        "probability": 0.9374,
        "knownActives": "10 /  6"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.9374,
        "knownActives": "106 /  49"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.9374,
        "knownActives": "142 /  19"
      },
      {
        "target": "Proteasome Macropain subunit MB1",
        "commonName": "PSMB5",
        "uniprotId": "P28074",
        "chemblId": "CHEMBL4662",
        "targetClass": "Protease",
        "probability": 0.9374,
        "knownActives": "10 /  6"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.9374,
        "knownActives": "77 /  41"
      },
      {
        "target": "Carbonyl reductase [NADPH] 1",
        "commonName": "CBR1",
        "uniprotId": "P16152",
        "chemblId": "CHEMBL5586",
        "targetClass": "Oxidoreductase",
        "probability": 0.9374,
        "knownActives": "20 /  3"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 0.9374,
        "knownActives": "153 /  25"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.9374,
        "knownActives": "184 /  77"
      },
      {
        "target": "Cyclin-dependent kinase 1/cyclin B",
        "commonName": "N/A",
        "uniprotId": "P06493&P14635&Q8WWL7&O95067",
        "chemblId": "CHEMBL2094127",
        "targetClass": "Kinase",
        "probability": 0.9374,
        "knownActives": "70 /  13"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.9374,
        "knownActives": "543 /  61"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.9374,
        "knownActives": "464 /  61"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.9374,
        "knownActives": "400 /  139"
      },
      {
        "target": "Cyclin-dependent kinase 1/cyclin B1",
        "commonName": "N/A",
        "uniprotId": "P06493&P14635",
        "chemblId": "CHEMBL1907602",
        "targetClass": "Kinase",
        "probability": 0.9218,
        "knownActives": "76 /  19"
      },
      {
        "target": "Poly [ADP-ribose] polymerase tankyrase-1",
        "commonName": "TNKS",
        "uniprotId": "O95271",
        "chemblId": "CHEMBL6164",
        "targetClass": "Transferase",
        "probability": 0.9107,
        "knownActives": "32 /  28"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.906,
        "knownActives": "184 /  114"
      },
      {
        "target": "Lysine-specific demethylase 4E",
        "commonName": "KDM4E",
        "uniprotId": "B2RXH2",
        "chemblId": "CHEMBL1293226",
        "targetClass": "Eraser",
        "probability": 0.8913,
        "knownActives": "11 /  2"
      },
      {
        "target": "Poly [ADP-ribose] polymerase tankyrase-2",
        "commonName": "TNKS2",
        "uniprotId": "Q9H2K2",
        "chemblId": "CHEMBL6154",
        "targetClass": "Transferase",
        "probability": 0.8836,
        "knownActives": "36 /  12"
      },
      {
        "target": "Casein kinase II subunit alpha",
        "commonName": "CSNK2A1",
        "uniprotId": "P68400",
        "chemblId": "CHEMBL3629",
        "targetClass": "Kinase",
        "probability": 0.8832,
        "knownActives": "40 /  9"
      },
      {
        "target": "Poly [ADP-ribose] polymerase 1",
        "commonName": "PARP1",
        "uniprotId": "P09874",
        "chemblId": "CHEMBL3105",
        "targetClass": "Transferase",
        "probability": 0.8772,
        "knownActives": "217 /  70"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.8738,
        "knownActives": "973 /  121"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.8738,
        "knownActives": "1174 /  129"
      },
      {
        "target": "Serine/threonine-protein kinase PLK1",
        "commonName": "PLK1",
        "uniprotId": "P53350",
        "chemblId": "CHEMBL3024",
        "targetClass": "Kinase",
        "probability": 0.8719,
        "knownActives": "45 /  7"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 1",
        "commonName": "HSD17B1",
        "uniprotId": "P14061",
        "chemblId": "CHEMBL3181",
        "targetClass": "Oxidoreductase",
        "probability": 0.8638,
        "knownActives": "316 /  6"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.8638,
        "knownActives": "69 /  9"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.8619,
        "knownActives": "461 /  15"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.8616,
        "knownActives": "270 /  44"
      },
      {
        "target": "NADPH oxidase 4",
        "commonName": "NOX4",
        "uniprotId": "Q9NPH5",
        "chemblId": "CHEMBL1250375",
        "targetClass": "Oxidoreductase",
        "probability": 0.8612,
        "knownActives": "34 /  8"
      },
      {
        "target": "Dipeptidyl peptidase 4",
        "commonName": "DPP4",
        "uniprotId": "P27487",
        "chemblId": "CHEMBL284",
        "targetClass": "Protease",
        "probability": 0.8592,
        "knownActives": "43 /  9"
      },
      {
        "target": "Myeloperoxidase",
        "commonName": "MPO",
        "uniprotId": "P05164",
        "chemblId": "CHEMBL2439",
        "targetClass": "Oxidoreductase",
        "probability": 0.8579,
        "knownActives": "34 /  4"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.8531,
        "knownActives": "168 /  39"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.8531,
        "knownActives": "181 /  279"
      },
      {
        "target": "Tyrosine-protein kinase Yes",
        "commonName": "YES1",
        "uniprotId": "P07947",
        "chemblId": "CHEMBL2073",
        "targetClass": "Kinase",
        "probability": 0.8502,
        "knownActives": "11 /  5"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.8489,
        "knownActives": "265 /  34"
      },
      {
        "target": "Tyrosine-protein kinase SYK",
        "commonName": "SYK",
        "uniprotId": "P43405",
        "chemblId": "CHEMBL2599",
        "targetClass": "Kinase",
        "probability": 0.8475,
        "knownActives": "65 /  3"
      },
      {
        "target": "Inositol polyphosphate multikinase",
        "commonName": "IPMK",
        "uniprotId": "Q8NFU5",
        "chemblId": "CHEMBL4523401",
        "targetClass": "Transferase",
        "probability": 0.8384,
        "knownActives": "4 /  6"
      },
      {
        "target": "Multidrug resistance-associated protein 1",
        "commonName": "ABCC1",
        "uniprotId": "P33527",
        "chemblId": "CHEMBL3004",
        "targetClass": "Primary active transporter",
        "probability": 0.8384,
        "knownActives": "13 /  83"
      },
      {
        "target": "BDNF/NT-3 growth factors receptor",
        "commonName": "NTRK2",
        "uniprotId": "Q16620",
        "chemblId": "CHEMBL4898",
        "targetClass": "Kinase",
        "probability": 0.8156,
        "knownActives": "6 /  2"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.8156,
        "knownActives": "74 /  4"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.8082,
        "knownActives": "416 /  81"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 0.7823,
        "knownActives": "148 /  6"
      },
      {
        "target": "72 kDa type IV collagenase",
        "commonName": "MMP2",
        "uniprotId": "P08253",
        "chemblId": "CHEMBL333",
        "targetClass": "Protease",
        "probability": 0.7823,
        "knownActives": "201 /  3"
      },
      {
        "target": "Tyrosine-protein kinase Lck",
        "commonName": "LCK",
        "uniprotId": "P06239",
        "chemblId": "CHEMBL258",
        "targetClass": "Kinase",
        "probability": 0.776,
        "knownActives": "99 /  5"
      },
      {
        "target": "Fructose-1,6-bisphosphatase 1",
        "commonName": "FBP1",
        "uniprotId": "P09467",
        "chemblId": "CHEMBL3975",
        "targetClass": "Phosphatase",
        "probability": 0.7688,
        "knownActives": "199 /  1"
      },
      {
        "target": "Aldo-keto reductase family 1 member B10",
        "commonName": "AKR1B10",
        "uniprotId": "O60218",
        "chemblId": "CHEMBL5983",
        "targetClass": "Oxidoreductase",
        "probability": 0.7663,
        "knownActives": "49 /  3"
      },
      {
        "target": "Plasminogen",
        "commonName": "PLG",
        "uniprotId": "P00747",
        "chemblId": "CHEMBL1801",
        "targetClass": "Protease",
        "probability": 0.7651,
        "knownActives": "64 /  7"
      },
      {
        "target": "Cystic fibrosis transmembrane conductance regulator",
        "commonName": "CFTR",
        "uniprotId": "P13569",
        "chemblId": "CHEMBL4051",
        "targetClass": "Other ion channel",
        "probability": 0.7593,
        "knownActives": "20 /  3"
      },
      {
        "target": "Ribosomal protein S6 kinase alpha-3",
        "commonName": "RPS6KA3",
        "uniprotId": "P51812",
        "chemblId": "CHEMBL2345",
        "targetClass": "Kinase",
        "probability": 0.7539,
        "knownActives": "59 /  26"
      },
      {
        "target": "6-phosphofructo-2-kinase/fructose-2,6-bisphosphatase 3",
        "commonName": "PFKFB3",
        "uniprotId": "Q16875",
        "chemblId": "CHEMBL2331053",
        "targetClass": "Enzyme",
        "probability": 0.7534,
        "knownActives": "16 /  3"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.7443,
        "knownActives": "479 /  76"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.7443,
        "knownActives": "215 /  27"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.7311,
        "knownActives": "40 /  28"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.7248,
        "knownActives": "85 /  108"
      },
      {
        "target": "Alpha-amylase 1A",
        "commonName": "AMY1A",
        "uniprotId": "P0DUB6",
        "chemblId": "CHEMBL2478",
        "targetClass": "Hydrolase",
        "probability": 0.7185,
        "knownActives": "7 /  1"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.7128,
        "knownActives": "120 /  34"
      },
      {
        "target": "Protein disulfide-isomerase",
        "commonName": "P4HB",
        "uniprotId": "P07237",
        "chemblId": "CHEMBL5422",
        "targetClass": "Isomerase",
        "probability": 0.7114,
        "knownActives": "117 /  2"
      },
      {
        "target": "Cytochrome P450 1A1",
        "commonName": "CYP1A1",
        "uniprotId": "P04798",
        "chemblId": "CHEMBL2231",
        "targetClass": "Cytochrome P450",
        "probability": 0.6955,
        "knownActives": "7 /  24"
      },
      {
        "target": "Lactoylglutathione lyase",
        "commonName": "GLO1",
        "uniprotId": "Q04760",
        "chemblId": "CHEMBL2424",
        "targetClass": "Lyase",
        "probability": 0.6901,
        "knownActives": "23 /  4"
      },
      {
        "target": "Histone-lysine N-methyltransferase SETD7",
        "commonName": "SETD7",
        "uniprotId": "Q8WTS6",
        "chemblId": "CHEMBL5523",
        "targetClass": "Writer",
        "probability": 0.6852,
        "knownActives": "2 /  3"
      },
      {
        "target": "Histone-lysine N-methyltransferase EZH1",
        "commonName": "EZH1",
        "uniprotId": "Q92800",
        "chemblId": "CHEMBL2189116",
        "targetClass": "Writer",
        "probability": 0.684,
        "knownActives": "1 /  1"
      },
      {
        "target": "Histone-lysine N-methyltransferase 2A",
        "commonName": "KMT2A",
        "uniprotId": "Q03164",
        "chemblId": "CHEMBL1293299",
        "targetClass": "Writer",
        "probability": 0.684,
        "knownActives": "1 /  1"
      },
      {
        "target": "Histone-lysine N-methyltransferase NSD2",
        "commonName": "NSD2",
        "uniprotId": "O96028",
        "chemblId": "CHEMBL3108645",
        "targetClass": "Writer",
        "probability": 0.684,
        "knownActives": "2 /  1"
      },
      {
        "target": "Macrophage metalloelastase",
        "commonName": "MMP12",
        "uniprotId": "P39900",
        "chemblId": "CHEMBL4393",
        "targetClass": "Protease",
        "probability": 0.6734,
        "knownActives": "42 /  3"
      },
      {
        "target": "DNA polymerase eta",
        "commonName": "POLH",
        "uniprotId": "Q9Y253",
        "chemblId": "CHEMBL5542",
        "targetClass": "Transferase",
        "probability": 0.6666,
        "knownActives": "5 /  4"
      },
      {
        "target": "Phospholipase A2, membrane associated",
        "commonName": "PLA2G2A",
        "uniprotId": "P14555",
        "chemblId": "CHEMBL3474",
        "targetClass": "Hydrolase",
        "probability": 0.6613,
        "knownActives": "31 /  2"
      },
      {
        "target": "CDGSH iron-sulfur domain-containing protein 1",
        "commonName": "CISD1",
        "uniprotId": "Q9NZ45",
        "chemblId": "CHEMBL1795168",
        "targetClass": "Unclassified protein",
        "probability": 0.6571,
        "knownActives": "28 /  1"
      }
    ]
  },
  {
    "id": "piperine",
    "name": "Piperine",
    "cid": 638024,
    "smiles": "O=C(/C=C/C=C/c1ccc2c(c1)OCO2)N3CCCCC3",
    "category": "Piperidine Alkaloid",
    "topTarget": "Histone deacetylase 6 (HDAC6)",
    "topTargetUniprot": "Q9UBN7",
    "targetClasses": [
      {
        "label": "Family A G protein-coupled receptor",
        "count": 25,
        "percentage": 25.0,
        "color": "#3B82F6"
      },
      {
        "label": "Protease",
        "count": 12,
        "percentage": 12.0,
        "color": "#10B981"
      },
      {
        "label": "Eraser",
        "count": 9,
        "percentage": 9.0,
        "color": "#F59E0B"
      },
      {
        "label": "Oxidoreductase",
        "count": 7,
        "percentage": 7.0,
        "color": "#EF4444"
      },
      {
        "label": "Kinase",
        "count": 7,
        "percentage": 7.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Hydrolase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Transferase",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Lyase",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Nuclear receptor",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Membrane receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Electrochemical transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Primary active transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Transcription factor",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Other cytosolic protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Phosphodiesterase",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Family C G protein-coupled receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Cytochrome P450",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Enzyme",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      }
    ],
    "targets": [
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 1.0,
        "knownActives": "4905 /  46"
      },
      {
        "target": "Dihydroorotate dehydrogenase (quinone), mitochondrial",
        "commonName": "DHODH",
        "uniprotId": "Q02127",
        "chemblId": "CHEMBL1966",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "1243 /  5"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "1972 /  158"
      },
      {
        "target": "GABA-A receptor; alpha-1/beta-2/gamma-2",
        "commonName": "N/A",
        "uniprotId": "P14867&P47870&P18507",
        "chemblId": "CHEMBL2095172",
        "targetClass": "Ligand-gated ion channel",
        "probability": 1.0,
        "knownActives": "91 /  1"
      },
      {
        "target": "Sigma non-opioid intracellular receptor 1",
        "commonName": "SIGMAR1",
        "uniprotId": "Q99720",
        "chemblId": "CHEMBL287",
        "targetClass": "Membrane receptor",
        "probability": 0.9714,
        "knownActives": "2522 /  163"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 8",
        "commonName": "TRPM8",
        "uniprotId": "Q7Z2W7",
        "chemblId": "CHEMBL1075319",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.9018,
        "knownActives": "443 /  45"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.8562,
        "knownActives": "875 /  129"
      },
      {
        "target": "Sterol O-acyltransferase 1",
        "commonName": "SOAT1",
        "uniprotId": "P35610",
        "chemblId": "CHEMBL2782",
        "targetClass": "Transferase",
        "probability": 0.7138,
        "knownActives": "228 /  2"
      },
      {
        "target": "Sodium-dependent serotonin transporter",
        "commonName": "SLC6A4",
        "uniprotId": "P31645",
        "chemblId": "CHEMBL228",
        "targetClass": "Electrochemical transporter",
        "probability": 0.4666,
        "knownActives": "4891 /  92"
      },
      {
        "target": "5-hydroxytryptamine receptor 2A",
        "commonName": "HTR2A",
        "uniprotId": "P28223",
        "chemblId": "CHEMBL224",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.457,
        "knownActives": "4929 /  212"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.457,
        "knownActives": "4824 /  43"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4475,
        "knownActives": "2947 /  79"
      },
      {
        "target": "5-hydroxytryptamine receptor 7",
        "commonName": "HTR7",
        "uniprotId": "P34969",
        "chemblId": "CHEMBL3155",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4258,
        "knownActives": "2736 /  7"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.4116,
        "knownActives": "3401 /  224"
      },
      {
        "target": "5-hydroxytryptamine receptor 6",
        "commonName": "HTR6",
        "uniprotId": "P50406",
        "chemblId": "CHEMBL3371",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.3939,
        "knownActives": "3569 /  11"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.3285,
        "knownActives": "1945 /  146"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2943,
        "knownActives": "7225 /  294"
      },
      {
        "target": "D(3) dopamine receptor",
        "commonName": "DRD3",
        "uniprotId": "P35462",
        "chemblId": "CHEMBL234",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2785,
        "knownActives": "4918 /  289"
      },
      {
        "target": "C-C chemokine receptor type 2",
        "commonName": "CCR2",
        "uniprotId": "P41597",
        "chemblId": "CHEMBL4015",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2229,
        "knownActives": "1441 /  83"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.203,
        "knownActives": "1019 /  36"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.1829,
        "knownActives": "7498 /  84"
      },
      {
        "target": "Dynamin-1",
        "commonName": "DNM1",
        "uniprotId": "Q05193",
        "chemblId": "CHEMBL4958",
        "targetClass": "Hydrolase",
        "probability": 0.171,
        "knownActives": "23 /  17"
      },
      {
        "target": "Glutamate NMDA receptor; GRIN1/GRIN2A",
        "commonName": "N/A",
        "uniprotId": "Q05586&Q12879",
        "chemblId": "CHEMBL1907604",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.1687,
        "knownActives": "81 /  5"
      },
      {
        "target": "T1R1/T1R3",
        "commonName": "N/A",
        "uniprotId": "Q7RTX0&Q7RTX1",
        "chemblId": "CHEMBL3832641",
        "targetClass": "Family C G protein-coupled receptor",
        "probability": 0.1633,
        "knownActives": "113 /  37"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.1558,
        "knownActives": "1835 /  62"
      },
      {
        "target": "Platelet-activating factor receptor",
        "commonName": "PTAFR",
        "uniprotId": "P25105",
        "chemblId": "CHEMBL250",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1461,
        "knownActives": "204 /  55"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.1229,
        "knownActives": "1332 /  101"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.1187,
        "knownActives": "768 /  126"
      },
      {
        "target": "Melatonin receptor type 1B",
        "commonName": "MTNR1B",
        "uniprotId": "P49286",
        "chemblId": "CHEMBL1946",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0992,
        "knownActives": "796 /  110"
      },
      {
        "target": "Voltage-gated inwardly rectifying potassium channel KCNH2",
        "commonName": "KCNH2",
        "uniprotId": "Q12809",
        "chemblId": "CHEMBL240",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0986,
        "knownActives": "5646 /  102"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0921,
        "knownActives": "2508 /  81"
      },
      {
        "target": "Atypical chemokine receptor 3",
        "commonName": "ACKR3",
        "uniprotId": "P25106",
        "chemblId": "CHEMBL2010631",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0834,
        "knownActives": "1251 /  29"
      },
      {
        "target": "Methionine aminopeptidase 2",
        "commonName": "METAP2",
        "uniprotId": "P50579",
        "chemblId": "CHEMBL3922",
        "targetClass": "Protease",
        "probability": 0.0805,
        "knownActives": "658 /  15"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.0802,
        "knownActives": "6376 /  68"
      },
      {
        "target": "Histone deacetylase 4",
        "commonName": "HDAC4",
        "uniprotId": "P56524",
        "chemblId": "CHEMBL3524",
        "targetClass": "Eraser",
        "probability": 0.0778,
        "knownActives": "921 /  7"
      },
      {
        "target": "Histone deacetylase 8",
        "commonName": "HDAC8",
        "uniprotId": "Q9BY41",
        "chemblId": "CHEMBL3192",
        "targetClass": "Eraser",
        "probability": 0.077,
        "knownActives": "2209 /  15"
      },
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0757,
        "knownActives": "850 /  137"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.0747,
        "knownActives": "2086 /  24"
      },
      {
        "target": "Histone deacetylase 7",
        "commonName": "HDAC7",
        "uniprotId": "Q8WUI4",
        "chemblId": "CHEMBL2716",
        "targetClass": "Eraser",
        "probability": 0.0747,
        "knownActives": "256 /  4"
      },
      {
        "target": "Histone deacetylase 3",
        "commonName": "HDAC3",
        "uniprotId": "O15379",
        "chemblId": "CHEMBL1829",
        "targetClass": "Eraser",
        "probability": 0.0743,
        "knownActives": "1963 /  29"
      },
      {
        "target": "Histone deacetylase 9",
        "commonName": "HDAC9",
        "uniprotId": "Q9UKV0",
        "chemblId": "CHEMBL4145",
        "targetClass": "Eraser",
        "probability": 0.0695,
        "knownActives": "288 /  5"
      },
      {
        "target": "Cathepsin K",
        "commonName": "CTSK",
        "uniprotId": "P43235",
        "chemblId": "CHEMBL268",
        "targetClass": "Protease",
        "probability": 0.0655,
        "knownActives": "1503 /  17"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.0638,
        "knownActives": "295 /  5"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.0565,
        "knownActives": "641 /  35"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.0552,
        "knownActives": "2888 /  53"
      },
      {
        "target": "Melanin-concentrating hormone receptor 1",
        "commonName": "MCHR1",
        "uniprotId": "Q99705",
        "chemblId": "CHEMBL344",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0551,
        "knownActives": "2520 /  144"
      },
      {
        "target": "Bifunctional epoxide hydrolase 2",
        "commonName": "EPHX2",
        "uniprotId": "P34913",
        "chemblId": "CHEMBL2409",
        "targetClass": "Protease",
        "probability": 0.0517,
        "knownActives": "1656 /  33"
      },
      {
        "target": "72 kDa type IV collagenase",
        "commonName": "MMP2",
        "uniprotId": "P08253",
        "chemblId": "CHEMBL333",
        "targetClass": "Protease",
        "probability": 0.0478,
        "knownActives": "2710 /  79"
      },
      {
        "target": "Interstitial collagenase",
        "commonName": "MMP1",
        "uniprotId": "P03956",
        "chemblId": "CHEMBL332",
        "targetClass": "Protease",
        "probability": 0.0462,
        "knownActives": "1843 /  66"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 0.0448,
        "knownActives": "1961 /  69"
      },
      {
        "target": "Thioredoxin reductase 1, cytoplasmic",
        "commonName": "TXNRD1",
        "uniprotId": "Q16881",
        "chemblId": "CHEMBL1927",
        "targetClass": "Oxidoreductase",
        "probability": 0.0425,
        "knownActives": "50 /  4"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.0422,
        "knownActives": "207 /  51"
      },
      {
        "target": "Microtubule-associated protein tau",
        "commonName": "MAPT",
        "uniprotId": "P10636",
        "chemblId": "CHEMBL1293224",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0397,
        "knownActives": "159 /  33"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0374,
        "knownActives": "4118 /  89"
      },
      {
        "target": "Histamine H3 receptor",
        "commonName": "HRH3",
        "uniprotId": "Q9Y5N1",
        "chemblId": "CHEMBL264",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0355,
        "knownActives": "3493 /  199"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4B",
        "commonName": "PDE4B",
        "uniprotId": "Q07343",
        "chemblId": "CHEMBL275",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0354,
        "knownActives": "1493 /  42"
      },
      {
        "target": "Ubiquitin carboxyl-terminal hydrolase 30",
        "commonName": "USP30",
        "uniprotId": "Q70CQ3",
        "chemblId": "CHEMBL4523357",
        "targetClass": "Hydrolase",
        "probability": 0.0352,
        "knownActives": "891 /  7"
      },
      {
        "target": "Cathepsin B",
        "commonName": "CTSB",
        "uniprotId": "P07858",
        "chemblId": "CHEMBL4072",
        "targetClass": "Protease",
        "probability": 0.0352,
        "knownActives": "703 /  4"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0351,
        "knownActives": "1677 /  90"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0351,
        "knownActives": "3293 /  46"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit alpha isoform",
        "commonName": "PIK3CA",
        "uniprotId": "P42336",
        "chemblId": "CHEMBL4005",
        "targetClass": "Transferase",
        "probability": 0.0328,
        "knownActives": "5564 /  2"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 0.0287,
        "knownActives": "3464 /  32"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.0285,
        "knownActives": "902 /  176"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 2",
        "commonName": "DYRK2",
        "uniprotId": "Q92630",
        "chemblId": "CHEMBL4376",
        "targetClass": "Kinase",
        "probability": 0.028,
        "knownActives": "354 /  26"
      },
      {
        "target": "Cyclin-dependent kinase 5/CDK5 activator 1",
        "commonName": "N/A",
        "uniprotId": "Q00535&Q15078",
        "chemblId": "CHEMBL1907600",
        "targetClass": "Kinase",
        "probability": 0.027,
        "knownActives": "646 /  10"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.0269,
        "knownActives": "3204 /  56"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.0269,
        "knownActives": "4545 /  44"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.0269,
        "knownActives": "3774 /  41"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.0269,
        "knownActives": "2601 /  51"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.0269,
        "knownActives": "2472 /  19"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1B",
        "commonName": "DYRK1B",
        "uniprotId": "Q9Y463",
        "chemblId": "CHEMBL5543",
        "targetClass": "Kinase",
        "probability": 0.0264,
        "knownActives": "501 /  14"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0262,
        "knownActives": "868 /  6"
      },
      {
        "target": "Procathepsin L",
        "commonName": "CTSL",
        "uniprotId": "P07711",
        "chemblId": "CHEMBL3837",
        "targetClass": "Protease",
        "probability": 0.026,
        "knownActives": "1196 /  5"
      },
      {
        "target": "Histone acetyltransferase p300",
        "commonName": "EP300",
        "uniprotId": "Q09472",
        "chemblId": "CHEMBL3784",
        "targetClass": "Writer",
        "probability": 0.0256,
        "knownActives": "530 /  13"
      },
      {
        "target": "Cathepsin S",
        "commonName": "CTSS",
        "uniprotId": "P25774",
        "chemblId": "CHEMBL2954",
        "targetClass": "Protease",
        "probability": 0.0254,
        "knownActives": "1884 /  3"
      },
      {
        "target": "Nuclear factor erythroid 2-related factor 2",
        "commonName": "NFE2L2",
        "uniprotId": "Q16236",
        "chemblId": "CHEMBL1075094",
        "targetClass": "Transcription factor",
        "probability": 0.0252,
        "knownActives": "338 /  30"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.0244,
        "knownActives": "277 /  6"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.0236,
        "knownActives": "196 /  49"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 1",
        "commonName": "TRPV1",
        "uniprotId": "Q8NER1",
        "chemblId": "CHEMBL4794",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0224,
        "knownActives": "1502 /  30"
      },
      {
        "target": "Monoglyceride lipase",
        "commonName": "MGLL",
        "uniprotId": "Q99685",
        "chemblId": "CHEMBL4191",
        "targetClass": "Hydrolase",
        "probability": 0.0222,
        "knownActives": "1422 /  24"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit gamma isoform",
        "commonName": "PIK3CG",
        "uniprotId": "P48736",
        "chemblId": "CHEMBL3267",
        "targetClass": "Transferase",
        "probability": 0.0221,
        "knownActives": "2769 /  2"
      },
      {
        "target": "Arachidonate 5-lipoxygenase-activating protein",
        "commonName": "ALOX5AP",
        "uniprotId": "P20292",
        "chemblId": "CHEMBL4550",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0218,
        "knownActives": "2020 /  1"
      },
      {
        "target": "5-hydroxytryptamine receptor 2B",
        "commonName": "HTR2B",
        "uniprotId": "P41595",
        "chemblId": "CHEMBL1833",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0216,
        "knownActives": "1385 /  48"
      },
      {
        "target": "Nuclear receptor ROR-gamma",
        "commonName": "RORC",
        "uniprotId": "P51449",
        "chemblId": "CHEMBL1741186",
        "targetClass": "Nuclear receptor",
        "probability": 0.0216,
        "knownActives": "8506 /  17"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0214,
        "knownActives": "923 /  56"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha4/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P43681",
        "chemblId": "CHEMBL1907589",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0214,
        "knownActives": "761 /  29"
      },
      {
        "target": "Muscarinic acetylcholine receptor M1",
        "commonName": "CHRM1",
        "uniprotId": "P11229",
        "chemblId": "CHEMBL216",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.021,
        "knownActives": "1403 /  57"
      },
      {
        "target": "Muscarinic acetylcholine receptor M5",
        "commonName": "CHRM5",
        "uniprotId": "P08912",
        "chemblId": "CHEMBL2035",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.021,
        "knownActives": "547 /  40"
      },
      {
        "target": "Histamine H1 receptor",
        "commonName": "HRH1",
        "uniprotId": "P35367",
        "chemblId": "CHEMBL231",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0209,
        "knownActives": "1151 /  9"
      },
      {
        "target": "D(4) dopamine receptor",
        "commonName": "DRD4",
        "uniprotId": "P21917",
        "chemblId": "CHEMBL219",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0202,
        "knownActives": "2451 /  50"
      },
      {
        "target": "Dipeptidyl peptidase 2",
        "commonName": "DPP7",
        "uniprotId": "Q9UHL4",
        "chemblId": "CHEMBL3976",
        "targetClass": "Protease",
        "probability": 0.0201,
        "knownActives": "509 /  11"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.0193,
        "knownActives": "8117 /  63"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0193,
        "knownActives": "2993 /  60"
      },
      {
        "target": "Tyrosine-protein kinase JAK1",
        "commonName": "JAK1",
        "uniprotId": "P23458",
        "chemblId": "CHEMBL2835",
        "targetClass": "Kinase",
        "probability": 0.0191,
        "knownActives": "7967 /  1"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.019,
        "knownActives": "396 /  38"
      },
      {
        "target": "Calpain-1 catalytic subunit",
        "commonName": "CAPN1",
        "uniprotId": "P07384",
        "chemblId": "CHEMBL3891",
        "targetClass": "Protease",
        "probability": 0.0188,
        "knownActives": "399 /  5"
      },
      {
        "target": "Nitric oxide synthase, inducible",
        "commonName": "NOS2",
        "uniprotId": "P35228",
        "chemblId": "CHEMBL4481",
        "targetClass": "Enzyme",
        "probability": 0.0184,
        "knownActives": "607 /  7"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.018,
        "knownActives": "612 /  67"
      },
      {
        "target": "Alpha-2C adrenergic receptor",
        "commonName": "ADRA2C",
        "uniprotId": "P18825",
        "chemblId": "CHEMBL1916",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0178,
        "knownActives": "579 /  12"
      },
      {
        "target": "Melanocortin receptor 4",
        "commonName": "MC4R",
        "uniprotId": "P32245",
        "chemblId": "CHEMBL259",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0173,
        "knownActives": "1931 /  14"
      }
    ]
  },
  {
    "id": "resveratrol",
    "name": "Resveratrol",
    "cid": 445154,
    "smiles": "c1cc(ccc1/C=C/c2cc(cc(c2)O)O)O",
    "category": "Stilbenoid Polyphenol",
    "topTarget": "Carbonic anhydrase 5B, mitochondrial (CA5B)",
    "topTargetUniprot": "Q9Y2D0",
    "targetClasses": [
      {
        "label": "Oxidoreductase",
        "count": 16,
        "percentage": 16.0,
        "color": "#3B82F6"
      },
      {
        "label": "Lyase",
        "count": 13,
        "percentage": 13.0,
        "color": "#10B981"
      },
      {
        "label": "Kinase",
        "count": 12,
        "percentage": 12.0,
        "color": "#F59E0B"
      },
      {
        "label": "Protease",
        "count": 9,
        "percentage": 9.0,
        "color": "#EF4444"
      },
      {
        "label": "Cytochrome P450",
        "count": 7,
        "percentage": 7.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Hydrolase",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Transcription factor",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Transferase",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Eraser",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Nuclear receptor",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Secreted protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Other cytosolic protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Primary active transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Structural protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Electrochemical transporter",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Phosphatase",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Surface antigen",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      }
    ],
    "targets": [
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "17 /  16"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "70 /  28"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 1.0,
        "knownActives": "69 /  20"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "15 /  3"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "280 /  37"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 1.0,
        "knownActives": "62 /  67"
      },
      {
        "target": "Nuclear factor erythroid 2-related factor 2",
        "commonName": "NFE2L2",
        "uniprotId": "Q16236",
        "chemblId": "CHEMBL1075094",
        "targetClass": "Transcription factor",
        "probability": 1.0,
        "knownActives": "8 /  58"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "85 /  29"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit beta isoform",
        "commonName": "PIK3CB",
        "uniprotId": "P42338",
        "chemblId": "CHEMBL3145",
        "targetClass": "Transferase",
        "probability": 1.0,
        "knownActives": "36 /  1"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit alpha isoform",
        "commonName": "PIK3CA",
        "uniprotId": "P42336",
        "chemblId": "CHEMBL4005",
        "targetClass": "Transferase",
        "probability": 1.0,
        "knownActives": "143 /  2"
      },
      {
        "target": "Receptor-type tyrosine-protein kinase FLT3",
        "commonName": "FLT3",
        "uniprotId": "P36888",
        "chemblId": "CHEMBL1974",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "64 /  1"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "134 /  73"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "28 /  18"
      },
      {
        "target": "Cytochrome P450 2C19",
        "commonName": "CYP2C19",
        "uniprotId": "P33261",
        "chemblId": "CHEMBL3622",
        "targetClass": "Cytochrome P450",
        "probability": 1.0,
        "knownActives": "7 /  4"
      },
      {
        "target": "Dipeptidyl peptidase 4",
        "commonName": "DPP4",
        "uniprotId": "P27487",
        "chemblId": "CHEMBL284",
        "targetClass": "Protease",
        "probability": 1.0,
        "knownActives": "24 /  7"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "264 /  128"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 1.0,
        "knownActives": "14 /  8"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "31 /  20"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "57 /  34"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "54 /  9"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "180 /  53"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "19 /  20"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "103 /  19"
      },
      {
        "target": "Cytochrome P450 2C9",
        "commonName": "CYP2C9",
        "uniprotId": "P11712",
        "chemblId": "CHEMBL3397",
        "targetClass": "Cytochrome P450",
        "probability": 1.0,
        "knownActives": "9 /  4"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "106 /  4"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "281 /  127"
      },
      {
        "target": "DNA polymerase alpha catalytic subunit",
        "commonName": "POLA1",
        "uniprotId": "P09884",
        "chemblId": "CHEMBL1828",
        "targetClass": "Transferase",
        "probability": 1.0,
        "knownActives": "3 /  1"
      },
      {
        "target": "Cytochrome P450 3A4",
        "commonName": "CYP3A4",
        "uniprotId": "P08684",
        "chemblId": "CHEMBL340",
        "targetClass": "Cytochrome P450",
        "probability": 1.0,
        "knownActives": "7 /  6"
      },
      {
        "target": "Carbonic anhydrase 3",
        "commonName": "CA3",
        "uniprotId": "P07451",
        "chemblId": "CHEMBL2885",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "17 /  7"
      },
      {
        "target": "Cytochrome P450 1A2",
        "commonName": "CYP1A2",
        "uniprotId": "P05177",
        "chemblId": "CHEMBL3356",
        "targetClass": "Cytochrome P450",
        "probability": 1.0,
        "knownActives": "9 /  7"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 1.0,
        "knownActives": "160 /  156"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 1.0,
        "knownActives": "682 /  230"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 1.0,
        "knownActives": "63 /  21"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "341 /  48"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "275 /  41"
      },
      {
        "target": "Transient receptor potential cation channel subfamily A member 1",
        "commonName": "TRPA1",
        "uniprotId": "O75762",
        "chemblId": "CHEMBL6007",
        "targetClass": "Voltage-gated ion channel",
        "probability": 1.0,
        "knownActives": "9 /  9"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 1.0,
        "knownActives": "259 /  32"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 0.9555,
        "knownActives": "101 /  65"
      },
      {
        "target": "A disintegrin and metalloproteinase with thrombospondin motifs 5",
        "commonName": "ADAMTS5",
        "uniprotId": "Q9UNA0",
        "chemblId": "CHEMBL2285",
        "targetClass": "Protease",
        "probability": 0.9504,
        "knownActives": "48 /  2"
      },
      {
        "target": "Tyrosine-protein kinase Lck",
        "commonName": "LCK",
        "uniprotId": "P06239",
        "chemblId": "CHEMBL258",
        "targetClass": "Kinase",
        "probability": 0.9446,
        "knownActives": "59 /  11"
      },
      {
        "target": "Lactoylglutathione lyase",
        "commonName": "GLO1",
        "uniprotId": "Q04760",
        "chemblId": "CHEMBL2424",
        "targetClass": "Lyase",
        "probability": 0.9302,
        "knownActives": "16 /  7"
      },
      {
        "target": "Tyrosine-protein kinase SYK",
        "commonName": "SYK",
        "uniprotId": "P43405",
        "chemblId": "CHEMBL2599",
        "targetClass": "Kinase",
        "probability": 0.9302,
        "knownActives": "27 /  1"
      },
      {
        "target": "Macrophage metalloelastase",
        "commonName": "MMP12",
        "uniprotId": "P39900",
        "chemblId": "CHEMBL4393",
        "targetClass": "Protease",
        "probability": 0.9302,
        "knownActives": "20 /  4"
      },
      {
        "target": "Neutrophil collagenase",
        "commonName": "MMP8",
        "uniprotId": "P22894",
        "chemblId": "CHEMBL4588",
        "targetClass": "Protease",
        "probability": 0.9302,
        "knownActives": "27 /  2"
      },
      {
        "target": "A disintegrin and metalloproteinase with thrombospondin motifs 4",
        "commonName": "ADAMTS4",
        "uniprotId": "O75173",
        "chemblId": "CHEMBL2318",
        "targetClass": "Protease",
        "probability": 0.9302,
        "knownActives": "4 /  2"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.9067,
        "knownActives": "44 /  23"
      },
      {
        "target": "Synaptojanin-2",
        "commonName": "SYNJ2",
        "uniprotId": "O15056",
        "chemblId": "CHEMBL4523129",
        "targetClass": "Hydrolase",
        "probability": 0.8505,
        "knownActives": "8 /  2"
      },
      {
        "target": "E3 ubiquitin-protein ligase XIAP",
        "commonName": "XIAP",
        "uniprotId": "P98170",
        "chemblId": "CHEMBL4198",
        "targetClass": "Other cytosolic protein",
        "probability": 0.7962,
        "knownActives": "7 /  7"
      },
      {
        "target": "Parkinson disease protein 7",
        "commonName": "PARK7",
        "uniprotId": "Q99497",
        "chemblId": "CHEMBL5169188",
        "targetClass": "Hydrolase",
        "probability": 0.7519,
        "knownActives": "1 /  1"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.7138,
        "knownActives": "125 /  79"
      },
      {
        "target": "Neutrophil elastase",
        "commonName": "ELANE",
        "uniprotId": "P08246",
        "chemblId": "CHEMBL248",
        "targetClass": "Protease",
        "probability": 0.6588,
        "knownActives": "27 /  11"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.597,
        "knownActives": "240 /  81"
      },
      {
        "target": "Transcription factor p65",
        "commonName": "RELA",
        "uniprotId": "Q04206",
        "chemblId": "CHEMBL5533",
        "targetClass": "Transcription factor",
        "probability": 0.5449,
        "knownActives": "8 /  14"
      },
      {
        "target": "E3 ubiquitin-protein ligase pellino homolog 1",
        "commonName": "PELI1",
        "uniprotId": "Q96FA3",
        "chemblId": "CHEMBL6066217",
        "targetClass": "Transferase",
        "probability": 0.5198,
        "knownActives": "4 /  4"
      },
      {
        "target": "Aryl hydrocarbon receptor",
        "commonName": "AHR",
        "uniprotId": "P35869",
        "chemblId": "CHEMBL3201",
        "targetClass": "Transcription factor",
        "probability": 0.4485,
        "knownActives": "9 /  7"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.4343,
        "knownActives": "72 /  67"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.4215,
        "knownActives": "53 /  19"
      },
      {
        "target": "COP9 signalosome complex subunit 5",
        "commonName": "COPS5",
        "uniprotId": "Q92905",
        "chemblId": "CHEMBL4105809",
        "targetClass": "Hydrolase",
        "probability": 0.3893,
        "knownActives": "6 /  1"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.3759,
        "knownActives": "310 /  20"
      },
      {
        "target": "Protein-tyrosine kinase 2-beta",
        "commonName": "PTK2B",
        "uniprotId": "Q14289",
        "chemblId": "CHEMBL5469",
        "targetClass": "Kinase",
        "probability": 0.367,
        "knownActives": "16 /  1"
      },
      {
        "target": "Cyclin-dependent kinase 2/cyclin E1",
        "commonName": "N/A",
        "uniprotId": "P24864&P24941",
        "chemblId": "CHEMBL1907605",
        "targetClass": "Kinase",
        "probability": 0.367,
        "knownActives": "40 /  1"
      },
      {
        "target": "Islet amyloid polypeptide",
        "commonName": "IAPP",
        "uniprotId": "P10997",
        "chemblId": "CHEMBL1914266",
        "targetClass": "Secreted protein",
        "probability": 0.3615,
        "knownActives": "17 /  9"
      },
      {
        "target": "Cytochrome P450 1A1",
        "commonName": "CYP1A1",
        "uniprotId": "P04798",
        "chemblId": "CHEMBL2231",
        "targetClass": "Cytochrome P450",
        "probability": 0.3568,
        "knownActives": "8 /  22"
      },
      {
        "target": "Tubulin beta-1 chain",
        "commonName": "TUBB1",
        "uniprotId": "Q9H4B7",
        "chemblId": "CHEMBL1915",
        "targetClass": "Structural protein",
        "probability": 0.3405,
        "knownActives": "16 /  31"
      },
      {
        "target": "72 kDa type IV collagenase",
        "commonName": "MMP2",
        "uniprotId": "P08253",
        "chemblId": "CHEMBL333",
        "targetClass": "Protease",
        "probability": 0.2783,
        "knownActives": "124 /  62"
      },
      {
        "target": "Interstitial collagenase",
        "commonName": "MMP1",
        "uniprotId": "P03956",
        "chemblId": "CHEMBL332",
        "targetClass": "Protease",
        "probability": 0.2783,
        "knownActives": "85 /  58"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.2679,
        "knownActives": "660 /  113"
      },
      {
        "target": "G-protein coupled receptor 35",
        "commonName": "GPR35",
        "uniprotId": "Q9HC97",
        "chemblId": "CHEMBL1293267",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2346,
        "knownActives": "27 /  3"
      },
      {
        "target": "Dihydroorotate dehydrogenase (quinone), mitochondrial",
        "commonName": "DHODH",
        "uniprotId": "Q02127",
        "chemblId": "CHEMBL1966",
        "targetClass": "Oxidoreductase",
        "probability": 0.2346,
        "knownActives": "35 /  5"
      },
      {
        "target": "Ribosomal protein S6 kinase alpha-3",
        "commonName": "RPS6KA3",
        "uniprotId": "P51812",
        "chemblId": "CHEMBL2345",
        "targetClass": "Kinase",
        "probability": 0.2346,
        "knownActives": "40 /  1"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.2346,
        "knownActives": "18 /  1"
      },
      {
        "target": "Tubulin beta-3 chain",
        "commonName": "TUBB3",
        "uniprotId": "Q13509",
        "chemblId": "CHEMBL2597",
        "targetClass": "Structural protein",
        "probability": 0.2298,
        "knownActives": "1 /  1"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.2143,
        "knownActives": "14 /  65"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.2017,
        "knownActives": "21 /  5"
      },
      {
        "target": "Microtubule-associated protein tau",
        "commonName": "MAPT",
        "uniprotId": "P10636",
        "chemblId": "CHEMBL1293224",
        "targetClass": "Other cytosolic protein",
        "probability": 0.1749,
        "knownActives": "23 /  19"
      },
      {
        "target": "CDGSH iron-sulfur domain-containing protein 1",
        "commonName": "CISD1",
        "uniprotId": "Q9NZ45",
        "chemblId": "CHEMBL1795168",
        "targetClass": "Unclassified protein",
        "probability": 0.1744,
        "knownActives": "22 /  6"
      },
      {
        "target": "Lysine-specific demethylase 5B",
        "commonName": "KDM5B",
        "uniprotId": "Q9UGL1",
        "chemblId": "CHEMBL3774295",
        "targetClass": "Eraser",
        "probability": 0.1645,
        "knownActives": "20 /  1"
      },
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 0.144,
        "knownActives": "67 /  21"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 0.1389,
        "knownActives": "114 /  19"
      },
      {
        "target": "Type-1 angiotensin II receptor",
        "commonName": "AGTR1",
        "uniprotId": "P30556",
        "chemblId": "CHEMBL227",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1303,
        "knownActives": "1 /  1"
      },
      {
        "target": "Indoleamine 2,3-dioxygenase 1",
        "commonName": "IDO1",
        "uniprotId": "P14902",
        "chemblId": "CHEMBL4685",
        "targetClass": "Oxidoreductase",
        "probability": 0.1003,
        "knownActives": "143 /  6"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 0.0995,
        "knownActives": "123 /  11"
      },
      {
        "target": "Receptor tyrosine-protein kinase erbB-2",
        "commonName": "ERBB2",
        "uniprotId": "P04626",
        "chemblId": "CHEMBL1824",
        "targetClass": "Kinase",
        "probability": 0.0844,
        "knownActives": "52 /  11"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.0838,
        "knownActives": "108 /  34"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.081,
        "knownActives": "53 /  8"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0711,
        "knownActives": "20 /  35"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.0696,
        "knownActives": "219 /  19"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha4/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P43681",
        "chemblId": "CHEMBL1907589",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0694,
        "knownActives": "16 /  20"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.0656,
        "knownActives": "87 /  15"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.0647,
        "knownActives": "93 /  40"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.0594,
        "knownActives": "56 /  21"
      },
      {
        "target": "Tissue factor",
        "commonName": "F3",
        "uniprotId": "P13726",
        "chemblId": "CHEMBL4081",
        "targetClass": "Surface antigen",
        "probability": 0.0592,
        "knownActives": "11 /  9"
      },
      {
        "target": "Glutathione reductase, mitochondrial",
        "commonName": "GSR",
        "uniprotId": "P00390",
        "chemblId": "CHEMBL2755",
        "targetClass": "Oxidoreductase",
        "probability": 0.0582,
        "knownActives": "4 /  5"
      },
      {
        "target": "3-hydroxy-3-methylglutaryl-coenzyme A reductase",
        "commonName": "HMGCR",
        "uniprotId": "P04035",
        "chemblId": "CHEMBL402",
        "targetClass": "Oxidoreductase",
        "probability": 0.0551,
        "knownActives": "5 /  1"
      },
      {
        "target": "Serine/threonine-protein kinase PLK1",
        "commonName": "PLK1",
        "uniprotId": "P53350",
        "chemblId": "CHEMBL3024",
        "targetClass": "Kinase",
        "probability": 0.0546,
        "knownActives": "30 /  1"
      },
      {
        "target": "Eukaryotic elongation factor 2 kinase",
        "commonName": "EEF2K",
        "uniprotId": "O00418",
        "chemblId": "CHEMBL5026",
        "targetClass": "Kinase",
        "probability": 0.0546,
        "knownActives": "3 /  3"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0517,
        "knownActives": "70 /  2"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.0507,
        "knownActives": "30 /  6"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX12",
        "commonName": "ALOX12",
        "uniprotId": "P18054",
        "chemblId": "CHEMBL3687",
        "targetClass": "Enzyme",
        "probability": 0.0463,
        "knownActives": "51 /  7"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.0462,
        "knownActives": "4 /  4"
      }
    ]
  },
  {
    "id": "rosmarinic_acid",
    "name": "Rosmarinic acid",
    "cid": 5281792,
    "smiles": "O=C(O)C(OC(=O)/C=C/c1ccc(O)c(O)c1)Cc2ccc(O)c(O)c2",
    "category": "Polyphenolic Ester",
    "topTarget": "Alpha-synuclein (SNCA)",
    "topTargetUniprot": "P37840",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 17,
        "percentage": 17.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 16,
        "percentage": 16.0,
        "color": "#10B981"
      },
      {
        "label": "Protease",
        "count": 10,
        "percentage": 10.0,
        "color": "#F59E0B"
      },
      {
        "label": "Lyase",
        "count": 10,
        "percentage": 10.0,
        "color": "#EF4444"
      },
      {
        "label": "Nuclear receptor",
        "count": 5,
        "percentage": 5.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Hydrolase",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Transferase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Electrochemical transporter",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Eraser",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Transcription factor",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Isomerase",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Primary active transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Phosphatase",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Other cytosolic protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Secreted protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Cytochrome P450",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      }
    ],
    "targets": [
      {
        "target": "Alpha-synuclein",
        "commonName": "SNCA",
        "uniprotId": "P37840",
        "chemblId": "CHEMBL6152",
        "targetClass": "Unclassified protein",
        "probability": 1.0,
        "knownActives": "70 /  18"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "77 /  11"
      },
      {
        "target": "Ectonucleotide pyrophosphatase/phosphodiesterase family member 1",
        "commonName": "ENPP1",
        "uniprotId": "P22413",
        "chemblId": "CHEMBL5925",
        "targetClass": "Enzyme",
        "probability": 1.0,
        "knownActives": "34 /  1"
      },
      {
        "target": "Aldo-keto reductase family 1 member B1",
        "commonName": "AKR1B1",
        "uniprotId": "P15121",
        "chemblId": "CHEMBL1900",
        "targetClass": "Oxidoreductase",
        "probability": 1.0,
        "knownActives": "78 /  27"
      },
      {
        "target": "Tyrosine-protein kinase Fyn",
        "commonName": "FYN",
        "uniprotId": "P06241",
        "chemblId": "CHEMBL1841",
        "targetClass": "Kinase",
        "probability": 1.0,
        "knownActives": "14 /  7"
      },
      {
        "target": "Interstitial collagenase",
        "commonName": "MMP1",
        "uniprotId": "P03956",
        "chemblId": "CHEMBL332",
        "targetClass": "Protease",
        "probability": 1.0,
        "knownActives": "39 /  19"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 1.0,
        "knownActives": "34 /  11"
      },
      {
        "target": "Macrophage metalloelastase",
        "commonName": "MMP12",
        "uniprotId": "P39900",
        "chemblId": "CHEMBL4393",
        "targetClass": "Protease",
        "probability": 0.9867,
        "knownActives": "14 /  8"
      },
      {
        "target": "Matrix metalloproteinase-9",
        "commonName": "MMP9",
        "uniprotId": "P14780",
        "chemblId": "CHEMBL321",
        "targetClass": "Protease",
        "probability": 0.9867,
        "knownActives": "46 /  16"
      },
      {
        "target": "72 kDa type IV collagenase",
        "commonName": "MMP2",
        "uniprotId": "P08253",
        "chemblId": "CHEMBL333",
        "targetClass": "Protease",
        "probability": 0.9867,
        "knownActives": "76 /  17"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.9578,
        "knownActives": "76 /  36"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.9578,
        "knownActives": "40 /  23"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.9578,
        "knownActives": "198 /  56"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.9578,
        "knownActives": "192 /  60"
      },
      {
        "target": "Stromelysin-1",
        "commonName": "MMP3",
        "uniprotId": "P08254",
        "chemblId": "CHEMBL283",
        "targetClass": "Protease",
        "probability": 0.5987,
        "knownActives": "7 /  4"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.5334,
        "knownActives": "309 /  288"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.5305,
        "knownActives": "92 /  114"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.5262,
        "knownActives": "63 /  90"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.4987,
        "knownActives": "140 /  50"
      },
      {
        "target": "Collagenase 3",
        "commonName": "MMP13",
        "uniprotId": "P45452",
        "chemblId": "CHEMBL280",
        "targetClass": "Protease",
        "probability": 0.4813,
        "knownActives": "7 /  6"
      },
      {
        "target": "Tyrosine-protein kinase Lck",
        "commonName": "LCK",
        "uniprotId": "P06239",
        "chemblId": "CHEMBL258",
        "targetClass": "Kinase",
        "probability": 0.4684,
        "knownActives": "39 /  25"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.4311,
        "knownActives": "28 /  82"
      },
      {
        "target": "Bifunctional epoxide hydrolase 2",
        "commonName": "EPHX2",
        "uniprotId": "P34913",
        "chemblId": "CHEMBL2409",
        "targetClass": "Protease",
        "probability": 0.407,
        "knownActives": "9 /  10"
      },
      {
        "target": "Aldo-keto reductase family 1 member B10",
        "commonName": "AKR1B10",
        "uniprotId": "O60218",
        "chemblId": "CHEMBL5983",
        "targetClass": "Oxidoreductase",
        "probability": 0.4044,
        "knownActives": "20 /  19"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.3907,
        "knownActives": "169 /  63"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.3891,
        "knownActives": "47 /  17"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.377,
        "knownActives": "73 /  26"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.377,
        "knownActives": "205 /  69"
      },
      {
        "target": "Aldo-keto reductase family 1 member C3",
        "commonName": "AKR1C3",
        "uniprotId": "P42330",
        "chemblId": "CHEMBL4681",
        "targetClass": "Oxidoreductase",
        "probability": 0.3567,
        "knownActives": "17 /  77"
      },
      {
        "target": "Receptor tyrosine-protein kinase erbB-2",
        "commonName": "ERBB2",
        "uniprotId": "P04626",
        "chemblId": "CHEMBL1824",
        "targetClass": "Kinase",
        "probability": 0.3435,
        "knownActives": "29 /  4"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 0.3359,
        "knownActives": "12 /  19"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.3359,
        "knownActives": "21 /  24"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.3359,
        "knownActives": "21 /  19"
      },
      {
        "target": "Hepatocyte growth factor receptor",
        "commonName": "MET",
        "uniprotId": "P08581",
        "chemblId": "CHEMBL3717",
        "targetClass": "Kinase",
        "probability": 0.3215,
        "knownActives": "98 /  32"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2278,
        "knownActives": "10 /  18"
      },
      {
        "target": "Mitogen-activated protein kinase 1",
        "commonName": "MAPK1",
        "uniprotId": "P28482",
        "chemblId": "CHEMBL4040",
        "targetClass": "Kinase",
        "probability": 0.2197,
        "knownActives": "12 /  2"
      },
      {
        "target": "Aldo-keto reductase family 1 member C2",
        "commonName": "AKR1C2",
        "uniprotId": "P52895",
        "chemblId": "CHEMBL5847",
        "targetClass": "Oxidoreductase",
        "probability": 0.2061,
        "knownActives": "3 /  8"
      },
      {
        "target": "Aldo-keto reductase family 1 member C4",
        "commonName": "AKR1C4",
        "uniprotId": "P17516",
        "chemblId": "CHEMBL4999",
        "targetClass": "Oxidoreductase",
        "probability": 0.2061,
        "knownActives": "2 /  1"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.1786,
        "knownActives": "19 /  257"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.1618,
        "knownActives": "258 /  64"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.1595,
        "knownActives": "72 /  217"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.1094,
        "knownActives": "60 /  18"
      },
      {
        "target": "Xanthine dehydrogenase/oxidase",
        "commonName": "XDH",
        "uniprotId": "P47989",
        "chemblId": "CHEMBL1929",
        "targetClass": "Oxidoreductase",
        "probability": 0.0997,
        "knownActives": "90 /  9"
      },
      {
        "target": "Protein kinase C alpha type",
        "commonName": "PRKCA",
        "uniprotId": "P17252",
        "chemblId": "CHEMBL299",
        "targetClass": "Kinase",
        "probability": 0.0862,
        "knownActives": "103 /  130"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.08,
        "knownActives": "57 /  80"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.0769,
        "knownActives": "3 /  8"
      },
      {
        "target": "Synaptojanin-2",
        "commonName": "SYNJ2",
        "uniprotId": "O15056",
        "chemblId": "CHEMBL4523129",
        "targetClass": "Hydrolase",
        "probability": 0.0764,
        "knownActives": "15 /  7"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.0724,
        "knownActives": "45 /  52"
      },
      {
        "target": "Peroxisome proliferator-activated receptor alpha",
        "commonName": "PPARA",
        "uniprotId": "Q07869",
        "chemblId": "CHEMBL239",
        "targetClass": "Nuclear receptor",
        "probability": 0.063,
        "knownActives": "6 /  214"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.0618,
        "knownActives": "43 /  123"
      },
      {
        "target": "Peroxisome proliferator-activated receptor delta",
        "commonName": "PPARD",
        "uniprotId": "Q03181",
        "chemblId": "CHEMBL3979",
        "targetClass": "Nuclear receptor",
        "probability": 0.0522,
        "knownActives": "6 /  93"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.0457,
        "knownActives": "83 /  23"
      },
      {
        "target": "Neutrophil elastase",
        "commonName": "ELANE",
        "uniprotId": "P08246",
        "chemblId": "CHEMBL248",
        "targetClass": "Protease",
        "probability": 0.0394,
        "knownActives": "21 /  9"
      },
      {
        "target": "Short transient receptor potential channel 5",
        "commonName": "TRPC5",
        "uniprotId": "Q9UL62",
        "chemblId": "CHEMBL1250411",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0362,
        "knownActives": "5 /  4"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.0362,
        "knownActives": "64 /  11"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.0356,
        "knownActives": "53 /  34"
      },
      {
        "target": "Glycogen phosphorylase, liver form",
        "commonName": "PYGL",
        "uniprotId": "P06737",
        "chemblId": "CHEMBL2568",
        "targetClass": "Transferase",
        "probability": 0.035,
        "knownActives": "10 /  1"
      },
      {
        "target": "DNA topoisomerase 1",
        "commonName": "TOP1",
        "uniprotId": "P11387",
        "chemblId": "CHEMBL1781",
        "targetClass": "Isomerase",
        "probability": 0.0244,
        "knownActives": "29 /  3"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.0243,
        "knownActives": "31 /  159"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.0233,
        "knownActives": "65 /  205"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 3",
        "commonName": "TRPV3",
        "uniprotId": "Q8NET8",
        "chemblId": "CHEMBL5522",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.023,
        "knownActives": "2 /  2"
      },
      {
        "target": "Glucose-6-phosphate exchanger SLC37A4",
        "commonName": "SLC37A4",
        "uniprotId": "O43826",
        "chemblId": "CHEMBL3217398",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0222,
        "knownActives": "3 /  5"
      },
      {
        "target": "Multidrug resistance-associated protein 1",
        "commonName": "ABCC1",
        "uniprotId": "P33527",
        "chemblId": "CHEMBL3004",
        "targetClass": "Primary active transporter",
        "probability": 0.0215,
        "knownActives": "13 /  14"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.0172,
        "knownActives": "26 /  83"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 2",
        "commonName": "DYRK2",
        "uniprotId": "Q92630",
        "chemblId": "CHEMBL4376",
        "targetClass": "Kinase",
        "probability": 0.0169,
        "knownActives": "14 /  6"
      },
      {
        "target": "Aryl hydrocarbon receptor",
        "commonName": "AHR",
        "uniprotId": "P35869",
        "chemblId": "CHEMBL3201",
        "targetClass": "Transcription factor",
        "probability": 0.0149,
        "knownActives": "7 /  6"
      },
      {
        "target": "Farnesyl pyrophosphate synthase",
        "commonName": "FDPS",
        "uniprotId": "P14324",
        "chemblId": "CHEMBL1782",
        "targetClass": "Transferase",
        "probability": 0.0142,
        "knownActives": "157 /  10"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.0136,
        "knownActives": "336 /  114"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.0136,
        "knownActives": "101 /  25"
      },
      {
        "target": "Phosphatidylinositol 4,5-bisphosphate 3-kinase catalytic subunit alpha isoform",
        "commonName": "PIK3CA",
        "uniprotId": "P42336",
        "chemblId": "CHEMBL4005",
        "targetClass": "Transferase",
        "probability": 0.0121,
        "knownActives": "57 /  4"
      },
      {
        "target": "Lysine-specific demethylase 6B",
        "commonName": "KDM6B",
        "uniprotId": "O15054",
        "chemblId": "CHEMBL1938211",
        "targetClass": "Eraser",
        "probability": 0.012,
        "knownActives": "3 /  1"
      },
      {
        "target": "Dual specificity protein kinase CLK1",
        "commonName": "CLK1",
        "uniprotId": "P49759",
        "chemblId": "CHEMBL4224",
        "targetClass": "Kinase",
        "probability": 0.0117,
        "knownActives": "19 /  5"
      },
      {
        "target": "Dipeptidyl peptidase 4",
        "commonName": "DPP4",
        "uniprotId": "P27487",
        "chemblId": "CHEMBL284",
        "targetClass": "Protease",
        "probability": 0.0114,
        "knownActives": "23 /  5"
      },
      {
        "target": "Transcription factor p65",
        "commonName": "RELA",
        "uniprotId": "Q04206",
        "chemblId": "CHEMBL5533",
        "targetClass": "Transcription factor",
        "probability": 0.011,
        "knownActives": "7 /  9"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 0.0101,
        "knownActives": "21 /  41"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.0099,
        "knownActives": "99 /  50"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1B",
        "commonName": "DYRK1B",
        "uniprotId": "Q9Y463",
        "chemblId": "CHEMBL5543",
        "targetClass": "Kinase",
        "probability": 0.0096,
        "knownActives": "18 /  9"
      },
      {
        "target": "Monoglyceride lipase",
        "commonName": "MGLL",
        "uniprotId": "Q99685",
        "chemblId": "CHEMBL4191",
        "targetClass": "Hydrolase",
        "probability": 0.0087,
        "knownActives": "27 /  8"
      },
      {
        "target": "Hepatic sodium/bile acid cotransporter",
        "commonName": "SLC10A1",
        "uniprotId": "Q14973",
        "chemblId": "CHEMBL5287",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0078,
        "knownActives": "1 /  1"
      },
      {
        "target": "Heat shock protein HSP 90-alpha",
        "commonName": "HSP90AA1",
        "uniprotId": "P07900",
        "chemblId": "CHEMBL3880",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0077,
        "knownActives": "216 /  9"
      },
      {
        "target": "14-3-3 protein gamma",
        "commonName": "YWHAG",
        "uniprotId": "P61981",
        "chemblId": "CHEMBL1293296",
        "targetClass": "Unclassified protein",
        "probability": 0.0076,
        "knownActives": "2 /  2"
      },
      {
        "target": "Adenosine receptor A1",
        "commonName": "ADORA1",
        "uniprotId": "P30542",
        "chemblId": "CHEMBL226",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0075,
        "knownActives": "24 /  3"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 11",
        "commonName": "PTPN11",
        "uniprotId": "Q06124",
        "chemblId": "CHEMBL3864",
        "targetClass": "Phosphatase",
        "probability": 0.0073,
        "knownActives": "29 /  7"
      },
      {
        "target": "Lysine-specific demethylase 5B",
        "commonName": "KDM5B",
        "uniprotId": "Q9UGL1",
        "chemblId": "CHEMBL3774295",
        "targetClass": "Eraser",
        "probability": 0.0064,
        "knownActives": "5 /  1"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.0057,
        "knownActives": "3 /  14"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.0057,
        "knownActives": "8 /  14"
      },
      {
        "target": "Cyclin-dependent kinase 2",
        "commonName": "CDK2",
        "uniprotId": "P24941",
        "chemblId": "CHEMBL301",
        "targetClass": "Kinase",
        "probability": 0.0056,
        "knownActives": "87 /  1"
      },
      {
        "target": "Mannose-6-phosphate isomerase",
        "commonName": "MPI",
        "uniprotId": "P34949",
        "chemblId": "CHEMBL2758",
        "targetClass": "Isomerase",
        "probability": 0.0053,
        "knownActives": "8 /  1"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.0053,
        "knownActives": "76 /  78"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 1",
        "commonName": "HSD17B1",
        "uniprotId": "P14061",
        "chemblId": "CHEMBL3181",
        "targetClass": "Oxidoreductase",
        "probability": 0.0049,
        "knownActives": "78 /  15"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0048,
        "knownActives": "7 /  56"
      },
      {
        "target": "Poly [ADP-ribose] polymerase 1",
        "commonName": "PARP1",
        "uniprotId": "P09874",
        "chemblId": "CHEMBL3105",
        "targetClass": "Transferase",
        "probability": 0.0048,
        "knownActives": "142 /  6"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0047,
        "knownActives": "105 /  14"
      },
      {
        "target": "Adenosine receptor A2a",
        "commonName": "ADORA2A",
        "uniprotId": "P29274",
        "chemblId": "CHEMBL251",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0046,
        "knownActives": "23 /  3"
      },
      {
        "target": "Insulin-like growth factor 1 receptor",
        "commonName": "IGF1R",
        "uniprotId": "P08069",
        "chemblId": "CHEMBL1957",
        "targetClass": "Kinase",
        "probability": 0.0041,
        "knownActives": "30 /  7"
      },
      {
        "target": "NAD-dependent protein deacetylase sirtuin-1",
        "commonName": "SIRT1",
        "uniprotId": "Q96EB6",
        "chemblId": "CHEMBL4506",
        "targetClass": "Eraser",
        "probability": 0.004,
        "knownActives": "20 /  36"
      },
      {
        "target": "Proto-oncogene tyrosine-protein kinase Src",
        "commonName": "SRC",
        "uniprotId": "P12931",
        "chemblId": "CHEMBL267",
        "targetClass": "Kinase",
        "probability": 0.0034,
        "knownActives": "118 /  9"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.003,
        "knownActives": "30 /  3"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.0029,
        "knownActives": "27 /  36"
      },
      {
        "target": "DNA repair nuclease/redox regulator APEX1",
        "commonName": "APEX1",
        "uniprotId": "P27695",
        "chemblId": "CHEMBL5619",
        "targetClass": "Enzyme",
        "probability": 0.0029,
        "knownActives": "12 /  5"
      }
    ]
  },
  {
    "id": "santamarine",
    "name": "Santamarine",
    "cid": 91457,
    "smiles": "CC12CCC(=O)C=C1CCC3C2CC(C(=O)O3)=C",
    "category": "Eudesmanolide Sesquiterpene",
    "topTarget": "Aromatase (CYP19A1)",
    "topTargetUniprot": "P11511",
    "targetClasses": [
      {
        "label": "Oxidoreductase",
        "count": 11,
        "percentage": 11.0,
        "color": "#3B82F6"
      },
      {
        "label": "Kinase",
        "count": 11,
        "percentage": 11.0,
        "color": "#10B981"
      },
      {
        "label": "Protease",
        "count": 11,
        "percentage": 11.0,
        "color": "#F59E0B"
      },
      {
        "label": "Nuclear receptor",
        "count": 8,
        "percentage": 8.0,
        "color": "#EF4444"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 7,
        "percentage": 7.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Hydrolase",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Phosphatase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Transferase",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Secreted protein",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Reader",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Eraser",
        "count": 4,
        "percentage": 4.0,
        "color": "#84CC16"
      },
      {
        "label": "Cytochrome P450",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Electrochemical transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#3B82F6"
      },
      {
        "label": "Transcription factor",
        "count": 3,
        "percentage": 3.0,
        "color": "#10B981"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Other ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Unclassified protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Enzyme",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Primary active transporter",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Isomerase",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Phosphodiesterase",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#A855F7"
      },
      {
        "label": "Ligase",
        "count": 1,
        "percentage": 1.0,
        "color": "#64748B"
      }
    ],
    "targets": [
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.8454,
        "knownActives": "1522 /  395"
      },
      {
        "target": "Ubiquitin-conjugating enzyme E2 D3",
        "commonName": "UBE2D3",
        "uniprotId": "P61077",
        "chemblId": "CHEMBL4105911",
        "targetClass": "Transferase",
        "probability": 0.8394,
        "knownActives": "5 /  4"
      },
      {
        "target": "NACHT, LRR and PYD domains-containing protein 3",
        "commonName": "NLRP3",
        "uniprotId": "Q96P20",
        "chemblId": "CHEMBL1741208",
        "targetClass": "Unclassified protein",
        "probability": 0.8056,
        "knownActives": "398 /  39"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.798,
        "knownActives": "111 /  5"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.7909,
        "knownActives": "2098 /  23"
      },
      {
        "target": "Mineralocorticoid receptor",
        "commonName": "NR3C2",
        "uniprotId": "P08235",
        "chemblId": "CHEMBL1994",
        "targetClass": "Nuclear receptor",
        "probability": 0.7754,
        "knownActives": "564 /  39"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.7554,
        "knownActives": "2061 /  100"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.7442,
        "knownActives": "222 /  6"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.6909,
        "knownActives": "2905 /  23"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.6752,
        "knownActives": "4578 /  4"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.6423,
        "knownActives": "2829 /  24"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.6389,
        "knownActives": "1449 /  131"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.6332,
        "knownActives": "2600 /  1"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.6331,
        "knownActives": "508 /  104"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.605,
        "knownActives": "1545 /  2"
      },
      {
        "target": "Steroid 17-alpha-hydroxylase/17,20 lyase",
        "commonName": "CYP17A1",
        "uniprotId": "P05093",
        "chemblId": "CHEMBL3522",
        "targetClass": "Cytochrome P450",
        "probability": 0.5925,
        "knownActives": "452 /  50"
      },
      {
        "target": "Progesterone receptor",
        "commonName": "PGR",
        "uniprotId": "P06401",
        "chemblId": "CHEMBL208",
        "targetClass": "Nuclear receptor",
        "probability": 0.5865,
        "knownActives": "1068 /  64"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.5819,
        "knownActives": "3103 /  2"
      },
      {
        "target": "TGF-beta receptor type-1",
        "commonName": "TGFBR1",
        "uniprotId": "P36897",
        "chemblId": "CHEMBL4439",
        "targetClass": "Kinase",
        "probability": 0.5785,
        "knownActives": "1888 /  1"
      },
      {
        "target": "3-hydroxy-3-methylglutaryl-coenzyme A reductase",
        "commonName": "HMGCR",
        "uniprotId": "P04035",
        "chemblId": "CHEMBL402",
        "targetClass": "Oxidoreductase",
        "probability": 0.5703,
        "knownActives": "121 /  24"
      },
      {
        "target": "Phospholipase A2, membrane associated",
        "commonName": "PLA2G2A",
        "uniprotId": "P14555",
        "chemblId": "CHEMBL3474",
        "targetClass": "Hydrolase",
        "probability": 0.5511,
        "knownActives": "88 /  11"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.5353,
        "knownActives": "90 /  21"
      },
      {
        "target": "Serine protease 1",
        "commonName": "PRSS1",
        "uniprotId": "P07477",
        "chemblId": "CHEMBL209",
        "targetClass": "Protease",
        "probability": 0.5303,
        "knownActives": "391 /  9"
      },
      {
        "target": "Prothrombin",
        "commonName": "F2",
        "uniprotId": "P00734",
        "chemblId": "CHEMBL204",
        "targetClass": "Protease",
        "probability": 0.5303,
        "knownActives": "1939 /  15"
      },
      {
        "target": "Tumor necrosis factor",
        "commonName": "TNF",
        "uniprotId": "P01375",
        "chemblId": "CHEMBL1825",
        "targetClass": "Secreted protein",
        "probability": 0.5235,
        "knownActives": "1027 /  9"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha3/beta4",
        "commonName": "N/A",
        "uniprotId": "P30926&P32297",
        "chemblId": "CHEMBL1907594",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.5148,
        "knownActives": "334 /  2"
      },
      {
        "target": "Neuronal acetylcholine receptor; alpha4/beta2",
        "commonName": "N/A",
        "uniprotId": "P17787&P43681",
        "chemblId": "CHEMBL1907589",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.5148,
        "knownActives": "654 /  4"
      },
      {
        "target": "Nuclear receptor subfamily 4 group A member 2",
        "commonName": "NR4A2",
        "uniprotId": "P43354",
        "chemblId": "CHEMBL5002",
        "targetClass": "Nuclear receptor",
        "probability": 0.4989,
        "knownActives": "46 /  3"
      },
      {
        "target": "Substance-K receptor",
        "commonName": "TACR2",
        "uniprotId": "P21452",
        "chemblId": "CHEMBL2327",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.4936,
        "knownActives": "414 /  1"
      },
      {
        "target": "Integrin alpha-L/beta-2 (LFA-1)",
        "commonName": "N/A",
        "uniprotId": "P20701&P05107",
        "chemblId": "CHEMBL2364172",
        "targetClass": "Membrane receptor",
        "probability": 0.4936,
        "knownActives": "2 /  3"
      },
      {
        "target": "Ubiquitin carboxyl-terminal hydrolase 7",
        "commonName": "USP7",
        "uniprotId": "Q93009",
        "chemblId": "CHEMBL2157850",
        "targetClass": "Protease",
        "probability": 0.4929,
        "knownActives": "202 /  1"
      },
      {
        "target": "Toll-like receptor 4",
        "commonName": "TLR4",
        "uniprotId": "O00206",
        "chemblId": "CHEMBL5255",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.4929,
        "knownActives": "83 /  8"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.4678,
        "knownActives": "902 /  31"
      },
      {
        "target": "Chymotrypsin-C",
        "commonName": "CTRC",
        "uniprotId": "Q99895",
        "chemblId": "CHEMBL2386",
        "targetClass": "Protease",
        "probability": 0.46,
        "knownActives": "40 /  3"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.4538,
        "knownActives": "1951 /  52"
      },
      {
        "target": "Endothelial PAS domain-containing protein 1",
        "commonName": "EPAS1",
        "uniprotId": "Q99814",
        "chemblId": "CHEMBL1744522",
        "targetClass": "Transcription factor",
        "probability": 0.4507,
        "knownActives": "295 /  4"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.4472,
        "knownActives": "859 /  43"
      },
      {
        "target": "Interleukin-1 beta",
        "commonName": "IL1B",
        "uniprotId": "P01584",
        "chemblId": "CHEMBL1909490",
        "targetClass": "Secreted protein",
        "probability": 0.4054,
        "knownActives": "150 /  4"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 2",
        "commonName": "TRPM2",
        "uniprotId": "O94759",
        "chemblId": "CHEMBL1250402",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.3986,
        "knownActives": "10 /  1"
      },
      {
        "target": "Coagulation factor X",
        "commonName": "F10",
        "uniprotId": "P00742",
        "chemblId": "CHEMBL244",
        "targetClass": "Protease",
        "probability": 0.3907,
        "knownActives": "2707 /  20"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.3736,
        "knownActives": "975 /  2"
      },
      {
        "target": "Gamma-secretase",
        "commonName": "N/A",
        "uniprotId": "Q96BI3&Q9NZ42&Q8WW43&P49768&Q92542&P49810",
        "chemblId": "CHEMBL2094135",
        "targetClass": "Protease",
        "probability": 0.3707,
        "knownActives": "1609 /  7"
      },
      {
        "target": "Pancreatic triacylglycerol lipase",
        "commonName": "PNLIP",
        "uniprotId": "P16233",
        "chemblId": "CHEMBL1812",
        "targetClass": "Hydrolase",
        "probability": 0.3537,
        "knownActives": "17 /  5"
      },
      {
        "target": "Protein kinase C alpha type",
        "commonName": "PRKCA",
        "uniprotId": "P17252",
        "chemblId": "CHEMBL299",
        "targetClass": "Kinase",
        "probability": 0.3499,
        "knownActives": "734 /  298"
      },
      {
        "target": "Geranylgeranyl transferase type I",
        "commonName": "N/A",
        "uniprotId": "P49354&P53609",
        "chemblId": "CHEMBL2095164",
        "targetClass": "Transferase",
        "probability": 0.3339,
        "knownActives": "230 /  1"
      },
      {
        "target": "Protein farnesyltransferase",
        "commonName": "N/A",
        "uniprotId": "P49354&P49356",
        "chemblId": "CHEMBL2094108",
        "targetClass": "Transferase",
        "probability": 0.3339,
        "knownActives": "1004 /  12"
      },
      {
        "target": "Aldo-keto reductase family 1 member C3",
        "commonName": "AKR1C3",
        "uniprotId": "P42330",
        "chemblId": "CHEMBL4681",
        "targetClass": "Oxidoreductase",
        "probability": 0.3261,
        "knownActives": "263 /  13"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.3123,
        "knownActives": "486 /  53"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD11B2",
        "uniprotId": "P80365",
        "chemblId": "CHEMBL3746",
        "targetClass": "Oxidoreductase",
        "probability": 0.3063,
        "knownActives": "57 /  20"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 0.2878,
        "knownActives": "822 /  9"
      },
      {
        "target": "Protein kinase C beta type",
        "commonName": "PRKCB",
        "uniprotId": "P05771",
        "chemblId": "CHEMBL3045",
        "targetClass": "Kinase",
        "probability": 0.2845,
        "knownActives": "217 /  14"
      },
      {
        "target": "Aldo-keto reductase family 1 member C1",
        "commonName": "AKR1C1",
        "uniprotId": "Q04828",
        "chemblId": "CHEMBL5905",
        "targetClass": "Oxidoreductase",
        "probability": 0.2738,
        "knownActives": "5 /  1"
      },
      {
        "target": "Aldo-keto reductase family 1 member C2",
        "commonName": "AKR1C2",
        "uniprotId": "P52895",
        "chemblId": "CHEMBL5847",
        "targetClass": "Oxidoreductase",
        "probability": 0.2738,
        "knownActives": "10 /  1"
      },
      {
        "target": "Sex hormone-binding globulin",
        "commonName": "SHBG",
        "uniprotId": "P04278",
        "chemblId": "CHEMBL3305",
        "targetClass": "Secreted protein",
        "probability": 0.2738,
        "knownActives": "62 /  39"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.2581,
        "knownActives": "808 /  9"
      },
      {
        "target": "Heat shock protein HSP 90-alpha",
        "commonName": "HSP90AA1",
        "uniprotId": "P07900",
        "chemblId": "CHEMBL3880",
        "targetClass": "Other cytosolic protein",
        "probability": 0.2542,
        "knownActives": "623 /  14"
      },
      {
        "target": "Solute carrier family 2, facilitated glucose transporter member 1",
        "commonName": "SLC2A1",
        "uniprotId": "P11166",
        "chemblId": "CHEMBL2535",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2448,
        "knownActives": "94 /  4"
      },
      {
        "target": "Bromodomain-containing protein 4",
        "commonName": "BRD4",
        "uniprotId": "O60885",
        "chemblId": "CHEMBL1163125",
        "targetClass": "Reader",
        "probability": 0.2332,
        "knownActives": "6169 /  10"
      },
      {
        "target": "3-oxo-5-alpha-steroid 4-dehydrogenase 2",
        "commonName": "SRD5A2",
        "uniprotId": "P31213",
        "chemblId": "CHEMBL1856",
        "targetClass": "Oxidoreductase",
        "probability": 0.2323,
        "knownActives": "257 /  42"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.2289,
        "knownActives": "62 /  5"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2276,
        "knownActives": "2653 /  36"
      },
      {
        "target": "Cholesteryl ester transfer protein",
        "commonName": "CETP",
        "uniprotId": "P11597",
        "chemblId": "CHEMBL3572",
        "targetClass": "Other ion channel",
        "probability": 0.2265,
        "knownActives": "315 /  4"
      },
      {
        "target": "Protein kinase C gamma type",
        "commonName": "PRKCG",
        "uniprotId": "P05129",
        "chemblId": "CHEMBL2938",
        "targetClass": "Kinase",
        "probability": 0.2241,
        "knownActives": "91 /  9"
      },
      {
        "target": "Inhibitor of nuclear factor kappa-B kinase subunit beta",
        "commonName": "IKBKB",
        "uniprotId": "O14920",
        "chemblId": "CHEMBL1991",
        "targetClass": "Kinase",
        "probability": 0.224,
        "knownActives": "587 /  10"
      },
      {
        "target": "Corticosteroid-binding globulin",
        "commonName": "SERPINA6",
        "uniprotId": "P08185",
        "chemblId": "CHEMBL2421",
        "targetClass": "Secreted protein",
        "probability": 0.2133,
        "knownActives": "20 /  20"
      },
      {
        "target": "Tubulin--tyrosine ligase",
        "commonName": "TTL",
        "uniprotId": "Q8NG68",
        "chemblId": "CHEMBL5549",
        "targetClass": "Ligase",
        "probability": 0.2035,
        "knownActives": "14 /  16"
      },
      {
        "target": "M-phase inducer phosphatase 2",
        "commonName": "CDC25B",
        "uniprotId": "P30305",
        "chemblId": "CHEMBL4804",
        "targetClass": "Phosphatase",
        "probability": 0.2015,
        "knownActives": "130 /  21"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.1897,
        "knownActives": "6214 /  6"
      },
      {
        "target": "Thromboxane A2 receptor",
        "commonName": "TBXA2R",
        "uniprotId": "P21731",
        "chemblId": "CHEMBL2069",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1895,
        "knownActives": "219 /  18"
      },
      {
        "target": "Cytochrome P450 2C19",
        "commonName": "CYP2C19",
        "uniprotId": "P33261",
        "chemblId": "CHEMBL3622",
        "targetClass": "Cytochrome P450",
        "probability": 0.1866,
        "knownActives": "96 /  7"
      },
      {
        "target": "D-3-phosphoglycerate dehydrogenase",
        "commonName": "PHGDH",
        "uniprotId": "O43175",
        "chemblId": "CHEMBL2311243",
        "targetClass": "Oxidoreductase",
        "probability": 0.186,
        "knownActives": "234 /  1"
      },
      {
        "target": "Bcl-2-like protein 1",
        "commonName": "BCL2L1",
        "uniprotId": "Q07817",
        "chemblId": "CHEMBL4625",
        "targetClass": "Other ion channel",
        "probability": 0.1836,
        "knownActives": "149 /  13"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.175,
        "knownActives": "5271 /  1"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.175,
        "knownActives": "250 /  51"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.1637,
        "knownActives": "127 /  2"
      },
      {
        "target": "Signal transducer and activator of transcription 3",
        "commonName": "STAT3",
        "uniprotId": "P40763",
        "chemblId": "CHEMBL4026",
        "targetClass": "Transcription factor",
        "probability": 0.1637,
        "knownActives": "309 /  18"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.1593,
        "knownActives": "2931 /  5"
      },
      {
        "target": "Histone deacetylase 1",
        "commonName": "HDAC1",
        "uniprotId": "Q13547",
        "chemblId": "CHEMBL325",
        "targetClass": "Eraser",
        "probability": 0.1593,
        "knownActives": "4005 /  5"
      },
      {
        "target": "Bile acid receptor",
        "commonName": "NR1H4",
        "uniprotId": "Q96RI1",
        "chemblId": "CHEMBL2047",
        "targetClass": "Nuclear receptor",
        "probability": 0.1546,
        "knownActives": "1162 /  39"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.1537,
        "knownActives": "1444 /  3"
      },
      {
        "target": "Proprotein convertase subtilisin/kexin type 7",
        "commonName": "PCSK7",
        "uniprotId": "Q16549",
        "chemblId": "CHEMBL2232",
        "targetClass": "Protease",
        "probability": 0.1509,
        "knownActives": "1 /  1"
      },
      {
        "target": "Receptor-interacting serine/threonine-protein kinase 3",
        "commonName": "RIPK3",
        "uniprotId": "Q9Y572",
        "chemblId": "CHEMBL1795199",
        "targetClass": "Kinase",
        "probability": 0.1486,
        "knownActives": "201 /  1"
      },
      {
        "target": "Muscarinic acetylcholine receptor M1",
        "commonName": "CHRM1",
        "uniprotId": "P11229",
        "chemblId": "CHEMBL216",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1482,
        "knownActives": "1249 /  44"
      },
      {
        "target": "Muscarinic acetylcholine receptor M2",
        "commonName": "CHRM2",
        "uniprotId": "P08172",
        "chemblId": "CHEMBL211",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1482,
        "knownActives": "1108 /  35"
      },
      {
        "target": "M-phase inducer phosphatase 3",
        "commonName": "CDC25C",
        "uniprotId": "P30307",
        "chemblId": "CHEMBL2378",
        "targetClass": "Phosphatase",
        "probability": 0.145,
        "knownActives": "44 /  5"
      },
      {
        "target": "M-phase inducer phosphatase 1",
        "commonName": "CDC25A",
        "uniprotId": "P30304",
        "chemblId": "CHEMBL3775",
        "targetClass": "Phosphatase",
        "probability": 0.145,
        "knownActives": "88 /  21"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.1426,
        "knownActives": "5541 /  5"
      },
      {
        "target": "Bromodomain-containing protein 3",
        "commonName": "BRD3",
        "uniprotId": "Q15059",
        "chemblId": "CHEMBL1795186",
        "targetClass": "Reader",
        "probability": 0.1424,
        "knownActives": "715 /  9"
      },
      {
        "target": "Bromodomain-containing protein 2",
        "commonName": "BRD2",
        "uniprotId": "P25440",
        "chemblId": "CHEMBL1293289",
        "targetClass": "Reader",
        "probability": 0.1424,
        "knownActives": "689 /  1"
      },
      {
        "target": "Proteasome Macropain subunit MB1",
        "commonName": "PSMB5",
        "uniprotId": "P28074",
        "chemblId": "CHEMBL4662",
        "targetClass": "Protease",
        "probability": 0.1398,
        "knownActives": "473 /  4"
      },
      {
        "target": "Kir3.1/Kir3.4",
        "commonName": "N/A",
        "uniprotId": "P48549&P48544",
        "chemblId": "CHEMBL3038488",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.1369,
        "knownActives": "277 /  10"
      },
      {
        "target": "Proteasome component C5",
        "commonName": "PSMB1",
        "uniprotId": "P20618",
        "chemblId": "CHEMBL4208",
        "targetClass": "Protease",
        "probability": 0.1366,
        "knownActives": "44 /  4"
      },
      {
        "target": "Bromodomain testis-specific protein",
        "commonName": "BRDT",
        "uniprotId": "Q58F21",
        "chemblId": "CHEMBL1795185",
        "targetClass": "Reader",
        "probability": 0.1341,
        "knownActives": "136 /  1"
      },
      {
        "target": "Oxysterols receptor LXR-alpha",
        "commonName": "NR1H3",
        "uniprotId": "Q13133",
        "chemblId": "CHEMBL2808",
        "targetClass": "Nuclear receptor",
        "probability": 0.134,
        "knownActives": "484 /  30"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.1329,
        "knownActives": "1836 /  1"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 11",
        "commonName": "PTPN11",
        "uniprotId": "Q06124",
        "chemblId": "CHEMBL3864",
        "targetClass": "Phosphatase",
        "probability": 0.1302,
        "knownActives": "1044 /  5"
      },
      {
        "target": "Fatty-acid amide hydrolase 1",
        "commonName": "FAAH",
        "uniprotId": "O00519",
        "chemblId": "CHEMBL2243",
        "targetClass": "Hydrolase",
        "probability": 0.1297,
        "knownActives": "859 /  18"
      },
      {
        "target": "Methionine aminopeptidase 2",
        "commonName": "METAP2",
        "uniprotId": "P50579",
        "chemblId": "CHEMBL3922",
        "targetClass": "Protease",
        "probability": 0.1293,
        "knownActives": "501 /  48"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1288,
        "knownActives": "4009 /  1"
      },
      {
        "target": "Delta(24)-sterol reductase",
        "commonName": "DHCR24",
        "uniprotId": "Q15392",
        "chemblId": "CHEMBL2331059",
        "targetClass": "Oxidoreductase",
        "probability": 0.1218,
        "knownActives": "11 /  11"
      }
    ]
  },
  {
    "id": "skimmianine",
    "name": "Skimmianine",
    "cid": 23475,
    "smiles": "COC1=C2C(=C(C3=C1N=CC=C3)OC)C(=O)C=CO2",
    "category": "Furoquinoline Alkaloid",
    "topTarget": "Amine oxidase [flavin-containing] A (MAOA)",
    "topTargetUniprot": "P21397",
    "targetClasses": [
      {
        "label": "Kinase",
        "count": 30,
        "percentage": 30.0,
        "color": "#3B82F6"
      },
      {
        "label": "Lyase",
        "count": 11,
        "percentage": 11.0,
        "color": "#10B981"
      },
      {
        "label": "Oxidoreductase",
        "count": 10,
        "percentage": 10.0,
        "color": "#F59E0B"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 10,
        "percentage": 10.0,
        "color": "#EF4444"
      },
      {
        "label": "Cytochrome P450",
        "count": 7,
        "percentage": 7.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Transferase",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Protease",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Nuclear receptor",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Hydrolase",
        "count": 3,
        "percentage": 3.0,
        "color": "#14B8A6"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#F97316"
      },
      {
        "label": "Isomerase",
        "count": 2,
        "percentage": 2.0,
        "color": "#84CC16"
      },
      {
        "label": "Phosphodiesterase",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 1,
        "percentage": 1.0,
        "color": "#64748B"
      },
      {
        "label": "Primary active transporter",
        "count": 1,
        "percentage": 1.0,
        "color": "#3B82F6"
      },
      {
        "label": "Eraser",
        "count": 1,
        "percentage": 1.0,
        "color": "#10B981"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#F59E0B"
      },
      {
        "label": "Secreted protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Enzyme",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Transcription factor",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Phosphatase",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      }
    ],
    "targets": [
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.0883,
        "knownActives": "551 /  84"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.0686,
        "knownActives": "15 /  29"
      },
      {
        "target": "Maltase-glucoamylase",
        "commonName": "MGAM",
        "uniprotId": "O43451",
        "chemblId": "CHEMBL2074",
        "targetClass": "Hydrolase",
        "probability": 0.056,
        "knownActives": "89 /  5"
      },
      {
        "target": "Cytochrome P450 1A1",
        "commonName": "CYP1A1",
        "uniprotId": "P04798",
        "chemblId": "CHEMBL2231",
        "targetClass": "Cytochrome P450",
        "probability": 0.0556,
        "knownActives": "51 /  10"
      },
      {
        "target": "Macrophage colony-stimulating factor 1 receptor",
        "commonName": "CSF1R",
        "uniprotId": "P07333",
        "chemblId": "CHEMBL1844",
        "targetClass": "Kinase",
        "probability": 0.0535,
        "knownActives": "778 /  13"
      },
      {
        "target": "Cytochrome P450 1B1",
        "commonName": "CYP1B1",
        "uniprotId": "Q16678",
        "chemblId": "CHEMBL4878",
        "targetClass": "Cytochrome P450",
        "probability": 0.0494,
        "knownActives": "164 /  90"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.0456,
        "knownActives": "1095 /  5"
      },
      {
        "target": "Amine oxidase [flavin-containing] B",
        "commonName": "MAOB",
        "uniprotId": "P27338",
        "chemblId": "CHEMBL2039",
        "targetClass": "Oxidoreductase",
        "probability": 0.0371,
        "knownActives": "1310 /  215"
      },
      {
        "target": "Epidermal growth factor receptor",
        "commonName": "EGFR",
        "uniprotId": "P00533",
        "chemblId": "CHEMBL203",
        "targetClass": "Kinase",
        "probability": 0.0333,
        "knownActives": "3033 /  16"
      },
      {
        "target": "Potassium voltage-gated channel subfamily A member 3",
        "commonName": "KCNA3",
        "uniprotId": "P22001",
        "chemblId": "CHEMBL4633",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0333,
        "knownActives": "152 /  56"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.0327,
        "knownActives": "1264 /  140"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.0292,
        "knownActives": "1514 /  65"
      },
      {
        "target": "Carbonic anhydrase 7",
        "commonName": "CA7",
        "uniprotId": "P43166",
        "chemblId": "CHEMBL2326",
        "targetClass": "Lyase",
        "probability": 0.0292,
        "knownActives": "395 /  16"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.0292,
        "knownActives": "2092 /  14"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.0292,
        "knownActives": "1755 /  20"
      },
      {
        "target": "Carbonic anhydrase 12",
        "commonName": "CA12",
        "uniprotId": "O43570",
        "chemblId": "CHEMBL3242",
        "targetClass": "Lyase",
        "probability": 0.0292,
        "knownActives": "1243 /  61"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.0278,
        "knownActives": "1050 /  14"
      },
      {
        "target": "Dual specificity protein kinase CLK1",
        "commonName": "CLK1",
        "uniprotId": "P49759",
        "chemblId": "CHEMBL4224",
        "targetClass": "Kinase",
        "probability": 0.0252,
        "knownActives": "356 /  13"
      },
      {
        "target": "Cyclin-dependent kinase 5/CDK5 activator 1",
        "commonName": "N/A",
        "uniprotId": "Q00535&Q15078",
        "chemblId": "CHEMBL1907600",
        "targetClass": "Kinase",
        "probability": 0.0252,
        "knownActives": "426 /  19"
      },
      {
        "target": "Aurora kinase A",
        "commonName": "AURKA",
        "uniprotId": "O14965",
        "chemblId": "CHEMBL4722",
        "targetClass": "Kinase",
        "probability": 0.0236,
        "knownActives": "919 /  7"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.0234,
        "knownActives": "447 /  26"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.023,
        "knownActives": "137 /  1"
      },
      {
        "target": "Carbonic anhydrase 13",
        "commonName": "CA13",
        "uniprotId": "Q8N1Q1",
        "chemblId": "CHEMBL3912",
        "targetClass": "Lyase",
        "probability": 0.0179,
        "knownActives": "118 /  7"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.0178,
        "knownActives": "127 /  17"
      },
      {
        "target": "Broad substrate specificity ATP-binding cassette transporter ABCG2",
        "commonName": "ABCG2",
        "uniprotId": "Q9UNQ0",
        "chemblId": "CHEMBL5393",
        "targetClass": "Primary active transporter",
        "probability": 0.0173,
        "knownActives": "355 /  53"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.0168,
        "knownActives": "2694 /  21"
      },
      {
        "target": "Dual specificity protein kinase CLK4",
        "commonName": "CLK4",
        "uniprotId": "Q9HAZ1",
        "chemblId": "CHEMBL4203",
        "targetClass": "Kinase",
        "probability": 0.0161,
        "knownActives": "199 /  7"
      },
      {
        "target": "Dual specificity protein kinase CLK2",
        "commonName": "CLK2",
        "uniprotId": "P49760",
        "chemblId": "CHEMBL4225",
        "targetClass": "Kinase",
        "probability": 0.0161,
        "knownActives": "416 /  8"
      },
      {
        "target": "Lysine-specific histone demethylase 1A",
        "commonName": "KDM1A",
        "uniprotId": "O60341",
        "chemblId": "CHEMBL6136",
        "targetClass": "Eraser",
        "probability": 0.0161,
        "knownActives": "494 /  8"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.0158,
        "knownActives": "613 /  69"
      },
      {
        "target": "Cyclin-dependent kinase 5",
        "commonName": "CDK5",
        "uniprotId": "Q00535",
        "chemblId": "CHEMBL4036",
        "targetClass": "Kinase",
        "probability": 0.015,
        "knownActives": "61 /  2"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1B",
        "commonName": "DYRK1B",
        "uniprotId": "Q9Y463",
        "chemblId": "CHEMBL5543",
        "targetClass": "Kinase",
        "probability": 0.0149,
        "knownActives": "292 /  6"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 2",
        "commonName": "DYRK2",
        "uniprotId": "Q92630",
        "chemblId": "CHEMBL4376",
        "targetClass": "Kinase",
        "probability": 0.0149,
        "knownActives": "176 /  3"
      },
      {
        "target": "Dual specificity protein kinase CLK3",
        "commonName": "CLK3",
        "uniprotId": "P49761",
        "chemblId": "CHEMBL4226",
        "targetClass": "Kinase",
        "probability": 0.0146,
        "knownActives": "282 /  6"
      },
      {
        "target": "Cathepsin L2",
        "commonName": "CTSV",
        "uniprotId": "O60911",
        "chemblId": "CHEMBL3272",
        "targetClass": "Protease",
        "probability": 0.0146,
        "knownActives": "30 /  6"
      },
      {
        "target": "CDK2/Cyclin A2",
        "commonName": "N/A",
        "uniprotId": "P24941&P20248",
        "chemblId": "CHEMBL3038469",
        "targetClass": "Kinase",
        "probability": 0.0145,
        "knownActives": "249 /  7"
      },
      {
        "target": "CDK9/cyclin T1",
        "commonName": "N/A",
        "uniprotId": "O60563&P50750",
        "chemblId": "CHEMBL2111389",
        "targetClass": "Kinase",
        "probability": 0.0145,
        "knownActives": "862 /  8"
      },
      {
        "target": "DNA-dependent protein kinase catalytic subunit",
        "commonName": "PRKDC",
        "uniprotId": "P78527",
        "chemblId": "CHEMBL3142",
        "targetClass": "Kinase",
        "probability": 0.014,
        "knownActives": "642 /  39"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.0139,
        "knownActives": "174 /  3"
      },
      {
        "target": "Mannose-6-phosphate isomerase",
        "commonName": "MPI",
        "uniprotId": "P34949",
        "chemblId": "CHEMBL2758",
        "targetClass": "Isomerase",
        "probability": 0.0138,
        "knownActives": "34 /  1"
      },
      {
        "target": "Carbonic anhydrase 14",
        "commonName": "CA14",
        "uniprotId": "Q9ULX7",
        "chemblId": "CHEMBL3510",
        "targetClass": "Lyase",
        "probability": 0.0137,
        "knownActives": "245 /  6"
      },
      {
        "target": "Cytochrome P450 11B2, mitochondrial",
        "commonName": "CYP11B2",
        "uniprotId": "P19099",
        "chemblId": "CHEMBL2722",
        "targetClass": "Cytochrome P450",
        "probability": 0.0134,
        "knownActives": "523 /  38"
      },
      {
        "target": "Cytochrome P450 11B1, mitochondrial",
        "commonName": "CYP11B1",
        "uniprotId": "P15538",
        "chemblId": "CHEMBL1908",
        "targetClass": "Cytochrome P450",
        "probability": 0.0134,
        "knownActives": "415 /  39"
      },
      {
        "target": "Cyclin-dependent kinase 2",
        "commonName": "CDK2",
        "uniprotId": "P24941",
        "chemblId": "CHEMBL301",
        "targetClass": "Kinase",
        "probability": 0.0133,
        "knownActives": "518 /  4"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0123,
        "knownActives": "2034 /  15"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0119,
        "knownActives": "726 /  17"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.0117,
        "knownActives": "1248 /  11"
      },
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4B",
        "commonName": "PDE4B",
        "uniprotId": "Q07343",
        "chemblId": "CHEMBL275",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0108,
        "knownActives": "948 /  14"
      },
      {
        "target": "5-hydroxytryptamine receptor 7",
        "commonName": "HTR7",
        "uniprotId": "P34969",
        "chemblId": "CHEMBL3155",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0107,
        "knownActives": "916 /  3"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0107,
        "knownActives": "2064 /  25"
      },
      {
        "target": "Rho-associated protein kinase 2",
        "commonName": "ROCK2",
        "uniprotId": "O75116",
        "chemblId": "CHEMBL2973",
        "targetClass": "Kinase",
        "probability": 0.0107,
        "knownActives": "1820 /  46"
      },
      {
        "target": "cAMP and cAMP-inhibited cGMP 3',5'-cyclic phosphodiesterase 10A",
        "commonName": "PDE10A",
        "uniprotId": "Q9Y233",
        "chemblId": "CHEMBL4409",
        "targetClass": "Phosphodiesterase",
        "probability": 0.0106,
        "knownActives": "2581 /  17"
      },
      {
        "target": "Ubiquitin carboxyl-terminal hydrolase 8",
        "commonName": "USP8",
        "uniprotId": "P40818",
        "chemblId": "CHEMBL2157854",
        "targetClass": "Protease",
        "probability": 0.0103,
        "knownActives": "12 /  4"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.0101,
        "knownActives": "154 /  23"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.0101,
        "knownActives": "574 /  22"
      },
      {
        "target": "Neutrophil elastase",
        "commonName": "ELANE",
        "uniprotId": "P08246",
        "chemblId": "CHEMBL248",
        "targetClass": "Protease",
        "probability": 0.0098,
        "knownActives": "291 /  12"
      },
      {
        "target": "Cyclin-dependent kinase 9",
        "commonName": "CDK9",
        "uniprotId": "P50750",
        "chemblId": "CHEMBL3116",
        "targetClass": "Kinase",
        "probability": 0.0098,
        "knownActives": "429 /  3"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.0097,
        "knownActives": "161 /  16"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.0096,
        "knownActives": "132 /  2"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.0096,
        "knownActives": "382 /  7"
      },
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0094,
        "knownActives": "804 /  8"
      },
      {
        "target": "Mast/stem cell growth factor receptor Kit",
        "commonName": "KIT",
        "uniprotId": "P10721",
        "chemblId": "CHEMBL1936",
        "targetClass": "Kinase",
        "probability": 0.0094,
        "knownActives": "513 /  2"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.009,
        "knownActives": "66 /  1"
      },
      {
        "target": "Cytochrome P450 1A2",
        "commonName": "CYP1A2",
        "uniprotId": "P05177",
        "chemblId": "CHEMBL3356",
        "targetClass": "Cytochrome P450",
        "probability": 0.0089,
        "knownActives": "45 /  4"
      },
      {
        "target": "Pyruvate kinase PKM",
        "commonName": "PKM",
        "uniprotId": "P14618",
        "chemblId": "CHEMBL1075189",
        "targetClass": "Enzyme",
        "probability": 0.0087,
        "knownActives": "38 /  2"
      },
      {
        "target": "Melatonin receptor type 1B",
        "commonName": "MTNR1B",
        "uniprotId": "P49286",
        "chemblId": "CHEMBL1946",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0086,
        "knownActives": "747 /  3"
      },
      {
        "target": "CDK8/Cyclin C",
        "commonName": "N/A",
        "uniprotId": "P49336&P24863",
        "chemblId": "CHEMBL3038474",
        "targetClass": "Kinase",
        "probability": 0.0085,
        "knownActives": "295 /  3"
      },
      {
        "target": "Transient receptor potential cation channel subfamily A member 1",
        "commonName": "TRPA1",
        "uniprotId": "O75762",
        "chemblId": "CHEMBL6007",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0084,
        "knownActives": "168 /  2"
      },
      {
        "target": "Tryptophan 2,3-dioxygenase",
        "commonName": "TDO2",
        "uniprotId": "P48775",
        "chemblId": "CHEMBL2140",
        "targetClass": "Oxidoreductase",
        "probability": 0.0083,
        "knownActives": "276 /  5"
      },
      {
        "target": "Indoleamine 2,3-dioxygenase 1",
        "commonName": "IDO1",
        "uniprotId": "P14902",
        "chemblId": "CHEMBL4685",
        "targetClass": "Oxidoreductase",
        "probability": 0.0083,
        "knownActives": "956 /  3"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.0083,
        "knownActives": "2586 /  8"
      },
      {
        "target": "Aldehyde dehydrogenase 1A1",
        "commonName": "ALDH1A1",
        "uniprotId": "P00352",
        "chemblId": "CHEMBL3577",
        "targetClass": "Oxidoreductase",
        "probability": 0.0083,
        "knownActives": "69 /  1"
      },
      {
        "target": "Poly [ADP-ribose] polymerase tankyrase-1",
        "commonName": "TNKS",
        "uniprotId": "O95271",
        "chemblId": "CHEMBL6164",
        "targetClass": "Transferase",
        "probability": 0.0081,
        "knownActives": "291 /  2"
      },
      {
        "target": "Steroid 17-alpha-hydroxylase/17,20 lyase",
        "commonName": "CYP17A1",
        "uniprotId": "P05093",
        "chemblId": "CHEMBL3522",
        "targetClass": "Cytochrome P450",
        "probability": 0.008,
        "knownActives": "137 /  3"
      },
      {
        "target": "Poly [ADP-ribose] polymerase tankyrase-2",
        "commonName": "TNKS2",
        "uniprotId": "Q9H2K2",
        "chemblId": "CHEMBL6154",
        "targetClass": "Transferase",
        "probability": 0.0079,
        "knownActives": "267 /  1"
      },
      {
        "target": "Transcription factor p65",
        "commonName": "RELA",
        "uniprotId": "Q04206",
        "chemblId": "CHEMBL5533",
        "targetClass": "Transcription factor",
        "probability": 0.0077,
        "knownActives": "31 /  1"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 0.0075,
        "knownActives": "1961 /  9"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.0071,
        "knownActives": "566 /  51"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.0071,
        "knownActives": "454 /  3"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.0068,
        "knownActives": "399 /  19"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0068,
        "knownActives": "2104 /  24"
      },
      {
        "target": "DNA topoisomerase 1",
        "commonName": "TOP1",
        "uniprotId": "P11387",
        "chemblId": "CHEMBL1781",
        "targetClass": "Isomerase",
        "probability": 0.0067,
        "knownActives": "111 /  1"
      },
      {
        "target": "Aurora kinase B",
        "commonName": "AURKB",
        "uniprotId": "Q96GD4",
        "chemblId": "CHEMBL2185",
        "targetClass": "Kinase",
        "probability": 0.0065,
        "knownActives": "553 /  5"
      },
      {
        "target": "5-hydroxytryptamine receptor 6",
        "commonName": "HTR6",
        "uniprotId": "P50406",
        "chemblId": "CHEMBL3371",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0065,
        "knownActives": "1381 /  3"
      },
      {
        "target": "Proto-oncogene tyrosine-protein kinase Src",
        "commonName": "SRC",
        "uniprotId": "P12931",
        "chemblId": "CHEMBL267",
        "targetClass": "Kinase",
        "probability": 0.0065,
        "knownActives": "775 /  3"
      },
      {
        "target": "Glycogen synthase kinase-3 beta",
        "commonName": "GSK3B",
        "uniprotId": "P49841",
        "chemblId": "CHEMBL262",
        "targetClass": "Kinase",
        "probability": 0.0064,
        "knownActives": "1237 /  9"
      },
      {
        "target": "Cyclin-dependent kinase 1/cyclin B1",
        "commonName": "N/A",
        "uniprotId": "P06493&P14635",
        "chemblId": "CHEMBL1907602",
        "targetClass": "Kinase",
        "probability": 0.0063,
        "knownActives": "142 /  8"
      },
      {
        "target": "Receptor-type tyrosine-protein kinase FLT3",
        "commonName": "FLT3",
        "uniprotId": "P36888",
        "chemblId": "CHEMBL1974",
        "targetClass": "Kinase",
        "probability": 0.0063,
        "knownActives": "843 /  8"
      },
      {
        "target": "Carbonic anhydrase 5B, mitochondrial",
        "commonName": "CA5B",
        "uniprotId": "Q9Y2D0",
        "chemblId": "CHEMBL3969",
        "targetClass": "Lyase",
        "probability": 0.0062,
        "knownActives": "178 /  4"
      },
      {
        "target": "Myeloperoxidase",
        "commonName": "MPO",
        "uniprotId": "P05164",
        "chemblId": "CHEMBL2439",
        "targetClass": "Oxidoreductase",
        "probability": 0.0062,
        "knownActives": "368 /  2"
      },
      {
        "target": "Methionine aminopeptidase 2",
        "commonName": "METAP2",
        "uniprotId": "P50579",
        "chemblId": "CHEMBL3922",
        "targetClass": "Protease",
        "probability": 0.0062,
        "knownActives": "347 /  2"
      },
      {
        "target": "Rho-associated protein kinase 1",
        "commonName": "ROCK1",
        "uniprotId": "Q13464",
        "chemblId": "CHEMBL3231",
        "targetClass": "Kinase",
        "probability": 0.0062,
        "knownActives": "877 /  28"
      },
      {
        "target": "Serine/threonine-protein kinase pim-3",
        "commonName": "PIM3",
        "uniprotId": "Q86V86",
        "chemblId": "CHEMBL5407",
        "targetClass": "Kinase",
        "probability": 0.0061,
        "knownActives": "581 /  3"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0059,
        "knownActives": "1302 /  4"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.0058,
        "knownActives": "304 /  15"
      },
      {
        "target": "D(1A) dopamine receptor",
        "commonName": "DRD1",
        "uniprotId": "P21728",
        "chemblId": "CHEMBL2056",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0056,
        "knownActives": "419 /  10"
      },
      {
        "target": "Protein mono-ADP-ribosyltransferase PARP10",
        "commonName": "PARP10",
        "uniprotId": "Q53GL7",
        "chemblId": "CHEMBL2429708",
        "targetClass": "Transferase",
        "probability": 0.0056,
        "knownActives": "79 /  0"
      },
      {
        "target": "Protein mono-ADP-ribosyltransferase PARP15",
        "commonName": "PARP15",
        "uniprotId": "Q460N3",
        "chemblId": "CHEMBL2176778",
        "targetClass": "Transferase",
        "probability": 0.0056,
        "knownActives": "44 /  0"
      },
      {
        "target": "5-hydroxytryptamine receptor 2A",
        "commonName": "HTR2A",
        "uniprotId": "P28223",
        "chemblId": "CHEMBL224",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0055,
        "knownActives": "1563 /  14"
      },
      {
        "target": "Tyrosine-protein kinase Lck",
        "commonName": "LCK",
        "uniprotId": "P06239",
        "chemblId": "CHEMBL258",
        "targetClass": "Kinase",
        "probability": 0.0055,
        "knownActives": "391 /  5"
      }
    ]
  },
  {
    "id": "thymol",
    "name": "Thymol",
    "cid": 6989,
    "smiles": "Cc1ccc(c(c1)O)C(C)C",
    "category": "Monoterpenoid Phenol",
    "topTarget": "Transient receptor potential cation channel subfamily A member 1 (TRPA1)",
    "topTargetUniprot": "O75762",
    "targetClasses": [
      {
        "label": "Family A G protein-coupled receptor",
        "count": 27,
        "percentage": 27.0,
        "color": "#3B82F6"
      },
      {
        "label": "Kinase",
        "count": 12,
        "percentage": 12.0,
        "color": "#10B981"
      },
      {
        "label": "Oxidoreductase",
        "count": 11,
        "percentage": 11.0,
        "color": "#F59E0B"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 6,
        "percentage": 6.0,
        "color": "#EF4444"
      },
      {
        "label": "Lyase",
        "count": 5,
        "percentage": 5.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Nuclear receptor",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Eraser",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Electrochemical transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#14B8A6"
      },
      {
        "label": "Other cytosolic protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#F97316"
      },
      {
        "label": "Secreted protein",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#A855F7"
      },
      {
        "label": "Primary active transporter",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Other ion channel",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Writer",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Hydrolase",
        "count": 1,
        "percentage": 1.0,
        "color": "#EF4444"
      },
      {
        "label": "Protease",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Cytochrome P450",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Transcription factor",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Phosphatase",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      }
    ],
    "targets": [
      {
        "target": "Transient receptor potential cation channel subfamily A member 1",
        "commonName": "TRPA1",
        "uniprotId": "O75762",
        "chemblId": "CHEMBL6007",
        "targetClass": "Voltage-gated ion channel",
        "probability": 1.0,
        "knownActives": "11 /  24"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.9125,
        "knownActives": "86 /  44"
      },
      {
        "target": "Macrophage migration inhibitory factor",
        "commonName": "MIF",
        "uniprotId": "P14174",
        "chemblId": "CHEMBL2085",
        "targetClass": "Enzyme",
        "probability": 0.79,
        "knownActives": "75 /  10"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 3",
        "commonName": "ATP2A3",
        "uniprotId": "Q93084",
        "chemblId": "CHEMBL2401",
        "targetClass": "Primary active transporter",
        "probability": 0.7881,
        "knownActives": "3 /  1"
      },
      {
        "target": "Sarcoplasmic/endoplasmic reticulum calcium ATPase 2",
        "commonName": "ATP2A2",
        "uniprotId": "P16615",
        "chemblId": "CHEMBL3901",
        "targetClass": "Primary active transporter",
        "probability": 0.7881,
        "knownActives": "3 /  1"
      },
      {
        "target": "GABA-A receptor; alpha-1/beta-2/gamma-2",
        "commonName": "N/A",
        "uniprotId": "P14867&P47870&P18507",
        "chemblId": "CHEMBL2095172",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.7229,
        "knownActives": "12 /  4"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 1",
        "commonName": "TRPV1",
        "uniprotId": "Q8NER1",
        "chemblId": "CHEMBL4794",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.6065,
        "knownActives": "65 /  11"
      },
      {
        "target": "5-hydroxytryptamine receptor 2B",
        "commonName": "HTR2B",
        "uniprotId": "P41595",
        "chemblId": "CHEMBL1833",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.59,
        "knownActives": "60 /  15"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.59,
        "knownActives": "49 /  29"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.59,
        "knownActives": "33 /  74"
      },
      {
        "target": "GABA-A receptor; alpha-1/beta-3/gamma-2",
        "commonName": "N/A",
        "uniprotId": "P14867&P18507&P28472",
        "chemblId": "CHEMBL2094121",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.59,
        "knownActives": "2 /  1"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.5186,
        "knownActives": "233 /  98"
      },
      {
        "target": "Tyrosinase",
        "commonName": "TYR",
        "uniprotId": "P14679",
        "chemblId": "CHEMBL1973",
        "targetClass": "Oxidoreductase",
        "probability": 0.4804,
        "knownActives": "48 /  17"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.4472,
        "knownActives": "113 /  68"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.4241,
        "knownActives": "811 /  207"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.4181,
        "knownActives": "668 /  218"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.4039,
        "knownActives": "378 /  129"
      },
      {
        "target": "Cannabinoid receptor 1",
        "commonName": "CNR1",
        "uniprotId": "P21554",
        "chemblId": "CHEMBL218",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.363,
        "knownActives": "233 /  84"
      },
      {
        "target": "5-hydroxytryptamine receptor 6",
        "commonName": "HTR6",
        "uniprotId": "P50406",
        "chemblId": "CHEMBL3371",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.3321,
        "knownActives": "18 /  5"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.3256,
        "knownActives": "213 /  34"
      },
      {
        "target": "Carbonic anhydrase 4",
        "commonName": "CA4",
        "uniprotId": "P22748",
        "chemblId": "CHEMBL3729",
        "targetClass": "Lyase",
        "probability": 0.3214,
        "knownActives": "32 /  10"
      },
      {
        "target": "Eukaryotic elongation factor 2 kinase",
        "commonName": "EEF2K",
        "uniprotId": "O00418",
        "chemblId": "CHEMBL5026",
        "targetClass": "Kinase",
        "probability": 0.3141,
        "knownActives": "3 /  2"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.2892,
        "knownActives": "147 /  54"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2864,
        "knownActives": "29 /  72"
      },
      {
        "target": "D(3) dopamine receptor",
        "commonName": "DRD3",
        "uniprotId": "P35462",
        "chemblId": "CHEMBL234",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2864,
        "knownActives": "82 /  77"
      },
      {
        "target": "D(1A) dopamine receptor",
        "commonName": "DRD1",
        "uniprotId": "P21728",
        "chemblId": "CHEMBL2056",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2864,
        "knownActives": "115 /  75"
      },
      {
        "target": "D(2) dopamine receptor",
        "commonName": "DRD2",
        "uniprotId": "P14416",
        "chemblId": "CHEMBL217",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2864,
        "knownActives": "145 /  115"
      },
      {
        "target": "Insulin-like growth factor 1 receptor",
        "commonName": "IGF1R",
        "uniprotId": "P08069",
        "chemblId": "CHEMBL1957",
        "targetClass": "Kinase",
        "probability": 0.2854,
        "knownActives": "27 /  16"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2777,
        "knownActives": "278 /  146"
      },
      {
        "target": "G-protein coupled receptor 55",
        "commonName": "GPR55",
        "uniprotId": "Q9Y2T6",
        "chemblId": "CHEMBL1075322",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2721,
        "knownActives": "8 /  3"
      },
      {
        "target": "Histone deacetylase 6",
        "commonName": "HDAC6",
        "uniprotId": "Q9UBN7",
        "chemblId": "CHEMBL1865",
        "targetClass": "Eraser",
        "probability": 0.2672,
        "knownActives": "47 /  19"
      },
      {
        "target": "Microtubule-associated protein tau",
        "commonName": "MAPT",
        "uniprotId": "P10636",
        "chemblId": "CHEMBL1293224",
        "targetClass": "Other cytosolic protein",
        "probability": 0.2547,
        "knownActives": "30 /  2"
      },
      {
        "target": "Estrogen-related receptor gamma",
        "commonName": "ESRRG",
        "uniprotId": "P62508",
        "chemblId": "CHEMBL4245",
        "targetClass": "Nuclear receptor",
        "probability": 0.2477,
        "knownActives": "42 /  11"
      },
      {
        "target": "Serine/threonine-protein kinase PLK1",
        "commonName": "PLK1",
        "uniprotId": "P53350",
        "chemblId": "CHEMBL3024",
        "targetClass": "Kinase",
        "probability": 0.2415,
        "knownActives": "23 /  1"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.2335,
        "knownActives": "93 /  6"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2309,
        "knownActives": "186 /  121"
      },
      {
        "target": "Delta-type opioid receptor",
        "commonName": "OPRD1",
        "uniprotId": "P41143",
        "chemblId": "CHEMBL236",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2309,
        "knownActives": "205 /  101"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2309,
        "knownActives": "229 /  126"
      },
      {
        "target": "Indoleamine 2,3-dioxygenase 1",
        "commonName": "IDO1",
        "uniprotId": "P14902",
        "chemblId": "CHEMBL4685",
        "targetClass": "Oxidoreductase",
        "probability": 0.23,
        "knownActives": "121 /  24"
      },
      {
        "target": "5-hydroxytryptamine receptor 2A",
        "commonName": "HTR2A",
        "uniprotId": "P28223",
        "chemblId": "CHEMBL224",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2292,
        "knownActives": "45 /  71"
      },
      {
        "target": "Vascular endothelial growth factor receptor 2",
        "commonName": "KDR",
        "uniprotId": "P35968",
        "chemblId": "CHEMBL279",
        "targetClass": "Kinase",
        "probability": 0.22,
        "knownActives": "289 /  5"
      },
      {
        "target": "Histone deacetylase 8",
        "commonName": "HDAC8",
        "uniprotId": "Q9BY41",
        "chemblId": "CHEMBL3192",
        "targetClass": "Eraser",
        "probability": 0.219,
        "knownActives": "39 /  17"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.2172,
        "knownActives": "247 /  67"
      },
      {
        "target": "Programmed cell death 1 ligand 1",
        "commonName": "CD274",
        "uniprotId": "Q9NZQ7",
        "chemblId": "CHEMBL3580522",
        "targetClass": "Unclassified protein",
        "probability": 0.2163,
        "knownActives": "1 /  1"
      },
      {
        "target": "Programmed cell death protein 1/Programmed cell death 1 ligand 1",
        "commonName": "N/A",
        "uniprotId": "Q15116&Q9NZQ7",
        "chemblId": "CHEMBL4523993",
        "targetClass": "Unclassified protein",
        "probability": 0.2163,
        "knownActives": "1 /  2"
      },
      {
        "target": "Albumin",
        "commonName": "ALB",
        "uniprotId": "P02768",
        "chemblId": "CHEMBL3253",
        "targetClass": "Secreted protein",
        "probability": 0.2157,
        "knownActives": "22 /  6"
      },
      {
        "target": "Amyloid-beta precursor protein",
        "commonName": "APP",
        "uniprotId": "P05067",
        "chemblId": "CHEMBL2487",
        "targetClass": "Membrane receptor",
        "probability": 0.2151,
        "knownActives": "154 /  18"
      },
      {
        "target": "Lysine-specific demethylase 4E",
        "commonName": "KDM4E",
        "uniprotId": "B2RXH2",
        "chemblId": "CHEMBL1293226",
        "targetClass": "Eraser",
        "probability": 0.2141,
        "knownActives": "5 /  4"
      },
      {
        "target": "Sodium-dependent serotonin transporter",
        "commonName": "SLC6A4",
        "uniprotId": "P31645",
        "chemblId": "CHEMBL228",
        "targetClass": "Electrochemical transporter",
        "probability": 0.2076,
        "knownActives": "37 /  109"
      },
      {
        "target": "Substance-K receptor",
        "commonName": "TACR2",
        "uniprotId": "P21452",
        "chemblId": "CHEMBL2327",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2076,
        "knownActives": "7 /  4"
      },
      {
        "target": "Muscarinic acetylcholine receptor M3",
        "commonName": "CHRM3",
        "uniprotId": "P20309",
        "chemblId": "CHEMBL245",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2076,
        "knownActives": "3 /  16"
      },
      {
        "target": "Alpha-2C adrenergic receptor",
        "commonName": "ADRA2C",
        "uniprotId": "P18825",
        "chemblId": "CHEMBL1916",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2076,
        "knownActives": "15 /  11"
      },
      {
        "target": "Alpha-2B adrenergic receptor",
        "commonName": "ADRA2B",
        "uniprotId": "P18089",
        "chemblId": "CHEMBL1942",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2076,
        "knownActives": "13 /  10"
      },
      {
        "target": "Muscarinic acetylcholine receptor M1",
        "commonName": "CHRM1",
        "uniprotId": "P11229",
        "chemblId": "CHEMBL216",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2076,
        "knownActives": "6 /  19"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2076,
        "knownActives": "46 /  5"
      },
      {
        "target": "Alpha-2A adrenergic receptor",
        "commonName": "ADRA2A",
        "uniprotId": "P08913",
        "chemblId": "CHEMBL1867",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2076,
        "knownActives": "34 /  20"
      },
      {
        "target": "Focal adhesion kinase 1",
        "commonName": "PTK2",
        "uniprotId": "Q05397",
        "chemblId": "CHEMBL2695",
        "targetClass": "Kinase",
        "probability": 0.2004,
        "knownActives": "11 /  2"
      },
      {
        "target": "Amine oxidase [flavin-containing] A",
        "commonName": "MAOA",
        "uniprotId": "P21397",
        "chemblId": "CHEMBL1951",
        "targetClass": "Oxidoreductase",
        "probability": 0.2002,
        "knownActives": "149 /  55"
      },
      {
        "target": "Alpha-1D adrenergic receptor",
        "commonName": "ADRA1D",
        "uniprotId": "P25100",
        "chemblId": "CHEMBL223",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1992,
        "knownActives": "3 /  9"
      },
      {
        "target": "Muscarinic acetylcholine receptor M2",
        "commonName": "CHRM2",
        "uniprotId": "P08172",
        "chemblId": "CHEMBL211",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1942,
        "knownActives": "3 /  18"
      },
      {
        "target": "Transthyretin",
        "commonName": "TTR",
        "uniprotId": "P02766",
        "chemblId": "CHEMBL3194",
        "targetClass": "Secreted protein",
        "probability": 0.1887,
        "knownActives": "46 /  17"
      },
      {
        "target": "Bcl-2-like protein 1",
        "commonName": "BCL2L1",
        "uniprotId": "Q07817",
        "chemblId": "CHEMBL4625",
        "targetClass": "Other ion channel",
        "probability": 0.1872,
        "knownActives": "21 /  13"
      },
      {
        "target": "Apoptosis regulator Bcl-2",
        "commonName": "BCL2",
        "uniprotId": "P10415",
        "chemblId": "CHEMBL4860",
        "targetClass": "Other ion channel",
        "probability": 0.1872,
        "knownActives": "22 /  14"
      },
      {
        "target": "Melatonin receptor type 1A",
        "commonName": "MTNR1A",
        "uniprotId": "P48039",
        "chemblId": "CHEMBL1945",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1851,
        "knownActives": "12 /  76"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.1842,
        "knownActives": "268 /  35"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 1",
        "commonName": "HSD17B1",
        "uniprotId": "P14061",
        "chemblId": "CHEMBL3181",
        "targetClass": "Oxidoreductase",
        "probability": 0.1842,
        "knownActives": "305 /  66"
      },
      {
        "target": "Ribosyldihydronicotinamide dehydrogenase [quinone]",
        "commonName": "NQO2",
        "uniprotId": "P16083",
        "chemblId": "CHEMBL3959",
        "targetClass": "Oxidoreductase",
        "probability": 0.184,
        "knownActives": "19 /  20"
      },
      {
        "target": "Arachidonate 5-lipoxygenase-activating protein",
        "commonName": "ALOX5AP",
        "uniprotId": "P20292",
        "chemblId": "CHEMBL4550",
        "targetClass": "Other cytosolic protein",
        "probability": 0.181,
        "knownActives": "21 /  3"
      },
      {
        "target": "Sex hormone-binding globulin",
        "commonName": "SHBG",
        "uniprotId": "P04278",
        "chemblId": "CHEMBL3305",
        "targetClass": "Secreted protein",
        "probability": 0.1801,
        "knownActives": "22 /  16"
      },
      {
        "target": "Aryl hydrocarbon receptor",
        "commonName": "AHR",
        "uniprotId": "P35869",
        "chemblId": "CHEMBL3201",
        "targetClass": "Transcription factor",
        "probability": 0.1781,
        "knownActives": "4 /  3"
      },
      {
        "target": "Serine/threonine-protein kinase pim-1",
        "commonName": "PIM1",
        "uniprotId": "P11309",
        "chemblId": "CHEMBL2147",
        "targetClass": "Kinase",
        "probability": 0.1764,
        "knownActives": "86 /  2"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX15",
        "commonName": "ALOX15",
        "uniprotId": "P16050",
        "chemblId": "CHEMBL2903",
        "targetClass": "Oxidoreductase",
        "probability": 0.1699,
        "knownActives": "68 /  24"
      },
      {
        "target": "Histone acetyltransferase KAT2B",
        "commonName": "KAT2B",
        "uniprotId": "Q92831",
        "chemblId": "CHEMBL5500",
        "targetClass": "Writer",
        "probability": 0.1699,
        "knownActives": "9 /  3"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1B",
        "commonName": "DYRK1B",
        "uniprotId": "Q9Y463",
        "chemblId": "CHEMBL5543",
        "targetClass": "Kinase",
        "probability": 0.1692,
        "knownActives": "41 /  3"
      },
      {
        "target": "Dual specificity tyrosine-phosphorylation-regulated kinase 1A",
        "commonName": "DYRK1A",
        "uniprotId": "Q13627",
        "chemblId": "CHEMBL2292",
        "targetClass": "Kinase",
        "probability": 0.1692,
        "knownActives": "80 /  5"
      },
      {
        "target": "Dual specificity protein kinase CLK1",
        "commonName": "CLK1",
        "uniprotId": "P49759",
        "chemblId": "CHEMBL4224",
        "targetClass": "Kinase",
        "probability": 0.1692,
        "knownActives": "40 /  3"
      },
      {
        "target": "Polyunsaturated fatty acid lipoxygenase ALOX12",
        "commonName": "ALOX12",
        "uniprotId": "P18054",
        "chemblId": "CHEMBL3687",
        "targetClass": "Enzyme",
        "probability": 0.1658,
        "knownActives": "73 /  11"
      },
      {
        "target": "Histone deacetylase 2",
        "commonName": "HDAC2",
        "uniprotId": "Q92769",
        "chemblId": "CHEMBL1937",
        "targetClass": "Eraser",
        "probability": 0.1652,
        "knownActives": "20 /  10"
      },
      {
        "target": "Histone deacetylase 4",
        "commonName": "HDAC4",
        "uniprotId": "P56524",
        "chemblId": "CHEMBL3524",
        "targetClass": "Eraser",
        "probability": 0.1652,
        "knownActives": "14 /  9"
      },
      {
        "target": "Histone acetyltransferase p300",
        "commonName": "EP300",
        "uniprotId": "Q09472",
        "chemblId": "CHEMBL3784",
        "targetClass": "Writer",
        "probability": 0.1643,
        "knownActives": "23 /  3"
      },
      {
        "target": "Receptor-type tyrosine-protein kinase FLT3",
        "commonName": "FLT3",
        "uniprotId": "P36888",
        "chemblId": "CHEMBL1974",
        "targetClass": "Kinase",
        "probability": 0.1633,
        "knownActives": "85 /  1"
      },
      {
        "target": "Alpha-ketoglutarate-dependent dioxygenase FTO",
        "commonName": "FTO",
        "uniprotId": "Q9C0B1",
        "chemblId": "CHEMBL2331065",
        "targetClass": "Oxidoreductase",
        "probability": 0.1619,
        "knownActives": "17 /  3"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 2",
        "commonName": "TRPV2",
        "uniprotId": "Q9Y5S1",
        "chemblId": "CHEMBL5051",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.1602,
        "knownActives": "5 /  2"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 4",
        "commonName": "TRPV4",
        "uniprotId": "Q9HBA0",
        "chemblId": "CHEMBL3119",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.1602,
        "knownActives": "10 /  2"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 3",
        "commonName": "TRPV3",
        "uniprotId": "Q8NET8",
        "chemblId": "CHEMBL5522",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.1602,
        "knownActives": "6 /  2"
      },
      {
        "target": "Transient receptor potential cation channel subfamily M member 8",
        "commonName": "TRPM8",
        "uniprotId": "Q7Z2W7",
        "chemblId": "CHEMBL1075319",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.1602,
        "knownActives": "50 /  3"
      },
      {
        "target": "5-hydroxytryptamine receptor 3A",
        "commonName": "HTR3A",
        "uniprotId": "P46098",
        "chemblId": "CHEMBL1899",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.1601,
        "knownActives": "6 /  1"
      },
      {
        "target": "Glycine receptor subunit alpha-1",
        "commonName": "GLRA1",
        "uniprotId": "P23415",
        "chemblId": "CHEMBL5845",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.1585,
        "knownActives": "3 /  4"
      },
      {
        "target": "Melatonin receptor type 1B",
        "commonName": "MTNR1B",
        "uniprotId": "P49286",
        "chemblId": "CHEMBL1946",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1567,
        "knownActives": "11 /  45"
      },
      {
        "target": "Tyrosine-protein kinase SYK",
        "commonName": "SYK",
        "uniprotId": "P43405",
        "chemblId": "CHEMBL2599",
        "targetClass": "Kinase",
        "probability": 0.1554,
        "knownActives": "27 /  1"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.1549,
        "knownActives": "228 /  24"
      },
      {
        "target": "5-hydroxytryptamine receptor 1A",
        "commonName": "HTR1A",
        "uniprotId": "P08908",
        "chemblId": "CHEMBL214",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1505,
        "knownActives": "75 /  53"
      },
      {
        "target": "Aurora kinase A",
        "commonName": "AURKA",
        "uniprotId": "O14965",
        "chemblId": "CHEMBL4722",
        "targetClass": "Kinase",
        "probability": 0.1489,
        "knownActives": "60 /  2"
      },
      {
        "target": "Carbonic anhydrase 5A, mitochondrial",
        "commonName": "CA5A",
        "uniprotId": "P35218",
        "chemblId": "CHEMBL4789",
        "targetClass": "Lyase",
        "probability": 0.1477,
        "knownActives": "15 /  13"
      },
      {
        "target": "5-hydroxytryptamine receptor 7",
        "commonName": "HTR7",
        "uniprotId": "P34969",
        "chemblId": "CHEMBL3155",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1459,
        "knownActives": "19 /  16"
      },
      {
        "target": "D(4) dopamine receptor",
        "commonName": "DRD4",
        "uniprotId": "P21917",
        "chemblId": "CHEMBL219",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.1453,
        "knownActives": "53 /  49"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.143,
        "knownActives": "87 /  24"
      },
      {
        "target": "Carbonic anhydrase 6",
        "commonName": "CA6",
        "uniprotId": "P23280",
        "chemblId": "CHEMBL3025",
        "targetClass": "Lyase",
        "probability": 0.1419,
        "knownActives": "18 /  12"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.1419,
        "knownActives": "184 /  71"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.1403,
        "knownActives": "106 /  16"
      }
    ]
  },
  {
    "id": "ursolic_acid",
    "name": "Ursolic acid",
    "cid": 64945,
    "smiles": "CC1CCC2(CCC3(C(=CCC4C3(CCC5C4(CCC(C5(C)C)O)C)C)C2C1C)C)C(=O)O",
    "category": "Pentacyclic Triterpenoid",
    "topTarget": "3',5'-cyclic-AMP phosphodiesterase 4D (PDE4D)",
    "topTargetUniprot": "Q08499",
    "targetClasses": [
      {
        "label": "Nuclear receptor",
        "count": 16,
        "percentage": 16.0,
        "color": "#3B82F6"
      },
      {
        "label": "Oxidoreductase",
        "count": 11,
        "percentage": 11.0,
        "color": "#10B981"
      },
      {
        "label": "Family A G protein-coupled receptor",
        "count": 10,
        "percentage": 10.0,
        "color": "#F59E0B"
      },
      {
        "label": "Hydrolase",
        "count": 6,
        "percentage": 6.0,
        "color": "#EF4444"
      },
      {
        "label": "Protease",
        "count": 6,
        "percentage": 6.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Phosphatase",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Unclassified protein",
        "count": 4,
        "percentage": 4.0,
        "color": "#06B6D4"
      },
      {
        "label": "Fatty acid binding protein family",
        "count": 4,
        "percentage": 4.0,
        "color": "#6366F1"
      },
      {
        "label": "Transferase",
        "count": 4,
        "percentage": 4.0,
        "color": "#14B8A6"
      },
      {
        "label": "Ligand-gated ion channel",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Isomerase",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Cytochrome P450",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Electrochemical transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#64748B"
      },
      {
        "label": "Kinase",
        "count": 3,
        "percentage": 3.0,
        "color": "#3B82F6"
      },
      {
        "label": "Other ion channel",
        "count": 3,
        "percentage": 3.0,
        "color": "#10B981"
      },
      {
        "label": "Surface antigen",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Secreted protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Aminoacyltransferase",
        "count": 2,
        "percentage": 2.0,
        "color": "#EC4899"
      },
      {
        "label": "Phosphodiesterase",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Other membrane protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Other cytosolic protein",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      },
      {
        "label": "Writer",
        "count": 1,
        "percentage": 1.0,
        "color": "#A855F7"
      },
      {
        "label": "Transcription factor",
        "count": 1,
        "percentage": 1.0,
        "color": "#64748B"
      }
    ],
    "targets": [
      {
        "target": "3',5'-cyclic-AMP phosphodiesterase 4D",
        "commonName": "PDE4D",
        "uniprotId": "Q08499",
        "chemblId": "CHEMBL288",
        "targetClass": "Phosphodiesterase",
        "probability": 0.948,
        "knownActives": "0 /  7"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.948,
        "knownActives": "0 /  89"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 2",
        "commonName": "PTPN2",
        "uniprotId": "P17706",
        "chemblId": "CHEMBL3807",
        "targetClass": "Phosphatase",
        "probability": 0.948,
        "knownActives": "0 /  14"
      },
      {
        "target": "Pancreatic triacylglycerol lipase",
        "commonName": "PNLIP",
        "uniprotId": "P16233",
        "chemblId": "CHEMBL1812",
        "targetClass": "Hydrolase",
        "probability": 0.948,
        "knownActives": "0 /  4"
      },
      {
        "target": "Tissue factor",
        "commonName": "F3",
        "uniprotId": "P13726",
        "chemblId": "CHEMBL4081",
        "targetClass": "Surface antigen",
        "probability": 0.948,
        "knownActives": "0 /  4"
      },
      {
        "target": "Aldo-keto reductase family 1 member B10",
        "commonName": "AKR1B10",
        "uniprotId": "O60218",
        "chemblId": "CHEMBL5983",
        "targetClass": "Oxidoreductase",
        "probability": 0.9146,
        "knownActives": "0 /  4"
      },
      {
        "target": "CD81 antigen",
        "commonName": "CD81",
        "uniprotId": "P60033",
        "chemblId": "CHEMBL1075180",
        "targetClass": "Surface antigen",
        "probability": 0.866,
        "knownActives": "0 /  3"
      },
      {
        "target": "Replication protein A 70 kDa DNA-binding subunit",
        "commonName": "RPA1",
        "uniprotId": "P27694",
        "chemblId": "CHEMBL1764940",
        "targetClass": "Unclassified protein",
        "probability": 0.6215,
        "knownActives": "0 /  1"
      },
      {
        "target": "Sentrin-specific protease 1",
        "commonName": "SENP1",
        "uniprotId": "Q9P0U3",
        "chemblId": "CHEMBL1909484",
        "targetClass": "Protease",
        "probability": 0.5204,
        "knownActives": "0 /  3"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.5204,
        "knownActives": "0 /  16"
      },
      {
        "target": "Nitric oxide synthase, inducible",
        "commonName": "NOS2",
        "uniprotId": "P35228",
        "chemblId": "CHEMBL4481",
        "targetClass": "Enzyme",
        "probability": 0.5204,
        "knownActives": "0 /  7"
      },
      {
        "target": "M-phase inducer phosphatase 1",
        "commonName": "CDC25A",
        "uniprotId": "P30304",
        "chemblId": "CHEMBL3775",
        "targetClass": "Phosphatase",
        "probability": 0.4861,
        "knownActives": "0 /  22"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.4483,
        "knownActives": "0 /  23"
      },
      {
        "target": "Peroxisome proliferator-activated receptor alpha",
        "commonName": "PPARA",
        "uniprotId": "Q07869",
        "chemblId": "CHEMBL239",
        "targetClass": "Nuclear receptor",
        "probability": 0.4072,
        "knownActives": "0 /  23"
      },
      {
        "target": "Peroxisome proliferator-activated receptor delta",
        "commonName": "PPARD",
        "uniprotId": "Q03181",
        "chemblId": "CHEMBL3979",
        "targetClass": "Nuclear receptor",
        "probability": 0.4072,
        "knownActives": "0 /  15"
      },
      {
        "target": "Fatty acid-binding protein 5",
        "commonName": "FABP5",
        "uniprotId": "Q01469",
        "chemblId": "CHEMBL3674",
        "targetClass": "Fatty acid binding protein family",
        "probability": 0.4072,
        "knownActives": "0 /  2"
      },
      {
        "target": "ATP-citrate synthase",
        "commonName": "ACLY",
        "uniprotId": "P53396",
        "chemblId": "CHEMBL3720",
        "targetClass": "Transferase",
        "probability": 0.4072,
        "knownActives": "0 /  5"
      },
      {
        "target": "Peroxisome proliferator-activated receptor gamma",
        "commonName": "PPARG",
        "uniprotId": "P37231",
        "chemblId": "CHEMBL235",
        "targetClass": "Nuclear receptor",
        "probability": 0.4072,
        "knownActives": "0 /  39"
      },
      {
        "target": "Fatty acid-binding protein, adipocyte",
        "commonName": "FABP4",
        "uniprotId": "P15090",
        "chemblId": "CHEMBL2083",
        "targetClass": "Fatty acid binding protein family",
        "probability": 0.4072,
        "knownActives": "0 /  5"
      },
      {
        "target": "72 kDa type IV collagenase",
        "commonName": "MMP2",
        "uniprotId": "P08253",
        "chemblId": "CHEMBL333",
        "targetClass": "Protease",
        "probability": 0.4072,
        "knownActives": "0 /  1"
      },
      {
        "target": "Fatty acid-binding protein, liver",
        "commonName": "FABP1",
        "uniprotId": "P07148",
        "chemblId": "CHEMBL5421",
        "targetClass": "Fatty acid binding protein family",
        "probability": 0.4072,
        "knownActives": "0 /  1"
      },
      {
        "target": "Fatty acid-binding protein, heart",
        "commonName": "FABP3",
        "uniprotId": "P05413",
        "chemblId": "CHEMBL3344",
        "targetClass": "Fatty acid binding protein family",
        "probability": 0.4072,
        "knownActives": "0 /  5"
      },
      {
        "target": "Telomerase reverse transcriptase",
        "commonName": "TERT",
        "uniprotId": "O14746",
        "chemblId": "CHEMBL2916",
        "targetClass": "Transferase",
        "probability": 0.4072,
        "knownActives": "0 /  2"
      },
      {
        "target": "Fatty-acid amide hydrolase 1",
        "commonName": "FAAH",
        "uniprotId": "O00519",
        "chemblId": "CHEMBL2243",
        "targetClass": "Hydrolase",
        "probability": 0.4072,
        "knownActives": "0 /  35"
      },
      {
        "target": "Estrogen receptor beta",
        "commonName": "ESR2",
        "uniprotId": "Q92731",
        "chemblId": "CHEMBL242",
        "targetClass": "Nuclear receptor",
        "probability": 0.3661,
        "knownActives": "0 /  52"
      },
      {
        "target": "Protein farnesyltransferase",
        "commonName": "N/A",
        "uniprotId": "P49354&P49356",
        "chemblId": "CHEMBL2094108",
        "targetClass": "Transferase",
        "probability": 0.3661,
        "knownActives": "0 /  22"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.3661,
        "knownActives": "0 /  52"
      },
      {
        "target": "Corticosteroid-binding globulin",
        "commonName": "SERPINA6",
        "uniprotId": "P08185",
        "chemblId": "CHEMBL2421",
        "targetClass": "Secreted protein",
        "probability": 0.3661,
        "knownActives": "0 /  23"
      },
      {
        "target": "Sex hormone-binding globulin",
        "commonName": "SHBG",
        "uniprotId": "P04278",
        "chemblId": "CHEMBL3305",
        "targetClass": "Secreted protein",
        "probability": 0.3661,
        "knownActives": "0 /  56"
      },
      {
        "target": "Estrogen receptor",
        "commonName": "ESR1",
        "uniprotId": "P03372",
        "chemblId": "CHEMBL206",
        "targetClass": "Nuclear receptor",
        "probability": 0.3661,
        "knownActives": "0 /  44"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 0.3463,
        "knownActives": "0 /  11"
      },
      {
        "target": "Alpha-crystallin B chain",
        "commonName": "CRYAB",
        "uniprotId": "P02511",
        "chemblId": "CHEMBL3621022",
        "targetClass": "Unclassified protein",
        "probability": 0.3261,
        "knownActives": "0 /  7"
      },
      {
        "target": "Stearoyl-CoA desaturase",
        "commonName": "SCD",
        "uniprotId": "O00767",
        "chemblId": "CHEMBL5555",
        "targetClass": "Enzyme",
        "probability": 0.3055,
        "knownActives": "0 /  1"
      },
      {
        "target": "Bile acid receptor",
        "commonName": "NR1H4",
        "uniprotId": "Q96RI1",
        "chemblId": "CHEMBL2047",
        "targetClass": "Nuclear receptor",
        "probability": 0.2608,
        "knownActives": "0 /  59"
      },
      {
        "target": "M-phase inducer phosphatase 2",
        "commonName": "CDC25B",
        "uniprotId": "P30305",
        "chemblId": "CHEMBL4804",
        "targetClass": "Phosphatase",
        "probability": 0.2422,
        "knownActives": "0 /  8"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.2422,
        "knownActives": "0 /  509"
      },
      {
        "target": "Leukotriene B4 receptor 1",
        "commonName": "LTB4R",
        "uniprotId": "Q15722",
        "chemblId": "CHEMBL3911",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.2094,
        "knownActives": "0 /  8"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.2094,
        "knownActives": "0 /  7"
      },
      {
        "target": "Cholinesterase",
        "commonName": "BCHE",
        "uniprotId": "P06276",
        "chemblId": "CHEMBL1914",
        "targetClass": "Hydrolase",
        "probability": 0.2094,
        "knownActives": "0 /  5"
      },
      {
        "target": "Oxysterols receptor LXR-alpha",
        "commonName": "NR1H3",
        "uniprotId": "Q13133",
        "chemblId": "CHEMBL2808",
        "targetClass": "Nuclear receptor",
        "probability": 0.1932,
        "knownActives": "0 /  32"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD11B2",
        "uniprotId": "P80365",
        "chemblId": "CHEMBL3746",
        "targetClass": "Oxidoreductase",
        "probability": 0.1555,
        "knownActives": "0 /  26"
      },
      {
        "target": "Mineralocorticoid receptor",
        "commonName": "NR3C2",
        "uniprotId": "P08235",
        "chemblId": "CHEMBL1994",
        "targetClass": "Nuclear receptor",
        "probability": 0.1555,
        "knownActives": "0 /  41"
      },
      {
        "target": "GABA-A receptor; alpha-1/beta-2/gamma-2",
        "commonName": "N/A",
        "uniprotId": "P14867&P47870&P18507",
        "chemblId": "CHEMBL2095172",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.142,
        "knownActives": "0 /  18"
      },
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.142,
        "knownActives": "0 /  140"
      },
      {
        "target": "NPC1-like intracellular cholesterol transporter 1",
        "commonName": "NPC1L1",
        "uniprotId": "Q9UHC9",
        "chemblId": "CHEMBL2027",
        "targetClass": "Other membrane protein",
        "probability": 0.1289,
        "knownActives": "0 /  17"
      },
      {
        "target": "Sigma non-opioid intracellular receptor 1",
        "commonName": "SIGMAR1",
        "uniprotId": "Q99720",
        "chemblId": "CHEMBL287",
        "targetClass": "Membrane receptor",
        "probability": 0.1289,
        "knownActives": "0 /  6"
      },
      {
        "target": "Oxysterols receptor LXR-beta",
        "commonName": "NR1H2",
        "uniprotId": "P55055",
        "chemblId": "CHEMBL4093",
        "targetClass": "Nuclear receptor",
        "probability": 0.1289,
        "knownActives": "0 /  12"
      },
      {
        "target": "Glucose-6-phosphate 1-dehydrogenase",
        "commonName": "G6PD",
        "uniprotId": "P11413",
        "chemblId": "CHEMBL5347",
        "targetClass": "Oxidoreductase",
        "probability": 0.1289,
        "knownActives": "0 /  9"
      },
      {
        "target": "Steroid 17-alpha-hydroxylase/17,20 lyase",
        "commonName": "CYP17A1",
        "uniprotId": "P05093",
        "chemblId": "CHEMBL3522",
        "targetClass": "Cytochrome P450",
        "probability": 0.1289,
        "knownActives": "0 /  70"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.1289,
        "knownActives": "0 /  72"
      },
      {
        "target": "3-hydroxy-3-methylglutaryl-coenzyme A reductase",
        "commonName": "HMGCR",
        "uniprotId": "P04035",
        "chemblId": "CHEMBL402",
        "targetClass": "Oxidoreductase",
        "probability": 0.1289,
        "knownActives": "0 /  32"
      },
      {
        "target": "Aldo-keto reductase family 1 member C3",
        "commonName": "AKR1C3",
        "uniprotId": "P42330",
        "chemblId": "CHEMBL4681",
        "targetClass": "Oxidoreductase",
        "probability": 0.1163,
        "knownActives": "0 /  3"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.1163,
        "knownActives": "0 /  3"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0937,
        "knownActives": "0 /  7"
      },
      {
        "target": "Cytochrome P450 2C19",
        "commonName": "CYP2C19",
        "uniprotId": "P33261",
        "chemblId": "CHEMBL3622",
        "targetClass": "Cytochrome P450",
        "probability": 0.0937,
        "knownActives": "0 /  6"
      },
      {
        "target": "Mitogen-activated protein kinase 3",
        "commonName": "MAPK3",
        "uniprotId": "P27361",
        "chemblId": "CHEMBL3385",
        "targetClass": "Kinase",
        "probability": 0.0937,
        "knownActives": "0 /  1"
      },
      {
        "target": "Adenosine receptor A3",
        "commonName": "ADORA3",
        "uniprotId": "P0DMS8",
        "chemblId": "CHEMBL256",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0937,
        "knownActives": "0 /  3"
      },
      {
        "target": "Progesterone receptor",
        "commonName": "PGR",
        "uniprotId": "P06401",
        "chemblId": "CHEMBL208",
        "targetClass": "Nuclear receptor",
        "probability": 0.0937,
        "knownActives": "0 /  58"
      },
      {
        "target": "Prostacyclin receptor",
        "commonName": "PTGIR",
        "uniprotId": "P43119",
        "chemblId": "CHEMBL1995",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0767,
        "knownActives": "0 /  11"
      },
      {
        "target": "Prostaglandin E2 receptor EP2 subtype",
        "commonName": "PTGER2",
        "uniprotId": "P43116",
        "chemblId": "CHEMBL1881",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0767,
        "knownActives": "0 /  19"
      },
      {
        "target": "Coagulation factor X",
        "commonName": "F10",
        "uniprotId": "P00742",
        "chemblId": "CHEMBL244",
        "targetClass": "Protease",
        "probability": 0.0767,
        "knownActives": "0 /  18"
      },
      {
        "target": "5'-AMP-activated protein kinase catalytic subunit alpha-2",
        "commonName": "PRKAA2",
        "uniprotId": "P54646",
        "chemblId": "CHEMBL2116",
        "targetClass": "Kinase",
        "probability": 0.0636,
        "knownActives": "0 /  1"
      },
      {
        "target": "3-oxo-5-alpha-steroid 4-dehydrogenase 2",
        "commonName": "SRD5A2",
        "uniprotId": "P31213",
        "chemblId": "CHEMBL1856",
        "targetClass": "Oxidoreductase",
        "probability": 0.0568,
        "knownActives": "0 /  47"
      },
      {
        "target": "Induced myeloid leukemia cell differentiation protein Mcl-1",
        "commonName": "MCL1",
        "uniprotId": "Q07820",
        "chemblId": "CHEMBL4361",
        "targetClass": "Other cytosolic protein",
        "probability": 0.0507,
        "knownActives": "0 /  6"
      },
      {
        "target": "Bcl-2-like protein 1",
        "commonName": "BCL2L1",
        "uniprotId": "Q07817",
        "chemblId": "CHEMBL4625",
        "targetClass": "Other ion channel",
        "probability": 0.0507,
        "knownActives": "0 /  6"
      },
      {
        "target": "Apoptosis regulator Bcl-2",
        "commonName": "BCL2",
        "uniprotId": "P10415",
        "chemblId": "CHEMBL4860",
        "targetClass": "Other ion channel",
        "probability": 0.0507,
        "knownActives": "0 /  2"
      },
      {
        "target": "Neuronal acetylcholine receptor subunit alpha-7",
        "commonName": "CHRNA7",
        "uniprotId": "P36544",
        "chemblId": "CHEMBL2492",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0498,
        "knownActives": "0 /  2"
      },
      {
        "target": "DNA topoisomerase 1",
        "commonName": "TOP1",
        "uniprotId": "P11387",
        "chemblId": "CHEMBL1781",
        "targetClass": "Isomerase",
        "probability": 0.0468,
        "knownActives": "0 /  3"
      },
      {
        "target": "Polyunsaturated fatty acid 5-lipoxygenase",
        "commonName": "ALOX5",
        "uniprotId": "P09917",
        "chemblId": "CHEMBL215",
        "targetClass": "Oxidoreductase",
        "probability": 0.0444,
        "knownActives": "0 /  17"
      },
      {
        "target": "Liver carboxylesterase 1",
        "commonName": "CES1",
        "uniprotId": "P23141",
        "chemblId": "CHEMBL2265",
        "targetClass": "Hydrolase",
        "probability": 0.0428,
        "knownActives": "0 /  9"
      },
      {
        "target": "DNA topoisomerase 2-alpha",
        "commonName": "TOP2A",
        "uniprotId": "P11388",
        "chemblId": "CHEMBL1806",
        "targetClass": "Isomerase",
        "probability": 0.0423,
        "knownActives": "0 /  2"
      },
      {
        "target": "Cholesteryl ester transfer protein",
        "commonName": "CETP",
        "uniprotId": "P11597",
        "chemblId": "CHEMBL3572",
        "targetClass": "Other ion channel",
        "probability": 0.0392,
        "knownActives": "0 /  5"
      },
      {
        "target": "Coagulation factor XIII A chain",
        "commonName": "F13A1",
        "uniprotId": "P00488",
        "chemblId": "CHEMBL4530",
        "targetClass": "Aminoacyltransferase",
        "probability": 0.0337,
        "knownActives": "0 /  4"
      },
      {
        "target": "Sodium-dependent serotonin transporter",
        "commonName": "SLC6A4",
        "uniprotId": "P31645",
        "chemblId": "CHEMBL228",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0298,
        "knownActives": "0 /  7"
      },
      {
        "target": "Sodium-dependent noradrenaline transporter",
        "commonName": "SLC6A2",
        "uniprotId": "P23975",
        "chemblId": "CHEMBL222",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0298,
        "knownActives": "0 /  5"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.0298,
        "knownActives": "0 /  16"
      },
      {
        "target": "Muscarinic acetylcholine receptor M2",
        "commonName": "CHRM2",
        "uniprotId": "P08172",
        "chemblId": "CHEMBL211",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0298,
        "knownActives": "0 /  12"
      },
      {
        "target": "Glutamate receptor ionotropic, kainate 2",
        "commonName": "GRIK2",
        "uniprotId": "Q13002",
        "chemblId": "CHEMBL3683",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0275,
        "knownActives": "0 /  27"
      },
      {
        "target": "Glutamate receptor ionotropic, kainate 1",
        "commonName": "GRIK1",
        "uniprotId": "P39086",
        "chemblId": "CHEMBL1918",
        "targetClass": "Ligand-gated ion channel",
        "probability": 0.0275,
        "knownActives": "0 /  53"
      },
      {
        "target": "Nuclear receptor subfamily 4 group A member 2",
        "commonName": "NR4A2",
        "uniprotId": "P43354",
        "chemblId": "CHEMBL5002",
        "targetClass": "Nuclear receptor",
        "probability": 0.0242,
        "knownActives": "0 /  3"
      },
      {
        "target": "Transient receptor potential cation channel subfamily V member 1",
        "commonName": "TRPV1",
        "uniprotId": "Q8NER1",
        "chemblId": "CHEMBL4794",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0211,
        "knownActives": "0 /  11"
      },
      {
        "target": "Delta(24)-sterol reductase",
        "commonName": "DHCR24",
        "uniprotId": "Q15392",
        "chemblId": "CHEMBL2331059",
        "targetClass": "Oxidoreductase",
        "probability": 0.0211,
        "knownActives": "0 /  11"
      },
      {
        "target": "Histone acetyltransferase p300",
        "commonName": "EP300",
        "uniprotId": "Q09472",
        "chemblId": "CHEMBL3784",
        "targetClass": "Writer",
        "probability": 0.0211,
        "knownActives": "0 /  4"
      },
      {
        "target": "Nuclear receptor ROR-gamma",
        "commonName": "RORC",
        "uniprotId": "P51449",
        "chemblId": "CHEMBL1741186",
        "targetClass": "Nuclear receptor",
        "probability": 0.0211,
        "knownActives": "0 /  31"
      },
      {
        "target": "Nuclear receptor ROR-alpha",
        "commonName": "RORA",
        "uniprotId": "P35398",
        "chemblId": "CHEMBL5868",
        "targetClass": "Nuclear receptor",
        "probability": 0.0211,
        "knownActives": "0 /  4"
      },
      {
        "target": "Alpha-crystallin A chain",
        "commonName": "CRYAA",
        "uniprotId": "P02489",
        "chemblId": "CHEMBL4296283",
        "targetClass": "Unclassified protein",
        "probability": 0.0211,
        "knownActives": "0 /  1"
      },
      {
        "target": "Nuclear factor erythroid 2-related factor 2",
        "commonName": "NFE2L2",
        "uniprotId": "Q16236",
        "chemblId": "CHEMBL1075094",
        "targetClass": "Transcription factor",
        "probability": 0.0188,
        "knownActives": "0 /  4"
      },
      {
        "target": "AMPK alpha2/beta1/gamma1",
        "commonName": "N/A",
        "uniprotId": "P54646&P54619&Q9Y478",
        "chemblId": "CHEMBL3038455",
        "targetClass": "Kinase",
        "probability": 0.0155,
        "knownActives": "0 /  13"
      },
      {
        "target": "HSP60/HSP10",
        "commonName": "N/A",
        "uniprotId": "P10809&P61604",
        "chemblId": "CHEMBL4106131",
        "targetClass": "Unclassified protein",
        "probability": 0.0155,
        "knownActives": "0 /  3"
      },
      {
        "target": "SUMO-activating enzyme",
        "commonName": "N/A",
        "uniprotId": "Q9UBE0&Q9UBT2",
        "chemblId": "CHEMBL2095174",
        "targetClass": "Aminoacyltransferase",
        "probability": 0.0152,
        "knownActives": "0 /  2"
      },
      {
        "target": "5'-nucleotidase",
        "commonName": "NT5E",
        "uniprotId": "P21589",
        "chemblId": "CHEMBL5957",
        "targetClass": "Phosphatase",
        "probability": 0.0152,
        "knownActives": "0 /  3"
      },
      {
        "target": "Prostaglandin E2 receptor EP3 subtype",
        "commonName": "PTGER3",
        "uniprotId": "P43115",
        "chemblId": "CHEMBL3710",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0143,
        "knownActives": "0 /  15"
      },
      {
        "target": "Prostaglandin E2 receptor EP4 subtype",
        "commonName": "PTGER4",
        "uniprotId": "P35408",
        "chemblId": "CHEMBL1836",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0143,
        "knownActives": "0 /  19"
      },
      {
        "target": "Prostaglandin E2 receptor EP1 subtype",
        "commonName": "PTGER1",
        "uniprotId": "P34995",
        "chemblId": "CHEMBL1811",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0143,
        "knownActives": "0 /  8"
      },
      {
        "target": "C-C chemokine receptor type 5",
        "commonName": "CCR5",
        "uniprotId": "P51681",
        "chemblId": "CHEMBL274",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0132,
        "knownActives": "0 /  1"
      },
      {
        "target": "Dihydrolipoyllysine-residue acetyltransferase component of pyruvate dehydrogenase complex, mitochondrial",
        "commonName": "DLAT",
        "uniprotId": "P10515",
        "chemblId": "CHEMBL4523180",
        "targetClass": "Transferase",
        "probability": 0.0127,
        "knownActives": "0 /  1"
      },
      {
        "target": "Nuclear receptor subfamily 1 group I member 2",
        "commonName": "NR1I2",
        "uniprotId": "O75469",
        "chemblId": "CHEMBL3401",
        "targetClass": "Nuclear receptor",
        "probability": 0.0127,
        "knownActives": "0 /  3"
      },
      {
        "target": "Gamma-secretase",
        "commonName": "N/A",
        "uniprotId": "Q96BI3&Q9NZ42&Q8WW43&P49768&Q92542&P49810",
        "chemblId": "CHEMBL2094135",
        "targetClass": "Protease",
        "probability": 0.0112,
        "knownActives": "0 /  2"
      },
      {
        "target": "G-protein coupled bile acid receptor 1",
        "commonName": "GPBAR1",
        "uniprotId": "Q8TDU6",
        "chemblId": "CHEMBL5409",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0112,
        "knownActives": "0 /  6"
      },
      {
        "target": "Disintegrin and metalloproteinase domain-containing protein 17",
        "commonName": "ADAM17",
        "uniprotId": "P78536",
        "chemblId": "CHEMBL3706",
        "targetClass": "Protease",
        "probability": 0.0112,
        "knownActives": "0 /  1"
      }
    ]
  },
  {
    "id": "withaferin_a",
    "name": "Withaferin A",
    "cid": 265237,
    "smiles": "CC1C2C(CC1C3(C(C4C(C(C3)O)C5(C(=CC(=O)C(C5)O)C)CC4)C)O)OC(=O)C(C2)C",
    "category": "Steroidal Lactone",
    "topTarget": "Androgen receptor (AR)",
    "topTargetUniprot": "P10275",
    "targetClasses": [
      {
        "label": "Family A G protein-coupled receptor",
        "count": 17,
        "percentage": 17.0,
        "color": "#3B82F6"
      },
      {
        "label": "Phosphatase",
        "count": 11,
        "percentage": 11.0,
        "color": "#10B981"
      },
      {
        "label": "Protease",
        "count": 10,
        "percentage": 10.0,
        "color": "#F59E0B"
      },
      {
        "label": "Oxidoreductase",
        "count": 9,
        "percentage": 9.0,
        "color": "#EF4444"
      },
      {
        "label": "Nuclear receptor",
        "count": 6,
        "percentage": 6.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Kinase",
        "count": 5,
        "percentage": 5.0,
        "color": "#EC4899"
      },
      {
        "label": "Hydrolase",
        "count": 5,
        "percentage": 5.0,
        "color": "#06B6D4"
      },
      {
        "label": "Lyase",
        "count": 5,
        "percentage": 5.0,
        "color": "#6366F1"
      },
      {
        "label": "Transcription factor",
        "count": 5,
        "percentage": 5.0,
        "color": "#14B8A6"
      },
      {
        "label": "Cytochrome P450",
        "count": 4,
        "percentage": 4.0,
        "color": "#F97316"
      },
      {
        "label": "Transferase",
        "count": 3,
        "percentage": 3.0,
        "color": "#84CC16"
      },
      {
        "label": "Electrochemical transporter",
        "count": 3,
        "percentage": 3.0,
        "color": "#A855F7"
      },
      {
        "label": "Isomerase",
        "count": 2,
        "percentage": 2.0,
        "color": "#64748B"
      },
      {
        "label": "Unclassified protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#3B82F6"
      },
      {
        "label": "Toll-like and Il-1 receptors",
        "count": 2,
        "percentage": 2.0,
        "color": "#10B981"
      },
      {
        "label": "Enzyme",
        "count": 2,
        "percentage": 2.0,
        "color": "#F59E0B"
      },
      {
        "label": "Secreted protein",
        "count": 2,
        "percentage": 2.0,
        "color": "#EF4444"
      },
      {
        "label": "Eraser",
        "count": 1,
        "percentage": 1.0,
        "color": "#8B5CF6"
      },
      {
        "label": "Reader",
        "count": 1,
        "percentage": 1.0,
        "color": "#EC4899"
      },
      {
        "label": "Adhesion",
        "count": 1,
        "percentage": 1.0,
        "color": "#06B6D4"
      },
      {
        "label": "Primary active transporter",
        "count": 1,
        "percentage": 1.0,
        "color": "#6366F1"
      },
      {
        "label": "Voltage-gated ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#14B8A6"
      },
      {
        "label": "Other ion channel",
        "count": 1,
        "percentage": 1.0,
        "color": "#F97316"
      },
      {
        "label": "Membrane receptor",
        "count": 1,
        "percentage": 1.0,
        "color": "#84CC16"
      }
    ],
    "targets": [
      {
        "target": "Androgen receptor",
        "commonName": "AR",
        "uniprotId": "P10275",
        "chemblId": "CHEMBL1871",
        "targetClass": "Nuclear receptor",
        "probability": 0.9648,
        "knownActives": "1698 /  64"
      },
      {
        "target": "Aromatase",
        "commonName": "CYP19A1",
        "uniprotId": "P11511",
        "chemblId": "CHEMBL1978",
        "targetClass": "Cytochrome P450",
        "probability": 0.9553,
        "knownActives": "1425 /  151"
      },
      {
        "target": "3-hydroxy-3-methylglutaryl-coenzyme A reductase",
        "commonName": "HMGCR",
        "uniprotId": "P04035",
        "chemblId": "CHEMBL402",
        "targetClass": "Oxidoreductase",
        "probability": 0.9412,
        "knownActives": "203 /  23"
      },
      {
        "target": "M-phase inducer phosphatase 1",
        "commonName": "CDC25A",
        "uniprotId": "P30304",
        "chemblId": "CHEMBL3775",
        "targetClass": "Phosphatase",
        "probability": 0.9359,
        "knownActives": "101 /  24"
      },
      {
        "target": "Coagulation factor X",
        "commonName": "F10",
        "uniprotId": "P00742",
        "chemblId": "CHEMBL244",
        "targetClass": "Protease",
        "probability": 0.8376,
        "knownActives": "3910 /  28"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 1",
        "commonName": "PTPN1",
        "uniprotId": "P18031",
        "chemblId": "CHEMBL335",
        "targetClass": "Phosphatase",
        "probability": 0.8317,
        "knownActives": "819 /  66"
      },
      {
        "target": "Vitamin D3 receptor",
        "commonName": "VDR",
        "uniprotId": "P11473",
        "chemblId": "CHEMBL1977",
        "targetClass": "Nuclear receptor",
        "probability": 0.7699,
        "knownActives": "315 /  11"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase 1",
        "commonName": "HSD11B1",
        "uniprotId": "P28845",
        "chemblId": "CHEMBL4235",
        "targetClass": "Oxidoreductase",
        "probability": 0.7477,
        "knownActives": "2412 /  69"
      },
      {
        "target": "NAD-dependent protein deacetylase sirtuin-2",
        "commonName": "SIRT2",
        "uniprotId": "Q8IXJ6",
        "chemblId": "CHEMBL4462",
        "targetClass": "Eraser",
        "probability": 0.6506,
        "knownActives": "444 /  1"
      },
      {
        "target": "Kappa-type opioid receptor",
        "commonName": "OPRK1",
        "uniprotId": "P41145",
        "chemblId": "CHEMBL237",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.6348,
        "knownActives": "2918 /  119"
      },
      {
        "target": "11-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD11B2",
        "uniprotId": "P80365",
        "chemblId": "CHEMBL3746",
        "targetClass": "Oxidoreductase",
        "probability": 0.6253,
        "knownActives": "65 /  7"
      },
      {
        "target": "Ubiquitin carboxyl-terminal hydrolase 2",
        "commonName": "USP2",
        "uniprotId": "O75604",
        "chemblId": "CHEMBL1293227",
        "targetClass": "Protease",
        "probability": 0.5835,
        "knownActives": "25 /  1"
      },
      {
        "target": "Protein kinase C alpha type",
        "commonName": "PRKCA",
        "uniprotId": "P17252",
        "chemblId": "CHEMBL299",
        "targetClass": "Kinase",
        "probability": 0.5573,
        "knownActives": "803 /  188"
      },
      {
        "target": "Bromodomain-containing protein 4",
        "commonName": "BRD4",
        "uniprotId": "O60885",
        "chemblId": "CHEMBL1163125",
        "targetClass": "Reader",
        "probability": 0.5368,
        "knownActives": "6896 /  10"
      },
      {
        "target": "Glutathione S-transferase Mu 1",
        "commonName": "GSTM1",
        "uniprotId": "P09488",
        "chemblId": "CHEMBL2081",
        "targetClass": "Transferase",
        "probability": 0.4955,
        "knownActives": "1 /  1"
      },
      {
        "target": "Cytochrome P450 4A11",
        "commonName": "CYP4A11",
        "uniprotId": "Q02928",
        "chemblId": "CHEMBL3978",
        "targetClass": "Cytochrome P450",
        "probability": 0.4146,
        "knownActives": "185 /  7"
      },
      {
        "target": "Mu-type opioid receptor",
        "commonName": "OPRM1",
        "uniprotId": "P35372",
        "chemblId": "CHEMBL233",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.3674,
        "knownActives": "3568 /  29"
      },
      {
        "target": "UDP-glucuronosyltransferase 2B7",
        "commonName": "UGT2B7",
        "uniprotId": "P16662",
        "chemblId": "CHEMBL4370",
        "targetClass": "Transferase",
        "probability": 0.3296,
        "knownActives": "12 /  8"
      },
      {
        "target": "M-phase inducer phosphatase 2",
        "commonName": "CDC25B",
        "uniprotId": "P30305",
        "chemblId": "CHEMBL4804",
        "targetClass": "Phosphatase",
        "probability": 0.2626,
        "knownActives": "152 /  22"
      },
      {
        "target": "Bile acid receptor",
        "commonName": "NR1H4",
        "uniprotId": "Q96RI1",
        "chemblId": "CHEMBL2047",
        "targetClass": "Nuclear receptor",
        "probability": 0.2481,
        "knownActives": "1869 /  104"
      },
      {
        "target": "Acetylcholinesterase",
        "commonName": "ACHE",
        "uniprotId": "P22303",
        "chemblId": "CHEMBL220",
        "targetClass": "Hydrolase",
        "probability": 0.2392,
        "knownActives": "3547 /  9"
      },
      {
        "target": "Carbonic anhydrase 9",
        "commonName": "CA9",
        "uniprotId": "Q16790",
        "chemblId": "CHEMBL3594",
        "targetClass": "Lyase",
        "probability": 0.2168,
        "knownActives": "4211 /  19"
      },
      {
        "target": "Carbonic anhydrase 1",
        "commonName": "CA1",
        "uniprotId": "P00915",
        "chemblId": "CHEMBL261",
        "targetClass": "Lyase",
        "probability": 0.2168,
        "knownActives": "4670 /  30"
      },
      {
        "target": "Prostaglandin G/H synthase 2",
        "commonName": "PTGS2",
        "uniprotId": "P35354",
        "chemblId": "CHEMBL230",
        "targetClass": "Oxidoreductase",
        "probability": 0.2006,
        "knownActives": "2455 /  18"
      },
      {
        "target": "Gamma-secretase",
        "commonName": "N/A",
        "uniprotId": "Q96BI3&Q9NZ42&Q8WW43&P49768&Q92542&P49810",
        "chemblId": "CHEMBL2094135",
        "targetClass": "Protease",
        "probability": 0.2005,
        "knownActives": "1910 /  17"
      },
      {
        "target": "Serine/threonine-protein phosphatase PP1-alpha catalytic subunit",
        "commonName": "PPP1CA",
        "uniprotId": "P62136",
        "chemblId": "CHEMBL2164",
        "targetClass": "Phosphatase",
        "probability": 0.1894,
        "knownActives": "43 /  3"
      },
      {
        "target": "Mitogen-activated protein kinase kinase kinase 5",
        "commonName": "MAP3K5",
        "uniprotId": "Q99683",
        "chemblId": "CHEMBL5285",
        "targetClass": "Kinase",
        "probability": 0.1882,
        "knownActives": "1002 /  3"
      },
      {
        "target": "Cytochrome P450 4F2",
        "commonName": "CYP4F2",
        "uniprotId": "P78329",
        "chemblId": "CHEMBL3379",
        "targetClass": "Cytochrome P450",
        "probability": 0.1397,
        "knownActives": "161 /  4"
      },
      {
        "target": "Serine/threonine-protein phosphatase",
        "commonName": "PPP5C",
        "uniprotId": "Q9BPW0",
        "chemblId": "CHEMBL1293265",
        "targetClass": "Phosphatase",
        "probability": 0.1391,
        "knownActives": "16 /  3"
      },
      {
        "target": "Serine/threonine-protein phosphatase 5",
        "commonName": "PPP5C",
        "uniprotId": "P53041",
        "chemblId": "CHEMBL3425389",
        "targetClass": "Phosphatase",
        "probability": 0.105,
        "knownActives": "6 /  5"
      },
      {
        "target": "Carbonic anhydrase 2",
        "commonName": "CA2",
        "uniprotId": "P00918",
        "chemblId": "CHEMBL205",
        "targetClass": "Lyase",
        "probability": 0.0939,
        "knownActives": "5610 /  26"
      },
      {
        "target": "Protein kinase C epsilon type",
        "commonName": "PRKCE",
        "uniprotId": "Q02156",
        "chemblId": "CHEMBL3582",
        "targetClass": "Kinase",
        "probability": 0.0913,
        "knownActives": "265 /  33"
      },
      {
        "target": "Hypoxia-inducible factor 1-alpha",
        "commonName": "HIF1A",
        "uniprotId": "Q16665",
        "chemblId": "CHEMBL4261",
        "targetClass": "Transcription factor",
        "probability": 0.0861,
        "knownActives": "201 /  4"
      },
      {
        "target": "Protein kinase C theta type",
        "commonName": "PRKCQ",
        "uniprotId": "Q04759",
        "chemblId": "CHEMBL3920",
        "targetClass": "Kinase",
        "probability": 0.085,
        "knownActives": "846 /  15"
      },
      {
        "target": "Prostaglandin E synthase",
        "commonName": "PTGES",
        "uniprotId": "O14684",
        "chemblId": "CHEMBL5658",
        "targetClass": "Isomerase",
        "probability": 0.0842,
        "knownActives": "1278 /  8"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 3",
        "commonName": "HSD17B3",
        "uniprotId": "P37058",
        "chemblId": "CHEMBL4234",
        "targetClass": "Oxidoreductase",
        "probability": 0.0823,
        "knownActives": "57 /  18"
      },
      {
        "target": "Prothrombin",
        "commonName": "F2",
        "uniprotId": "P00734",
        "chemblId": "CHEMBL204",
        "targetClass": "Protease",
        "probability": 0.0809,
        "knownActives": "2960 /  19"
      },
      {
        "target": "Beta-secretase 1",
        "commonName": "BACE1",
        "uniprotId": "P56817",
        "chemblId": "CHEMBL4822",
        "targetClass": "Protease",
        "probability": 0.075,
        "knownActives": "7827 /  5"
      },
      {
        "target": "Serine protease 1",
        "commonName": "PRSS1",
        "uniprotId": "P07477",
        "chemblId": "CHEMBL209",
        "targetClass": "Protease",
        "probability": 0.0703,
        "knownActives": "633 /  14"
      },
      {
        "target": "Prolyl endopeptidase",
        "commonName": "PREP",
        "uniprotId": "P48147",
        "chemblId": "CHEMBL3202",
        "targetClass": "Protease",
        "probability": 0.0689,
        "knownActives": "286 /  1"
      },
      {
        "target": "Serine/threonine-protein phosphatase PP1-gamma catalytic subunit",
        "commonName": "PPP1CC",
        "uniprotId": "P36873",
        "chemblId": "CHEMBL4438",
        "targetClass": "Phosphatase",
        "probability": 0.0672,
        "knownActives": "4 /  6"
      },
      {
        "target": "Protein phosphatase 1B",
        "commonName": "PPM1B",
        "uniprotId": "O75688",
        "chemblId": "CHEMBL2845",
        "targetClass": "Phosphatase",
        "probability": 0.0672,
        "knownActives": "3 /  4"
      },
      {
        "target": "Intercellular adhesion molecule 1",
        "commonName": "ICAM1",
        "uniprotId": "P05362",
        "chemblId": "CHEMBL3070",
        "targetClass": "Adhesion",
        "probability": 0.0646,
        "knownActives": "122 /  1"
      },
      {
        "target": "Chymotrypsin-C",
        "commonName": "CTRC",
        "uniprotId": "Q99895",
        "chemblId": "CHEMBL2386",
        "targetClass": "Protease",
        "probability": 0.0632,
        "knownActives": "47 /  3"
      },
      {
        "target": "Serine/threonine-protein phosphatase 2A catalytic subunit alpha isoform",
        "commonName": "PPP2CA",
        "uniprotId": "P67775",
        "chemblId": "CHEMBL4703",
        "targetClass": "Phosphatase",
        "probability": 0.0589,
        "knownActives": "2 /  6"
      },
      {
        "target": "Tissue factor pathway inhibitor 2",
        "commonName": "TFPI2",
        "uniprotId": "P48307",
        "chemblId": "CHEMBL6066240",
        "targetClass": "Unclassified protein",
        "probability": 0.0589,
        "knownActives": "8 /  5"
      },
      {
        "target": "Tyrosine-protein phosphatase non-receptor type 2",
        "commonName": "PTPN2",
        "uniprotId": "P17706",
        "chemblId": "CHEMBL3807",
        "targetClass": "Phosphatase",
        "probability": 0.0544,
        "knownActives": "148 /  12"
      },
      {
        "target": "ATP-dependent translocase ABCB1",
        "commonName": "ABCB1",
        "uniprotId": "P08183",
        "chemblId": "CHEMBL4302",
        "targetClass": "Primary active transporter",
        "probability": 0.0505,
        "knownActives": "1112 /  64"
      },
      {
        "target": "Kir3.1/Kir3.4",
        "commonName": "N/A",
        "uniprotId": "P48549&P48544",
        "chemblId": "CHEMBL3038488",
        "targetClass": "Voltage-gated ion channel",
        "probability": 0.0498,
        "knownActives": "288 /  5"
      },
      {
        "target": "Steroid 17-alpha-hydroxylase/17,20 lyase",
        "commonName": "CYP17A1",
        "uniprotId": "P05093",
        "chemblId": "CHEMBL3522",
        "targetClass": "Cytochrome P450",
        "probability": 0.0494,
        "knownActives": "482 /  31"
      },
      {
        "target": "Cholesteryl ester transfer protein",
        "commonName": "CETP",
        "uniprotId": "P11597",
        "chemblId": "CHEMBL3572",
        "targetClass": "Other ion channel",
        "probability": 0.0448,
        "knownActives": "490 /  4"
      },
      {
        "target": "Toll-like receptor 9",
        "commonName": "TLR9",
        "uniprotId": "Q9NR96",
        "chemblId": "CHEMBL5804",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.0446,
        "knownActives": "2480 /  2"
      },
      {
        "target": "NACHT, LRR and PYD domains-containing protein 3",
        "commonName": "NLRP3",
        "uniprotId": "Q96P20",
        "chemblId": "CHEMBL1741208",
        "targetClass": "Unclassified protein",
        "probability": 0.0414,
        "knownActives": "430 /  23"
      },
      {
        "target": "Aldo-keto reductase family 1 member C3",
        "commonName": "AKR1C3",
        "uniprotId": "P42330",
        "chemblId": "CHEMBL4681",
        "targetClass": "Oxidoreductase",
        "probability": 0.041,
        "knownActives": "464 /  15"
      },
      {
        "target": "Muscarinic acetylcholine receptor M2",
        "commonName": "CHRM2",
        "uniprotId": "P08172",
        "chemblId": "CHEMBL211",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0375,
        "knownActives": "1286 /  54"
      },
      {
        "target": "Mineralocorticoid receptor",
        "commonName": "NR3C2",
        "uniprotId": "P08235",
        "chemblId": "CHEMBL1994",
        "targetClass": "Nuclear receptor",
        "probability": 0.0365,
        "knownActives": "599 /  26"
      },
      {
        "target": "Muscarinic acetylcholine receptor M1",
        "commonName": "CHRM1",
        "uniprotId": "P11229",
        "chemblId": "CHEMBL216",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0344,
        "knownActives": "1403 /  58"
      },
      {
        "target": "Free fatty acid receptor 4",
        "commonName": "FFAR4",
        "uniprotId": "Q5NUL3",
        "chemblId": "CHEMBL5339",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0326,
        "knownActives": "519 /  72"
      },
      {
        "target": "Fatty-acid amide hydrolase 1",
        "commonName": "FAAH",
        "uniprotId": "O00519",
        "chemblId": "CHEMBL2243",
        "targetClass": "Hydrolase",
        "probability": 0.0317,
        "knownActives": "1309 /  15"
      },
      {
        "target": "Hepatic sodium/bile acid cotransporter",
        "commonName": "SLC10A1",
        "uniprotId": "Q14973",
        "chemblId": "CHEMBL5287",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0317,
        "knownActives": "150 /  2"
      },
      {
        "target": "Cannabinoid receptor 2",
        "commonName": "CNR2",
        "uniprotId": "P34972",
        "chemblId": "CHEMBL253",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0307,
        "knownActives": "4272 /  17"
      },
      {
        "target": "Solute carrier family 2, facilitated glucose transporter member 1",
        "commonName": "SLC2A1",
        "uniprotId": "P11166",
        "chemblId": "CHEMBL2535",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0296,
        "knownActives": "134 /  6"
      },
      {
        "target": "Bifunctional epoxide hydrolase 2",
        "commonName": "EPHX2",
        "uniprotId": "P34913",
        "chemblId": "CHEMBL2409",
        "targetClass": "Protease",
        "probability": 0.0265,
        "knownActives": "1701 /  44"
      },
      {
        "target": "Progesterone receptor",
        "commonName": "PGR",
        "uniprotId": "P06401",
        "chemblId": "CHEMBL208",
        "targetClass": "Nuclear receptor",
        "probability": 0.0262,
        "knownActives": "1101 /  45"
      },
      {
        "target": "Protein farnesyltransferase",
        "commonName": "N/A",
        "uniprotId": "P49354&P49356",
        "chemblId": "CHEMBL2094108",
        "targetClass": "Transferase",
        "probability": 0.0261,
        "knownActives": "1248 /  9"
      },
      {
        "target": "Transcription factor Jun",
        "commonName": "JUN",
        "uniprotId": "P05412",
        "chemblId": "CHEMBL4977",
        "targetClass": "Transcription factor",
        "probability": 0.0261,
        "knownActives": "75 /  4"
      },
      {
        "target": "Glucocorticoid receptor",
        "commonName": "NR3C1",
        "uniprotId": "P04150",
        "chemblId": "CHEMBL2034",
        "targetClass": "Nuclear receptor",
        "probability": 0.0255,
        "knownActives": "2306 /  21"
      },
      {
        "target": "Cannabinoid receptor 1",
        "commonName": "CNR1",
        "uniprotId": "P21554",
        "chemblId": "CHEMBL218",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0242,
        "knownActives": "3226 /  21"
      },
      {
        "target": "DNA topoisomerase 2-alpha",
        "commonName": "TOP2A",
        "uniprotId": "P11388",
        "chemblId": "CHEMBL1806",
        "targetClass": "Isomerase",
        "probability": 0.0223,
        "knownActives": "65 /  1"
      },
      {
        "target": "Prostaglandin E2 receptor EP2 subtype",
        "commonName": "PTGER2",
        "uniprotId": "P43116",
        "chemblId": "CHEMBL1881",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0207,
        "knownActives": "225 /  8"
      },
      {
        "target": "Signal transducer and activator of transcription 1-alpha/beta",
        "commonName": "STAT1",
        "uniprotId": "P42224",
        "chemblId": "CHEMBL6101",
        "targetClass": "Transcription factor",
        "probability": 0.0206,
        "knownActives": "6 /  3"
      },
      {
        "target": "Diacylglycerol lipase-alpha",
        "commonName": "DAGLA",
        "uniprotId": "Q9Y4D2",
        "chemblId": "CHEMBL5545",
        "targetClass": "Hydrolase",
        "probability": 0.0198,
        "knownActives": "116 /  13"
      },
      {
        "target": "Monoglyceride lipase",
        "commonName": "MGLL",
        "uniprotId": "Q99685",
        "chemblId": "CHEMBL4191",
        "targetClass": "Hydrolase",
        "probability": 0.0198,
        "knownActives": "1193 /  6"
      },
      {
        "target": "Prostaglandin F2-alpha receptor",
        "commonName": "PTGFR",
        "uniprotId": "P43088",
        "chemblId": "CHEMBL1987",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0195,
        "knownActives": "393 /  18"
      },
      {
        "target": "Autotaxin",
        "commonName": "ENPP2",
        "uniprotId": "Q13822",
        "chemblId": "CHEMBL3691",
        "targetClass": "Enzyme",
        "probability": 0.0193,
        "knownActives": "1098 /  20"
      },
      {
        "target": "Adenylate cyclase type 8",
        "commonName": "ADCY8",
        "uniprotId": "P40145",
        "chemblId": "CHEMBL2960",
        "targetClass": "Lyase",
        "probability": 0.0193,
        "knownActives": "43 /  1"
      },
      {
        "target": "Corticosteroid-binding globulin",
        "commonName": "SERPINA6",
        "uniprotId": "P08185",
        "chemblId": "CHEMBL2421",
        "targetClass": "Secreted protein",
        "probability": 0.0184,
        "knownActives": "18 /  5"
      },
      {
        "target": "Cocaine esterase",
        "commonName": "CES2",
        "uniprotId": "O00748",
        "chemblId": "CHEMBL3180",
        "targetClass": "Hydrolase",
        "probability": 0.0184,
        "knownActives": "89 /  14"
      },
      {
        "target": "Sodium-dependent dopamine transporter",
        "commonName": "SLC6A3",
        "uniprotId": "Q01959",
        "chemblId": "CHEMBL238",
        "targetClass": "Electrochemical transporter",
        "probability": 0.0173,
        "knownActives": "2916 /  30"
      },
      {
        "target": "Transcription factor p65",
        "commonName": "RELA",
        "uniprotId": "Q04206",
        "chemblId": "CHEMBL5533",
        "targetClass": "Transcription factor",
        "probability": 0.0163,
        "knownActives": "42 /  3"
      },
      {
        "target": "Muscarinic acetylcholine receptor M3",
        "commonName": "CHRM3",
        "uniprotId": "P20309",
        "chemblId": "CHEMBL245",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0163,
        "knownActives": "1522 /  29"
      },
      {
        "target": "Adenylate cyclase type 1",
        "commonName": "ADCY1",
        "uniprotId": "Q08828",
        "chemblId": "CHEMBL2899",
        "targetClass": "Lyase",
        "probability": 0.014,
        "knownActives": "118 /  33"
      },
      {
        "target": "G-protein coupled bile acid receptor 1",
        "commonName": "GPBAR1",
        "uniprotId": "Q8TDU6",
        "chemblId": "CHEMBL5409",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0135,
        "knownActives": "359 /  5"
      },
      {
        "target": "Cathepsin K",
        "commonName": "CTSK",
        "uniprotId": "P43235",
        "chemblId": "CHEMBL268",
        "targetClass": "Protease",
        "probability": 0.0135,
        "knownActives": "1692 /  11"
      },
      {
        "target": "Toll-like receptor 4",
        "commonName": "TLR4",
        "uniprotId": "O00206",
        "chemblId": "CHEMBL5255",
        "targetClass": "Toll-like and Il-1 receptors",
        "probability": 0.0132,
        "knownActives": "89 /  5"
      },
      {
        "target": "Interleukin-1 beta",
        "commonName": "IL1B",
        "uniprotId": "P01584",
        "chemblId": "CHEMBL1909490",
        "targetClass": "Secreted protein",
        "probability": 0.0131,
        "knownActives": "159 /  3"
      },
      {
        "target": "D(3) dopamine receptor",
        "commonName": "DRD3",
        "uniprotId": "P35462",
        "chemblId": "CHEMBL234",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.013,
        "knownActives": "4220 /  1"
      },
      {
        "target": "Muscarinic acetylcholine receptor M5",
        "commonName": "CHRM5",
        "uniprotId": "P08912",
        "chemblId": "CHEMBL2035",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.013,
        "knownActives": "556 /  6"
      },
      {
        "target": "Muscarinic acetylcholine receptor M4",
        "commonName": "CHRM4",
        "uniprotId": "P08173",
        "chemblId": "CHEMBL1821",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.013,
        "knownActives": "834 /  29"
      },
      {
        "target": "Delta(24)-sterol reductase",
        "commonName": "DHCR24",
        "uniprotId": "Q15392",
        "chemblId": "CHEMBL2331059",
        "targetClass": "Oxidoreductase",
        "probability": 0.0128,
        "knownActives": "12 /  8"
      },
      {
        "target": "Protein kinase C delta type",
        "commonName": "PRKCD",
        "uniprotId": "Q05655",
        "chemblId": "CHEMBL2996",
        "targetClass": "Kinase",
        "probability": 0.0127,
        "knownActives": "551 /  40"
      },
      {
        "target": "85/88 kDa calcium-independent phospholipase A2",
        "commonName": "PLA2G6",
        "uniprotId": "O60733",
        "chemblId": "CHEMBL3213",
        "targetClass": "Enzyme",
        "probability": 0.0125,
        "knownActives": "8 /  2"
      },
      {
        "target": "Low molecular weight phosphotyrosine protein phosphatase",
        "commonName": "ACP1",
        "uniprotId": "P24666",
        "chemblId": "CHEMBL4903",
        "targetClass": "Phosphatase",
        "probability": 0.012,
        "knownActives": "237 /  3"
      },
      {
        "target": "5-hydroxytryptamine receptor 6",
        "commonName": "HTR6",
        "uniprotId": "P50406",
        "chemblId": "CHEMBL3371",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0118,
        "knownActives": "3591 /  1"
      },
      {
        "target": "5-hydroxytryptamine receptor 2C",
        "commonName": "HTR2C",
        "uniprotId": "P28335",
        "chemblId": "CHEMBL225",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0116,
        "knownActives": "2892 /  1"
      },
      {
        "target": "5-hydroxytryptamine receptor 2A",
        "commonName": "HTR2A",
        "uniprotId": "P28223",
        "chemblId": "CHEMBL224",
        "targetClass": "Family A G protein-coupled receptor",
        "probability": 0.0116,
        "knownActives": "4673 /  6"
      },
      {
        "target": "Sigma non-opioid intracellular receptor 1",
        "commonName": "SIGMAR1",
        "uniprotId": "Q99720",
        "chemblId": "CHEMBL287",
        "targetClass": "Membrane receptor",
        "probability": 0.0116,
        "knownActives": "2614 /  9"
      },
      {
        "target": "17-beta-hydroxysteroid dehydrogenase type 2",
        "commonName": "HSD17B2",
        "uniprotId": "P37059",
        "chemblId": "CHEMBL2789",
        "targetClass": "Oxidoreductase",
        "probability": 0.0115,
        "knownActives": "142 /  4"
      },
      {
        "target": "Endothelial PAS domain-containing protein 1",
        "commonName": "EPAS1",
        "uniprotId": "Q99814",
        "chemblId": "CHEMBL1744522",
        "targetClass": "Transcription factor",
        "probability": 0.0113,
        "knownActives": "303 /  1"
      },
      {
        "target": "Prostaglandin G/H synthase 1",
        "commonName": "PTGS1",
        "uniprotId": "P23219",
        "chemblId": "CHEMBL221",
        "targetClass": "Oxidoreductase",
        "probability": 0.0104,
        "knownActives": "477 /  1"
      }
    ]
  }
];
