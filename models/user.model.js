import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
		},
		role: {
			type: String,
			enum: ['student', 'teacher', 'admin'],
			default: 'student',
		},
	},
	{ timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
