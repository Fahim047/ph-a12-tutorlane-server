import Enrollment from '../models/enrollment.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getStudentEnrollments = asyncHandler(async (req, res) => {
	const { userId } = req.query;
	if (!userId) {
		return res.status(400).json({ message: 'User Id is required' });
	}

	const enrollments = await Enrollment.find({ student: userId })
		.populate('class')
		.lean()
		.select('class');

	const classes = enrollments.map((enrollment) => enrollment.class);

	return res.status(200).json(classes);
});
