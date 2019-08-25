const mongoose= require('mongoose');
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
        required: true,
        trim: true,   
    },
    name:{
        type:String,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
 
    zipcode: { type: String },
    street_address: { type: String },
    city:{ type: String },
    province: {type: String},
    country:{ type: String },

    email: { type: String },
    phonenumber: { type: String },

},
    {timestamps:{
        timeStamp: true,
    }}
); 

module.exports=Organisation=mongoose.model('organisations',organisationSchema);
