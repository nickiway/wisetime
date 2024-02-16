"use server";

import * as z from "zod";
import * as bcryptjs from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { UserCredentialsProvider } from "@/db/models/auth/UserCredentialsProvider";
import { User } from "@/db/models/auth/User";
import { dbConnect } from "@/lib/dbConnect";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validData = RegisterSchema.safeParse(values);

  if (!validData.success) {
    return { error: "Invalid data implemented" };
  }

  const { email, name, password } = validData.data;
  const hashedPassword = await bcryptjs.hash(password, 10);

  try {
    await dbConnect();

    const userExists = await UserCredentialsProvider.findOne({ email });
    const trimUsername = name.trim();

    if (userExists) {
      return { error: "The user with this email already exists" };
    }

    const createdCredentialsUser = await UserCredentialsProvider.create({
      email,
      password: hashedPassword,
      emailConfirmed: false,
    });

    await User.create({
      name: trimUsername,
      CredentialsProviderID: createdCredentialsUser._id,
    });

    return { success: "User was created. Validate your email" };
  } catch (error) {
    return { error: "Something went wrong. Try again." };
  }
};
