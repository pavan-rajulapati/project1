const express = require('express')
const handleGoogleSignup = require('../controlers/google.signup.controler')

const routes = express.Router()
routes.post('/google-signup',handleGoogleSignup)

module.exports = routes