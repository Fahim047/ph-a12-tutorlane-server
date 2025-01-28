import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema(
	{
		assignment: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Assignment',
			required: true,
		},
		assignmentUrl: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Submission = mongoose.model('Submission', SubmissionSchema);
export default Submission;
