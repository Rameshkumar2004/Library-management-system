const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  BookName: {
    type: String,
    required: true,
  },
  SBIN: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Roll_No: {
    type: String,
    required: true,
    
  },
  Dept: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
    // default: Date.now,
  },
});

module.exports= mongoose.model('Issue',issueSchema );
