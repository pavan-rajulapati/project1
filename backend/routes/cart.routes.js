const express = require('express')
const handleCart = require('../controlers/cart.controler')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/cart',verifyToken,handleCart)

module.exports = routes