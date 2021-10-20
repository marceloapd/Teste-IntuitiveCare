import camelot
import zip_file

print('Convertendo PDF para tabelas CSV...')
tables = camelot.read_pdf('pdf/componente_organizacional.pdf', pages='108-114')
tables[0].to_csv('documents/Quadro_30.csv')
tables[7].to_csv('documents/Quadro_32.csv')
for i in range(1, 7):
    tables[i].to_csv(f'documents/Quadro_31_{i}.csv')
zip_file.zip_file('Teste_Intuitive_Care_Marcelo_Assis.zip', './documents')


