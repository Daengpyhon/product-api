const express = require('express');
const route = express.Router();
const {listProducts} = require('./controller')
route.get('/', listProducts)

module.exports = route;