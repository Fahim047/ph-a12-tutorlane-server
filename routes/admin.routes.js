import { Router } from 'express';
import {
	acceptTeacherRequest,
	approveClass,
	getAllClasses,
	getTeacherRequests,
	rejectTeacherRequest,
} from '../controllers/admin.controller.js';

const router = Router();

router.route('/teacher-requests').get(getTeacherRequests);
router.route('/teacher-requests/:id/reject').patch(rejectTeacherRequest);
router.route('/teacher-requests/:id/accept').patch(acceptTeacherRequest);
router.route('/classes').get(getAllClasses);
router.route('/classes/:id/approve').patch(approveClass);

export default router;
