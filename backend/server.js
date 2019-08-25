const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app= express();
const port= process.env.PORT||5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const uri= process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("db connected successfully");
});

const organisationRouter= require('./routes/organisations');
app.use('/organisation',organisationRouter);


app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});