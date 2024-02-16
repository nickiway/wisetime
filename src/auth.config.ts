import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";

import { LoginSchema } from "./schemas";
import { getUserByEmail, getUserByEmailReturnType } from "@/data/user";
import { UserCredentialsProviderType } from "./db/models/auth/UserCredentialsProvider";
import { UserType } from "./db/models/auth/User";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const [user, userCredentials] = (await getUserByEmail(email)) as [
            UserType,
            UserCredentialsProviderType
          ];

          if (!userCredentials || !userCredentials.password) return null;

          const passwordsMatch = await bcryptjs.compare(
            password,
            userCredentials.password
          );

          const id: string = (user as any)._id;

          if (passwordsMatch)
            return {
              id,
              email: userCredentials.email,
              name: user.name,
            };
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
