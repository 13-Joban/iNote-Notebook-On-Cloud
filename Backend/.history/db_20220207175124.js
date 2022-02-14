const mongoose = require('mongoose');
const mongoURI = ''

const ConnectToMongo = () => {

        mongoose.connect(mongoURI , () => {
            console.log('Connected to MongoDb Successfully');
        })
}

module.exports = ConnectToMongo;