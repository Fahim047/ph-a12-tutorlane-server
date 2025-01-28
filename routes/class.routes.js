import { Router } from 'express';
import {
	getApprovedClasses,
	getClassDetailsById,
} from '../controllers/class.controller.js';

const router = Router();

router.route('/').get(getApprovedClasses);
router.route('/:id').get(getClassDetailsById);

export default router;
