import mongoose from 'mongoose';

const TeacherRequestSchema = new mongoose.Schema(
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
		image: {
			type: String,
			required: true,
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
