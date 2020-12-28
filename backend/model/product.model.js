const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productname:{
        type:String,
        require:true
    },
    productmodel:{
        type:String,
        required:true
    },
    productqty:{
        type:Number,
        required:true
    },
    productdate:{
        type:Date,
        required:true
    },
    productdesc:{
        type:String,
        required:true
    },
    productamt:{
        type:Number,
        required:true
    },
})

const productmodel = mongoose.model("ProductSchema",productSchema)

module.exports = productmodel 