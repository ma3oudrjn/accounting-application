const express = require('express')
const app = express()
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    wallet: { type: Number, required: true},
    cart: [{p:{type : String},n:{type:Number}}]
})

module.exports = mongoose.model("users",userSchema)