const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt  =  require('bcryptjs');
var jwt  = require('jsonwebtoken');  // jwt gives token to every user and verifies using token when user login next time  


const JWT_SECRET   = 'jobanisgentleman'

// create a user using POST "api/auth". DOesn't require authentication

router.post('/', [  body('email' ,'Enter a valid Email').isEmail(), body('name' ,'Enter a valid name').isLength({ min: 4 }), 
// password must be at least 4 chars long
body('password' ,'Enter a valid password').isLength({ min: 4 }) ], 
 async (req, res) => {
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
// salt is appended by the backend to protect from getting hacked by the hacker which have already rainbow box containing all the hashes 
    const Salt = await bcrypt.genSalt(10)
    // we will store hash in the database for protection 
 const  Securepassword   = await  bcrypt.hash(req.body.password, Salt);
// let  user = User(req.body);
//  function generateauthtoken(user) { 
//     let data  = {
//   user:{
//       id: user.id
//   }
// }
// console.log(user.id);
//   let  authtoken = jwt.sign( data,  JWT_SECRET);
//   console.log(authtoken);
//   return authtoken;
// }
  
  
// console.log(authtoken);
    //  this will create a user having unique name and email address 
  User.create({
      name: req.body.name,
      password: Securepassword,
      email: req.body.email
    }).then( (user) =>  res.json(user)).catch( err => res.json({err: "please enter unique user details"}));
     //  we will not send the user in response but a  auth token

    // res.send(req.body)
    
    // res.json(req.body)

    // make  id as auth token for every user 


   
  })

module.exports = router;