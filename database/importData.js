var MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const Products = require("./models/Products")

var productlist = require(__dirname + "/data.json");

mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/Devry"; 
new MongoClient(url, { useNewUrlParser: true});
mongoose.connect(url);

Products.insertMany(productlist)
  .then(() => {
    console.log("inserted!");
    mongoose.disconnect();
  })
  .catch(error => {
    console.error(error);
  });