const express = require('express');
const router = express.Router();

const controller = require('./controller');

const passport = require('passport');
const passportConfig = require('../../config/passport');

router.post('/', passport.authenticate('jwt'), passportConfig.isAuthenticated, controller.postOne);
router.get('/', controller.getList);
router.get('/:id', controller.getOne);
router.put('/:id', controller.putOne);
router.delete('/:id', controller.deleteOne);

module.exports = router;
