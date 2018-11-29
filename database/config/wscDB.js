/*
Author: Rob Thomas 
Created: Nov 20, 2018 
Module: William Special Group - Database  

Description: This module contains the database connections and 
             user models. The user models controll the how data 
             is entered into the database. This is a second layer 
             of validation before writting data to the database. 
*/ 

var MongoClient = require("mongodb").MongoClient;
import mongoose from "mongoose";
import register from "../models/RegistrationModel";
import product from '../models/ProductsModel'; 

mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/WSC_DB"; 
const connect = new MongoClient(url, { useNewUrlParser: true});
mongoose.connect(url);

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("connection open");
// });


export default {
    connect, 
    register,
    product,
    MongoClient,
    close: function(){
      connect
      .then(db => db.close())
      .then(() => {
          console.log("closing connection"); 
          mongoose.disconnect();
    });
      
    }
}
