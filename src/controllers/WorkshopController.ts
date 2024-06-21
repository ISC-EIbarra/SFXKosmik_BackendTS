import type { Request, Response } from 'express';
import Workshop from '../models/Workshop';

export class WorkshopController {
  static getAllWorkshops = async (req: Request, res: Response) => {
    try {
      const workshop = await Workshop.find({});
      res.json(workshop);
    } catch (error) {
      console.log();
    }
  };

  static createWorkshop = async (req: Request, res: Response) => {
    const workshop = new Workshop(req.body);
    try {
      workshop.save();
      res.send('Taller creado correctamente');
    } catch (error) {
      console.log(error);
    }
  };

  static getWorkshopById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const workshop = await Workshop.findById(id);

      if (!workshop) {
        const error = new Error('Taller no encontrado');
        res.status(404).json({ error: error.message });
      }
      res.json(workshop);
    } catch (error) {
      console.log(error);
    }
  };

  static updateWorkshop = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const workshop = await Workshop.findByIdAndUpdate(id, req.body);

      if (!workshop) {
        const error = new Error('Taller no encontrado');
        res.status(404).json({ error: error.message });
      }
      await workshop.save();
      res.json('Taller actualizado');
    } catch (error) {
      console.log(error);
    }
  };

  static deleteWorkshop = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const workshop = await Workshop.findById(id);
      if (!workshop) {
        const error = new Error('Taller no encontrado');
        res.status(404).json({ error: error.message });
      }

      await workshop.deleteOne();
      res.json('Taller eliminado');
    } catch (error) {
      console.log(error);
    }
  };
}
