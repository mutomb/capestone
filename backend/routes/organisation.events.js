const router = require('express').Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer= require('multer');
const mongoose= require('mongoose');

let Event = require('../models/event.model');
router.use(cors())
  
router.post('/', (req, res) => {
    console.log(req.body.owner)
    Event.find({
        owner:req.body.owner
    })
        .then(events => {
            if (events) {
                res.json(events)
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
    Event.find({
        owner:req.body.owner
    })
        .then(events => {
            if (events) {
                res.json(events)
            } else {
                console.log('event does not exist')
                res.send('event does not exist')
            }
        })
        .catch(err => {
            res.send('Error: name' + err)
        })
  })

router.post('/add', (req, res) => {
    const eventData = {
        owner: req.body.owner,
        title: req.body.title,
        when: req.body.when,
        where: req.body.where,
        what: req.body.what,
        tags: req.body.title +" "+req.body.what+" "+req.body.where+" "+req.body.when+" "+req.body.name
    }
    Event.findOne({
        owner: req.body.owner,
        title: req.body.title
    })
        .then(event => {
            if (!event) {
                Event.create(eventData)
                    .then(event => {
                        console.log(event.title + 'created');
                        res.json({ status: event.title + 'created' })
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
    Event.find({
        tags: regex
    })
        .then(events => {
            if (events) {
                if(events.length<1){
                    res.json({
                        found:false
                    })
                }
                else{ 
                    const payload = {
                        _ids: [...events.map(event=>event._id)],
                        owners: [...events.map(event=>event.owner)],
                        titles: [...events.map(event=>event.title)],
                        whats: [...events.map(event=>event.what)],
                        wheres: [...events.map(event=>event.where)],
                        whens: [...events.map(event=>event.when)],
                        imageDatas: [...events.map(event=>event.imageData)],
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