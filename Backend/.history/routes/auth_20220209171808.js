const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt  =  require('bcryptjs');
const jwt  = require('jsonwebtoken'); 

// jwt gives token to every user and verifies using token when user login next time  


const JWT_SECRET   = 'jobanisgentleman'

// create a user using POST "api/auth". DOesn't require authentication

// router.post('/', [  body('email' ,'Enter a valid Email').isEmail(), body('name' ,'Enter a valid name').isLength({ min: 4 }), 
// // password must be at least 4 chars long
// body('password' ,'Enter a valid password').isLength({ min: 4 }) ], 
//  async (req, res) => {
//     //     let    ],  (req, res) => {
//     //     let     obj ={
//     //     name: 'joban',
//     //     class: 'csb'
//     // }
//     // res.json(obj)
//     // console.log(res.json(obj));


//     // const errors = validationResult(req);
//     // if (!errors.isEmpty()) {
//     //   return res.status(400).json({ errors: errors.array() });


//     // }

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     // Check whether the user with this email exists already
//     try {
//       // Check whether the user with this email exists already
//       let user = await User.findOne({ email: req.body.email });
//       if (user) {
//         return res.status(400).json({ error: "Sorry a user with this email already exists" })
//       }

// // salt is appended by the backend to protect from getting hacked by the hacker which have already rainbow box containing all the hashes 
//     const Salt = await bcrypt.genSalt(10)
//     // we will store hash in the database for protection 
//  const  Securepassword   = await  bcrypt.hash(req.body.password, Salt);

//  user = await  User.create({
//   name: req.body.name,
//   password: Securepassword,
//   email: req.body.email
// }).then( authtoken =>  res.json(authtoken))  //  we will not send the user in response but a  auth token
// .catch( (error) => res.json({error: "please enter unique user details"}));


//  const data  = {
//   user: {
//       id: user.id
//   }
// }
//   const authtoken = jwt.sign( data,  JWT_SECRET);
  
// console.log(authtoken);
//     //  this will create a user having unique name and email address 
   
//     // res.send(req.body)
    
//     // res.json(req.body)

//     // make  id as auth token for every user 
// res.json({authtoken})

// } catch (error) {
//   console.error(error.message);
   
//   res.status(500).send("Some Error occured");
// }
// })



// cwh code 
   
// router.post('/', [  body('name', 'Enter a valid name').isLength({ min: 3 }),
//   body('email', 'Enter a valid email').isEmail(),
//   body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
// ], async (req, res) => {
//   // If there are errors, return Bad request and the errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   // Check whether the user with this email exists already
//   try {
//     // Check whether the user with this email exists already
//     let user = await User.findOne({ email: req.body.email });
//     if (user) {
//       return res.status(400).json({ error: "Sorry a user with this email already exists" })
//     }
//     const salt = await bcrypt.genSalt(10);
//     const secPass = await bcrypt.hash(req.body.password, salt);

//     // Create a new user
//     user = await User.create({
//       name: req.body.name,
//       // password: req.body.password,
//       password: secPass,
//       email: req.body.email,
//     })
//     res.json(user)
  
//     const data = {
//       user:{
//         id: user.id
//       }
//     }
//     const authtoken = jwt.sign(data, JWT_SECRET);


//     // res.json(user)
//     res.json({authtoken})

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Some Error occured");
//   }
// })


module.exports = router