const express = require('express');
const User = require('../models/User')
const router = express.Router();
// create a user using POST "api/auth". DOesn't require authentication

router.post('/', [  body('em').isEmail(),
// password must be at least 5 chars long
body('password').isLength({ min: 5 }),] (req, res) => {
    //     let     obj ={
    //     name: 'joban',
    //     class: 'csb'
    // }
    // res.json(obj)
    // console.log(res.json(obj));
    console.log(req.body)
   
 const user = User(req.body);
    user.save()
  
    res.send(req.body)
    
    // // res.json(req.body)
   
  })

module.exports = router