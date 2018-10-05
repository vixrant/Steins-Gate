const { Department } = require('./model');

// ? post /departments/
exports.postOne = function postOne (req, res) {
	let dept = new Department(req.body);
	dept.save((err) => {
		if (err) return res.status(500).json(err);
		return res.json(dept);
	});
};

// ? get /departments/
exports.getList = function getList (req, res) {
	Department.find({})
		.populate('batches')
		.populate('faculty')
		.exec((err, list) => {
			if (err) return res.status(500).json(err);
			return res.json(list);
		});
};

// ? get /departments/:id
exports.getOne = function getOne (req, res) {
	const id = req.params.id;
	Department.findById(id)
		.populate('batches')
		.populate('faculty')
		.exec((err, dept) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!dept || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
			return res.json (dept);
		});
};

// ? put /departments/:id
exports.putOne = function putOne (req, res) {
	const dept = req.body;
	const id = req.params.id;
	Department.findByIdAndUpdate(id, dept)
		.exec((err, old) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!old || (err && err.name == 'CastError')) return res.status(404).json({ status: 'NOT FOUND' });
			return res.json(old);
		});
};

// ? delete /departments/:id
exports.deleteOne = function deleteOne (req, res) {
	const id = req.params.id;
	Department.findOneAndDelete(id).exec((err, dept) => {
		if (err && err.name !== 'CastError') return res.status(500).json(err);
		if (!dept || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
		return res.json({
			status: 'OK',
			deleted: dept
		});
	});
};
