import express from 'express';
import wscDB from '../../database/config/wscDB'

const Register = wscDB.register; 
const router = express.Router(); 

router.route('/customer')

.get( (req, res, next) => {  

    Register.findOne({email: userSesssion.email})
    .then( user => {
        //   console.log('res.locals', res.locals, user);
            res.render("profile/customer", { user:user } )            
    });
        
}); 

export default router