import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const blogSchema = new Schema({
    
    name : {
        type: String,
        required: true
        uniqu
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
  });