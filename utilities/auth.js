



export default {
    ensureAuthenticiated: function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'You must be logged in!');
        res.redirect('/login')
    }
}