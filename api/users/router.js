const express = require('express');
const passport = require('passport');
const passportConfig = require('../../config/passport');
const userController = require('./controller');

const router = express.Router();

// router.get('/', passport.authenticate('jwt'), passportConfig.isAuthenticated, userController.getUserDetails);
// router.post('/', passport.authenticate('jwt'), passportConfig.isAuthenticated, userController.getUserDetails);
// router.post('/login', userController.generateToken);
// router.post('/signup', userController.postSignup);

module.exports = router;
