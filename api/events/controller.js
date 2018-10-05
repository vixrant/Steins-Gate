const { Event } = require('./model');

// ? post /events/
exports.postOne = function postOne (req, res) {
	req.body.poster = req.user._id;
	let evnt = new Event(req.body);
	evnt.save((err) => {
		if (err) return res.status(500).json(err);
		return res.json(evnt);
	});
};

// ? get /events/
exports.getList = function getList (req, res) {
	Event.find({})
		.populate('poster')
		.exec((err, list) => {
			if (err) return res.status(500).json(err);
			return res.json(list);
		});
};

// ? get /events/:id
exports.getOne = function getOne (req, res) {
	const id = req.params.id;
	Event.findById(id)
		.populate('poster')
		.exec((err, evnt) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!evnt || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
			return res.json (evnt);
		});
};

// ? put /events/:id
exports.putOne = function putOne (req, res) {
	const evnt = req.body;
	const id = req.params.id;
	Event.findByIdAndUpdate(id, evnt)
		.exec((err, old) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!old || (err && err.name == 'CastError')) return res.status(404).json({ status: 'NOT FOUND' });
			return res.json(old);
		});
};

// ? delete /events/:id
exports.deleteOne = function deleteOne (req, res) {
	const id = req.params.id;
	Event.findOneAndDelete(id).exec((err, evnt) => {
		if (err && err.name !== 'CastError') return res.status(500).json(err);
		if (!evnt || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
		return res.json({
			status: 'OK',
			deleted: evnt
		});
	});
};
