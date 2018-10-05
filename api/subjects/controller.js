const { Subject } = require('./model');

// ? post /subjects/
exports.postOne = function postOne (req, res) {
	let subj = new Subject(req.body);
	subj.save((err) => {
		if (err) return res.status(500).json(err);
		return res.json(subj);
	});
};

// ? get /subjects/
exports.getList = function getList (req, res) {
	Subject.find({})
		.populate('faculty')
		.populate('reps.batch')
		.exec((err, list) => {
			if (err) return res.status(500).json(err);
			return res.json(list);
		});
};

// ? get /subjects/:id
exports.getOne = function getOne (req, res) {
	const id = req.params.id;
	Subject.findById(id)
		.populate('faculty')
		.populate('reps.batch')
		.exec((err, subj) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!subj || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
			return res.json (subj);
		});
};

// ? put /subjects/:id
exports.putOne = function putOne (req, res) {
	const subj = req.body;
	const id = req.params.id;
	Subject.findByIdAndUpdate(id, subj)
		.exec((err, old) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!old || (err && err.name == 'CastError')) return res.status(404).json({ status: 'NOT FOUND' });
			return res.json(old);
		});
};

// ? delete /subjects/:id
exports.deleteOne = function deleteOne (req, res) {
	const id = req.params.id;
	Subject.findOneAndDelete(id).exec((err, subj) => {
		if (err && err.name !== 'CastError') return res.status(500).json(err);
		if (!subj || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
		return res.json({
			status: 'OK',
			deleted: subj
		});
	});
};
