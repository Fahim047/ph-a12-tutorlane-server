import { Router } from 'express';
import {
	createClass,
	deleteTeacherClass,
	getTeacherClasses,
	updateTeacherClassDetails,
} from '../controllers/teacher.controller.js';

const router = Router();

router.route('/classes').post(createClass).get(getTeacherClasses);
router
	.route('/classes/:id')
	.patch(updateTeacherClassDetails)
	.delete(deleteTeacherClass);

export default router;
