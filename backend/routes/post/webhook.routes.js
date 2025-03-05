const express = require('express')
const { handleStripeWebhook } = require('../../controller/post/order.controler')

const routes = express.Router()
routes.post('/webhook', express.raw({ type: 'application/json' }) , handleStripeWebhook)

module.exports = routes