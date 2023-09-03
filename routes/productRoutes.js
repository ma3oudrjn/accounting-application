const express = require('express')
const app = express()
pRouter=express.Router()

const mongoose = require('mongoose')
const productSchema = require('../model/product')

//create new product
pRouter.post("/add/product", (req, res) => {
    productSchema.create(req.body).then((result)=>{
        console.log(result);
        res.send(result)
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
})

//monitor all product
pRouter.get("/all", (req, res) => {
    productSchema.find({}).then((data)=>{
console.log(data);
    }).catch((err)=>{
console.log(err);
    })
  });

// delete product
pRouter.delete("/delete/product/:id",(req, res,)=>{
productSchema.findByIdAndRemove(req.params.id)
.then((data)=>{
    res.status(200).send("deleted"+data)
    console.log("successful deleted ✅: "+data);
})
.catch((err)=>{
res.status(400).send("cant delete becuse:"+err)
console.log("faild delete ❌: "+err);

})
})





module.exports=pRouter