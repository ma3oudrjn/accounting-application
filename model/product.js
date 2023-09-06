const express = require('express')
const { number } = require('joi')
const app = express()
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    quantity: {type:Number,required:true}
})

module.exports = mongoose.model("product",productSchema)