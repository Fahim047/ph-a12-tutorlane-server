import mongoose from 'mongoose';
const ClassSchema = new mongoose.Schema(
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
		price: {
			type: Number,
			required: true,
		},
		thumbnail: {
			type: String,
			required: true,
		},
		teacher: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		status: {
			type: String,
			enum: ['pending', 'approved', 'rejected'],
			default: 'pending',
		},
		totalEnrollments: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Class = mongoose.model('Class', ClassSchema);
export default Class;
