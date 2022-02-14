const express = require('express');
const User = require('../models/User')
const router = express.Router();
// create a user using POST "api/auth". DOesn't require authentication

router.post('/', (req, res) => {
    //     let     obj ={
    //     name: 'joban',
    //     class: 'csb'
    // }
    // res.json(obj)
    // console.log(res.json(obj));
 
    res.send(req.body)
 const user = User(req.body);
    user.save()
    console.log(req.body)
    
    
    // // res.json(req.body)
   
  })

module.exports = router