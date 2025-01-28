import Class from '../models/class.model.js';
import TeacherRequest from '../models/teacherRequest.model.js';
import User from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { removeMongoDBIdFromArray } from '../utils/mongo-utils.js';

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
	await teacherRequest.save();
	await User.findOneAndUpdate(
		{ email: teacherRequest.email },
		{ role: 'teacher' }
	);
	return res.status(200).json({ message: 'Teacher request accepted!' });
});
export const getAllClasses = asyncHandler(async (req, res) => {
	const classes = await Class.find().lean();
	return res.status(200).json(removeMongoDBIdFromArray(classes));
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
export const rejectClass = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const classToReject = await Class.findById(id);
	if (!classToReject) {
		return res.status(404).json({ error: 'Class not found' });
	}
	classToReject.status = 'rejected';
	await classToReject.save();
	return res.status(200).json({ message: 'Class rejected' });
});
export const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find().lean();
	return res.status(200).json(removeMongoDBIdFromArray(users));
});
export const makeAdmin = asyncHandler(async (req, res) => {
	const { id } = req.params;
	if (!id) {
		return res.status(400).json({ message: 'Send user id in params' });
	}
	const user = await User.findById(id);
	if (!user) {
		return res.status(404).json({ error: 'User not found' });
	}
	user.role = 'admin';
	await user.save();
	return res.status(200).json({ message: 'The selected user is now an admin' });
});
