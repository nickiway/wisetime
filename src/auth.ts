import NextAuth from "next-auth";
import { ObjectId } from "mongoose";
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
  // TODO: fix the event to rewrite verified email for providers
  events: {
    async linkAccount({ user }) {
      User.updateOne({ _id: user._id }, { emailVerified: new Date() });
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
      console.log(token);
      return token;
    },
  },
  adapter: MongoDBAdapter(clientPromise, { databaseName: "wisetime" }),
  session: { strategy: "jwt" },
  ...authConfig,
});
