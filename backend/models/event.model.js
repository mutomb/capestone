const mongoose = require('mongoose');
const schema = mongoose.Schema;
const eventSchema = new schema({
    owner: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    title: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    where: {
        type: String,
        required: true,
        minlength: 3
    },
    when: {
        type: String,
        required: true,
        minlength: 3
    },
    what: { 
        type: String,
        required: true,
        unique: false,
        minlength: 3
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
    {
        timestamps: {
            timeStamp: true,
        }
    }
);

module.exports = Event = mongoose.model('events', eventSchema);
