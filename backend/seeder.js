import mongoose from "mongoose"
import dotenv from 'dotenv'
import users from "./data/users.js"
import products from "./data/products.js"
import User from "./models/userModel.js"
import Product from "./models/productModel.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleProducts = products.map(product =>{
            return {...product, user:adminUser}
        })

        await Product.insertMany(sampleProducts)
        console.log('Data imported!!!')
        process.exit()

    } catch (error) {
        console.error(`Error: ${error}`)
        process.exit(1)
    }
}

const deleteData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()

        console.log('Data deleted!!!')
        process.exit()

    } catch (error) {
        console.error(`Error: ${error}`)
        process.exit(1)
    }
}

if(process.argv[2]==='-d'){
    deleteData()
}
else{
    importData()
}