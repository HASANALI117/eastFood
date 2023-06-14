const bcrypt = require("bcrypt");
const User = require("../models/User");

const passport = require("../lib/passportConfig");

exports.auth_signup_get = (req, res) => {
  res.render("auth/signup");
};

exports.auth_signin_get = (req, res) => {
  res.render("auth/signin");
};

exports.auth_signup_post = async (req, res) => {
  try {
    // console.log(req.body);
    const user = new User(req.body);

    const hash = bcrypt.hashSync(req.body.password, 10);
    // console.log(hash);

    user.password = hash;

    await user.save();

    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

exports.auth_signin_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/signin",
});

exports.auth_logout_get = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next();
    }
    res.redirect("/");
  });
};

exports.auth_forgotpassword_get = (req, res) => {
  try {
    res.render('auth/forgotPassword')
  }
  catch (err) {
    console.log(err)
    console.log('Error Loading Forgot Password Page')
  }
}

function checkPassword(password,confirmPassword) {
if (password == confirmPassword){
  return true;
}
else{
  return false;
}
}
exports.auth_forgotpassword_post = async (req, res) => {
  try {

    console.log(req.body.confirmpassword)
    password = req.body.password;
    confirmPassword = req.body.confirmpassword;
    const check = checkPassword(password,confirmPassword)
    if(check==true){
      const hash = bcrypt.hashSync(confirmPassword, 10);

    console.log(hash)

    await User.findOneAndUpdate({emailAddress: req.body.emailAddress, password: hash})
    res.redirect('/auth/signin')
    }
    else 
    {
      console.log('Passwords not matched')
    }
  }
  catch (err) {
    console.log(err)
    console.log('Error Posting Data')
  }
}

// exports.auth_forgotpassword_get = async(req,res)=>{
//   try{
//   client=await User.find({emailAddress: req.body});
//   if (!client)
//   return res
//   .status(400)
//   .json({massage:"wrong password!!! "})
//   const generatedToken =crypto.randomBytes(32);
//   const convertTokenToHexString=generatedToken.toString("hex");
//   if (!generatedToken){
//       return res.status(500).json({
//           massage:"An error ,please try again later",
//           status: "error"
//       })
//       client.resetToken=convertTokenToHexString;
//   }
// } catch(error){
//   console.log('errorr')
// }}

