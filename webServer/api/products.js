import express from 'express';
import db from '../../database/config/wscDB';
const router = express.Router(); 

const Products = db.product; 


router.route('/products')
.get((req, res) => {  

    Products.find({}, (error, product) => {
        // the product have images that should be display on the page 
        
    }); 
    

    res.render("catalog/products", {title:"Login Page"})
})