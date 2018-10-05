const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
	name: {
		type: String,
		require: true,
		unique: true,
		sparse: true,
	},
	batches: [{
		type: Schema.Types.ObjectId,
		ref: 'Batch',
	}],
	faculty: [{
		type: Schema.Types.ObjectId
	}],
});

const Department = mongoose.model('Department', departmentSchema);

// * EXPORT
module.exports = {
	Department,
	departmentSchema,
};
