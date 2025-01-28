import Assignment from '../models/assignment.model.js';
import Class from '../models/class.model.js';
import Enrollment from '../models/enrollment.model.js';
import Feedback from '../models/feedback.model.js';
import Payment from '../models/payment.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import {
	removeMongoDBIdFromArray,
	removeMongoDBIdFromObject,
} from '../utils/mongo-utils.js';

export const getApprovedClasses = asyncHandler(async (req, res) => {
	const classes = await Class.find({ status: 'approved' }).lean();
	return res.status(200).json(removeMongoDBIdFromArray(classes));
});
export const getClassDetailsById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const classDetails = await Class.findById(id).lean();
	if (!classDetails) {
		return res.status(404).json({ error: 'Class not found' });
	}
	return res.status(200).json(removeMongoDBIdFromObject(classDetails));
});
export const processPayment = asyncHandler(async (req, res) => {
	const { userId, classId, cardNumber, amount } = req.body;
	if (cardNumber !== '4242 4242 4242 4242') {
		return res.status(400).json({ message: 'Invalid card details' });
	}

	const payment = await Payment.create({
		student: userId,
		class: classId,
		amount,
		status: 'success',
		transactionId: crypto.randomUUID(),
	});

	await Enrollment.create({
		student: userId,
		class: classId,
		enrollmentDate: new Date(),
	});

	await Class.findByIdAndUpdate(classId, {
		$inc: {
			totalEnrollments: 1,
		},
	});
	res
		.status(200)
		.json({ message: 'Payment and enrollment successful', payment });
});
export const getAssignmentsByClassId = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const assignments = await Assignment.find({ class: id }).lean();
	return res.status(200).json(removeMongoDBIdFromArray(assignments));
});
export const getPopularClasses = asyncHandler(async (req, res) => {
	const popularClasses = await Class.find()
		.sort({ totalEnrollments: -1 })
		.limit(6);

	return res.status(200).json(popularClasses);
});
export const submitFeedback = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const { rating, feedback, userId } = req.body;
	const newFeedback = await Feedback.create({
		rating,
		feedback,
		student: userId,
		class: id,
	});
	return res.status(201).json({ message: 'Thank you for your feedback!' });
});
