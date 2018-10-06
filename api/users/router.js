const express = require('express');
const router = express.Router();

const controller = require('./controller');

const passport = require('passport');
const passportConfig = require('../../config/passport');

router.post('/token', passport.authenticate('local'), passportConfig.isAuthenticated,controller.postToken);

router.post('/', controller.postSignup);
router.get('/', controller.getList);
router.get('/:id', controller.getOne);
router.put('/:id', controller.putOne);
router.delete('/:id', controller.deleteOne);

router.post('/att', passport.authenticate('jwt'), passportConfig.isAuthenticated, controller.addAttendance);
router.post('/datt', passport.authenticate('jwt'), passportConfig.isAuthenticated, controller.addBunk);

module.exports = router;
