import { Router } from 'express'
// import passport from 'passport'
import register from '../api/register.js'

const router = Router(); 

// When a Users request the Login Page Display the view for the Login
router.route('/login')
    .get((req, res) => {  
        res.render("auth/login", {title:"Login Page"})
    })
    .post((req, res) => {
        return res.render("index");
    });
    
// When a Users request the Registration Page Display the view for the Registration
router.route('/register')
    .get((req, res) => {
        res.render("auth/register", {title:"Registration Page"})
    })
    .post((req, res, next) => { 
        return res.render("catalog/products"); 
    })

export default router