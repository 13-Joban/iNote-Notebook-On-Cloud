const express = require('express');
const fetchuser = require('../Middleware/fetchuser');
const Notes = require('../models/Notes')
const router = express.Router();

// ROUTE- 1 -> Get all the notes of the logged in User using GET: "api/notes/fetchallnotes"


router.get('/fetchallnotes', fetchuser, async (req, res) => {
   
  const notes = await Notes.find({user: req.user.id});
  res.json(notes)
  })

  // ROUTE- 2 -> Add  the notes of the logged in User using POST: "api/notes/addnotes"


router.post('/addnotes', fetchuser, async (req, res) => {
   
  
 
  })

module.exports = router;