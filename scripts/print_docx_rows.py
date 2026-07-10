import os
import sys
import zipfile
import xml.etree.ElementTree as ET

docx_path = "docs/1-s2.0-S2590157522000104-mmc1.docx"

try:
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
        root = ET.fromstring(xml_content)
        
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        # Extract tables
        tables = []
        for table in root.findall('.//w:tbl', namespaces):
            table_data = []
            for row in table.findall('.//w:tr', namespaces):
                row_data = []
                for cell in row.findall('.//w:tc', namespaces):
                    cell_text = "".join([t.text for t in cell.findall('.//w:t', namespaces) if t.text])
                    row_data.append(cell_text.strip())
                table_data.append(row_data)
            tables.append(table_data)

        # Print all lines to inspect
        print("TOTAL ROWS IN TABLE 1:", len(tables[0]))
        for idx, row in enumerate(tables[0]):
            print(f"Row {idx:02d}: {row}")
            
except Exception as e:
    print(f"Error parsing Word Document: {e}")
