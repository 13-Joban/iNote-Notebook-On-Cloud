import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const blogSchema = new Schema({
    
    name : {
        type: Str
    }
  });