import type { Request, Response } from 'express';
import Workshop from '../models/Workshop';

export class WorkshopController {
  static getAllWorkshops = async (req: Request, res: Response) => {
    console.log('Todos los talleres');
  };
}
