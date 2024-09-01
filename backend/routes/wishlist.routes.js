const express = require('express')
const handleWishlist = require('../controller/wishlist.controler')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/wishlist',verifyToken,handleWishlist)

module.exports = routes