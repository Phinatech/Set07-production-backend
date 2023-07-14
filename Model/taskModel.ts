import mongoose, { Schema } from "mongoose";

export interface Itask {
  task: string;
  name: string;
  priority: string;
  avatar: string;
}

interface itaskData extends Itask, mongoose.Document {}

const Taskmodel = new Schema(
  {
    name: {
      type: String,
     
    },
    task: {
      type: String,
      required: true,
      unique: true,
    },
    priority: {
      type: String,
      
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<itaskData>("Task", Taskmodel);
