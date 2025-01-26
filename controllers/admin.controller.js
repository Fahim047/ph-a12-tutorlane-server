import TeacherRequest from '../models/teacherRequest.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getTeacherRequests = asyncHandler(async (req, res) => {
	const teacherRequests = await TeacherRequest.find().populate('user');
	console.log(teacherRequests);
	return res.status(200).json(teacherRequests);
});
