var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});

module.exports = router;