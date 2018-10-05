const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
    
	date: {
		type: Date,
		default: new Date(),
	},
    
	poster: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
    
	category: {
		type: String,
		enum: ['exam', 'seminar', 'workshop', 'activity', 'competition',],
	}
});

const Event = mongoose.model('Batch', eventSchema);

// * EXPORT
module.exports = {
	Event,
	eventSchema,
};
