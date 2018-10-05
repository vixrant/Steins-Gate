const { User } = require('./model');
const jwt = require('../../util/jwt');

// ? post /users/
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

// ? post /users/token/
exports.postToken = function generateToken (req, res) {
	const token = jwt.generateToken(req.user._id);
	
	return res.json({
		token
	});
};

// ----- Standard functions

// ? get /users/
exports.getList = function getList (req, res) {
	User.find({})
		.select('-password')
		.exec((err, list) => {
			if (err) return res.status(500).json(err);
			return res.json(list);
		});
};

// ? get /users/:id
exports.getOne = function getOne (req, res) {
	const id = req.params.id;
	User.findById(id)
		.select('-password')
		.exec((err, user) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!user || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
			return res.json (user);
		});
};

// ? put /users/:id
exports.putOne = function putOne (req, res) {
	const user = req.body;
	const id = req.params.id;
	User.findByIdAndUpdate(id, user)
		.select('-password')
		.exec((err, old) => {
			if (err) return res.status(500).json(err);
			if (!old || (err && err.name == 'CastError')) return res.status(404).json({ status: 'NOT FOUND' });
			return res.json(old);
		});
};

// ? delete /users/:id
exports.deleteOne = function deleteOne (req, res) {
	const id = req.params.id;
	User.findOneAndDelete(id)
		.select('-password')
		.exec((err, user) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!user || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
			return res.json({
				status: 'OK',
				deleted: user
			});
		});
};
