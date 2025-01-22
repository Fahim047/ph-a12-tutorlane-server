import mongoose from 'mongoose';

const AssignmentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
		},
		deadline: {
			type: Date,
			required: true,
		},
		class: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Class',
			required: true,
		},
		totalSubmissions: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Assignment = mongoose.model('Assignment', AssignmentSchema);
export default Assignment;
