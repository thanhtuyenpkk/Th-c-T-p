var express = require('express');
var router = express.Router();
let index = require('../controllers/index.controller')

router.post('/login', index.loginController.login)

module.exports = router;
