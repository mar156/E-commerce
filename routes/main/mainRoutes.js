const express = require('express');
const router = express.Router();
const path = require('path');
const mainController= require(path.join(__dirname, '/../../controllers/main/mainController'));


router.get('/', mainController.index );


module.exports = router;