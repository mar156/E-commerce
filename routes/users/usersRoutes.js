const express = require('express');
const router = express.Router();
const path = require('path');
const usersController= require(path.join(__dirname, '/../../controllers/users/usersController'));

router.get('/login', usersController.login);
router.get('/newAccount', usersController.createAccount);

module.exports = router;