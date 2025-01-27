import Class from '../models/class.model.js';
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
export const createClass = asyncHandler(async (req, res) => {
	const { title, description, price, thumbnail, teacherName, teacherEmail } =
		req.body;
	await Class.create({
		title,
		description,
		price,
		thumbnail,
		teacherName,
		teacherEmail,
	});
	return res.status(201).json({
		message: 'Class created successfully.',
	});
});
export const getTeacherClasses = asyncHandler(async (req, res) => {
	const { email } = req.query;
	const classes = await Class.find({ teacherEmail: email }).lean();
	return res.status(200).json(classes);
});
export const updateTeacherClassDetails = asyncHandler(async (req, res) => {
	const { id } = req.params;
	console.log(id, req.body);
	const { title, description, price, thumbnail } = req.body;
	await Class.findByIdAndUpdate(id, { title, description, price, thumbnail });
	return res.status(200).json({
		message: 'Class updated successfully.',
	});
});
export const deleteTeacherClass = asyncHandler(async (req, res) => {
	const { id } = req.params;
	await Class.findByIdAndDelete(id);
	return res.status(200).json({ message: 'Class deleted successfully' });
});
