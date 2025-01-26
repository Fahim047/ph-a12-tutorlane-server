import { Router } from 'express';
import {
	createTeacherRequest,
	getTeacherRequests,
} from '../controllers/teacher.controller.js';

const router = Router();

router.route('/requests').get(getTeacherRequests);
router.route('/request').post(createTeacherRequest);

export default router;
