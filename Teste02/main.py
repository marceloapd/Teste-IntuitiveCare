import camelot
import pandas as pd

import zip_file

print('Convertendo PDF para tabelas CSV...')
tables = camelot.read_pdf('pdf/componente_organizacional.pdf', pages='108-114')
tables[0].to_csv('documents/Quadro_30.csv')

quadro_31 = []
for i in range(1, 7):
    quadro_31.append(tables[i].df)

quadro_31 = pd.concat(quadro_31)
quadro_31.to_csv('documents/Quadro_31.csv',index=False)
tables[7].to_csv('documents/Quadro_32.csv')

zip_file.zip_file('Teste_Intuitive_Care_Marcelo_Assis.zip', './documents')

