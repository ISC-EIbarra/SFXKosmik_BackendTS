import type { Request, Response } from 'express';

export class CourseController {
  static getAllCourses = async (req: Request, res: Response) => {
    res.send('Todos los cursos');
  };
}
