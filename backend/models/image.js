
/**
 * Created by: Jeanluc Mutomb
 * JSON model representing how an organistaion's profile picture is store in mongodb 
 * */ 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var ImageSchema = new Schema({
    owner: {
        type: String, 
        required: true,
        trim: true
    },
    imageName: {
        type: String,
        required: true
    },
    imageData: {
        type: String,
        required: true
    }
});

var Image = mongoose.model('Image', ImageSchema);

module.exports = Image;