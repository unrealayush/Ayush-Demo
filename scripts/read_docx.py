import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = "docs/1-s2.0-S2590157522000104-mmc1.docx"

if not os.path.exists(docx_path):
    print(f"Error: Word document not found at {docx_path}")
    exit(1)

try:
    with zipfile.ZipFile(docx_path) as z:
        # Read the word document XML
        xml_content = z.read('word/document.xml')
        root = ET.fromstring(xml_content)
        
        # XML namespace for Word
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        # Extract all paragraphs
        paragraphs = []
        for p in root.findall('.//w:p', namespaces):
            text = "".join([t.text for t in p.findall('.//w:t', namespaces) if t.text])
            if text:
                paragraphs.append(text)
                
        # Extract tables
        tables = []
        for table in root.findall('.//w:tbl', namespaces):
            table_data = []
            for row in table.findall('.//w:tr', namespaces):
                row_data = []
                for cell in row.findall('.//w:tc', namespaces):
                    cell_text = "".join([t.text for t in cell.findall('.//w:t', namespaces) if t.text])
                    row_data.append(cell_text)
                table_data.append(row_data)
            tables.append(table_data)

        print(f"📄 Successfully parsed Word Document!")
        print(f"Total Paragraphs: {len(paragraphs)}")
        print(f"Total Tables: {len(tables)}")
        
        print("\n--- FIRST 20 PARAGRAPHS ---")
        for p in paragraphs[:20]:
            print(p)
            
        print("\n--- PARSED TABLES DATA ---")
        for i, tbl in enumerate(tables):
            print(f"\nTable {i+1}:")
            for row in tbl[:10]: # Print first 10 rows
                print(" | ".join(row))
                
except Exception as e:
    print(f"Exception parsing Word Document: {e}")
