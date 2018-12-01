/*
Author: Rob Thomas 
Created: Nov 24, 2018 
Module: Database Model - Registration  

Description: This module contains the database schema rules 
             for user registration in the application. 
             It encrypts the password before saving it to the 
             database. 
*/ 

import mongoose from 'mongoose';

var OrdersSchema = new mongoose.Schema({
  product: { type: String },
  price: { type: String },
  desc: { type: String },
  email : { type: String},
  purchased: {type: Boolen}, 
  date: {type: Date, defalut: Date.now}
});


export default mongoose.model('orders', OrdersSchema);
