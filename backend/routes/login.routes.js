const express = require('express')
const handleLogin = require('../controlers/login.controler')

const routes = express.Router()
routes.post('/login',handleLogin)

module.exports = routes