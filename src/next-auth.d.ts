import NextAuth, { type DefaultSession, type DefaultUser } from "next-auth";

export type ExntendedUser = DefaultSession["user"] & {
  isCredentials: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExntendedUser;
  }
}
