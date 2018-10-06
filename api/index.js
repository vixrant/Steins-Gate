const users = require('./users/router');
const events = require('./events/router');
const subjects = require('./subjects/router');
const batches = require('./batches/router');
const departments = require('./departments/router');

module.exports = {
	users,
	events,
	subjects,
	batches,
	departments,
};
