# ✨ Portal CRUD – Painel de Gestão de Produtos

Um painel completo desenvolvido em **React**, criado com foco em organização, experiência do usuário e escalabilidade.  
O projeto implementa um CRUD simples e funcional, com modal de criação, autenticação básica simulada e um design consistente utilizando variáveis globais de CSS.

---

## 📌 Visão Geral

O **Portal CRUD** foi desenvolvido com o objetivo de oferecer uma estrutura sólida e bem organizada para aplicações de gestão.  
O projeto conta com:

- 🧭 **Fluxo de autenticação** (login, cadastro, recuperação e alteração de senha);
- 📦 **CRUD completo de produtos**, com modal de criação e edição;
- 🎨 **Sistema de design padronizado**, utilizando variáveis centralizadas em `index.css`;
- 📱 **Layout totalmente responsivo** (mobile e desktop);
- 💾 **Persistência simples via `localStorage`**, fácil de substituir por uma API real;
- 🧩 **Componentização limpa e reutilizável**, mantendo cada responsabilidade isolada.

---

## 🚀 Tecnologias utilizadas

- **React.js**
- **Formik** para validação de formulários
- **LocalStorage API** para persistência
- **CSS modular** com variáveis globais
- **React Router** para navegação entre telas

---

## 🎯 Objetivos do Projeto

O foco principal foi criar uma base que pudesse ser:

✔ **Escalável**  
✔ **Leve**  
✔ **Visualmente consistente**  
✔ **De fácil manutenção**

Para isso, todo o sistema de estilização foi padronizado com variáveis no arquivo `src/index.css`, permitindo alterar cores, bordas, espaçamentos e tipografia em um único lugar.

O layout segue um estilo moderno, com destaque para contrastes, espaçamentos adequados e componentes reutilizáveis — refletindo práticas reais de projetos profissionais.

---

## 🖼️ Interface (conceito)

Uma interface moderna, com:

- Sidebar escura com ícones  
- Cards com bordas suaves e fundo azul profundo  
- Modal elegante com tons escuros  
- Botões com cor de destaque e feedback visual  
- Campos com indicação clara de foco e validação  

O objetivo foi criar uma experiência fluida, minimalista e agradável.

---

## 🧪 Como funciona internamente

### 🔐 Autenticação
O fluxo de autenticação é totalmente controlado no front-end, usando:
- validação com **Formik**;
- persistência dos usuários em `localStorage`;
- fluxo de **recuperação de senha**, **cadastro** e **login**.

### 📦 CRUD de produtos
Os produtos são armazenados em `localStorage` e exibidos dinamicamente no dashboard.

O **modal de criação** possui:
- campos validados;
- botão de fechar funcional;
- estilização responsiva;
- feedback visual em erros.

### 🎨 Sistema de Design
Todas as cores, espaçamentos, sombras, tamanhos e radius estão centralizados em:
src/index.css

Isso facilita:
- troca de tema;
- padronização entre telas;
- manutenção futura;
- consistência visual do projeto.

---

## ⚙️ Como executar

```bash
git clone <REPO_URL>
cd crud
npm install
npm start
