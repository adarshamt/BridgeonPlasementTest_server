const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    productName :'String',
    discription:'String',
    price:'Number',
    category:'String',
    Quantity:'String',
 //TODO: give releation ship to store using ref 
    images:[{}]


})


const product = mongoose.model("product",productSchema)
module.exports = product