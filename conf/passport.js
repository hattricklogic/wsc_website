import LocalStrategy from'passport-local'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
LocalStrategy.Strategy

const User = mongoose.model('register')

export default function(passport) {
    passport.use(new LocalStrategy({usernameField: 'email'}, 
    (email, password, done) => {
        User.findOne({email : email })
        .then(user => {
            if (!user){
                return done(null, false, 
                    {message : 'No Account Found with that Email and Password!'})
            }
            bcrypt.compare(password, user.password, (error, isMatch) =>{
                if (error) throw error; 
                if(isMatch){
                    return done(null, user)
                } else {
                    return done(null, false, {
                        message : 'No Account Found with that Email and Password!'})
                }
            })
        })
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