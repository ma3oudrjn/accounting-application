const express = require('express')
const app = express()
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true},
    phoneNumber:{type:Number},
    wallet: { type: Number, required: true},
    cart: [{
        productId:{type:String},
        quantity: {type:Number},
        
}]
    })

module.exports = mongoose.model("users",userSchema)