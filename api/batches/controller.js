const { Batch } = require('./model');

// ? post /batches/
exports.postBatches = function postBatches (req, res) {
	let btch = new Batch(req.body);
	btch.save((err) => {
		if (err) return res.status(500).json(err);
		return res.json(btch);
	});
};

// ? get /batches/
exports.getBatches = function getBatches (req, res) {
	Batch.find({})
		.populate('batches')
		.populate('faculty')
		.exec((err, list) => {
			if (err) return res.status(500).json(err);
			return res.json(list);
		});
};

// ? get /batches/:id
exports.getBatchesSingle = function getBatchesSingle (req, res) {
	Batch.findById(req.params.id)
		.populate('batches')
		.populate('faculty')
		.exec((err, btch) => {
			if (err) return res.status(500).json(err);
			if (!btch) return res.status(404).json({status: 'NOT FOUND'});
			return res.json ();
		});
};

// ? put /batches/:id
exports.putBatchesSingle = function putBatchesSingle (req, res) {
	let btch = null;
	Batch.findById(req.params.id);
};

// ? delete /batches/:id
exports.deleteBatchesSingle = function deleteBatchesSingle (req, res) {
	Batch.findOneAndDelete(req.id).exec((err, btch) => {
		if (err) return res.status(500).err(btch);
		return res.json({
			status: 'OK',
			deleted: btch
		});
	});
};
