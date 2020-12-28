const express = require('express')

const bodyParser = require('body-parser')

const userController = require('../controller/usercontroller')

const authController = require('../controller/authcontroller')

// const checkuser = require('../middleware/auth.middleware')

const productController = require('../controller/productcontroller')

// const expressSession = require('express-session');
// const cookieParser = require('cookie-parser'); 


// const payment = require('../payment/pay')

const app = express()

// app.use(expressSession({secret:'somesecrettokenhere'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS,DELETE");
    next();
});


app.post("/signup",authController.signup)
app.post("/signin",authController.signin)


app.post("/adduser",userController.adduser)
app.post("/saveuserdetails",userController.createdUserdetail)

app.get("/viewuserdetails",userController.viewuserdetails)

app.get("/listproduct" ,productController.viewproduct)
app.post("/addproduct",productController.addproduct)
// app.post("/orders")

module.exports = app



