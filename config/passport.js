const passport = require('passport');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;

const {
	jwtSecret
} = require('./variables');

const {
	User
} = require('../api/users/model');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// -----

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});

// -----

let jwtOptions = {
	jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('token'),
	secretOrKey: jwtSecret,
};

// * ----- STRATEGIES -----

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({
	usernameField: 'email'
}, (email, password, done) => {
	User.findOne({
		email: email.toLowerCase()
	}, (err, user) => {
		if (err) return done(err);
		if (!user) return done(null, false, {
			msg: `Email ${email} not found.`
		});
		user.comparePassword(password)
			.then(isMatch => {
				if (isMatch) return done(null, user);
				return done(null, false, {
					msg: 'Invalid email or password.'
				});
			})
			.catch(err => done(err));
	});
}));

/**
 * Sign in using JWT.
 */
passport.use(new JWTStrategy(jwtOptions,
	(payload, done) => {
		//find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
		return User.findById(payload.id)
			.then(user => {
				
				return done(null, user);
			})
			.catch(err => {
				console.log(err);
				return done(err);
			});
	}
));

// * ----- HELPERS -----

/**
 * Login Required middleware.
 */
const isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) return next();
	else res.status(403).json({
		status: 'Unauthenticated'
	});
};

/**
 * Adds status attribute to the request.
 */
const addStatusLimitation = (status) => (req, res, next) => {
	req.level = status;
	next();
};

/**
 * Authorization Required middleware.
 */
const isAuthorized = (req, res, next) => {
	if (!req.isAuthenticated()) return res.status(403).json({ status: 'NOT AUTHENTICATED' });
	
	const user = req.user;
	if (req.level < user.status) return res.status(403).json({ status: 'NOT AUTHORIZED' });

	next();
};

// * EXPORTS
module.exports = {
	isAuthenticated,
	addStatusLimitation,
	isAuthorized,
};