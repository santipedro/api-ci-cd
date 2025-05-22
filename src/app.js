const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

const startServer = () => {
  return app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
  });
};

// Exporte tanto app quanto server para testes
module.exports = { 
  app,
  startServer,
  // Para ambientes de teste, exportamos sem iniciar o servidor
  server: process.env.NODE_ENV === 'test' ? null : startServer()
};