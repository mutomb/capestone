const mongoose = require('mongoose');
const schema= mongoose.Schema;

const OrganisationSchema= new schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String
    },
    logo:{
        type: String
    },
    contactInfo:{
        type: String
    },
    event:{
        type: String
    },
    post:{
        type: String
    },
    tags:{
        type: String
    },
    status:{
        type: String
    },
});

module.exports=Organistion=mongoose.model('organisation',OrganisationSchema);