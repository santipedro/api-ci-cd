const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

const startServer = () => {
  return app.listen(process.env.PORT || 8080, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 8080}`);
  });
};

module.exports = app;