const mongoose = require('mongoose')

const createdUserschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:
    {
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },
    door:
    {
        type:Number,
    },
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    pin:{
        type:Number,
        maxlength:6,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})


const createdUsermodel = mongoose.model("Userformdetails" ,createdUserschema)


module.exports = createdUsermodel