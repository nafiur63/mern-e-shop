const express = require('express')
const products = require('./data/products')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hola Amigo")
})


app.get('/api/products',(req,res)=>{
    res.send(products)
})

app.get('/api/product/:id',(req,res)=>{
    const product = products.find((p) => p._id === req.params.id )
    res.json(product)
})


app.listen(5000, (req,res)=>{
    console.log("Server running at port 5000")
})
