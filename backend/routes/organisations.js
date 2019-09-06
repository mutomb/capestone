const router = require('express').Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
//const bcrpyt = require('bcrypt-nodejs');
const mongoose= require('mongoose');

let Organisation = require('../models/organisation.model');
router.use(cors())
process.env.SECRET_KEY = 'secret';

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
                    /* //Asynchronous hashing not working?
                bcrpyt.hash(req.body.password, (err, hash)=> {
                    console.log(hash)
                    organisationData.password = hash;
                    Organisation.create(organisationData)
                        .then(organisation => {
                            console.log(organisation.email + 'has registered'); //
                            res.json({ status: organisation.email + 'has Registered' })
                        })
                        .catch(err => {
                            res.send('Error:' + err)
                        })

                })*/
            } else {
                console.log('User already exists'); 
                res.json({ success:false })
            }

        })
        .catch(err => {
            res.send('error: my name is ' + err)
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


router.post('/login', (req, res) => {
    Organisation.findOne({
        email: req.body.email
    })
        .then(organisation => {
            if (organisation) {
                //if (bcrpyt.compareSync(req.body.password, organisation.password)) {
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
                    .then((org)=>res.send(org))
                    .catch(err=>res.send('Error: '+err));
            }
        })
        .catch(err=>res.send('error: '+err));
});




router.route('/delete/:email').delete((req,res)=>{
    Organisation.findOneAndDelete({
        email: req.params.email
    })
        .then(org=> {
            res.json({
            success: true
        })})
        .catch(err=>{
            res.json({
            success:false
        })});   
});


module.exports = router;