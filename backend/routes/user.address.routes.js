const handleUserAddress = require('../controller/user.address.controler')
const express = require('express')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/user-address',verifyToken,handleUserAddress)

module.exports = routes