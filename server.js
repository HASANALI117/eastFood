const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const bodyParser = require("body-parser");
// const multer = require("multer");
// const path = require('path');



const passport = require("./lib/passportConfig");

//import our routes
const indexRoute = require("./routes/index");
const authRoute = require("./routes/auth");
const menuRoute = require("./routes/menu");
const userRoute = require("./routes/profile");
const changePassRoute= require("./routes/change");
const cartRoute = require("./routes/cart")
const productRoute = require("./routes/product")

//install our app
const app = express();

app.use(bodyParser.urlencoded(
  { extended:true }
))

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: "This is a secret.",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 86400000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//mount our routes
app.use("/", indexRoute);
app.use("/", authRoute);
app.use("/", menuRoute);
app.use("/", userRoute);
app.use("/",changePassRoute)

app.use("/", cartRoute);
app.use("/", productRoute);

const port=4000
//mount our server

// app.listen(port,()=>{
//   console.log(`the Library open on port${port}`)
// })
app.listen(4000, () => {
  console.log("Server running on port 4000");
});

//connect to dataBase

mongoose.connect("mongodb+srv://mohammedmahfodh:ezBXHNhsp49Cp7Im@cluster0.k4w1ysm.mongodb.net/eastfood", {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose Is Connected to MongoDB");
  })
  .catch((err) => {
    console.log("An error occured", err);
  });
