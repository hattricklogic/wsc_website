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
  msg: { type: String },
  user : { type: String},
  type: { type: String },
  qty: {type: String}, 
  total: {type: String},
  sweater: {type: String },
  tshirt: {type: String },
  trophy: {type: String }, 
  gender: { type: String },
  date: {type: Date, defalut: Date.now}
});


export default mongoose.model('orders', OrdersSchema);
