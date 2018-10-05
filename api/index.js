const users = require('./users/router');
const subjects = require('./subjects/router');
const batches = require('./batches/router');
const departments = require('./departments/router');

module.exports = {
	users,
	subjects,
	batches,
	departments,
};
