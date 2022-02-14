const express = require('express');
const fetchuser = require('../Middleware/fetchuser');
const Notes = require('../models/Notes')
const router = express.Router();
const {body, validationResult}   = require('express-validator');



// ROUTE- 1 -> Get all the notes of the logged in User using GET: "api/notes/fetchallnotes"


router.get('/fetchallnotes', fetchuser, async (req, res) => {
   
  const notes = await Notes.find({user: req.user.id});
  res.json(notes)
  })

  // ROUTE- 2 -> Add  the notes of the logged in User using POST: "api/notes/addnotes"


router.post('/addnotes', fetchuser,
[  body('title' ,'Enter a valid Title').isLength({ min: 3 }), body('description' ,'Enter a valid description').isLength({ min: 5 }) ],

async (req, res) => {
   
  // we will validate the input so that notes added must be valid and if error occurs return a bad request 


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.
  



 
  })

module.exports = router;