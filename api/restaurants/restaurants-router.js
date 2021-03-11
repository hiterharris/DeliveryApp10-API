const router = require('express').Router();
const restaurants = require('../../assets/data/restaurantData')

router.get('/', (req, res) => {
  res.send(restaurants)
});

module.exports = router;
