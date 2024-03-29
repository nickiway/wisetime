import { Types } from "mongoose";

export interface ILoading {
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export interface IError {
  error: string | null;
}

export interface IObjectId {
  _id: Types.ObjectId | string;
}
