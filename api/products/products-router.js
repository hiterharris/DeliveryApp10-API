const router = require('express').Router();
const products = require('../../assets/data/productsData')

router.get('/', (req, res) => {
  res.send(products)
});

module.exports = router;
