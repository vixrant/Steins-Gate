const { Batch } = require('./model');

// ? post /batches/
exports.postOne = function postOne (req, res) {
	let btch = new Batch(req.body);
	btch.save((err) => {
		if (err) return res.status(500).json(err);
		return res.json(btch);
	});
};

// ? get /batches/
exports.getList = function getList (req, res) {
	Batch.find({})
		.populate('students')
		.populate('department', '-batches')
		.exec((err, list) => {
			if (err) return res.status(500).json(err);
			return res.json(list);
		});
};

// ? get /batches/:id
exports.getOne = function getOne (req, res) {
	const id = req.params.id;
	Batch.findById(id)
		.populate('students')
		.populate('department', '-batches')
		.exec((err, btch) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!btch || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
			return res.json (btch);
		});
};

// ? put /batches/:id
exports.putOne = function putOne (req, res) {
	const btch = req.body;
	const id = req.params.id;
	Batch.findByIdAndUpdate(id, btch)
		.exec((err, old) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!old || (err && err.name == 'CastError')) return res.status(404).json({ status: 'NOT FOUND' });
			return res.json(old);
		});
};

// ? delete /batches/:id
exports.deleteOne = function deleteOne (req, res) {
	const id = req.params.id;
	Batch.findOneAndDelete(id).exec((err, btch) => {
		if (err && err.name !== 'CastError') return res.status(500).json(err);
		if (!btch || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
		return res.json({
			status: 'OK',
			deleted: btch
		});
	});
};
