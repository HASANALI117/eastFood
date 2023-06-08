const bcrypt = require('bcrypt')
const User = require('../models/User')
const passport = require('../lib/passportConfig')


exports.auth_signup_get = (req, res) => {
    res.render('auth/signup')
}

exports.auth_signin_get = (req, res) => {
    res.render('auth/signin')
}

exports.auth_signup_post = async (req, res) => {
    try {
        console.log(req.body)
        const user = new User(req.body)

        const hash = bcrypt.hashSync(req.body.password, 10)
        console.log(hash)

        user.password = hash

        await user.save()

        res.redirect('/')
    } catch (error) {
        console.log(error.message)
    }
}

exports.auth_signin_post = passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/auth/signin'
})

exports.auth_logout_get = (req, res) => {
    req.logout(function(err){
        if (err) {
            return next()
        }
        res.redirect('/auth/signin')
    })
}