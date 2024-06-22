import type { Request, Response, NextFunction } from 'express';
import Workshop, { IWorkshop } from '../models/Workshop';

declare global {
  namespace Express {
    interface Request {
      workshop: IWorkshop;
    }
  }
}

export async function validateWorkshopExist(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const workshop = await Workshop.findById(id);

    if (!workshop) {
      const error = new Error('Taller no encontrado');
      return res.status(404).json({ error: error.message });
    }
    req.workshop = workshop;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error' });
  }
}
