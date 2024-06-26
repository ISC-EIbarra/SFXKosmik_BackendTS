import { Router } from 'express';
import { body, param } from 'express-validator';
import { WorkshopController } from '../controllers/WorkshopController';
import { handleInputErrors } from '../middleware/validation';
import { validateWorkshopExist } from '../middleware/workshop';

const router = Router();

router.get('/', WorkshopController.getAllWorkshops);

router.post(
  '/',
  body('name').notEmpty().withMessage('El nombre del taller es obligatoria'),
  body('description')
    .notEmpty()
    .withMessage('La descripción del taller es obligatoria'),
  body('price').notEmpty().withMessage('El precio del taller es obligatorio'),
  handleInputErrors,
  WorkshopController.createWorkshop
);

router.param('id', validateWorkshopExist);

router.get('/:id', handleInputErrors, WorkshopController.getWorkshopById);

router.put(
  '/:id',
  body('name').notEmpty().withMessage('El nombre del taller es obligatoria'),
  body('description')
    .notEmpty()
    .withMessage('La descripción del taller es obligatoria'),
  body('price').notEmpty().withMessage('El precio del taller es obligatorio'),
  handleInputErrors,
  WorkshopController.updateWorkshop
);

router.delete('/:id', handleInputErrors, WorkshopController.deleteWorkshop);

export default router;
