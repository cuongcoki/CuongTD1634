import express from 'express';
import * as dotenv from 'dotenv'
import { userRouter, productRouter, studentRouter } from './routes/index.js';
import connectDB from './database/database.js';
// add authorization

// import { connect } from 'mongoose';
// import { Producet } from './models/productModel'

const app = express();

dotenv.config();
app.use(express.json()); //  Config cho express làm việc với dữ liệu theo định dạng json

// Routes: GET, POST, PUT (PATCH), DELETE

app.get('/', (req, res) => {
    res.send('Welcome to HOME REST API !!!')
})

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/students', studentRouter)

const port = process.env.PORT || 8080

app.listen(port, () => {
    connectDB()
    console.log(`Sever is running on ${port} OK`);
})

// app.get("/", (req, res) => {
//     res.status(200).json({ message: "Hello HuWu" })
// })

// app.get("/products", (req, res) => {
//     try {
//         const data = [
//             { id: 1, name: "Quan", age: 20 },
//             { id: 2, name: "Tu", age: 25 }
//         ]
//         res.status(200).json(data)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// app.get("/blogs", (req, res) => {
//     res.send("Welcome to my Blogs ")
// })





// Listen on port number 9999


// Connect to MongoDB
// mongoose.connect("mongodb+srv://huyquanwork95:%40Quan2002@cluster0.nt98mgl.mongodb.net/?retryWrites=true&w=majority")
//     .then(() => {
//         console.log("Connected to MongoDB successfully !");
//         app.listen(9999, () => {
//             console.log('Server listening on port 9999');
//         })
//     })
//     .catch(err => {
//         console.log(err.message);
//     })