"use server";

import * as z from "zod";
import * as bcryptjs from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { User } from "@/db/models/auth/User";
import { createVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validData = RegisterSchema.safeParse(values);

  if (!validData.success) {
    return { error: "Invalid data implemented" };
  }

  const { email, name, password } = validData.data;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return { error: "The user with this email already exists" };
    }

    const verificationToken = await createVerificationToken(email);
    const hashedPassword = await bcryptjs.hash(password, 10);
    const trimUsername = name.trim();

    await User.create({
      name: trimUsername,
      email,
      password: hashedPassword,
      emailVerified: null,
      image: null,
    });

    return { success: "Success! User was creted, validated your email" };
  } catch (error) {
    return { error: "Something went wrong. Try again." };
  }
};
