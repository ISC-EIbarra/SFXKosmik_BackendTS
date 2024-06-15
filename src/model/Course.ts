import mongoose, { Schema, Document, Date } from 'mongoose';

export type CourseType = Document & {
  name: string;
  description: string;
  price: number;
  duration: number;
  startDate: Date;
  endDate: Date;
};

const CourseSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model<CourseType>('Course', CourseSchema);
export default Course;
