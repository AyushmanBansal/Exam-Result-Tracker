const express = require('express');
const { addResult, getResults } = require('../controllers/result');

const router = express.Router();

router.get('/result', getResults);

router.post('/result', addResult);

module.exports = router;