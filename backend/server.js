/**
 * created by: Jeanluc Mutomb
 * Point of entry to the backend
 */

const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var path = require('path');
/**
 * package enable use fo .env file to store global variable such as hostname URI etc..
 */
require('dotenv').config();

const app= express();
const port= process.env.PORT||5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
/**
 * publicly accessible files
 * profile: store profile pictures
 * events: store event pictures
 * posts:store posts pictures
 * socialissues: store homepage pictures
 * logos: store other logos
 */
app.use('/uploads/profile', express.static('uploads/profile'));
app.use('/uploads/events', express.static('uploads/events'));
app.use('/uploads/posts', express.static('uploads/posts'));
app.use('/uploads/socialissues', express.static('uploads/socialissues'));
app.use('/uploads/logos', express.static('uploads/logos'));
/**
 * parsing bandwidth set to  maximum of 50mb
 */
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
/**
 * connect to database
 */
const uri= process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("db connected successfully");
});
/**
 * all API endpoints/routes used
 */
const organisationRouter= require('./routes/organisations');
app.use('/organisation',organisationRouter);

const eventRouter= require('./routes/organisation.events');
app.use('/eventDetails',eventRouter);

const postRouter= require('./routes/organisation.posts');
app.use('/postDetails',postRouter);

const ImageRouter= require('./routes/image')
app.use('/image', ImageRouter);

const EventImageRouter= require('./routes/imageEvent')
app.use('/eventimage', EventImageRouter);

const PostImageRouter= require('./routes/imagePost')
app.use('/postimage', PostImageRouter);

app.listen(port, ()=>{  
    console.log(`server running on port ${port}`);
});