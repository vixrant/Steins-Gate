/**
 * This is a very smart function which converts any model to REST.
 * @param {*} Model 
 */
function restified (Model) {

	// ? post /models/
	const postOne = function postOne (req, res) {
		let dept = new Model(req.body);
		dept.save((err) => {
			if (err) return res.status(500).json(err);
			return res.json(dept);
		});
	};

	// ? get /models/
	const getList = function getList (req, res) {
		Model.find({})
			.populate('batches')
			.populate('faculty')
			.exec((err, list) => {
				if (err) return res.status(500).json(err);
				return res.json(list);
			});
	};

	// ? get /models/:id
	const getOne = function getOne (req, res) {
		const id = req.params.id;
		Model.findById(id)
			.populate('batches')
			.populate('faculty')
			.exec((err, dept) => {
				if (err && err.name !== 'CastError') return res.status(500).json(err);
				if (!dept || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
				return res.json (dept);
			});
	};

	// ? put /models/:id
	const putOne = function putOne (req, res) {
		const dept = req.body;
		const id = req.params.id;
		Model.findByIdAndUpdate(id, dept)
			.exec((err, old) => {
				if (err && err.name !== 'CastError') return res.status(500).json(err);
				if (!old || (err && err.name == 'CastError')) return res.status(404).json({ status: 'NOT FOUND' });
				return res.json(old);
			});
	};

	// ? delete /models/:id
	const deleteOne = function deleteOne (req, res) {
		const id = req.params.id;
		Model.findOneAndDelete(id).exec((err, dept) => {
			if (err && err.name !== 'CastError') return res.status(500).json(err);
			if (!dept || (err && err.name == 'CastError')) return res.status(404).json({status: 'NOT FOUND'});
			return res.json({
				status: 'OK',
				deleted: dept
			});
		});
	};

	return {
		postOne,
		getList,
		getOne,
		putOne,
		deleteOne,
	};

}
