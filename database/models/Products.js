
// import mongoose from 'mongoose';
const mongoose = require('mongoose')

var ProductsSchema = new mongoose.Schema({
  product: { type: String, required: true },
  price: { type: String, required: true},
  plaque: { type: String },
  sweater: {type: String },
  tshirt: {type: String },
  trophy: {type: String }, 
  gender: { type: String }, 
  job: {type: String}
});


// export default mongoose.model('products', ProductsSchema);
module.exports = mongoose.model('products', ProductsSchema);