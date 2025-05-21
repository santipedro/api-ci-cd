const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app; // Exporta para testes