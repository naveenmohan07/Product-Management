const mongoose = require('mongoose')

const createUserschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true
    }
})


const createUsermodel = mongoose.model("newUser" ,createUserschema)


module.exports = createUsermodel