const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slotSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
    
	date: {
		type: Date,
		default: new Date(),
	},
    
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
    
	category: {
		type: String,
		enum: ['exam', 'seminar', 'workshop', 'activity', 'competition', ],
	},
});

const Slot = mongoose.model('Batch', slotSchema);

// * EXPORT
module.exports = {
	Slot,
	slotSchema,
};
