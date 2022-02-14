const express = require('express');
const fetchuser = require('../Middleware/fetchuser');
const Notes = require('../models/Notes')
const router = express.Router();
const {
  body,
  validationResult
} = require('express-validator');

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwN2FkYTNjMTNlNDAwYzUyZDEzZjEyIn0sImlhdCI6MTY0NDY3MDM3MX0.mUkdrAU05BOl2inPsRoI5dr740-GaUu4tlZql3Ek15o

// ROUTE- 1 -> Get all the notes of the logged in User using GET: "api/notes/fetchallnotes"


router.get('/fetchallnotes', fetchuser, async (req, res) => {

  const notes = await Notes.find({
    user: req.user.id
  });
  res.json(notes)
})

// ROUTE- 2 -> Add  the notes of the logged in User using POST: "api/notes/addnotes"


router.post('/addnote', fetchuser,
  [body('title', 'Enter a valid Title').isLength({
    min: 3
  }), body('description', 'Enter a valid description').isLength({
    min: 5
  })],

  async (req, res) => {

    // we will validate the input so that notes added must be valid and if error occurs return a bad request 
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
      // destructuring the input from request 
      const {
        title,
        description,
        tag
      } = req.body;


      // creating a new note using the format of Notes.js and data is collected from request 
      const newnote = new Notes({
        title,
        description,
        tag,
        user: req.user.id
      })
      const savednote = await newnote.save();

     
      res.json({savednote})

    } catch (error) {
      res.status(404).send({
        error: "Internal Server Error"
      });
    }






  })


// ROUTE- 3 -> Update   an existing  note of the logged in unique  User(to whome note belong means someone else cannot update the note) using PUT: "api/notes/updatenote:id"
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
      // Create a newNote object
      const newNote = {};
      if (title) { newNote.title = title };
      if (description) { newNote.description = description };
      if (tag) { newNote.tag = tag };

      // Find the note to be updated and update it
      let note = await Notes.findById(req.params.id);
     
      if (!note) { return res.status(404).send("Not Found") }

      if (note.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }
      note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
      res.json({ note });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

// ROUTE - 4 DELETE AN EXISTING NOTE USING DELETE "api/notes/deletenode/"

router.delete('/deletenode/:id', fetchuser, async (req, res) => {
  try {

    // find the note to be deleted 

    let note = await Notes.findById(req.params.id);

    // if no note exist return not found
    if(!note){
      res.status(404).json({ error: "Not Found"})
    }

    // now check whether the user is same who is logged in and had added the note before

    if(note.user.toString() !== req.user.id){
      res.status(401).jso
    }
    
  } catch (error) {
    console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})





module.exports = router;