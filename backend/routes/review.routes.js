const express = require('express')
const handleReview = require('../controlers/review.controler')
const verifyToken = require('../middlewares/verifyToken')

const routes = express.Router()
routes.post('/review',verifyToken,handleReview)

module.exports = routes