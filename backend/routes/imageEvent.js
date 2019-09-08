/*
 * Created by: Jeanluc Mutomb
 * Restful API that handles uploading and finding images associated with an Organisation's Event
 * */

var express = require('express');
var Event = require('../models/event.model');
var EventRouter = express.Router();
const multer = require('multer');
/**
 * stores Event's image to folder: backend/uploads/events
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/events');
    },
    filename: function (req, file, cb) {
        cb(null,  req.body.imageName+".jpeg");
    }
});
/**
 * only allows jpeg type image
 */
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
/**
 * set allowed images size limit to ~50mb
 */
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

/* 
* End point that recieves an imcoming image for upload
*  Updates an event if image associated with that event already exists
* owner is the email address of the compony; used as unique identify together with event title
*/
EventRouter.route("/add")
    .post(upload.single('imageData'), (req, res, next) => {

        Event.findOne({
            owner: req.body.owner,
            title: req.body.title,
        })
            .then(event=>{
                if(event){
                    
                    event.imageName=req.body.imageName,
                    event.imageData=req.file.path                            
                    event.save()
                        .then((event) => {
                            res.status(200).json({
                                success: true,
                                imageData: event.imageData
                            });
                        })
                        .catch(err=>res.send('Error1:  '+err));
                }
                else{
                    err=>res.send('Error: '+err)
                }
            })
            .catch(err=>{
                console.log('error" '+err)
            })
    });

module.exports = EventRouter;