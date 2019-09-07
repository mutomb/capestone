const router = require('express').Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer= require('multer');
const mongoose= require('mongoose');

let Post = require('../models/post.model');
router.use(cors())

router.post('/', (req, res) => {
    Post.find({
        owner:req.body.owner
    })
        .then(posts => {
            if (posts) {
                res.json(posts)
            } else {
                console.log('event does not exist')
                res.send('event does not exist')
            }
        })
        .catch(err => {
            res.send('Error: name' + err)
        })
})

router.get("/", (req, res)=> {
  Post.find({

  })
      .then(posts => {
          if (posts) {
              res.json(posts)
          } else {
              console.log('event does not exist')
              res.send('event does not exist')
          }
      })
      .catch(err => {
          res.send('Error: name' + err)
      })
});

router.post("/getPost", (req, res)=> {
  var name = req.body.postName;
  res.json("name of post is ");
});


router.post('/add', (req, res) => {
    const postData = {
        owner: req.body.owner,
        title: req.body.title,
        what: req.body.what,
        tags: req.body.title +" "+req.body.what+" "+req.body.name
    }
    Post.findOne({
        owner: req.body.owner,
        title: req.body.title
    })
        .then(post => {
            if (!post) {
                Post.create(postData)
                    .then(post => {
                        console.log(post.title + 'created');
                        res.json({ status: post.title + 'created' })
                    })
                    .catch(err => {
                        res.send('Error:' + err)
                    })
            } else {
                console.log('Event already exits');
                res.json({ error: 'Event already exists' })
            }

        })
        .catch(err => {
            res.send('error: ' + err)
        })
})



router.post('/tags', (req, res) => {
    const regex = new RegExp(escapeRegex(req.body.keyword), 'gi');
    Post.find({
        tags: regex
    })
        .then(posts => {
            if (posts) {
                if(posts.length<1){
                    res.json({
                        found:false
                    })
                }
                else{ 
                    const payload = {
                        _ids: [...posts.map(post=>post._id)],
                        owners: [...posts.map(post=>post.owner)],
                        titles: [...posts.map(post=>post.title)],
                        whats: [...posts.map(post=>post.what)],
                        imageDatas: [...posts.map(post=>post.imageData)],
                        }
                        res.json({
                            payload:payload,
                            found:true
                        })    
                }
                
            } else {
                res.json({found:false })
            }
        })
        .catch(err => {
            console.log(err)
            res.send('Error' + err);
        })

})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


module.exports = router;
