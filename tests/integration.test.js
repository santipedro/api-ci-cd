const request = require('supertest');
const app = require('../src/app');



describe('Testes de Integração - API', () => {

  let server;

beforeAll((done) => {
  server = app.listen(0, () => { // Usar 0 para porta aleatória
    console.log(`Servidor de teste rodando na porta ${server.address().port}`);
    done();
  });
});

 afterAll(async () => {
    if (server && server.close) {
      await new Promise(resolve => server.close(resolve));
    }
  });

  test('GET /api/products', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
  });
});

  test('POST /api/products - Deve criar um novo produto', async () => {
    const newProduct = { name: "Produto Teste", price: 99.99 };
    const response = await request(app)
      .post('/api/products')
      .send(newProduct);
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newProduct.name);
  });

  test('GET /api/products/:id - Deve retornar um produto específico', async () => {
    const response = await request(app).get('/api/products/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
  });

  test('DELETE /api/products/:id - Deve remover um produto', async () => {
    const response = await request(app).delete('/api/products/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    
    // Verifica se foi realmente removido
    const checkResponse = await request(app).get('/api/products/1');
    expect(checkResponse.statusCode).toBe(404);
  });