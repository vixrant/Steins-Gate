const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const batchSchema = new Schema({
	name: {
		type: String,
		require: true,
		unique: true,
		sparse: true,
	},
	students: [{
		type: Schema.Types.ObjectId,
		ref: 'User',
	}]
});

const Batch = mongoose.model('Batch', batchSchema);

// * EXPORT
module.exports = {
	Batch,
	batchSchema,
};
