"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { UserType } from "@/db/models/auth/User";
import { IVerificationToken } from "@/db/models/auth/VerificationToken";

import { createVerificationToken } from "@/lib/tokens";
import { dbConnect } from "@/lib/dbConnect";
import { sendEmailVerification } from "@/lib/mail";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { getUserByEmail } from "@/data/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validData = LoginSchema.safeParse(values);

  if (!validData.success) {
    return { error: "The data is not valid" };
  }

  const { email, password } = validData.data;

  // Checking if user validated the email
  try {
    await dbConnect();

    const user = (await getUserByEmail(email)) as UserType;

    if (!user.emailVerified) {
      const validationToken = (await createVerificationToken(
        email
      )) as IVerificationToken;
      await sendEmailVerification(validationToken);

      return { success: "Email was resent, confirm your email" };
    }
  } catch (error) {
    return { error: "Something went wrong" };
  }

  // Signing in with credentials provider
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };

        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }

  return { success: "User Logged in successfully" };
};
