import express from 'express';
import passport from 'passport';
import passportConfig from '../../config/passport';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/', passport.authenticate('jwt'), passportConfig.isAuthenticated, userController.getUserDetails);
router.post('/', passport.authenticate('jwt'), passportConfig.isAuthenticated, userController.getUserDetails);
router.post('/fcm', passport.authenticate('jwt'), passportConfig.isAuthenticated, userController.getFcmToken);

router.post('/login', userController.generateToken);
router.post('/signup', userController.postSignup);

export default router;
