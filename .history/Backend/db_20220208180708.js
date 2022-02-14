const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/inoteboo'

const ConnectToMongo = () => {

        mongoose.connect(mongoURI , () => {
            console.log('Connected to MongoDb Successfully');
        })
}

module.exports = ConnectToMongo;