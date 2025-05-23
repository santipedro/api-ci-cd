const request = require('supertest');
const app = require('../src/app');
const { startServer, stopServer } = require('./test-sever');

let server;

beforeAll(async () => {
  server = await startServer(app);
});

afterAll(async () => {
  await stopServer(server);
});

describe('Testes de Integração - API', () => {
  test('GET /api/products - Deve retornar todos os produtos', async () => {
    const response = await request(app).get('/api/products');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
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
});

