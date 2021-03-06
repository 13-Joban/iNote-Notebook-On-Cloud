const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt  =  require('bcryptjs'); // becrypt provides salt to hashed password for more security
var jwt  = require('jsonwebtoken');  // jwt gives token to every user and verifies using token when user login next time  
const fetchuser = require('../Middleware/fetchuser')

const JWT_SECRET   = 'jobanisgentleman'

// ROUTE 1 -  create a user using POST "api/auth". DOesn't require authentication

router.post('/createuser', [  body('email' ,'Enter a valid Email').isEmail(), body('name' ,'Enter a valid name').isLength({ min: 4 }), 
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

    try{
      
// salt is appended by the backend to protect from getting hacked by the hacker which have already rainbow box containing all the hashes 
    const Salt = await bcrypt.genSalt(10)
    // we will store hash in the database for protection 
 const  Securepassword   = await  bcrypt.hash(req.body.password, Salt);


 let user = await User.findOne({ email: req.body.email });
 if (user) {
   return res.status(404).json({ error: "Sorry a user with this Details already exists" })
 }

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
  
  


    //  this will create a user having unique name and email address 
    user = await User.create({
      name: req.body.name,
     email: req.body.email,
     password: Securepassword,
    })
    // res.json(user)  // now we need not to send user as response because we are sending auth token
  
    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);


  //  we will not send the user in response but a  auth token

    // res.json(user)
    res.json({authtoken})
    }
    catch(error) {
        console.error(error.message);
        res.status(404).send("Some Error occured");
      }
    })

     
// ROUTE - 2 Authenticate a User http://localhost:3000/api/auth/login




router.post('/login', [  body('email' ,'Enter a valid Email').isEmail() ],
                    body('password', 'Password cannot be Empty').exists(),

async (req, res) => {


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password}= req.body;

  try {
  
 let user = await User.findOne({email});

//  if the entered email doesn't exists in database means user not exists  
 if (!user) {
   return res.status(404).json({ error: "Please login using correct ceredentials" })
 }


// bcrypt compare the entered password with the database stored password
 const passworrdCompare = await bcrypt.compare(password, user.password);

 
//  if the entered password  doesn't matches with the password in  database also  means user not exists

 if( !passworrdCompare){
  return res.status(404).json({ error: "Please login using correct ceredentials" })
 }

//  now if ceredentials matches we will send  the auth token to user


const data = {
  user:{
    id: user.id
  }
}
const authtoken = jwt.sign(data, JWT_SECRET);

res.json({authtoken})


  } catch (error) {
     console.error(error.message);
        res.status(404).send("Some Internal Server Error occured");
  }

})

// ROUTE - 3  To get the details of logged in user --> login required


router.post('/getuser', fetchuser,
async (req, res) => {


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
let   userid = req.user.id;
 let user = await User.findById(userid).select("-password");
 res.json(user)

  } catch (error) {
     console.error(error.message);
        res.status(404).send("Some Internal Server Error occured");
  }

})


 module.exports = router;