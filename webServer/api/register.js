import express from 'express';
import db from '../../database/config/wscDB';

const router = express.Router();
const Register = db.register;

router.route('/register')
    .get((req, res) => {
        res.render("auth/register", {title:"Registration Page"})
    })
    .post((req, res, next) => { 
            console.log(req.body);
            
        Register.findOne({ email: req.body.email }, (error, user) => {
            // console.log(user);
            if (error){
                return console.log("Could not find userId", req.body.uname );
            }
            if (user) {
    
                const msg = 'Email Already Exist!'
                return res.render('auth/register', { errors: msg}); 
            } 
            if (!user) {
                const user = new Register({
                    fname: req.body.firstName,
                    lname: req.body.lastName,
                    password: req.body.password,
                    email: req.body.email,
                    contact : { phone: req.body.phone},
                    address: {
                        line: req.body.address,
                        city: req.body.city,
                        state: req.body.state,
                        zip: req.body.zip
                    }
                 });
                user.save()
                .then(() => res.redirect('/products'))
                .catch(next);
            }
        });  // end findOne()
        db.close;
        
    });

export default router