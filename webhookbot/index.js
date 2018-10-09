const express = require('express');
const router = express.Router();

const { Subject } = require('../api/subjects/model');
const { User } = require('../api/users/model');

router.post('/', (req, res) => {
	const parameters = req.body.queryResult.parameters;
	const speech = req.body.queryResult.fulfillmentText;
	const user = req.user;
	const subject = parameters.subject;

	const intent = req.body.queryResult.intent.displayName;

	console.log(req.body.queryResult);

	let par = 0;
	if (intent === 'attendance intent')
		par = 1;
	else if (intent === 'dattendance intent')
		par = 0;
	
	if (intent === 'attendance intent' || intent === 'dattendance intent') {
		let dataToSend = '';
		Subject.findOne({ name: new RegExp(subject, 'i') })
			.exec((err, sub) => {
				let attendance = user.attendance;
				if (!sub) return res.json({ speech: 'Not found', displayText: 'Not found', source: 'attendance' });

				console.log(user);
				const i = attendance.findIndex(e => e.subject.equals(sub._id));
				if (i === -1) {
					attendance.push({
						subject: sub._id,
						lectures: {
							total: 1,
							attended: par,
						}
					});
					dataToSend = 'Not Found;';
				} else {
					attendance[i].lectures.total += 1;
					attendance[i].lectures.attended += par;
					const v = attendance[i].lectures.attended / attendance[i].lectures.total;
					const percentage = `Your attendance in ${subject} is ${v * 100}%`;
					dataToSend = speech + percentage;
				}

				User.findByIdAndUpdate(user._id, { attendance }).exec(err => {
					if (err) return res.status(500).json(err);
				});

				return res.json({
					messages: [{
						speech: dataToSend,
						displayText: dataToSend,
						source: 'attendance'
					}]
				});
			});
	}

	if (intent === 'attentance check') {
		let attendance = user.attendance;
		let dataToSend = 'Your attendance report is: ';
		attendance.populate('subject').forEach(e => {
			dataToSend += ` ${e.subject} ${e.lectures.attended * 100 / e.lectures.total} `;
		});

		console.log(dataToSend);

		return res.json({
			speech: dataToSend,
			displayText: dataToSend,
			source: 'attendance'
		});
	}

});

module.exports = router;
