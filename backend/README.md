API Node.js com MongoDB

Este projeto é uma API REST construída com Node.js, Express e MongoDB, pronta para ser testada localmente ou em produção.

🚀 Funcionalidades

Cadastro e gerenciamento de dados em MongoDB

Estrutura organizada para fácil manutenção

Suporte para ambiente de desenvolvimento e produção

💻 Tecnologias

Node.js

Express

MongoDB / Mongoose

dotenv (para variáveis de ambiente)

Nodemon (para desenvolvimento)

⚡ Pré-requisitos

Node.js (>= 18)

npm ou yarn

MongoDB (Atlas ou local)

⚙️ Como rodar a API

Clone o repositório:

git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>


Instale as dependências:

npm install
# ou
yarn install


Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto:

MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<nome_db>?retryWrites=true&w=majority
PORT=5000


Inicie a API:

npm run server
# ou
yarn server


A API estará disponível em http://localhost:5000.

📄 Testando

Utilize ferramentas como Postman ou Insomnia para testar os endpoints.
Teste no reqBin https://reqbin.com/ 
Todos os endpoints seguem a convenção REST.