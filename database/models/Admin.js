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
// import bcrypt from 'bcrypt-nodejs';

var AdminSchema = new mongoose.Schema({
  fname: { type: String, required: true, minlength: 3 },
  lname: { type: String, required: true, minlength: 4 },
  password: { type: String, required: true },
  email : { type: String, required: true},
  user: {type: String}, 
  role: {type: String}
});

// Static methods that can be called from anywhere (e.g., User.passwordMatches)
// AdminSchema.statics.passwordMatches = function(password, hash) {
//   return bcrypt.compareSync(password, hash);
// }

// Runs validation before saving a user
// AdminSchema.pre('save', next => {

//     const unsafePassword = password;
//     password = bcrypt.hashSync(unsafePassword); // Will encrypt the user's password
//     next();
// });

export default mongoose.model('admin', AdminSchema);
