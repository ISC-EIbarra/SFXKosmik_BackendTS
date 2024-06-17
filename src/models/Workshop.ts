import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkshop extends Document {
  name: string;
  description: string;
  price: number;
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
  },
  { timestamps: true }
);

const Workshop = mongoose.model<IWorkshop>('Workshop', WorkshopSchema);
export default Workshop;
