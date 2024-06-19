import mongoose, { Schema, Document } from 'mongoose';

const classModality = {
  PRESENTIAL: 'presential',
  ONLINE: 'online',
} as const;

export type ClassModality = (typeof classModality)[keyof typeof classModality];

export interface IClass extends Document {
  name: string;
  description: string;
  price: number;
  duration: number;
  startDate: Date;
  endDate: Date;
  modality: ClassModality;
}

const ClassSchema: Schema = new Schema(
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
    },
    duration: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    endDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    modality: {
      type: String,
      enum: Object.values(classModality),
    },
  },
  { timestamps: true }
);

const Class = mongoose.model<IClass>('Class', ClassSchema);
export default Class;
