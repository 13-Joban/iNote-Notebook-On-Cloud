const express = require('express');
const fetchuser = require('../Middleware/fetchuser');
const fetchsuser = require('../Middleware/')
const router = express.Router();

// ROUTE- 1 -> Get all the notes of the logged in User


router.get('/fetchallnotes', fetchuser,  (req, res) => {
   
  })

module.exports = router