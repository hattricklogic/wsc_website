/*
Author: Rob Thomas 
Created: Nov 20, 2018 
Module: William Special Group - Database  

Description: This module contains the database connections and 
             user models. The user models controll the how data 
             is entered into the database. This is a second layer 
             of validation before writting data to the database. 
*/ 

import mongoose from "mongoose";
import registerModel from "../models/RegistrationModel";
import productModel from '../models/ProductsModel'; 

const url = "mongodb://localhost:27017/WSC_DB"; // add you database connection string here 
const connect = mongoose.connect(url, { useNewUrlParser: true})
    .then( () => console.log('Connected to MongoDB!'))
    .catch(error => console.log(error))

export default {
    connection: connect, 
    register: registerModel,
    product: productModel,
    close: function(){
      connection.then(db => db.close());
      mongoose.disconnect();
    }
}
