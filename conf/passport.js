import LocalStrategy from'passport-local'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
LocalStrategy.Strategy

const User = mongoose.model('register')
const Admin= mongoose.model('admin')

export default function(passport) {
    passport.use(new LocalStrategy({usernameField: 'email'}, 
    (email, password, done) => {
        User.findOne({email : email })
        .then(user => {
            if (!user){
                empLookup(user, email, password, done);
            }else {

                auth(user, email, password, done);  
            }
        }).catch(err => console.log("user Error ", err))
    }))
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}

function empLookup(emp, email, password, done){
    Admin.findOne({email : email })
        .then(emp => {
            if (!emp){
            return done(null, false, 
                {message : 'No Account Found with that Email and Password!'})
        }
        auth(emp, email, password, done);
    }).catch(err => console.log("Employee Error ", err))
}

function auth(user, email, password, done){
     
    bcrypt.compare(password, user.password, (error, isMatch) =>{
        if (error) throw error; 
        if(isMatch){
            return done(null, user)
        } else {
            return done(null, false, {
                message : 'No Account Found with that Email and Password!'})
        }
    })
}