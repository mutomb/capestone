const router = require('express').Router();
let Organisation= require('../models/organisation.model');

router.route('/').get((req,res)=>{
    Organisation.find()
        .then(organisation => res.json(organisation))
        .catch(err=>res.status(400).json('Error: '+err));
});

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

router.route('/delete').post((req,res)=>{
    
})

module.exports=router;