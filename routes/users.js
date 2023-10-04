var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/viewCreate', userController.viewCreate);

router.post('/create', userController.createUser);

// Fetch all users
router.get('/all', userController.getAllUsers);

module.exports = router;
