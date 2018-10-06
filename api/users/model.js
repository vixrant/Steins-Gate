const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	studentId: {
		type: Number,
		require: true,
		unique: true,
		sparse: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
		sparse: true
	},
	password: String,

	status: {
		type: Number,
		min: 0,
		max: 12
	},

	profile: {
		name: String,
		dateOfBirth: { type: Date, default: new Date (), },
		joinYear: { type: Number, default: new Date().getFullYear(), },
		semester: { type: Number, min: [1, 'Can\'t be less than 1!'], max: [16, 'Too many semesters?'] },
		department: { type: Schema.Types.ObjectId, ref: 'Department' },
		batch: { type: Schema.Types.ObjectId, ref: 'Batch' },
	},

	attendance: [{
		subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
		lectures: {
			total: Number,
			attended: Number,
		}
	}],

	avatar: String
});

/**
 * Password hash middleware.
 */
userSchema.pre('save', function(next) {
	var user = this;
	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();
	// generate a salt
	bcrypt.genSalt(10, function(err, salt) {
		if (err) return next(err);
		// hash the password using our new salt
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);
			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function comparePassword (candidatePassword) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
			if (err) reject(err);
			else resolve(isMatch);
		});
	});
};

/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function gravatar(size) {
	if (!size) {
		size = 200;
	}
	if (!this.email) {
		return `https://gravatar.com/avatar/?s=${size}&d=retro`;
	}
	const md5 = crypto.createHash('md5').update(this.email).digest('hex');
	return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

// Model creation.
const User = mongoose.model('User', userSchema);

// * EXPORT
module.exports = {
	User,
	userSchema,
};
