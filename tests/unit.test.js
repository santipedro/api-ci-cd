const controllers = require('../src/controllers');

describe('Testes Unitários - Controllers', () => {
  beforeEach(() => {
    // Resetar os produtos antes de cada teste
    controllers.getProducts = jest.fn().mockReturnValue([
      { id: 1, name: "Produto 1", price: 10.99 },
      { id: 2, name: "Produto 2", price: 20.50 }
    ]);
  });

  test('Deve retornar todos os produtos', () => {
    const products = controllers.getProducts();
    expect(products).toHaveLength(2);
    expect(products[0].name).toBe("Produto 1");
  });

  test('Deve retornar um produto por ID', () => {
    const product = controllers.getProductById(1);
    expect(product).toBeDefined();
    expect(product.id).toBe(1);
  });

  test('Deve adicionar um novo produto', () => {
    const newProduct = { name: "Novo Produto", price: 15.99 };
    const addedProduct = controllers.addProduct(newProduct);
    expect(addedProduct.id).toBe(3);
    expect(addedProduct.name).toBe(newProduct.name);
  });
});     