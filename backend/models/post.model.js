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
