import TeacherRequest from '../models/teacherRequest.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getTeacherRequests = asyncHandler(async (req, res) => {
	const { email } = req.query;
	if (email) {
		const teacherRequests = await TeacherRequest.findOne({ user: email });
		return res.status(200).json(teacherRequests);
	}
	const teacherRequests = await TeacherRequest.find();
	return res.status(200).json(teacherRequests);
});
