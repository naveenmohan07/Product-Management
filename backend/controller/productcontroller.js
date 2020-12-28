const productmodel = require('../model/product.model')

exports.viewproduct=(req, res, next )=>{
    productmodel.find().then((data)=>{
        res.status('200').json({
            message:'Product Received',
            products:data
        })
    }).catch((err)=>{
        res.status('401').json({
            message:'Unable to fetch data'
        })
    })
    
}
exports.addproduct=(req , res, next)=>{
    const product = new productmodel({
        productname:req.body.productname,
        productmodel:req.body.productmodel,
        productqty:req.body.productqty,
        productdate:req.body.productdate,
        productdesc:req.body.productdesc,
        productamt:req.body.productamt
    })
    product.save();
    res.status('201').json({
        message:'Product Added Successfully',
        product:product
    })
}

