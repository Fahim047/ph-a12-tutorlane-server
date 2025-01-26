import mongoose from 'mongoose';
import TeacherRequest from '../models/teacherRequest.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createTeacherRequest = asyncHandler(async (req, res) => {
	const { userId, experience, title, category } = req.body;
	await TeacherRequest.create({
		user: new mongoose.Types.ObjectId(userId),
		experience,
		title,
		category,
	});
	return res.status(201).json({
		message: 'Teacher request sent successfully.',
	});
});
export const getTeacherRequests = asyncHandler(async (req, res) => {
	const teacherRequests = await TeacherRequest.find();
	console.log('hello');
	console.log(teacherRequests);
	return res.status(200).json(teacherRequests);
});
