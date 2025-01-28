import Class from '../models/class.model.js';
import Enrollment from '../models/enrollment.model.js';
import TeacherRequest from '../models/teacherRequest.model.js';
import User from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createUser = asyncHandler(async (req, res) => {
	const { email, name, photoURL } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) {
		return res
			.status(200)
			.json({ message: 'User already exists and not saved in db this time!' });
	}
	const user = await User.create({
		email,
		name,
		photoURL,
	});
	return res.status(201).json({
		message: 'User data saved to Database.',
	});
});
export const getUsers = asyncHandler(async (req, res) => {
	const { email } = req.query;
	if (email) {
		const user = await User.findOne({ email });
		return res.status(200).json(user);
	} else {
		const users = await User.find();
		return res.status(200).json(users);
	}
});
export const checkAdmin = asyncHandler(async (req, res) => {
	const { email } = req.query;
	if (!email) {
		return res.status(400).json({ message: 'Email is required' });
	}
	const user = await User.findOne({ email });
	if (user && user.role === 'admin') {
		return res.json({ isAdmin: true });
	}
	return res.json({ isAdmin: false });
});
export const checkUserRole = asyncHandler(async (req, res) => {
	const { email } = req.query;
	if (!email) {
		return res.status(400).json({ message: 'Email is required' });
	}

	const user = await User.findOne({ email });
	if (user) {
		return res.json({ role: user.role });
	}

	return res.status(404).json({ message: 'User not found' });
});
export const createTeacherRequest = asyncHandler(async (req, res) => {
	const { name, email, image, experience, title, category } = req.body;
	await TeacherRequest.create({
		name,
		email,
		image,
		experience,
		title,
		category,
	});
	return res.status(201).json({
		message: 'Teacher request sent successfully.',
	});
});
export const resubmitTeacherRequest = asyncHandler(async (req, res) => {
	const { email, experience, title, category } = req.body;
	const updatedTeacherRequest = await TeacherRequest.findOneAndUpdate(
		{ email },
		{
			experience,
			title,
			category,
			status: 'pending',
		}
	);
	return res.status(200).json(updatedTeacherRequest);
});
export const getTeachRequestByUserId = asyncHandler(async (req, res) => {
	const { userId } = req.query;
	if (!id) {
		return res.status(400).json({ message: 'User ID is required' });
	}
	const teachRequest = await TeacherRequest.findOne({ user: userId });
	return res.status(200).json(teachRequest);
});
export const getTeachRequestByUserEmail = asyncHandler(async (req, res) => {
	const { email } = req.query;
	if (!email) {
		return res.status(400).json({ message: 'User email is required' });
	}
	const teachRequest = await TeacherRequest.findOne({ email });
	return res.status(200).json(teachRequest);
});
export const getWebsiteStats = asyncHandler(async (req, res) => {
	console.log('heelo');
	const totalUsers = await User.countDocuments();
	const classes = await Class.find({ status: 'approved' });
	const totalEnrollments = await Enrollment.countDocuments();
	const stats = {
		totalUsers,
		totalClasses: classes.length,
		totalEnrollments,
	};
	return res.status(200).json(stats);
});
