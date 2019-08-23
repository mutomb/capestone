const router = require('express').Router();
let Organisation= require('../models/organisation.model');
/*
router.route('/').get((req,res)=>{
    Organisation.find()
        .then(organisation => res.json(organisation))
        .catch(err=>res.status(400).json('Error: '+err));
});
*/
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

/*get organisation based on username */
router.route('/username/:id').get((req,res)=>{
    console.log("passed here");
    Organisation.findOne({username:req.params.id})
        .then(org=> res.json(org))
        .catch(err=>res.status(400).json('Error: '+err));   
});
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

module.exports=router;