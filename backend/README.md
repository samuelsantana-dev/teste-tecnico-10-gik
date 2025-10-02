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

git clone https://github.com/samuelsantana-dev/teste-tecnico-10-gik
cd https://github.com/samuelsantana-dev/teste-tecnico-10-gik


Instale as dependências:

npm install
# ou
yarn install


Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto:

MONGO_URI=mongodb+srv://10-gik-name:db-Pass-gik-word@cluster-10-gik.rl4hcan.mongodb.net/leads_db?retryWrites=true&w=majority&appName=cluster-10-gik
PORT=5000
ADMIN_USER=10-gik-name
ADMIN_PASS=db-Pass-gik-word



Inicie a API:

npm run server
# ou
yarn server


A API estará disponível em http://localhost:5000.

📄 Testando

Utilize ferramentas como Postman ou Insomnia para testar os endpoints.
Teste no reqBin https://reqbin.com/ 
Todos os endpoints seguem a convenção REST.