const express=require('express')
const  mongoose=require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const session=require('express-session')

// const passport=require('')

//import our routes

//install our app
const app=express()

const port=4000

app.use(expressLayouts)
app.set('view engine','ejs')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret:'thisIsSecret!',
    saveUninitialized:true,
    resave:false,
    cookie:{maxAge:86400000}
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req,res,next){
    res.locals.currentUser=req.user 
    next()
})

//mount our routes

//mount our server

app.listen(port,()=>{
    console.log(`the menu open on port${port}`)
})


//connect to dataBase

mongoose.connect('mongodb://127.0.0.1:27017/eastFood',
{
    useNewUrlparser:true ,
    useUnifiedTopology:true
}

).then(()=>{
    console.log('Mongoose Is Connected to MongoDB')
}).catch((err)=>{
    console.log('An error occured',err)
})