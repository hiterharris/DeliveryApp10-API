const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const restricted = require('../auth/restricted-middleware');
const usersRouter = require('../users/users-router.js');
const productsRouter = require('./products/products-router');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter);
server.use('/users', restricted, usersRouter);
server.use('/products', productsRouter);
server.get('/', (req, res) => {
    res.send('Food Delivery App API')
});

module.exports = server;