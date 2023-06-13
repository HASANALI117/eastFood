const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const changepassSchema=mongoose.Schema({
    password: {
        type: String,
        required: true
      },
    newPassword:{
        type:String,
        required:true
    }
    })