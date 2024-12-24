const express = require('express');
const GetSearchProduct = require('../../controller/get/search.controler');
const verifyToken = require('../../middlewares/verifyToken');

const routes = express.Router();

routes.get('/product/search', verifyToken, GetSearchProduct);

module.exports = routes;
