const express = require('express')
const app = express()
const _ = require('joi')
const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    userName: _.string().min(3).required(),
    pass: _.string().min(6).max(12).required()
})

module.exports = mongoose.model("admin",adminSchema)
