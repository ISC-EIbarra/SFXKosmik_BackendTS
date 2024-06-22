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
    try {
      res.json(req.workshop);
    } catch (error) {
      console.log(error);
    }
  };

  static updateWorkshop = async (req: Request, res: Response) => {
    try {
      req.workshop.name = req.body.name;
      req.workshop.description = req.body.description;
      req.workshop.price = req.body.price;
      req.workshop.duration = req.body.duration;
      req.workshop.startDate = req.body.startDate;
      req.workshop.endDate = req.body.endDate;
      req.workshop.modality = req.body.modality;

      await req.workshop.save();
      res.json('Taller actualizado');
    } catch (error) {
      console.log(error);
    }
  };

  static deleteWorkshop = async (req: Request, res: Response) => {
    try {
      await req.workshop.deleteOne();
      res.json('Taller eliminado');
    } catch (error) {
      console.log(error);
    }
  };
}
