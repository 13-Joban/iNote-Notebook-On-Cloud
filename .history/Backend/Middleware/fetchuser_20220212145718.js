var jwt  = require('jsonwebtoken');

const fetchuser = (req, res, next) => {
// get the user from the jwt token and add id to req object
const token = req.header('auth-token');
if(!token){
    res.status(404).send({error: "Pl"})
}
next()
}
module.exports = fetchuser;