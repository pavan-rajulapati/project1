const express = require('express')
const handleOrder = require('../controlers/order.controler')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/order',verifyToken,handleOrder)

module.exports = routes