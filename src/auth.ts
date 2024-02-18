import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

import clientPromise from "@/lib/mongodb";
import authConfig from "./auth.config";
import { User } from "@/db/models/auth/User";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  events: {
    async linkAccount({ user }) {
      await User.updateOne({ _id: user.id }, { emailVerified: new Date() });
    },
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  adapter: MongoDBAdapter(clientPromise, { databaseName: "wisetime" }),
  session: { strategy: "jwt" },
  ...authConfig,
});
