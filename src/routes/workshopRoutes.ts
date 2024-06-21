import { Router } from 'express';
import { body, param } from 'express-validator';
import { WorkshopController } from '../controllers/WorkshopController';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

router.get('/', WorkshopController.getAllWorkshops);

router.post(
  '/',
  body('name').notEmpty().withMessage('El nombre de la clase es obligatoria'),
  body('description')
    .notEmpty()
    .withMessage('La descripción de la clase es obligatoria'),
  body('price').notEmpty().withMessage('El precio de la clase es obligatorio'),
  handleInputErrors,
  WorkshopController.createWorkshop
);

router.get(
  '/:id',
  param('id').isMongoId().withMessage('ID no válido'),
  handleInputErrors,
  WorkshopController.getWorkshopById
);

router.put(
  '/:id',
  param('id').isMongoId().withMessage('ID no válido'),
  body('name').notEmpty().withMessage('El nombre de la clase es obligatoria'),
  body('description')
    .notEmpty()
    .withMessage('La descripción de la clase es obligatoria'),
  body('price').notEmpty().withMessage('El precio de la clase es obligatorio'),
  handleInputErrors,
  WorkshopController.updateWorkshop
);

router.delete(
  '/:id',
  param('id').isMongoId().withMessage('ID no válido'),
  handleInputErrors,
  WorkshopController.deleteWorkshop
);

export default router;
