API de Demonstração CI/CD (CI/CD Demonstration API)

<br><div align="center"> <img src="https://img.shields.io/badge/Node.js-18-green?logo=node.js" alt="Node.js"> <img src="https://img.shields.io/badge/Express-4.18-brightgreen?logo=express" alt="Express"> <img src="https://img.shields.io/badge/Jest-29-blue?logo=jest" alt="Jest"> <img src="https://img.shields.io/badge/GitHub_Actions-100%25-success?logo=github-actions" alt="GitHub Actions"> </div><br>

📖 Visão Geral | Overview
PT:
API simples para demonstração de pipelines CI/CD com:

Node.js + Express → Servidor web
Jest + Supertest → Testes automatizados
GitHub Actions → Pipeline de integração contínua

EN:
A Simple API for CI/CD pipeline demonstration featuring:

Node.js + Express → Web server
Jest + Supertest → Automated tests
GitHub Actions → Continuous integration pipeline

✨ Funcionalidades | Features
PT:
✅ CRUD Completo de produtos
✅ Testes unitários e de integração
✅ Pipeline CI/CD com GitHub Actions
✅ Pronto para aula/demo de DevOps

EN:
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
npm start       
npm run dev     
npm test         

🧪 Testes | Tests
bash
npm run test:unit      
npm run test:integration  
npm run test:watch    

📦 Endpoints
GET    /api/products       → Lista todos  
POST   /api/products       → Cria novo (JSON body)  
GET    /api/products/:id   → Detalhes do produto  
PUT    /api/products/:id   → Atualiza produto  
DELETE /api/products/:id   → Remove produto  

⚙️ CI/CD Pipeline
PT:
O GitHub Actions executa automaticamente:

Instalação de dependências
Testes unitários
Testes de integração

EN:
GitHub Actions automatically runs:
Dependency installation
Unit tests
Integration tests

Veja o workflow em: .github/workflows/ci.yml
EN:
See workflow at: .github/workflows/ci.yml

🎯 Objetivo Educacional | Educational Purpose
Este projeto foi criado para:
Demonstrar pipelines CI/CD na prática
Mostrar testes automatizados em Node.js
Servir como material didático numa aula invertida num curso

EN: 
This project was created to:

Demonstrate CI/CD pipelines in practice
Show automated testing in Node.js
Serve as a educational material in a class.


📄 Licença | License
MIT © Pedro Santiago
