import express from 'express';
import db from '../../database/config/wscDB';
const router = express.Router(); 

const Register = db.register; 


router.route('/myProfile')
.post(verifyToken, ( req, res) => {  

    jwt.verify(req.token, 'secretKey', (err, authData)=>{
        if (err){
            res.sendStatus(403);
        }else {
            res.render('/myProfile:EditScreen', {registeration:data})
        }
    })
    //look up the logged in customer and get the emailID for the account. 
    // research express sessions 

    Register.find({email: req.body.email}, (error, user) => {
        // the product have images that should be display on the page 
        console.log(user);
    }); 
    

    res.render("profile/customer", {
        title:"My Profile", 
        fname,
        lname
    });
}); 

export function verifyToken(req, res, next){

    const headers = req.headers['authorization'];

    if (typeof headers != 'undefined'){

        const bearer = headers.split(' ');
        const token = bearer[1];

        req.token = token;
        next();

    } else {
        res.sendStatus(403);
    }
}

export default router