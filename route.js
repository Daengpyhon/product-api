const express = require('express');
const route = express.Router();
const {listProducts} = require('./controller')
route.get('/api', listProducts)
route.get('/', (req, res)=>{
  res.send("Welcome")
})

module.exports = route;
