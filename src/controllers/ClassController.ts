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
    const { id } = req.params;

    try {
      const classes = await Class.findById(id);
      if (!classes) {
        const error = new Error('Clase no encontrada');
        res.status(404).json({ error: error.message });
      }
      res.json(classes);
    } catch (error) {
      console.log(error);
    }
  };

  /*TODO: Change findByIdAndUpdate method */

  static updateClass = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const classes = await Class.findByIdAndUpdate(id, req.body);
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
    const { id } = req.params;

    try {
      const classes = await Class.findById(id);

      if (!classes) {
        const error = new Error('Clase no encontrada');
        res.status(404).json({ error: error.message });
      }

      await classes.deleteOne();
      res.json('Clase eliminada');
    } catch (error) {
      console.log(error);
    }
  };
}
