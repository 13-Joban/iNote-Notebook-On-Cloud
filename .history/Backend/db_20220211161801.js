const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/inotebook';
// mongourl is used to connect to mongo 
const ConnectToMongo = (e) => {

        mongoose.connect(mongoURI , (e) => {
            console.log('Connected to MongoDb Successfully');
        })
}

module.exports = ConnectToMongo;

