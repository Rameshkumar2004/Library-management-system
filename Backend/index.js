const express = require("express");
const mongoose = require("mongoose");
const Book=require("./Routes/bookroutes");
const User =require("./Routes/userroute");
const Admin =require("./Routes/adminroute")
const cors=require ("cors")
const app = express(); // Fixed typo

app.use(cors())
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/Library-ms")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });


  const checkAuth = require("./middleware/authMiddleware");
  app.use(checkAuth);
  
// Home route
// app.get("/", (req, res) => {
//   res.send("Welcome to the home page");
// });

app.use("/api/Book",Book)
app.use("/api/User",User)
app.use("/api/admin",Admin)

// Server listening
app.listen(3000, () => {  // Updated port to 3000
  console.log("Server is running on port 3000");
});
