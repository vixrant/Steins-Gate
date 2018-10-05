const { User } = require('./model');
const jwt = require('jwt-simple');
const { jwtSecret } = require('../../config/variables');

// ? post /user/
exports.postSignup = (req, res) => {
	// ! NOTE: Add verification of data.
	
	let user = new User({
		email: req.body.email,
		password: req.body.password
	});
	
	User.findOne({ email: req.body.email }, (err, existingUser) => {
		if (err) { return res.status (500).json (err); }
		if (existingUser) {
			return res.status(401).json({ msg: 'Account with that email address already exists.' });
		}
		user.save((err) => {
			if (err) { return res.status(500).json(err); }
			return res.json(user);
		});
	});
};

// ? post /user/token/
exports.psotToken = function generateToken (req, res) {
	let user = req.user;
	
	let payload = {
		id: user._id
	};
	
	let token = jwt.encode(payload, jwtSecret);
	return res.json({
		token
	});
};

// ? get /user/
exports.getUserDetails = function getUserDetails (req, res) {
	let user = req.user;
	return res.json();
};
