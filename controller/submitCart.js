const userSchema = require('../model/user')
const productSchema = require('../model/product');
const { x } = require('joi');

class Submit{
async submitButton(req,res){
   const customer= await userSchema.findById(req.params.id)
   let cLength= customer.cart[0].length
//   cLength=--cLength
   for(let i=0;i<cLength; i++)
   {
    let products= await productSchema.findById(customer.cart[0][i])
    try{
     products.quantity =products.quantity-1
     console.log(products.quantity);
     products.save()
    }
     catch (err){
        console.log(err);


    }
   
 


   }
   





}
}
module.exports = new Submit()