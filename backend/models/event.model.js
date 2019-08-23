const mongoose = require('mongoose');
const schema= mongoose.Schema;
const eventSchema= new schema({
    username:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    where:{
        type:String
    },
    when:{
        type: String
    },
    what:{
        type: Array
    },
    picture:{
        type: Object
    }
},
    {timestamps:{
        timeStamp: true,
    }}
); 

module.exports=Event=mongoose.model('event',eventSchema);
