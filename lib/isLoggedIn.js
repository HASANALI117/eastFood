module.exports = function(req, res, next) {
    if (!req.user){
        res.redirect('/auth/signin')
    } else {
        next()
    }
}