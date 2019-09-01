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
        what: req.body.what
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


module.exports = router;
