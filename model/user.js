const express = require('express')
const app = express()
const _ = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
name: _.string().min(3).required(),
id: _.number().required(),
wallet: _.number().required(),
Cart: _.array(),
})

module.exports = mongoose.model("user",userSchema)