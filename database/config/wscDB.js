import mongoose from"mongoose";
import registerModel from "../../database/models/registrationModel";

const url = ""; // add you database connection string here 
const connect = mongoose.connect(url, { useNewUrlParser: true }, function (error) {
        
    if (error) {
            console.log('Unable to connect to database');
            throw error;
        } else {
            console.log('Connected to MongoDB!');
        }
    });

export default {
    connection: connect, 
    register: registerModel,
    close: function(){
      connect.then(db => db.close());
      mongoose.disconnect();
    }
}