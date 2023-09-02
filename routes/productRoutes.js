const express = require('express')
const app = express()
pRouter=express.Router()

const mongoose = require('mongoose')
const productSchema = require('../model/product')
// const { date } = require('joi')

pRouter.post("/add/product", (req, res, next) => {
    productSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });







module.exports=pRouter