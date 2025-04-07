const express = require('express');
const router = express.Router();
// const authMiddleware=require("../Middleware/authMiddlewarw")
const {createUser, getAllUser, getSBINById, updateBook, deleteUser} = require('../Controller/usercontroller')

router.post('/create', createUser);
router.get('/getUsers', getAllUser);
// router.get('/getSBIN/:id', getSBINById);
// router.put('/updateSBIN/:id', updateBook);
router.delete('/delete/:id', deleteUser)

module.exports = router;