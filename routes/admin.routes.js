import { Router } from 'express';
import { getTeacherRequests } from '../controllers/admin.controller.js';

const router = Router();

router.route('/teacher-requests').get(getTeacherRequests);

export default router;
