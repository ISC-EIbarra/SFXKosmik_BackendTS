import mongoose, { Schema, Document } from 'mongoose';

const workshopModality = {
  PRESENTIAL: 'presential',
} as const;

export type WorkshopModality =
  (typeof workshopModality)[keyof typeof workshopModality];

export interface IWorkshop extends Document {
  name: string;
  description: string;
  price: number;
  duration: number;
  startDate: Date;
  endDate: Date;
  modality: WorkshopModality;
}

export const WorkshopSchema: Schema = new Schema(
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
      enum: Object.values(workshopModality),
    },
  },
  { timestamps: true }
);

const Workshop = mongoose.model<IWorkshop>('Workshop', WorkshopSchema);
export default Workshop;
