import { InferSchemaType } from "mongoose";
import { User } from "@/db/models/auth/User";

export const getUserByEmail = async (
  email: string
): Promise<InferSchemaType<typeof User> | null> => {
  try {
    const userCredentials = await User.findOne({ email });

    if (!userCredentials) return null;

    return userCredentials;
  } catch (error) {
    return null;
  }
};
