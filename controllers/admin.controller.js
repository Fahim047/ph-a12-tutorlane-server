import Class from '../models/class.model.js';
import TeacherRequest from '../models/teacherRequest.model.js';
import User from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getTeacherRequests = asyncHandler(async (req, res) => {
	const teacherRequests = await TeacherRequest.find().lean();
	return res.status(200).json(teacherRequests);
});
export const rejectTeacherRequest = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const teacherRequest = await TeacherRequest.findById(id);
	if (!teacherRequest) {
		return res.status(404).json({ error: 'Teacher request not found' });
	}
	teacherRequest.status = 'rejected';
	await teacherRequest.save();
	return res.status(200).json({ message: 'Teacher request rejected' });
});
export const acceptTeacherRequest = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const teacherRequest = await TeacherRequest.findById(id);
	if (!teacherRequest) {
		return res.status(404).json({ error: 'Teacher request not found' });
	}
	teacherRequest.status = 'accepted';
	await User.findOneAndUpdate(
		{ email: teacherRequest.email },
		{ role: 'teacher' }
	);
	return res.status(200).json({ message: 'Teacher request accepted!' });
});
export const getAllClasses = asyncHandler(async (req, res) => {
	const classes = await Class.find().lean();
	return res.status(200).json(classes);
});
export const approveClass = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const classToApprove = await Class.findById(id);
	if (!classToApprove) {
		return res.status(404).json({ error: 'Class not found' });
	}
	classToApprove.status = 'approved';
	await classToApprove.save();
	return res.status(200).json({ message: 'Class approved' });
});
