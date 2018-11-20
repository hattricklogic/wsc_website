import Register from '../../database/config/wscDB';

// User Register
export function index(req, res) {

    const user = new Register({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.first,
        password: req.body.password        
    });
    user.save(error => {
        if (error) {
            // Mongoose Error Code 11000 means validation failure (username taken)
            if (error.code === 11000) {
                return res.status(403).json({ message: 'Username is already taken' });
            }
            return res.status(500).json();
        }
        return res.status(201).json();
    });
     }
 
}
