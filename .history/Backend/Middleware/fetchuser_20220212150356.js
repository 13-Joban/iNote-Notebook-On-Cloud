var jwt  = require('jsonwebtoken');

const JWT_SECRET   = 'jobanisgentleman'
const fetchuser = (req, res, next) => {
// get the user from the jwt token and add id to req object
const token = req.header('auth-token');
clg
if(!token){
    res.status(404).send({error: "Please authenticate using a valid token"});

}
try {
    const data = jwt.verify(token, JWT_SECRET);
    console.log(data);
req.user = data.user;
console.log(req.user);
next();
    
} catch (error) {
    res.status(404).send({error: "Please authenticate using a valid token"});
}

}
module.exports = fetchuser;