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

* [PostgreSQL 14](https://www.postgresql.org/)


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
> Repita o codigo acima para cada arquivo dos últimos 2 anos do repositório público, no fim você tera o banco populado com todos os arquivos.

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

#### Passo 3

Agora vamos criar a query analítica para responder as duas perguntas.

```sql
DO $$
DECLARE
    QUERY_RESULT RECORD;
    REG_ANS INTEGER;
    COMPANY_NAME PUBLIC.cadop."Nome Fantasia"%TYPE;
    TARGET_DESCRIPTION VARCHAR(100) := 'EVENTOS/ SINISTROS CONHECIDOS OU AVISADOS  DE ASSISTÊNCIA A SAÚDE MEDICO HOSPITALAR ';

BEGIN
    FOR QUERY_RESULT IN (
        SELECT CAD."Registro ANS", COUNT(CAD."Registro ANS")
        FROM PUBLIC.cadop AS CAD 
        LEFT JOIN PUBLIC.relatorio AS REL
        ON REL.REG_ANS = CAD."Registro ANS"
        WHERE REL.descricao = TARGET_DESCRIPTION
        AND REL."data" > CURRENT_DATE -INTERVAL '1' YEAR 
        GROUP BY CAD."Registro ANS"
        ORDER BY COUNT DESC
        LIMIT 10
    )
    LOOP
        REG_ANS := QUERY_RESULT."Registro ANS";
        COMPANY_NAME := (
            SELECT CAD."Nome Fantasia" || CAD."Razão Social"
            FROM PUBLIC.cadop AS CAD
            WHERE CAD."Registro ANS" = CAST(REG_ANS AS VARCHAR(20))
        );
        RAISE NOTICE 'OPERADORA: %, TOTAL DE OCORRENCIAS: %', COMPANY_NAME, QUERY_RESULT.COUNT;
    END LOOP;
    
    IF NOT FOUND THEN
        RAISE NOTICE 'NO DATA FOUNDED!';
    END IF;
END $$
```
Para buscar o ultimo trimestre altere a linha 15 para o trecho de codigo
```
AND REL."data" > CURRENT_DATE -INTERVAL '3' MONTH
```
### Q1. Quais as 10 operadoras que mais tiveram despesas com "EVENTOS/ SINISTROS CONHECIDOS OU AVISADOS DE ASSISTÊNCIA A SAÚDE MEDICO HOSPITALAR" no último trimestre?

```
Nenhuma
```

![image](https://user-images.githubusercontent.com/71731452/138388913-4c5759aa-68a8-40ee-8a4e-e30feca47db1.png)

### Q2. Quais as 10 operadoras que mais tiveram despesas com "EVENTOS/ SINISTROS CONHECIDOS OU AVISADOS DE ASSISTÊNCIA A SAÚDE MEDICO HOSPITALAR" no último trimestre?

```
01 - MOGIDONTOMOGIDONTO PLANOS ODONTOLÓGICOS LTDA - TOTAL DE OCORRENCIAS: 16

02 - ASSOCIAÇÃO DE SAÚDE HOLAMBRAASSOCIACAO DE SAUDE HOLAMBRA - TOTAL DE OCORRENCIAS: 16

03 - UNIMED DE REGISTROUNIMED DE REGISTRO COOPERATIVA DE TRABALHO MÉDICO - TOTAL DE OCORRENCIAS: 16

04 - SÃO MIGUEL SAÚDEASSISTÊNCIA MÉDICA SÃO MIGUEL LTDA - TOTAL DE OCORRENCIAS: 16

05 - ALVORECERALVORECER - ASSOCIAÇÃO DE SOCORROS MÚTUOS - TOTAL DE OCORRENCIAS: 16

06 - DENTAL PLUS CONVÊNIO ODONTOLÓGICODENTAL PLUS CONVÊNIO ODONTOLÓGICO LTDA. - TOTAL DE OCORRENCIAS: 16

07 - UNIMED NATAL SOCIEDADE COOPERATIVA DE TRABALHO MÉDICOUNIMED NATAL SOC. COOP. DE TRAB. MÉDICO - TOTAL DE OCORRENCIAS: 16

08 - DENTALPARDENTALPAR ASSISTÊNCIA ODONTOLÓGICA EMPRESARIAL LTDA. - TOTAL DE OCORRENCIAS: 16

10 - LIV SAÚDELIV LINHAS INTELIGENTES DE ATENÇÃO À VIDA S/A - TOTAL DE OCORRENCIAS: 16
```
![image](https://user-images.githubusercontent.com/71731452/138389588-8a3bbbc6-2f88-454a-8628-2336088ecc04.png)
