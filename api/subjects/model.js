const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
	name: {
		type: String,
		require: true,
		unique: true,
		sparse: true,
	},
	faculty: [{
		type: Schema.Types.ObjectId
	}],
	year: {
		type: Number,
		min: [1950, 'Too old!'],
	},
});

const Subject = mongoose.model('Subject', subjectSchema);

// * EXPORT
module.exports = {
	Subject,
	subjectSchema,
};
