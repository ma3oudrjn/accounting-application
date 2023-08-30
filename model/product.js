const express = require('express')
const app = express()
const _ = require('joi')
const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
name: _.string().min(3),
comi



})
