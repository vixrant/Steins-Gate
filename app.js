// * MODULE DEPENDENCIES
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const passportConfig = require('./config/passport');
const cors = require('cors'); // ! IMPORTANT

require('./config');

// * APP CREATION
const app = express();

// * APP CONFIG
app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 5000);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

// * MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(passport.initialize());

// * ROUTES
const routes = require('./api');
const webhook = require('./webhookbot');

app.get('/', (req, res) => {
	res.send('WORKING!');
});
for (let label in routes) {
	app.use(`/${label}`, routes [label]);
}
app.use('/df', passport.authenticate('jwt'), passportConfig.isAuthenticated, webhook);

// * EXPORT
module.exports = app;
