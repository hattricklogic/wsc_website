var MongoClient = require("mongodb").MongoClient;
import mongoose from"mongoose";

var url = "mongodb://localhost:27017/WSC_Users";
var connect = MongoClient.connect(url);

mongoose.Promise = global.Promise;
mongoose.connect(url);

console.log("connected");
var User = require("../models/registrationModel");


module.exports = {
  connect,
  User,
  close: function () {
    connect.then(db => db.close());
    mongoose.disconnect();
  }
};
