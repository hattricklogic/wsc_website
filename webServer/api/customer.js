// import express from 'express';
// import wscDB from '../../database/config/wscDB'
// import jwt from 'jsonwebtoken'; 

// const Register = wscDB.register; 

// const router = express.Router(); 

// router.route('/customer')

// .get(verifyToken, ( req, res, next) => {  

//     jwt.verify(req.token, 'mySecretDevryToken', (err, authData) => {

//         if (err){    
//             res.sendStatus(403);
//         } else {
//             Register.findOne({email: authData.user.username})
//             .then( user => {
//                   console.log('res.locals', res.locals, user);
//                 //   res.locals("catalog/products", { user:user } )            
//             });
//         }
//     });
// }); 

// export function verifyToken(req, res, next){

//     const headers = req.headers['authorization'];

//     if (typeof headers != 'undefined'){

//         const bearer = headers.split(' ');
//         const token = bearer[1];

//         req.token = token;
//         next();

//     } else {
//         res.render('profile/customer');
//     }
// }

// export default router