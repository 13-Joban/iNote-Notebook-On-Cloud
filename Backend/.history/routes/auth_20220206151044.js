const express = require('express');

const router = express.Router();
// create a user using POST 
router.get('/', (req, res) => {
    //     let     obj ={
    //     name: 'joban',
    //     class: 'csb'
    // }
    // res.json(obj)
    console.log(res.body);
    res.send("hi this is response from auth")
   
  })

module.exports = router