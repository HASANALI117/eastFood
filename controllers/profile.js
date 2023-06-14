const bcrypt = require("bcrypt");
const User = require('../models/User')
// const passport = require("../lib/passportConfig");


exports.user_index_get = async (req, res) => {
    try {
      const userId = req.params.id; // Assuming the id parameter is passed in the URL
      const user = await User.findById(userId); // Find the user by id
  
    //   console.log(user);
      res.render('profile/user', { user }); // Pass the user object to the view template
    } catch (error) {
      console.log(error.message);
      res.send('Something went wrong');
    }
  }
exports.user_edit_get = async (req, res) => {
    try {
        const user = await User.findOne(req.user)
        res.render('profile/edit', {user})
        const hash = bcrypt.hashSync(req.body.password );
        const newPassword = req.body.newPassword
        const confirmPassword = req.body.confirmPassword
        if(newPassword === confirmPassword) {
            const pass = req.body.newPassword.toString();
            const hash = bcrypt.hashSync(pass, 10)
            await User.findOneAndUpdate({emailAddress: req.body.emailAddress, password: hash})
            res.redirect('/auth/signin')
        } else {
            res.redirect('/');
        }

    } catch (error) {
        console.log(error.message)
    }
}

exports.user_edit_post = async (req, res) => {
    try {
        // console.log(req.body.id)
        
        await User.findByIdAndUpdate(req.body.id, req.body)
        res.redirect('/')
    } catch (error) {
        console.log(error.message)
    }
}

exports.user_changePass_get=(req,res)=>{
  res.render('user/changePass')
}


exports.user_changePass_post = async (req,res)=>{
  try{
    const newPassword= req.body.newPassword
    const confirmPassword= req.body.confirmPassword
    const currentPassword=req.body.password
    if(newPassword===confirmPassword){
      const passWrd=req.body.newPassword.toString()
      const hash=bcrypt.hashSync(passWrd,10)
      await User.findOneAndUpdate({emailAddress:req.body.emailAddress,password:hash})
      res.redirect('/auth/signin')
    }else{
      res.redirect('/')
    }
  }
  catch(error){
    console.log(error)
    res.send('Passwor Not Updated')
  }
}

