// import passport from 'passport'
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// import users from '../server/testData/users.json' 
const users = require('../server/testData/testUsers.json')
const _ = require('lodash')

var username = 'rob'; 

// console.log(users, username);
passport.use(new LocalStrategy((username, password, done) => {
   
     user = _.filter(users, u => u.name === username );

    if(!user || user.password != password){
        done(null, false);
        return;
    }
    done(null, user); 
})); 

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});