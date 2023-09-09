
const userSchema = require('../model/user')


class incres{
    async incresSomeThing (req,res){
    const customer = req.params.id
    const whitchOne = req.body.whitchOne
     let y = await userSchema.findById(customer)
     try{
    
        const index = y.cart.indexOf(whitchOne);
        console.log(y.cart.indexOf(whitchOne));
        if (index > -1) { 
            y.cart.splice(index); 
        }
        
        
        y.save()
        console.log(y.cart); 
       
    
     }
      
    
    
    
     
     catch(err){
    console.log("eror: ",err);
     }
    }
    
    }
    
    
    
    module.exports = new incres()