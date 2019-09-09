/*
 * Created by: Jeanluc Mutomb
 * JSON model representing how an subcribed organisation Account is stored in mongodb 
 * */


const mongoose= require('mongoose');
const schema= mongoose.Schema;
const organisationSchema= new schema({
    email: { 
        type: String, 
        required: true, 
        trim: true },
    password:{
        type: String,
        required: true,
        trim: true,   
    },
    username:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
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

    phonenumber: { type: String },

    socialissues:{
        type: Array,
    },
    latitude:{
        type: String,
        required:false
    },
    longitude:{
        type: String,
        required: false
    },    
},
    {timestamps:{
        timeStamp: true,
    }}
); 

module.exports=Organisation=mongoose.model('organisations',organisationSchema);
