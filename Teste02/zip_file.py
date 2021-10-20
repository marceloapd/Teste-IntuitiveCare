import zipfile, os

def zip_file(name, path):
    print('Comprimindo dados...')
    handle = zipfile.ZipFile(name, 'w')
    os.chdir(path)

    for x in os.listdir():
        if x.endswith('.csv'):
            handle.write(x, compress_type= zipfile.ZIP_DEFLATED)
    print('Dados comprimidos!')
    handle.close()