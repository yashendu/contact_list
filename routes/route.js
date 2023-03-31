const express = require('express');
const contacts = require('../models/contacts');
const router = express.Router();


//Import contact schema from Model file

const Contact = require('../models/contacts');


//Method to read contacts

router.get('/contacts',(req, res, next)=>{

    //res.send('Retrieving the contact list...');
    contacts.find(function(err, contacts){
        res.json(contacts);
    })
});

//Method to add contacts

router.post('/contacts',(req, res, next)=>{

    //res.send('Retrieving the contact list...');
    let newContact = new Contact({

        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{

        if(err)
        {
            res.json({msg: ' Failed to add contact'});
        }
        else
        {
            res.json({msg: ' contact added successfully'});
        }

    });

    
});

//Method to delete contacts

router.delete('/contacts/:id',(req, res, next)=>{

    //res.send('Retrieving the contact list...');
    Contact.remove({__id:req.params.id, function(err, result){
        if(err)
        {
            res.json(err);
        }

        else
        {
            res.json(result);
        }
    }
    });
});

module.exports = router;