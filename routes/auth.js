const express = require('express');
const registerController = require('../controllers/auth/registerController');
const loginController = require('../controllers/auth/loginController'); 

const router = express.Router();

router.post('/register', registerController.register );
router.post('/login', loginController.login );


module.exports = router;

// this all routes can include in one file