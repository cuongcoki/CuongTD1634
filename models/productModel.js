// const mongoose = require('mongoose')
import mongoose from "mongoose";

// Define Product schema 
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name!!!"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
},
    {
        timestamps: true
    }
)

// Create Product model 
const Product = mongoose.model('Product', productSchema)

// module.exports = Product
export default Product;