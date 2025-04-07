const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  BookName: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
    unique: true,
  },
  Author: {
    type: String,
    required: true,
    
  },
  Publisher:{
    type:String,
    required: true,
  },
  Category:{
    type:String,
    required: true,
  },
  
  Rack:{
    type:String,
    required: true,
  },
  
  No_of_copies:{
    type: Number,
    required: true,
  },
  
  Status:{
    type: String,
    required: true,
  },

  createdAt:{
    type:Date,
    default: Date.now
  }
});

module.exports= mongoose.model('Books',bookSchema );
