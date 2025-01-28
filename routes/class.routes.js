import { Router } from 'express';
import {
	getApprovedClasses,
	getAssignmentsByClassId,
	getClassDetailsById,
	getPopularClasses,
	processPayment,
	submitFeedback,
} from '../controllers/class.controller.js';

const router = Router();

router.route('/').get(getApprovedClasses);
router.route('/popular').get(getPopularClasses);
router.route('/:id').get(getClassDetailsById);
router.route('/:id/payment').post(processPayment);
router.route('/:id/feedback').post(submitFeedback);
router.route('/:id/assignments').get(getAssignmentsByClassId);

export default router;
