const mongoose = require('mongoose');
const schema= mongoose.Schema;
const postSchema= new schema({
    subject:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    picture:{
        type: Object
    }
},
    {timestamps:{
        timeStamp: true,
    }}
); 

module.exports=Post=mongoose.model('post',eventSchema);
