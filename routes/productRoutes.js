const express = require('express')
const app = express()
pRouter=express.Router()

const productSchema = require('../model/product')


//create new product
pRouter.post("/add/product", (req, res) => {
    productSchema.create(req.body).then((result)=>{
        console.log(result);
        res.send(result)
    }).catch((err)=>{
        console.log(err);
        res.send(err)
    })
})

//monitor all products
pRouter.get("/all/products", (req, res) => {
    productSchema.find({}).then((data)=>{
console.log(data);
    }).catch((err)=>{
console.log(err);
    })
  });

// delete product
pRouter.delete("/delete/product/:id",(req, res,)=>{
productSchema.findByIdAndRemove(req.params.id)
.then((data)=>{
    res.status(200).send("deleted"+data)
    console.log("successful deleted ✅: "+data);
})
.catch((err)=>{
res.status(400).send("cant delete becuse:"+err)
console.log("faild delete ❌: "+err);

})
})


// UPDATE product
pRouter
  .route("/update/product/:id")
  .get((req, res) => {
    productSchema.findById(req.params.id)
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

  // Update product Data
  .put((req, res) => {
    productSchema.findByIdAndUpdate(req.params.id,{$set: req.body,}) 
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



module.exports=pRouter