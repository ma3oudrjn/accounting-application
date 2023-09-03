const express = require('express')
const app = express()
uRouter=express.Router()

const mongoose = require('mongoose')
const productSchema = require('../model/user')

//create new user
pRouter.post("/add/user", (req, res) => {
    productSchema.create(req.body).then((result)=>{
        console.log(result);
        res.send(result)
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
})

//monitor all users
pRouter.get("/all/products", (req, res) => {
    productSchema.find({}).then((data)=>{
console.log(data);
    }).catch((err)=>{
console.log(err);
    })
  });







module.exports=uRouter