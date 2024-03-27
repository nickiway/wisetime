import mongoose from "mongoose";
import { ITag } from "@/types/tag";

export type ProjectStatusType = "in progress" | "finished";

export interface IProject extends mongoose.Document {
  createdBy: mongoose.Types.ObjectId;
  title: String;
  status: ProjectStatusType;
  totalTime: number;
  tags: ITag[];

  tasks: {
    taskName: string;
  }[];
}
