import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

import authConfig from "./auth.config";
import clientPromise from "@/lib/mongodb";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  ...authConfig,
});
