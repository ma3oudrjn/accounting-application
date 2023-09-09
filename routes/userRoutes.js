const express = require('express')
const app = express()
uRouter=express.Router()

const userSchema = require('../model/user')
const productSchema=require('../model/product')
const controller = require('../controller/buy')
//create new user
pRouter.post("/add/user", (req, res) => {
    userSchema.create(req.body).then((result)=>{
        console.log(result);
        res.send(result)
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
})

//monitor all users
pRouter.get("/all/user", (req, res) => {
    userSchema.find({}).then((data)=>{
console.log(data)
res.send(data);
    }).catch((err)=>{
console.log(err);
    })
  });

  // delete one user
pRouter.delete("/delete/user/:id",(req, res)=>{
    userSchema.findByIdAndRemove(req.params.id)
    .then((data)=>{
        res.status(200).send("deleted  "+data)
        console.log("successful deleted ✅: "+data);
    })
    .catch((err)=>{
    res.status(400).send("cant delete becuse:"+err)
    console.log("faild delete ❌: "+err);
    
    })
    })


    // UPDATE user
pRouter
.route("/update/user/:id")
.get((req, res) => {
  userSchema.findById(req.params.id)
  .then((data)=>{
res.status(200)
res.send("edited✅: "+data)
console.log(data);
  })
  .catch((err)=>{
res.status(400)
res.send("cant edit❌: "+err)
console.log(err);

  })
})

// Update user Data
.put((req, res) => {
  userSchema.findByIdAndUpdate(req.params.id,{$set: req.body,}) 
  .then((data)=>{
      res.status(200)
      res.send("edited✅: "+data)
      console.log(data);
          })
          .catch((err)=>{
      res.status(400)
      res.send("cant edit❌: "+err)
      console.log(err);
  
      }
 ) }
  );

// add to cart
pRouter.get("/add/andBuy/:id",controller.buysomeThing)

  









module.exports=uRouter