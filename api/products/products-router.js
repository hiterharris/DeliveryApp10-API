const router = require('express').Router();
const products = require('./productsData');
const newProductsData = require('./newProductsData');

router.get('/', (req, res) => {
  res.send(products)
});

router.get('/new', (req, res) => {
  res.send(newProductsData)
});

module.exports = router;
