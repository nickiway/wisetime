import { UserCredentialsProvider } from "@/db/models/auth/UserCredentialsProvider";

export const getAccountByEmail = async (email: string) => {
  try {
    const account = await UserCredentialsProvider.findOne({ email });

    return account;
  } catch {
    return null;
  }
};
