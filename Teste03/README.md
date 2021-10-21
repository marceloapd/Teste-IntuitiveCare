## Teste 3 - Banco de dados

### Neste teste foi proposto:
Criar scripts sql (MySQL 8.* ou Postgres >10.0) que execute as tarefas de código abaixo.

- Baixar os arquivos dos últimos 2 anos no repositório público : http://ftp.dadosabertos.ans.gov.br/FTP/PDA/demonstracoes_contabeis/ (pode ser feito manualmente)

- Baixar CSV do link: http://www.ans.gov.br/externo/site_novo/informacoes_avaliacoes_oper/lista_cadop.asp (pode ser feito manualmente)

#### Tarefas de código:

- Queries de load: criar as queries para carregar o conteúdo dos arquivos obtidos nas tarefas de preparação num banco MySQL ou Postgres (Atenção ao encoding dos arquivos!)

- Montar uma query analítica que traga a resposta para as seguintes perguntas:

- Quais as 10 operadoras que mais tiveram despesas com "EVENTOS/ SINISTROS CONHECIDOS OU AVISADOS  DE ASSISTÊNCIA A SAÚDE MEDICO HOSPITALAR" no último trimestre?

- Quais as 10 operadoras que mais tiveram despesas com "EVENTOS/ SINISTROS CONHECIDOS OU AVISADOS  DE ASSISTÊNCIA A SAÚDE MEDICO HOSPITALAR" no último ano?


### Construido com

* [PostgreSQL](https://www.postgresql.org/)


## Começando

#### Passo 1

Para começar vamos criar uma query para carregar o conteudo dos arquivos CSV

```sql
BEGIN;
    CREATE TABLE IF NOT EXISTS relatorio (
        DATA VARCHAR(20),
        REG_ANS VARCHAR(20),
        CD_CONTA_CONTABIL VARCHAR(20),
        DESCRICAO VARCHAR(500),
        VL_SALDO_FINAL VARCHAR(20)
    );
COMMIT;

BEGIN;
    COPY public.relatorio
    FROM 'C:\Users\Public\Teste03\documents\arquivo.csv'
    DELIMITER ';'
    CSV
    HEADER
    ENCODING 'win1252';
COMMIT;

SELECT * FROM public.relatorio;
```
Repita o codigo acima para cada arquivo dos últimos 2 anos no repositório público, no fim você tera o banco populado com todos os arquivos.

#### Passo 2

Agora vamos criar uma query similar para o segundo CSV

```sql
BEGIN;

    CREATE TABLE IF NOT EXISTS cadop (
        "Registro ANS" VARCHAR(10),
		"CNPJ" VARCHAR(15),
        "Razão Social" VARCHAR(500),
        "Nome Fantasia" VARCHAR(500),
		"Modalidade" VARCHAR(100),
		"Logradouro" VARCHAR(500),
		"Número" VARCHAR(20),
		"Complemento" VARCHAR(100),
		"Bairro" VARCHAR(100),
		"Cidade" VARCHAR(50),
		"UF" VARCHAR(5),
		"CEP" VARCHAR(10),
		"DDD" VARCHAR(5),
		"Telefone" VARCHAR(20),
		"Fax" VARCHAR(100),
		"Endereço eletrônico" VARCHAR(100),
		"Representante" VARCHAR(100),
		"Cargo Representante" VARCHAR(100),
		"Data Registro ANS" VARCHAR(15)
    );
	
COMMIT;

BEGIN;
    COPY public.cadop
    FROM 'C:\Users\Public\Teste03\documents\Relatorio_cadop.csv'
    DELIMITER ';'
    CSV
    HEADER
    ENCODING 'win1252';
COMMIT;

SELECT * FROM public.cadop;
```
