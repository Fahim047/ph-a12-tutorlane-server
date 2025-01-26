import mongoose from 'mongoose';

const TeacherRequestSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
			unique: true,
		},
		experience: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ['pending', 'accepted', 'rejected'],
			default: 'pending',
		},
	},
	{
		timestamps: true,
	}
);

const TeacherRequest = mongoose.model('TeacherRequest', TeacherRequestSchema);
export default TeacherRequest;
