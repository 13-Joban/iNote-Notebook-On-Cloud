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


router.post('/addnote', fetchuser,
[  body('title' ,'Enter a valid Title').isLength({ min: 3 }), body('description' ,'Enter a valid description').isLength({ min: 5 }) ],

async (req, res) => {
   
  // we will validate the input so that notes added must be valid and if error occurs return a bad request 
try {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
// destructuring the input from request 
  const {title, description, tag} = req.body;


  // creating a new note using the format of Notes.js and data is collected from request 
  const newnote = new  Notes({
    title, description, tag, user: req.user.id}
  )
  const savednote = await newnote.save();

  res.json({savednote})
  
} catch (error) {
  res.status(404).send({error: "Internal Server Error"});
}

  



 
  })

  
  // ROUTE- 3 -> Update   an existing  note of the logged in unique  User(to whome note belong means someone else cannot update the note) using PUT: "api/notes/updatenote:id"


router.put('/updatenote:id', fetchuser,

async (req, res) => {
   try{

    // first of all create a new note object and set its value based upon the data provided in the request 

    // destructuring the input from request 
  const {title, description, tag} = req.body;

 let newnote = {};
 if(title){
   newnote.title = title
 }
 if(description){
  newnote.description = description
}
if(tag){
  newnote.tag = tag
}

// Find the note to be updated using id of user
const  noteTOBEUpdated = Notes.findById(req.params.id) // id given in the parameter

// now if there is no note then
if(!noteTOBEUpdated)


} catch (error) {
  res.status(404).send({error: "Internal Server Error"});
}

  



 
  })

module.exports = router;