const route = require('express').Router()
const productModel = require('../models/product/productModel')

route.post('/import', productModel.addProducts)

module.exports = route

