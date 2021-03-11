const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const restaurantsRouter = require('./restaurants/restaurants-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/restaurants', restaurantsRouter);
server.get('/', (req, res) => {
    res.send('Food Delivery App API')
});

module.exports = server;