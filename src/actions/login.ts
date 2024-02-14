"use server";

import * as z from "zod";
import bcryptjs from "bcryptjs";

import { LoginSchema } from "@/schemas";
import { connectDB } from "@/db/connectDB";
import { User } from "@/db/models/auth/User";
import { UserCredentialsProvider } from "@/db/models/auth/UserCredentialsProvider";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validData = LoginSchema.safeParse(values);

  if (!validData.success) {
    return { error: "The data is not valid" };
  }

  const { email, password } = validData.data;

  try {
    await connectDB();

    const userCredentials = await UserCredentialsProvider.findOne({ email });

    if (!userCredentials) {
      return { error: "There is no user. Register your account" };
    }

    const isPasswordCorrect = await bcryptjs.compare(
      password,
      userCredentials.password
    );

    if (!userCredentials.emailConfirmed) {
      return { error: "To enter your account confirm your email" };
    }

    if (!isPasswordCorrect) {
      return { error: "Incorrect password or email. Please enter correct." };
    }

    const user = await User.findOne({
      CredentialsProviderID: userCredentials._id,
    });
  } catch (error) {
    return { error: "Something went wrong. Try again" };
  }

  return { success: "User Logged in successfully" };
};
