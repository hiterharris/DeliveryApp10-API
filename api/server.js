const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const productsRouter = require('./products/products-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/products', productsRouter);
server.get('/', (req, res) => {
    res.send('Food Delivery App API')
});

module.exports = server;