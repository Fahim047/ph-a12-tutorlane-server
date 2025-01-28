import { Router } from 'express';
import {
	acceptTeacherRequest,
	approveClass,
	getAllClasses,
	getAllUsers,
	getTeacherRequests,
	makeAdmin,
	rejectClass,
	rejectTeacherRequest,
} from '../controllers/admin.controller.js';

const router = Router();

router.route('/teacher-requests').get(getTeacherRequests);
router.route('/teacher-requests/:id/reject').patch(rejectTeacherRequest);
router.route('/teacher-requests/:id/accept').patch(acceptTeacherRequest);
router.route('/classes').get(getAllClasses);
router.route('/classes/:id/approve').patch(approveClass);
router.route('/classes/:id/reject').patch(rejectClass);
router.route('/users').get(getAllUsers);
router.route('/users/:id/make-admin').patch(makeAdmin);

export default router;
