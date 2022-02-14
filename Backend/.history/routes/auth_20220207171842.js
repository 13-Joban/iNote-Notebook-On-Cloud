const express = require('express');
const user = require('module/')
const router = express.Router();
// create a user using POST "api/auth". DOesn't require authentication

router.get('/', (req, res) => {
    //     let     obj ={
    //     name: 'joban',
    //     class: 'csb'
    // }
    // res.json(obj)
    // console.log(res.json(obj));
    console.log(req.body)
    res.send(req.body)
    const user = req.body;
    user.save
    
    // // res.json(req.body)
   
  })

module.exports = router