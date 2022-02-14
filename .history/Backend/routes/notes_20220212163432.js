const express = require('express');
const fetchuser = require('../Middleware/fetchuser');
const Notes = require('../models/Notes')
const router = express.Router();

// ROUTE- 1 -> Get all the notes of the logged in User


router.get('/fetchallnotes', fetchuser,  (req, res) => {
   
  const notes =  Notes.find({user: req.user.id});
  res.
  })

module.exports = router