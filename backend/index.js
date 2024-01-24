const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/db');
//Initialize the app
const app = express();

const apiRoutes = require('./routes/api')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRoutes);
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is succesfully running on port:${port}`)
})