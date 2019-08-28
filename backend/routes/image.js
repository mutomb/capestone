var express = require('express');
var Image = require('../models/image');
var ImageRouter = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/profile');
    },
    filename: function (req, file, cb) {
        console.log(req.body.imageName)
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
ImageRouter.route("/uploadmulter")
    .post(upload.single('imageData'), (req, res, next) => {

        Image.findOne({
            owner: req.body.owner,
        })
            .then(image=>{
                if(!image){
                    const newImage = new Image({
                        owner: req.body.owner,
                        imageName: req.body.imageName,
                        imageData: req.file.path
                    });
                    newImage.save()
                        .then((image) => {
                            res.status(200).json({
                                success: true,
                                imageData: image.imageData
                            });
                        })
                        .catch((err) => next(err));         
                }else{
                    image.imageName=req.body.imageName,
                    image.imageData=req.file.path
                    image.save()
                        .then((image) => {
                            res.status(200).json({
                                success: true,
                                imageData: image.imageData
                            });
                        })
                        .catch(err=>res.send('Error: '+err));
                }
            })
            .catch(err=>{
                console.log('error" '+err)
            })
    });

ImageRouter.post('/:email', (req, res, next) => {
        const owner= req.params.email;
        Image.findOne({
            owner: owner,
        })
            .then(image=>{
                if(image){
                    res.json({
                        success: true,
                        imageData: image.imageData
                    })
         
                }else{
                    res.json({
                        success: false,
                    })
         
                }
            })
            .catch(err=>{
                console.log('error" '+err)
            })
    });

/*
    upload image in base64 format, thereby,
    directly storing it in mongodb datanase
    along with images uploaded using firebase
    storage
*/    

module.exports = ImageRouter;