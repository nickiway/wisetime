import type { UserCredentialsProviderType } from "@/db/models/auth/UserCredentialsProvider";
import type { UserType } from "@/db/models/auth/User";

import { User } from "@/db/models/auth/User";
import { UserCredentialsProvider } from "@/db/models/auth/UserCredentialsProvider";

export type getUserByEmailReturnType =
  | [UserType, UserCredentialsProviderType]
  | null;

export const getUserByEmail = async (
  email: string
): Promise<getUserByEmailReturnType> => {
  try {
    const userCredentials = await UserCredentialsProvider.findOne({ email });

    if (!userCredentials) return null;

    const user = await User.findOne({
      CredentialsProviderID: userCredentials._id,
    });

    if (!user) return null;

    return [user, userCredentials];
  } catch (error) {
    console.error("Error fetching user by email:", error);

    return null;
  }
};
