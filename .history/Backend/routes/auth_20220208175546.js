const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');

// create a user using POST "api/auth". DOesn't require authentication

router.post('/', [  body('email' ,'Enter a ba').isEmail(), body('name').isLength({ min: 4 }), 
// password must be at least 5 chars long
body('password').isLength({ min: 4 }) ], 
 (req, res) => {
    //     let    ],  (req, res) => {
    //     let     obj ={
    //     name: 'joban',
    //     class: 'csb'
    // }
    // res.json(obj)
    // console.log(res.json(obj));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      username: req.body.name,
      password: req.body.password,
    }).then(user => res.json(user));
    res.send(req.body)
    
    // // res.json(req.body)
   
  })

module.exports = router