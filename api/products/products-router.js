const router = require('express').Router();
const products = require('./productsData');

router.get('/', (req, res) => {
  res.send(products)
});

module.exports = router;
