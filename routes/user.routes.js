import { Router } from 'express';
import {
	checkAdmin,
	checkUserRole,
	createUser,
	getUsers,
} from '../controllers/user.controller.js';

const router = Router();

router.route('/').get(getUsers).post(createUser);
router.route('/admin').get(checkAdmin);
router.route('/role').get(checkUserRole);

export default router;
