const express = require('express')

const router =express.Router()

const {showProducts, viewProduct} = require('../controller/productController')


router.get('/products',showProducts)
router.get('/viewproduct/:id',viewProduct)













module.exports =router