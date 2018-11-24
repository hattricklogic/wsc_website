import mongoose from 'mongoose';

var schemaOptions = {
  collection: "products"
};

var userSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true},
  quanity: { type: Number, required: true },
 
}, schemaOptions);


// Encypt the user password and convert email to lower case 
userSchema.pre('save', next => {
    this.product = this.product_name.toLowerCase();
    next();
});

export default mongoose.model('product', userSchema);