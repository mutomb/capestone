const router = require('express').Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrpyt = require('bcrypt-nodejs');

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
                
                //organisationData.password=bcrpyt.hashSync(organisationData.password);
                
                const username= req.body.username;
                const password= bcrpyt.hashSync(organisationData.password);
                const name= req.body.name;
                const description= req.body.description;
                const zipcode= req.body.zipcode;
                const street_address= req.body.street_address;
                const city= req.body.city;
                const province= req.body.province;
                const country= req.body.country;
                const email= req.body.email;
                const phonenumber= req.body.phonenumber;

  
               // const newOrganisation= new Organisation({
                   // username,password,name,description,zipcode,street_address,city,province,country,email,phonenumber
              //  }).save()
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
/*
router.route('/update/:id').post((req,res)=>{
    Organisation.findById(req.paramas.id)
        .then(org=>{
            const username = req.body.username; 
            const password = req.body.password;
            const description =req.body.description;
            const events = req.body.events; 
            const posts = req.body.posts;

            org.save()
                .then(()=> res.json('Exercise saved'))
                .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=>res.status(400).json('Error'+err));
});
*/

module.exports = router;