import mongoose from 'mongoose';

var ProductsSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true},
  quanity: { type: Number, required: true },
 
});


export default mongoose.model('products', ProductsSchema);