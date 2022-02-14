const express = require('express');

const router = express.Router();
// create a user using POST "api/auth". DOesn't require authentication

router.get('/', (req, res) => {
    //     let     obj ={
    //     name: 'joban',
    //     class: 'csb'
    // }
    // res.json(obj)
   
    res.send("hi this is response from auth")
    console.log(res.body());
    // res.json(req.body)
   
  })

module.exports = router