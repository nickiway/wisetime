import type { NextAuthConfig } from "next-auth";
import { InferSchemaType } from "mongoose";
import bcryptjs from "bcryptjs";

import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

import { LoginSchema } from "./schemas";
import { getUserByEmail } from "@/data/user";
import { UserType } from "./db/models/auth/User";

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) return null;
        const { email, password } = validatedFields.data;

        const user = (await getUserByEmail(email)) as UserType | null;

        if (!user || !user.password) return null;

        const passwordsMatch = await bcryptjs.compare(password, user.password);

        if (passwordsMatch) return user;

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
