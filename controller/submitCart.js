const userSchema = require('../model/user')
const productSchema = require('../model/product');
const shopingSchema = require('../model/shoping')

class Submit{

async submitButton(req,res){

   const customer= await userSchema.findById(req.params.id)
   let cLength= customer.cart.length
   let cWallet = customer.wallet

   for(let i=0;i<cLength; i++)
   {
    let products= await productSchema.findById(customer.cart[i])
    try{
     products.quantity =products.quantity-1
     cWallet=cWallet-products.price
     console.log(products.quantity);
     products.save()
      customer.save()     

    }
     catch (err){
        console.log(err);


    }
   }
   console.log(cWallet);


}
}
module.exports = new Submit()