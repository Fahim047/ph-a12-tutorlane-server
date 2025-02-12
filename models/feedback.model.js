import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema(
	{
		student: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		class: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Class',
			required: true,
		},
		rating: {
			type: Number,
			required: true,
			min: 1,
			max: 5,
		},
		feedback: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

const Feedback = mongoose.model('Feedback', FeedbackSchema);
export default Feedback;
