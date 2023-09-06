const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
customerUserName: {type: String,require:true},
customerPass: {type: String,require:true},
cart: [{type:String}]

}
 
);

module.exports = mongoose.model("Cart", CartSchema);