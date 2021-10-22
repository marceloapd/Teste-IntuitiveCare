# Processo Seletivo IntuitiveCare(R)

![GitHub repo size](https://img.shields.io/github/repo-size/marceloapd/Teste-IntuitiveCare?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/marceloapd/Teste-IntuitiveCare?style=for-the-badge)

<img src="https://user-images.githubusercontent.com/71731452/138391600-4d6036de-c934-4f3d-987d-827d3f9e5a08.gif" alt="exemplo imagem">

> Esta etapa do processo seletivo consiste na realização de testes de nivelamento básico. Estes testes foram desenhados em função de tarefas realizadas no dia a dia da empresa e têm como objetivo avaliar:

### Testes

<details>
<summary>Teste 1 - WebScraping</summary>
<br>
Neste teste o candidato deverá criar um código (em uma das linguagens mencionadas no fim desse email) que execute as tarefas de código abaixo.
Tarefas de código:
<br><br>
<pre>
1 - Acessar o site: http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar;
2 - Buscar a versão mais recente do Padrão TISS (arquivo - padrao_tiss_componente_organizacional_201902.pdf);
3 - Baixar o componente organizacional;
</pre>
<a href="https://pandas.pydata.org/">Abrir Teste 01</a>
</details>

<details>
<summary>Teste 2 - Transformação de dados</summary>
<br>
Neste teste o candidato deverá criar um código (em uma das linguagens mencionadas no fim desse email) que execute as tarefas de código abaixo.
Tarefas de código:
<br><br>
<pre>
1 - Extrair do pdf do teste 1 acima os dados dos Quadros 30,31,32 (Tabela de categoria do Padrão TISS);
2 - Salvar dados em tabelas estruturadas, em csvs;
3 - Zipar todos os csvs num arquivo "Teste_Intuitive_Care_{seu_nome}.zip".
</pre>
<a href="https://pandas.pydata.org/">Abrir Teste 02</a>
</details>

<details>
<summary>Teste 3 - Banco de dados</summary>
<br>
Neste teste o candidato deverá criar scripts sql (MySQL 8.* ou Postgres >10.0) que execute as tarefas de código abaixo.
<br><br>
Tarefas de Preparação:
<br><br>
<pre>
- Baixar os arquivos dos últimos 2 anos no repositório público (pode ser feito manualmente)
<br>
- Baixar csv do link (pode ser feito manualmente)
</pre>
Tarefas de código:
<br>
<pre>
- Queries de load: criar as queries para carregar o conteúdo dos arquivos obtidos nas tarefas de preparação num:
banco MySQL ou Postgres
  <br>
- Montar uma query analítica que traga a resposta para as seguintes perguntas:
  <br>
- Quais as 10 operadoras que mais tiveram despesas com: 
"EVENTOS/ SINISTROS CONHECIDOS OU AVISADOS  DE ASSISTÊNCIA A SAÚDE MEDICO HOSPITALAR" no último trimestre e no último ano?
</pre>
<a href="https://pandas.pydata.org/">Abrir Teste 03</a>
</details>

<details>
<summary>Teste 4 - FrontEnd</summary>
<br>
Neste teste o candidato deverá criar uma interface web (usando o framework Vue.js) que se comunicará com um servidor em uma das linguagens mencionadas no fim desse email para realizar as tarefas de código abaixo.
Tarefas de código:
<br><br>
<pre>
1 - Baixar csv do link: http://www.ans.gov.br/externo/site_novo/informacoes_avaliacoes_oper/lista_cadop.asp
2 - Criar servidor com rota que realiza uma busca textual no csv e retorne as linhas que mais se assemelham
3 - Criar uma interface usando o framework Vue.js que permita a um usuário fazer essa pesquisa pelo browser
</pre>
<a href="https://pandas.pydata.org/">Abrir Teste 04</a>
</details>

## 💻 Requisitos

Os problema deverão ser resolvido em uma (ou mais) das seguintes linguagens:

- GO;
- NodeJS;
- Python;
- Java.

## 🚀 Serão considerados diferenciais

- Considerações de performance
- Considerações de arquitetura
- Realizar mais testes
- Uso de ferramentas de controle de versão
- Uso de infra em nuvem
