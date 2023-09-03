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


// // delete product
// pRouter.delete("/delete/product/:_id",(req, res,)=>{
// productSchema.findByIdAndRemove(req.params._id,(err,data).than((data)=>{
// console.log("delete Successful:",data);
// res.send("delete Successful:",data)
// }).catch((err)=>{
//     console.log("delete fi:",err);
//     res.send("delete Successful:",err)
// }))
// })






module.exports=pRouter