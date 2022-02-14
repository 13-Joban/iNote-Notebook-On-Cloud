import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const blogSchema = new Schema({
    
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    t: {
        type: String,
        required: true
    }
  });