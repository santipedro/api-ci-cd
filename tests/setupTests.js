// Garante que todos os handles abertos sejam fechados
afterAll(async () => {
  const { server } = require('../src/app');
  if (server && server.close) {
    await new Promise(resolve => server.close(resolve));
  }
});