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
class incres{
async incresSomeThing (req,res){
const customer = req.params.id
const whitchOne = req.body.whitchOne
 let y = await userSchema.findById(customer)
 try{

    const index = y.cart.indexOf(whitchOne);
    if (index > -1) { // only splice array when item is found
        y.cart.splice(index, 1); // 2nd parameter means remove one item only
    }
    
    // array = [2, 9]
    console.log(y.cart); 

 }
  



 
 catch(err){
console.log(err);
 }
}





}



module.exports = new incres()
module.exports = new buy()









