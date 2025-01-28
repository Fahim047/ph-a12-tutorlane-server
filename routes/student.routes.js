import { Router } from 'express';
import { getStudentEnrollments } from '../controllers/student.controller.js';

const router = Router();

router.route('/enrollments').get(getStudentEnrollments);

export default router;
