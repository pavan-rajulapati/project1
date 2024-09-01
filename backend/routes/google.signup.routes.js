const express = require('express')
const handleGoogleSignup = require('../controller/google.signup.controler')

const routes = express.Router()
routes.post('/google-signup',handleGoogleSignup)

module.exports = routes