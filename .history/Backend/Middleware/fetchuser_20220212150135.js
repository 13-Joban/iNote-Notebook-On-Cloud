var jwt  = require('jsonwebtoken');

const JWT_SECRET   = 'jobanisgentleman'
const fetchuser = (req, res, next) => {
// get the user from the jwt token and add id to req object
const token = req.header('auth-token');
if(!token){
    res.status(404).send({error: "Please authenticate using a valid token"});

}
const data = jwt.verify(JWT_SECRET)
next()
}
module.exports = fetchuser;