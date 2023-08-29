const express = require('express')
const app = express()










const PORT = process.env.PORT||8080;
app.listen(PORT,(err)=>{
    if(err){
        console.log("err in listening PORT:",PORT);
    }else{
        console.log("you listening to:",PORT," port");
    }})