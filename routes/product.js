import express from "express";
import productController from "../controllers/productControler.js";

const productRouter = express.Router();

// Activity ---> User object

productRouter.get('/', (req, res) => {
    // productController.getAllProducts(req, res);

    res.send("Get alll products");
})

productRouter.get('/:id', async (req, res) => {
    res.send("Get products by product Id")
})

productRouter.post('/create', async (req, res) => {
    res.send("Create a new Product")
})

export default productRouter;