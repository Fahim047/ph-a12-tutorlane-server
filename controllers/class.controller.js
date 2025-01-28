import Class from '../models/class.model.js';
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
