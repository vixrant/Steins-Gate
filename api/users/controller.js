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
		.populate('profile.department')
		.populate('profile.batch')
		.populate('attendance.subject')
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
		.populate('profile.department')
		.populate('profile.batch')
		.populate('attendance.subject')
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

// ? get /users/att
exports.getAttendance = function getAttendance (req, res) {
	let user = req.user;
	user.populate('attendance.subject').exec((err, u) => {
		if (err) return res.status(500).json(err);
		else return res.json(u);
	});
};

// ? post /users/att
exports.addAttendance = function addAttendance (req, res) {
	const user = req.user;
	const count = req.body.count || 1;
	const subject = req.body.subject;
	
	let attendance = user.attendance;
	const i = attendance.findIndex(e => e.subject.toString() === subject);
	if (i === -1) {
		attendance.push({
			subject,
			lectures: {
				total: count,
				attended: count,
			}
		});
	} else {
		attendance[i].lectures.total += count;
		attendance[i].lectures.attended += count;
	}

	User.findByIdAndUpdate(user._id, { attendance }).exec(err => {
		if (err) return res.status(500).json(err);
		res.json(attendance);
	});
};

// ? post /users/datt
exports.addBunk = function addBunk (req, res) {
	const user = req.user;
	const count = req.body.count || 1;
	const subject = req.body.subject;
	
	let attendance = user.attendance;
	const i = attendance.findIndex(e => e.subject.toString() === subject);
	if (i === -1) {
		attendance.push({
			subject,
			lectures: {
				total: count,
				attended: 0,
			}
		});
	} else {
		attendance[i].lectures.total += count;
	}

	User.findByIdAndUpdate(user._id, { attendance }).exec(err => {
		if (err) return res.status(500).json(err);
		res.json(attendance);
	});
};

