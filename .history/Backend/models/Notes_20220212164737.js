const mongoose = require('mongoose');
const { Schema } = mongoose;
const Notesschema = new Schema( {
  user:{
    type: mongoose.Schema.Types.ObjectId,
    
  },

    title: 
    {
    type: String,
    required: true
    },
     description: 
    {
    type: String,
    required: true
    },
    
    tag: 
    {
    type: String,
    default: 'General'
    },
    
    date: 
    {
    type: Date,
  default: Date.now()
    }
})

module.exports = mongoose.model("notes", Notesschema)