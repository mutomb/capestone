/**
 * created by: Jeanluc Mutomb
 * Restful API handling uplaods/update of Events data to the database that organisation adds
 */

const router = require('express').Router();
const cors = require('cors');

let Event = require('../models/event.model');
router.use(cors())
 /**
  * finds all the Events in the database that were uploaded by given organisation
  * used when logged in organisation requests data
  * owner is the email address; which is unique
  *  */ 
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
 /**
  * finds all the Posts in the database that were uploaded by given organisation
  * using the get request
  * owner is the email address; which is unique
  *  */ 
router.get("/", (req, res)=> {
    Event.find({
        owner:req.body.owner
    })
        .then(events => {
            if (events) {
                res.json(events)
            } else {
                res.send('event does not exist')
            }
        })
        .catch(err => {
            res.send('Error: name' + err)
        })
  })
 /**
  * adds Event data to the database 
  * 
  *  */ 
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

/**
 * finds Events when visitor make a search request
 * regular expression for matching with the tags
 */
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