API de Demonstração CI/CD 🚀
(CI/CD Demonstration API)
<div align="center"> <img src="https://img.shields.io/badge/Node.js-18-green?logo=node.js" alt="Node.js"> <img src="https://img.shields.io/badge/Express-4.18-brightgreen?logo=express" alt="Express"> <img src="https://img.shields.io/badge/Jest-29-blue?logo=jest" alt="Jest"> <img src="https://img.shields.io/badge/GitHub_Actions-100%25-success?logo=github-actions" alt="GitHub Actions"> </div>
📖 Visão Geral | Overview
API simples para demonstração de pipelines CI/CD com:

Node.js + Express → Servidor web

Jest + Supertest → Testes automatizados

GitHub Actions → Pipeline de integração contínua

A Simple API for CI/CD pipeline demonstration featuring:

Node.js + Express → Web server

Jest + Supertest → Automated tests

GitHub Actions → Continuous integration pipeline

✨ Funcionalidades | Features
✅ CRUD Completo de produtos
✅ Testes unitários e de integração
✅ Pipeline CI/CD com GitHub Actions
✅ Pronto para aula/demo de DevOps

✅ Full CRUD for products
✅ Unit + Integration tests
✅ CI/CD Pipeline with GitHub Actions
✅ Classroom/demo ready for DevOps

🛠️ Como Usar | How to Use
Pré-requisitos | Prerequisites
Node.js 18+

npm 9+

Instalação | Installation
bash
git clone https://github.com/seu-usuario/api-ci-cd-demo.git  
cd api-ci-cd-demo  
npm install  
Executando | Running
bash
npm start       # Inicia o servidor (porta 3000) | Starts server (port 3000)  
npm run dev     # Modo desenvolvimento (com nodemon) | Dev mode (with nodemon)  
npm test        # Roda todos os testes | Runs all tests  
🧪 Testes | Tests
bash
npm run test:unit         # Testes unitários | Unit tests  
npm run test:integration  # Testes de API | API tests  
npm run test:watch        # Modo observação | Watch mode  
📦 Endpoints
GET    /api/products       → Lista todos  
POST   /api/products       → Cria novo (JSON body)  
GET    /api/products/:id   → Detalhes do produto  
PUT    /api/products/:id   → Atualiza produto  
DELETE /api/products/:id   → Remove produto  
⚙️ CI/CD Pipeline
O GitHub Actions executa automaticamente:

Instalação de dependências

Testes unitários

Testes de integração

GitHub Actions automatically runs:

Dependency installation

Unit tests

Integration tests

Veja o workflow em: .github/workflows/ci.yml
See workflow at: .github/workflows/ci.yml

🎯 Objetivo Educacional | Educational Purpose
Este projeto foi criado para:

Demonstrar pipelines CI/CD na prática

Mostrar testes automatizados em Node.js

Servir como material didático para DevOps

This project was created to:

Demonstrate CI/CD pipelines in practice

Show automated testing in Node.js

Serve as DevOps educational material

🤝 Como Contribuir | How to Contribute
Faça um fork do projeto

Crie sua branch (git checkout -b feature/foo)

Commit suas mudanças (git commit -am 'Add foo')

Push para a branch (git push origin feature/foo)

Abra um Pull Request

📄 Licença | License
MIT © [Seu Nome]

<div align="center"> ✨ <strong>Perfeito para workshops e aulas de engenharia de software!</strong> ✨ ✨ <strong>Perfect for software engineering workshops and classes!</strong> ✨ </div>
🔍 Visual Preview (GitHub Markdown):
README Preview (imagem ilustrativa)

💡 Dica Extra:
Adicione badges reais substituindo os placeholders pelos seus links reais do Shields.io!

🌟 Highlights:
Dual-language (PT/EN) documentation

CI/CD ready out of the box

Perfect for teaching DevOps concepts

Production-grade test structure
