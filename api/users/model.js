// * MODULE DEPENDENCIES
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { Post } from '../../models/post';

const userSchema = new mongoose.Schema({
    studentId: {
        type: Number,
        unique: true,
        sparse: true,
    },
    name: String,
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    password: String,

    status: String,

    dateOfBirth: { type: Date, default: new Date (), },
    joinYear: { type: Number, default: new Date().getFullYear(), },
    department: String,
    batch: String,
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
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) reject(err);
            else resolve(isMatch);
        });
    });
};

const User = mongoose.model('User', userSchema);

// * EXPORT
export default User;
export {
    userSchema
};
