const express = require('express')

const routes = express.Router()

// upload API routes

routes.use(require('./routes/post/signup.routes'))
routes.use(require('./routes/post/login.routes'))
routes.use(require('./routes/post/google.signup.routes'))
routes.use(require('./routes/post/google.login.routes'))
routes.use(require('./routes/post/token.routes'))
routes.use(require('./routes/post/seller.routes'))
routes.use(require('./routes/post/product.routes'))
routes.use(require('./routes/post/user.address.routes'))
routes.use(require('./routes/post/user.details.routes'))
routes.use(require('./routes/post/cart.routes'))
routes.use(require('./routes/post/order.routes'))
routes.use(require('./routes/post/review.routes'))
routes.use(require('./routes/post/wishlist.routes'))

// fetch API routes

routes.use(require('./routes/get/user.routes'))
routes.use(require('./routes/get/user.address.routes'))
routes.use(require('./routes/get/user.details.routes'))
routes.use(require('./routes/get/cart.routes'))
routes.use(require('./routes/get/order.routes'))



module.exports = routes
