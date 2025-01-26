import { Router } from 'express';
import {
	checkAdmin,
	checkUserRole,
	createTeacherRequest,
	createUser,
	getTeachRequestByUserEmail,
	getUsers,
	resubmitTeacherRequest,
} from '../controllers/user.controller.js';

const router = Router();

router.route('/').get(getUsers).post(createUser);
router.route('/admin').get(checkAdmin);
router.route('/role').get(checkUserRole);
router
	.route('/teach-request')
	.post(createTeacherRequest)
	.patch(resubmitTeacherRequest)
	.get(getTeachRequestByUserEmail);

export default router;
