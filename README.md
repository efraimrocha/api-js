# Documentação do Projeto - API To-Do List nodejs

## Introdução
Bem-vindo ao repositório da API To-Do List! Este projeto consiste em desenvolver um backend utilizando Node.js, Express, e MySQL para suportar um aplicativo de lista de tarefas (to-do list). Esta documentação fornecerá informações essenciais sobre como configurar, executar e entender a API.

Pré-requisitos
Antes de começar, certifique-se de ter os seguintes componentes instalados em sua máquina:

* Node.js
* Docker
* Git
* 
Configuração do Ambiente com Docker
1. Clone o repositório:
```
git clone https://github.com/seu-usuario/to-do-list-api.git
```
2. Navegue até o diretório do projeto:
cd api-nodejs

3. Crie um arquivo .env na raiz do projeto para configurar as variáveis de ambiente:
``` 
DB_HOST=localhost
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=nome-do-banco
```
4. Execute o MySQL em um container Docker:
```
docker run --name mysql -e MYSQL_ROOT_PASSWORD=xxxx -p 3306:3306 -d mysql
```
5. Instale as dependências:
```
npm install
 ```
6. Execute as migrações do banco de dados:
 ```
npm run migrate
 ```
## Executando a API

Após a configuração do ambiente, você pode iniciar o servidor da API:
 ```
npm start
 ```
A API estará disponível em http://localhost:3000 por padrão.

## Rotas da API

### Listar Tarefas
* Endpoint: /tasks
* Método: GET
* Descrição: Retorna todas as tarefas cadastradas.

### Criar Tarefa
* Endpoint: /tasks
* Método: POST
* Descrição: Cria uma nova tarefa.
* Corpo da Requisição:

## Considerações Finais

Este é um guia inicial para configurar e executar a API To-Do List com suporte a Docker para o banco de dados MySQL. Certifique-se de explorar o código-fonte para obter uma compreensão mais detalhada da implementação. Sinta-se à vontade para contribuir, relatar problemas ou fazer sugestões para melhorias no projeto. Boa codificação!
