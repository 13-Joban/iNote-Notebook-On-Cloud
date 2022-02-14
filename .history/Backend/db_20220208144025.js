const mongoose = require('mongoose');
const mongoURI = '://locamongodblhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

const ConnectToMongo = () => {

        mongoose.connect(mongoURI , () => {
            console.log('Connected to MongoDb Successfully');
        })
}

module.exports = ConnectToMongo;