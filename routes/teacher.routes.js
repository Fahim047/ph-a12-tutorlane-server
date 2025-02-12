import { Router } from 'express';
import {
	createAssignment,
	createClass,
	deleteTeacherClass,
	getTeacherClasses,
	getTotalSubmissions,
	updateTeacherClassDetails,
} from '../controllers/teacher.controller.js';

const router = Router();

router.route('/classes').post(createClass).get(getTeacherClasses);
router
	.route('/classes/:id')
	.patch(updateTeacherClassDetails)
	.delete(deleteTeacherClass);
router.route('/classes/:id/assignments').post(createAssignment);
router.route('/totalSubmissions').get(getTotalSubmissions);

export default router;
