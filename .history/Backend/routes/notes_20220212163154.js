const express = require('express');
const fetchuser = require('../Middleware/fetchuser');

const router = express.Router();

// ROUTE- 1 -> Get all the notes of the logged in User


router.get('/fetchallnotes', fetchuser,  (req, res) => {
   
  const notes = 
  })

module.exports = router