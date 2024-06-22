import type { Request, Response } from 'express';
import Class from '../models/Class';

export class ClassController {
  static getAllClasses = async (req: Request, res: Response) => {
    try {
      const classes = await Class.find({});
      res.json(classes);
    } catch (error) {
      console.log(error);
    }
  };

  static createClass = async (req: Request, res: Response) => {
    const classes = new Class(req.body);

    try {
      await classes.save();
      res.send('Clase creada correctamente');
    } catch (error) {
      console.log(error);
    }
  };

  static getClassById = async (req: Request, res: Response) => {
    try {
      res.json(req.classes);
    } catch (error) {
      console.log(error);
    }
  };

  static updateClass = async (req: Request, res: Response) => {
    try {
      req.classes.name = req.body.name;
      req.classes.description = req.body.description;
      req.classes.price = req.body.price;
      req.classes.duration = req.body.duration;
      req.classes.startDate = req.body.startDate;
      req.classes.endDate = req.body.endDate;
      req.classes.modality = req.body.modality;

      await req.classes.save();
      res.json('Clase actualizada');
    } catch (error) {
      console.log(error);
    }
  };

  static deleteClass = async (req: Request, res: Response) => {
    try {
      await req.classes.deleteOne();
      res.json('Clase eliminada');
    } catch (error) {
      console.log(error);
    }
  };
}
