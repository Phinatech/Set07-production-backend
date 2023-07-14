import mongoose, { Schema } from "mongoose";

export interface Itask {
  task: string;
  name: string;
  priority: string;
  avatar: string;
  steps?: {}[];
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
    steps:[
      {
        type:mongoose.Types.ObjectId,
        ref:"steps"
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model<itaskData>("tasks", Taskmodel);
