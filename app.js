import express from 'express'
import exphbr from 'express-handlebars'
import bodyparser from 'body-parser'
import db from './database/config/wscDB';

const User = db.register;
const app = express();

app.set("views", "./views");
app.set("view engine", "jade");

app.use(express.static("./public"));
app.use(express.static("./node_modules/jquery/dist"));
app.use(bodyparser.urlencoded({extended : true }));
app.use(bodyparser.json());
app.use(session({secret: 'myDevrySecretToken'}))


var userSession;

app.get('/', (req, res) => {
    res.render("index", {title:"Devry Project 2018"})
});

app.get('/aboutus', (req, res) => {
    res.render("aboutus", {title:"About Us"});
});

app.get('/services', (req, res) => {
    res.render("services", {title:"Our Services"});
});

app.get('/products', (req, res) => {
    res.render("catalog/products", {title:"Our Products"});
});

app.get('/cart', (req, res, next) => {

    if (!req.userSession){
        return res.render("auth/login", {title:"Shopping Cart"});
    } else if (req.userSession.email){
        res.render("/cart", {title:"Shopping Cart"});
    }
});

app.get( '/customer', (req, res, next) => {  

    Register.findOne({email: userSesssion.email})
    .then( user => {
            res.render("profile/customer", { user:user } )            
    });
        
}); 

app.get('/login', (req, res) => {  
    res.render("auth/login", {title:"Login Page"})
});

app.post('/login', (req, res, next) => { 
 
    User.findOne({ email: req.body.userName }, (error, user) => {
        console.log(req.body.userName);

        if (error){
            return console.log("Could not find userId", req.body.userName );
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
    });  
});

app.get('/register', (req, res) => {
    res.render("auth/register", {title:"Registration Page"})
});

app.post('/register', (req, res, next) => { 
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

app.listen(8000, () => console.log("listening at http://localhost:8000"));