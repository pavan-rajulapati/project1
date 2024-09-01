const express = require('express')
const handleSignup = require('../controller/signup.controler')

const routes = express.Router()
routes.post('/signup',handleSignup)

module.exports = routes