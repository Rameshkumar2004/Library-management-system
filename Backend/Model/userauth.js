const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Roll_No: {
    type: String,
    required: true,
    unique: true,
  },
  Dept: {
    type: String,
    required: true,
    
  },
  Password:{
    type:String,
    required: true,
  },
  createdAt:{
    type:Date,
    default: Date.now
  }
  
});

module.exports= mongoose.model('Users',userSchema );
