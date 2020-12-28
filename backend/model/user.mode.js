const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    username:{
        type:String,
        minlength:3,
        maxlength:10
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    lastlogin:{
        type:Date
    }
})

const usermodel =mongoose.model("newuser",userschema)

module.exports = usermodel