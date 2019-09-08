
/*
 * Created by: Jeanluc Mutomb
 * JSON model representing how a Post is stored in mongodb 
 * tags property is compared with the visitor's search keyword, to find a Post
 * */

const mongoose = require('mongoose');
const schema= mongoose.Schema;
const postSchema= new schema({
    owner:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },    
    title:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    }, 
    what:{
        type: String,
        required: true,
        unique: false,
    },
    imageName: {
        type: String,
        required: false,
    },
    imageData: {
        type: String,
        required: false,
    },
    tags:{
        type: String,
        required: false,   
    }
},
    {timestamps:{
        timeStamp: true,
    }}
); 

module.exports=Post=mongoose.model('posts',postSchema);
