const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors');
const bodyParser = require('body-parser');


const products = require('./routes/productRoutes')
const users = require('./routes/userRoutes')
//database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/test`,{useNewUrlParser:true},{useFindAndModify:false},{useCreateIndex:true},{useUnifiedTopology:true}
).then(()=>{
        console.log("Conected To Database");
    }),error => {
    console.log('Could not connect to database : ' + error)
  }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



//home page request
  app.get('/',(req,res)=>{
res.send("wellcome to the first page")
 console.log("req:","home page request");
  })

  app.use(cors());
  app.use(products)
  app.use(users)








// port connection
const PORT = process.env.PORT||8080;
app.listen(PORT,(err)=>{
    if(err){
        console.log("err in listening PORT:",PORT);
    }else{
        console.log("you listening to:",PORT," port");
    }})