import express from 'express';
const router = express.Router(); 

// When a Users request the Login Page Display the view for the Login
router.route('/login')
    .get((req, res) => {  
        res.render("auth/login", {title:"Login Page"})
    })
    .post((req, res) => {
        return res.render("index");
    });

export default router