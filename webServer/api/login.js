import express from 'express';
import db from '../../database/config/wscDB';

const router = express.Router(); 
const User = db.register;

// When a Users request the Login Page Display the view for the Login
router.route('/login')
    .get((req, res) => {  
        res.render("auth/login", {title:"Login Page"})
    })
    .post((req, res, next) => { 
    
    User.findOne({ email: req.body.userName }, (error, user) => {

        const passwordsMatch = User.passwordMatches(req.body.password, user.password);

        if (error){
            return console.log("Could not find userId", req.body.uname );
        }
        if (!passwordsMatch || !user) {

            const msg = 'User Name or Password incorrect!'
            return res.render('auth/login', {
            errors: msg,
            userName: req.body.userName,
            password: req.body.password 
            })
        }
        if (user && passwordsMatch){

            return res.redirect('products')
        }
    });  // end findOne()
    db.close;
});



export default router



 // find the users email in the database 
    //   const email = User.findByEmail(req.body.uname)
    //   console.log("fond email", email);
    // User.findOne({ username: req.body.uname }, (error, user) => {

        // if (error){
        //     return console.log("Could not find userId", req.body.uname );
        // }
        // console.log(userInfo.username, userInfo.id);
    
        // if (user){

            // const passwordsMatch = User.passwordMatches(req.body.password, user.password);
            // console.log(passwordsMatch)
        //     if (!passwordsMatch) {

        //         const userData = getUser(user);
        //         console.log(userData);
        //         db.close;
        //         return res.status(201).json(); 
        //     }
        // }
        // next();
    // }); 

    // function getUser(req){

//     User.findOne({ username: req.body.uname }, (error, user) => {

//         if (error){
//             console.log(error);
//         }
//         const userInfo = { username: user.email, password : user.password }
//         return userInfo
//     }).catch(error)    
// }