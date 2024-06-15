import { Router } from 'express';
import { CourseController } from '../controllers/courseControllers';

const router = Router();

router.get('/', CourseController.getAllCourses);

export default router;
