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
        phonenumber: req.body.phonenumber
    }
    Organisation.findOne({
        email: req.body.email
    })
        .then(organisation => {
            if (!organisation) {
                Organisation.create(organisationData)
                    .then(organisation => {
                        console.log(organisation.email + 'has registered');
                        res.json({ status: organisation.email + 'has Registered' })
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
                res.json({ error: 'User already exists' })
            }

        })
        .catch(err => {
            res.send('error: my name is ' + err)
        })
})

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
                        phonenumber: organisation.phonenumber
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token);
                } else {
                    console.log('incorrect password')
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
                organisation.phonenumber=req.body.phonenumber
                organisation.save()
                    .then((org)=>res.send(org))
                    .catch(err=>res.send('Error: '+err));
            }
        })
        .catch(err=>res.send('error: '+err));
});


/*
const upload= multer({dest: 'uploads/'});
router.post('/profilePic/add',upload.single('profileImage'),(req,res,next)=>{
    console.log(req.file);
    res.send('works')
    const profilePicData={
        //_id: new mongoose.Types.ObjectId(),
        owner: req.body.owner,
        fileUrl: req.body.fileUrl
    };
    ProfilePic.create(profilePicData)
        .then(image => {
            console.log(image.fileUrl + 'saved');
            res.json({ status: image.fileUrl+ 'saved' })
        })
        .catch(err => {
            res.send('Error:' + err)
        })
})
*/

/*
router.get('/profilePic',(req,res,next)=>{
    ProfilePic.findOne({
        owner: req.owner
    })
    .then(image=>{
        return{
            owner:image.owner,
            fileUrl:image.fileUrl
        }
    })

})

*/

/*
router.route('/').get((req,res)=>{
    Organisation.find()
        .then(organisation => res.json(organisation))
        .catch(err=>res.status(400).json('Error: '+err));
});
*/
//router.route('/login/',obje).post(req)

/*
router.route('/add').post((req,res)=>{
    const username = req.body.username; 
    const password = req.body.password;
    const description =req.body.description;
    const events = req.body.events; 
    const posts = req.body.posts;
    const newOrganisation= new Organisation({username,password,description,events,posts});
    newOrganisation.save()
        .then(()=> res.json('organisation added'))
        .catch(err=>res.status(400).json('Error: '+err));
});
*/
/*
router.route('/:id').get((req,res)=>{
    Organisation.findById(req.params.id)
        .then(org=> res.json(org))
        .catch(err=>res.status(400).json('Error: '+err));   
});
*/

/*get organisation based on organisation */
/*
router.route('/email/:id').post((req,res)=>{
    console.log("passed here");
    Organisation.findOne({email:req.params.id})
        .then(org=> res.json(org))
        .catch(err=>res.status(400).json('Error: '+err));   
});
*/

/*
router.route('/:id').delete((req,res)=>{
    Organisation.findByIdAndDelete(req.params.id)
        .then(org=> res.json('organsation delete.'))
        .catch(err=>res.status(400).json('Error: '+err));   
});
*/

module.exports = router;