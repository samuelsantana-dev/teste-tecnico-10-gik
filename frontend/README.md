📦 Teste Técnico 10 Gik – CRUD de Leads com Next.js e MongoDB

Objetivo: Desenvolver um sistema de cadastro e gestão de leads, incluindo formulário público, API REST e painel administrativo.

Este projeto foi desenvolvido como parte de um teste técnico para Desenvolvedor Pleno Full Stack, utilizando Next.js, MongoDB, Zustand e Tailwind CSS. Inclui um CRUD completo de leads, autenticação via token e um gráfico de métricas com Recharts.

🚀 Tecnologias Utilizadas

- Next.js (com SSR e API Routes se necessário)
- React.js
- Zustand (para gerenciamento de estado global)
- Tailwind CSS (responsividade e dark mode 🌙)
- Hero UI (componentes de interface – diferencial)
- Zod (validação de formulários)
- Recharts 📊 (gráfico de métricas mockadas)
- Backend: Node.js (API Routes do Next.js)
- Database: MongoDB
- Frontend: Next.js e React.js

🔐 Autenticação e Proteção de Rotas
O sistema utiliza autenticação baseada em token, armazenando o token no localStorage.
Todas as rotas protegidas exigem que o usuário esteja logado.
⚠️ Observação: Como o backend completo não foi implementado, a validação ocorre apenas no frontend.

📌 Funcionalidades
Formulário Público de Leads

Campos obrigatórios: nome, e-mail, telefone, cargo, data de nascimento, mensagem

Validações:

E-mail válido
Telefone brasileiro
Data válida
Todos os campos obrigatórios
Tracking automático: utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid
Painel Administrativo
CRUD completo de Leads: criar, editar, deletar e listar
Visualização de detalhes completos do lead (página individual)
Busca por nome e e-mail
Visualização dos dados de tracking (UTMs)
Exportação de leads em CSV ou Excel
Autenticação básica com validação de token
Funcionalidades Extras
Validação de formulários com Zod
Gerenciamento de estado global com Zustand
Gráfico de métricas com Recharts (dados mockados: produtos criados, deletados e outras estatísticas)
Layout responsivo e suporte a Dark Mode
Código organizado em componentes, stores, contextos e páginas

📂 Estrutura do Projeto
src/
├── app/              # Páginas do Next.js
├── components/       # Componentes reutilizáveis (UI, formulários, etc.)
├── services/         # Serviços (API calls)
├── stores/           # Stores do Zustand (estado global)
├── styles/           # Estilização do site
├── utils/            # Schemas, validações (Zod), helpers, types

🛠️ Como Rodar o Projeto

Clone o repositório:

git clone https://github.com/samuelsantana-dev/teste-tecnico-10-gik
cd teste-tecnico-10-gik


Instale as dependências:

npm install
# ou
yarn install
# ou
pnpm install


Rode o servidor de desenvolvimento:

npm run dev


Abra http://localhost:3000
 no navegador.

🌍 Deploy

O projeto foi publicado na Vercel e pode ser acessado aqui:
https://teste-tecnico-10-gik.vercel.app/

📊 Demonstração de Métricas

Gráficos de métricas criados com Recharts (dados fictícios)

Estatísticas: total de leads, leads deletados e outras métricas do sistema

✅ Diferenciais Implementados

Gerenciamento de estado global com Zustand

Hero UI para interface moderna

Código organizado e escalável

Boas práticas de validação de formulários e segurança de dados

Responsividade completa para desktop e mobile

✍️ Desenvolvido por

Samuel Santana

GitHub: https://github.com/samuelsantana-dev