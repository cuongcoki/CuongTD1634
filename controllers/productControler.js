import express from 'express'
import Product from '../models/productModel.js'

const productController = {
    getAllProducts: async (req, res) => {
        const p = new Product({
            name: "Product01",
            quantity: 10,
            price: 20.5,
            image: 'product1.png'
        })
        const p1 = new Product({
            name: "Product02",
            quantity: 5,
            price: 10,
            image: 'product2.png'
        }
        )
        const list = [p]
        list.push(p1)

        // const products = await list.find()
        // if (!products) {
        //     return res.status(404).json({ message: 'Product not found' })
        // }
        res.status(200).json(list)
    }
}


export default productController;