const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/inote'

const ConnectToMongo = () => {

        mongoose.connect(mongoURI , () => {
            console.log('Connected to MongoDb Successfully');
        })
}

module.exports = ConnectToMongo;