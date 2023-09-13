const userSchema = require('../model/user');
const productSchema = require('../model/product');
const shopingSchema = require('../model/shoping');

class Submit {
  async submitButton(req, res) {
    try {
      const customer = await userSchema.findById(req.params.id);
      const cartLength = customer.cart.length;
      let cWallet = customer.wallet;

      for (let i = 0; i < cartLength; i++) {
        const product = await productSchema.findById(customer.cart[i]);
        try {
          product.quantity = product.quantity - 1;
          cWallet = cWallet - product.price;
          console.log(product.quantity);
          await product.save();
        } catch (err) {
          console.log(err);
          throw new Error('Failed to save product');
        }
      }

      customer.wallet = cWallet;
      await customer.save();

      console.log(cWallet);
    } catch (err) {
      console.log(err);
      // Handle the error appropriately
    }
  }
}

module.exports = new Submit();