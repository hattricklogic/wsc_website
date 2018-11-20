import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

var schemaOptions = {
  collection: "users"
};

var userSchema = new mongoose.Schema({
  fname: { type: String, required: true, minlength: 3 },
  lname: { type: String, required: true, minlength: 4 },
  password: { type: String, required: true },
  roles: [String],
  contact: {
    phone: String,
    email: String
  },
  address: {
    lines: [String],
    city: String,
    state: String,
    zip: Number
  }
}, schemaOptions);

// Runs validation before saving a user
userSchema.pre('save', function(next) {

    this.email = this.email.toLowerCase();
    const unsafePassword = this.password;
    this.password = bcrypt.hashSync(unsafePassword); // Will encrypt the user's password
    next();
});

export default mongoose.model('users', userSchema);
