const http = require('http')

const app = require('./express/app')

const mongoose = require('mongoose')

const server = http.createServer(app)

const url = process.env.PORT || 3000

app.set('url',url)
mongoose.connect("mongodb+srv://Naveen_Mohan:N98tKtZjz55dDf41@product-management-cluster-mbp6t.mongodb.net/Challenge?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log("Connected To Database Successfully..!!!")
}).catch((err)=>{
    console.log("Error Occured while connecting to Database",err)
})


server.listen(url,()=>{
    console.log("Server running on port", url)
})