const http = require('http');

const startServer = (app) => {
  return new Promise((resolve) => {
    const server = app.listen(0, () => {
      console.log(`Servidor de teste rodando na porta ${server.address().port}`);
      resolve(server);
    });
  });
};

const stopServer = (server) => {
  return new Promise((resolve) => {
    if (server) {
      server.close(() => {
        console.log('Servidor de teste fechado');
        resolve();
      });
    } else {
      resolve();
    }
  });
};

module.exports = { startServer, stopServer };