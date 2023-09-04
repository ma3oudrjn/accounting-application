const express = require('express')
const app = express()
const joi = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
"name": String,
"id": Number,
"wallet": Number,
"Cart": [{}],
})

module.exports = mongoose.model("users",userSchema)