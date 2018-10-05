// * MODULE DEPENDENCIES
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import passport from 'passport'
import passportConfig from './config/passport';

import userRouter from './routes/userRouter';

import { jwtSecret } from './config';

// * APP CREATION
const app = express();

// * APP CONFIG
app.set('host', process.env.HOST || null);
app.set('port', process.env.PORT || 8000);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

// * MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

app.use(passport.initialize());

// * ROUTES

app.get('/', (req, res) => {
    res.send('WORKING!');
});
app.use('/user', userRouter);
// app.use('/post/' , passport.authenticate('jwt'), passportConfig.isAuthenticated, postRouter);

// * EXPORT
export default app;
