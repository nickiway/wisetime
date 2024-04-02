"use server";

import * as z from "zod";
import * as bcryptjs from "bcryptjs";
import type { IVerificationToken } from "@/db/models/auth/VerificationToken";

import { createVerificationToken } from "@/lib/tokens";
import { dbConnect } from "@/lib/dbConnect";
import { sendEmailVerification } from "@/lib/mail";

import { RegisterSchema } from "@/schemas";
import { User } from "@/db/models/auth/User";
import { Settings } from "@/db/models/Settings";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validData = RegisterSchema.safeParse(values);

  if (!validData.success) {
    return { error: "Invalid data implemented" };
  }

  const { email, name, password } = validData.data;

  try {
    await dbConnect();

    const userExists = await User.findOne({ email });

    if (userExists) {
      return { error: "The user with this email already exists" };
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const trimUsername = name.trim();

    const response = await User.create({
      name: trimUsername,
      email,
      password: hashedPassword,
      emailVerified: null,
      image: null,
    });

    const validationToken = (await createVerificationToken(
      email
    )) as IVerificationToken;

    await Settings.create({
      createdBy: response._id,
    });

    await sendEmailVerification(validationToken);

    return { success: "Success! User was creted, validated your email" };
  } catch (error) {
    return { error: "Something went wrong. Try again." };
  }
};
