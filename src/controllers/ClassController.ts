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

  /*TODO: Change findByIdAndUpdate method */
  /*TODO: Change to new middleware structure */

  static updateClass = async (req: Request, res: Response) => {
    const { classId } = req.params;

    try {
      const classes = await Class.findByIdAndUpdate(classId, req.body);
      if (!classes) {
        const error = new Error('Clase no encontrada');
        res.status(404).json({ error: error.message });
      }
      await classes.save();
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
