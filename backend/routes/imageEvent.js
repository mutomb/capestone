var express = require('express');
var Event = require('../models/event.model');
var EventRouter = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/events');
    },
    filename: function (req, file, cb) {
        cb(null,  req.body.imageName+".jpeg");
    }
});

const fileFilter = (req, file, cb) => {
   // if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    if (file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        // rejects storing a file
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

/* 
    stores image in uploads folder
    using multer and creates a reference to the 
    file
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