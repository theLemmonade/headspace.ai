const express = require('express');
const { generateImage } = require('./openai')
const router = express.Router();

router.post('/', generateImage);


module.exports = router;