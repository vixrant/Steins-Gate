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
		type: Schema.Types.ObjectId,
		ref: 'User',
	}],
	year: {
		type: Number,
		min: [1950, 'Too old!'],
	},
	reps: [{
		batch: { type: Schema.Types.ObjectId, ref: 'Batch' },
		days: [{
			type: String,
			enum: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
		}]
	}],
});

const Subject = mongoose.model('Subject', subjectSchema);

// * EXPORT
module.exports = {
	Subject,
	subjectSchema,
};
