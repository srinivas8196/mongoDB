const bodyParser = require("body-parser");
const express = require("express")
const mongoose = require("mongoose")
const app = express();

mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7");
console.log("connection sucsesfull");

const b7userdata = {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  };

  const b7shopdata = {
    id: {
        type: Number,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    category:{

        type:String,
    },

    subcategory:{
        type: String,
    }
  };

 const User = mongoose.model("b7userdata", b7userdata); //first parameter is collection in mongodb database second argument is object / array defines in program
 const Product = mongoose.model("b7shopdata", b7shopdata);

 app.use(bodyParser.json())

 app.post("/adduser",(req,res)=>{

    const newUser = new User({
        name : req.body.name,
        age: req.body.age,
    })


   documentSave()
 
async function documentSave()
{
   let result = await newUser.save()
   {
       res.send(result)
   }
}
})

app.post("/addproduct",(req,res)=>{

    const newProduct = new Product({
        id : req.body.id,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        subcategory: req.body.subcategory,
    })

    productSave()
 
async function productSave()
{
   let result = await newProduct.save()
   {
       res.send(result)
   }
}

})


app.get("/showproducts", async function(req,res)
{
 let allproducts = await Product.find({})
    {
       
    res.send(allproducts)
     
    } 
})

app.get("/showproduct/:id", async function(req,res)
{
    let showproduct = await Product.find({id: req.params.id})
    res.send(showproduct)
})

app.listen(4000, () => {
    console.log("Server is running on 4000");
  });
