const mongoose = require('mongoose');
const schema= mongoose.Schema;
const organisationSchema= new schema({
    username:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    password:{
        type: String,
        required: true   
    },
    description:{        
        type: String,
    },
    events:{
        type: String,
    },
    posts:{
        type: String,
    },
},
    {timestamps:{
        timeStamp: true,
    }}
); 

module.exports=Friend=mongoose.model('organisation',organisationSchema);
