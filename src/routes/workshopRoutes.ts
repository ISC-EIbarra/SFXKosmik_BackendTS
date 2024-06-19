import { Router } from 'express';
import { body, param } from 'express-validator';
import { WorkshopController } from '../controllers/WorkshopController';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

router.get('/', WorkshopController.getAllWorkshops);

export default router;
