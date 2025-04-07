const express = require('express');
const router = express.Router();

// Importing the controller
const adminController = require('../Controller/admincontroller');

// Define the route
router.get('/getadmin', adminController.admin); // Call the correct function

module.exports = router;
