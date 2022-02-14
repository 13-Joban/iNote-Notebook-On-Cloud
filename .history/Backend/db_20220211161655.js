const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/inotebook';
// mongourl is used to connect to mongo 
const ConnectToMongo = (e) => {

        mongoose.connect(mongoURI , (e) => {
            console.log('Connected to MongoDb Successfully');
        })
}

module.exports = ConnectToMongo;

// {
//     "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNjNlODI5M2JkMzg3MTg2YWE4NjAzIn0sImlhdCI6MTY0NDU3NjM4Nn0.Zw-uEMbMtBYdaZkjQEsfNYyZoxwBIn6dY5pnShk7W6A"
//   }