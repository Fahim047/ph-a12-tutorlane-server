import { Router } from 'express';
import { getTeacherRequests } from '../controllers/teacher.controller.js';

const router = Router();

router.route('/requests').get(getTeacherRequests);

export default router;
