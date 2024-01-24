const mongoose = require("mongoose");

const mongodburl = process.env.MONGODB_URL;

mongoose.connect(mongodburl,{useNewUrlParser: true,useUnifiedTopology: true,});

mongoose.connection.on('error',(error)=>{
    console.log(error);
})
mongoose.connection.on('connected',()=>{
    console.log("MongoDb connected!!!");
})