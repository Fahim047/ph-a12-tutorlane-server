import mongoose from 'mongoose';

const EnrollmentSchema = new mongoose.Schema(
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
		enrollmentDate: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

const Enrollment = mongoose.model('Enrollment', EnrollmentSchema);
export default Enrollment;
