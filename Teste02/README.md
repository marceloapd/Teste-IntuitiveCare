## Teste 2 Transformação de dados


### Neste teste foi proposto:
Criar um código que execute as tarefas de código abaixo.

- Extrair do pdf do teste 1 acima os dados dos Quadros 30,31,32 (Tabela de categoria do Padrão TISS);

- Salvar dados em tabelas estruturadas, em csvs;

- Zipar todos os csvs num arquivo "Teste_Intuitive_Care_{seu_nome}.zip".

<p align="center">
  <img src="https://user-images.githubusercontent.com/71731452/138381219-04a25161-0b87-4549-bc35-738a8103a895.gif" width="700" alt="Sublime's custom image"/>
</p>


### Construido com

* [Camelot](https://camelot-py.readthedocs.io/en/master/)
* [Pandas](https://pandas.pydata.org/)


### Pré-requisitos

* [Pyhton](https://www.python.org/)
* [Ghostscript](https://www.ghostscript.com/)

### Instalação

Vamos começar a instalando as dependências
> OBS: Testado somente em Linux.

Linux:
```sh
apt install ghostscript python3-tk
```

macOS:
```
brew install ghostscript tcl-tk
```
Windows:

Para Ghostscript, você pode obter o instalador em sua [página de downloads](https://www.ghostscript.com/download/gsdnld.html) . E para o Tkinter, você pode baixar o [ActiveTcl Community Edition](https://www.activestate.com/activetcl/downloads) do ActiveState.

Agora vamos instalar as bibliotecas necessarias
```
pip install "camelot-py[base]"
```
```
pip install pandas
```

## Usando

Na pasta root rode o comando

```sh
pyhton3 main.py
```
    
> Os arquivos serão gerados na pasta documents.
