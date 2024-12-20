const express = require('express')
const app = express()
const mongoose = require('mongoose')



app.listen(3000,()=>{
    console.log('server is running on port 3000')
})

app.get('/',(req,res)=>{
    res.send('hello world from Basit ayomide')
})

mongoose.connect('')
.then(()=>{
    console.log('connected to database')
})
.catch(()=>{
    console.log('failed to connect to database')
})