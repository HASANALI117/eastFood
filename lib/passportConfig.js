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

// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:4000/auth/google/eastfood",
//     userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

module.exports = passport