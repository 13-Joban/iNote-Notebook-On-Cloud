const mongoose = require('mongoose');
const { Schema } = mongoose;
const Notesschema = new Schema( {

    title: 
    {
    type: String,
    required: true
    },
    
    
    des: 
    {
    type: String,
    required: true
    },

})