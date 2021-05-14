const router = require('express').Router();
const { productsData, allItems } = require('./productsData');

router.get('/', (req, res) => {
  res.send(productsData)
});

router.get('/all', (req, res) => {
  res.send(allItems)
});

module.exports = router;
