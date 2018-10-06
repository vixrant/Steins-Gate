const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	title: {
		type: String,
		require: true,
	},
    
	start: {
		type: Date,
		default: new Date(),
	},

	end: {
		type: Date,
		default: new Date(),
	},

	allDay: {
		type: Boolean,
		default: true,
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

const Event = mongoose.model('Event', eventSchema);

// * EXPORT
module.exports = {
	Event,
	eventSchema,
};
