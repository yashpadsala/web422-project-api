// import express
const express = require("express");
const { message } = require("statuses");

const mongoose = require('mongoose');
require('dotenv').config({ path: 'config/keys.env' });


const CustomerController = require("./controllers/customerController.js");
const ProductController = require("./controllers/productController.js");


if(process.env.NODE_ENV!="production")
{
    require('dotenv').config({ path: 'config/keys.env' });
}

//create Express App object

const app = express();

//middleware fuction that tells RESTFUL API to JSON 
app.use(express.json());

app.use("/customers", CustomerController);
app.use("/products", ProductController);


//const PORT = 8080;
app.listen(process.env.PORT, () =>{
    console.log(`The REST API is up and running on PORT ${3000}`);


    mongoose.connect(process.env.MONGODB_QUERY_STRING)
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch(err=> {
        console.log(`Error ${err}`)
    })
})