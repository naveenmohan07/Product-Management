const createUser = require('../model/createUser.model')
const createdUserdetail =require('../model/createdUserdetail.model')
const mail = require('../mail/usermail')


exports.adduser=(req,res,next)=>{
    console.log("In asdd ") 
    const createdUser = new createUser({
        username:req.body.username,
        email:req.body.email
    })
    createdUser.save().then((response)=>{
        console.log(response)
        mail.sendmail(response)
    })
        res.status('201').json({
            message:'Successfully Created new User',
            user:createUser
        })
}


exports.createdUserdetail=(req,res,next)=>{
    var s=new Date()
    const userdetail=new createdUserdetail({
        username:req.body.username,
        phone:req.body.phone,
        email:req.body.mail,
        door:req.body.door,
        street:req.body.street,
        city:req.body.city,
        district:req.body.district,
        pin:req.body.pin,
        product:req.body.product,
        timestamp:s.toLocaleDateString()
    })
    userdetail.save()
        res.status('201').json({
            message:'User Detail Successfully added',
            userdetail:userdetail
        })
}

exports.viewuserdetails=(req,res,next)=>{
    createdUserdetail.find().then((data)=>{
        res.status('201').json({
            message:'Details Retrived',
            userdetails:data
        })
    }).catch((err)=>{
        res.status('401').json({
            message:'Error Occured',
            userdetails:err
        })
    })
}