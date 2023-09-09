const express = require('express')
const app = express()
//const mongoose = require('mongoose')
const userSchema = require('../model/user')
const productSchema=require('../model/product')

class buy{
async buySomeThing(req,res){
let body = req.body
let Id = body.productId
let params = req.params.id
 let x =await userSchema.findById(params)
 try{
    x.cart.push(Id)
    x.save()
    console.log("successfully add product");
 }
 catch(err){
console.log(err);
 }
 }
}

module.exports = new buy()









