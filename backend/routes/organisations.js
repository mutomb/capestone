const express = require('express');
const router =express.Router();

//organisation model
const Organisation= require('../models/Organisation');

//@route GET /organisation
router.get('/',(req,res)=>{
    Organisation.find()
        .sort({date:-1})
        .then(org => res.json(org));
});

//@route POST /organisation
router.post('/',(req,res)=>{
    const newOrganisation= new Organisation({
        username: req.body.name,
        password: req.body.password
    });
    newOrganisation.save()
        .then(org=>res.json(org));
});

//@route DELETE /organisation
router.delete('/:id',(req,res)=>{
    Friend.findById(req.params.id)
    .then(friend => item.remove().then(()=>res.json({success:true}))
    .catch(err=> res.status(404).json({success:false}))
    )
});

module.exports=router;