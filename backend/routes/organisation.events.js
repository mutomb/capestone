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

router.post('/add', (req, res) => {
    const eventData = {
        owner: req.body.owner,
        title: req.body.title,
        when: req.body.when,
        where: req.body.where,
        what: req.body.what,
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


module.exports = router;