import mongoose from"mongoose";
import registerModel from "../../database/models/registrationModel";

const url = "";
const connect = mongoose.connect(url, { useNewUrlParser: true }, error => {
        if (error) {
            console.log('Unable to connect to database');
            throw error;
        } else {
            console.log('Connected to MongoDB!');
        }
    });
// console.log('registration model ' +registerModel); 

export default {
    connection: connect, 
    register: registerModel,
    close: function(){
      connect.then(db => db.close());
      mongoose.disconnect();
    }
}
