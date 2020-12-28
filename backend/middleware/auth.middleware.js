const jwt = require('jsonwebtoken')
module.exports =(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
        jwt.verify(token , "This_is_my_long_secret");
        next();
   }
   catch(err){
    res.status('401').json({
        message:'Auth failed'
    })
   }
}
