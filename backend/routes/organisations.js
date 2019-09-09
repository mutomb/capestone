/**
 * created by: Jeanluc Mutomb
 * Restful API handling uplaods/update of Organistion data to the database
 */

const router = require('express').Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
let Organisation = require('../models/organisation.model');
router.use(cors())
/**
 * key used to generate global session taken
 */
process.env.SECRET_KEY = 'secret';
 /**
  * finds all the Oragnisations in the database that match a given searched keyword by the visitor
  * regular expression only match organisation name
  *  */ 

router.post('/', (req, res) => {
    const regex = new RegExp(escapeRegex(req.body.keyword), 'gi');
    Organisation.find({
        name: regex
    })
        .then(organisations => {
            if (organisations) {
                if(organisations.length<1){
                    res.json({
                        found:false
                    })
                }
                else{
                    const payload = {
                        _id: [...organisations.map(organisation=>organisation._id)],
                        names: [...organisations.map(organisation=>organisation.name)],
                        descriptions: [...organisations.map(organisation=>organisation.description)],
                        wheres: [...wheres.map(organisation=>organisation.where)],
                        latitudes: [...latitudes.map(organisation=>organisation.latitude)],
                        longitudes: [...longitudes.map(organisation=>organisation.longitude)],
                        emails: [...organisations.map(organisation=>organisation.email)],
                        phonenumbers: [...organisations.map(organisation=>organisation.phonenumber)],
                        socialissues: [...organisations.map(organisation=>organisation.socialissues)]
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

router.get("/", (req, res)=> {
    Organisation.find({
  
    }
    ,{_id:0,username:1,socialissues:1,city:1}
    )
        .then(orga => {
            if (orga) {
                res.json(orga)
            } else {
                console.log('event does not exist')
                res.send('event does not exist')
            }
        })
        .catch(err => {
            res.send('Error: name' + err)
        })
  });
/**
 * Find one organisation by email address
 * used in when associating a post/event detail with an organisation
 */

router.get('/:email', (req, res) => {
    Organisation.findOne({
        email: req.params.email
    })
        .then(organisation => {
            if (organisation) {
                
                const payload = {
                    _id: organisation._id,
                    name: organisation.name,
                    description: organisation.description,
                    zipcode: organisation.zipcode,
                    street_address: organisation.street_address,
                    city: organisation.city,
                    province:organisation.province,
                    country: organisation.country,
                    email: organisation.email,
                    phonenumber: organisation.phonenumber,
                    socialissues: organisation.socialissues
                    }
                    res.json({
                        payload:payload,
                        found:true
                    })              
                
            } else {
                res.json({found:false })
            }
        })
        .catch(err => {
            console.log(err)
            res.send('Error' + err);
        })
})
/**
 *  used to register a new organition
 * recieves registration form data
 */

router.post('/register', (req, res) => {
    const organisationData = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        description: req.body.description,
        zipcode: req.body.zipcode,
        street_address: req.body.street_address,
        city: req.body.city,
        province: req.body.province,
        country: req.body.country,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        socialissues: req.body.socialissues
    }
    Organisation.findOne({
        email: req.body.email
    })
        .then(organisation => {
            if (!organisation) {
                Organisation.create(organisationData)
                    .then(organisation => {
                        console.log(organisation.email + 'has registered');
                        res.json({ success:true })
                    })
                    .catch(err => {
                        res.send('Error:' + err)
                    })
            } else {
                console.log('User already exists'); 
                res.json({ success:false })
            }

        })
        .catch(err => {
            res.send('error: my name is ' + err)
        })
});

 router.get("/:social", (req, res)=> {
    Organisation.find({socialissues:req.params.social}
    ,{_id:0,username:1,socialissues:1,city:1}
    )
        .then(orga => {
            if (orga) { 
                res.json(orga)
            } else {
                console.log('event does not exist')
                res.send('event does not exist')
            }
        })
        .catch(err => {
            res.send('Error: name' + err)
        })
  });

/**
 *  used to login existing organisation
 * recieves registration form data
 */

router.post('/login', (req, res) => {
    Organisation.findOne({
        email: req.body.email
    })
        .then(organisation => {
            if (organisation) {
                if(req.body.password===organisation.password){
                    const payload = {
                        _id: organisation._id,
                        username: organisation.username,
                        password: organisation.password,
                        name: organisation.name,
                        description: organisation.description,
                        zipcode: organisation.zipcode,
                        street_address: organisation.street_address,
                        city: organisation.city,
                        province: organisation.province,
                        country: organisation.country,
                        email: organisation.email,
                        phonenumber: organisation.phonenumber,
                        socialissues: organisation.socialissues
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })

                    res.send(token);
                } else {
                    res.json({ error: 'Incorrect password' })
                }
            } else {
                res.json({ error: 'Organisation does not exist' })
            }
        })
        .catch(err => {
            res.send('Error' + err);
        })

})
/**
 * get organisation profile details after login,
 * Authenticate username and password provided by organisation
 */
router.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    Organisation.findOne({
        _id: decoded._id
    })
        .then(organisation => {
            if (organisation) {
                res.json(organisation)
            } else {
                console.log('organisation does not exist')
                res.send('organisation does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + error)
        })
})
/**
 * end point for updating organisation details
 * used by logged in organisations
 */
router.post('/update',(req, res)=>{
        console.log(req.body)
        Organisation.findOne({
            email: req.body.email,
        })
        .then(organisation=>{
            if(!organisation){res.send('oragnisation not found')}
            else{ 
                organisation.username=req.body.username,
                organisation.password=req.body.password,
                organisation.name=req.body.name,
                organisation.description=req.body.description,
                organisation.zipcode=req.body.zipcode,
                organisation.street_address=req.body.street_address,
                organisation.city=req.body.city,
                organisation.province=req.body.province,
                organisation.country=req.body.country,
                organisation.email=req.body.email,
                organisation.phonenumber=req.body.phonenumber,
                organisation.socialissues=req.body.socialissues
                organisation.save()
                    .then((org)=>res.json({
                        data:org,
                        success:true
                    }))
                    .catch(err=>res.send('Error: '+err));
            }
        })
        .catch(err=>res.send('error: '+err));
});


function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;