// Simula um banco de dados simples em memória
let products = [
  { id: 1, name: "Produto 1", price: 10.99 },
  { id: 2, name: "Produto 2", price: 20.50 }
];

module.exports = {
  getProducts: () => products,
  
  getProductById: (id) => products.find(p => p.id === parseInt(id)),
  
  addProduct: (product) => {
    const newProduct = {
      id: products.length + 1,
      ...product
    };
    products.push(newProduct);
    return newProduct;
  },
  
  updateProduct: (id, updatedProduct) => {
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      return products[index];
    }
    return null;
  },
  
  deleteProduct: (id) => {
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      const deleted = products[index];
      products = products.filter(p => p.id !== parseInt(id));
      return deleted;
    }
    return null;
  }
};