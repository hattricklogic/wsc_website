import { StringUtil } from '../utilities/string-util';
import Register from '../../database/models/registrationModel';
import db from '../../database/config/db'

// User Register
export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }

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

function validateIndex(body) {
    let errors = '';
    if (StringUtil.isEmpty(body.username)) {
        errors += 'Username is required. ';
    }
    if (StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. ';
    }
    if (StringUtil.isEmpty(body.first)) {
        errors += 'First name is required. ';
    }
    if (StringUtil.isEmpty(body.last)) {
        errors += 'Last name is required. ';
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}