const userSchema = require('../model/user')
const productSchema = require('../model/product');
const { x } = require('joi');

class Submit{
async submitButton(req,res){
   const customer= await userSchema.findById(req.params.id)
   let cLength= customer.cart[0].length
  cLength=--cLength
   for(let i=cLength;i>-1;--i)
   {
    console.log(i);
    let products= await productSchema.findById(customer.cart[0][i])
     let x =products.quantity
     x--
     console.log(x);
     products.save()
   
 


   }
   





}
}
module.exports = new Submit()