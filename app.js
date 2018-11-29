import express from 'express'
import bodyparser from 'body-parser'
import register from './webServer/api/register'
import login from './webServer/api/login'
import customerProfile from './webServer/api/customer'

const app = express()

app.set("views", "./views");
app.set("view engine", "jade");

app.use(express.static("./public"));
app.use(express.static("./node_modules/jquery/dist"));
app.use(bodyparser.urlencoded({extended : true }));
app.use(bodyparser.json());
app.use(register);
app.use(login);
app.use(customerProfile);


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

app.get('/cart', (req, res) => {
    res.render("cart", {title:"Shopping Cart"});
});


app.listen(8000, () => console.log("listening at http://localhost:8000"));