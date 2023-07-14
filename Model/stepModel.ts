import mongoose, { Schema } from "mongoose";

export interface Istep {
  assignedTask: string;
  assignedName: string;
  assignedPriority: string;
  assignedAvatar: string;
}

interface istepData extends Istep, mongoose.Document {}

const Stepmodel = new Schema<Istep>(
  {
    assignedName: {
      type: String,
    },
    assignedTask: {
      type: String,
      required: true,
      unique: true,
    },
    assignedPriority: {
      type: String,
    },
    assignedAvatar: {
      type: String,
    },
    
  },
  { timestamps: true }
);

export default mongoose.model<istepData>("Task", Stepmodel);
