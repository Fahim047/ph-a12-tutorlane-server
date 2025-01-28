import { Router } from 'express';
import {
	getApprovedClasses,
	getAssignmentsByClassId,
	getClassDetailsById,
	processPayment,
} from '../controllers/class.controller.js';

const router = Router();

router.route('/').get(getApprovedClasses);
router.route('/:id').get(getClassDetailsById);
router.route('/:id/payment').post(processPayment);
router.route('/:id/assignments').get(getAssignmentsByClassId);
export default router;
