import { Router } from 'express';
import {
	acceptTeacherRequest,
	getTeacherRequests,
	rejectTeacherRequest,
} from '../controllers/admin.controller.js';

const router = Router();

router.route('/teacher-requests').get(getTeacherRequests);
router.route('/teacher-requests/:id/reject').patch(rejectTeacherRequest);
router.route('/teacher-requests/:id/accept').patch(acceptTeacherRequest);

export default router;
