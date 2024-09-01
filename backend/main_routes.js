const express = require('express')

const routes = express.Router()

routes.use(require('./routes/signup.routes'))
routes.use(require('./routes/login.routes'))
routes.use(require('./routes/google.signup.routes'))
routes.use(require('./routes/google.login.routes'))
routes.use(require('./routes/token.routes'))
routes.use(require('./routes/seller.routes'))
routes.use(require('./routes/product.routes'))
routes.use(require('./routes/user.address.routes'))
routes.use(require('./routes/user.details.routes'))
routes.use(require('./routes/cart.routes'))
routes.use(require('./routes/order.routes'))
routes.use(require('./routes/review.routes'))
routes.use(require('./routes/wishlist.routes'))

module.exports = routes
