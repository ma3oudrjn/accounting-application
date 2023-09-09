const express = require('express')
const app = express()
//const mongoose = require('mongoose')
const userSchema = require('../model/user')
const productSchema=require('../model/product')

class buy{
async buysomeThing(req,res){
let body = req.body.id
let params = req.params.id
 const x=await userSchema.findById(params)
const wcart = x.cart
wcart.push(body)
}
}

module.exports = new buy()









