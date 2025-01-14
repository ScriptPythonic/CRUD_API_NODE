const express = require('express')
const app = express()
app.use(express.json())
const Product = require('./models/product.model')
const mongoose = require('mongoose')



app.listen(3000,()=>{
    console.log('server is running on port 3000')
})

app.get('/',(req,res)=>{
   res.send("welcome to the api created by scriptpythonic a python developer")
})


// api end point for product => create
app.post('/api/products',async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json({message:"mesaage product created successfully",product})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


// get all the product in the database
app.get('/api/products', async(req,res)=>{
    try{
        const products = await Product.find()

    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get("/api/products/:id",async(req,res)=>{
    try{

        const product = req.params.id
        const fetch_product  = await Product.findById(product)
        if(!fetch_product){
            res.status(404).json({message:"unable to find the product"})
        }

        res.status(200).json({message:fetch_product})

    }catch(error){
        res.send(500).jsons({message: error.message})
    }
})

app.delete("/api/products/:id",async(req,res)=>{
const product = req.params 
})

mongoose.connect('')
.then(()=>{
    console.log('connected to database')
})
.catch(()=>{
    console.log('failed to connect to database')
})
