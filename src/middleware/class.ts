import type { Request, Response, NextFunction } from 'express';
import Class, { IClass } from '../models/Class';

declare global {
  namespace Express {
    interface Request {
      classes: IClass;
    }
  }
}

export async function validateClassExist(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { classId } = req.params;
    const classes = await Class.findById(classId);
    if (!classes) {
      const error = new Error('Clase no encontrada');
      res.status(404).json({ error: error.message });
    }
    req.classes = classes;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error' });
  }
}
