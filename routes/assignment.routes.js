import { Router } from 'express';
import { submitAssignment } from '../controllers/assignment.controller.js';

const router = Router();

router.route('/:id/submit').post(submitAssignment);

export default router;
