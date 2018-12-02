import exphbr from 'express-handlebars'
import express from 'express'
import bodyparser from 'body-parser'
import flash from 'connect-flash'
import session from 'express-session'
import mongoose from 'mongoose'
import methodOverride from 'method-override'
import path from 'path'
import bcrypt from 'bcryptjs'
import passport from 'passport'
import Register from './database/models/Registration'
import Products from './database/models/Products'
import authorize from './conf/passport'
import auth from './utilities/auth'
// TODO: move this to a external file 
// This is our database connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Devry', {
    useNewUrlParser: true
})
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log("Error Connection to DB", err))

// Invoke the express app 
const app = express();

// Set static folder for client machine 
app.use(express.static(path.join(__dirname, 'public')));

// Imedidatley invoke this call to the library 
authorize(passport);

// Body parser allows us to grab the submitted values from the client
app.use(bodyparser.urlencoded({extended : true }));
app.use(bodyparser.json());

// Using this library to override put request 
app.use(methodOverride('_method'));
app.use(flash());
app.use(session({
    secret: 'myDevrySecrectKey', 
    resave: true, 
    saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());
// Let's the Web server now which html template we're using
app.engine('handlebars', exphbr({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

// Global Variables 
app.use((req, res, next) =>{
    res.locals.sucess_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    next();
})

app.get('/', (req, res) => {
    const title = "Welcome";
    res.render('index', {
        title : title
    })
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/products', (req, res) => {
    Products.find({})
    .then(products => {
        res.render('products', {products : products})
    })
});

app.get('/orders', auth.ensureAuthenticiated, (req, res) => {
    console.log(req.body);
    // Register.find({})
    res.send("OK")
    
    // res.send("OK");
    
    // Product.findOne({item: req.body.Plaque[0]})
    // .then(item => {
    //     item.product = req.body.firstName;
    //     item.price = req.body.lastName; 
    //     user.email = req.body.email;
    //     user.password = req.body.password; 
         
    //     user.save()
    //     })
    //     .then(user => {
    //         res.render("register/view", {user:user});
    //     }).catch(err => console.log("errror happend on save ", err, user)); 
});

app.get('/register/new', (req, res) => {
    res.render('register/new')
});

app.get('/customer', (req, res) => {
    Register.find({})
    .then(user => {
        res.render('register/view', {user : user})
    })
});

app.get('/login', (req, res) => {

    res.render('auth/login')
});

app.post('/login', (req, res, next) => {
    
    passport.authenticate('local', {
        successRedirect: '/products',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
   
});

app.post('/register/new', (req, res) => { 

    
    Register.findOne({email: req.body.email})
    .then(user => {

        if(user){
            req.flash("error_msg", "Email Already Registered!");
            res.redirect("/register/new")
        } else {

            const user = new Register({
                fname: req.body.firstName,
                lname: req.body.lastName,
                email: req.body.email,
                password: req.body.password
                });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) throw err;
                    user.password = hash;
                    console.log("hashing ");
                    user.save()
                    .then(user => {
                    console.log("new user created");
                    req.flash('success_msg', "You are now registers");
                    res.render('auth/login', {user});
                    })
                .catch(err => console.log("Error updating user to db ", err));
                    });
                });
            }
        });
});

app.get('/register/edit/:id', (req, res) => {
    Register.findOne({_id: req.params.id})
    .then(user => res.render('register/edit', { user:user }))
});

app.put('/register/edit/:id', (req, res) => {
    console.log(req.body);
    Register.findOne({_id: req.params.id})
    .then(user => {
        user.fname = req.body.firstName;
        user.lname = req.body.lastName; 
        user.email = req.body.email;
        user.password = req.body.password; 
         
        user.save()
        })
        .then(user => {
            res.render("register/view", {user:user});
        }).catch(err => console.log("errror happend on save ", err, user)); 
});

app.delete('/register/edit/:id', (req, res) => {
    Register.findOneAndDelete({
         _id: req.params.id 
        })
        .then(() => {
            req.flash('success_msg', 'User removed')
            res.redirect('register/view')
        })
});

app.listen(8000, () => console.log("listening at http://localhost:8000"));