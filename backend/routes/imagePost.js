/*
 * Created by: Jeanluc Mutomb
 * Restful API end point that manages uploads of image associated with a Post by Organisation
 * */

var express = require('express');
var Post = require('../models/post.model');
var PostRouter = express.Router();
const multer = require('multer');

/**
 * stores image in backend/uploads/posts
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/posts');
    },
    filename: function (req, file, cb) {
        cb(null,  req.body.imageName+".jpeg");
    }
});
/**
 * allows only jped image type
 */
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        // rejects storing a file
        cb(null, false);
    }
}
/**
 * image limit size ~50mb
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
*  Updates the post if image associated with that Post already exists
* owner is the email address of the company; used as unique identify together with Post title
*/
PostRouter.route("/add")
    .post(upload.single('imageData'), (req, res, next) => {

        Post.findOne({
            owner: req.body.owner,
            title: req.body.title,
        })
            .then(post=>{
                if(post){
                    
                    post.imageName=req.body.imageName,
                    post.imageData=req.file.path                            
                    post.save()
                        .then((post) => {
                            res.status(200).json({
                                success: true,
                                imageData: post.imageData
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


module.exports = PostRouter;