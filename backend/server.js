import express from 'express'
import products from './data/products.js'
import dotenv from "dotenv"

dotenv.config()

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

const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV

app.listen(PORT, (req,res)=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode at port ${PORT}`)
})
