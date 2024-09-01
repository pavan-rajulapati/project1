const express = require('express')
const handleGoogleLogin = require('../controller/google.login.controler')

const routes = express.Router()
routes.post('/google-login',handleGoogleLogin)

module.exports = routes