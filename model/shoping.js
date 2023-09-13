const mongoose = require('mongoose');
const shopingSchema = mongoose.Schema({

    customer:{type:String,require:true},
    shop:{type:Number,require:true},
    time : { type : Date, default: Date.now }



})
module.exports=mongoose.model('shoping',shopingSchema)