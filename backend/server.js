const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var path = require('path');

require('dotenv').config();

const app= express();
const port= process.env.PORT||5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
/*app.use(
    bodyParser.urlencoded({
        extended: false
    })
)*/
app.use('/uploads/profile', express.static('uploads/profile'));
app.use('/uploads/events', express.static('uploads/events'));
app.use('/uploads/posts', express.static('uploads/posts'));
app.use('/uploads/socialissues', express.static('uploads/socialissues'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const uri= process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("db connected successfully");
});

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