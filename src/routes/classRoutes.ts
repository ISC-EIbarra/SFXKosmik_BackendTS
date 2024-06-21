import { Router } from 'express';
import { body, param } from 'express-validator';
import { ClassController } from '../controllers/ClassController';
import { handleInputErrors } from '../middleware/validation';
import { validateClassExist } from '../middleware/class';

const router = Router();

router.get('/', ClassController.getAllClasses);

router.post(
  '/',
  body('name').notEmpty().withMessage('El nombre de la clase es obligatoria'),
  body('description')
    .notEmpty()
    .withMessage('La descripción de la clase es obligatoria'),
  body('price').notEmpty().withMessage('El precio de la clase es obligatorio'),
  handleInputErrors,
  ClassController.createClass
);

router.get(
  '/:classId',
  validateClassExist,
  param('classId').isMongoId().withMessage('ID no válido'),
  handleInputErrors,
  ClassController.getClassById
);

router.put(
  '/:classId',
  validateClassExist,
  param('classId').isMongoId().withMessage('ID no válido'),
  body('name').notEmpty().withMessage('El nombre de la clase es obligatoria'),
  body('description')
    .notEmpty()
    .withMessage('La descripción de la clase es obligatoria'),
  body('price').notEmpty().withMessage('El precio de la clase es obligatorio'),
  handleInputErrors,
  ClassController.updateClass
);

router.delete(
  '/:classId',
  validateClassExist,
  param('classId').isMongoId().withMessage('ID no válido'),
  handleInputErrors,
  ClassController.deleteClass
);
export default router;
