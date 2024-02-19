import { InferSchemaType } from "mongoose";
import { User } from "@/db/models/auth/User";
import { dbConnect } from "@/lib/dbConnect";

export const getUserByEmail = async (
  email: string
): Promise<InferSchemaType<typeof User> | null> => {
  try {
    await dbConnect();
    const userCredentials = await User.findOne({ email });

    if (!userCredentials) return null;

    return userCredentials;
  } catch (error) {
    return null;
  }
};
