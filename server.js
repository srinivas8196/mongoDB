//Category, subcategory, Price, Name, Id
//Create a service for all products, product by Id, Adding a new product, updating a product based on ID
const express = require("express");
const app = express();
port = 3000;

app.use(express.json());

const shop = [
    {
      category: 'Electronics',
      subcategory: 'Laptops',
      price: 1000,
      name: 'Macbook Air',
      id: '001'
    },
    {
      category: 'Electronics',
      subcategory: 'Smartphones',
      price: 800,
      name: 'iPhone 12',
      id: '002',
    },
]

app.get("/shop",(req,res)=>
{
    res.send(shop);
})

app.get("/shopid/:id", function (req, res) {
    
    for(let i = 0; i < shop.length; i++){
        if(shop[i].id == req.params.id)
        {
          res.send(shop[i]);
          break;
    }};
})

    app.post("/shop/addproduct", (req, res) => {
        console.log(req.body);
         shop.id = req.body.id;
         shop.name = req.body.name;
         shop.category  = req.body.category;
         shop.subcategory = req.body.subcategory;
         shop.price = req.body.price;
         shop.push(shop.id,shop.name,shop.category,shop.subcategory,shop.price)

        console.log("Product added succesully");
        console.log(shop)
    
        res.json({
            message: "Data received sucsessfully"
        })
    })


app.listen(3000, () => {
    console.log("Server is running on 3000");
  });