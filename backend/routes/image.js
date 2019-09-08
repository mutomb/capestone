/*
 * Created by: Jeanluc Mutomb
 * API end that handles the uploading and deleting profile an Organisation's Profile picture
 * */


var express = require('express');
var Image = require('../models/image');
var ImageRouter = express.Router();
const multer = require('multer');
/**
 * Storing profile pictures to folder: backend/uploads/profile
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/profile');
    },
    filename: function (req, file, cb) {
        console.log(req.body.imageName)
        cb(null,  req.body.imageName+".jpeg");
    }
});
/**
 * Only allows jpeg format image
 */
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

/**
 * set maximum image size allowed to ~50MB
 */
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

/* 
* API end that recieves an uploaded image for storing
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
    
/**
 * API end that accepts requests for profile picture as a function of the email
 */
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
/**
 * end point that deletes profile picture as function of the email
 */
  
    ImageRouter.route('/delete/:email').delete((req,res)=>{
        Image.findOneAndDelete({
           owner:req.params.email
        })
            .then(data=> {
                res.json({success: true })
            })
            .catch(err=>{
                console.log(err)
            });   
    });


module.exports = ImageRouter;