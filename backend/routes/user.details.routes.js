const handleUserDetails = require('../controller/user.details.controler')
const express = require('express')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/user-details',verifyToken,handleUserDetails)

module.exports = routes