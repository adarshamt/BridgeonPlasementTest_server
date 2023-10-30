const express =require ('express')

const app = express()

const mongoose = require('mongoose')

const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config();



const product = require ('./model/productSchema')




app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('dev')) 


 
const mongodb_url = process.env.mongo_url

mongoose
  .connect(mongodb_url, {  
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  

  // app.get("/products",async(req,res)=>{
  //   const productData = await product.find()
  //   res.json(productData)
     
  // })


  const productRouter = require('./routes/productRouter')
  app.use(productRouter)
  
  
  




 

app.listen(4743,()=>{


    console.log('server is running at port 4743')
}
)
