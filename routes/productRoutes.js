const express = require('express')
const app = express()
pRouter=express.Router()

const mongoose = require('mongoose')
const productSchema = require('../model/product')

pRouter.post("/add/product", (req, res, next) => {
    productSchema.create(req.body).then((result)=>{
        console.log(result);
        res.send(result)
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
})
pRouter.get('/i',(req,res)=>{

res.send("ok")
})





module.exports=pRouter