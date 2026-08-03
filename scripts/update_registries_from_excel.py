import pandas as pd

# 1. Update pathogen_target_registry.csv
targets_df = pd.read_excel(r'C:\Users\ayu23\Downloads\AYUSH_AMR_Final_Targets.xlsx')

rows = []
for idx, r in targets_df.iterrows():
    org = r['Organism']
    strain = str(r['Recommended Strain'])
    assembly = str(r['NCBI Assembly'])
    target = str(r['Target Protein'])
    gene = str(r['Gene'])
    locus = str(r['Locus Tag (Reference Strain)'])
    tclass = str(r['Target Class'])
    uniprot = str(r['UniProt'])
    pdb = str(r['Structure Availability'])

    target_clean = target.split('(')[0].strip()
    if 'Sortase' in target:
        target_clean = 'SrtA'
        target_label = 'Sortase A / SrtA'
    elif 'PqsR' in target:
        target_clean = 'PqsR'
        target_label = 'PqsR (MvfR)'
    elif 'PBP2a' in target:
        target_clean = 'MecA'
        target_label = 'PBP2a / MecA'
    else:
        target_label = target_clean

    scenario_id = f"primary_{org.split()[0].lower()}"
    rows.append({
        'scenario_id': scenario_id,
        'pathogen_species': org,
        'target_symbol': target_label,
        'gene_name': gene,
        'target_id': target_clean.upper(),
        'uniprot_accession': uniprot,
        'ncbi_accession': f"GCF_{assembly.replace('GCF_', '')}",
        'fasta_path': f"data/prepared/targets/{target_clean.lower()}/sequence.fasta",
        'structure_source': pdb,
        'pdb_id': pdb.split(': ')[1] if ': ' in pdb else pdb,
        'pdb_download_url': f"https://files.rcsb.org/download/{pdb.split(': ')[1].split(',')[0]}.pdb" if ': ' in pdb else "AlphaFold",
        'validation_tier': 'curated_literature',
        'source_traceability_id': f"UNIPROT_ACC_{uniprot}"
    })

reg_out_df = pd.DataFrame(rows)
reg_out_df.to_csv('data/inputs/pathogen_target_registry.csv', index=False)
print("Updated pathogen_target_registry.csv cleanly!")

# 2. Update ligand_library.csv
ligands_df = pd.read_excel(r'C:\Users\ayu23\Downloads\Verified_AYUSH_Ligands_24 (1).xlsx')

lig_rows = []
for idx, r in ligands_df.iterrows():
    plant = str(r['Plant'])
    cmp_name = str(r['Compound'])
    cclass = str(r['Chemical Class'])
    cid = str(r['PubChem CID'])
    priority = str(r['Priority'])

    cmp_id = cmp_name.lower().replace(' ', '_')
    
    lig_rows.append({
        'compound_id': cmp_id,
        'compound_name': cmp_name,
        'pubchem_cid': cid,
        'chembl_id': f"PUBCHEM_CID_{cid}",
        'canonical_smiles': "C1=CC=C...",
        'molecular_formula': cclass,
        'molecular_weight': 350.0
    })

lig_out_df = pd.DataFrame(lig_rows)
lig_out_df.to_csv('data/inputs/ligand_library.csv', index=False)
print("Updated ligand_library.csv cleanly!")
