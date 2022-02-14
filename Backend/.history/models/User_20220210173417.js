const  mongoose  =  require('mongoose');
  const { Schema } = mongoose;

  const UserSchema = new Schema({
    
    name : {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        required: true,
        unique: true
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
  const User = await  mongoose.model('user', UserSchema );
  async User.createIndexes();
  module.exports = User;