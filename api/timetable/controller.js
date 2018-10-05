const { Slot } = require('./model');

// ? post /slots/
exports.postOne = function postOne (req, res) {
	let slt = new Slot(req.body);
	slt.save((err) => {
		if (err) return res.status(500).json(err);
		return res.json(slt);
	});
};

// ? get /slots/
exports.getList = function getList (req, res) {
	Slot.find({})
		.populate('students')
		.populate('department', '-slots')
		.exec((err, list) => {
			if (err) return res.status(500).json(err);
			return res.json(list);
		});
};

// ? get /slots/:id
exports.getOne = function getOne (req, res) {
	const id = req.params.id;
	Slot.findById(id)
		.populate('students')
		.populate('department', '-slots')
		.exec((err, slt) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!slt || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
			return res.json (slt);
		});
};

// ? put /slots/:id
exports.putOne = function putOne (req, res) {
	const slt = req.body;
	const id = req.params.id;
	Slot.findByIdAndUpdate(id, slt)
		.exec((err, old) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!old || (err && err.name == 'CastError')) return res.status(404).json({ status: 'NOT FOUND' });
			return res.json(old);
		});
};

// ? delete /slots/:id
exports.deleteOne = function deleteOne (req, res) {
	const id = req.params.id;
	Slot.findOneAndDelete(id).exec((err, slt) => {
		if (err && err.name !== 'CastError') return res.status(500).json(err);
		if (!slt || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
		return res.json({
			status: 'OK',
			deleted: slt
		});
	});
};
