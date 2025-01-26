import { Router } from 'express';
import {
	createTeacherRequest,
	getTeacherRequests,
} from '../controllers/teacher.controller.js';

const router = Router();

router.route('/').get(getTeacherRequests);
router.route('/request').post(createTeacherRequest);

export default router;
