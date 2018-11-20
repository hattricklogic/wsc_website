import express from 'express';
import db from '../../database/config/wscDB';

const router = express.Router();
const Register = db.register;

router.route('/register')
    .get((req, res) => {
        res.render("auth/register", {title:"Registration Page"})
    })
    .post((req, res, next) => { 

        const user = new Register({
            fname: req.body.firstName,
            lname: req.body.lastName,
            email: req.body.email,
            password: req.body.password        
        });
        user.save()
        .then(() => res.redirect('/products'))
        .catch(next);
        db.close;
    })
export default router

