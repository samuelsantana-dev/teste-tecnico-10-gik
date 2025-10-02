
📦 Teste Técnico 10 Gik - CRUD de Leads com Next.js e MongoDb

Este projeto foi desenvolvido como parte de um teste técnico, utilizando Next.js com autenticação baseada em token e gerenciamento de estado com Zustand. Inclui um CRUD completo de produtos e um gráfico de métricas feito com Recharts.

Validação de senha
Ao criar um usuário, a senha deve atender aos seguintes critérios: conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial. Essa regra garante maior segurança à aplicação.
⚠️ Por isso, é recomendável criar um novo usuário e realizar um login atualizado para acessar todas as funcionalidades corretamente.

<!-- Caso queira pode user esse:
samuelsantana@gmail.com
saAS12$ -->

<!-- A imagem não vem na rota de https://api-teste-front-production.up.railway.app /products entao não foi possivel renderizar na tabela a imagem. -->

🚀 Tecnologias Utilizadas

- Next.js (com SSR e API Routes se necessário)
- React.js
- Zustand (para gerenciamento de estado global)
- Tailwind CSS (responsividade e dark mode 🌙)
- Hero UI (componentes de interface – diferencial)
- Zod (validação de formulários)
- Recharts 📊 (gráfico de métricas mockadas)

🔐 Proteção de Rotas

⚠️ Importante:
A autenticação foi feita somente pelo front-end, utilizando localStorage para armazenar o token, a forma mais segura seria validar o token no servidor (via cookies e sessões), mas como não havia backend disponível, a solução foi feita inteiramente no front-end.

Isso significa que:
Para acessar as rotas autenticadas, o usuário precisa criar uma conta e pegar o token, o token é salvo no localStorage e validado em cada rota protegida.

📌 Funcionalidades

✅ CRUD de Leads

- Criar Lead
- Editar Lead
- Deletar Lead
- Listar Lead

✅ Validação de formulários com Zod (impede campos inválidos)
✅ Gerenciamento de estado global com Zustand (armazenamento de token, lista de produtos, etc.)
✅ Rotas autenticadas (necessário token para acessar)
✅ Gráfico de métricas com Recharts (dados fictícios/mockados)
✅ Responsividade e Dark Mode com Tailwind CSS
✅ Desenvolvido com Next.js (com SSR e API Routes se necessário) e React.js para uma aplicação moderna e performática
✅ Hero UI para componentes da interface
✅ Deploy funcional (Vercel, Netlify, etc.)
✅ Layout responsivo (funcionar bem em desktop e mobile)

📂 Estrutura do Projeto
src/
 ├── app/              # Páginas do Next.js
 ├── components/       # Componentes reutilizáveis (UI, formulários, etc.)
 ├── services/         # Serviços (API calls)
 ├── stores/           # Stores do Zustand (estado global)
 ├── styles/           # Estilização do site
 ├── utils/            # Schemas, validações (Zod), helpers, types

🛠️ Como Rodar o Projeto
1. Clone o repositório
git clone https://github.com/samuelsantana-dev/teste-tecnico.git
cd teste-tecnico

2. Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install

3. Rode o servidor de desenvolvimento
npm run dev

Abra http://localhost:3000
 no navegador.

🌍 Deploy
O projeto pode ser facilmente publicado na Vercel (plataforma oficial do Next.js).
👉 Documentação de Deploy

O projeto está publicado na Vercel e pode ser acessado pelo link abaixo:
https://teste-tecnico-front-end-7flh.vercel.app/

📊 Demonstração de Métricas

Um gráfico foi implementado utilizando Recharts com dados fictícios, representando métricas do sistema:
- Total de produtos criados
- Produtos deletados
- Outras estatísticas mockadas

✅ Diferenciais Implementados

- Gerenciamento de estado global com Zustand
- Hero UI para UI moderna
- Código organizado em componentes, stores, contextos e páginas
- Boas práticas de estruturação e validação de formulários

✍️ Desenvolvido por Samuel Santana