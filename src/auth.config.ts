import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";

import { LoginSchema } from "./schemas";
import { getAccountByEmail } from "@/data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getAccountByEmail(email);

          if (!user) {
            return null;
          }

          const isPasswordCorrect = await bcryptjs.compare(
            password,
            user.password
          );

          if (isPasswordCorrect) return user;

          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
