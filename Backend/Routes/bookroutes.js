const express = require('express');
const router = express.Router();
// const authMiddleware=require("../Middleware/authMiddlewarw")
const {createBook, getAllBook, getSBINById, updateBook, deleteBook} = require('../Controller/bookcontroller')

router.post('/create', createBook);
router.get('/getBooks', getAllBook);
router.get('/getSBIN/:id', getSBINById);
router.put('/updateSBIN/:id', updateBook);
router.delete('/delete/:id', deleteBook)

module.exports = router;