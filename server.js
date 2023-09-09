const express = require('express');

const app = express();

// Routes: GET, POST, PUT (PATCH), DELETE
app.get("/", (req, res) => {
    res.status(200).json({message: "Hello HuWu"})
})

app.get("/products", (req, res) => {
    try {
        const data = [
            {id: 1, name: "Quan", age: 20},
            {id: 2, name: "Tu", age: 25}
        ]
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get("/blogs", (req, res) => {
    res.send("Welcome to my Blogs ")
})

// Listen on port number 9999
app.listen(9999, () => {
    console.log('Server listening on port 9999');
}) 