import mongoose, { Schema, Document } from 'mongoose';

export type CourseType = Document & {
  courseName: string;
  price: number;
  description: string;
};

const CourseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

const Course = mongoose.model<CourseType>('Course', CourseSchema);
export default Course;
