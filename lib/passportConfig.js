const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy

const User = require('../models/User')

// Save The ID Into The Session
passport.serializeUser(function(user, done){
    done(null, user.id)
})

passport.deserializeUser(async function(id, done){
    try{
        const user = await User.findById(id)
        done(null, user)
    }catch (error){
        done(error)
    }

})

passport.use(new LocalStrategy({
    usernameField: 'emailAddress',
    passwordField: 'password'
},
    async function (emailAddress, password, done){
    try{
       const user = await User.findOne({emailAddress})
       if (!user) {return done(null, false)}
       if (!user.verifyPassword(password)) {return done(null,false)}
       return done(null, user)
    } catch (error ) {
        return done(error)
    }
}
))

module.exports = passport