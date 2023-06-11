module.exports = function(req, res, next) {
    if (!req.user){
        res.redirect('/auth/signin')
        // console.log(req.user)
    } else {
        next()
    }
}