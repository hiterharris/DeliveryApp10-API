const router = require('express').Router();
const products = require('../../assets/data/productsData');
const categories = require('../../assets/data/productsCategories');

router.get('/', (req, res) => {
  res.send(products)
});

router.get('/categories', (req, res) => {
  res.send(categories)
});

module.exports = router;
