import Assignment from '../models/assignment.model.js';
import Submission from '../models/submission.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const submitAssignment = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const { assignmentUrl } = req.body;
	const assignment = await Assignment.findById(id);
	if (!assignment) {
		return res.status(404).json({ error: 'Assignment not found!' });
	}
	await Submission.create({
		assignmentUrl,
		assignment: id,
	});
	assignment.totalSubmissions = assignment.totalSubmissions + 1;
	await assignment.save();
	return res.status(201).json({ message: 'Submission successful!' });
});
