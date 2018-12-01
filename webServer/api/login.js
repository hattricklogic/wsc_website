/*
Author: Rob Thomas 
Created: Nov 22, 2018 
Module: Server-side API  

Description: This is a server side api for login. 
             the user id and password is checked against 
             the registered user account. if the user is 
             found they are logged in and rerouted to the 
             products page. 

*/ 
import express from 'express';
import db from '../../database/config/wscDB';

const router = express.Router(); 
const User = db.register;
var userSession; 
// When a Users request the Login Page Display the view for the Login
router.route('/login')
    .get((req, res) => {  
        res.render("auth/login", {title:"Login Page"})
    })
    .post((req, res, next) => { 
     
        User.findOne({ email: req.body.userName }, (error, user) => {

            if (error){
                return console.log("Could not find userId", req.body.uname );
            }
            if (!user) {
    
                const msg = 'User Name or Password incorrect!'
                return res.render('auth/login', {
                errors: msg,
                userName: req.body.userName,
                password: req.body.password 
                })
            }
            const passwordsMatch = User.passwordMatches(req.body.password, user.password);
    
            if (user && passwordsMatch){
                userSession = req.session; 
                userSession.userName;

                res.render('catalog/products'); 
            }
        });  // end findOne()
        db.close
});

export default router

