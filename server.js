const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");

const passport = require("./lib/passportConfig");

//import our routes
const indexRoute = require("./routes/index");
const authRoute = require("./routes/auth");
const menuRoute = require("./routes/menu");
const userRoute = require("./routes/profile");
const cartRoute = require("./routes/cart")

//install our app
const app = express();

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
app.use("/", cartRoute);


//mount our server

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

//connect to dataBase

mongoose
  .connect("mongodb://127.0.0.1:27017/eastFood", {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose Is Connected to MongoDB");
  })
  .catch((err) => {
    console.log("An error occured", err);
  });
