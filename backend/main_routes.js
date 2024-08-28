const express = require('express')

const routes = express.Router()

routes.use(require('./routes/signup.routes'))
routes.use(require('./routes/login.routes'))
routes.use(require('./routes/google.signup.routes'))
routes.use(require('./routes/google.login.routes'))

module.exports = routes
