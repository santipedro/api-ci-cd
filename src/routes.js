const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/products', (req, res) => {
  res.json(controllers.getProducts());
});

router.get('/products/:id', (req, res) => {
  const product = controllers.getProductById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
});

router.post('/products', express.json(), (req, res) => {
  const newProduct = controllers.addProduct(req.body);
  res.status(201).json(newProduct);
});

router.put('/products/:id', express.json(), (req, res) => {
  const updatedProduct = controllers.updateProduct(req.params.id, req.body);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
});

router.delete('/products/:id', (req, res) => {
  const deletedProduct = controllers.deleteProduct(req.params.id);
  if (deletedProduct) {
    res.json(deletedProduct);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
});

module.exports = router;