const express = require('express')
const verifyToken = require('../middlewares/verifyToken')
const handleSeller = require('../controlers/seller.controler')

const routes = express.Router()
routes.post('/seller-register',verifyToken,handleSeller)

module.exports = routes