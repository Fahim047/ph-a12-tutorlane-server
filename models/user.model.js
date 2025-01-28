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
		photoURL: {
			type: String,
			default: 'https://placeholder.com/150',
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
