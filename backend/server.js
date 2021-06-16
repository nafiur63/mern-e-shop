import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import productRoutes from "./routes/productRoutes.js"
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hola Amigo")
})

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)

const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV

app.listen(PORT, (req,res)=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode at port ${PORT}`)
})
