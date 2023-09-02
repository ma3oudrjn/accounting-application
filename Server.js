const { createLoginCallbackHandler } = require('@okta/oidc-middleware/src/connectUtil');
const express = require('express')
const app = express()
app.use(express.json())

//database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/test`).then(()=>{
        console.log("Conected To Database");
    }),error => {
    console.log('Could not connect to database : ' + error)
  }
//home page request
  app.get('/',(req,res)=>{
res.send("wellcome to the first page")
 console.log("req:","home page request");
  })









// port connection
const PORT = process.env.PORT||8080;
app.listen(PORT,(err)=>{
    if(err){
        console.log("err in listening PORT:",PORT);
    }else{
        console.log("you listening to:",PORT," port");
    }})