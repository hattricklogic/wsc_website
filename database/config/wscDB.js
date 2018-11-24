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
