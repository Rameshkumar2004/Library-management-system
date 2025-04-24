const express = require('express');
const router = express.Router();
const {createIssue,  getIssuebook , deleteIssuebook} = require('../Controller/Issuebookcontroller')

router.post('/create', createIssue);
router.get('/showissuebook', getIssuebook);
router.delete('/delete/:id', deleteIssuebook)

module.exports = router;