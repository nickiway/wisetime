import { Types } from "mongoose";

export interface ILoading {
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export interface IError {
  error: string | null;
}

export type IObjectId = Types.ObjectId | string;
