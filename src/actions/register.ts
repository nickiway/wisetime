"use server";

import * as z from "zod";
import * as bcryptjs from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { UserCredentialsProvider } from "@/db/models/auth/UserCredentialsProvider";
import { User } from "@/db/models/auth/User";
import { connectDB } from "@/db/connectDB";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validData = RegisterSchema.safeParse(values);

  if (!validData.success) {
    return { error: "Invalid data implemented" };
  }

  const { email, username, password } = validData.data;

  const hashedPassword = await bcryptjs.hash(password, 10);

  try {
    await connectDB();

    const userExists = await UserCredentialsProvider.find({ email });

    if (userExists.length > 0) {
      return { error: "The user already exists" };
    }

    const createdCredentialsUser = await UserCredentialsProvider.create({
      email,
      password: hashedPassword,
      emailConfirmed: false,
    });

    await User.create({
      username,
      CredentialsProviderID: createdCredentialsUser._id,
    });

    return { success: "User was created. Validate your email" };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong. Try again." };
  }
};
