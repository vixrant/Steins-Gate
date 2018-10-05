const jwt = require('jwt-simple');
const { jwtSecret } = require('../config/variables');

exports.generateToken = function generateToken (id) {
	let payload = {
		id
	};

	let token = jwt.encode(payload, jwtSecret);
	return token;
};
