const express = require('express')
const handleReview = require('../../controller/get/review.controler')

const routes = express.Router()
routes.get('/review',handleReview)

module.exports = routes