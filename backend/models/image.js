const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* 
    Image Schema for storing images in the 
    mongodb database
*/
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