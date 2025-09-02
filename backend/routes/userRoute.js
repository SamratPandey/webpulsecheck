const express = require('express');
const router = express.Router();


const {
    loginUser,
    registerUser
} = require('../controllers/userAuthController');


// User registration
router.post('/signup', registerUser);

// User login
router.post('/signin', loginUser);

module.exports = router;