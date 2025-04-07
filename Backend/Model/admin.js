const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  EncodedVideoChunkmail: {
    type: String,
    required: true,
    unique: true,
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

module.exports= mongoose.model('Admin',adminSchema );
