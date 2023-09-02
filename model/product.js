const express = require('express')
const app = express()
const _ = require('joi')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
name: _.string().min(3).required(),
price: _.number().required(),
serialNumber: _.string().required(),
numberOfInventory: _.number(),
description: _.string().required(),
imageUrl: _.string(),
isLive: _.boolean().required()
})

module.exports = mongoose.model(product,productSchema)